"use strict";(()=>{function d(n){let _={delay:1e3,retry:10};function e(E){n.postMessage({key:"__VUE_DEVTOOLS_VUE_DETECTED_EVENT__",data:E},"*")}function t(){if(!!window.__NUXT__){e({devtoolsEnabled:window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,vueDetected:!0,nuxtDetected:!0,vitePluginDetected:!!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,vitePluginClientUrl:window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__});return}if(!!window.__VITEPRESS__){e({devtoolsEnabled:window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,vueDetected:!0,vitePressDetected:!0,vitePluginDetected:!!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,vitePluginClientUrl:window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__});return}if(!!window.__VUE__){e({devtoolsEnabled:window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,vueDetected:!0,vitePluginDetected:!!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,vitePluginClientUrl:window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__});return}_.retry>0&&(_.retry--,setTimeout(()=>{t()},_.delay),_.delay*=5)}setTimeout(()=>{t()},100)}document instanceof HTMLDocument&&d(window);})();