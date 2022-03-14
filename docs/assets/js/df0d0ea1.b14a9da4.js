"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[686],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={sidebar_position:6,title:"Pipeline"},p="Pipelining package tasks",s={unversionedId:"Guide/pipeline",id:"Guide/pipeline",title:"Pipeline",description:"In the traditional monorepo task runners, like lerna, each npm lifecycle script like build or test is run topologically or in parallel individually. Depending on the graph of the packages, CPU cores are left idle wasting developer time.",source:"@site/docs/Guide/pipeline.md",sourceDirName:"Guide",slug:"/Guide/pipeline",permalink:"/lage/docs/Guide/pipeline",editUrl:"https://github.com/microsoft/lage/docs/Guide/pipeline.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Pipeline"},sidebar:"tutorialSidebar",previous:{title:"Remote Cache",permalink:"/lage/docs/Guide/remote-cache"},next:{title:"Profiling `lage`",permalink:"/lage/docs/Guide/profile"}},d=[{value:"Defining a pipeline",id:"defining-a-pipeline",children:[{value:"Task dependency format",id:"task-dependency-format",children:[],level:3},{value:"Topological dependency",id:"topological-dependency",children:[],level:3},{value:"Empty dependency list",id:"empty-dependency-list",children:[],level:3},{value:"Tasks that are in the <code>pipeline</code> but not in SOME <code>package.json</code>",id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson",children:[],level:3},{value:"Pipeline tasks are the only ones that <code>lage</code> knows about",id:"pipeline-tasks-are-the-only-ones-that-lage-knows-about",children:[],level:3},{value:"Specific package tasks",id:"specific-package-tasks",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pipelining-package-tasks"},"Pipelining package tasks"),(0,o.kt)("p",null,"In the traditional monorepo task runners, like ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna"),", each npm lifecycle script like ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," is run topologically or in parallel individually. Depending on the graph of the packages, CPU cores are left idle wasting developer time."),(0,o.kt)("p",null,"Futhermore, the developer is expected to keep track of an ",(0,o.kt)("strong",{parentName:"p"},"implicit")," graph of the tasks. For example, the developer is expected to understand that perhaps the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," task is only available after ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," has completed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lage")," gives developers a way to specify these relationships ",(0,o.kt)("strong",{parentName:"p"},"explicitly"),". The advantage here are two fold. First, incoming new developers can look at ",(0,o.kt)("inlineCode",{parentName:"p"},"lage.config.js")," and understand how tasks are related. Second, ",(0,o.kt)("inlineCode",{parentName:"p"},"lage")," can use this explicit declaration to perform an optimized build based on the abundant availability of multi-core processors."),(0,o.kt)("h2",{id:"defining-a-pipeline"},"Defining a pipeline"),(0,o.kt)("p",null,"To define the task dependency graph, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"lage.config.js"),". For example, this is the default generated configuration when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx lage init"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n    lint: [],\n  },\n};\n')),(0,o.kt)("h3",{id:"task-dependency-format"},"Task dependency format"),(0,o.kt)("p",null,"What you are declaring here in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," object of the configuration is a dependency graph of tasks. The ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," task above depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," task of the same package. The dependencies of ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," is an array, so it actually can depend on multiple tasks. This may be more relevant in a more complex monorepo."),(0,o.kt)("h3",{id:"topological-dependency"},"Topological dependency"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"^")," symbol explicitly declares that the task has a package-topological dependency on another task. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," package depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lage build")," will guarantee that the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," task of ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," will happen before ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," task."),(0,o.kt)("h3",{id:"empty-dependency-list"},"Empty dependency list"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," task above has NO dependencies. This means that it can start whenever it can!"),(0,o.kt)("h3",{id:"tasks-that-are-in-the-pipeline-but-not-in-some-packagejson"},"Tasks that are in the ",(0,o.kt)("inlineCode",{parentName:"h3"},"pipeline")," but not in SOME ",(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,o.kt)("p",null,"Sometimes tasks declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," are not present in all packages' ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," files. ",(0,o.kt)("inlineCode",{parentName:"p"},"lage")," will automatically ignore those. No problem!"),(0,o.kt)("h3",{id:"pipeline-tasks-are-the-only-ones-that-lage-knows-about"},"Pipeline tasks are the only ones that ",(0,o.kt)("inlineCode",{parentName:"h3"},"lage")," knows about"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lage")," will only account for tasks declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pipeline")," configuration. If it's not listed there, ",(0,o.kt)("inlineCode",{parentName:"p"},"lage")," will not know how to run them."),(0,o.kt)("h3",{id:"specific-package-tasks"},"Specific package tasks"),(0,o.kt)("p",null,"Sometimes it becomes necessary to manually place a package-task dependency on another package-task. This can occur especially in repos that are just coming off of a lerna or rush repository where the tasks are traditionally run in separate phases. Sometimes assumptions were made those repositories that are not expressable in the simple task pipeline configuration as seen above. For thoes cases, simply place those alongside with the rest of the pipeline configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n    lint: [],\n    "foo#build": ["bar#test"],\n  },\n};\n')),(0,o.kt)("p",null,"In this example, we illustrate a ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," script of ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," package depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," script of ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),". The syntax is ",(0,o.kt)("inlineCode",{parentName:"p"},"[package]#[task]"),"."),(0,o.kt)("p",null,"This seems like it goes against the ",(0,o.kt)("inlineCode",{parentName:"p"},'test: ["build"]'),", but it does not. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," scripts does not have a topological dependency, it theoretically can get triggered anytime its own package's ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," script has finished! The general guidance is to get rid of these specific package-task to package-task dependency in the pipeline as quickly as possible so the builds can be optimized better."))}u.isMDXComponent=!0}}]);