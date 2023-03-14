"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,v=d["".concat(s,".").concat(k)]||d[k]||m[k]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},165:(e,t,a)=>{a.d(t,{C:()=>r});var n=a(7294);const r=e=>{const{children:t}=e;return n.createElement("span",{className:"inline-block px-3 py-1 text-xs font-semibold leading-tight text-gray-800 bg-gray-200 rounded-full mb-8"},t)}},1523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(165);const l={sidebar_position:11,title:"Migration Guide"},i="Migration Guide",s={unversionedId:"Cookbook/migration",id:"Cookbook/migration",title:"Migration Guide",description:"v1.x -> v2.1",source:"@site/docs/Cookbook/migration.mdx",sourceDirName:"Cookbook",slug:"/Cookbook/migration",permalink:"/lage/docs/Cookbook/migration",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Cookbook/migration.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Migration Guide"},sidebar:"tutorialSidebar",previous:{title:"Contributor License Agreement",permalink:"/lage/docs/Contributing/contribution-guide"},next:{title:"Make Jest Fast",permalink:"/lage/docs/Cookbook/make-jest-fast"}},p={},c=[{value:"v1.x -&gt; v2.1",id:"v1x---v21",level:2},{value:"New Features",id:"new-features",level:3},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Using <code>lage</code> v2 with Node 14",id:"using-lage-v2-with-node-14",level:4},{value:"v0.x -&gt; v1.x",id:"v0x---v1x",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,r.kt)("h2",{id:"v1x---v21"},"v1.x -> v2.1"),(0,r.kt)(o.C,{mdxType:"Badge"},"version 2"),(0,r.kt)("p",null,"Lage has many changes from 1.x to 2.x. This migration guide will go over major changes and breaking changes since 1.x."),(0,r.kt)("h3",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Revamped Website! You're reading it now!"),(0,r.kt)("li",{parentName:"ul"},"New non-",(0,r.kt)("inlineCode",{parentName:"li"},"npmlog"),"-based default logger"),(0,r.kt)("li",{parentName:"ul"},"The reporter ",(0,r.kt)("inlineCode",{parentName:"li"},"adoLog")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"azureDevops")," (old name is still useable, just deprecating in the next major version!)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WorkerRunner")," to help make tools like lint or TypeScript run super fast by reusing context (e.g. ESLint instance, TypeScript program) in a dedicated worker. This must be configured per tool; see examples for ",(0,r.kt)("a",{parentName:"li",href:"/lage/docs/Cookbook/make-ts-fast"},"TypeScript"),", ",(0,r.kt)("a",{parentName:"li",href:"/lage/docs/Cookbook/make-lint-fast"},"ESLint"),", and ",(0,r.kt)("a",{parentName:"li",href:"/lage/docs/Cookbook/make-jest-fast"},"Jest"),".")),(0,r.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," requires ",(0,r.kt)("strong",{parentName:"li"},"Node 16"),", or using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--experimental-abortcontroller")," flag in Node 14"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," now will automatically write remote cache if the typical environment variable is set (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"CI")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"TF_BUILD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")," command is not implemented yet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graph")," command is not implemented yet")),(0,r.kt)("h4",{id:"using-lage-v2-with-node-14"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"lage")," v2 with Node 14"),(0,r.kt)("p",null,"If you're still on Node 14, you can use Lage v2 by wrapping it with a script which passes the ",(0,r.kt)("inlineCode",{parentName:"p"},"--experimental-abortcontroller")," flag, and using that wrapper in your other scripts."),(0,r.kt)("p",null,"Relevant parts of ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (omit the comments):"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"jsonc"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"scripts"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// cross-env sets environment variables on any platform")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"lage"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"cross-env NODE_OPTIONS=\\"--experimental-abortcontroller\\" lage"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Be sure to use `yarn lage` rather than only `lage` in your other scripts!")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"build"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"yarn lage build"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"devDependencies"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"cross-env"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"^7.0.0"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"lage"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"^2.0.0"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"jsonc"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"scripts"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// cross-env sets environment variables on any platform")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lage"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"cross-env NODE_OPTIONS="),(0,r.kt)("span",{parentName:"div",style:{color:"#EBCB8B"}},'\\"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"--experimental-abortcontroller"),(0,r.kt)("span",{parentName:"div",style:{color:"#EBCB8B"}},'\\"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}}," lage"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Be sure to use `yarn lage` rather than only `lage` in your other scripts!")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"yarn lage build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"devDependencies"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"cross-env"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^7.0.0"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lage"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^2.0.0"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,r.kt)("h2",{id:"v0x---v1x"},"v0.x -> v1.x"),(0,r.kt)(o.C,{mdxType:"Badge"},"version 1"),(0,r.kt)("p",null,"Lage is graduating to 1.0.0! We have a breaking change. Namely, the remote cache mechanism is changing. See this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/lage/pull/172"},"PR #172")," for details. The behavior is ",(0,r.kt)("a",{parentName:"p",href:"/lage/docs/Tutorial/remote-cache"},"described here"),". The behavior is changed for remote cache:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lage")," only write to a remote cache if the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"LAGE_WRITE_REMOTE_CACHE")," is set to true"),(0,r.kt)("li",{parentName:"ol"},"remote cache now works as a fallback; always reading & writing to the local cache first")))}k.isMDXComponent=!0}}]);