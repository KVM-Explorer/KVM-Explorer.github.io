"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),s=i,d=g["".concat(p,".").concat(s)]||g[s]||m[s]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},l="Git\u4f7f\u7528\u6280\u5de7",o={unversionedId:"\u7f16\u7a0b\u5f00\u53d1/Git\u4f7f\u7528\u6280\u5de7",id:"\u7f16\u7a0b\u5f00\u53d1/Git\u4f7f\u7528\u6280\u5de7",title:"Git\u4f7f\u7528\u6280\u5de7",description:"git\u6e05\u9664\u5386\u53f2\u8bb0\u5f55",source:"@site/docs\\\u7f16\u7a0b\u5f00\u53d1\\Git\u4f7f\u7528\u6280\u5de7.md",sourceDirName:"\u7f16\u7a0b\u5f00\u53d1",slug:"/\u7f16\u7a0b\u5f00\u53d1/Git\u4f7f\u7528\u6280\u5de7",permalink:"/docs/\u7f16\u7a0b\u5f00\u53d1/Git\u4f7f\u7528\u6280\u5de7",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CMake\u7f16\u8bd1\u94fe\u63a5",permalink:"/docs/\u7f16\u7a0b\u5f00\u53d1/CMake\u7f16\u8bd1\u94fe\u63a5"},next:{title:"XMake",permalink:"/docs/\u7f16\u7a0b\u5f00\u53d1/XMake"}},p={},u=[{value:"git\u6e05\u9664\u5386\u53f2\u8bb0\u5f55",id:"git\u6e05\u9664\u5386\u53f2\u8bb0\u5f55",level:2},{value:"revert",id:"revert",level:3},{value:"rebase",id:"rebase",level:3},{value:"\u6e05\u9664\u6240\u6709\u4fe1\u606f",id:"\u6e05\u9664\u6240\u6709\u4fe1\u606f",level:3},{value:"\u5168\u5c40.gitignore\u914d\u7f6e",id:"\u5168\u5c40gitignore\u914d\u7f6e",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git\u4f7f\u7528\u6280\u5de7"},"Git\u4f7f\u7528\u6280\u5de7"),(0,i.kt)("h2",{id:"git\u6e05\u9664\u5386\u53f2\u8bb0\u5f55"},"git\u6e05\u9664\u5386\u53f2\u8bb0\u5f55"),(0,i.kt)("h3",{id:"revert"},"revert"),(0,i.kt)("p",null,"\u63d0\u4ea4\u65b0\u7684\u8282\u70b9\u4ee5\u62b5\u6d88\u5386\u53f2\u63d0\u4ea4\u4fe1\u606f"),(0,i.kt)("h3",{id:"rebase"},"rebase"),(0,i.kt)("h3",{id:"\u6e05\u9664\u6240\u6709\u4fe1\u606f"},"\u6e05\u9664\u6240\u6709\u4fe1\u606f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"orphan n. \u5b64\u513f")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fd0\u884c git checkout --orphan latest_branch \uff08\u65b0\u5efa\u4e00\u4e2a\u7a7a\u767d\u5206\u652f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55\u5df2\u6709\u5206\u652f\uff09")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u6240\u6709\u6587\u4ef6 git add .")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539git commit -m \u201ccommit message\u201d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5220\u9664\u5206\u652fgit branch -D master(\u5220\u9664\u539f\u6709\u5206\u652f\uff0c\u90e8\u5206\u65b0\u7684\u5206\u652f\u4e3amain\u5206\u652f\uff0c\u540e\u7eed\u540c\u7406)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u5f53\u524d\u5206\u652f\u91cd\u547d\u540dgit branch -m master")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f3a\u5236\u66f4\u65b0\u5b58\u50a8\u5e93\u3002git push -f origin master"))),(0,i.kt)("h2",{id:"\u5168\u5c40gitignore\u914d\u7f6e"},"\u5168\u5c40.gitignore\u914d\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u6784\u5efa\u5de5\u7a0b\u9879\u76ee\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u6211\u4eec\u4e0d\u9700\u8981\u8ffd\u8e2a\u8bb0\u5f55\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u7c7b\u578b\u6dfb\u52a0.gitignore\u4ee5\u9632\u6b62\u9891\u7e41\u7684\u6dfb\u52a0add\u8ffd\u8e2a\u5efa\u8bae\u3002\u6211\u4eec\u5e38\u7528\u7684\u65b9\u6cd5\u4e3b\u8981\u662f\u5728\u5de5\u7a0b\u6587\u4ef6\u4e0b\u521b\u5efa.gitignore\u6587\u4ef6\u5c06\u5176\u6392\u9664\u5728\u5916\uff0c\u4f46\u662f\u5f53\u6211\u4eec\u9891\u7e41\u521b\u5efa\u65b0\u7684\u5de5\u7a0b\u9879\u76ee\u65f6\uff0c\u6bcf\u6b21\u540c\u6837\u7684\u64cd\u4f5c\u53c8\u8ba9\u4eba\u611f\u5230\u538c\u70e6\u3002\u8fd9\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u5168\u5c40.gitignore\u6587\u4ef6\u5e2e\u52a9\u6211\u4eec\u7ba1\u7406\u4e0d\u540c\u7684\u9879\u76ee\uff0c\u5168\u5c40\u914d\u7f6e\u5e94\u8be5\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8db3\u591f\u7cbe\u7b80\uff0c\u90e8\u5206\u9879\u76ee\u4e2a\u6027\u5316\u5b9a\u5236")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u901a\u7528\u6027\u5f3a\uff0c\u80fd\u591f\u9002\u5e94\u591a\u4e2a\u540c\u7c7b\u578b\u9879\u76ee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8986\u76d6\u9762\u5e7f\uff0c\u80fd\u591f\u56ca\u62ec\u5f00\u53d1\u8005\u6240\u6709\u7684\u9879\u76ee\u7c7b\u522b"))),(0,i.kt)("p",null,"\u5728\u5b89\u88c5Git\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528git bash\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.excludesfile ~/.gitignore_global\n")),(0,i.kt)("p",null,"\u8fd9\u6761\u6307\u4ee4\u7684\u542b\u4e49\u662f\uff0c\u5728\u5168\u5c40git\u914d\u7f6e\u6587\u4ef6\u4e2dcore\u7c7b\u522b\u4e0b\u6dfb\u52a0excludefile\u6587\u4ef6\u8def\u5f84\uff0c\u8def\u5f84\u5730\u5740\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitignore_global"),"\u8def\u5f84\u5730\u5740\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff08\u9700\u8981\u5728\u5bf9\u5e94\u4f4d\u7f6e\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore_global"),"\uff09"),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"\u9996\u5148\u5b8c\u6210\u914d\u7f6e\u540e\u5176\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitconfig")," \u6587\u4ef6\u4e2d\u5448\u73b0\u5982\u4e0b\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-editorconfig"},"[user]\n    email = <username>@<server>.com\n    name = <username>\n[core]\n    excludesfile = /home/<username>/.gitignore_global\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u521b\u5efa\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\u3002Linux\u4e0b\u5c31\u662f\u5f53\u524d\u7684\u7528\u6237\u76ee\u5f55\u4e0b\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore_global"),"\u6587\u4ef6\uff0c\u5185\u5bb9\u8fd9\u91cc\u540c\u666e\u901a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),"\u7c7b\u4f3c\u4e0d\u8fc7\u591a\u8d58\u8ff0\u3002"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"windows\u60c5\u51b5\u57fa\u672c\u540cLinux\u7c7b\u4f3c\uff0c\u533a\u522b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitconfig"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitignore_global"),"\u7684\u5730\u5740\u5728"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"c:/Users/<username>/.gitconfig")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"c:/Users/<username>/.gitignore_global"),"\u6ce8\u610f\u7528\u6237\u540d\u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/Cherry-B/p/4583505.html"},"Git .gitignore \u8bbe\u7f6e\u4e3a\u5168\u5c40global - Pepper.B - \u535a\u5ba2\u56ed (cnblogs.com)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/51199833"},"GitHub Pull Request\u5165\u95e8 - \u77e5\u4e4e (zhihu.com)")))}m.isMDXComponent=!0}}]);