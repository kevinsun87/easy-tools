(()=>{var e,t={20843:(e,t,r)=>{"use strict";function s(e){return e.points&&!e.free&&!e.secretKeys&&!e.package}function n(e){return e.free&&!e.points&&!e.secretKeys&&!e.package}function o(e){return e.secretKeys&&!e.free&&!e.points&&!e.package}function i(e){return e.package&&!e.free&&!e.points&&!e.secretKeys}r.d(t,{U4:()=>o,tk:()=>n,u6:()=>s,zr:()=>i})},23310:(e,t,r)=>{"use strict";var s=r(5090),n=r(20124);const o=n("@hcfyapp/messaging:onMessage");var i=r(22025);const a=n("@hcfyapp/messaging:sendMessage");var c=r(79071),l=r.n(c);let u,d,h=()=>{h=l(),u=document.createElement("textarea"),u.style.position="absolute",u.style.top="-99999px",document.body.appendChild(u)};let p=()=>{p=l(),d=document.createElement("div"),d.style.position="absolute",d.style.top="-99999px",d.contentEditable="true",document.body.appendChild(d)};function m(){if(p(),d.innerHTML="",d.focus(),document.execCommand("paste")){const e=d.getElementsByTagName("img")[0];if(e)return e.src}return!1}function f(){const e=m();if(e)return{type:"image",dataURI:e};const t=(h(),u.value="",u.focus(),!!document.execCommand("paste")&&u.value);return"string"==typeof t&&{type:"text",text:t}}r(69375);function g(e){const t=document.createElement(e);return"div"===e&&(t.contentEditable="true"),t.style.position="absolute",t.style.top="-99999px",document.body.appendChild(t),t}function y(e){return"TEXTAREA"===e.tagName}const w=new class{#e;#t;#r(e){return"textarea"===e?this.#t||(this.#t=g("textarea")):this.#e||(this.#e=g("div"))}read(e="text"){const t="text"===e?this.#r("textarea"):this.#r("div");if(y(t)?t.value="":t.textContent="",t.focus(),!document.execCommand("paste"))throw new Error('document.execCommand("paste") returns false.');if(y(t))return t.value;if("html"===e)return t.innerHTML;if("dom"===e)return t.cloneNode(!0);if("images"===e){const e=t.getElementsByTagName("img"),r=[];for(const t of e)r.push(t.src);return r}}write(e){const t=this.#r("textarea");if(t.value=e,t.focus(),t.select(),!document.execCommand("copy"))throw new Error('document.execCommand("copy") returns false.')}clear(){this.#t&&(document.removeChild(this.#t),this.#t=void 0),this.#e&&(document.removeChild(this.#e),this.#e=void 0)}};r(61412),r(91883),r(70286);var v=r(28985);const _=v;const x=new class extends _{#s;#n;get running(){return null!=this.#s}start(){this.running||(this.#s=setInterval((()=>{let e;try{e=w.read()}catch(e){return this.stop(),void this.emit("error",e)}const t=this.#n;e!==t&&(this.#n=e,null!=t&&this.emit("change",e))}),500))}stop(){this.#n=void 0,this.#s&&(clearInterval(this.#s),this.#s=void 0)}};x.on("error",(e=>{console.error(e)})),x.on("change",(e=>{!function(e,t,r){let s;a("准备发送消息：%o",e),s="number"==typeof t?chrome.tabs.sendMessage(t,e,r):null==t?chrome.runtime.sendMessage(e,r):chrome.runtime.sendMessage(t,e,r),s.then((e=>{if(a("收到的 raw response： %o",e),void 0!==e){if(!(0,i.v)(e))throw new Error("必须使用 @hcfyapp/messaging 的 onMessage 方法来处理消息。",{cause:e});if("__messaging_reject"in e)throw e.__messaging_reject;return e.__messaging_resolve}}),(e=>{throw a("发送消息失败",e),e}))}({action:"open panel",text:e})}));const k=x;var E=r(10192),b=r(56357);let R=function(e){return e.Tesseract="tesseractocr",e.BaiDu="bdocr",e}({});const T={workerPath:"worker.min.js",corePath:"tesseract-core.js",langPath:"https://tessdata.projectnaptha.com/4.0.0_best",workerBlobURL:!1},O={id:R.Tesseract,name:"Tesseract OCR",free:!0};class C extends b.m{constructor(){super(O)}async callByFree(e){const t=await(0,E.createWorker)(T);await t.loadLanguage(e.lang),await t.initialize(e.lang),await t.setParameters({tessjs_create_hocr:"0",tessjs_create_tsv:"0",preserve_interword_spaces:"1"});const r=await t.recognize(e.image);return t.terminate(),r.data}transform(e){return e.paragraphs.map((e=>e.text.trim().replace(/\r?\n/g," "))).join("\n")}}const P=new C;var S=r(29842);function j(e){const t={},r=e.textContent?.trim().split(/\s+/);r&&(t.name=r[0],t.value=r[1]?.slice(1,-1));const s=e.nextElementSibling;if(s?.matches(".hd_tf")){const e=s.getElementsByTagName("a")[0]?.getAttribute("data-mp3link");e&&(t.ttsURI=e)}return t}class M extends Error{}const N="LoadTimeout",I="TaskTimeout",A="CLOSED";function F(e,t){return(0,s.$5)(e,{name:t,ctor:M})}const D=n("@hcfyapp/browser-automation:Worker");class L extends v{#o=!1;#i;#a;#c;#l;constructor(e,t,r){super(),this.#l=r,this.#a=e,this.#c=t,this.#u()}#d(){return new Promise(((e,t)=>{let r;const s=this.#l?.loadTimeout,n=null==s?null:setTimeout((()=>{D("%s 网页加载超时",r),this.#c.off("ready",o),null!=r&&this.#c.remove(r),t(F(`新创建的网页未在 ${s} 毫秒内发送 ready 消息。`,N))}),s),o=t=>{null!=r?r===t?(D("%s 收到 adapter 发送的此 worker 所属网页的 ready 事件",r),null!=n&&clearTimeout(n),this.#i=r,this.#o=!0,this.#c.off("ready",o),e()):D("%s 收到 adapter 发送的 ready 事件，但不是此 worker 所属网页的。",r):D("收到 adapter 发送的 ready 事件，但此时 worker 还没有创建网页，所以忽略。")};this.#c.on("ready",o),this.#c.create(this.#a).then((e=>{r=e}),(e=>{t(e)}))}))}#u(){this.#d().then((()=>{const e=t=>{this.#i===t&&(this.#c.off("destroy",e),this.destroy(F("Adapter 通知此网页已被销毁。")))};this.#c.on("destroy",e),this.once("destroy",(()=>{null!=this.#i&&this.#c.remove(this.#i)})),D("%s worker 触发 ready 事件",this.#i),this.emit("load",!0)}),(e=>{this.emit("load",!1,e),D("%s 初始化过程中出现问题，所以销毁 worker",this.#i),this.destroy(F("初始化失败。"))}))}get idle(){return this.#o}tell(e){return new Promise(((t,r)=>{if(null==this.#i)return void r(F("worker 未完成初始化，但却被下达了任务。"));const n=this.#l?.taskTimeout,o=null!=n&&n>0?setTimeout((()=>{this.off("destroy",i),r(F("任务处理超时。",I)),this.destroy(F("由于出现了任务处理超时的错误，所以销毁了此 worker。"))}),n):null,i=()=>{null!=o&&clearTimeout(o),r(F("任务处理过程中网页被关闭了，无法完成处理。",A))};this.once("destroy",i),this.#o=!1,this.#c.tell(this.#i,e).finally((()=>{this.#o=!0,this.off("destroy",i),null!=o&&clearTimeout(o)})).then((e=>{if("object"==typeof(n=e)&&n&&"__error__"in n){const t=e.__error__,n=(0,s.$5)(t.message,{name:t.name,cause:t.cause});return r(n),void this.destroy((0,s.$5)("处理任务时返回了一个错误，所以销毁了 worker。",{cause:n}))}var n;t(e)}),r)}))}destroy(e){D("%s 销毁了，原因：%O",this.#i,e),this.emit("destroy",e)}}const B=n("@hcfyapp/browser-automation:Pool"),U=1;const $=class{#h=[];#p=[];#l;#a;#c;constructor(e,t,r){this.#a=e,this.#c=t,this.#l=r}#m(){return this.#h.find((e=>e.idle))}#f(e){if(this.#h.length<(this.#l?.max||U)){B("开始创建 worker");const t=new L(this.#a,this.#c,this.#l);t.once("load",((t,r)=>{t?(B("worker 初始化成功"),this.#g(e)):(B("worker 初始化失败"),e.reject(r))})),t.once("destroy",(()=>{B("worker destroy");const e=this.#h.indexOf(t);e>=0&&this.#h.splice(e,1)})),this.#h.push(t)}else B("由于现有 worker 已达最大数量，所以不会创建新 worker"),this.#p.unshift(e)}#g(e){const t=e||this.#p.shift();if(!t)return void B("准备处理任务，但没有需要处理的任务");const r=this.#m();if(!r)return B("准备处理任务，但没有空闲的 worker"),void this.#f(t);B("准备处理任务且有空闲 worker，将开始处理"),r.tell(t.msg).then((e=>{B("任务处理成功，将继续处理下一个任务"),t.resolve(e)}),(e=>{B("任务处理失败，将继续处理下一个任务"),t.reject(e)})).finally((()=>{this.#g()}))}tell(e){return new Promise(((t,r)=>{B("调用了 tell 方法，将任务推入任务队列"),this.#p.push({msg:e,resolve:t,reject:r}),this.#g()}))}};var W=r(38285),V=r(17546),q=r.n(V);function H(e,t){return{__automationWrapperMessageResponse__:!0,__id__:e,__payload__:t}}function J(e){return"__automationWrapperMessageResponse__"in(t=e)&&!0===t.__automationWrapperMessageResponse__?{type:"response",id:e.__id__,payload:e.__payload__}:function(e){return"__automationWrapperMessageRequest__"in e&&!0===e.__automationWrapperMessageRequest__}(e)?{type:"request",id:e.__id__,payload:e.__payload__}:null;var t}function K(e){if("string"==typeof e)try{const t=JSON.parse(e);if((0,s.Z4)(t))return t}catch(e){}return null}const z=n("@hcfyapp/browser-automation/adapters/iframe");class Z extends v{#y={};constructor(){super(),window.addEventListener("message",(e=>{z("收到了 message 事件，数据为：%O",e.data);const t=e.ports[0];if(!t)return;const r=K(e.data);if(!r)return;const s=J(r);if("request"!==s?.type)return;const n=this.#w(e.source);if("is created by"===s.payload)n&&(z("收到了 id 为 %s 的 iframe 发送的 is create by 消息。",n.id),n.port=t,t.onmessage=function(e,t){return r=>{const s=K(r.data);if(!s)return;const n=J(s);if(n)if("request"===n.type)if("ready"===n.payload){if(z("收到了 id 为 %s 的 iframe 发送的 ready 消息。",e.id),e.ready=!0,t.emit("ready",e.id),!e.port)throw F("没有 port。");e.port.postMessage(JSON.stringify(H(n.id,void 0)))}else z("收到了 id 为 %s 的 frame 发送过来的未知类型的消息，已忽略。消息内容：%O",e?.id,n);else if("response"===n.type){const t=e.msgMap[n.id];t&&(delete e.msgMap[n.id],t.resolve(n.payload))}}}(n,this)),z("发送了对 is create by 消息的响应，结果为 %o",!!n),t.postMessage(JSON.stringify(H(s.id,!!n)));else z("收到了 id 为 %s 的 frame 发送过来的未知类型的消息，已忽略。消息内容：%O",n?.id,s)}))}#w(e){let t=null;return V(this.#y,(r=>{if(r.frame.contentWindow===e)return t=r,!1})),t}add(e){this.#y[e.id]=e}get(e){return this.#y[e]||null}remove(e){const t=this.get(e);return t&&delete this.#y[e],t}}let G,X;class Q extends v{#v=function(){return G||(G=new Z,G)}();constructor(){super(),this.#v.on("ready",(e=>{this.emit("ready",e)}))}create(e){const t=W("iframe"),r=document.createElement("iframe");return this.#v.add({id:t,frame:r,msgMap:{},ready:!1}),r.referrerPolicy="no-referrer",r.src=e,document.body.appendChild(r),z("创建了 id 为 %s 的 iframe。",t),Promise.resolve(t)}remove(e){const t=this.#v.remove(e);if(t)try{document.body.removeChild(t.frame)}catch(e){}return z("销毁了 id 为 %s 的 iframe。",e),Promise.resolve()}tell(e,t){const r=this.#v.get(e);if(!r)return Promise.reject(F("没有创建过 id 为 "+e+" 的 frame。"));if(!r.ready)return Promise.reject(F("id 为 "+e+" 的 frame 还没有准备好。"));const s=r.port;return s?new Promise(((n,o)=>{const i=W();r.msgMap[i]={resolve:n,reject:o},z("向 id 为 %s 的 iframe 下发了任务 %O",e,t),s.postMessage(JSON.stringify(function(e,t){return{__automationWrapperMessageRequest__:!0,__id__:e,__payload__:t}}(i,t)))})):Promise.reject(F("id 为 "+e+" 的 frame 没有 MessagePort。"))}}async function Y(e){const t=(X||(X=new $("https://www.deepl.com/translator",new Q,{loadTimeout:3e4,taskTimeout:2e4})),X);try{return await t.tell(e)}catch(e){let t;if(e instanceof M)switch(e.name){case N:t="加载超时。";break;case I:t="响应超时。";break;case A:t="请不要在翻译过程中关闭划词翻译创建的窗口。";break;default:t=e.message}else t="string"==typeof e?e:(0,S.H8)(e).message;return Promise.reject(new S.Fw(t,{type:S.VC.API_SERVER_ERROR,link:{name:"查看解决方案",url:"https://hcfy.ai/docs/faqs/why-services-always-loading#deepl-only"}}))}}var ee=r(16321),te=r(19891),re=r.n(te);let se;const ne=()=>se||(se=(0,ee.L)((()=>new Promise(((e,t)=>{const r=speechSynthesis.getVoices();r.length?e(r):t(new Error("无法获取系统支持的语音列表，请稍后重试。"))}))),{delay:500,count:10}).then((e=>{const t={},r={};e.forEach((e=>{const s=e.lang;t[s]?t[s].push(e):t[s]=[e];const n=s.slice(0,s.indexOf("-"));r[n]?r[n].indexOf(s)<0&&r[n].push(s):r[n]=[s]}));const s=[],n={};return q()(t,((e,r)=>{1===e.length&&(s.push(r),n[r]=e[0],delete t[r])})),q()(r,((e,t)=>{1===e.length&&delete r[t]})),{singleVoiceMap:n,singleList:s,voicesGroup:t,multipleLang:r}}))),oe=re()({"中文(简体)":"zh-CN","中文(粤语)":"zh-HK","中文(繁体)":"zh-TW",英语:"en","英语(英国)":"en-GB","英语(美国)":"en-US","英语(加拿大)":"en-CA","英语(澳大利亚)":"en-AU","英语(印度)":"en-IN","英语(爱尔兰)":"en-IE","英语(南非)":"en-ZA",德语:"de-DE",西班牙语:"es-ES","西班牙语(墨西哥)":"es-MX","西班牙语(美国)":"es-US","西班牙语(阿根廷)":"es-AR",法语:"fr-FR","法语(加拿大)":"fr-CA",印地语:"hi-IN",印尼语:"id-ID",意大利语:"it-IT",日语:"ja-JP",韩语:"ko-KR",荷兰语:"nl-NL","荷兰语(比利时)":"nl-BE",波兰语:"pl-PL",葡萄牙语:"pt-PT","葡萄牙语(巴西)":"pt-BR",俄语:"ru-RU",土耳其语:"tr-TR",瑞典语:"sv-SE",希伯来语:"he-IL",罗马尼亚语:"ro-RO",泰语:"th-TH",斯洛伐克语:"sk-SK",阿拉伯语:"ar-SA",匈牙利语:"hu-HU",希腊语:"el-GR",挪威语:"nb-NO",丹麦语:"da-DK",芬兰语:"fi-FI",捷克语:"cs-CZ"});re()({"中文(简体)":"zh",英语:"en",法语:"fr",西班牙语:"es",荷兰语:"nl",葡萄牙语:"pt"}).zh="中文";const ie=navigator.userAgent,ae=ie.includes("Mac"),ce=ie.includes("Chrome"),le=ie.includes("Edg"),ue=ce&&!le;ie.includes("Firefox");let de=null;function he(){de?.pause(),speechSynthesis.cancel()}!function(e){const t=(t,r,n)=>{const i=e=>{o("resolve",e),n({__messaging:!0,__messaging_resolve:e})},a=e=>{var t;o("reject",e),n({__messaging:!0,__messaging_reject:(t=e,null==t?t:"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON?t.toJSON():t instanceof Error?{name:t.name,message:t.message}:t)})},c=e(t,{sender:r,resolve:i,reject:a});return(0,s.$X)(c)?(c.then(i,a),!0):c};chrome.runtime.onMessage.addListener(t)}(((e,{resolve:t,reject:r})=>{switch(e.action){case"dom: tesseract OCR":return n=e.options,P.ocr(n);case"dom: write to clipboard":let o=!1;k.running&&(o=!0,k.stop());const i=(s=e.text,h(),u.value=s,u.select(),document.execCommand("copy"));return o&&k.start(),void t(i);case"dom: read clipboard":return void t(f());case"dom: read clipboard image":return void t(m());case"dom: set clipboard monitor":return void(e.data?k.start():k.stop());case"dom: bing dict":try{t(function(e){const t=(new DOMParser).parseFromString(e,"text/html"),r={text:""},s=t.getElementsByClassName("p1-11")[0]?.textContent?.trim();if(s)throw new S.Fw("没有提供词典翻译结果。");const n=t.getElementsByClassName("qdef")[0];if(n){const e=n.getElementsByClassName("hd_p1_1")[0];if(e){const t=[],s=e.getElementsByClassName("hd_prUS")[0];s&&t.push(j(s));const n=e.getElementsByClassName("hd_pr")[0];if(n&&t.push(j(n)),s||n)r.from="英语";else{const s=e.textContent?.trim().slice(1,-1);s&&(r.from="中文(简体)",t.push({value:s}))}t.length&&(r.phonetic=t)}const t=[];n.querySelectorAll("ul li").forEach((e=>{const r=e.getElementsByClassName("pos")[0];if(r){const e=r.nextElementSibling;if(e?.matches(".b_regtxt"))if(r.matches(".web")){const r=e.textContent?.trim();r&&t.push({pos:"网络: ",terms:r.split(/；\s*/)})}else{const s=e.textContent?.trim().split(/；\s*/);s&&t.push({pos:r.textContent?.trim(),terms:s})}}})),t.length&&(r.dict=t)}return r.dict||r.result?.length||(r.error={type:S.VC.API_SERVER_ERROR,message:"无翻译结果。",link:{name:"查看解决方案",url:"https://hcfy.ai/docs/services/free#bingdict"}}),r}(e.html))}catch(e){r(e)}return;case"dom: deepl":return Y(e.params);case"dom: play with audio":return function(e,t){he();const r=new Audio(e);return de=r,Object.assign(r,t),new Promise(((e,t)=>{r.addEventListener("canplay",(()=>{r.play().then(e,t)})),r.addEventListener("error",(e=>{t(e)}))}))}(e.url,e.options);case"dom: play with speech":return function(e,t){he();const r=new SpeechSynthesisUtterance(e),{voiceName:s,systemVoiceLang:n,...o}=t||{};return Object.assign(r,o),new Promise((async(e,t)=>{const o=setTimeout((()=>{let e;speechSynthesis.cancel(),r.lang&&(e=oe[r.lang]),t(new Error("系统语音朗读超时。"+(ue?`Chrome 浏览器提供的网络语音需要连接外网才能使用。你也可以前往设置中选择本地语音朗读${e||""}。`:`如果你的网络状况不佳，可以前往设置中选择本地语音朗读${e||""}。`)))}),1e3);if(r.addEventListener("start",(()=>{clearTimeout(o),e()})),r.addEventListener("error",(e=>{t(e)})),n)if(r.lang||(r.lang=n),s)try{const{voicesGroup:e}=await ne(),t=e[n];if(t){const e=t.find((e=>e.name===s));e&&(r.voice=e)}}catch(e){}else if(ae&&"en-US"===n){const e=["Albert","Bad News","Bahh","Bells","Boing","Bubbles","Cellos","Wobble","Eddy","Flo"];try{const{voicesGroup:t}=await ne(),s=t[n];if(s){const t=s.find((t=>e.every((e=>!t.name.startsWith(e)))));t&&(r.voice=t)}}catch(e){}}speechSynthesis.speak(r)}))}(e.text,e.options)}var s,n}))},17368:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});var s=r(1783),n=r(23298);class o extends Error{constructor(e,t){super(e),null!==t?.type&&(this.type=t?.type||s.V.OTHER),this.link=t?.link,this.context=t?.context,this.errors=t?.errors,this.noRetry=t?.noRetry}toJSON(){return{type:this.type,message:this.message,link:this.link,errors:this.errors?.map((e=>(0,n.x)(e).toJSON()))}}clone(){return new o(this.message,{context:this.context,type:this.type,link:this.link,errors:this.errors,noRetry:this.noRetry})}}},29842:(e,t,r)=>{"use strict";r.d(t,{Fw:()=>s.F,H8:()=>n.H,VC:()=>o.V,xh:()=>i.x});var s=r(17368),n=r(34426),o=r(1783),i=r(23298)},34426:(e,t,r)=>{"use strict";r.d(t,{H:()=>i});var s=r(17368),n=r(46123),o=r.n(n);function i(e){if(e instanceof s.F)return e;if(e instanceof Error)return new s.F(e.message,{type:null});const t=o()(e,"message");return"string"==typeof t?new s.F(t,{type:null}):new s.F("划词翻译内部出现了一个预期之外的错误，如果你看到了这条消息，请反馈给我。",{type:null})}},23298:(e,t,r)=>{"use strict";r.d(t,{x:()=>c});r(61412),r(91883),r(70286);var s=r(17368),n=r(1783),o=r(34426),i=r(5090);const a={401:"登录状态已失效，请重新登录。"};function c(e){if((0,i.NF)(e)){const t=function(e={}){const{url:t,baseURL:r}=e;let s;try{s=new URL(t||"",r)}catch(e){return"远程服务器"}const{host:n}=s;return"https://hs-api.limingkai.cn/"?.includes(n)?"划词翻译服务器":"远程服务器"}({url:e.url}),r="划词翻译服务器"===t;if(e.response){const o=e.response.status;return new s.F(r?a[o]||`划词翻译服务器内部产生了一个错误，请稍后重试。HTTP 响应码：${o}。`:`${t}返回了错误的 HTTP 响应码：${o}。`,{type:n.V.API_SERVER_ERROR})}return new s.F(`${t}没有响应。`,{type:n.V.NETWORK_ERROR,link:{name:"查看解决方案",url:"划词翻译服务器"===t?"https://hcfy.ai/docs/faqs/server-no-response":"https://hcfy.ai/docs/faqs/why-services-always-loading"}})}return(0,o.H)(e)}},7276:(e,t,r)=>{"use strict";r.d(t,{cN:()=>l});r(61412),r(91883),r(70286);var s=r(29842),n=r(5090),o=r(20124);const i=r.n(o)()("hcfy:axiosForAPI");let a=function(e){return e.VIP_OUTDATED="VIP_OUTDATED",e}({});let c=null;function l(e,t,r){const o=new URL(e,"https://hs-api.limingkai.cn/").toString();return(0,n.Z5)(o,t).then((async e=>{const t=e.clone(),n=await t.text();let o;i("接口返回的数据（text 形式）",n);try{o=JSON.parse(n)}catch(l){return r?e:n}if(l=o,l?.isError){i("接口的错误处理",o),o.errorCode===a.VIP_OUTDATED&&chrome.storage.local.set({user:o.data});const e=new s.Fw(o.message,{type:o.errorCode});if(c)return c(e);throw e}var l;return r?e:o}),(e=>{if((0,n.NF)(e)){const t=e.response?.status;if(304===t)return r?e.response:"";401===t&&chrome.storage.local.remove(["user","optionsSyncAt","favoritesSyncAt","historiesSyncAt"])}return c?c(e):Promise.reject(e)}))}},22053:e=>{e.exports=function(e){return e}},79071:e=>{e.exports=function(){}},37581:(e,t,r)=>{"use strict";function s(e,t){let r;r=t?"string"==typeof t?{name:t}:t:{};const s=new(r.ctor||Error)(e,{cause:r.cause});return r.name&&(s.name=r.name),s}r.d(t,{$:()=>s})},5090:(e,t,r)=>{"use strict";r.d(t,{$5:()=>s.$,Z5:()=>a,NF:()=>c,Z4:()=>o.Z,$X:()=>n.$});r(37767),r(29516);var s=r(37581),n=r(85981),o=r(2643);r(74976),r(12980),r(51934),r(99687);class i extends Error{request;response;url;constructor(e,t,r){const s=t instanceof Response;var n;super(s?`Request failed with status code ${t.status}.`:(n=t)instanceof Error?n.message:"Unknown error. See `error.cause` for details."),this.request=r,this.url=e,this.name="FetchError",s?this.response=t:this.cause=t}}function a(e,t){return fetch(e,t).then((r=>{if(!r.ok)throw new i(e,r,t);return r}),(r=>{throw new i(e,r,t)}))}function c(e){return e instanceof i}},2643:(e,t,r)=>{"use strict";function s(e){return"object"==typeof e&&null!=e}r.d(t,{Z:()=>s})},85981:(e,t,r)=>{"use strict";function s(e){return"function"==typeof e?.then}r.d(t,{$:()=>s})},29516:(e,t,r)=>{"use strict";r(22053)},37767:(e,t,r)=>{"use strict";r(69375),r(17546)},74976:(e,t,r)=>{"use strict";AbortSignal.timeout}},r={};function s(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,e=[],s.O=(t,r,n,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],a=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](r[c])))?r.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={210:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,a,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(c)var u=c(s)}for(t&&t(r);l<i.length;l++)o=i[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=globalThis.webpackChunkbrowser_extension=globalThis.webpackChunkbrowser_extension||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=s.O(void 0,[708,853,557],(()=>s(23310)));n=s.O(n)})();