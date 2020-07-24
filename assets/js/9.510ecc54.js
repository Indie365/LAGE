(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(e,a,t){"use strict";t.r(a);var s=t(25),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cli-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-usage"}},[e._v("#")]),e._v(" CLI usage")]),e._v(" "),t("p",[t("code",[e._v("lage")]),e._v(" is meant to be run as a CLI. After installing "),t("code",[e._v("lage")]),e._v(" inside the repository or globally, you can run the npm scripts from your repository like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ lage build\n")])])]),t("h2",{attrs:{id:"caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[e._v("#")]),e._v(" Caching")]),e._v(" "),t("p",[t("code",[e._v("lage")]),e._v(" by default will skip tasks that it has already done recently. As long as the source file and the command called to "),t("code",[e._v("lage")]),e._v(" has not changed, those packages will be skipped. Sometimes, this incremental behavior is not desired. You can override the caching behavior by using the "),t("code",[e._v("no-cache")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ lage build --no-cache\n")])])]),t("h2",{attrs:{id:"verbose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbose"}},[e._v("#")]),e._v(" Verbose")]),e._v(" "),t("p",[t("code",[e._v("lage")]),e._v(" by default will hide the output from successful tasks. If you want to see the output as they are being generated, call "),t("code",[e._v("lage")]),e._v(" with the "),t("code",[e._v("verbose")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ lage build --verbose\n")])])]),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("h3",{attrs:{id:"clioptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clioptions"}},[e._v("#")]),e._v(" CliOptions")]),e._v(" "),t("h4",{attrs:{id:"cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[e._v("#")]),e._v(" cache")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("default: true, --no-cache will skip fetching cache or saving cache")]),e._v(" "),t("p",[t("code",[e._v("lage")]),e._v(" by default will skip tasks that it has already done recently. As long as the source file and the command called to "),t("code",[e._v("lage")]),e._v(" has not changed, those packages will be skipped. Sometimes, this incremental behavior is not desired. You can override the caching behavior by using the "),t("code",[e._v("no-cache")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ lage build --no-cache\n")])])]),t("h4",{attrs:{id:"command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" command")]),e._v(" "),t("p",[t("em",[e._v("type: string[]")])]),e._v(" "),t("p",[e._v("positional arguments that specify which tasks to run")]),e._v(" "),t("p",[e._v("Commands are collected as an array like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lage build test bundle\n")])])]),t("p",[e._v("This will tell "),t("code",[e._v("lage")]),e._v(" to execute all three commands against all the packages")]),e._v(" "),t("h4",{attrs:{id:"concurrency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrency"}},[e._v("#")]),e._v(" concurrency")]),e._v(" "),t("p",[t("em",[e._v("type: number")])]),e._v(" "),t("p",[e._v("number of parallel tasks that can be run at a time")]),e._v(" "),t("p",[e._v("By default, this is the number of CPU cores detected by "),t("code",[e._v("os.cpus().length")]),e._v(",\nchange to any number to achieve desired concurrency.")]),e._v(" "),t("h4",{attrs:{id:"deps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deps"}},[e._v("#")]),e._v(" deps")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("default: true, --no-deps will skip dependent packages and tasks")]),e._v(" "),t("p",[e._v("This has the semantic of running tasks up to what is specified in the command line\nsuch as with "),t("code",[e._v("--scope")]),e._v(" or "),t("code",[e._v("--since")])]),e._v(" "),t("h4",{attrs:{id:"ignore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ignore"}},[e._v("#")]),e._v(" ignore")]),e._v(" "),t("p",[t("em",[e._v("type: string[]")])]),e._v(" "),t("p",[e._v("Ignores certain files when calculating the scope with "),t("code",[e._v("--since")])]),e._v(" "),t("p",[e._v("Certain files might need to be changed during the preparation of a build\njob. In that situation, "),t("code",[e._v("lage")]),e._v(" can ignore those files when calculating what\nhas changed with the "),t("code",[e._v("--since")]),e._v(" flag.")]),e._v(" "),t("h4",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" node")]),e._v(" "),t("p",[t("em",[e._v("type: string[]")])]),e._v(" "),t("p",[e._v("node arguments to be passed into the npm lifecycle scripts")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("p",[e._v("To increase the amount of memory to use for the npm tasks")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('lage --node="--max_old_space_size=8192"\n')])])]),t("h4",{attrs:{id:"only"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#only"}},[e._v("#")]),e._v(" only")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("only run the commands, do not consider dependent tasks")]),e._v(" "),t("p",[e._v("For example, if "),t("code",[e._v("test")]),e._v(" depends on "),t("code",[e._v("build")]),e._v(", "),t("code",[e._v("lage")]),e._v(" will always run "),t("code",[e._v("build")]),e._v(" before "),t("code",[e._v("test")]),e._v(".")]),e._v(" "),t("p",[e._v("You can type this "),t("code",[e._v("lage test --only")]),e._v(" to skip running "),t("code",[e._v("build")]),e._v(" task altogether. This is much\nlike what is the default of "),t("code",[e._v("lerna")]),e._v(" or "),t("code",[e._v("rush")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[e._v("#")]),e._v(" profile")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("Creates a flamegraph-profile JSON for Chromium-based devtool")]),e._v(" "),t("p",[e._v("Pay attention to the output summary to find the location of the JSON file.")]),e._v(" "),t("h4",{attrs:{id:"resetcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resetcache"}},[e._v("#")]),e._v(" resetCache")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("--reset-cache will skip fetching cache, but will overwrite cache")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lage --reset-cache\n")])])]),t("p",[e._v("Will always run the tasks, while reseting the saved cache")]),e._v(" "),t("h4",{attrs:{id:"scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" scope")]),e._v(" "),t("p",[t("em",[e._v("type: string[]")])]),e._v(" "),t("p",[e._v("Which specific packages to consider as in scope for the run")]),e._v(" "),t("p",[e._v('This act as the "entry point" of the package-task graph traversal. To prevent\nrunning tasks for dependent package, use the '),t("code",[e._v("--no-deps")]),e._v(" flag in combination.")]),e._v(" "),t("p",[e._v("You can specify multiple scoped packages like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lage build --scope foo --scope bar --scope baz\n")])])]),t("h4",{attrs:{id:"since"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#since"}},[e._v("#")]),e._v(" since")]),e._v(" "),t("p",[t("em",[e._v("type: string")])]),e._v(" "),t("p",[e._v("calculate which packages are in scope based on changed packages since a mergebase")]),e._v(" "),t("p",[e._v("This uses the "),t("code",[e._v("git diff ${target_branch}...")]),e._v(" mechanism to identify which packages\nhave changed. There is an assumption of all the input files for a package exist\ninside their respective package folders.")]),e._v(" "),t("h4",{attrs:{id:"verbose-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbose-2"}},[e._v("#")]),e._v(" verbose")]),e._v(" "),t("p",[t("em",[e._v("type: boolean")])]),e._v(" "),t("p",[e._v("Verbose mode, turns on all logging")]),e._v(" "),t("p",[t("code",[e._v("lage")]),e._v(" by default will hide the output from successful tasks. If you want to see the\noutput as they are being generated, call "),t("code",[e._v("lage")]),e._v(" with the "),t("code",[e._v("verbose")]),e._v(" argument.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ lage build --verbose\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);