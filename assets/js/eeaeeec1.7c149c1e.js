"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[2649],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},898:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"understanding-interoperability",title:"Understanding Interoperability"},l=void 0,c={unversionedId:"external/what-is-interoperability/understanding-interoperability",id:"external/what-is-interoperability/understanding-interoperability",isDocsHomePage:!1,title:"Understanding Interoperability",description:"\x3c!--",source:"@site/docs/external/what-is-interoperability/understanding-interoperability.md",sourceDirName:"external/what-is-interoperability",slug:"/external/what-is-interoperability/understanding-interoperability",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/understanding-interoperability",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/what-is-interoperability/understanding-interoperability.md",tags:[],version:"current",frontMatter:{id:"understanding-interoperability",title:"Understanding Interoperability"},sidebar:"Documentation",previous:{title:"Hyperledger Besu",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/besu"},next:{title:"Levels of Interoperability",permalink:"/weaver-dlt-interoperability/docs/external/what-is-interoperability/levels-of-interoperability"}},d=[{value:"Unique Technical Challenges",id:"unique-technical-challenges",children:[{value:"Single-party vs Multi-party Trust\xa0",id:"single-party-vs-multi-party-trust",children:[],level:3},{value:"Data vs Asset",id:"data-vs-asset",children:[],level:3}],level:2},{value:"The Role of Standards",id:"the-role-of-standards",children:[],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Permissioned DLTs have been gaining significant traction in industry since their inception. They have enabled enterprises to harness the innovation of public blockchains, while adhering to the privacy, confidentiality and regulatory constraints that businesses operate under. Permissioned DLTs offer enterprises an infrastructure for managing inter-firm asset, data and business workflow, without the need for a central intermediary that introduces additional sources of risk. Businesses are able to transact directly while reducing counter-party risk and mitigating the need for costly and time-consuming dispute resolution processes, often involving legal and judicial systems. Thus far, the application of this technology has enabled digitisation and disintermediation of many entrenched industry processes, resulting in significant improvements in efficiency, transparency, risk and fraud."),(0,a.kt)("p",null,"For practical reasons, the adoption of permissioned blockchains has thus far been driven through use-cases. Enterprises have been coalescing into consortia to create specialised networks that address narrowly-scoped use-cases in isolation.\nThis use-case driven approach to blockchain adoption is creating a proliferation of niche and isolated networks that are quickly becoming data and value silos.\nIn addition, these use-cases often represent a slice of a complex end-to-end business process. To deliver real value, permissioned networks need to seamlessly integrate with each other and with existing systems in order to holistically transform industries. This requirement for interoperation is coming to the fore as networks transition to production and scale towards broader adoption."),(0,a.kt)("p",null,"Interoperability in the context of Distributed Ledger Technologies involves enabling the seamless flow of data and value across disparate networks in a manner that preserves their trust and security tenets. This capability can offer a number of benefits such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removing data and value silos"),(0,a.kt)("li",{parentName:"ul"},"Increasing market sizes, liquidity and overall efficiency"),(0,a.kt)("li",{parentName:"ul"},"Improving network effects"),(0,a.kt)("li",{parentName:"ul"},"Enabling orchestration of complex business functionality across networks"),(0,a.kt)("li",{parentName:"ul"},"Enabling scale and groawth of networks"),(0,a.kt)("li",{parentName:"ul"},"Encouraging further adoption of the technology")),(0,a.kt)("h2",{id:"unique-technical-challenges"},"Unique Technical Challenges"),(0,a.kt)("p",null,"Enabling interoperation between distributed ledgers presents numerous technical challenges compared to traditional systems integration approaches. This primarily stems from the need to preserve the benefits of decentralised trust beyond the boundaries of a single network. Hence, a naive approach to interoperability based on traditional point-to-point API integration is insufficient for preserving the underlying trust decentralised networks provide. There are two unique challenges present in DLT interoperation:"),(0,a.kt)("h3",{id:"single-party-vs-multi-party-trust"},"Single-party vs Multi-party Trust\xa0"),(0,a.kt)("p",null,"In distributed ledger architectures, the authority over state lies in a collective and the protocol they employ to ensure its integrity. When one network or an entity consumes state from another, it would need to establish the veracity of the state according to the shared consensus view of parties in the network. This requirement is different than traditional integration with centralised systems wherein the trust for the validity of data is placed on the single party providing the data. Establishing the veracity of state in a decentralized network is not trivial. In most cases, a consumer of state might not be able to observe the full ledger of the network itself.\xa0Hence, a consumer needs to obtain an independently verifiable cryptographic proof on the validity of state according to the consensus rules and policies of the source network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"single-party vs multi-party trust model",src:n(2787).Z})),(0,a.kt)("h3",{id:"data-vs-asset"},"Data vs Asset"),(0,a.kt)("p",null,"Interoperation should not compromise the invariants enforced by individual networks such as protections against double spends on assets."),(0,a.kt)("h2",{id:"the-role-of-standards"},"The Role of Standards"),(0,a.kt)("p",null,"The term \u2018interoperability\u2019 is used rather loosely in many contexts and oftentimes without the same implication. What some call \u2018interoperability\u2019, others refer to as \u2018integration\u2019, \u2018interconnectivity\u2019 or \u2018compatibility\u2019."),(0,a.kt)("p",null,"The primary goal of interoperability is freedom of choice. Interoperability enables users to choose implementations of systems they find suitable for a given problem without constraints on the system\u2019s ability to communicate with other implementations. "),(0,a.kt)("p",null,"Implicit in the term interoperability is open standards, which distinguishes it from any form of bespoke integration. Open standards can either be de jure standards ratified by a formal standards organization such as ANSI, IETF, or ISO, or de facto standards proposed and adopted by communities, industries and the market. Open standards enable and encourage implementors to build systems that can work together."))}p.isMDXComponent=!0},2787:function(e,t,n){t.Z=n.p+"assets/images/multi-party-trust-model-3b5ef5b0911c9d1b5578012100073f5b.png"}}]);