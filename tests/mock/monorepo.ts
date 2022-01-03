import os from "os";
import fs from "fs";
import path from "path";
import execa from "execa";

export class Monorepo {
  static tmpdir = os.tmpdir();
  static yarnCache = path.join(Monorepo.tmpdir, "yarn-cache-");

  root: string;

  get nodeModulesPath() {
    return path.join(this.root, "node_modules");
  }

  constructor(private name: string) {
    this.root = fs.mkdtempSync(path.join(Monorepo.tmpdir, `lage-monorepo-${name}-`));
  }

  init() {
    const options = { cwd: this.root };
    execa.sync("git", ["init"], options);
    execa.sync("git", ["config", "user.email", "you@example.com"], options);
    execa.sync("git", ["config", "user.name", "test user"], options);
    execa.sync("git", ["config", "commit.gpgsign", "false"], options);
    this.generateRepoFiles();
  }

  install() {
    if (!fs.existsSync(this.nodeModulesPath)) {
      fs.mkdirSync(this.nodeModulesPath, { recursive: true });
    }

    // pretends to perform a npm install of lage
    const lagePath = path.join(this.nodeModulesPath, "lage");

    if (!fs.existsSync(lagePath)) {
      fs.symlinkSync(path.join(__dirname, "..", ".."), lagePath, "junction");
    }
  }

  /**
   * Simulates a "yarn" call by linking internal packages and generates a yarn.lock file
   */
  linkPackages() {
    const pkgs = fs.readdirSync(path.join(this.root, "packages"));

    if (!fs.existsSync(this.nodeModulesPath)) {
      fs.mkdirSync(this.nodeModulesPath, { recursive: true });
    }

    let yarnYaml = `# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n# yarn lockfile v1\n`;

    for (const pkg of pkgs) {
      fs.symlinkSync(path.join(this.root, "packages", pkg), path.join(this.nodeModulesPath, pkg), "junction");

      const pkgJson = JSON.parse(fs.readFileSync(path.join(this.root, "packages", pkg, "package.json"), "utf-8"));
      const deps = pkgJson.dependencies;

      yarnYaml += `"${pkg}@^${pkgJson.version}":\n  version "${pkgJson.version}"\n`;

      if (deps) {
        yarnYaml += `  dependencies:`;
        for (const dep of Object.keys(deps)) {
          yarnYaml += `    "${dep}" "0.1.0"`;
        }
      }
    }

    this.commitFiles({ "yarn.lock": yarnYaml });
  }

  generateRepoFiles() {
    const lagePath = path.join(this.nodeModulesPath, "lage/lib/cli");

    this.commitFiles({
      "package.json": {
        name: this.name,
        version: "0.1.0",
        private: true,
        workspaces: ["packages/*"],
        scripts: {
          bundle: `node "${lagePath}" bundle --reporter json --log-level silly`,
          transpile: `node "${lagePath}" transpile --reporter json --log-level silly`,
          build: `node "${lagePath}" build --reporter json --log-level silly`,
          test: `node "${lagePath}" test --reporter json --log-level silly`,
          lint: `node "${lagePath}" lint --reporter json --log-level silly`,
        },
        devDependencies: {
          lage: path.resolve(__dirname, "..", ".."),
        },
      },
      "lage.config.js": `module.exports = {
        pipeline: {
          build: ['^build'],
          test: ['build'],
          lint: []
        }
      };`,
      ".gitignore": "node_modules",
    });
  }

  setLageConfig(contents: string) {
    this.commitFiles({
      "lage.config.js": contents,
    });
  }

  addPackage(name: string, internalDeps: string[] = [], scripts?: { [script: string]: string }) {
    return this.commitFiles({
      [`packages/${name}/build.js`]: `console.log('building ${name}');`,
      [`packages/${name}/test.js`]: `console.log('building ${name}');`,
      [`packages/${name}/lint.js`]: `console.log('linting ${name}');`,
      [`packages/${name}/package.json`]: {
        name,
        version: "0.1.0",
        scripts: scripts || {
          build: "node ./build.js",
          test: "node ./test.js",
          lint: "node ./lint.js",
        },
        dependencies: {
          ...(internalDeps &&
            internalDeps.reduce((deps, dep) => {
              return { ...deps, [dep]: "*" };
            }, {})),
        },
      },
    });
  }

  clone(origin: string) {
    return execa.sync("git", ["clone", origin], { cwd: this.root });
  }

  push(origin: string, branch: string) {
    return execa.sync("git", ["push", origin, branch], { cwd: this.root });
  }

  commitFiles(files: { [name: string]: string | Object }, options: { executable?: boolean } = {}) {
    for (const [file, contents] of Object.entries(files)) {
      let out = "";
      if (typeof contents !== "string") {
        out = JSON.stringify(contents, null, 2);
      } else {
        out = contents;
      }

      const fullPath = path.join(this.root, file);

      if (!fs.existsSync(path.dirname(fullPath))) {
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      }

      fs.writeFileSync(fullPath, out);

      if (options.executable) {
        fs.chmodSync(path.join(this.root, file), fs.constants.S_IXUSR | fs.constants.S_IRUSR | fs.constants.S_IROTH);
      }
    }

    execa.sync("git", ["add", ...Object.keys(files)], {
      cwd: this.root,
    });

    execa.sync("git", ["commit", "-m", "commit files"], { cwd: this.root });
  }

  run(command: string, args?: string[]) {
    return execa.sync("yarn", [command, ...(args || [])], {
      cwd: this.root,
    });
  }

  cleanup() {
    fs.rmdirSync(this.root, { recursive: true });
  }
}
