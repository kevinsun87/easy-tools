(()=>{"use strict";var e,t,n,o={46613:(e,t,n)=>{n.d(t,{N:()=>c,O:()=>a});var o=n(17840),r=n(25563);const i={"中文(简体)":"zh",英语:"en",俄语:"ru",西班牙语:"es",法语:"fr",阿拉伯语:"ar",土耳其语:"tr",葡萄牙语:"pt",泰语:"th",印尼语:"id",意大利语:"it",越南语:"vi"};function a(e,t="",n=""){const o=i[n]||"auto",r=i[t]||"zh";return`https://translate.alibaba.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${o}&hcfy_to=${r}`}async function c(){if(window.location.origin+window.location.pathname!=="https://translate.alibaba.com/")return;const e=(0,o.q)(window.location.hash);if(!e.hcfy_text)return;const t=document.getElementsByClassName("language-list")[0];if(t){const n=e.hcfy_from;let o;if("auto"===n)o=t.querySelector("a[data-lang=auto]");else{const e=t.getElementsByClassName("source-list")[0];e&&(await(0,r.f)((()=>0!==e.children.length)),o=e.querySelector(`a[data-lang=${n}]`))}if(o){document.getElementsByClassName("source-lang")[0].click(),o.click()}const i=t.getElementsByClassName("target-list")[0];if(i){await(0,r.f)((()=>0!==i.children.length));const t=i.querySelector(`a[data-lang=${e.hcfy_to}]`);if(t){document.getElementsByClassName("target-lang")[0].click(),t.click()}}}const n=document.getElementById("original");n&&(n.value=decodeURIComponent(e.hcfy_text));const i=document.getElementsByClassName("translate")[0];i&&i.click()}},1707:(e,t,n)=>{n.d(t,{D:()=>l,O:()=>c});var o=n(17840),r=n(48983),i=n.n(r);const a={"":"自动识别","中文(简体)":"中文"};function c(e,t="中文",n=""){return`https://fanyi.qq.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${a[n]||n}&hcfy_to=${a[t]||t}`}async function l(){if(window.location.origin+window.location.pathname!=="https://fanyi.qq.com/")return;const e=(0,o.q)(window.location.hash);if(!e.hcfy_text)return;const t=document.createElement("div");t.setAttribute("onclick",'if(window.qtv)window.postMessage("HCFY_QQ_READY", "*")'),document.body.appendChild(t);const n=window.setInterval((()=>{t.click()}),500);window.addEventListener("message",(function o(r){if("HCFY_QQ_READY"!==r.data)return;window.removeEventListener("message",o),window.clearInterval(n),document.body.removeChild(t);const a=document.querySelector('[node-type="source_language_list"]');if(a){const t=a.querySelectorAll("li span");i()(t,(t=>{if(t.textContent?.trim()===e.hcfy_from)return document.querySelector('[node-type="source_language_button"]').click(),t.click(),!0}))}const c=document.querySelector('[node-type="target_language_list"]');if(c){const t=c.querySelectorAll("li span");i()(t,(t=>{if(t.textContent?.trim()===e.hcfy_from)return document.querySelector('[node-type="target_language_button"]').click(),t.click(),!0}))}const l=document.querySelector('[node-type="source-textarea"]');l&&(l.value=decodeURIComponent(e.hcfy_text));const s=document.querySelector('[node-type="translate_button"]');s&&s.click()}))}},10469:(e,t,n)=>{n.d(t,{o:()=>a,Z:()=>i});const o=JSON.parse('{"中文(简体)":"zh-CHS","英语":"en","日语":"ja","西班牙语":"es","阿拉伯语":"ar","法语":"fr","韩语":"ko","俄语":"ru","德语":"de","葡萄牙语":"pt","意大利语":"it","希腊语":"el","荷兰语":"nl","芬兰语":"fi","丹麦语":"da","越南语":"vi","印地语":"hi","印尼语":"id","马来语":"ms"}');var r=n(17840);function i(e,t="",n=""){const r=o[n],i=o[t];return r&&i?`https://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${r}&hcfy_to=${i}`:`http://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}`}function a(){if(window.location.origin+window.location.pathname!=="https://fanyi.youdao.com/")return;const e=(0,r.q)(window.location.hash);if(!e.hcfy_text)return;const t=document.getElementById("inputOriginal");if(t&&(t.value=decodeURIComponent(e.hcfy_text)),!e.hcfy_from){const e=document.getElementById("transMachine");return void(e&&e.click())}const n=document.getElementById("languageSelect");if(!n)return;const o=e.hcfy_from+"2"+e.hcfy_to,i=n.querySelector(`li[data-value=${o}] a`);i&&i.click()}},62503:()=>{navigator.userAgent.includes("Firefox")&&(globalThis.requestAnimationFrame=requestAnimationFrame.bind(window),globalThis.cancelAnimationFrame=cancelAnimationFrame.bind(window))},13370:(e,t,n)=>{n(1363);var o=n(25873),r=n(74874),i=n.n(r),a=n(16224),c=n(14041),l=n(42631),s=n(68802),d=n(78220),u=n(95805),m=n(96538),f=n(67116),p=n(31085);const h=i()(a.g2,["pdfSnifferEnable"]);function y(){if(1===document.body.children.length&&document.body.firstElementChild instanceof HTMLEmbedElement&&"application/pdf"===document.body.firstElementChild.type)return[location.href];const e=document.querySelectorAll('embed[type="application/pdf"]');return Array.from(e).map((e=>e.src)).filter((e=>!!e))}function g(e){const{pdfUrls:t,unmount:n}=e,[o,r]=(0,c.useState)(null),[i,a]=(0,c.useState)(!1);return(0,m.A)(a),(0,c.useEffect)((()=>{o&&o.show({timeout:1e4,onDismiss(){setTimeout(n,300)},message:(0,p.jsxs)(p.Fragment,{children:["划词翻译检测到此页面有 ",t.length," 个 PDF 文件：",(0,p.jsx)(s.UL,{children:t.map(((e,t)=>(0,p.jsx)("li",{children:(0,p.jsx)("a",{style:{display:"inline-block",verticalAlign:"top",maxWidth:337,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},onClick:()=>{(0,f._)({action:"open pdf viewer",params:e})},title:e,children:e})},t)))}),(0,p.jsx)("div",{className:`${d.KJG} ${d.E4k}`,children:"点击链接即可在划词翻译的内置 PDF 阅读器中打开这些 PDF 文件。"})]}),action:{text:"不再提示",onClick:()=>{chrome.storage.local.set({pdfSnifferEnable:!1})}}})}),[t,o,n]),(0,p.jsx)(u.V,{position:"bottom-right",ref:r,className:"app-toaster-container"+(i?` ${d.nd0}`:""),usePortal:!1})}chrome.storage.local.get(h).then((({pdfSnifferEnable:e})=>{if(!e)return;const t=y();if(!t.length)return;const n=document.createElement("div");n.style.all="initial",document.documentElement.appendChild(n);const r=(0,o.H)(n);r.render((0,p.jsx)(l.A,{cssText:".app-toaster-container{position:fixed !important;z-index:9999999999 !important}",children:()=>(0,p.jsx)(g,{pdfUrls:t,unmount:()=>{r.unmount(),document.documentElement.removeChild(n)}})}))}));var v=n(46613),b=n(1707),w=n(10469);(0,b.D)(),(0,v.N)(),(0,w.o)();var _=n(18861);const x=document.createElement("div");x.style.all="initial",document.documentElement.appendChild(x);(0,o.H)(x).render((0,p.jsx)(_.A,{}));const E=setInterval((()=>{document.documentElement.contains(x)||(document.documentElement.appendChild(x),clearInterval(E))}),300);setTimeout((()=>{clearInterval(E)}),1e3)},25563:(e,t,n)=>{function o(e,t=500){return new Promise((n=>{!function o(){e()?n():setTimeout(o,t)}()}))}n.d(t,{f:()=>o})}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=o,e=[],i.O=(t,n,o,r)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,r]=e[d],c=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(c=!1,r<a&&(a=r));if(c){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>({231:"blueprint-icons-split-paths-by-size-loader",824:"blueprint-icons-all-paths-loader",860:"blueprint-icons-all-paths"}[e]+".js"),i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="browser-extension:",i.l=(e,o,r,a)=>{if(t[e])t[e].push(o);else{var c,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",n+r),c.src=e),t[e]=[o];var m=(n,o)=>{c.onerror=c.onload=null,clearTimeout(f);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(o))),n)return n(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="",(()=>{var e={390:0};i.f.j=(t,n)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var a=i.p+i.u(t),c=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,o[1](c)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,c,l]=n,s=0;if(a.some((t=>0!==e[t]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(l)var d=l(i)}for(t&&t(n);s<a.length;s++)r=a[s],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},n=globalThis.webpackChunkbrowser_extension=globalThis.webpackChunkbrowser_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.O(void 0,[708,316,180,122,209,224,557,743,408,763,579,620],(()=>i(62503)));var a=i.O(void 0,[708,316,180,122,209,224,557,743,408,763,579,620],(()=>i(13370)));a=i.O(a)})();