import"./modulepreload-polyfill-Dqv5PPZA.js";import{g as t,d as e,s as a}from"./getAudio-D_HGGnT2.js";import"./localforage-BVRgvwJc.js";const s=new Audio;s.loop=!0;let i="https://files.codelife.cc/itab/widget/tomato/hailang_128.m4a",o="hailang";t(o).then((t=>{i=t}));const r=e("itab-tomato"),n={timeRemaining:25,showTime:"25:00",status:"stop",percentage:0,progress:0};let p=null;function l(t){p||("stop"===n.status&&(s.load(),n.progress=60*n.timeRemaining),t&&(n.progress=t),n.showTime=g(n.progress),s.src=i,s.play(),n.status="play",a({type:"state",data:n},r),p=setInterval((()=>{n.progress=n.progress-1;let t=60*n.timeRemaining;n.percentage=(t-n.progress)/t*100,n.showTime=g(n.progress),a({type:"state",data:n},r),n.progress<=0&&(clearInterval(p),a({type:"state",data:n},r),chrome.notifications.create({type:"basic",iconUrl:"/icon/icon_192.png",title:"iTab新标签页",message:"番茄已完成！"}),m())}),1e3))}function m(){n.progress=0,n.showTime=g(60*n.timeRemaining),n.timeRemaining=n.timeRemaining,n.status="stop",n.percentage=0,s.pause(),p&&clearInterval(p),p=null,a({type:"stop",data:n},r)}function g(t){let e=t%60;return Math.floor(t/60).toString().padStart(2,"0")+":"+e.toString().padStart(2,"0")}r.addEventListener("message",(t=>{if("object"!=typeof t.data.msg)"start"==t.data.msg?l():"stop"==t.data.msg?m():"pause"==t.data.msg&&(p&&clearInterval(p),n.status="pause",s.pause(),p=null,a({type:"pause",data:n},r));else{let{type:e,data:a}=t.data.msg;if("set"===e)n.timeRemaining=a.timeRemaining,n.showTime=a.showTime;else if("switchAudio"===e){let t=o!=a.type;o=a.type,i=a.src,"play"==n.status&&(t||s.paused)&&(s.src=i,s.load(),s.play())}else"volumeSet"===e&&"play"==n.status&&(s.muted=a.isMute)}}));