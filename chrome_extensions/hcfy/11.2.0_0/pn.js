(()=>{"use strict";var e,t,n,r={30819:(e,t,n)=>{n.d(t,{U0:()=>a,gm:()=>o});const r=navigator.userAgent,a=r.includes("Mac"),o=(r.includes("Chrome"),r.includes("Edg"),r.includes("Firefox"))},62503:()=>{navigator.userAgent.includes("Firefox")&&(globalThis.requestAnimationFrame=requestAnimationFrame.bind(window),globalThis.cancelAnimationFrame=cancelAnimationFrame.bind(window))},48585:(e,t,n)=>{n(1363);var r=n(14041),a=n(25873),o=n(93431),i=n(19687),s=n(78220),d=n(78107),c=n(43566),l=n(96538),u=n(74874),f=n.n(u),p=n(16224),m=n(25148),h=n(17439);var g=n(66538),v=n(5090),b=n(31085);function w(e){return e.target.matches("."+s.Qu)}function y(e){return new Promise(((t,n)=>{const r=new FileReader;r.addEventListener("load",(()=>{t(r.result)})),r.addEventListener("error",(()=>{n(r.error)})),r.readAsDataURL(e)}))}function x(e){const{toaster:t,onDrop:n}=e,a=function(e,t,n){const[a,o]=(0,r.useState)(!1),i=(0,r.useRef)(t);(0,r.useEffect)((()=>{i.current=t}),[t]);const s=(0,r.useRef)(n);return(0,r.useEffect)((()=>{s.current=n}),[n]),(0,r.useEffect)((()=>{if(!e)return;const t=function(e){e.preventDefault(),o(!0)};return e.addEventListener("dragenter",t),()=>{e.removeEventListener("dragenter",t)}}),[e]),(0,r.useEffect)((()=>{if(!e)return;const t=function(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")};return e.addEventListener("dragover",t),()=>{e.removeEventListener("dragover",t)}}),[e]),(0,r.useEffect)((()=>{if(!e)return;const t=e=>{s.current?s.current(e)&&o(!1):o(!1)};return e.addEventListener("dragleave",t),()=>{e.removeEventListener("dragleave",t)}}),[e]),(0,r.useEffect)((()=>{if(!e)return;const t=function(e){const t=e.dataTransfer;if(!t)return;e.preventDefault(),o(!1);const n=i.current,r=t.types;if(r.includes("Files")){const e=t.files[0];e.type.startsWith("image/")?n({type:"image",data:e}):n(new TypeError("此文件不是图片。"))}else{if(r.includes("text/html")){const e=t.getData("text/html").match(/<img.*?src="([^"]+)"/);if(e){const t=e[1];return void(t.startsWith("data:image/")?n({type:"image-data-uri",data:t}):n({type:"image-url",data:t}))}}if(r.includes("text/plain")){const e=t.getData("text");if(e)return void n({type:"text",data:e})}n(new TypeError("只支持拖放文字或图片。"))}};return e.addEventListener("drop",t),()=>{e.removeEventListener("drop",t)}}),[e]),a}(document.body,(e=>{if(e instanceof TypeError)t?.show({intent:"warning",message:e.message});else switch(e.type){case"text":n({type:"text",text:e.data});break;case"image":y(e.data).then((e=>{n({type:"image",dataURI:e})}));break;case"image-data-uri":n({type:"image",dataURI:e.data});break;case"image-url":const r=t?.show({message:"正在加载图片……"});(0,v.Z5)(e.data).then((async e=>(r&&t?.dismiss(r),y(await e.blob())))).then((e=>{n({type:"image",dataURI:e})})).catch((e=>{r&&t?.dismiss(r),t?.show({intent:"danger",message:`发生了一个错误：${e?.message||"未知错误"}`})}))}}),w);return(0,b.jsx)(g.h,{isOpen:a})}var E=n(22067);const j=f()(p.Ne,["tipForDropTranslateClosed"]);function T(){const[e,t]=(0,m.A)(j);return!e||e.tipForDropTranslateClosed?null:(0,b.jsxs)(E.P,{intent:"primary",style:{marginBottom:10},children:["你可以将文本或图片拖放到独立翻译窗口当中。",(0,b.jsx)("a",{onClick:()=>{t({tipForDropTranslateClosed:!0})},children:"不再提示"})]})}var k=n(84848),C=n(12128),A=n(91307),O=n(67116);function L(){const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{window.addEventListener("beforeunload",(()=>{(0,O._)({action:"set clipboard monitor",data:!1})}))}),[]),(0,b.jsx)(d.Sc,{style:{marginBottom:0},label:"持续监听剪切板",checked:e,onChange:e=>{const n=e.target.checked;(0,O._)({action:"set clipboard monitor",data:n}),t(n)}})}o.$.onlyShowFocusOnTabs();const S=f()(p.g2,["panelSize","autoClipboard"]),F=(0,k.j_)(),D=new C.y("panelTranslateLimit",500);function R(e){const[t,n]=(0,r.useState)(null),[a,o]=(0,r.useState)("");if((0,r.useEffect)((()=>{D.isOver().then((e=>{n(e),o(D.dateEnd)}))}),[]),null==t)return null;if(t)return(0,b.jsxs)("div",{style:{textAlign:"center",padding:15},children:[(0,b.jsxs)("p",{children:["非会员用户每七天只能使用 ",500," ","次独立翻译窗口，下次重置时间：",a,"。成为会员即可解除此次数限制。"]}),(0,b.jsx)("p",{children:(0,b.jsx)(i.$,{onClick:A.$,intent:"primary",text:"开通会员"})}),(0,b.jsx)("p",{className:`${s.E4k} ${s.KJG}`,children:"开通会员或到达重置时间后，点击下方按钮即可恢复使用。"}),(0,b.jsx)("div",{children:(0,b.jsx)(i.$,{onClick:()=>{D.isOver().then((e=>{n(e),o(D.dateEnd)}))},children:"确认开通 / 重置状态"})})]});return e.children((()=>{D.isOver(!0).then((e=>{n(e),o(D.dateEnd)}))}))}function P(e){const t=(0,r.useRef)(null),[n,a]=(0,m.A)(S),[o,i]=(0,r.useState)(!1);function s(e){t.current&&(e?t.current.translate({type:"text",text:e},!0):(i(!1),setTimeout((()=>{i(!0)}))))}(0,l.A)(),(0,r.useEffect)((()=>{s(decodeURIComponent(window.location.search.slice(6)))}),[]),(0,r.useEffect)((()=>{t.current?.select()}),[]),(0,r.useEffect)((()=>{const e=e=>{if("translateInPopup"===e.action)s(e.data)};return chrome.runtime.onMessage.addListener(e),()=>{chrome.runtime.onMessage.removeListener(e)}}),[]);const u=(0,r.useCallback)(((e,n)=>{e&&(n?t.current?.setText(e):t.current?.translate(e,!0))}),[]),f=(0,k.dU)(F);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x,{onDrop:e=>{t.current?.translate(e)},toaster:f.current}),(0,b.jsx)(T,{}),o&&(0,b.jsx)(h.W,{onTranslate:u,onDismiss:()=>t.current?.select()}),(0,b.jsx)(c.A,{ref:t,toaster:f.current,showTextArea:!0,size:n?.panelSize||S.panelSize,extendOptions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Sc,{label:"打开面板时自动翻译剪切板内的文本",checked:!0===n?.autoClipboard,indeterminate:"write-only"===n?.autoClipboard,onChange:e=>{a({autoClipboard:e.target.checked})}}),(0,b.jsx)(L,{})]}),onTranslate:e.onTranslate})]})}window.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("app");if(!e)throw new Error("DOM 里没有 #app 元素。");(0,a.H)(e).render((0,b.jsx)(R,{children:e=>(0,b.jsx)(P,{onTranslate:e})}))})),window.addEventListener("beforeunload",(()=>{chrome.storage.local.set({panelPos:{top:window.screenY,left:window.screenX,width:window.outerWidth,height:window.outerHeight}})})),window.addEventListener("keydown",(e=>{if(27===e.keyCode){if("TEXTAREA"==e.target.nodeName&&e.isComposing)return;window.close()}}))},37767:(e,t,n)=>{n.d(t,{qs:()=>a});n(69375);var r=n(17546);function a(e){const t=[];return r(e,((e,n)=>{const r=Array.isArray(e)?e:[e];t.push(...r.map((e=>`${n}=${null==e?"":encodeURIComponent(e)}`)))})),t.join("&")}},74976:(e,t,n)=>{n.d(t,{_:()=>r});const r=AbortSignal.timeout?function(e){return AbortSignal.timeout(e)}:function(e){const t=new AbortController;return setTimeout((()=>{t.abort()}),e),t.signal}}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,r,a]=e[l],s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>({231:"blueprint-icons-split-paths-by-size-loader",824:"blueprint-icons-all-paths-loader",860:"blueprint-icons-all-paths"}[e]+".js"),o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="browser-extension:",o.l=(e,r,a,i)=>{if(t[e])t[e].push(r);else{var s,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+a){s=u;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",n+a),s.src=e),t[e]=[r];var f=(n,r)=>{s.onerror=s.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(r))),n)return n(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),d&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="",(()=>{var e={553:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,d]=n,c=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(d)var l=d(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=globalThis.webpackChunkbrowser_extension=globalThis.webpackChunkbrowser_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.O(void 0,[708,316,180,122,63,557,743,408,763,544,869],(()=>o(62503)));var i=o.O(void 0,[708,316,180,122,63,557,743,408,763,544,869],(()=>o(48585)));i=o.O(i)})();