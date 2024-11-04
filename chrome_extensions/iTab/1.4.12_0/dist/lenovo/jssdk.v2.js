window.SLBSDK = window.SLBSDK || (function(){
  function Log(code, msg){
    (new Image()).src = 'https://hao.lenovo.com.cn/book/debug/r.gif?code='+encodeURIComponent(code)+'&msg='+encodeURIComponent(msg)+'&_t='+Date.now();
  }
  var vMatch = navigator.userAgent.match(/SLBrowser\/(\d+)\.(\d+)\.(\d+)\.(\d+)/);
  var version = null;
  if(vMatch){
    if(external && typeof external.nativeCall==='function'){
      version = {
        toString: function(){return vMatch[0]},
        major: Number(vMatch[1]),
        minor: Number(vMatch[2]),
        revision: Number(vMatch[3]),
        build: Number(vMatch[4])
      };
    }else{
      Log(999999, 'external.nativeCall does not exist.');
    }
  }
  function PromiseResolver(){
    this.resolve = null;
    this.reject = null;
    this.promise = new Promise(function(resolve, reject){
      this.resolve = resolve;
      this.reject  = reject;
    }.bind(this));
  }

  var uuid = 0;
  var PromiseResolverMap = {};
  function Response(id, isSuccess, response) {
    var pr = PromiseResolverMap[id];
    delete PromiseResolverMap[id];

    if(isSuccess){
      pr.resolve(response);
    }else{
      pr.reject(response);
      Log(response.code||999998, response.msg||JSON.stringify(response));
    }
  }
  function sendWithPromise(method, args) {
    args = args || [];
    var pr = new PromiseResolver();
    var id = method+'_'+uuid;
    uuid++;
    PromiseResolverMap[id] = pr;
    args.unshift(id);
    external.nativeCall(method, args);
    return pr.promise;
  }
  var ListenerMap = {};
  function ListenerCallback(event, args) {
    var EventCallbackMap = ListenerMap[event];
    if(!EventCallbackMap){
      return;
    }

    var id = null;
    for(id in EventCallbackMap){
      EventCallbackMap[id].call(null, args);
    }
  }
  window.SLLIDNotify = function(res){
    ListenerCallback('LIDNotify', res);
  };
  function addListener(event, callback) {
    ListenerMap[event] = ListenerMap[event] || {};
    var id = uuid++;
    ListenerMap[event][id] = callback;
    if(version){
      if(version.major>=6 && version.build!==400){
        if(event === 'LIDNotify'){  // 如果已经是登录状态，会立即触发一次回调。
          sendWithPromise('SLGetLoginStatus').then(function(res){
            if(res.status === 1 && res.lenovoid.trim()){
              callback({
                action: 'login',
                code: 1,
                lenovoid: res.lenovoid,
                realm: res.realm,
                token: res.token,
                username: res.username
              })
            }
          });
        }
      }else{
        external.nativeCall("SLRegisterNofity", ["LIDNotify"]);
      }
    }else{
      // 'no SLBrowser.'
    }
    return {
      event: event,
      id: id
    };
  }
  function removeListener(listener) {
    var callback = ListenerMap[listener.event] &&
        ListenerMap[listener.event][listener.id];
    if(callback){
      delete ListenerMap[listener.event][listener.id];
      return true;
    }
    return false;
  }
  function nativeCall(method, args){
    args = args || [];
    if(version){
      if(version.major>=6 && version.build!==400){
        return sendWithPromise(method, args);
      }else{
        return Promise.resolve(external.nativeCall(method, args));
      }
    }else{
      return Promise.reject('no SLBrowser.');
    }
  }

  return {
    version: version,
    Response: Response,
    sendWithPromise: sendWithPromise,
    ListenerCallback: ListenerCallback,
    addListener: addListener,
    removeListener: removeListener,
    nativeCall: nativeCall
  };
})();
