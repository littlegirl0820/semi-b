import{S as kt,i as Et,s as xt,k as m,q as v,a as C,l as b,m as y,r as w,h as l,c as L,p as q,n as _,I as Te,b as E,G as h,J as Wt,K as ut,L as tt,B as G,M as Ht,N as Ct,O as Ae,e as pt,u as Rt,P as he,t as dt,d as Ne,f as mt,g as Be,w as Lt,x as It,y as Pt,z as Dt}from"../../chunks/index-86dad10a.js";const nt=Object.create(null);nt.open="0";nt.close="1";nt.ping="2";nt.pong="3";nt.message="4";nt.upgrade="5";nt.noop="6";const Nt=Object.create(null);Object.keys(nt).forEach(s=>{Nt[nt[s]]=s});const Oe={type:"error",data:"parser error"},Se=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ce=typeof ArrayBuffer=="function",Le=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,fe=({type:s,data:t},e,n)=>Se&&t instanceof Blob?e?n(t):Jt(t,n):Ce&&(t instanceof ArrayBuffer||Le(t))?e?n(t):Jt(new Blob([t]),n):n(nt[s]+(t||"")),Jt=(s,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+n)},e.readAsDataURL(s)},Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Gt.length;s++)wt[Gt.charCodeAt(s)]=s;const Ie=s=>{let t=s.length*.75,e=s.length,n,r=0,i,o,a,c;s[s.length-1]==="="&&(t--,s[s.length-2]==="="&&t--);const f=new ArrayBuffer(t),p=new Uint8Array(f);for(n=0;n<e;n+=4)i=wt[s.charCodeAt(n)],o=wt[s.charCodeAt(n+1)],a=wt[s.charCodeAt(n+2)],c=wt[s.charCodeAt(n+3)],p[r++]=i<<2|o>>4,p[r++]=(o&15)<<4|a>>2,p[r++]=(a&3)<<6|c&63;return f},Pe=typeof ArrayBuffer=="function",ue=(s,t)=>{if(typeof s!="string")return{type:"message",data:pe(s,t)};const e=s.charAt(0);return e==="b"?{type:"message",data:De(s.substring(1),t)}:Nt[e]?s.length>1?{type:Nt[e],data:s.substring(1)}:{type:Nt[e]}:Oe},De=(s,t)=>{if(Pe){const e=Ie(s);return pe(e,t)}else return{base64:!0,data:s}},pe=(s,t)=>{switch(t){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},de=String.fromCharCode(30),Ve=(s,t)=>{const e=s.length,n=new Array(e);let r=0;s.forEach((i,o)=>{fe(i,!1,a=>{n[o]=a,++r===e&&t(n.join(de))})})},Xe=(s,t)=>{const e=s.split(de),n=[];for(let r=0;r<e.length;r++){const i=ue(e[r],t);if(n.push(i),i.type==="error")break}return n},me=4;function U(s){if(s)return ze(s)}function ze(s){for(var t in U.prototype)s[t]=U.prototype[t];return s}U.prototype.on=U.prototype.addEventListener=function(s,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(t),this};U.prototype.once=function(s,t){function e(){this.off(s,e),t.apply(this,arguments)}return e.fn=t,this.on(s,e),this};U.prototype.off=U.prototype.removeListener=U.prototype.removeAllListeners=U.prototype.removeEventListener=function(s,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+s];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,r=0;r<e.length;r++)if(n=e[r],n===t||n.fn===t){e.splice(r,1);break}return e.length===0&&delete this._callbacks["$"+s],this};U.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+s],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,r=e.length;n<r;++n)e[n].apply(this,t)}return this};U.prototype.emitReserved=U.prototype.emit;U.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};U.prototype.hasListeners=function(s){return!!this.listeners(s).length};const it=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function be(s,...t){return t.reduce((e,n)=>(s.hasOwnProperty(n)&&(e[n]=s[n]),e),{})}const qe=setTimeout,Ye=clearTimeout;function Vt(s,t){t.useNativeTimers?(s.setTimeoutFn=qe.bind(it),s.clearTimeoutFn=Ye.bind(it)):(s.setTimeoutFn=setTimeout.bind(it),s.clearTimeoutFn=clearTimeout.bind(it))}const Ue=1.33;function Me(s){return typeof s=="string"?He(s):Math.ceil((s.byteLength||s.size)*Ue)}function He(s){let t=0,e=0;for(let n=0,r=s.length;n<r;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}class Fe extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class ye extends U{constructor(t){super(),this.writable=!1,Vt(this,t),this.opts=t,this.query=t.query,this.readyState="",this.socket=t.socket}onError(t,e,n){return super.emitReserved("error",new Fe(t,e,n)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=ue(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}}const ge="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),zt=64,Ke={};let jt=0,Tt=0,Qt;function Zt(s){let t="";do t=ge[s%zt]+t,s=Math.floor(s/zt);while(s>0);return t}function _e(){const s=Zt(+new Date);return s!==Qt?(jt=0,Qt=s):s+"."+Zt(jt++)}for(;Tt<zt;Tt++)Ke[ge[Tt]]=Tt;function ve(s){let t="";for(let e in s)s.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(s[e]));return t}function $e(s){let t={},e=s.split("&");for(let n=0,r=e.length;n<r;n++){let i=e[n].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}let we=!1;try{we=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const We=we;function ke(s){const t=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||We))return new XMLHttpRequest}catch{}if(!t)try{return new it[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Je(){}const Ge=function(){return new ke({xdomain:!1}).responseType!=null}();class je extends ye{constructor(t){if(super(t),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let r=location.port;r||(r=n?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||r!==t.port,this.xs=t.secure!==n}const e=t&&t.forceBase64;this.supportsBinary=Ge&&!e}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Xe(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Ve(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let n="";this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=_e()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.opts.port&&(e==="https"&&Number(this.opts.port)!==443||e==="http"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port);const r=ve(t),i=this.opts.hostname.indexOf(":")!==-1;return e+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new et(this.uri(),t)}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(r,i)=>{this.onError("xhr post error",r,i)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class et extends U{constructor(t,e){super(),Vt(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=e.async!==!1,this.data=e.data!==void 0?e.data:null,this.create()}create(){const t=be(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new ke(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&e.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{e.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{e.readyState===4&&(e.status===200||e.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof e.status=="number"?e.status:0)},0))},e.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document<"u"&&(this.index=et.requestsCount++,et.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Je,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete et.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}et.requestsCount=0;et.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",te);else if(typeof addEventListener=="function"){const s="onpagehide"in it?"pagehide":"unload";addEventListener(s,te,!1)}}function te(){for(let s in et.requests)et.requests.hasOwnProperty(s)&&et.requests[s].abort()}const Ee=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0))(),At=it.WebSocket||it.MozWebSocket,ee=!0,Qe="arraybuffer",ne=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ze extends ye{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,n=ne?{}:be(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=ee&&!ne?e?new At(t,e):new At(t):new At(t,e,n)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType||Qe,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],r=e===t.length-1;fe(n,this.supportsBinary,i=>{const o={};try{ee&&this.ws.send(i)}catch{}r&&Ee(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let n="";this.opts.port&&(e==="wss"&&Number(this.opts.port)!==443||e==="ws"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=_e()),this.supportsBinary||(t.b64=1);const r=ve(t),i=this.opts.hostname.indexOf(":")!==-1;return e+"://"+(i?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}check(){return!!At}}const tn={websocket:Ze,polling:je},en=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,nn=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function qt(s){const t=s,e=s.indexOf("["),n=s.indexOf("]");e!=-1&&n!=-1&&(s=s.substring(0,e)+s.substring(e,n).replace(/:/g,";")+s.substring(n,s.length));let r=en.exec(s||""),i={},o=14;for(;o--;)i[nn[o]]=r[o]||"";return e!=-1&&n!=-1&&(i.source=t,i.host=i.host.substring(1,i.host.length-1).replace(/;/g,":"),i.authority=i.authority.replace("[","").replace("]","").replace(/;/g,":"),i.ipv6uri=!0),i.pathNames=sn(i,i.path),i.queryKey=rn(i,i.query),i}function sn(s,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function rn(s,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,r,i){r&&(e[r]=i)}),e}let ct=class extends U{constructor(t,e={}){super(),t&&typeof t=="object"&&(e=t,t=null),t?(t=qt(t),e.hostname=t.host,e.secure=t.protocol==="https"||t.protocol==="wss",e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=qt(e.host).host),Vt(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=$e(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=me,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new tn[t](n)}open(){let t;if(this.opts.rememberUpgrade&&ct.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch{this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",e=>this.onClose("transport close",e))}probe(t){let e=this.createTransport(t),n=!1;ct.priorWebsocketSuccess=!1;const r=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;ct.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(p(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=e.name,this.emitReserved("upgradeError",u)}}))};function i(){n||(n=!0,p(),e.close(),e=null)}const o=d=>{const u=new Error("probe error: "+d);u.transport=e.name,i(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function c(){o("socket closed")}function f(d){e&&d.name!==e.name&&i()}const p=()=>{e.removeListener("open",r),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",f)};e.once("open",r),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",f),e.open()}onOpen(){if(this.readyState="open",ct.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const r=this.writeBuffer[n].data;if(r&&(e+=Me(r)),n>0&&e>this.maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}write(t,e,n){return this.sendPacket("message",t,e,n),this}send(t,e,n){return this.sendPacket("message",t,e,n),this}sendPacket(t,e,n,r){if(typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const i={type:t,data:e,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}onError(t){ct.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let n=0;const r=t.length;for(;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}};ct.protocol=me;function on(s,t="",e){let n=s;e=e||typeof location<"u"&&location,s==null&&(s=e.protocol+"//"+e.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=e.protocol+s:s=e.host+s),/^(https?|wss?):\/\//.test(s)||(typeof e<"u"?s=e.protocol+"//"+s:s="https://"+s),n=qt(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+t,n.href=n.protocol+"://"+i+(e&&e.port===n.port?"":":"+n.port),n}const an=typeof ArrayBuffer=="function",ln=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,xe=Object.prototype.toString,cn=typeof Blob=="function"||typeof Blob<"u"&&xe.call(Blob)==="[object BlobConstructor]",hn=typeof File=="function"||typeof File<"u"&&xe.call(File)==="[object FileConstructor]";function Ft(s){return an&&(s instanceof ArrayBuffer||ln(s))||cn&&s instanceof Blob||hn&&s instanceof File}function Bt(s,t){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let e=0,n=s.length;e<n;e++)if(Bt(s[e]))return!0;return!1}if(Ft(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Bt(s.toJSON(),!0);for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e)&&Bt(s[e]))return!0;return!1}function fn(s){const t=[],e=s.data,n=s;return n.data=Yt(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Yt(s,t){if(!s)return s;if(Ft(s)){const e={_placeholder:!0,num:t.length};return t.push(s),e}else if(Array.isArray(s)){const e=new Array(s.length);for(let n=0;n<s.length;n++)e[n]=Yt(s[n],t);return e}else if(typeof s=="object"&&!(s instanceof Date)){const e={};for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=Yt(s[n],t));return e}return s}function un(s,t){return s.data=Ut(s.data,t),s.attachments=void 0,s}function Ut(s,t){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<t.length)return t[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let e=0;e<s.length;e++)s[e]=Ut(s[e],t);else if(typeof s=="object")for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&(s[e]=Ut(s[e],t));return s}const pn=5;var D;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(D||(D={}));class dn{constructor(t){this.replacer=t}encode(t){return(t.type===D.EVENT||t.type===D.ACK)&&Bt(t)?(t.type=t.type===D.EVENT?D.BINARY_EVENT:D.BINARY_ACK,this.encodeAsBinary(t)):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===D.BINARY_EVENT||t.type===D.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=fn(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}class Kt extends U{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t),e.type===D.BINARY_EVENT||e.type===D.BINARY_ACK?(this.reconstructor=new mn(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(Ft(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(D[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===D.BINARY_EVENT||n.type===D.BINARY_ACK){const i=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(i,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const i=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(i,e)}else n.nsp="/";const r=t.charAt(e+1);if(r!==""&&Number(r)==r){const i=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(i,e+1))}if(t.charAt(++e)){const i=this.tryParse(t.substr(e));if(Kt.isPayloadValid(n.type,i))n.data=i;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case D.CONNECT:return typeof e=="object";case D.DISCONNECT:return e===void 0;case D.CONNECT_ERROR:return typeof e=="string"||typeof e=="object";case D.EVENT:case D.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case D.ACK:case D.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class mn{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=un(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const bn=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Kt,Encoder:dn,get PacketType(){return D},protocol:pn},Symbol.toStringTag,{value:"Module"}));function Z(s,t,e){return s.on(t,e),function(){s.off(t,e)}}const yn=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Re extends U{constructor(t,e,n){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Z(t,"open",this.onopen.bind(this)),Z(t,"packet",this.onpacket.bind(this)),Z(t,"error",this.onerror.bind(this)),Z(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(yn.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');e.unshift(t);const n={type:D.EVENT,data:e};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const o=this.ids++,a=e.pop();this._registerAckCallback(o,a),n.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(t,e){const n=this.flags.timeout;if(n===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let i=0;i<this.sendBuffer.length;i++)this.sendBuffer[i].id===t&&this.sendBuffer.splice(i,1);e.call(this,new Error("operation has timed out"))},n);this.acks[t]=(...i)=>{this.io.clearTimeoutFn(r),e.apply(this,[null,...i])}}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this.packet({type:D.CONNECT,data:t})}):this.packet({type:D.CONNECT,data:this.auth})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case D.CONNECT:if(t.data&&t.data.sid){const r=t.data.sid;this.onconnect(r)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case D.EVENT:case D.BINARY_EVENT:this.onevent(t);break;case D.ACK:case D.BINARY_ACK:this.onack(t);break;case D.DISCONNECT:this.ondisconnect();break;case D.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t)}ack(t){const e=this;let n=!1;return function(...r){n||(n=!0,e.packet({type:D.ACK,id:t,data:r}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t){this.id=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:D.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function bt(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}bt.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*s);s=Math.floor(t*10)&1?s+e:s-e}return Math.min(s,this.max)|0};bt.prototype.reset=function(){this.attempts=0};bt.prototype.setMin=function(s){this.ms=s};bt.prototype.setMax=function(s){this.max=s};bt.prototype.setJitter=function(s){this.jitter=s};class Mt extends U{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Vt(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new bt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const r=e.parser||bn;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new ct(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=Z(e,"open",function(){n.onopen(),t&&t()}),i=Z(e,"error",o=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",o),t?t(o):n.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),e.close(),e.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(i),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Z(t,"ping",this.onping.bind(this)),Z(t,"data",this.ondata.bind(this)),Z(t,"error",this.onerror.bind(this)),Z(t,"close",this.onclose.bind(this)),Z(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Ee(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n||(n=new Re(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(r=>{r?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",r)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const vt={};function Ot(s,t){typeof s=="object"&&(t=s,s=void 0),t=t||{};const e=on(s,t.path||"/socket.io"),n=e.source,r=e.id,i=e.path,o=vt[r]&&i in vt[r].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new Mt(n,t):(vt[r]||(vt[r]=new Mt(n,t)),c=vt[r]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Ot,{Manager:Mt,Socket:Re,io:Ot,connect:Ot});function gn(s){let t,e,n,r,i,o,a,c,f,p,d,u,k,g,B,O,P,N,R,A,V,T,S,Y,W,J,I,st,rt,$,j,ot,ht;return{c(){t=m("div"),e=m("a"),n=m("h1"),r=m("span"),i=v("大"),o=v("喜利"),a=m("span"),c=v("伝"),f=v("言ゲーム"),p=C(),d=m("div"),u=m("button"),k=v("1台でプレイ"),g=C(),B=m("select"),O=m("option"),P=v("4人"),N=m("option"),R=v("6人"),A=m("option"),V=v("8人"),T=m("option"),S=v("10人"),Y=v(`
  で遊ぶ`),W=m("br"),J=C(),I=m("button"),st=v("オンラインでプレイ"),rt=C(),$=m("input"),j=m("br"),this.h()},l(H){t=b(H,"DIV",{class:!0});var K=y(t);e=b(K,"A",{href:!0,target:!0,rel:!0,style:!0,class:!0});var M=y(e);n=b(M,"H1",{class:!0});var x=y(n);r=b(x,"SPAN",{style:!0});var X=y(r);i=w(X,"大"),X.forEach(l),o=w(x,"喜利"),a=b(x,"SPAN",{style:!0});var z=y(a);c=w(z,"伝"),z.forEach(l),f=w(x,"言ゲーム"),x.forEach(l),M.forEach(l),K.forEach(l),p=L(H),d=b(H,"DIV",{class:!0});var F=y(d);u=b(F,"BUTTON",{class:!0});var at=y(u);k=w(at,"1台でプレイ"),at.forEach(l),g=L(F),B=b(F,"SELECT",{name:!0,class:!0});var Q=y(B);O=b(Q,"OPTION",{class:!0});var yt=y(O);P=w(yt,"4人"),yt.forEach(l),N=b(Q,"OPTION",{class:!0});var ft=y(N);R=w(ft,"6人"),ft.forEach(l),A=b(Q,"OPTION",{class:!0});var gt=y(A);V=w(gt,"8人"),gt.forEach(l),T=b(Q,"OPTION",{class:!0});var _t=y(T);S=w(_t,"10人"),_t.forEach(l),Q.forEach(l),Y=w(F,`
  で遊ぶ`),W=b(F,"BR",{}),J=L(F),I=b(F,"BUTTON",{class:!0});var lt=y(I);st=w(lt,"オンラインでプレイ"),lt.forEach(l),rt=L(F),$=b(F,"INPUT",{placeholder:!0,class:!0}),j=b(F,"BR",{}),F.forEach(l),this.h()},h(){q(r,"font-size","130%"),q(r,"color","salmon"),q(a,"font-size","130%"),q(a,"color","cornflowerblue"),_(n,"class","svelte-1gv6ovb"),_(e,"href","http://abehiroshi.la.coocan.jp/"),_(e,"target","_blank"),_(e,"rel","noreferrer"),q(e,"font-size","120%"),q(e,"text-decoration","none"),_(e,"class","svelte-1gv6ovb"),_(t,"class","toparea svelte-1gv6ovb"),_(u,"class","buttonLocal svelte-1gv6ovb"),O.__value="4",O.value=O.__value,_(O,"class","svelte-1gv6ovb"),N.__value="6",N.value=N.__value,_(N,"class","svelte-1gv6ovb"),A.__value="8",A.value=A.__value,_(A,"class","svelte-1gv6ovb"),T.__value="10",T.value=T.__value,_(T,"class","svelte-1gv6ovb"),_(B,"name","month"),_(B,"class","svelte-1gv6ovb"),s[1]===void 0&&Te(()=>s[4].call(B)),_(I,"class","buttonOnline svelte-1gv6ovb"),_($,"placeholder","ユーザ名"),_($,"class","textb svelte-1gv6ovb"),_(d,"class","downarea svelte-1gv6ovb")},m(H,K){E(H,t,K),h(t,e),h(e,n),h(n,r),h(r,i),h(n,o),h(n,a),h(a,c),h(n,f),E(H,p,K),E(H,d,K),h(d,u),h(u,k),h(d,g),h(d,B),h(B,O),h(O,P),h(B,N),h(N,R),h(B,A),h(A,V),h(B,T),h(T,S),Wt(B,s[1]),h(d,Y),h(d,W),h(d,J),h(d,I),h(I,st),h(d,rt),h(d,$),ut($,s[0]),h(d,j),ot||(ht=[tt(u,"click",s[2]),tt(B,"change",s[4]),tt(I,"click",s[3]),tt($,"input",s[5])],ot=!0)},p(H,[K]){K&2&&Wt(B,H[1]),K&1&&$.value!==H[0]&&ut($,H[0])},i:G,o:G,d(H){H&&l(t),H&&l(p),H&&l(d),ot=!1,Ht(ht)}}}function _n(s,t,e){const n=Ct();let r="",i="6";function o(){n("startLocal",{userName:r,turns:Number(i)})}function a(){let p=Ot();p.emit("join",{username:r}),p.on("join",d=>{d.result==="OK"?n("startOnline",{userName:r,turns:Number(i),socket:p}):alert("参加が拒否されました: "+(d.reason??"原因不明"))})}function c(){i=Ae(this),e(1,i)}function f(){r=this.value,e(0,r)}return[r,i,o,a,c,f]}class vn extends kt{constructor(t){super(),Et(this,t,_n,gn,xt,{})}}function wn(s){let t,e,n,r,i,o,a,c,f,p,d,u,k,g,B,O,P,N,R,A,V;return{c(){t=m("div"),e=m("h1"),n=v("TURN "),r=v(s[3]),i=C(),o=m("h2"),a=v("他の人が回答作成中です。"),c=C(),f=m("div"),p=m("div"),d=m("div"),u=C(),k=m("div"),g=C(),B=m("div"),O=C(),P=m("div"),N=C(),R=m("div"),A=C(),V=m("div"),this.h()},l(T){t=b(T,"DIV",{class:!0});var S=y(t);e=b(S,"H1",{});var Y=y(e);n=w(Y,"TURN "),r=w(Y,s[3]),Y.forEach(l),i=L(S),o=b(S,"H2",{});var W=y(o);a=w(W,"他の人が回答作成中です。"),W.forEach(l),S.forEach(l),c=L(T),f=b(T,"DIV",{class:!0});var J=y(f);p=b(J,"DIV",{class:!0});var I=y(p);d=b(I,"DIV",{class:!0}),y(d).forEach(l),u=L(I),k=b(I,"DIV",{class:!0}),y(k).forEach(l),g=L(I),B=b(I,"DIV",{class:!0}),y(B).forEach(l),O=L(I),P=b(I,"DIV",{class:!0}),y(P).forEach(l),N=L(I),R=b(I,"DIV",{class:!0}),y(R).forEach(l),A=L(I),V=b(I,"DIV",{class:!0}),y(V).forEach(l),I.forEach(l),J.forEach(l),this.h()},h(){_(t,"class","toparea"),_(d,"class","circle2"),_(k,"class","circle2"),_(B,"class","circle2"),_(P,"class","shadow"),_(R,"class","shadow"),_(V,"class","shadow"),_(p,"class","wrapper"),_(f,"class","downarea")},m(T,S){E(T,t,S),h(t,e),h(e,n),h(e,r),h(t,i),h(t,o),h(o,a),E(T,c,S),E(T,f,S),h(f,p),h(p,d),h(p,u),h(p,k),h(p,g),h(p,B),h(p,O),h(p,P),h(p,N),h(p,R),h(p,A),h(p,V)},p(T,S){S&8&&Rt(r,T[3])},d(T){T&&l(t),T&&l(c),T&&l(f)}}}function kn(s){let t,e,n,r,i,o,a,c,f,p,d,u,k,g,B,O,P,N,R,A,V;return{c(){t=m("div"),e=m("h1"),n=v("TURN "),r=v(s[3]),i=C(),o=m("h2"),a=v("他の人がお題作成中です。"),c=C(),f=m("div"),p=m("div"),d=m("div"),u=C(),k=m("div"),g=C(),B=m("div"),O=C(),P=m("div"),N=C(),R=m("div"),A=C(),V=m("div"),this.h()},l(T){t=b(T,"DIV",{class:!0});var S=y(t);e=b(S,"H1",{});var Y=y(e);n=w(Y,"TURN "),r=w(Y,s[3]),Y.forEach(l),i=L(S),o=b(S,"H2",{});var W=y(o);a=w(W,"他の人がお題作成中です。"),W.forEach(l),S.forEach(l),c=L(T),f=b(T,"DIV",{class:!0});var J=y(f);p=b(J,"DIV",{class:!0});var I=y(p);d=b(I,"DIV",{class:!0}),y(d).forEach(l),u=L(I),k=b(I,"DIV",{class:!0}),y(k).forEach(l),g=L(I),B=b(I,"DIV",{class:!0}),y(B).forEach(l),O=L(I),P=b(I,"DIV",{class:!0}),y(P).forEach(l),N=L(I),R=b(I,"DIV",{class:!0}),y(R).forEach(l),A=L(I),V=b(I,"DIV",{class:!0}),y(V).forEach(l),I.forEach(l),J.forEach(l),this.h()},h(){_(t,"class","toparea"),_(d,"class","circle"),_(k,"class","circle"),_(B,"class","circle"),_(P,"class","shadow"),_(R,"class","shadow"),_(V,"class","shadow"),_(p,"class","wrapper"),_(f,"class","downarea")},m(T,S){E(T,t,S),h(t,e),h(e,n),h(e,r),h(t,i),h(t,o),h(o,a),E(T,c,S),E(T,f,S),h(f,p),h(p,d),h(p,u),h(p,k),h(p,g),h(p,B),h(p,O),h(p,P),h(p,N),h(p,R),h(p,A),h(p,V)},p(T,S){S&8&&Rt(r,T[3])},d(T){T&&l(t),T&&l(c),T&&l(f)}}}function En(s){let t,e,n,r,i,o,a,c,f,p;function d(R,A){return R[3]===1?Tn:R[3]%2===0?Rn:xn}let u=d(s),k=u(s),g=s[3]>=2&&se(s);function B(R,A){return R[3]%2===1?On:Bn}let O=B(s),P=O(s),N=s[2]&&re();return{c(){t=m("div"),e=m("h1"),n=v("TURN "),r=v(s[3]),i=C(),k.c(),o=C(),a=m("div"),g&&g.c(),c=C(),f=m("div"),P.c(),p=C(),N&&N.c(),this.h()},l(R){t=b(R,"DIV",{class:!0});var A=y(t);e=b(A,"H1",{});var V=y(e);n=w(V,"TURN "),r=w(V,s[3]),V.forEach(l),i=L(A),k.l(A),A.forEach(l),o=L(R),a=b(R,"DIV",{class:!0});var T=y(a);g&&g.l(T),T.forEach(l),c=L(R),f=b(R,"DIV",{class:!0});var S=y(f);P.l(S),p=L(S),N&&N.l(S),S.forEach(l),this.h()},h(){_(t,"class","toparea"),_(a,"class","middlearea"),_(f,"class","downarea")},m(R,A){E(R,t,A),h(t,e),h(e,n),h(e,r),h(t,i),k.m(t,null),E(R,o,A),E(R,a,A),g&&g.m(a,null),E(R,c,A),E(R,f,A),P.m(f,null),h(f,p),N&&N.m(f,null)},p(R,A){A&8&&Rt(r,R[3]),u!==(u=d(R))&&(k.d(1),k=u(R),k&&(k.c(),k.m(t,null))),R[3]>=2?g?g.p(R,A):(g=se(R),g.c(),g.m(a,null)):g&&(g.d(1),g=null),O===(O=B(R))&&P?P.p(R,A):(P.d(1),P=O(R),P&&(P.c(),P.m(f,p))),R[2]?N||(N=re(),N.c(),N.m(f,null)):N&&(N.d(1),N=null)},d(R){R&&l(t),k.d(),R&&l(o),R&&l(a),g&&g.d(),R&&l(c),R&&l(f),P.d(),N&&N.d()}}}function xn(s){let t,e,n,r,i;return{c(){t=m("h2"),e=v("以下の回答にふさわしい"),n=m("span"),r=v("大喜利のお題"),i=v("を入力してください。"),this.h()},l(o){t=b(o,"H2",{});var a=y(t);e=w(a,"以下の回答にふさわしい"),n=b(a,"SPAN",{style:!0});var c=y(n);r=w(c,"大喜利のお題"),c.forEach(l),i=w(a,"を入力してください。"),a.forEach(l),this.h()},h(){q(n,"font-size","120%"),q(n,"font-weight","bold"),q(n,"color","salmon")},m(o,a){E(o,t,a),h(t,e),h(t,n),h(n,r),h(t,i)},d(o){o&&l(t)}}}function Rn(s){let t,e,n,r,i;return{c(){t=m("h2"),e=v("以下の大喜利のお題に対する"),n=m("span"),r=v("回答"),i=v("を入力してください。"),this.h()},l(o){t=b(o,"H2",{});var a=y(t);e=w(a,"以下の大喜利のお題に対する"),n=b(a,"SPAN",{style:!0});var c=y(n);r=w(c,"回答"),c.forEach(l),i=w(a,"を入力してください。"),a.forEach(l),this.h()},h(){q(n,"font-size","120%"),q(n,"font-weight","bold"),q(n,"color","cornflowerblue")},m(o,a){E(o,t,a),h(t,e),h(t,n),h(n,r),h(t,i)},d(o){o&&l(t)}}}function Tn(s){let t,e,n,r;return{c(){t=m("h2"),e=m("span"),n=v("大喜利のお題"),r=v("を入力してください。"),this.h()},l(i){t=b(i,"H2",{});var o=y(t);e=b(o,"SPAN",{style:!0});var a=y(e);n=w(a,"大喜利のお題"),a.forEach(l),r=w(o,"を入力してください。"),o.forEach(l),this.h()},h(){q(e,"font-size","120%"),q(e,"font-weight","bold"),q(e,"color","salmon")},m(i,o){E(i,t,o),h(t,e),h(e,n),h(t,r)},d(i){i&&l(t)}}}function se(s){let t;function e(i,o){return i[3]%2===0?Nn:An}let n=e(s),r=n(s);return{c(){r.c(),t=pt()},l(i){r.l(i),t=pt()},m(i,o){r.m(i,o),E(i,t,o)},p(i,o){n===(n=e(i))&&r?r.p(i,o):(r.d(1),r=n(i),r&&(r.c(),r.m(t.parentNode,t)))},d(i){r.d(i),i&&l(t)}}}function An(s){let t,e,n,r,i;return{c(){t=m("div"),e=m("p"),n=v("「"),r=v(s[4]),i=v("」"),this.h()},l(o){t=b(o,"DIV",{class:!0});var a=y(t);e=b(a,"P",{});var c=y(e);n=w(c,"「"),r=w(c,s[4]),i=w(c,"」"),c.forEach(l),a.forEach(l),this.h()},h(){_(t,"class","balloonB")},m(o,a){E(o,t,a),h(t,e),h(e,n),h(e,r),h(e,i)},p(o,a){a&16&&Rt(r,o[4])},d(o){o&&l(t)}}}function Nn(s){let t,e,n,r,i;return{c(){t=m("div"),e=m("p"),n=v("『"),r=v(s[4]),i=v("』"),this.h()},l(o){t=b(o,"DIV",{class:!0});var a=y(t);e=b(a,"P",{});var c=y(e);n=w(c,"『"),r=w(c,s[4]),i=w(c,"』"),c.forEach(l),a.forEach(l),this.h()},h(){_(t,"class","balloonR")},m(o,a){E(o,t,a),h(t,e),h(e,n),h(e,r),h(e,i)},p(o,a){a&16&&Rt(r,o[4])},d(o){o&&l(t)}}}function Bn(s){let t,e,n,r,i,o;return{c(){t=m("input"),e=C(),n=m("button"),r=v("決定"),this.h()},l(a){t=b(a,"INPUT",{placeholder:!0,maxlength:!0,class:!0}),e=L(a),n=b(a,"BUTTON",{class:!0});var c=y(n);r=w(c,"決定"),c.forEach(l),this.h()},h(){_(t,"placeholder","回答を入力("+St+"字以内)"),_(t,"maxlength",St),_(t,"class","textb"),_(n,"class","buttonB")},m(a,c){E(a,t,c),ut(t,s[5]),E(a,e,c),E(a,n,c),h(n,r),i||(o=[tt(t,"input",s[10]),tt(n,"click",s[6])],i=!0)},p(a,c){c&32&&t.value!==a[5]&&ut(t,a[5])},d(a){a&&l(t),a&&l(e),a&&l(n),i=!1,Ht(o)}}}function On(s){let t,e,n,r,i,o;return{c(){t=m("input"),e=C(),n=m("button"),r=v("決定"),this.h()},l(a){t=b(a,"INPUT",{placeholder:!0,maxlength:!0,class:!0}),e=L(a),n=b(a,"BUTTON",{class:!0});var c=y(n);r=w(c,"決定"),c.forEach(l),this.h()},h(){_(t,"placeholder","お題を入力("+St+"字以内)"),_(t,"maxlength",St),_(t,"class","textb"),_(n,"class","buttonR")},m(a,c){E(a,t,c),ut(t,s[5]),E(a,e,c),E(a,n,c),h(n,r),i||(o=[tt(t,"input",s[9]),tt(n,"click",s[6])],i=!0)},p(a,c){c&32&&t.value!==a[5]&&ut(t,a[5])},d(a){a&&l(t),a&&l(e),a&&l(n),i=!1,Ht(o)}}}function re(s){let t,e;return{c(){t=m("h3"),e=v("入力せんかいシバくぞ")},l(n){t=b(n,"H3",{});var r=y(t);e=w(r,"入力せんかいシバくぞ"),r.forEach(l)},m(n,r){E(n,t,r),h(t,e)},d(n){n&&l(t)}}}function Sn(s){let t,e;return{c(){t=m("style"),e=v(`h1 {
      text-align: center;
    }

    h2 {
      font-weight: normal;
      text-align: center;
    }

    .toparea {
      text-align: center;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .downarea {
      text-align: center;
      vertical-align: bottom;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      width: 95%;
    }

    /* https://photopizza.design/css_loading/ より引用 */
    .wrapper {
      width: 200px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .circle {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: salmon;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .circle2 {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: cornflowerblue;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle2 {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle2:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle2:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .shadow {
      width: 20px;
      height: 4px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 62px;
      transform-origin: 50%;
      z-index: -1;
      left: 15%;
      filter: blur(1px);
      animation: shadow 0.5s alternate infinite ease;
    }

    @keyframes shadow {
      0% {
        transform: scaleX(1.5);
      }

      40% {
        transform: scaleX(1);
        opacity: 0.7;
      }

      100% {
        transform: scaleX(0.2);
        opacity: 0.4;
      }
    }

    .shadow:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .shadow:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }`)},l(n){t=b(n,"STYLE",{});var r=y(t);e=w(r,`h1 {
      text-align: center;
    }

    h2 {
      font-weight: normal;
      text-align: center;
    }

    .toparea {
      text-align: center;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .downarea {
      text-align: center;
      vertical-align: bottom;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      width: 95%;
    }

    /* https://photopizza.design/css_loading/ より引用 */
    .wrapper {
      width: 200px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .circle {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: salmon;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .circle2 {
      width: 20px;
      height: 20px;
      position: absolute;
      border-radius: 50%;
      background-color: cornflowerblue;
      left: 15%;
      transform-origin: 50%;
      animation: circle 0.5s alternate infinite ease;
    }

    @keyframes circle2 {
      0% {
        top: 60px;
        height: 5px;
        border-radius: 50px 50px 25px 25px;
        transform: scaleX(1.7);
      }

      40% {
        height: 20px;
        border-radius: 50%;
        transform: scaleX(1);
      }

      100% {
        top: 0%;
      }
    }

    .circle2:nth-child(2) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .circle2:nth-child(3) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }

    .shadow {
      width: 20px;
      height: 4px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 62px;
      transform-origin: 50%;
      z-index: -1;
      left: 15%;
      filter: blur(1px);
      animation: shadow 0.5s alternate infinite ease;
    }

    @keyframes shadow {
      0% {
        transform: scaleX(1.5);
      }

      40% {
        transform: scaleX(1);
        opacity: 0.7;
      }

      100% {
        transform: scaleX(0.2);
        opacity: 0.4;
      }
    }

    .shadow:nth-child(4) {
      left: 45%;
      animation-delay: 0.2s;
    }

    .shadow:nth-child(5) {
      left: auto;
      right: 15%;
      animation-delay: 0.3s;
    }`),r.forEach(l)},m(n,r){E(n,t,r),h(t,e)},d(n){n&&l(t)}}}function Cn(s){let t,e;return{c(){t=m("style"),e=v(`h1 {
      text-align: center;
    }

    h2 {
      font-weight: normal;
      text-align: center;
    }

    h3 {
      text-align: center;
      color: crimson;
    }

    .toparea {
      text-align: center;
      position: absolute;
      vertical-align: top;
      top: 25%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      -moz-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      -o-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .middlearea {
      text-align: center;
      position: absolute;
      vertical-align: middle;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      -moz-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      -o-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .downarea {
      text-align: center;
      vertical-align: bottom;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      width: 95%;
    }

    .balloonR {
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0.3em 1em;
      min-width: 3em;
      max-width: 95%;
      color: black;
      background: salmon;
      border: solid 3px salmon;
      box-sizing: border-box;
      overflow-wrap: break-word;
    }

    .balloonR:before {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 50%;
      margin-left: -15px;
      border: 12px solid transparent;
      border-top: 12px solid salmon;
      z-index: 2;
    }

    .balloonR:after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -17px;
      border: 14px solid transparent;
      border-top: 14px solid salmon;
      z-index: 1;
    }

    .balloonR p {
      margin: 0;
      padding: 0;
      font-size: 3vmin;
    }

    .balloonB {
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0.3em 1em;
      min-width: 3em;
      max-width: 95%;
      color: white;
      background: cornflowerblue;
      border: solid 3px cornflowerblue;
      box-sizing: border-box;
      overflow-wrap: break-word;
    }

    .balloonB:before {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 50%;
      margin-left: -15px;
      border: 12px solid transparent;
      border-top: 12px solid cornflowerblue;
      z-index: 2;
    }

    .balloonB:after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -17px;
      border: 14px solid transparent;
      border-top: 14px solid cornflowerblue;
      z-index: 1;
    }

    .balloonB p {
      margin: 0;
      padding: 0;
      font-size: 3vmin;
    }

    .textb {
      height: 2.5em;
      width: 70%;
      padding: 0.3em;
      border-radius: 0.3em;
      box-shadow: 0 0 0 1px silver inset;
      border: none;
    }

    .textb:focus {
      outline: 0;
      box-shadow: 0 0 0 2px black inset;
    }

    .buttonR {
      height: 2.5em;
      background-color: white;
      display: inline-block;
      padding: 0.3em 1em;
      text-decoration: none;
      color: salmon;
      border: solid 2px salmon;
      border-radius: 0.3em;
      transition: 0.4s;
    }

    .buttonR:hover {
      background: salmon;
      color: white;
    }

    .buttonB {
      height: 2.5em;
      background-color: white;
      display: inline-block;
      padding: 0.3em 1em;
      text-decoration: none;
      color: cornflowerblue;
      border: solid 2px cornflowerblue;
      border-radius: 0.3em;
      transition: 0.4s;
    }

    .buttonB:hover {
      background: cornflowerblue;
      color: white;
    }`)},l(n){t=b(n,"STYLE",{});var r=y(t);e=w(r,`h1 {
      text-align: center;
    }

    h2 {
      font-weight: normal;
      text-align: center;
    }

    h3 {
      text-align: center;
      color: crimson;
    }

    .toparea {
      text-align: center;
      position: absolute;
      vertical-align: top;
      top: 25%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      -moz-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      -o-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .middlearea {
      text-align: center;
      position: absolute;
      vertical-align: middle;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
      -moz-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      -o-transform: translateY(-50%) translateX(-50%);
      width: 95%;
    }

    .downarea {
      text-align: center;
      vertical-align: bottom;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      width: 95%;
    }

    .balloonR {
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0.3em 1em;
      min-width: 3em;
      max-width: 95%;
      color: black;
      background: salmon;
      border: solid 3px salmon;
      box-sizing: border-box;
      overflow-wrap: break-word;
    }

    .balloonR:before {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 50%;
      margin-left: -15px;
      border: 12px solid transparent;
      border-top: 12px solid salmon;
      z-index: 2;
    }

    .balloonR:after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -17px;
      border: 14px solid transparent;
      border-top: 14px solid salmon;
      z-index: 1;
    }

    .balloonR p {
      margin: 0;
      padding: 0;
      font-size: 3vmin;
    }

    .balloonB {
      position: relative;
      display: inline-block;
      margin: 0;
      padding: 0.3em 1em;
      min-width: 3em;
      max-width: 95%;
      color: white;
      background: cornflowerblue;
      border: solid 3px cornflowerblue;
      box-sizing: border-box;
      overflow-wrap: break-word;
    }

    .balloonB:before {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 50%;
      margin-left: -15px;
      border: 12px solid transparent;
      border-top: 12px solid cornflowerblue;
      z-index: 2;
    }

    .balloonB:after {
      content: '';
      position: absolute;
      bottom: -30px;
      left: 50%;
      margin-left: -17px;
      border: 14px solid transparent;
      border-top: 14px solid cornflowerblue;
      z-index: 1;
    }

    .balloonB p {
      margin: 0;
      padding: 0;
      font-size: 3vmin;
    }

    .textb {
      height: 2.5em;
      width: 70%;
      padding: 0.3em;
      border-radius: 0.3em;
      box-shadow: 0 0 0 1px silver inset;
      border: none;
    }

    .textb:focus {
      outline: 0;
      box-shadow: 0 0 0 2px black inset;
    }

    .buttonR {
      height: 2.5em;
      background-color: white;
      display: inline-block;
      padding: 0.3em 1em;
      text-decoration: none;
      color: salmon;
      border: solid 2px salmon;
      border-radius: 0.3em;
      transition: 0.4s;
    }

    .buttonR:hover {
      background: salmon;
      color: white;
    }

    .buttonB {
      height: 2.5em;
      background-color: white;
      display: inline-block;
      padding: 0.3em 1em;
      text-decoration: none;
      color: cornflowerblue;
      border: solid 2px cornflowerblue;
      border-radius: 0.3em;
      transition: 0.4s;
    }

    .buttonB:hover {
      background: cornflowerblue;
      color: white;
    }`),r.forEach(l)},m(n,r){E(n,t,r),h(t,e)},d(n){n&&l(t)}}}function Ln(s){let t,e;function n(f,p){return f[1]==="local"||f[0]===ie?En:f[3]%2===1?kn:wn}let r=n(s),i=r(s);function o(f,p){return f[1]==="local"||f[0]===ie?Cn:Sn}let a=o(s),c=a(s);return{c(){i.c(),t=C(),c.c(),e=pt()},l(f){i.l(f),t=L(f),c.l(f),e=pt()},m(f,p){i.m(f,p),E(f,t,p),c.m(f,p),E(f,e,p)},p(f,[p]){r===(r=n(f))&&i?i.p(f,p):(i.d(1),i=r(f),i&&(i.c(),i.m(t.parentNode,t))),a!==(a=o(f))&&(c.d(1),c=a(f),c&&(c.c(),c.m(e.parentNode,e)))},i:G,o:G,d(f){i.d(f),f&&l(t),c.d(f),f&&l(e)}}}const St=100;let ie="";function In(s,t,e){const n=Ct();let{socket:r}=t,{turns:i}=t,{userName:o}=t,{playMode:a}=t,c=!1,f=1,p="",d="",u=[];function k(){d===""?e(2,c=!0):(e(4,p=d),u.push(d),e(5,d=""),e(2,c=!1),f===i&&(a==="online"||n("showResult",u)),e(3,++f))}a==="online"&&r.on("result",O=>{u=[];for(const P in O.answers)u.push(P);r.disconnect(),n("showResult",u)});function g(){d=this.value,e(5,d)}function B(){d=this.value,e(5,d)}return s.$$set=O=>{"socket"in O&&e(7,r=O.socket),"turns"in O&&e(8,i=O.turns),"userName"in O&&e(0,o=O.userName),"playMode"in O&&e(1,a=O.playMode)},[o,a,c,f,p,d,k,r,i,g,B]}class Pn extends kt{constructor(t){super(),Et(this,t,In,Ln,xt,{socket:7,turns:8,userName:0,playMode:1})}}function oe(s,t,e){const n=s.slice();return n[4]=t[e],n}function ae(s){let t,e,n=s[4]+"",r,i,o;return{c(){t=m("div"),e=m("p"),r=v(n),i=C(),o=m("br"),this.h()},l(a){t=b(a,"DIV",{class:!0});var c=y(t);e=b(c,"P",{class:!0});var f=y(e);r=w(f,n),f.forEach(l),c.forEach(l),i=L(a),o=b(a,"BR",{}),this.h()},h(){_(e,"class","svelte-pvjd8k"),_(t,"class","balloonB svelte-pvjd8k")},m(a,c){E(a,t,c),h(t,e),h(e,r),E(a,i,c),E(a,o,c)},p:G,d(a){a&&l(t),a&&l(i),a&&l(o)}}}function Dn(s){let t,e,n,r,i,o,a,c,f,p=s[0],d=[];for(let u=0;u<p.length;u+=1)d[u]=ae(oe(s,p,u));return{c(){t=m("h1"),e=v("参加者一覧"),n=C();for(let u=0;u<d.length;u+=1)d[u].c();r=C(),i=m("div"),o=m("button"),a=v("Start"),this.h()},l(u){t=b(u,"H1",{class:!0});var k=y(t);e=w(k,"参加者一覧"),k.forEach(l),n=L(u);for(let O=0;O<d.length;O+=1)d[O].l(u);r=L(u),i=b(u,"DIV",{class:!0});var g=y(i);o=b(g,"BUTTON",{class:!0});var B=y(o);a=w(B,"Start"),B.forEach(l),g.forEach(l),this.h()},h(){_(t,"class","svelte-pvjd8k"),_(o,"class","buttonG svelte-pvjd8k"),_(i,"class","centering svelte-pvjd8k")},m(u,k){E(u,t,k),h(t,e),E(u,n,k);for(let g=0;g<d.length;g+=1)d[g].m(u,k);E(u,r,k),E(u,i,k),h(i,o),h(o,a),c||(f=tt(o,"click",s[1]),c=!0)},p(u,[k]){if(k&1){p=u[0];let g;for(g=0;g<p.length;g+=1){const B=oe(u,p,g);d[g]?d[g].p(B,k):(d[g]=ae(B),d[g].c(),d[g].m(r.parentNode,r))}for(;g<d.length;g+=1)d[g].d(1);d.length=p.length}},i:G,o:G,d(u){u&&l(t),u&&l(n),he(d,u),u&&l(r),u&&l(i),c=!1,f()}}}function Vn(s,t,e){const n=Ct();let{socket:r}=t,i=[];function o(){n("startGame",i)}return s.$$set=a=>{"socket"in a&&e(2,r=a.socket)},[i,o,r]}class Xn extends kt{constructor(t){super(),Et(this,t,Vn,Dn,xt,{socket:2})}}function le(s,t,e){const n=s.slice();return n[8]=t[e],n[10]=e,n}function zn(s){let t,e,n,r,i,o,a,c,f,p,d,u,k,g,B,O,P,N,R,A,V,T,S,Y,W,J,I,st,rt,$,j,ot,ht,H,K=s[2],M=[];for(let x=0;x<K.length;x+=1)M[x]=ce(le(s,K,x));return{c(){t=m("h2"),e=v("最初の"),n=m("span"),r=v("お題"),i=C(),o=m("div"),a=m("p"),c=v("『"),f=v(s[1]),p=v("』"),d=C(),u=m("details"),k=m("summary"),g=v("伝言過程"),B=m("br"),O=C();for(let x=0;x<M.length;x+=1)M[x].c();P=C(),N=m("h2"),R=v("最後の"),A=m("span"),V=v("回答"),T=C(),S=m("div"),Y=m("p"),W=v("「"),J=v(s[3]),I=v("」"),st=C(),rt=m("br"),$=C(),j=m("button"),ot=v("タイトルに戻る"),this.h()},l(x){t=b(x,"H2",{class:!0});var X=y(t);e=w(X,"最初の"),n=b(X,"SPAN",{style:!0});var z=y(n);r=w(z,"お題"),z.forEach(l),X.forEach(l),i=L(x),o=b(x,"DIV",{class:!0});var F=y(o);a=b(F,"P",{class:!0});var at=y(a);c=w(at,"『"),f=w(at,s[1]),p=w(at,"』"),at.forEach(l),F.forEach(l),d=L(x),u=b(x,"DETAILS",{});var Q=y(u);k=b(Q,"SUMMARY",{});var yt=y(k);g=w(yt,"伝言過程"),yt.forEach(l),B=b(Q,"BR",{}),O=L(Q);for(let Xt=0;Xt<M.length;Xt+=1)M[Xt].l(Q);Q.forEach(l),P=L(x),N=b(x,"H2",{class:!0});var ft=y(N);R=w(ft,"最後の"),A=b(ft,"SPAN",{style:!0});var gt=y(A);V=w(gt,"回答"),gt.forEach(l),ft.forEach(l),T=L(x),S=b(x,"DIV",{class:!0});var _t=y(S);Y=b(_t,"P",{class:!0});var lt=y(Y);W=w(lt,"「"),J=w(lt,s[3]),I=w(lt,"」"),lt.forEach(l),_t.forEach(l),st=L(x),rt=b(x,"BR",{}),$=L(x),j=b(x,"BUTTON",{class:!0});var $t=y(j);ot=w($t,"タイトルに戻る"),$t.forEach(l),this.h()},h(){q(n,"font-size","120%"),q(n,"font-weight","bold"),q(n,"color","salmon"),_(t,"class","svelte-1xrgs2t"),_(a,"class","svelte-1xrgs2t"),_(o,"class","balloonR svelte-1xrgs2t"),q(A,"font-size","120%"),q(A,"font-weight","bold"),q(A,"color","cornflowerblue"),_(N,"class","svelte-1xrgs2t"),_(Y,"class","svelte-1xrgs2t"),_(S,"class","balloonB svelte-1xrgs2t"),_(j,"class","buttonG svelte-1xrgs2t")},m(x,X){E(x,t,X),h(t,e),h(t,n),h(n,r),E(x,i,X),E(x,o,X),h(o,a),h(a,c),h(a,f),h(a,p),E(x,d,X),E(x,u,X),h(u,k),h(k,g),h(u,B),h(u,O);for(let z=0;z<M.length;z+=1)M[z].m(u,null);E(x,P,X),E(x,N,X),h(N,R),h(N,A),h(A,V),E(x,T,X),E(x,S,X),h(S,Y),h(Y,W),h(Y,J),h(Y,I),E(x,st,X),E(x,rt,X),E(x,$,X),E(x,j,X),h(j,ot),ht||(H=tt(j,"click",s[4]),ht=!0)},p(x,X){if(X&4){K=x[2];let z;for(z=0;z<K.length;z+=1){const F=le(x,K,z);M[z]?M[z].p(F,X):(M[z]=ce(F),M[z].c(),M[z].m(u,null))}for(;z<M.length;z+=1)M[z].d(1);M.length=K.length}},d(x){x&&l(t),x&&l(i),x&&l(o),x&&l(d),x&&l(u),he(M,x),x&&l(P),x&&l(N),x&&l(T),x&&l(S),x&&l(st),x&&l(rt),x&&l($),x&&l(j),ht=!1,H()}}}function qn(s){let t,e,n,r;return{c(){t=m("button"),e=v("結果オープン"),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var o=y(t);e=w(o,"結果オープン"),o.forEach(l),this.h()},h(){_(t,"class","buttonG svelte-1xrgs2t")},m(i,o){E(i,t,o),h(t,e),n||(r=tt(t,"click",s[6]),n=!0)},p:G,d(i){i&&l(t),n=!1,r()}}}function Yn(s){let t,e,n,r=s[10]+2+"",i,o,a=s[8]+"",c,f,p,d;return{c(){t=m("div"),e=m("p"),n=v("("),i=v(r),o=v("):「"),c=v(a),f=v("」"),p=C(),d=m("br"),this.h()},l(u){t=b(u,"DIV",{class:!0});var k=y(t);e=b(k,"P",{class:!0});var g=y(e);n=w(g,"("),i=w(g,r),o=w(g,"):「"),c=w(g,a),f=w(g,"」"),g.forEach(l),k.forEach(l),p=L(u),d=b(u,"BR",{}),this.h()},h(){_(e,"class","svelte-1xrgs2t"),_(t,"class","balloonPB svelte-1xrgs2t")},m(u,k){E(u,t,k),h(t,e),h(e,n),h(e,i),h(e,o),h(e,c),h(e,f),E(u,p,k),E(u,d,k)},p:G,d(u){u&&l(t),u&&l(p),u&&l(d)}}}function Un(s){let t,e,n,r=s[10]+2+"",i,o,a=s[8]+"",c,f,p,d;return{c(){t=m("div"),e=m("p"),n=v("("),i=v(r),o=v("):『"),c=v(a),f=v("』"),p=C(),d=m("br"),this.h()},l(u){t=b(u,"DIV",{class:!0});var k=y(t);e=b(k,"P",{class:!0});var g=y(e);n=w(g,"("),i=w(g,r),o=w(g,"):『"),c=w(g,a),f=w(g,"』"),g.forEach(l),k.forEach(l),p=L(u),d=b(u,"BR",{}),this.h()},h(){_(e,"class","svelte-1xrgs2t"),_(t,"class","balloonPR svelte-1xrgs2t")},m(u,k){E(u,t,k),h(t,e),h(e,n),h(e,i),h(e,o),h(e,c),h(e,f),E(u,p,k),E(u,d,k)},p:G,d(u){u&&l(t),u&&l(p),u&&l(d)}}}function ce(s){let t;function e(i,o){return i[10]%2==1?Un:Yn}let r=e(s)(s);return{c(){r.c(),t=pt()},l(i){r.l(i),t=pt()},m(i,o){r.m(i,o),E(i,t,o)},p(i,o){r.p(i,o)},d(i){r.d(i),i&&l(t)}}}function Mn(s){let t,e,n,r;function i(c,f){return c[0]?zn:qn}let o=i(s),a=o(s);return{c(){t=m("div"),e=m("h1"),n=v("結果発表"),r=C(),a.c(),this.h()},l(c){t=b(c,"DIV",{class:!0});var f=y(t);e=b(f,"H1",{class:!0});var p=y(e);n=w(p,"結果発表"),p.forEach(l),r=L(f),a.l(f),f.forEach(l),this.h()},h(){_(e,"class","svelte-1xrgs2t"),_(t,"class","centering svelte-1xrgs2t")},m(c,f){E(c,t,f),h(t,e),h(e,n),h(t,r),a.m(t,null)},p(c,[f]){o===(o=i(c))&&a?a.p(c,f):(a.d(1),a=o(c),a&&(a.c(),a.m(t,null)))},i:G,o:G,d(c){c&&l(t),a.d()}}}function Hn(s,t,e){const n=Ct();let{answerStrings:r}=t,i=!1,o=r[0],a=r.slice(1,r.length-1),c=r[r.length-1];function f(){n("showTitle")}const p=()=>e(0,i=!0);return s.$$set=d=>{"answerStrings"in d&&e(5,r=d.answerStrings)},[i,o,a,c,f,r,p]}class Fn extends kt{constructor(t){super(),Et(this,t,Hn,Mn,xt,{answerStrings:5})}}function Kn(s){let t,e;return t=new Fn({props:{answerStrings:s[4]}}),t.$on("showTitle",s[10]),{c(){Lt(t.$$.fragment)},l(n){It(t.$$.fragment,n)},m(n,r){Pt(t,n,r),e=!0},p(n,r){const i={};r&16&&(i.answerStrings=n[4]),t.$set(i)},i(n){e||(mt(t.$$.fragment,n),e=!0)},o(n){dt(t.$$.fragment,n),e=!1},d(n){Dt(t,n)}}}function $n(s){let t,e;return t=new Pn({props:{socket:s[0],turns:s[3],userName:s[1],playMode:s[5]}}),t.$on("showResult",s[9]),{c(){Lt(t.$$.fragment)},l(n){It(t.$$.fragment,n)},m(n,r){Pt(t,n,r),e=!0},p(n,r){const i={};r&1&&(i.socket=n[0]),r&8&&(i.turns=n[3]),r&2&&(i.userName=n[1]),r&32&&(i.playMode=n[5]),t.$set(i)},i(n){e||(mt(t.$$.fragment,n),e=!0)},o(n){dt(t.$$.fragment,n),e=!1},d(n){Dt(t,n)}}}function Wn(s){let t,e;return t=new Xn({props:{socket:s[0]}}),t.$on("startGame",s[8]),{c(){Lt(t.$$.fragment)},l(n){It(t.$$.fragment,n)},m(n,r){Pt(t,n,r),e=!0},p(n,r){const i={};r&1&&(i.socket=n[0]),t.$set(i)},i(n){e||(mt(t.$$.fragment,n),e=!0)},o(n){dt(t.$$.fragment,n),e=!1},d(n){Dt(t,n)}}}function Jn(s){let t,e;return t=new vn({}),t.$on("startLocal",s[6]),t.$on("startOnline",s[7]),{c(){Lt(t.$$.fragment)},l(n){It(t.$$.fragment,n)},m(n,r){Pt(t,n,r),e=!0},p:G,i(n){e||(mt(t.$$.fragment,n),e=!0)},o(n){dt(t.$$.fragment,n),e=!1},d(n){Dt(t,n)}}}function Gn(s){let t,e,n,r;const i=[Jn,Wn,$n,Kn],o=[];function a(c,f){return c[2]==="title"?0:c[2]==="waitingRoom"?1:c[2]==="answer"?2:3}return e=a(s),n=o[e]=i[e](s),{c(){t=m("main"),n.c()},l(c){t=b(c,"MAIN",{});var f=y(t);n.l(f),f.forEach(l)},m(c,f){E(c,t,f),o[e].m(t,null),r=!0},p(c,[f]){let p=e;e=a(c),e===p?o[e].p(c,f):(Be(),dt(o[p],1,1,()=>{o[p]=null}),Ne(),n=o[e],n?n.p(c,f):(n=o[e]=i[e](c),n.c()),mt(n,1),n.m(t,null))},i(c){r||(mt(n),r=!0)},o(c){dt(n),r=!1},d(c){c&&l(t),o[e].d()}}}function jn(s,t,e){let n,r,i="title",o,a,c;function f(g){e(1,{userName:r,turns:o}=g.detail,r,e(3,o)),e(5,c="local"),e(2,i="answer")}function p(g){e(1,{userName:r,turns:o,socket:n}=g.detail,r,e(3,o),e(0,n)),e(5,c="online"),e(2,i="waitingRoom")}function d(g){g.detail,e(2,i="answer")}function u(g){e(4,a=g.detail),e(2,i="result")}function k(){e(2,i="title")}return[n,r,i,o,a,c,f,p,d,u,k]}class ts extends kt{constructor(t){super(),Et(this,t,jn,Gn,xt,{})}}export{ts as default};
