"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i="\u73af\u5883\u914d\u7f6eTips",o={unversionedId:"linux-os/\u73af\u5883\u914d\u7f6eTips",id:"linux-os/\u73af\u5883\u914d\u7f6eTips",title:"\u73af\u5883\u914d\u7f6eTips",description:"\u8fd9\u91cc\u4ee5Ubuntu20.04\u7cfb\u7edf\u4e3a\u4f8b",source:"@site/docs/linux-os/\u73af\u5883\u914d\u7f6eTips.md",sourceDirName:"linux-os",slug:"/linux-os/\u73af\u5883\u914d\u7f6eTips",permalink:"/docs/linux-os/\u73af\u5883\u914d\u7f6eTips",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e03\u5c40\u6280\u5de7",permalink:"/docs/WPF/\u9875\u9762\u5e03\u5c40\u6280\u5de7"},next:{title:"Windows\u5de5\u5177\u63a8\u8350",permalink:"/docs/\u5de5\u5177\u63a8\u8350/Windows\u5de5\u5177\u63a8\u8350"}},p={},c=[{value:"CheckInstall",id:"checkinstall",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"apt \u79bb\u7ebf\u5b89\u88c5",id:"apt-\u79bb\u7ebf\u5b89\u88c5",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u73af\u5883\u914d\u7f6etips"},"\u73af\u5883\u914d\u7f6eTips"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4ee5Ubuntu20.04\u7cfb\u7edf\u4e3a\u4f8b")),(0,a.kt)("h2",{id:"checkinstall"},"CheckInstall"),(0,a.kt)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("p",null,"\u6e90\u7801\u7f16\u8bd1\u5e93\u751f\u6210deb\u548crpm\u5b89\u88c5\u5305"),(0,a.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install checkinstall\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u5df2\u7ecf\u6e90\u7801\u7f16\u8bd1\u597d\u7684\u5e93\u6587\u4ef6\u5939\u4e0b\u5982build\uff0c\u76f4\u63a5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo checkinstall"),"\u5373\u53ef\uff0c\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},".deb"),"\u5305\uff0c\u6839\u636e\u63d0\u793a\u5bf9\u5305\u7684\u4fe1\u606f\u8fdb\u884c\u914d\u7f6e\u3002\u4ee5\u540e\u5982\u679c\u9700\u8981\u5220\u9664\u5bf9\u5e94\u5e93\uff0c\u76f4\u63a5\u8fd0\u884c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"sudo dpkg -r <package name>"),"\uff0c\u800c\u5982\u679c\u8981\u5b89\u88c5\u76f4\u63a5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i <package name>.deb"),"\u5373\u53ef\u3002\u8fd9\u6837\u65b9\u4fbf\u90e8\u7f72\u76f8\u540c\u7684\u6e90\u7801\u7f16\u8bd1\u5e93\uff0c\u53ea\u8981\u4fdd\u6301\u73af\u5883\u4e00\u81f4\uff0c\u76f4\u63a5\u5c06\u7f16\u8bd1\u597d\u7684deb\u6587\u4ef6\u5728\u5bf9\u5e94\u7cfb\u7edf\u4e2d\u5b89\u88c5\u5373\u53ef"),(0,a.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5b89\u88c5\u5305\u65f6\u9700\u8981\u6ee1\u8db3\u5176\u4f9d\u8d56\u6761\u4ef6\uff08\u6e90\u7801\u7f16\u8bd1\u6240\u9700\u7684\u5305\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5305\u672c\u4e8b\u6bd4\u8f83\u5927\u53ef\u4ee5\u4fee\u6539checkinstall\u7684\u914d\u7f6e\u6587\u4ef6\u4e0d\u4fdd\u7559\u5907\u4efd\u6587\u4ef6\uff08\u8be5\u64cd\u4f5c\u4e3a\u8017\u65f6\u64cd\u4f5c\uff09\u3002\u53ef\u4ee5\u6539\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"checkinstall"),"\u7684\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"checkinstallrc"),"\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"whereis checkinstallrc"),"\u67e5\u627e\u6b64\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u6253\u5f00\u6587\u4ef6\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"BACKUP"),"\u53d8\u91cf\u4e3a0\uff08\u9ed8\u8ba4\u4e3a1\uff09"))),(0,a.kt)("h2",{id:"apt-\u79bb\u7ebf\u5b89\u88c5"},"apt \u79bb\u7ebf\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/3abea53e4d66"},"apt\u672c\u5730\u6e90\u79bb\u7ebf\u5b89\u88c5 - \u7b80\u4e66 (jianshu.com)")))}u.isMDXComponent=!0}}]);