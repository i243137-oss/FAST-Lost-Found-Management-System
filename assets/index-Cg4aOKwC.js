(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Ek(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tv={exports:{}},Gu={},nv={exports:{}},ue={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var No=Symbol.for("react.element"),Tk=Symbol.for("react.portal"),Nk=Symbol.for("react.fragment"),Ik=Symbol.for("react.strict_mode"),_k=Symbol.for("react.profiler"),Ck=Symbol.for("react.provider"),Ak=Symbol.for("react.context"),Pk=Symbol.for("react.forward_ref"),Rk=Symbol.for("react.suspense"),Dk=Symbol.for("react.memo"),Lk=Symbol.for("react.lazy"),Wm=Symbol.iterator;function Ok(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,iv={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||rv}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=Yi.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=iv,this.updater=n||rv}var wf=bf.prototype=new av;wf.constructor=bf;sv(wf,Yi.prototype);wf.isPureReactComponent=!0;var Gm=Array.isArray,ov=Object.prototype.hasOwnProperty,xf={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function uv(t,e,n){var r,s={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)ov.call(e,r)&&!lv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:No,type:t,key:i,ref:a,props:s,_owner:xf.current}}function jk(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function Mk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qm=/\/+/g;function nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mk(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case No:case Tk:a=!0}}if(a)return a=t,s=s(a),t=r===""?"."+nh(a,0):r,Gm(s)?(n="",t!=null&&(n=t.replace(Qm,"$&/")+"/"),Pl(s,e,n,"",function(h){return h})):s!=null&&(kf(s)&&(s=jk(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Qm,"$&/")+"/")+t)),e.push(s)),1;if(a=0,r=r===""?".":r+":",Gm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+nh(i,l);a+=Pl(i,e,n,u,s)}else if(u=Ok(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+nh(i,l++),a+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function al(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Uk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Rl={transition:null},Fk={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:xf};function cv(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Yi;ue.Fragment=Nk;ue.Profiler=_k;ue.PureComponent=bf;ue.StrictMode=Ik;ue.Suspense=Rk;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fk;ue.act=cv;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sv({},t.props),s=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=xf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ov.call(e,u)&&!lv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:No,type:t.type,key:s,ref:i,props:r,_owner:a}};ue.createContext=function(t){return t={$$typeof:Ak,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ck,_context:t},t.Consumer=t};ue.createElement=uv;ue.createFactory=function(t){var e=uv.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:Pk,render:t}};ue.isValidElement=kf;ue.lazy=function(t){return{$$typeof:Lk,_payload:{_status:-1,_result:t},_init:Uk}};ue.memo=function(t,e){return{$$typeof:Dk,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};ue.unstable_act=cv;ue.useCallback=function(t,e){return _t.current.useCallback(t,e)};ue.useContext=function(t){return _t.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ue.useEffect=function(t,e){return _t.current.useEffect(t,e)};ue.useId=function(){return _t.current.useId()};ue.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return _t.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ue.useRef=function(t){return _t.current.useRef(t)};ue.useState=function(t){return _t.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return _t.current.useTransition()};ue.version="18.3.1";nv.exports=ue;var re=nv.exports;const Vk=Ek(re);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var zk=re,$k=Symbol.for("react.element"),qk=Symbol.for("react.fragment"),Bk=Object.prototype.hasOwnProperty,Hk=zk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kk={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Bk.call(e,r)&&!Kk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:$k,type:t,key:i,ref:a,props:s,_owner:Hk.current}}Gu.Fragment=qk;Gu.jsx=hv;Gu.jsxs=hv;tv.exports=Gu;var d=tv.exports,Yh={},dv={exports:{}},Xt={},fv={exports:{}},pv={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(B,Z){var ae=B.length;B.push(Z);e:for(;0<ae;){var xe=ae-1>>>1,De=B[xe];if(0<s(De,Z))B[xe]=Z,B[ae]=De,ae=xe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],ae=B.pop();if(ae!==Z){B[0]=ae;e:for(var xe=0,De=B.length,Jt=De>>>1;xe<Jt;){var St=2*(xe+1)-1,Zt=B[St],Vt=St+1,zt=B[Vt];if(0>s(Zt,ae))Vt<De&&0>s(zt,Zt)?(B[xe]=zt,B[Vt]=ae,xe=Vt):(B[xe]=Zt,B[St]=ae,xe=St);else if(Vt<De&&0>s(zt,ae))B[xe]=zt,B[Vt]=ae,xe=Vt;else break e}}return Z}function s(B,Z){var ae=B.sortIndex-Z.sortIndex;return ae!==0?ae:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],m=1,g=null,y=3,C=!1,R=!1,D=!1,j=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=B)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function U(B){if(D=!1,_(B),!R)if(n(u)!==null)R=!0,Nn(z);else{var Z=n(h);Z!==null&&Zs(U,Z.startTime-B)}}function z(B,Z){R=!1,D&&(D=!1,T(b),b=-1),C=!0;var ae=y;try{for(_(Z),g=n(u);g!==null&&(!(g.expirationTime>Z)||B&&!N());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,y=g.priorityLevel;var De=xe(g.expirationTime<=Z);Z=t.unstable_now(),typeof De=="function"?g.callback=De:g===n(u)&&r(u),_(Z)}else r(u);g=n(u)}if(g!==null)var Jt=!0;else{var St=n(h);St!==null&&Zs(U,St.startTime-Z),Jt=!1}return Jt}finally{g=null,y=ae,C=!1}}var q=!1,w=null,b=-1,x=5,E=-1;function N(){return!(t.unstable_now()-E<x)}function A(){if(w!==null){var B=t.unstable_now();E=B;var Z=!0;try{Z=w(!0,B)}finally{Z?k():(q=!1,w=null)}}else q=!1}var k;if(typeof S=="function")k=function(){S(A)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,tt=fe.port2;fe.port1.onmessage=A,k=function(){tt.postMessage(null)}}else k=function(){j(A,0)};function Nn(B){w=B,q||(q=!0,k())}function Zs(B,Z){b=j(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||C||(R=!0,Nn(z))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var ae=y;y=Z;try{return B()}finally{y=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=y;y=B;try{return Z()}finally{y=ae}},t.unstable_scheduleCallback=function(B,Z,ae){var xe=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,B){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=ae+De,B={id:m++,callback:Z,priorityLevel:B,startTime:ae,expirationTime:De,sortIndex:-1},ae>xe?(B.sortIndex=ae,e(h,B),n(u)===null&&B===n(h)&&(D?(T(b),b=-1):D=!0,Zs(U,ae-xe))):(B.sortIndex=De,e(u,B),R||C||(R=!0,Nn(z))),B},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(B){var Z=y;return function(){var ae=y;y=Z;try{return B.apply(this,arguments)}finally{y=ae}}}})(pv);fv.exports=pv;var Wk=fv.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Gk=re,Qt=Wk;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,eo={};function Ks(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(eo[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=Object.prototype.hasOwnProperty,Qk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},Ym={};function Xk(t){return Jh.call(Ym,t)?!0:Jh.call(Xm,t)?!1:Qk.test(t)?Ym[t]=!0:(Xm[t]=!0,!1)}function Yk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jk(t,e,n,r){if(e===null||typeof e>"u"||Yk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,s,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sf,Ef);dt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sf,Ef);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sf,Ef);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,r){var s=dt.hasOwnProperty(e)?dt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jk(e,n,s,r)&&(n=null),r||s===null?Xk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=Gk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),vv=Symbol.for("react.offscreen"),Jm=Symbol.iterator;function ba(t){return t===null||typeof t!="object"?null:(t=Jm&&t[Jm]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,rh;function Ca(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var sh=!1;function ih(t,e){if(!t||sh)return"";sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var u=`
`+s[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function Zk(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=ih(t.type,!1),t;case 11:return t=ih(t.type.render,!1),t;case 1:return t=ih(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case Zh:return"Profiler";case Nf:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function eS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tS(t){var e=bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=tS(t))}function wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rd(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function sd(t,e){xv(t,e);var n=Wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function eg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Aa(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function kv(t,e){var n=Wr(e.value),r=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,Ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nS=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){nS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var rS=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(rS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hd=null,Ni=null,Ii=null;function rg(t){if(t=Co(t)){if(typeof hd!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Zu(e),hd(t.stateNode,t.type,e))}}function Iv(t){Ni?Ii?Ii.push(t):Ii=[t]:Ni=t}function _v(){if(Ni){var t=Ni,e=Ii;if(Ii=Ni=null,rg(t),e)for(t=0;t<e.length;t++)rg(e[t])}}function Cv(t,e){return t(e)}function Av(){}var ah=!1;function Pv(t,e,n){if(ah)return t(e,n);ah=!0;try{return Cv(t,e,n)}finally{ah=!1,(Ni!==null||Ii!==null)&&(Av(),_v())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var dd=!1;if(nr)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){dd=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{dd=!1}function sS(t,e,n,r,s,i,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Va=!1,eu=null,tu=!1,fd=null,iS={onError:function(t){Va=!0,eu=t}};function aS(t,e,n,r,s,i,a,l,u){Va=!1,eu=null,sS.apply(iS,arguments)}function oS(t,e,n,r,s,i,a,l,u){if(aS.apply(this,arguments),Va){if(Va){var h=eu;Va=!1,eu=null}else throw Error(V(198));tu||(tu=!0,fd=h)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(Ws(t)!==t)throw Error(V(188))}function lS(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return sg(s),t;if(i===r)return sg(s),e;i=i.sibling}throw Error(V(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function Dv(t){return t=lS(t),t!==null?Lv(t):null}function Lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lv(t);if(e!==null)return e;t=t.sibling}return null}var Ov=Qt.unstable_scheduleCallback,ig=Qt.unstable_cancelCallback,uS=Qt.unstable_shouldYield,cS=Qt.unstable_requestPaint,He=Qt.unstable_now,hS=Qt.unstable_getCurrentPriorityLevel,Af=Qt.unstable_ImmediatePriority,jv=Qt.unstable_UserBlockingPriority,nu=Qt.unstable_NormalPriority,dS=Qt.unstable_LowPriority,Mv=Qt.unstable_IdlePriority,Qu=null,On=null;function fS(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Qu,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:gS,pS=Math.log,mS=Math.LN2;function gS(t){return t>>>=0,t===0?32:31-(pS(t)/mS|0)|0}var cl=64,hl=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Pa(l):(i&=a,i!==0&&(r=Pa(i)))}else a=n&~s,a!==0?r=Pa(a):i!==0&&(r=Pa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),s=1<<n,r|=t[n],e&=~s;return r}function yS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-wn(i),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=yS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uv(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function oh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function bS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-wn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function Fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vv,Rf,zv,$v,qv,md=!1,dl=[],Or=null,jr=null,Mr=null,ro=new Map,so=new Map,Nr=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function xa(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Co(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function xS(t,e,n,r,s){switch(e){case"focusin":return Or=xa(Or,t,e,n,r,s),!0;case"dragenter":return jr=xa(jr,t,e,n,r,s),!0;case"mouseover":return Mr=xa(Mr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ro.set(i,xa(ro.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,so.set(i,xa(so.get(i)||null,t,e,n,r,s)),!0}return!1}function Bv(t){var e=Ns(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Rv(n),e!==null){t.blockedOn=e,qv(t.priority,function(){zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return e=Co(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function og(t,e,n){Dl(t)&&n.delete(e)}function kS(){md=!1,Or!==null&&Dl(Or)&&(Or=null),jr!==null&&Dl(jr)&&(jr=null),Mr!==null&&Dl(Mr)&&(Mr=null),ro.forEach(og),so.forEach(og)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,kS)))}function io(t){function e(s){return ka(s,t)}if(0<dl.length){ka(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&ka(Or,t),jr!==null&&ka(jr,t),Mr!==null&&ka(Mr,t),ro.forEach(e),so.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&Nr.shift()}var _i=hr.ReactCurrentBatchConfig,su=!0;function SS(t,e,n,r){var s=we,i=_i.transition;_i.transition=null;try{we=1,Df(t,e,n,r)}finally{we=s,_i.transition=i}}function ES(t,e,n,r){var s=we,i=_i.transition;_i.transition=null;try{we=4,Df(t,e,n,r)}finally{we=s,_i.transition=i}}function Df(t,e,n,r){if(su){var s=gd(t,e,n,r);if(s===null)yh(t,e,r,iu,n),ag(t,r);else if(xS(s,t,e,n,r))r.stopPropagation();else if(ag(t,r),e&4&&-1<wS.indexOf(t)){for(;s!==null;){var i=Co(s);if(i!==null&&Vv(i),i=gd(t,e,n,r),i===null&&yh(t,e,r,iu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else yh(t,e,r,null,n)}}var iu=null;function gd(t,e,n,r){if(iu=null,t=Cf(r),t=Ns(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function Hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hS()){case Af:return 1;case jv:return 4;case nu:case dS:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var Rr=null,Lf=null,Ll=null;function Kv(){if(Ll)return Ll;var t,e=Lf,n=e.length,r,s="value"in Rr?Rr.value:Rr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===s[i-r];r++);return Ll=s.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function lg(){return!1}function Yt(t){function e(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:lg,this.isPropagationStopped=lg,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Yt(Ji),_o=je({},Ji,{view:0,detail:0}),TS=Yt(_o),lh,uh,Sa,Xu=je({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(lh=t.screenX-Sa.screenX,uh=t.screenY-Sa.screenY):uh=lh=0,Sa=t),lh)},movementY:function(t){return"movementY"in t?t.movementY:uh}}),ug=Yt(Xu),NS=je({},Xu,{dataTransfer:0}),IS=Yt(NS),_S=je({},_o,{relatedTarget:0}),ch=Yt(_S),CS=je({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),AS=Yt(CS),PS=je({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RS=Yt(PS),DS=je({},Ji,{data:0}),cg=Yt(DS),LS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jS[t])?!!e[t]:!1}function jf(){return MS}var US=je({},_o,{key:function(t){if(t.key){var e=LS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=Yt(US),VS=je({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=Yt(VS),zS=je({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),$S=Yt(zS),qS=je({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=Yt(qS),HS=je({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=Yt(HS),WS=[9,13,27,32],Mf=nr&&"CompositionEvent"in window,za=null;nr&&"documentMode"in document&&(za=document.documentMode);var GS=nr&&"TextEvent"in window&&!za,Wv=nr&&(!Mf||za&&8<za&&11>=za),dg=" ",fg=!1;function Gv(t,e){switch(t){case"keyup":return WS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function QS(t,e){switch(t){case"compositionend":return Qv(e);case"keypress":return e.which!==32?null:(fg=!0,dg);case"textInput":return t=e.data,t===dg&&fg?null:t;default:return null}}function XS(t,e){if(pi)return t==="compositionend"||!Mf&&Gv(t,e)?(t=Kv(),Ll=Lf=Rr=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Xv(t,e,n,r){Iv(r),e=au(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $a=null,ao=null;function JS(t){ob(t,0)}function Yu(t){var e=yi(t);if(wv(e))return t}function ZS(t,e){if(t==="change")return e}var Yv=!1;if(nr){var hh;if(nr){var dh="oninput"in document;if(!dh){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),dh=typeof mg.oninput=="function"}hh=dh}else hh=!1;Yv=hh&&(!document.documentMode||9<document.documentMode)}function gg(){$a&&($a.detachEvent("onpropertychange",Jv),ao=$a=null)}function Jv(t){if(t.propertyName==="value"&&Yu(ao)){var e=[];Xv(e,ao,t,Cf(t)),Pv(JS,e)}}function eE(t,e,n){t==="focusin"?(gg(),$a=e,ao=n,$a.attachEvent("onpropertychange",Jv)):t==="focusout"&&gg()}function tE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(ao)}function nE(t,e){if(t==="click")return Yu(e)}function rE(t,e){if(t==="input"||t==="change")return Yu(e)}function sE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:sE;function oo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jh.call(e,s)||!kn(t[s],e[s]))return!1}return!0}function yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=yg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yg(n)}}function Zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eb(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iE(t){var e=eb(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zv(n.ownerDocument.documentElement,n)){if(r!==null&&Uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=vg(n,i);var a=vg(n,r);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aE=nr&&"documentMode"in document&&11>=document.documentMode,mi=null,yd=null,qa=null,vd=!1;function bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||mi==null||mi!==Zl(r)||(r=mi,"selectionStart"in r&&Uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qa&&oo(qa,r)||(qa=r,r=au(yd,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},fh={},tb={};nr&&(tb=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Ju(t){if(fh[t])return fh[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tb)return fh[t]=e[n];return t}var nb=Ju("animationend"),rb=Ju("animationiteration"),sb=Ju("animationstart"),ib=Ju("transitionend"),ab=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){ab.set(t,e),Ks(e,[t])}for(var ph=0;ph<wg.length;ph++){var mh=wg[ph],oE=mh.toLowerCase(),lE=mh[0].toUpperCase()+mh.slice(1);ns(oE,"on"+lE)}ns(nb,"onAnimationEnd");ns(rb,"onAnimationIteration");ns(sb,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(ib,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);Ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oS(r,e,void 0,t),t.currentTarget=null}function ob(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;xg(s,l,h),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;xg(s,l,h),i=u}}}if(tu)throw t=fd,tu=!1,fd=null,t}function Ce(t,e){var n=e[Sd];n===void 0&&(n=e[Sd]=new Set);var r=t+"__bubble";n.has(r)||(lb(e,t,2,!1),n.add(r))}function gh(t,e,n){var r=0;e&&(r|=4),lb(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ml]){t[ml]=!0,mv.forEach(function(n){n!=="selectionchange"&&(uE.has(n)||gh(n,!1,t),gh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,gh("selectionchange",!1,e))}}function lb(t,e,n,r){switch(Hv(e)){case 1:var s=SS;break;case 4:s=ES;break;default:s=Df}n=s.bind(null,e,n,t),s=void 0,!dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Ns(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Pv(function(){var h=i,m=Cf(n),g=[];e:{var y=ab.get(t);if(y!==void 0){var C=Of,R=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":C=FS;break;case"focusin":R="focus",C=ch;break;case"focusout":R="blur",C=ch;break;case"beforeblur":case"afterblur":C=ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=IS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=$S;break;case nb:case rb:case sb:C=AS;break;case ib:C=BS;break;case"scroll":C=TS;break;case"wheel":C=KS;break;case"copy":case"cut":case"paste":C=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=hg}var D=(e&4)!==0,j=!D&&t==="scroll",T=D?y!==null?y+"Capture":null:y;D=[];for(var S=h,_;S!==null;){_=S;var U=_.stateNode;if(_.tag===5&&U!==null&&(_=U,T!==null&&(U=no(S,T),U!=null&&D.push(uo(S,U,_)))),j)break;S=S.return}0<D.length&&(y=new C(y,R,null,n,m),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",y&&n!==cd&&(R=n.relatedTarget||n.fromElement)&&(Ns(R)||R[rr]))break e;if((C||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,C?(R=n.relatedTarget||n.toElement,C=h,R=R?Ns(R):null,R!==null&&(j=Ws(R),R!==j||R.tag!==5&&R.tag!==6)&&(R=null)):(C=null,R=h),C!==R)){if(D=ug,U="onMouseLeave",T="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(D=hg,U="onPointerLeave",T="onPointerEnter",S="pointer"),j=C==null?y:yi(C),_=R==null?y:yi(R),y=new D(U,S+"leave",C,n,m),y.target=j,y.relatedTarget=_,U=null,Ns(m)===h&&(D=new D(T,S+"enter",R,n,m),D.target=_,D.relatedTarget=j,U=D),j=U,C&&R)t:{for(D=C,T=R,S=0,_=D;_;_=oi(_))S++;for(_=0,U=T;U;U=oi(U))_++;for(;0<S-_;)D=oi(D),S--;for(;0<_-S;)T=oi(T),_--;for(;S--;){if(D===T||T!==null&&D===T.alternate)break t;D=oi(D),T=oi(T)}D=null}else D=null;C!==null&&kg(g,y,C,D,!1),R!==null&&j!==null&&kg(g,j,R,D,!0)}}e:{if(y=h?yi(h):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var z=ZS;else if(pg(y))if(Yv)z=rE;else{z=tE;var q=eE}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(z=nE);if(z&&(z=z(t,h))){Xv(g,z,n,m);break e}q&&q(t,y,h),t==="focusout"&&(q=y._wrapperState)&&q.controlled&&y.type==="number"&&id(y,"number",y.value)}switch(q=h?yi(h):window,t){case"focusin":(pg(q)||q.contentEditable==="true")&&(mi=q,yd=h,qa=null);break;case"focusout":qa=yd=mi=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,bg(g,n,m);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":bg(g,n,m)}var w;if(Mf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else pi?Gv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Wv&&n.locale!=="ko"&&(pi||b!=="onCompositionStart"?b==="onCompositionEnd"&&pi&&(w=Kv()):(Rr=m,Lf="value"in Rr?Rr.value:Rr.textContent,pi=!0)),q=au(h,b),0<q.length&&(b=new cg(b,t,null,n,m),g.push({event:b,listeners:q}),w?b.data=w:(w=Qv(n),w!==null&&(b.data=w)))),(w=GS?QS(t,n):XS(t,n))&&(h=au(h,"onBeforeInput"),0<h.length&&(m=new cg("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:h}),m.data=w))}ob(g,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=no(t,n),i!=null&&r.unshift(uo(t,i,s)),i=no(t,e),i!=null&&r.push(uo(t,i,s))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,s){for(var i=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=no(n,i),u!=null&&a.unshift(uo(n,u,l))):s||(u=no(n,i),u!=null&&a.push(uo(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var cE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(cE,`
`).replace(hE,"")}function gl(t,e,n){if(e=Sg(e),Sg(t)!==e&&n)throw Error(V(425))}function ou(){}var bd=null,wd=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(pE)}:kd;function pE(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);io(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Zi,co="__reactProps$"+Zi,rr="__reactContainer$"+Zi,Sd="__reactEvents$"+Zi,mE="__reactListeners$"+Zi,gE="__reactHandles$"+Zi;function Ns(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[Ln])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[Ln]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Zu(t){return t[co]||null}var Ed=[],vi=-1;function rs(t){return{current:t}}function Pe(t){0>vi||(t.current=Ed[vi],Ed[vi]=null,vi--)}function Se(t,e){vi++,Ed[vi]=t.current,t.current=e}var Gr={},xt=rs(Gr),Ot=rs(!1),Os=Gr;function Mi(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function lu(){Pe(Ot),Pe(xt)}function Ng(t,e,n){if(xt.current!==Gr)throw Error(V(168));Se(xt,e),Se(Ot,n)}function ub(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(V(108,eS(t)||"Unknown",s));return je({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Os=xt.current,Se(xt,t),Se(Ot,Ot.current),!0}function Ig(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=ub(t,e,Os),r.__reactInternalMemoizedMergedChildContext=t,Pe(Ot),Pe(xt),Se(xt,t)):Pe(Ot),Se(Ot,n)}var Gn=null,ec=!1,bh=!1;function cb(t){Gn===null?Gn=[t]:Gn.push(t)}function yE(t){ec=!0,cb(t)}function ss(){if(!bh&&Gn!==null){bh=!0;var t=0,e=we;try{var n=Gn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,ec=!1}catch(s){throw Gn!==null&&(Gn=Gn.slice(t+1)),Ov(Af,ss),s}finally{we=e,bh=!1}}return null}var bi=[],wi=0,cu=null,hu=0,tn=[],nn=0,js=null,Qn=1,Xn="";function Ss(t,e){bi[wi++]=hu,bi[wi++]=cu,cu=t,hu=e}function hb(t,e,n){tn[nn++]=Qn,tn[nn++]=Xn,tn[nn++]=js,js=t;var r=Qn;t=Xn;var s=32-wn(r)-1;r&=~(1<<s),n+=1;var i=32-wn(e)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Qn=1<<32-wn(e)+s|n<<s|r,Xn=i+t}else Qn=1<<i|n<<s|r,Xn=t}function Ff(t){t.return!==null&&(Ss(t,1),hb(t,1,0))}function Vf(t){for(;t===cu;)cu=bi[--wi],bi[wi]=null,hu=bi[--wi],bi[wi]=null;for(;t===js;)js=tn[--nn],tn[nn]=null,Xn=tn[--nn],tn[nn]=null,Qn=tn[--nn],tn[nn]=null}var Wt=null,Ht=null,Re=!1,vn=null;function db(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=js!==null?{id:Qn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Ht=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(Re){var e=Ht;if(e){var n=e;if(!_g(t,e)){if(Td(t))throw Error(V(418));e=Ur(n.nextSibling);var r=Wt;e&&_g(t,e)?db(r,n):(t.flags=t.flags&-4097|2,Re=!1,Wt=t)}}else{if(Td(t))throw Error(V(418));t.flags=t.flags&-4097|2,Re=!1,Wt=t}}}function Cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function yl(t){if(t!==Wt)return!1;if(!Re)return Cg(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Td(t))throw fb(),Error(V(418));for(;e;)db(t,e),e=Ur(e.nextSibling)}if(Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Wt?Ur(t.stateNode.nextSibling):null;return!0}function fb(){for(var t=Ht;t;)t=Ur(t.nextSibling)}function Ui(){Ht=Wt=null,Re=!1}function zf(t){vn===null?vn=[t]:vn.push(t)}var vE=hr.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ag(t){var e=t._init;return e(t._payload)}function pb(t){function e(T,S){if(t){var _=T.deletions;_===null?(T.deletions=[S],T.flags|=16):_.push(S)}}function n(T,S){if(!t)return null;for(;S!==null;)e(T,S),S=S.sibling;return null}function r(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function s(T,S){return T=$r(T,S),T.index=0,T.sibling=null,T}function i(T,S,_){return T.index=_,t?(_=T.alternate,_!==null?(_=_.index,_<S?(T.flags|=2,S):_):(T.flags|=2,S)):(T.flags|=1048576,S)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,S,_,U){return S===null||S.tag!==6?(S=Nh(_,T.mode,U),S.return=T,S):(S=s(S,_),S.return=T,S)}function u(T,S,_,U){var z=_.type;return z===fi?m(T,S,_.props.children,U,_.key):S!==null&&(S.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Er&&Ag(z)===S.type)?(U=s(S,_.props),U.ref=Ea(T,S,_),U.return=T,U):(U=$l(_.type,_.key,_.props,null,T.mode,U),U.ref=Ea(T,S,_),U.return=T,U)}function h(T,S,_,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==_.containerInfo||S.stateNode.implementation!==_.implementation?(S=Ih(_,T.mode,U),S.return=T,S):(S=s(S,_.children||[]),S.return=T,S)}function m(T,S,_,U,z){return S===null||S.tag!==7?(S=Rs(_,T.mode,U,z),S.return=T,S):(S=s(S,_),S.return=T,S)}function g(T,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Nh(""+S,T.mode,_),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ol:return _=$l(S.type,S.key,S.props,null,T.mode,_),_.ref=Ea(T,null,S),_.return=T,_;case di:return S=Ih(S,T.mode,_),S.return=T,S;case Er:var U=S._init;return g(T,U(S._payload),_)}if(Aa(S)||ba(S))return S=Rs(S,T.mode,_,null),S.return=T,S;vl(T,S)}return null}function y(T,S,_,U){var z=S!==null?S.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return z!==null?null:l(T,S,""+_,U);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ol:return _.key===z?u(T,S,_,U):null;case di:return _.key===z?h(T,S,_,U):null;case Er:return z=_._init,y(T,S,z(_._payload),U)}if(Aa(_)||ba(_))return z!==null?null:m(T,S,_,U,null);vl(T,_)}return null}function C(T,S,_,U,z){if(typeof U=="string"&&U!==""||typeof U=="number")return T=T.get(_)||null,l(S,T,""+U,z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ol:return T=T.get(U.key===null?_:U.key)||null,u(S,T,U,z);case di:return T=T.get(U.key===null?_:U.key)||null,h(S,T,U,z);case Er:var q=U._init;return C(T,S,_,q(U._payload),z)}if(Aa(U)||ba(U))return T=T.get(_)||null,m(S,T,U,z,null);vl(S,U)}return null}function R(T,S,_,U){for(var z=null,q=null,w=S,b=S=0,x=null;w!==null&&b<_.length;b++){w.index>b?(x=w,w=null):x=w.sibling;var E=y(T,w,_[b],U);if(E===null){w===null&&(w=x);break}t&&w&&E.alternate===null&&e(T,w),S=i(E,S,b),q===null?z=E:q.sibling=E,q=E,w=x}if(b===_.length)return n(T,w),Re&&Ss(T,b),z;if(w===null){for(;b<_.length;b++)w=g(T,_[b],U),w!==null&&(S=i(w,S,b),q===null?z=w:q.sibling=w,q=w);return Re&&Ss(T,b),z}for(w=r(T,w);b<_.length;b++)x=C(w,T,b,_[b],U),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?b:x.key),S=i(x,S,b),q===null?z=x:q.sibling=x,q=x);return t&&w.forEach(function(N){return e(T,N)}),Re&&Ss(T,b),z}function D(T,S,_,U){var z=ba(_);if(typeof z!="function")throw Error(V(150));if(_=z.call(_),_==null)throw Error(V(151));for(var q=z=null,w=S,b=S=0,x=null,E=_.next();w!==null&&!E.done;b++,E=_.next()){w.index>b?(x=w,w=null):x=w.sibling;var N=y(T,w,E.value,U);if(N===null){w===null&&(w=x);break}t&&w&&N.alternate===null&&e(T,w),S=i(N,S,b),q===null?z=N:q.sibling=N,q=N,w=x}if(E.done)return n(T,w),Re&&Ss(T,b),z;if(w===null){for(;!E.done;b++,E=_.next())E=g(T,E.value,U),E!==null&&(S=i(E,S,b),q===null?z=E:q.sibling=E,q=E);return Re&&Ss(T,b),z}for(w=r(T,w);!E.done;b++,E=_.next())E=C(w,T,b,E.value,U),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?b:E.key),S=i(E,S,b),q===null?z=E:q.sibling=E,q=E);return t&&w.forEach(function(A){return e(T,A)}),Re&&Ss(T,b),z}function j(T,S,_,U){if(typeof _=="object"&&_!==null&&_.type===fi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ol:e:{for(var z=_.key,q=S;q!==null;){if(q.key===z){if(z=_.type,z===fi){if(q.tag===7){n(T,q.sibling),S=s(q,_.props.children),S.return=T,T=S;break e}}else if(q.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Er&&Ag(z)===q.type){n(T,q.sibling),S=s(q,_.props),S.ref=Ea(T,q,_),S.return=T,T=S;break e}n(T,q);break}else e(T,q);q=q.sibling}_.type===fi?(S=Rs(_.props.children,T.mode,U,_.key),S.return=T,T=S):(U=$l(_.type,_.key,_.props,null,T.mode,U),U.ref=Ea(T,S,_),U.return=T,T=U)}return a(T);case di:e:{for(q=_.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===_.containerInfo&&S.stateNode.implementation===_.implementation){n(T,S.sibling),S=s(S,_.children||[]),S.return=T,T=S;break e}else{n(T,S);break}else e(T,S);S=S.sibling}S=Ih(_,T.mode,U),S.return=T,T=S}return a(T);case Er:return q=_._init,j(T,S,q(_._payload),U)}if(Aa(_))return R(T,S,_,U);if(ba(_))return D(T,S,_,U);vl(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,S!==null&&S.tag===6?(n(T,S.sibling),S=s(S,_),S.return=T,T=S):(n(T,S),S=Nh(_,T.mode,U),S.return=T,T=S),a(T)):n(T,S)}return j}var Fi=pb(!0),mb=pb(!1),du=rs(null),fu=null,xi=null,$f=null;function qf(){$f=xi=fu=null}function Bf(t){var e=du.current;Pe(du),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){fu=t,$f=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(fu===null)throw Error(V(308));xi=t,fu.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Is=null;function Hf(t){Is===null?Is=[t]:Is.push(t)}function gb(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sr(t,n)}return s=r.interleaved,s===null?(e.next=e,Hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,sr(t,n)}function jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}function Pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var s=t.updateQueue;Tr=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?i=h:a.next=h,a=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=h:l.next=h,m.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;a=0,m=h=u=null,l=i;do{var y=l.lane,C=l.eventTime;if((r&y)===y){m!==null&&(m=m.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,D=l;switch(y=e,C=n,D.tag){case 1:if(R=D.payload,typeof R=="function"){g=R.call(C,g,y);break e}g=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,y=typeof R=="function"?R.call(C,g,y):R,y==null)break e;g=je({},g,y);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(h=m=C,u=g):m=m.next=C,a|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(m===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Us|=a,t.lanes=a,t.memoizedState=g}}function Rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(V(191,s));s.call(r)}}}var Ao={},jn=rs(Ao),ho=rs(Ao),fo=rs(Ao);function _s(t){if(t===Ao)throw Error(V(174));return t}function Wf(t,e){switch(Se(fo,e),Se(ho,t),Se(jn,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}Pe(jn),Se(jn,e)}function Vi(){Pe(jn),Pe(ho),Pe(fo)}function vb(t){_s(fo.current);var e=_s(jn.current),n=od(e,t.type);e!==n&&(Se(ho,t),Se(jn,n))}function Gf(t){ho.current===t&&(Pe(jn),Pe(ho))}var Le=rs(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wh=[];function Qf(){for(var t=0;t<wh.length;t++)wh[t]._workInProgressVersionPrimary=null;wh.length=0}var Ml=hr.ReactCurrentDispatcher,xh=hr.ReactCurrentBatchConfig,Ms=0,Oe=null,Je=null,at=null,gu=!1,Ba=!1,po=0,bE=0;function pt(){throw Error(V(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Yf(t,e,n,r,s,i){if(Ms=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?SE:EE,t=n(r,s),Ba){i=0;do{if(Ba=!1,po=0,25<=i)throw Error(V(301));i+=1,at=Je=null,e.updateQueue=null,Ml.current=TE,t=n(r,s)}while(Ba)}if(Ml.current=yu,e=Je!==null&&Je.next!==null,Ms=0,at=Je=Oe=null,gu=!1,e)throw Error(V(300));return t}function Jf(){var t=po!==0;return po=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Oe.memoizedState=at=t:at=at.next=t,at}function un(){if(Je===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=at===null?Oe.memoizedState:at.next;if(e!==null)at=e,Je=t;else{if(t===null)throw Error(V(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},at===null?Oe.memoizedState=at=t:at=at.next=t}return at}function mo(t,e){return typeof e=="function"?e(t):e}function kh(t){var e=un(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,u=null,h=i;do{var m=h.lane;if((Ms&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,Oe.lanes|=m,Us|=m}h=h.next}while(h!==null&&h!==i);u===null?a=r:u.next=l,kn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,Us|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sh(t){var e=un(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=t(i,a.action),a=a.next;while(a!==s);kn(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function bb(){}function wb(t,e){var n=Oe,r=un(),s=e(),i=!kn(r.memoizedState,s);if(i&&(r.memoizedState=s,Dt=!0),r=r.queue,Zf(Sb.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,go(9,kb.bind(null,n,r,s,e),void 0,null),ot===null)throw Error(V(349));Ms&30||xb(n,e,s)}return s}function xb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kb(t,e,n,r){e.value=n,e.getSnapshot=r,Eb(e)&&Tb(t)}function Sb(t,e,n){return n(function(){Eb(e)&&Tb(t)})}function Eb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Tb(t){var e=sr(t,1);e!==null&&xn(e,t,1,-1)}function Dg(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=kE.bind(null,Oe,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Nb(){return un().memoizedState}function Ul(t,e,n,r){var s=Rn();Oe.flags|=t,s.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function tc(t,e,n,r){var s=un();r=r===void 0?null:r;var i=void 0;if(Je!==null){var a=Je.memoizedState;if(i=a.destroy,r!==null&&Xf(r,a.deps)){s.memoizedState=go(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=go(1|e,n,i,r)}function Lg(t,e){return Ul(8390656,8,t,e)}function Zf(t,e){return tc(2048,8,t,e)}function Ib(t,e){return tc(4,2,t,e)}function _b(t,e){return tc(4,4,t,e)}function Cb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ab(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,Cb.bind(null,e,t),n)}function ep(){}function Pb(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rb(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Db(t,e,n){return Ms&21?(kn(n,e)||(n=Uv(),Oe.lanes|=n,Us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function wE(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=xh.transition;xh.transition={};try{t(!1),e()}finally{we=n,xh.transition=r}}function Lb(){return un().memoizedState}function xE(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ob(t))jb(e,n);else if(n=gb(t,e,n,r),n!==null){var s=Nt();xn(n,t,r,s),Mb(n,e,r)}}function kE(t,e,n){var r=zr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ob(t))jb(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,kn(l,a)){var u=e.interleaved;u===null?(s.next=s,Hf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=gb(t,e,s,r),n!==null&&(s=Nt(),xn(n,t,r,s),Mb(n,e,r))}}function Ob(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function jb(t,e){Ba=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}var yu={readContext:ln,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},SE={readContext:ln,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,Cb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xE.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Dg,useDebugValue:ep,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Dg(!1),e=t[0];return t=wE.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=Rn();if(Re){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),ot===null)throw Error(V(349));Ms&30||xb(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Lg(Sb.bind(null,r,i,t),[t]),r.flags|=2048,go(9,kb.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Rn(),e=ot.identifierPrefix;if(Re){var n=Xn,r=Qn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EE={readContext:ln,useCallback:Pb,useContext:ln,useEffect:Zf,useImperativeHandle:Ab,useInsertionEffect:Ib,useLayoutEffect:_b,useMemo:Rb,useReducer:kh,useRef:Nb,useState:function(){return kh(mo)},useDebugValue:ep,useDeferredValue:function(t){var e=un();return Db(e,Je.memoizedState,t)},useTransition:function(){var t=kh(mo)[0],e=un().memoizedState;return[t,e]},useMutableSource:bb,useSyncExternalStore:wb,useId:Lb,unstable_isNewReconciler:!1},TE={readContext:ln,useCallback:Pb,useContext:ln,useEffect:Zf,useImperativeHandle:Ab,useInsertionEffect:Ib,useLayoutEffect:_b,useMemo:Rb,useReducer:Sh,useRef:Nb,useState:function(){return Sh(mo)},useDebugValue:ep,useDeferredValue:function(t){var e=un();return Je===null?e.memoizedState=t:Db(e,Je.memoizedState,t)},useTransition:function(){var t=Sh(mo)[0],e=un().memoizedState;return[t,e]},useMutableSource:bb,useSyncExternalStore:wb,useId:Lb,unstable_isNewReconciler:!1};function gn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nc={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=zr(t),i=Zn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(xn(e,t,s,r),jl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=zr(t),i=Zn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(xn(e,t,s,r),jl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=zr(t),s=Zn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Fr(t,s,r),e!==null&&(xn(e,t,r,n),jl(e,t,r))}};function Og(t,e,n,r,s,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!oo(n,r)||!oo(s,i):!0}function Ub(t,e,n){var r=!1,s=Gr,i=e.contextType;return typeof i=="object"&&i!==null?i=ln(i):(s=jt(e)?Os:xt.current,r=e.contextTypes,i=(r=r!=null)?Mi(t,s):Gr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function jg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Kf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ln(i):(i=jt(e)?Os:xt.current,s.context=Mi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(_d(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&nc.enqueueReplaceState(s,s.state,null),pu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=Zk(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Fb(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bu||(bu=!0,Fd=r),Ad(t,e)},n}function Vb(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ad(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ad(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=VE.bind(null,t,e,n),e.then(t,t))}function Ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var IE=hr.ReactCurrentOwner,Dt=!1;function Tt(t,e,n,r){e.child=t===null?mb(e,null,n,r):Fi(e,t.child,n,r)}function Vg(t,e,n,r,s){n=n.render;var i=e.ref;return Ci(e,s),r=Yf(t,e,n,r,i,s),n=Jf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Re&&n&&Ff(e),e.flags|=1,Tt(t,e,r,s),e.child)}function zg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!lp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,zb(t,e,i,r,s)):(t=$l(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(a,r)&&t.ref===e.ref)return ir(t,e,s)}return e.flags|=1,t=$r(i,r),t.ref=e.ref,t.return=e,e.child=t}function zb(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(oo(i,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ir(t,e,s)}return Pd(t,e,n,r,s)}function $b(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Si,qt),qt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Si,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(Si,qt),qt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(Si,qt),qt|=r;return Tt(t,e,s,n),e.child}function qb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,s){var i=jt(n)?Os:xt.current;return i=Mi(e,i),Ci(e,s),n=Yf(t,e,n,r,i,s),r=Jf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Re&&r&&Ff(e),e.flags|=1,Tt(t,e,n,s),e.child)}function $g(t,e,n,r,s){if(jt(n)){var i=!0;uu(e)}else i=!1;if(Ci(e,s),e.stateNode===null)Fl(t,e),Ub(e,n,r),Cd(e,n,r,s),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=ln(h):(h=jt(n)?Os:xt.current,h=Mi(e,h));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&jg(e,a,r,h),Tr=!1;var y=e.memoizedState;a.state=y,pu(e,r,a,s),u=e.memoizedState,l!==r||y!==u||Ot.current||Tr?(typeof m=="function"&&(_d(e,n,m,r),u=e.memoizedState),(l=Tr||Og(e,n,l,r,y,u,h))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,yb(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:gn(e.type,l),a.props=h,g=e.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=jt(n)?Os:xt.current,u=Mi(e,u));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||y!==u)&&jg(e,a,r,u),Tr=!1,y=e.memoizedState,a.state=y,pu(e,r,a,s);var R=e.memoizedState;l!==g||y!==R||Ot.current||Tr?(typeof C=="function"&&(_d(e,n,C,r),R=e.memoizedState),(h=Tr||Og(e,n,h,r,y,R,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,R,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,R,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),a.props=r,a.state=R,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Rd(t,e,n,r,i,s)}function Rd(t,e,n,r,s,i){qb(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return s&&Ig(e,n,!1),ir(t,e,i);r=e.stateNode,IE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Fi(e,t.child,null,i),e.child=Fi(e,null,l,i)):Tt(t,e,l,i),e.memoizedState=r.state,s&&Ig(e,n,!0),e.child}function Bb(t){var e=t.stateNode;e.pendingContext?Ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ng(t,e.context,!1),Wf(t,e.containerInfo)}function qg(t,e,n,r,s){return Ui(),zf(s),e.flags|=256,Tt(t,e,n,r),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hb(t,e,n){var r=e.pendingProps,s=Le.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(Le,s&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ic(a,r,0,null),t=Rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ld(n),e.memoizedState=Dd,t):tp(e,a));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return _E(t,e,a,r,l,s,n);if(i){i=r.fallback,a=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=$r(l,i):(i=Rs(i,a,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=t.child.memoizedState,a=a===null?Ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,e.memoizedState=Dd,r}return i=t.child,t=i.sibling,r=$r(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tp(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,r){return r!==null&&zf(r),Fi(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _E(t,e,n,r,s,i,a){if(n)return e.flags&256?(e.flags&=-257,r=Eh(Error(V(422))),bl(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ic({mode:"visible",children:r.children},s,0,null),i=Rs(i,s,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Fi(e,t.child,null,a),e.child.memoizedState=Ld(a),e.memoizedState=Dd,i);if(!(e.mode&1))return bl(t,e,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(V(419)),r=Eh(i,r,void 0),bl(t,e,a,r)}if(l=(a&t.childLanes)!==0,Dt||l){if(r=ot,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sr(t,s),xn(r,t,s,-1))}return op(),r=Eh(Error(V(421))),bl(t,e,a,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=zE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=Ur(s.nextSibling),Wt=e,Re=!0,vn=null,t!==null&&(tn[nn++]=Qn,tn[nn++]=Xn,tn[nn++]=js,Qn=t.id,Xn=t.overflow,js=e),e=tp(e,r.children),e.flags|=4096,e)}function Bg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Id(t.return,e,n)}function Th(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Kb(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,n,e);else if(t.tag===19)Bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Th(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&mu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Th(e,!0,n,null,i);break;case"together":Th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CE(t,e,n){switch(e.tag){case 3:Bb(e),Ui();break;case 5:vb(e);break;case 1:jt(e.type)&&uu(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(du,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?Hb(t,e,n):(Se(Le,Le.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Se(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kb(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,$b(t,e,n)}return ir(t,e,n)}var Wb,Od,Gb,Qb;Wb=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};Gb=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,_s(jn.current);var i=null;switch(n){case"input":s=rd(t,s),r=rd(t,r),i=[];break;case"select":s=je({},s,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":s=ad(t,s),r=ad(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ou)}ld(n,r);var a;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(eo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(eo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ce("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Qb=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ta(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AE(t,e,n){var r=e.pendingProps;switch(Vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return jt(e.type)&&lu(),mt(e),null;case 3:return r=e.stateNode,Vi(),Pe(Ot),Pe(xt),Qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&($d(vn),vn=null))),Od(t,e),mt(e),null;case 5:Gf(e);var s=_s(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Gb(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return mt(e),null}if(t=_s(jn.current),yl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Ln]=e,r[co]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<Ra.length;s++)Ce(Ra[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Zm(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":tg(r,i),Ce("invalid",r)}ld(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",""+l]):eo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":ll(r),eg(r,i,!0);break;case"textarea":ll(r),ng(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ou)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Ln]=e,t[co]=r,Wb(t,e,!1,!1),e.stateNode=t;e:{switch(a=ud(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ra.length;s++)Ce(Ra[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":Zm(t,r),s=rd(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=je({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":tg(t,r),s=ad(t,r),Ce("invalid",t);break;default:s=r}ld(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Nv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ev(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&to(t,u):typeof u=="number"&&to(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(eo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ce("scroll",t):u!=null&&Tf(t,i,u,a))}switch(n){case"input":ll(t),eg(t,r,!1);break;case"textarea":ll(t),ng(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ti(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Qb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=_s(fo.current),_s(jn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return mt(e),null;case 13:if(Pe(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ht!==null&&e.mode&1&&!(e.flags&128))fb(),Ui(),e.flags|=98560,i=!1;else if(i=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(V(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[Ln]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else vn!==null&&($d(vn),vn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?Ze===0&&(Ze=3):op())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Vi(),Od(t,e),t===null&&lo(e.stateNode.containerInfo),mt(e),null;case 10:return Bf(e.type._context),mt(e),null;case 17:return jt(e.type)&&lu(),mt(e),null;case 19:if(Pe(Le),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Ta(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=mu(t),a!==null){for(e.flags|=128,Ta(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Le,Le.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>$i&&(e.flags|=128,r=!0,Ta(i,!1),e.lanes=4194304)}else{if(!r)if(t=mu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Re)return mt(e),null}else 2*He()-i.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,Ta(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(n=i.last,n!==null?n.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=Le.current,Se(Le,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function PE(t,e){switch(Vf(e),e.tag){case 1:return jt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),Pe(Ot),Pe(xt),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Pe(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Le),null;case 4:return Vi(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var wl=!1,bt=!1,RE=typeof WeakSet=="function"?WeakSet:Set,G=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Xb(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Hg=!1;function DE(t,e){if(bd=su,t=eb(),Uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,m=0,g=t,y=null;t:for(;;){for(var C;g!==n||s!==0&&g.nodeType!==3||(l=a+s),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(C=g.firstChild)!==null;)y=g,g=C;for(;;){if(g===t)break t;if(y===n&&++h===s&&(l=a),y===i&&++m===r&&(u=a),(C=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},su=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,j=R.memoizedState,T=e.stateNode,S=T.getSnapshotBeforeUpdate(e.elementType===e.type?D:gn(e.type,D),j);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(U){Ve(e,e.return,U)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return R=Hg,Hg=!1,R}function Ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Xb(e,n,i)}s=s.next}while(s!==r)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yb(t){var e=t.alternate;e!==null&&(t.alternate=null,Yb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[co],delete e[Sd],delete e[mE],delete e[gE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jb(t){return t.tag===5||t.tag===3||t.tag===4}function Kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}var lt=null,yn=!1;function xr(t,e,n){for(n=n.child;n!==null;)Zb(t,e,n),n=n.sibling}function Zb(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Qu,n)}catch{}switch(n.tag){case 5:bt||ki(n,e);case 6:var r=lt,s=yn;lt=null,xr(t,e,n),lt=r,yn=s,lt!==null&&(yn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(yn?(t=lt,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),io(t)):vh(lt,n.stateNode));break;case 4:r=lt,s=yn,lt=n.stateNode.containerInfo,yn=!0,xr(t,e,n),lt=r,yn=s;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Xb(n,e,a),s=s.next}while(s!==r)}xr(t,e,n);break;case 1:if(!bt&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,e,l)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,xr(t,e,n),bt=r):xr(t,e,n);break;default:xr(t,e,n)}}function Wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RE),e.forEach(function(r){var s=$E.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:lt=l.stateNode,yn=!1;break e;case 3:lt=l.stateNode.containerInfo,yn=!0;break e;case 4:lt=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(lt===null)throw Error(V(160));Zb(i,a,s),lt=null,yn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ve(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ew(e,t),e=e.sibling}function ew(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),An(t),r&4){try{Ha(3,t,t.return),rc(3,t)}catch(D){Ve(t,t.return,D)}try{Ha(5,t,t.return)}catch(D){Ve(t,t.return,D)}}break;case 1:mn(e,t),An(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(mn(e,t),An(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var s=t.stateNode;try{to(s,"")}catch(D){Ve(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xv(s,i),ud(l,a);var h=ud(l,i);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?Nv(s,g):m==="dangerouslySetInnerHTML"?Ev(s,g):m==="children"?to(s,g):Tf(s,m,g,h)}switch(l){case"input":sd(s,i);break;case"textarea":kv(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?Ti(s,!!i.multiple,C,!1):y!==!!i.multiple&&(i.defaultValue!=null?Ti(s,!!i.multiple,i.defaultValue,!0):Ti(s,!!i.multiple,i.multiple?[]:"",!1))}s[co]=i}catch(D){Ve(t,t.return,D)}}break;case 6:if(mn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(V(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(D){Ve(t,t.return,D)}}break;case 3:if(mn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(D){Ve(t,t.return,D)}break;case 4:mn(e,t),An(t);break;case 13:mn(e,t),An(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(sp=He())),r&4&&Wg(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(h=bt)||m,mn(e,t),bt=h):mn(e,t),An(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(G=t,m=t.child;m!==null;){for(g=G=m;G!==null;){switch(y=G,C=y.child,y.tag){case 0:case 11:case 14:case 15:Ha(4,y,y.return);break;case 1:ki(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(D){Ve(r,n,D)}}break;case 5:ki(y,y.return);break;case 22:if(y.memoizedState!==null){Qg(g);continue}}C!==null?(C.return=y,G=C):Qg(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Tv("display",a))}catch(D){Ve(t,t.return,D)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){Ve(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:mn(e,t),An(t),r&4&&Wg(t);break;case 21:break;default:mn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jb(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(to(s,""),r.flags&=-33);var i=Kg(t);Ud(t,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Kg(t);Md(t,l,a);break;default:throw Error(V(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LE(t,e,n){G=t,tw(t)}function tw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||wl;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||bt;l=wl;var h=bt;if(wl=a,(bt=u)&&!h)for(G=s;G!==null;)a=G,u=a.child,a.tag===22&&a.memoizedState!==null?Xg(s):u!==null?(u.return=a,G=u):Xg(s);for(;i!==null;)G=i,tw(i),i=i.sibling;G=s,wl=l,bt=h}Gg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):Gg(t)}}function Gg(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Rg(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rg(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&io(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}bt||e.flags&512&&jd(e)}catch(y){Ve(e,e.return,y)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Qg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Xg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ve(e,s,u)}}var i=e.return;try{jd(e)}catch(u){Ve(e,i,u)}break;case 5:var a=e.return;try{jd(e)}catch(u){Ve(e,a,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var OE=Math.ceil,vu=hr.ReactCurrentDispatcher,np=hr.ReactCurrentOwner,an=hr.ReactCurrentBatchConfig,me=0,ot=null,We=null,ht=0,qt=0,Si=rs(0),Ze=0,yo=null,Us=0,sc=0,rp=0,Ka=null,Pt=null,sp=0,$i=1/0,Wn=null,bu=!1,Fd=null,Vr=null,xl=!1,Dr=null,wu=0,Wa=0,Vd=null,Vl=-1,zl=0;function Nt(){return me&6?He():Vl!==-1?Vl:Vl=He()}function zr(t){return t.mode&1?me&2&&ht!==0?ht&-ht:vE.transition!==null?(zl===0&&(zl=Uv()),zl):(t=we,t!==0||(t=window.event,t=t===void 0?16:Hv(t.type)),t):1}function xn(t,e,n,r){if(50<Wa)throw Wa=0,Vd=null,Error(V(185));Io(t,n,r),(!(me&2)||t!==ot)&&(t===ot&&(!(me&2)&&(sc|=n),Ze===4&&Ir(t,ht)),Mt(t,r),n===1&&me===0&&!(e.mode&1)&&($i=He()+500,ec&&ss()))}function Mt(t,e){var n=t.callbackNode;vS(t,e);var r=ru(t,t===ot?ht:0);if(r===0)n!==null&&ig(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ig(n),e===1)t.tag===0?yE(Yg.bind(null,t)):cb(Yg.bind(null,t)),fE(function(){!(me&6)&&ss()}),n=null;else{switch(Fv(r)){case 1:n=Af;break;case 4:n=jv;break;case 16:n=nu;break;case 536870912:n=Mv;break;default:n=nu}n=uw(n,nw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nw(t,e){if(Vl=-1,zl=0,me&6)throw Error(V(327));var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var r=ru(t,t===ot?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var s=me;me|=2;var i=sw();(ot!==t||ht!==e)&&(Wn=null,$i=He()+500,Ps(t,e));do try{UE();break}catch(l){rw(t,l)}while(!0);qf(),vu.current=i,me=s,We!==null?e=0:(ot=null,ht=0,e=Ze)}if(e!==0){if(e===2&&(s=pd(t),s!==0&&(r=s,e=zd(t,s))),e===1)throw n=yo,Ps(t,0),Ir(t,r),Mt(t,He()),n;if(e===6)Ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!jE(s)&&(e=xu(t,r),e===2&&(i=pd(t),i!==0&&(r=i,e=zd(t,i))),e===1))throw n=yo,Ps(t,0),Ir(t,r),Mt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:Es(t,Pt,Wn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=sp+500-He(),10<e)){if(ru(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=kd(Es.bind(null,t,Pt,Wn),e);break}Es(t,Pt,Wn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var a=31-wn(r);i=1<<a,a=e[a],a>s&&(s=a),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OE(r/1960))-r,10<r){t.timeoutHandle=kd(Es.bind(null,t,Pt,Wn),r);break}Es(t,Pt,Wn);break;case 5:Es(t,Pt,Wn);break;default:throw Error(V(329))}}}return Mt(t,He()),t.callbackNode===n?nw.bind(null,t):null}function zd(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(Ps(t,e).flags|=256),t=xu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&$d(e)),t}function $d(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function jE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!kn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~rp,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function Yg(t){if(me&6)throw Error(V(327));Ai();var e=ru(t,0);if(!(e&1))return Mt(t,He()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=pd(t);r!==0&&(e=r,n=zd(t,r))}if(n===1)throw n=yo,Ps(t,0),Ir(t,e),Mt(t,He()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Es(t,Pt,Wn),Mt(t,He()),null}function ip(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&($i=He()+500,ec&&ss())}}function Fs(t){Dr!==null&&Dr.tag===0&&!(me&6)&&Ai();var e=me;me|=1;var n=an.transition,r=we;try{if(an.transition=null,we=1,t)return t()}finally{we=r,an.transition=n,me=e,!(me&6)&&ss()}}function ap(){qt=Si.current,Pe(Si)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dE(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:Vi(),Pe(Ot),Pe(xt),Qf();break;case 5:Gf(r);break;case 4:Vi();break;case 13:Pe(Le);break;case 19:Pe(Le);break;case 10:Bf(r.type._context);break;case 22:case 23:ap()}n=n.return}if(ot=t,We=t=$r(t.current,null),ht=qt=e,Ze=0,yo=null,rp=sc=Us=0,Pt=Ka=null,Is!==null){for(e=0;e<Is.length;e++)if(n=Is[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Is=null}return t}function rw(t,e){do{var n=We;try{if(qf(),Ml.current=yu,gu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}gu=!1}if(Ms=0,at=Je=Oe=null,Ba=!1,po=0,np.current=null,n===null||n.return===null){Ze=1,yo=e,We=null;break}e:{var i=t,a=n.return,l=n,u=e;if(e=ht,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=Ug(a);if(C!==null){C.flags&=-257,Fg(C,a,l,i,e),C.mode&1&&Mg(i,h,e),e=C,u=h;var R=e.updateQueue;if(R===null){var D=new Set;D.add(u),e.updateQueue=D}else R.add(u);break e}else{if(!(e&1)){Mg(i,h,e),op();break e}u=Error(V(426))}}else if(Re&&l.mode&1){var j=Ug(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Fg(j,a,l,i,e),zf(zi(u,l));break e}}i=u=zi(u,l),Ze!==4&&(Ze=2),Ka===null?Ka=[i]:Ka.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=Fb(i,u,e);Pg(i,T);break e;case 1:l=u;var S=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof S.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vr===null||!Vr.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var U=Vb(i,l,e);Pg(i,U);break e}}i=i.return}while(i!==null)}aw(n)}catch(z){e=z,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function sw(){var t=vu.current;return vu.current=yu,t===null?yu:t}function op(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(Us&268435455)&&!(sc&268435455)||Ir(ot,ht)}function xu(t,e){var n=me;me|=2;var r=sw();(ot!==t||ht!==e)&&(Wn=null,Ps(t,e));do try{ME();break}catch(s){rw(t,s)}while(!0);if(qf(),me=n,vu.current=r,We!==null)throw Error(V(261));return ot=null,ht=0,Ze}function ME(){for(;We!==null;)iw(We)}function UE(){for(;We!==null&&!uS();)iw(We)}function iw(t){var e=lw(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?aw(t):We=e,np.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PE(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,We=null;return}}else if(n=AE(n,e,qt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ze===0&&(Ze=5)}function Es(t,e,n){var r=we,s=an.transition;try{an.transition=null,we=1,FE(t,e,n,r)}finally{an.transition=s,we=r}return null}function FE(t,e,n,r){do Ai();while(Dr!==null);if(me&6)throw Error(V(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(bS(t,i),t===ot&&(We=ot=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,uw(nu,function(){return Ai(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=an.transition,an.transition=null;var a=we;we=1;var l=me;me|=4,np.current=null,DE(t,n),ew(n,t),iE(wd),su=!!bd,wd=bd=null,t.current=n,LE(n),cS(),me=l,we=a,an.transition=i}else t.current=n;if(xl&&(xl=!1,Dr=t,wu=s),i=t.pendingLanes,i===0&&(Vr=null),fS(n.stateNode),Mt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(bu)throw bu=!1,t=Fd,Fd=null,t;return wu&1&&t.tag!==0&&Ai(),i=t.pendingLanes,i&1?t===Vd?Wa++:(Wa=0,Vd=t):Wa=0,ss(),null}function Ai(){if(Dr!==null){var t=Fv(wu),e=an.transition,n=we;try{if(an.transition=null,we=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,wu=0,me&6)throw Error(V(331));var s=me;for(me|=4,G=t.current;G!==null;){var i=G,a=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(G=h;G!==null;){var m=G;switch(m.tag){case 0:case 11:case 15:Ha(8,m,i)}var g=m.child;if(g!==null)g.return=m,G=g;else for(;G!==null;){m=G;var y=m.sibling,C=m.return;if(Yb(m),m===h){G=null;break}if(y!==null){y.return=C,G=y;break}G=C}}}var R=i.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var j=D.sibling;D.sibling=null,D=j}while(D!==null)}}G=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,G=a;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ha(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,G=T;break e}G=i.return}}var S=t.current;for(G=S;G!==null;){a=G;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,G=_;else e:for(a=S;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:rc(9,l)}}catch(z){Ve(l,l.return,z)}if(l===a){G=null;break e}var U=l.sibling;if(U!==null){U.return=l.return,G=U;break e}G=l.return}}if(me=s,ss(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Qu,t)}catch{}r=!0}return r}finally{we=n,an.transition=e}}return!1}function Jg(t,e,n){e=zi(n,e),e=Fb(t,e,1),t=Fr(t,e,1),e=Nt(),t!==null&&(Io(t,1,e),Mt(t,e))}function Ve(t,e,n){if(t.tag===3)Jg(t,t,n);else for(;e!==null;){if(e.tag===3){Jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=zi(n,t),t=Vb(e,t,1),e=Fr(e,t,1),t=Nt(),e!==null&&(Io(e,1,t),Mt(e,t));break}}e=e.return}}function VE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ht&n)===n&&(Ze===4||Ze===3&&(ht&130023424)===ht&&500>He()-sp?Ps(t,0):rp|=n),Mt(t,e)}function ow(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=Nt();t=sr(t,e),t!==null&&(Io(t,e,n),Mt(t,n))}function zE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ow(t,n)}function $E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),ow(t,n)}var lw;lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,CE(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Re&&e.flags&1048576&&hb(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var s=Mi(e,xt.current);Ci(e,n),s=Yf(null,e,r,t,s,n);var i=Jf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,uu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Kf(e),s.updater=nc,e.stateNode=s,s._reactInternals=e,Cd(e,r,t,n),e=Rd(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&Ff(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=BE(r),t=gn(r,t),s){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=Vg(null,e,r,t,n);break e;case 14:e=zg(null,e,r,gn(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Pd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),$g(t,e,r,s,n);case 3:e:{if(Bb(e),t===null)throw Error(V(387));r=e.pendingProps,i=e.memoizedState,s=i.element,yb(t,e),pu(e,r,null,n);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zi(Error(V(423)),e),e=qg(t,e,r,n,s);break e}else if(r!==s){s=zi(Error(V(424)),e),e=qg(t,e,r,n,s);break e}else for(Ht=Ur(e.stateNode.containerInfo.firstChild),Wt=e,Re=!0,vn=null,n=mb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===s){e=ir(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return vb(e),t===null&&Nd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,a=s.children,xd(r,s)?a=null:i!==null&&xd(r,i)&&(e.flags|=32),qb(t,e),Tt(t,e,a,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return Hb(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Vg(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,a=s.value,Se(du,r._currentValue),r._currentValue=a,i!==null)if(kn(i.value,a)){if(i.children===s.children&&!Ot.current){e=ir(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Zn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Id(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Id(a,n,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ci(e,n),s=ln(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=gn(r,e.pendingProps),s=gn(r.type,s),zg(t,e,r,s,n);case 15:return zb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Fl(t,e),e.tag=1,jt(r)?(t=!0,uu(e)):t=!1,Ci(e,n),Ub(e,r,s),Cd(e,r,s,n),Rd(null,e,r,!0,t,n);case 19:return Kb(t,e,n);case 22:return $b(t,e,n)}throw Error(V(156,e.tag))};function uw(t,e){return Ov(t,e)}function qE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new qE(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BE(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===_f)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,s,i){var a=2;if(r=t,typeof t=="function")lp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case fi:return Rs(n.children,s,i,e);case Nf:a=8,s|=8;break;case Zh:return t=sn(12,n,e,s|2),t.elementType=Zh,t.lanes=i,t;case ed:return t=sn(13,n,e,s),t.elementType=ed,t.lanes=i,t;case td:return t=sn(19,n,e,s),t.elementType=td,t.lanes=i,t;case vv:return ic(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:a=10;break e;case yv:a=9;break e;case If:a=11;break e;case _f:a=14;break e;case Er:a=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=sn(a,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Rs(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function ic(t,e,n,r){return t=sn(22,t,r,e),t.elementType=vv,t.lanes=n,t.stateNode={isHidden:!1},t}function Nh(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HE(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oh(0),this.expirationTimes=oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,s,i,a,l,u){return t=new HE(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=sn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(i),t}function KE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cw(t){if(!t)return Gr;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(jt(n))return ub(t,n,e)}return e}function hw(t,e,n,r,s,i,a,l,u){return t=up(n,r,!0,t,s,i,a,l,u),t.context=cw(null),n=t.current,r=Nt(),s=zr(n),i=Zn(r,s),i.callback=e??null,Fr(n,i,s),t.current.lanes=s,Io(t,s,r),Mt(t,r),t}function ac(t,e,n,r){var s=e.current,i=Nt(),a=zr(s);return n=cw(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(i,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(s,e,a),t!==null&&(xn(t,s,a,i),jl(t,s,a)),a}function ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cp(t,e){Zg(t,e),(t=t.alternate)&&Zg(t,e)}function WE(){return null}var dw=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}oc.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));ac(t,e,null,null)};oc.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fs(function(){ac(null,t,null,null)}),e[rr]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&Bv(t)}};function dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ey(){}function GE(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=ku(a);i.call(h)}}var a=hw(e,r,t,0,null,!1,!1,"",ey);return t._reactRootContainer=a,t[rr]=a.current,lo(t.nodeType===8?t.parentNode:t),Fs(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=ku(u);l.call(h)}}var u=up(t,0,!1,null,null,!1,!1,"",ey);return t._reactRootContainer=u,t[rr]=u.current,lo(t.nodeType===8?t.parentNode:t),Fs(function(){ac(e,u,n,r)}),u}function uc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var u=ku(a);l.call(u)}}ac(e,a,t,s)}else a=GE(n,e,t,s,r);return ku(a)}Vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Pf(e,n|1),Mt(e,He()),!(me&6)&&($i=He()+500,ss()))}break;case 13:Fs(function(){var r=sr(t,1);if(r!==null){var s=Nt();xn(r,t,1,s)}}),cp(t,1)}};Rf=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=Nt();xn(e,t,134217728,n)}cp(t,134217728)}};zv=function(t){if(t.tag===13){var e=zr(t),n=sr(t,e);if(n!==null){var r=Nt();xn(n,t,e,r)}cp(t,e)}};$v=function(){return we};qv=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};hd=function(t,e,n){switch(e){case"input":if(sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Zu(r);if(!s)throw Error(V(90));wv(r),sd(r,s)}}}break;case"textarea":kv(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};Cv=ip;Av=Fs;var QE={usingClientEntryPoint:!1,Events:[Co,yi,Zu,Iv,_v,ip]},Na={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XE={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||WE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Qu=kl.inject(XE),On=kl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(e))throw Error(V(200));return KE(t,e,null,n)};Xt.createRoot=function(t,e){if(!dp(t))throw Error(V(299));var n=!1,r="",s=dw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,s),t[rr]=e.current,lo(t.nodeType===8?t.parentNode:t),new hp(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Fs(t)};Xt.hydrate=function(t,e,n){if(!lc(e))throw Error(V(200));return uc(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!dp(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=dw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hw(e,null,t,1,n??null,s,!1,i,a),t[rr]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new oc(e)};Xt.render=function(t,e,n){if(!lc(e))throw Error(V(200));return uc(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!lc(t))throw Error(V(40));return t._reactRootContainer?(Fs(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Xt.unstable_batchedUpdates=ip;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return uc(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function fw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fw)}catch(t){console.error(t)}}fw(),dv.exports=Xt;var YE=dv.exports,ty=YE;Yh.createRoot=ty.createRoot,Yh.hydrateRoot=ty.hydrateRoot;/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var JE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ZE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ue=(t,e)=>{const n=re.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:u,...h},m)=>re.createElement("svg",{ref:m,...JE,width:s,height:s,stroke:r,strokeWidth:a?Number(i)*24/Number(s):i,className:["lucide",`lucide-${ZE(t)}`,l].join(" "),...h},[...e.map(([g,y])=>re.createElement(g,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eT=Ue("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ny=Ue("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _h=Ue("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ch=Ue("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tT=Ue("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nT=Ue("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ry=Ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rT=Ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sy=Ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ia=Ue("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sT=Ue("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iT=Ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const aT=Ue("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oT=Ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lT=Ue("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iy=Ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ay=Ue("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uT=Ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _a=Ue("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oy=Ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ah=Ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ph=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
* @license lucide-react v0.294.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pn=Ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cT=()=>{};var ly={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},mw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,m=i>>2,g=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(y=64)),r.push(n[m],n[g],n[y],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new dT;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),u!==64){const g=l<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fT=function(t){const e=pw(t);return mw.encodeByteArray(e,!0)},Su=function(t){return fT(t).replace(/\./g,"")},gw=function(t){try{return mw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mT=()=>pT().__FIREBASE_DEFAULTS__,gT=()=>{if(typeof process>"u"||typeof ly>"u")return;const t=ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gw(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return cT()||mT()||gT()||yT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yw=t=>{var e,n;return(n=(e=cc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vw=t=>{const e=yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bw=()=>{var t;return(t=cc())==null?void 0:t.config},ww=t=>{var e;return(e=cc())==null?void 0:e[`_${t}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fp(t){return(await fetch(t,{credentials:"include"})).ok}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Su(JSON.stringify(n)),Su(JSON.stringify(a)),""].join(".")}const Ga={};function wT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ga))Ga[e]?t.emulator.push(e):t.prod.push(e);return t}function xT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let uy=!1;function pp(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Ga[t]===e||Ga[t]||uy)return;Ga[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=wT().prod.length>0;function i(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{uy=!0,i()},g}function h(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=xT(r),y=n("text"),C=document.getElementById(y)||document.createElement("span"),R=n("learnmore"),D=document.getElementById(R)||document.createElement("a"),j=n("preprendIcon"),T=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;a(S),h(D,R);const _=u();l(T,j),S.append(T,C,D,_),document.body.appendChild(S)}s?(C.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function ST(){var t;const e=(t=cc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ET(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NT(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function _T(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const CT="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CT,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?AT(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new hn(s,l,r)}}function AT(t,e){return t.replace(PT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PT=/\{\$([^}]+)}/g;function RT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(cy(i)&&cy(a)){if(!Qr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cy(t){return t!==null&&typeof t=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,s]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DT(t,e){const n=new LT(t,e);return n.subscribe.bind(n)}class LT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rh),s.error===void 0&&(s.error=Rh),s.complete===void 0&&(s.complete=Rh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rh(){}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jT=1e3,MT=2,UT=4*60*60*1e3,FT=.5;function hy(t,e=jT,n=MT){const r=e*Math.pow(n,t),s=Math.round(FT*r*(Math.random()-.5)*2);return Math.min(UT,r+s)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ee(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ts="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class VT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zT(t){return t===Ts?void 0:t}function $T(t){return t.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const BT={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HT=ce.INFO,KT={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},WT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=HT,this._logHandler=WT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const GT=(t,e)=>e.some(n=>t instanceof n);let dy,fy;function QT(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XT(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ew=new WeakMap,qd=new WeakMap,Tw=new WeakMap,Dh=new WeakMap,mp=new WeakMap;function YT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(qr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ew.set(n,t)}).catch(()=>{}),mp.set(e,t),e}function JT(t){if(qd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});qd.set(t,e)}let Bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZT(t){Bd=t(Bd)}function e2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lh(this),e,...n);return Tw.set(r,e.sort?e.sort():[e]),qr(r)}:XT().includes(t)?function(...e){return t.apply(Lh(this),e),qr(Ew.get(this))}:function(...e){return qr(t.apply(Lh(this),e))}}function t2(t){return typeof t=="function"?e2(t):(t instanceof IDBTransaction&&JT(t),GT(t,QT())?new Proxy(t,Bd):t)}function qr(t){if(t instanceof IDBRequest)return YT(t);if(Dh.has(t))return Dh.get(t);const e=t2(t);return e!==t&&(Dh.set(t,e),mp.set(e,t)),e}const Lh=t=>mp.get(t);function Nw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=qr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(qr(a.result),u.oldVersion,u.newVersion,qr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const n2=["get","getKey","getAll","getAllKeys","count"],r2=["put","add","delete","clear"],Oh=new Map;function py(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oh.get(e))return Oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=r2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||n2.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Oh.set(e,i),i}ZT(t=>({...t,get:(e,n,r)=>py(e,n)||t.get(e,n,r),has:(e,n)=>!!py(e,n)||t.has(e,n)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class s2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(i2(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function i2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",my="0.14.6";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ar=new hc("@firebase/app"),a2="@firebase/app-compat",o2="@firebase/analytics-compat",l2="@firebase/analytics",u2="@firebase/app-check-compat",c2="@firebase/app-check",h2="@firebase/auth",d2="@firebase/auth-compat",f2="@firebase/database",p2="@firebase/data-connect",m2="@firebase/database-compat",g2="@firebase/functions",y2="@firebase/functions-compat",v2="@firebase/installations",b2="@firebase/installations-compat",w2="@firebase/messaging",x2="@firebase/messaging-compat",k2="@firebase/performance",S2="@firebase/performance-compat",E2="@firebase/remote-config",T2="@firebase/remote-config-compat",N2="@firebase/storage",I2="@firebase/storage-compat",_2="@firebase/firestore",C2="@firebase/ai",A2="@firebase/firestore-compat",P2="firebase",R2="12.6.0";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Kd="[DEFAULT]",D2={[Hd]:"fire-core",[a2]:"fire-core-compat",[l2]:"fire-analytics",[o2]:"fire-analytics-compat",[c2]:"fire-app-check",[u2]:"fire-app-check-compat",[h2]:"fire-auth",[d2]:"fire-auth-compat",[f2]:"fire-rtdb",[p2]:"fire-data-connect",[m2]:"fire-rtdb-compat",[g2]:"fire-fn",[y2]:"fire-fn-compat",[v2]:"fire-iid",[b2]:"fire-iid-compat",[w2]:"fire-fcm",[x2]:"fire-fcm-compat",[k2]:"fire-perf",[S2]:"fire-perf-compat",[E2]:"fire-rc",[T2]:"fire-rc-compat",[N2]:"fire-gcs",[I2]:"fire-gcs-compat",[_2]:"fire-fst",[A2]:"fire-fst-compat",[C2]:"fire-vertex","fire-js":"fire-js",[P2]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Eu=new Map,L2=new Map,Wd=new Map;function gy(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Wd.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,t);for(const n of Eu.values())gy(n,t);for(const n of L2.values())gy(n,t);return!0}function as(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const O2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Br=new Gs("app","Firebase",O2);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class j2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Br.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ea=R2;function Iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Kd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Br.create("bad-app-name",{appName:String(s)});if(n||(n=bw()),!n)throw Br.create("no-options");const i=Eu.get(s);if(i){if(Qr(n,i.options)&&Qr(r,i.config))return i;throw Br.create("duplicate-app",{appName:s})}const a=new qT(s);for(const u of Wd.values())a.addComponent(u);const l=new j2(n,r,a);return Eu.set(s,l),l}function dc(t=Kd){const e=Eu.get(t);if(!e&&t===Kd&&bw())return Iw();if(!e)throw Br.create("no-app",{appName:t});return e}function Ut(t,e,n){let r=D2[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Sn(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const M2="firebase-heartbeat-database",U2=1,vo="firebase-heartbeat-store";let jh=null;function _w(){return jh||(jh=Nw(M2,U2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Br.create("idb-open",{originalErrorMessage:t.message})})),jh}async function F2(t){try{const e=(await _w()).transaction(vo),n=await e.objectStore(vo).get(Cw(t));return await e.done,n}catch(e){if(e instanceof hn)ar.warn(e.message);else{const n=Br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function yy(t,e){try{const n=(await _w()).transaction(vo,"readwrite");await n.objectStore(vo).put(e,Cw(t)),await n.done}catch(n){if(n instanceof hn)ar.warn(n.message);else{const r=Br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function Cw(t){return`${t.name}!${t.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const V2=1024,z2=30;class $2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>z2){const i=H2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vy(),{heartbeatsToSend:r,unsentEntries:s}=q2(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ar.warn(n),""}}}function vy(){return new Date().toISOString().substring(0,10)}function q2(t,e=V2){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),by(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),by(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kw()?Sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await F2(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function by(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}function H2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function K2(t){Sn(new cn("platform-logger",e=>new s2(e),"PRIVATE")),Sn(new cn("heartbeat",e=>new $2(e),"PRIVATE")),Ut(Hd,my,t),Ut(Hd,my,"esm2020"),Ut("fire-js","")}K2("");var W2="firebase",G2="12.6.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Ut(W2,G2,"app");const Aw="@firebase/installations",gp="0.6.19";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pw=1e4,Rw=`w:${gp}`,Dw="FIS_v2",Q2="https://firebaseinstallations.googleapis.com/v1",X2=60*60*1e3,Y2="installations",J2="Installations";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Z2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vs=new Gs(Y2,J2,Z2);function Lw(t){return t instanceof hn&&t.code.includes("request-failed")}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ow({projectId:t}){return`${Q2}/projects/${t}/installations`}function jw(t){return{token:t.token,requestStatus:2,expiresIn:tN(t.expiresIn),creationTime:Date.now()}}async function Mw(t,e){const n=(await e.json()).error;return Vs.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Uw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eN(t,{refreshToken:e}){const n=Uw(t);return n.append("Authorization",nN(e)),n}async function Fw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tN(t){return Number(t.replace("s","000"))}function nN(t){return`${Dw} ${t}`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function rN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ow(t),s=Uw(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Dw,appId:t.appId,sdkVersion:Rw},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Fw(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:jw(h.authToken)}}else throw await Mw("Create Installation",u)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vw(t){return new Promise(e=>{setTimeout(e,t)})}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const iN=/^[cdef][\w-]{21}$/,Gd="";function aN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=oN(t);return iN.test(e)?e:Gd}catch{return Gd}}function oN(t){return sN(t).substr(0,22)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fc(t){return`${t.appName}!${t.appId}`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zw=new Map;function $w(t,e){const n=fc(t);qw(n,e),lN(n,e)}function qw(t,e){const n=zw.get(t);if(n)for(const r of n)r(e)}function lN(t,e){const n=uN();n&&n.postMessage({key:t,fid:e}),cN()}let Cs=null;function uN(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=t=>{qw(t.data.key,t.data.fid)}),Cs}function cN(){zw.size===0&&Cs&&(Cs.close(),Cs=null)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const hN="firebase-installations-database",dN=1,zs="firebase-installations-store";let Mh=null;function yp(){return Mh||(Mh=Nw(hN,dN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}})),Mh}async function Tu(t,e){const n=fc(t),r=(await yp()).transaction(zs,"readwrite"),s=r.objectStore(zs),i=await s.get(n);return await s.put(e,n),await r.done,(!i||i.fid!==e.fid)&&$w(t,e.fid),e}async function Bw(t){const e=fc(t),n=(await yp()).transaction(zs,"readwrite");await n.objectStore(zs).delete(e),await n.done}async function pc(t,e){const n=fc(t),r=(await yp()).transaction(zs,"readwrite"),s=r.objectStore(zs),i=await s.get(n),a=e(i);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!i||i.fid!==a.fid)&&$w(t,a.fid),a}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function vp(t){let e;const n=await pc(t.appConfig,r=>{const s=fN(r),i=pN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Gd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fN(t){const e=t||{fid:aN(),registrationStatus:0};return Hw(e)}function pN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Vs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gN(t)}:{installationEntry:e}}async function mN(t,e){try{const n=await rN(t,e);return Tu(t.appConfig,n)}catch(n){throw Lw(n)&&n.customData.serverCode===409?await Bw(t.appConfig):await Tu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gN(t){let e=await wy(t.appConfig);for(;e.registrationStatus===1;)await Vw(100),e=await wy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vp(t);return r||n}return e}function wy(t){return pc(t,e=>{if(!e)throw Vs.create("installation-not-found");return Hw(e)})}function Hw(t){return yN(t)?{fid:t.fid,registrationStatus:0}:t}function yN(t){return t.registrationStatus===1&&t.registrationTime+Pw<Date.now()}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function vN({appConfig:t,heartbeatServiceProvider:e},n){const r=bN(t,n),s=eN(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Rw,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await Fw(()=>fetch(r,l));if(u.ok){const h=await u.json();return jw(h)}else throw await Mw("Generate Auth Token",u)}function bN(t,{fid:e}){return`${Ow(t)}/${e}/authTokens:generate`}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function bp(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!Kw(s))throw Vs.create("not-registered");const i=s.authToken;if(!e&&kN(i))return s;if(i.requestStatus===1)return n=wN(t,e),s;{if(!navigator.onLine)throw Vs.create("app-offline");const a=EN(s);return n=xN(t,a),a}});return n?await n:r.authToken}async function wN(t,e){let n=await xy(t.appConfig);for(;n.authToken.requestStatus===1;)await Vw(100),n=await xy(t.appConfig);const r=n.authToken;return r.requestStatus===0?bp(t,e):r}function xy(t){return pc(t,e=>{if(!Kw(e))throw Vs.create("not-registered");const n=e.authToken;return TN(n)?{...e,authToken:{requestStatus:0}}:e})}async function xN(t,e){try{const n=await vN(t,e),r={...e,authToken:n};return await Tu(t.appConfig,r),n}catch(n){if(Lw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bw(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Tu(t.appConfig,r)}throw n}}function Kw(t){return t!==void 0&&t.registrationStatus===2}function kN(t){return t.requestStatus===2&&!SN(t)}function SN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X2}function EN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function TN(t){return t.requestStatus===1&&t.requestTime+Pw<Date.now()}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function NN(t){const e=t,{installationEntry:n,registrationPromise:r}=await vp(e);return r?r.catch(console.error):bp(e).catch(console.error),n.fid}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function IN(t,e=!1){const n=t;return await _N(n),(await bp(n,e)).token}async function _N(t){const{registrationPromise:e}=await vp(t);e&&await e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CN(t){if(!t||!t.options)throw Uh("App Configuration");if(!t.name)throw Uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uh(t){return Vs.create("missing-app-config-values",{valueName:t})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ww="installations",AN="installations-internal",PN=t=>{const e=t.getProvider("app").getImmediate(),n=CN(e),r=as(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},RN=t=>{const e=t.getProvider("app").getImmediate(),n=as(e,Ww).getImmediate();return{getId:()=>NN(n),getToken:r=>IN(n,r)}};function DN(){Sn(new cn(Ww,PN,"PUBLIC")),Sn(new cn(AN,RN,"PRIVATE"))}DN();Ut(Aw,gp);Ut(Aw,gp,"esm2020");/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Nu="analytics",LN="firebase_id",ON="origin",jN=60*1e3,MN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const It=new hc("@firebase/analytics");/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const UN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Gt=new Gs("analytics","Analytics",UN);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FN(t){if(!t.startsWith(wp)){const e=Gt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function Gw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function zN(t,e){const n=VN("firebase-js-sdk-policy",{createScriptURL:FN}),r=document.createElement("script"),s=`${wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $N(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qN(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const l=(await Gw(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(l){It.error(l)}t("config",s,i)}async function BN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Gw(n);for(const u of a){const h=l.find(g=>g.measurementId===u),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){It.error(i)}}function HN(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await BN(t,e,n,l,u)}else if(i==="config"){const[l,u]=a;await qN(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=a;t("consent",l,u)}else if(i==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(i==="set"){const[l]=a;t("set",l)}else t(i,...a)}catch(l){It.error(l)}}return s}function KN(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=HN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function WN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wp)&&n.src.includes(t))return n;return null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const GN=30,QN=1e3;class XN{constructor(e={},n=QN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qw=new XN;function YN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function JN(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:YN(r)},i=MN.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();(e=u.error)!=null&&e.message&&(l=u.error.message)}catch{}throw Gt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function ZN(t,e=Qw,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Gt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nI;return setTimeout(async()=>{l.abort()},jN),Xw({appId:r,apiKey:s,measurementId:i},a,l,e)}async function Xw(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Qw){var i;const{appId:a,measurementId:l}=t;try{await eI(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await JN(t);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!tI(h)){if(s.deleteThrottleMetadata(a),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const m=Number((i=h==null?void 0:h.customData)==null?void 0:i.httpStatus)===503?hy(n,s.intervalMillis,GN):hy(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return s.setThrottleMetadata(a,g),It.debug(`Calling attemptFetch again in ${m} millis`),Xw(t,g,r,s)}}function eI(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tI(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rI(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a={...r,send_to:i};t("event",n,a)}}async function sI(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function iI(){if(kw())try{await Sw()}catch(t){return It.warn(Gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aI(t,e,n,r,s,i,a){const l=ZN(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>It.error(y)),e.push(l);const u=iI().then(y=>{if(y)return r.getId()}),[h,m]=await Promise.all([l,u]);WN(i)||zN(i,h.measurementId),s("js",new Date);const g=(a==null?void 0:a.config)??{};return g[ON]="firebase",g.update=!0,m!=null&&(g[LN]=m),s("config",h.measurementId,g),h.measurementId}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class oI{constructor(e){this.app=e}_delete(){return delete Pi[this.app.options.appId],Promise.resolve()}}let Pi={},ky=[];const Sy={};let Fh="dataLayer",lI="gtag",Ey,xp,Ty=!1;function uI(){const t=[];if(xw()&&t.push("This is a browser extension environment."),_T()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Gt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function cI(t,e,n){uI();const r=t.options.appId;if(!r)throw Gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Gt.create("no-api-key");if(Pi[r]!=null)throw Gt.create("already-exists",{id:r});if(!Ty){$N(Fh);const{wrappedGtag:s,gtagCore:i}=KN(Pi,ky,Sy,Fh,lI);xp=s,Ey=i,Ty=!0}return Pi[r]=aI(t,ky,Sy,e,Ey,Fh,n),new oI(t)}function hI(t=dc()){t=Ee(t);const e=as(t,Nu);return e.isInitialized()?e.getImmediate():dI(t)}function dI(t,e={}){const n=as(t,Nu);if(n.isInitialized()){const r=n.getImmediate();if(Qr(e,n.getOptions()))return r;throw Gt.create("already-initialized")}return n.initialize({options:e})}function fI(t,e,n){t=Ee(t),sI(xp,Pi[t.app.options.appId],e,n).catch(r=>It.error(r))}function pI(t,e,n,r){t=Ee(t),rI(xp,Pi[t.app.options.appId],e,n,r).catch(s=>It.error(s))}const Ny="@firebase/analytics",Iy="0.10.19";function mI(){Sn(new cn(Nu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cI(r,s,n)},"PUBLIC")),Sn(new cn("analytics-internal",t,"PRIVATE")),Ut(Ny,Iy),Ut(Ny,Iy,"esm2020");function t(e){try{const n=e.getProvider(Nu).getImmediate();return{logEvent:(r,s,i)=>pI(n,r,s,i),setUserProperties:(r,s)=>fI(n,r,s)}}catch(n){throw Gt.create("interop-component-reg-failed",{reason:n})}}}mI();function Yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=Yw,Jw=new Gs("auth","Firebase",Yw());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Iu=new hc("@firebase/auth");function yI(t,...e){Iu.logLevel<=ce.WARN&&Iu.warn(`Auth (${ea}): ${t}`,...e)}function ql(t,...e){Iu.logLevel<=ce.ERROR&&Iu.error(`Auth (${ea}): ${t}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function En(t,...e){throw kp(t,...e)}function Mn(t,...e){return kp(t,...e)}function Zw(t,e,n){const r={...gI(),[e]:n};return new Gs("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Zw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function ee(t,e,...n){if(!t)throw kp(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function or(t,e){t||Yn(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vI(){return _y()==="http:"||_y()==="https:"}function _y(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vI()||xw()||"connection"in navigator)?navigator.onLine:!0}function wI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=kT()||TT()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sp(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ex{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SI=new Ro(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dr(t,e,n,r,s={}){return tx(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Po({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return ET()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(h.credentials="include"),ex.fetch()(await nx(t,t.config.apiHost,n,l),h)})}async function tx(t,e,n){t._canInitEmulator=!1;const r={...xI,...e};try{const s=new TI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Sl(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zw(t,m,h);En(t,m)}}catch(s){if(s instanceof hn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Do(t,e,n,r,s={}){const i=await dr(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function nx(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Sp(t.config,s):`${t.config.apiScheme}://${s}`;return kI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function EI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),SI.get())})}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}function Cy(t){return t!==void 0&&t.enterprise!==void 0}class NI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function II(t,e){return dr(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function _I(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function _u(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CI(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),s=Ep(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qa(Vh(s.auth_time)),issuedAtTime:Qa(Vh(s.iat)),expirationTime:Qa(Vh(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vh(t){return Number(t)*1e3}function Ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=gw(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ay(t){const e=Ep(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&AI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class PI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Cu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qi(t,_u(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=(e=i.providerUserInfo)!=null&&e.length?rx(i.providerUserInfo):[],l=DI(t.providerData,a),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Xd(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,g)}async function RI(t){const e=Ee(t);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DI(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function rx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function LI(t,e){const n=await tx(t,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await nx(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(u.credentials="include"),ex.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OI(t,e){return dr(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Ay(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await LI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Ri;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CI(this,e)}reload(){return RI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await qi(this,_I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:C,providerData:R,stsTokenManager:D}=n;ee(g&&D,e,"internal-error");const j=Ri.fromJSON(this.name,D);ee(typeof g=="string",e,"internal-error"),kr(r,e.name),kr(s,e.name),ee(typeof y=="boolean",e,"internal-error"),ee(typeof C=="boolean",e,"internal-error"),kr(i,e.name),kr(a,e.name),kr(l,e.name),kr(u,e.name),kr(h,e.name),kr(m,e.name);const T=new bn({uid:g,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:j,createdAt:h,lastLoginAt:m});return R&&Array.isArray(R)&&(T.providerData=R.map(S=>({...S}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rx(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ri;l.updateFromIdToken(r);const u=new bn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Py=new Map;function Jn(t){or(t instanceof Function,"Expected a class definition");let e=Py.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Py.set(t,e),e)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sx.type="NONE";const Ry=sx;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _u(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(Jn(Ry),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Jn(Ry);const a=Bl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const m=await h._get(a);if(m){let g;if(typeof m=="string"){const y=await _u(e,{idToken:m}).catch(()=>{});if(!y)break;g=await bn._fromGetAccountInfoResponse(e,y,m)}else g=bn._fromJSON(e,m);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Di(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Di(i,e,r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ix(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cx(e))return"Blackberry";if(hx(e))return"Webos";if(ax(e))return"Safari";if((e.includes("chrome/")||ox(e))&&!e.includes("edge/"))return"Chrome";if(ux(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ix(t=kt()){return/firefox\//i.test(t)}function ax(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ox(t=kt()){return/crios\//i.test(t)}function lx(t=kt()){return/iemobile/i.test(t)}function ux(t=kt()){return/android/i.test(t)}function cx(t=kt()){return/blackberry/i.test(t)}function hx(t=kt()){return/webos/i.test(t)}function Tp(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jI(t=kt()){var e;return Tp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function MI(){return NT()&&document.documentMode===10}function dx(t=kt()){return Tp(t)||ux(t)||hx(t)||cx(t)||/windows phone/i.test(t)||lx(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function fx(t,e=[]){let n;switch(t){case"Browser":n=Dy(kt());break;case"Worker":n=`${Dy(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ea}/${r}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class UI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function FI(t,e={}){return dr(t,"GET","/v2/passwordPolicy",os(t,e))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const VI=6;class zI{constructor(e){var n;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??VI,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $I{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ly(this),this.idTokenSubscription=new Ly(this),this.beforeStateQueue=new UI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _u(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)==null?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u!=null&&u.user&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(er(this));const n=e?Ee(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FI(this),n=new zI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return n!=null&&n.error&&yI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qs(t){return Ee(t)}class Ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=DT(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qI(t){mc=t}function px(t){return mc.loadJS(t)}function BI(){return mc.recaptchaEnterpriseScript}function HI(){return mc.gapiScript}function KI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class WI{constructor(){this.enterprise=new GI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QI="recaptcha-enterprise",mx="NO_RECAPTCHA";class XI{constructor(e){this.type=QI,this.auth=Qs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{II(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new NI(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Cy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(mx)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&Cy(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BI();u.length!==0&&(u+=l),px(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Oy(t,e,n,r=!1,s=!1){const i=new XI(t);let a;if(s)a=mx;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Yd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Oy(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Oy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YI(t,e){const n=as(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Qr(s,e??{}))return r;En(r,"already-initialized")}return n.initialize({options:e})}function JI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZI(t,e,n){const r=Qs(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gx(e),{host:a,port:l}=e_(e),u=l===null?"":`:${l}`,h={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(Qr(h,r.config.emulator)&&Qr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,is(a)?(fp(`${i}//${a}${u}`),pp("Auth",!0)):t_()}function gx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function e_(t){const e=gx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jy(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:jy(a)}}}function jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function t_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Np{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function n_(t,e){return dr(t,"POST","/v1/accounts:signUp",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function r_(t,e){return Do(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function s_(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function i_(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bo extends Np{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,n,"signInWithPassword",r_);case"emailLink":return s_(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,r,"signUpPassword",n_);case"emailLink":return i_(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Li(t,e){return Do(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const a_="http://localhost";class $s extends Np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new $s(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:a_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l_(t){const e=Da(La(t)).link,n=e?Da(La(e)).deep_link_id:null,r=Da(La(t)).deep_link_id;return(r?Da(La(r)).link:null)||r||n||e||t}class Ip{constructor(e){const n=Da(La(e)),r=n.apiKey??null,s=n.oobCode??null,i=o_(n.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=l_(e);try{return new Ip(n)}catch{return null}}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ta{constructor(){this.providerId=ta.PROVIDER_ID}static credential(e,n){return bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ip.parseLink(n);return ee(r,"argument-error"),bo._fromEmailAndCode(e,r.code,r.tenantId)}}ta.PROVIDER_ID="password";ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lo extends yx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _r extends Lo{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cr extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ar extends Lo{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pr extends Lo{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function u_(t,e){return Do(t,"POST","/v1/accounts:signUp",os(t,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),a=My(r);return new qs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=My(r);return new qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function My(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Au extends hn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Au(e,n,r,s)}}function vx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function c_(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",r)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function h_(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await qi(t,vx(r,s,e,t),n);ee(i.idToken,r,"internal-error");const a=Ep(i.idToken);ee(a,r,"internal-error");const{sub:l}=a;return ee(t.uid===l,r,"user-mismatch"),qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function bx(t,e,n=!1){if(Bt(t.app))return Promise.reject(er(t));const r="signIn",s=await vx(t,r,e),i=await qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function d_(t,e){return bx(Qs(t),e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function wx(t){const e=Qs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f_(t,e,n){if(Bt(t.app))return Promise.reject(er(t));const r=Qs(t),s=await Yd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",u_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&wx(t),a}),i=await qs._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Uy(t,e,n){return Bt(t.app)?Promise.reject(er(t)):d_(Ee(t),ta.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wx(t),r})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function p_(t,e){return dr(t,"POST","/v1/accounts:update",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function m_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ee(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},i=await qi(r,p_(r.auth,s));r.displayName=i.displayName||null,r.photoURL=i.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(i)}function g_(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function y_(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function v_(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function El(t){return Ee(t).signOut()}const Pu="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const b_=1e3,w_=10;class kx extends xx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);MI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,w_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kx.type="LOCAL";const x_=kx;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sx extends xx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sx.type="SESSION";const Ex=Sx;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function k_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),u=await k_(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class S_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=_p("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Un(){return window}function E_(t){Un().location.href=t}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tx(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function T_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function I_(){return Tx()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Nx="firebaseLocalStorageDb",__=1,Ru="firebaseLocalStorage",Ix="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function C_(){const t=indexedDB.deleteDatabase(Nx);return new Oo(t).toPromise()}function Jd(){const t=indexedDB.open(Nx,__);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:Ix})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await C_(),e(await Jd()))})})}async function Fy(t,e,n){const r=yc(t,!0).put({[Ix]:e,value:n});return new Oo(r).toPromise()}async function A_(t,e){const n=yc(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Vy(t,e){const n=yc(t,!0).delete(e);return new Oo(n).toPromise()}const P_=800,R_=3;class _x{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(I_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T_(),!this.activeServiceWorker)return;this.sender=new S_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(e=r[0])!=null&&e.fulfilled&&(n=r[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await Fy(e,Pu,"1"),await Vy(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yc(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_x.type="LOCAL";const D_=_x;new Ro(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L_(t,e){return e?Jn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cp extends Np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O_(t){return bx(t.auth,new Cp(t),t.bypassAuthState)}function j_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),h_(n,new Cp(t),t.bypassAuthState)}async function M_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),c_(n,new Cp(t),t.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cx{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return j_;default:En(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const U_=new Ro(2e3,1e4);class Ei extends Cx{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}Ei.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const F_="pendingRedirect",Hl=new Map;class V_ extends Cx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const n=await z_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z_(t,e){const n=B_(e),r=q_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $_(t,e){Hl.set(t._key(),e)}function q_(t){return Jn(t._redirectPersistence)}function B_(t){return Bl(F_,t.config.apiKey,t.name)}async function H_(t,e,n=!1){if(Bt(t.app))return Promise.reject(er(t));const r=Qs(t),s=L_(r,e),i=await new V_(r,s,n).execute();return i&&!n&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,e)),i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const K_=10*60*1e3;class W_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ax(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ax({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ax(t);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Q_(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y_=/^https?/;async function J_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q_(t);for(const n of e)try{if(Z_(n))return}catch{}En(t,"unauthorized-domain")}function Z_(t){const e=Qd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===r}if(!Y_.test(n))return!1;if(X_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const eC=new Ro(3e4,6e4);function $y(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tC(t){return new Promise((e,n)=>{var r,s,i;function a(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),n(Mn(t,"network-request-failed"))},timeout:eC.get()})}if((s=(r=Un().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((i=Un().gapi)!=null&&i.load)a();else{const l=KI("iframefcb");return Un()[l]=()=>{gapi.load?a():n(Mn(t,"network-request-failed"))},px(`${HI()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function nC(t){return Kl=Kl||tC(t),Kl}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rC=new Ro(5e3,15e3),sC="__/auth/iframe",iC="emulator/auth/iframe",aC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lC(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sp(e,iC):`https://${t.config.authDomain}/${sC}`,r={apiKey:e.apiKey,appName:t.name,v:ea},s=oC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Po(r).slice(1)}`}async function uC(t){const e=await nC(t),n=Un().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:lC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mn(t,"network-request-failed"),l=Un().setTimeout(()=>{i(a)},rC.get());function u(){Un().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hC=500,dC=600,fC="_blank",pC="http://localhost";class qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mC(t,e,n,r=hC,s=dC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...cC,width:r.toString(),height:s.toString(),top:i,left:a},h=kt().toLowerCase();n&&(l=ox(h)?fC:n),ix(h)&&(e=e||pC,u.scrollbars="yes");const m=Object.entries(u).reduce((y,[C,R])=>`${y}${C}=${R},`,"");if(jI(h)&&l!=="_self")return gC(e||"",l),new qy(null);const g=window.open(e||"",l,m);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new qy(g)}function gC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yC="__/auth/handler",vC="emulator/auth/handler",bC=encodeURIComponent("fac");async function By(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ea,eventId:s};if(e instanceof yx){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",RT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))a[m]=g}if(e instanceof Lo){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(a.scopes=m.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),h=u?`#${bC}=${encodeURIComponent(u)}`:"";return`${wC(t)}?${Po(l).slice(1)}${h}`}function wC({config:t}){return t.emulator?Sp(t,vC):`https://${t.authDomain}/${yC}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zh="webStorageSupport";class xC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ex,this._completeRedirectFn=H_,this._overrideRedirectResult=$_}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])==null?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await By(e,n,r,Qd(),s);return mC(e,a,_p())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await By(e,n,r,Qd(),s);return E_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uC(e),r=new W_(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zh,{type:zh},r=>{var s;const i=(s=r==null?void 0:r[0])==null?void 0:s[zh];i!==void 0&&n(!!i),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dx()||ax()||Tp()}}const kC=xC;var Hy="@firebase/auth",Ky="1.11.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class SC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(t){Sn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fx(t)},h=new $I(r,s,i,u);return JI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new cn("auth-internal",e=>{const n=Qs(e.getProvider("auth").getImmediate());return(r=>new SC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Hy,Ky,EC(t)),Ut(Hy,Ky,"esm2020")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const NC=5*60,IC=ww("authIdTokenMaxAge")||NC;let Wy=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const s=n==null?void 0:n.token;Wy!==s&&(Wy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CC(t=dc()){const e=as(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YI(t,{popupRedirectResolver:kC,persistence:[D_,x_,Ex]}),r=ww("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=_C(i.toString());y_(n,a,()=>a(n.currentUser)),g_(n,l=>a(l))}}const s=yw("auth");return s&&ZI(n,`http://${s}`),n}function AC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}qI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");var Gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,Px;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,b){function x(){}x.prototype=b.prototype,w.F=b.prototype,w.prototype=new x,w.prototype.constructor=w,w.D=function(E,N,A){for(var k=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)k[fe-2]=arguments[fe];return b.prototype[N].apply(E,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,b,x){x||(x=0);const E=Array(16);if(typeof b=="string")for(var N=0;N<16;++N)E[N]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(N=0;N<16;++N)E[N]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=w.g[0],x=w.g[1],N=w.g[2];let A=w.g[3],k;k=b+(A^x&(N^A))+E[0]+3614090360&4294967295,b=x+(k<<7&4294967295|k>>>25),k=A+(N^b&(x^N))+E[1]+3905402710&4294967295,A=b+(k<<12&4294967295|k>>>20),k=N+(x^A&(b^x))+E[2]+606105819&4294967295,N=A+(k<<17&4294967295|k>>>15),k=x+(b^N&(A^b))+E[3]+3250441966&4294967295,x=N+(k<<22&4294967295|k>>>10),k=b+(A^x&(N^A))+E[4]+4118548399&4294967295,b=x+(k<<7&4294967295|k>>>25),k=A+(N^b&(x^N))+E[5]+1200080426&4294967295,A=b+(k<<12&4294967295|k>>>20),k=N+(x^A&(b^x))+E[6]+2821735955&4294967295,N=A+(k<<17&4294967295|k>>>15),k=x+(b^N&(A^b))+E[7]+4249261313&4294967295,x=N+(k<<22&4294967295|k>>>10),k=b+(A^x&(N^A))+E[8]+1770035416&4294967295,b=x+(k<<7&4294967295|k>>>25),k=A+(N^b&(x^N))+E[9]+2336552879&4294967295,A=b+(k<<12&4294967295|k>>>20),k=N+(x^A&(b^x))+E[10]+4294925233&4294967295,N=A+(k<<17&4294967295|k>>>15),k=x+(b^N&(A^b))+E[11]+2304563134&4294967295,x=N+(k<<22&4294967295|k>>>10),k=b+(A^x&(N^A))+E[12]+1804603682&4294967295,b=x+(k<<7&4294967295|k>>>25),k=A+(N^b&(x^N))+E[13]+4254626195&4294967295,A=b+(k<<12&4294967295|k>>>20),k=N+(x^A&(b^x))+E[14]+2792965006&4294967295,N=A+(k<<17&4294967295|k>>>15),k=x+(b^N&(A^b))+E[15]+1236535329&4294967295,x=N+(k<<22&4294967295|k>>>10),k=b+(N^A&(x^N))+E[1]+4129170786&4294967295,b=x+(k<<5&4294967295|k>>>27),k=A+(x^N&(b^x))+E[6]+3225465664&4294967295,A=b+(k<<9&4294967295|k>>>23),k=N+(b^x&(A^b))+E[11]+643717713&4294967295,N=A+(k<<14&4294967295|k>>>18),k=x+(A^b&(N^A))+E[0]+3921069994&4294967295,x=N+(k<<20&4294967295|k>>>12),k=b+(N^A&(x^N))+E[5]+3593408605&4294967295,b=x+(k<<5&4294967295|k>>>27),k=A+(x^N&(b^x))+E[10]+38016083&4294967295,A=b+(k<<9&4294967295|k>>>23),k=N+(b^x&(A^b))+E[15]+3634488961&4294967295,N=A+(k<<14&4294967295|k>>>18),k=x+(A^b&(N^A))+E[4]+3889429448&4294967295,x=N+(k<<20&4294967295|k>>>12),k=b+(N^A&(x^N))+E[9]+568446438&4294967295,b=x+(k<<5&4294967295|k>>>27),k=A+(x^N&(b^x))+E[14]+3275163606&4294967295,A=b+(k<<9&4294967295|k>>>23),k=N+(b^x&(A^b))+E[3]+4107603335&4294967295,N=A+(k<<14&4294967295|k>>>18),k=x+(A^b&(N^A))+E[8]+1163531501&4294967295,x=N+(k<<20&4294967295|k>>>12),k=b+(N^A&(x^N))+E[13]+2850285829&4294967295,b=x+(k<<5&4294967295|k>>>27),k=A+(x^N&(b^x))+E[2]+4243563512&4294967295,A=b+(k<<9&4294967295|k>>>23),k=N+(b^x&(A^b))+E[7]+1735328473&4294967295,N=A+(k<<14&4294967295|k>>>18),k=x+(A^b&(N^A))+E[12]+2368359562&4294967295,x=N+(k<<20&4294967295|k>>>12),k=b+(x^N^A)+E[5]+4294588738&4294967295,b=x+(k<<4&4294967295|k>>>28),k=A+(b^x^N)+E[8]+2272392833&4294967295,A=b+(k<<11&4294967295|k>>>21),k=N+(A^b^x)+E[11]+1839030562&4294967295,N=A+(k<<16&4294967295|k>>>16),k=x+(N^A^b)+E[14]+4259657740&4294967295,x=N+(k<<23&4294967295|k>>>9),k=b+(x^N^A)+E[1]+2763975236&4294967295,b=x+(k<<4&4294967295|k>>>28),k=A+(b^x^N)+E[4]+1272893353&4294967295,A=b+(k<<11&4294967295|k>>>21),k=N+(A^b^x)+E[7]+4139469664&4294967295,N=A+(k<<16&4294967295|k>>>16),k=x+(N^A^b)+E[10]+3200236656&4294967295,x=N+(k<<23&4294967295|k>>>9),k=b+(x^N^A)+E[13]+681279174&4294967295,b=x+(k<<4&4294967295|k>>>28),k=A+(b^x^N)+E[0]+3936430074&4294967295,A=b+(k<<11&4294967295|k>>>21),k=N+(A^b^x)+E[3]+3572445317&4294967295,N=A+(k<<16&4294967295|k>>>16),k=x+(N^A^b)+E[6]+76029189&4294967295,x=N+(k<<23&4294967295|k>>>9),k=b+(x^N^A)+E[9]+3654602809&4294967295,b=x+(k<<4&4294967295|k>>>28),k=A+(b^x^N)+E[12]+3873151461&4294967295,A=b+(k<<11&4294967295|k>>>21),k=N+(A^b^x)+E[15]+530742520&4294967295,N=A+(k<<16&4294967295|k>>>16),k=x+(N^A^b)+E[2]+3299628645&4294967295,x=N+(k<<23&4294967295|k>>>9),k=b+(N^(x|~A))+E[0]+4096336452&4294967295,b=x+(k<<6&4294967295|k>>>26),k=A+(x^(b|~N))+E[7]+1126891415&4294967295,A=b+(k<<10&4294967295|k>>>22),k=N+(b^(A|~x))+E[14]+2878612391&4294967295,N=A+(k<<15&4294967295|k>>>17),k=x+(A^(N|~b))+E[5]+4237533241&4294967295,x=N+(k<<21&4294967295|k>>>11),k=b+(N^(x|~A))+E[12]+1700485571&4294967295,b=x+(k<<6&4294967295|k>>>26),k=A+(x^(b|~N))+E[3]+2399980690&4294967295,A=b+(k<<10&4294967295|k>>>22),k=N+(b^(A|~x))+E[10]+4293915773&4294967295,N=A+(k<<15&4294967295|k>>>17),k=x+(A^(N|~b))+E[1]+2240044497&4294967295,x=N+(k<<21&4294967295|k>>>11),k=b+(N^(x|~A))+E[8]+1873313359&4294967295,b=x+(k<<6&4294967295|k>>>26),k=A+(x^(b|~N))+E[15]+4264355552&4294967295,A=b+(k<<10&4294967295|k>>>22),k=N+(b^(A|~x))+E[6]+2734768916&4294967295,N=A+(k<<15&4294967295|k>>>17),k=x+(A^(N|~b))+E[13]+1309151649&4294967295,x=N+(k<<21&4294967295|k>>>11),k=b+(N^(x|~A))+E[4]+4149444226&4294967295,b=x+(k<<6&4294967295|k>>>26),k=A+(x^(b|~N))+E[11]+3174756917&4294967295,A=b+(k<<10&4294967295|k>>>22),k=N+(b^(A|~x))+E[2]+718787259&4294967295,N=A+(k<<15&4294967295|k>>>17),k=x+(A^(N|~b))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+b&4294967295,w.g[1]=w.g[1]+(N+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+N&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.v=function(w,b){b===void 0&&(b=w.length);const x=b-this.blockSize,E=this.C;let N=this.h,A=0;for(;A<b;){if(N==0)for(;A<=x;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<b;)if(E[N++]=w.charCodeAt(A++),N==this.blockSize){s(this,E),N=0;break}}else for(;A<b;)if(E[N++]=w[A++],N==this.blockSize){s(this,E),N=0;break}}this.h=N,this.o+=b},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var b=1;b<w.length-8;++b)w[b]=0;b=this.o*8;for(var x=w.length-8;x<w.length;++x)w[x]=b&255,b/=256;for(this.v(w),w=Array(16),b=0,x=0;x<4;++x)for(let E=0;E<32;E+=8)w[b++]=this.g[x]>>>E&255;return w};function i(w,b){var x=l;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=b(w)}function a(w,b){this.h=b;const x=[];let E=!0;for(let N=w.length-1;N>=0;N--){const A=w[N]|0;E&&A==b||(x[N]=A,E=!1)}this.g=x}var l={};function u(w){return-128<=w&&w<128?i(w,function(b){return new a([b|0],b<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return j(h(-w));const b=[];let x=1;for(let E=0;w>=x;E++)b[E]=w/x|0,x*=4294967296;return new a(b,0)}function m(w,b){if(w.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(w.charAt(0)=="-")return j(m(w.substring(1),b));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=h(Math.pow(b,8));let E=g;for(let A=0;A<w.length;A+=8){var N=Math.min(8,w.length-A);const k=parseInt(w.substring(A,A+N),b);N<8?(N=h(Math.pow(b,N)),E=E.j(N).add(h(k))):(E=E.j(x),E=E.add(h(k)))}return E}var g=u(0),y=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(D(this))return-j(this).m();let w=0,b=1;for(let x=0;x<this.g.length;x++){const E=this.i(x);w+=(E>=0?E:4294967296+E)*b,b*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(D(this))return"-"+j(this).toString(w);const b=h(Math.pow(w,6));var x=this;let E="";for(;;){const N=U(x,b).g;x=T(x,N.j(b));let A=((x.g.length>0?x.g[0]:x.h)>>>0).toString(w);if(x=N,R(x))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let b=0;b<w.g.length;b++)if(w.g[b]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=T(this,w),D(w)?-1:R(w)?0:1};function j(w){const b=w.g.length,x=[];for(let E=0;E<b;E++)x[E]=~w.g[E];return new a(x,~w.h).add(y)}t.abs=function(){return D(this)?j(this):this},t.add=function(w){const b=Math.max(this.g.length,w.g.length),x=[];let E=0;for(let N=0;N<=b;N++){let A=E+(this.i(N)&65535)+(w.i(N)&65535),k=(A>>>16)+(this.i(N)>>>16)+(w.i(N)>>>16);E=k>>>16,A&=65535,k&=65535,x[N]=k<<16|A}return new a(x,x[x.length-1]&-2147483648?-1:0)};function T(w,b){return w.add(j(b))}t.j=function(w){if(R(this)||R(w))return g;if(D(this))return D(w)?j(this).j(j(w)):j(j(this).j(w));if(D(w))return j(this.j(j(w)));if(this.l(C)<0&&w.l(C)<0)return h(this.m()*w.m());const b=this.g.length+w.g.length,x=[];for(var E=0;E<2*b;E++)x[E]=0;for(E=0;E<this.g.length;E++)for(let N=0;N<w.g.length;N++){const A=this.i(E)>>>16,k=this.i(E)&65535,fe=w.i(N)>>>16,tt=w.i(N)&65535;x[2*E+2*N]+=k*tt,S(x,2*E+2*N),x[2*E+2*N+1]+=A*tt,S(x,2*E+2*N+1),x[2*E+2*N+1]+=k*fe,S(x,2*E+2*N+1),x[2*E+2*N+2]+=A*fe,S(x,2*E+2*N+2)}for(w=0;w<b;w++)x[w]=x[2*w+1]<<16|x[2*w];for(w=b;w<2*b;w++)x[w]=0;return new a(x,0)};function S(w,b){for(;(w[b]&65535)!=w[b];)w[b+1]+=w[b]>>>16,w[b]&=65535,b++}function _(w,b){this.g=w,this.h=b}function U(w,b){if(R(b))throw Error("division by zero");if(R(w))return new _(g,g);if(D(w))return b=U(j(w),b),new _(j(b.g),j(b.h));if(D(b))return b=U(w,j(b)),new _(j(b.g),b.h);if(w.g.length>30){if(D(w)||D(b))throw Error("slowDivide_ only works with positive integers.");for(var x=y,E=b;E.l(w)<=0;)x=z(x),E=z(E);var N=q(x,1),A=q(E,1);for(E=q(E,2),x=q(x,2);!R(E);){var k=A.add(E);k.l(w)<=0&&(N=N.add(x),A=k),E=q(E,1),x=q(x,1)}return b=T(w,N.j(b)),new _(N,b)}for(N=g;w.l(b)>=0;){for(x=Math.max(1,Math.floor(w.m()/b.m())),E=Math.ceil(Math.log(x)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=h(x),k=A.j(b);D(k)||k.l(w)>0;)x-=E,A=h(x),k=A.j(b);R(A)&&(A=y),N=N.add(A),w=T(w,k)}return new _(N,w)}t.B=function(w){return U(this,w).h},t.and=function(w){const b=Math.max(this.g.length,w.g.length),x=[];for(let E=0;E<b;E++)x[E]=this.i(E)&w.i(E);return new a(x,this.h&w.h)},t.or=function(w){const b=Math.max(this.g.length,w.g.length),x=[];for(let E=0;E<b;E++)x[E]=this.i(E)|w.i(E);return new a(x,this.h|w.h)},t.xor=function(w){const b=Math.max(this.g.length,w.g.length),x=[];for(let E=0;E<b;E++)x[E]=this.i(E)^w.i(E);return new a(x,this.h^w.h)};function z(w){const b=w.g.length+1,x=[];for(let E=0;E<b;E++)x[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(x,w.h)}function q(w,b){const x=b>>5;b%=32;const E=w.g.length-x,N=[];for(let A=0;A<E;A++)N[A]=b>0?w.i(A+x)>>>b|w.i(A+x+1)<<32-b:w.i(A+x);return new a(N,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Px=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Hr=a}).apply(typeof Gy<"u"?Gy:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rx,Oa,Dx,Wl,Zd,Lx,Ox,jx;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)e:{var f=r;o=o.split(".");for(var v=0;v<o.length-1;v++){var P=o[v];if(!(P in f))break e;f=f[P]}o=o[o.length-1],v=f[o],c=c(v),c!=v&&c!=null&&e(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],v;for(v in c)Object.prototype.hasOwnProperty.call(c,v)&&f.push([v,c[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function m(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function g(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(v,P,L){for(var $=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)$[oe-2]=arguments[oe];return c.prototype[P].apply(v,$)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const c=o.length;if(c>0){const f=Array(c);for(let v=0;v<c;v++)f[v]=o[v];return f}return[]}function R(o,c){for(let v=1;v<arguments.length;v++){const P=arguments[v];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=o.length||0;const L=P.length||0;o.length=f+L;for(let $=0;$<L;$++)o[f+$]=P[$]}else o.push(P)}}class D{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){a.setTimeout(()=>{throw o},0)}function T(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class S{constructor(){this.h=this.g=null}add(c,f){const v=_.get();v.set(c,f),this.h?this.h.next=v:this.g=v,this.h=v}}var _=new D(()=>new U,o=>o.reset());class U{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let z,q=!1,w=new S,b=()=>{const o=Promise.resolve(void 0);z=()=>{o.then(x)}};function x(){for(var o;o=T();){try{o.h.call(o.g)}catch(f){j(f)}var c=_;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}q=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function k(o){return/^[\s\xa0]*$/.test(o)}function fe(o,c){N.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}g(fe,N),fe.prototype.init=function(o,c){const f=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var tt="closure_listenable_"+(Math.random()*1e6|0),Nn=0;function Zs(o,c,f,v,P){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!v,this.ha=P,this.key=++Nn,this.da=this.fa=!1}function B(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Z(o,c,f){for(const v in o)c.call(f,o[v],v,o)}function ae(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function xe(o){const c={};for(const f in o)c[f]=o[f];return c}const De="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jt(o,c){let f,v;for(let P=1;P<arguments.length;P++){v=arguments[P];for(f in v)o[f]=v[f];for(let L=0;L<De.length;L++)f=De[L],Object.prototype.hasOwnProperty.call(v,f)&&(o[f]=v[f])}}function St(o){this.src=o,this.g={},this.h=0}St.prototype.add=function(o,c,f,v,P){const L=o.toString();o=this.g[L],o||(o=this.g[L]=[],this.h++);const $=Vt(o,c,v,P);return $>-1?(c=o[$],f||(c.fa=!1)):(c=new Zs(c,this.src,L,!!v,P),c.fa=f,o.push(c)),c};function Zt(o,c){const f=c.type;if(f in o.g){var v=o.g[f],P=Array.prototype.indexOf.call(v,c,void 0),L;(L=P>=0)&&Array.prototype.splice.call(v,P,1),L&&(B(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Vt(o,c,f,v){for(let P=0;P<o.length;++P){const L=o[P];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==v)return P}return-1}var zt="closure_lm_"+(Math.random()*1e6|0),en={};function cs(o,c,f,v,P){if(Array.isArray(c)){for(let L=0;L<c.length;L++)cs(o,c[L],f,v,P);return null}return f=ti(f),o&&o[tt]?o.J(c,f,l(v)?!!v.capture:!1,P):Q(o,c,f,!1,v,P)}function Q(o,c,f,v,P,L){if(!c)throw Error("Invalid event type");const $=l(P)?!!P.capture:!!P;let oe=hs(o);if(oe||(o[zt]=oe=new St(o)),f=oe.add(c,f,v,$,L),f.proxy)return f;if(v=$e(),f.proxy=v,v.src=o,v.listener=f,o.addEventListener)A||(P=$),P===void 0&&(P=!1),o.addEventListener(c.toString(),v,P);else if(o.attachEvent)o.attachEvent(ei(c.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $e(){function o(f){return c.call(o.src,o.listener,f)}const c=Uc;return o}function ge(o,c,f,v,P){if(Array.isArray(c))for(var L=0;L<c.length;L++)ge(o,c[L],f,v,P);else v=l(v)?!!v.capture:!!v,f=ti(f),o&&o[tt]?(o=o.i,L=String(c).toString(),L in o.g&&(c=o.g[L],f=Vt(c,f,v,P),f>-1&&(B(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[L],o.h--)))):o&&(o=hs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Vt(c,f,v,P)),(f=o>-1?c[o]:null)&&dn(f))}function dn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[tt])Zt(c.i,o);else{var f=o.type,v=o.proxy;c.removeEventListener?c.removeEventListener(f,v,o.capture):c.detachEvent?c.detachEvent(ei(f),v):c.addListener&&c.removeListener&&c.removeListener(v),(f=hs(c))?(Zt(f,o),f.h==0&&(f.src=null,c[zt]=null)):B(o)}}}function ei(o){return o in en?en[o]:en[o]="on"+o}function Uc(o,c){if(o.da)o=!0;else{c=new fe(c,this);const f=o.listener,v=o.ha||o.src;o.fa&&dn(o),o=f.call(v,c)}return o}function hs(o){return o=o[zt],o instanceof St?o:null}var aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function ti(o){return typeof o=="function"?o:(o[aa]||(o[aa]=function(c){return o.handleEvent(c)}),o[aa])}function nt(){E.call(this),this.i=new St(this),this.M=this,this.G=null}g(nt,E),nt.prototype[tt]=!0,nt.prototype.removeEventListener=function(o,c,f,v){ge(this,o,c,f,v)};function qe(o,c){var f,v=o.G;if(v)for(f=[];v;v=v.G)f.push(v);if(o=o.M,v=c.type||c,typeof c=="string")c=new N(c,o);else if(c instanceof N)c.target=c.target||o;else{var P=c;c=new N(v,o),Jt(c,P)}P=!0;let L,$;if(f)for($=f.length-1;$>=0;$--)L=c.g=f[$],P=ni(L,v,!0,c)&&P;if(L=c.g=o,P=ni(L,v,!0,c)&&P,P=ni(L,v,!1,c)&&P,f)for($=0;$<f.length;$++)L=c.g=f[$],P=ni(L,v,!1,c)&&P}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let v=0;v<f.length;v++)B(f[v]);delete o.g[c],o.h--}}this.G=null},nt.prototype.J=function(o,c,f,v){return this.i.add(String(o),c,!1,f,v)},nt.prototype.K=function(o,c,f,v){return this.i.add(String(o),c,!0,f,v)};function ni(o,c,f,v){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let L=0;L<c.length;++L){const $=c[L];if($&&!$.da&&$.capture==f){const oe=$.listener,Xe=$.ha||$.src;$.fa&&Zt(o.i,$),P=oe.call(Xe,v)!==!1&&P}}return P&&!v.defaultPrevented}function Fc(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function oa(o){o.g=Fc(()=>{o.g=null,o.i&&(o.i=!1,oa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Te extends E{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:oa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(o){E.call(this),this.h=o,this.g={}}g(ds,E);var qo=[];function fr(o){Z(o.g,function(c,f){this.g.hasOwnProperty(f)&&dn(c)},o),o.g={}}ds.prototype.N=function(){ds.Z.N.call(this),fr(this)},ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=a.JSON.stringify,Vc=a.JSON.parse,fs=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Bo(){}function zc(){}var ps={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function J(){N.call(this,"d")}g(J,N);function Hn(){N.call(this,"c")}g(Hn,N);var Kn={},Ho=null;function ms(){return Ho=Ho||new nt}Kn.Ia="serverreachability";function Ko(o){N.call(this,Kn.Ia,o)}g(Ko,N);function gs(o){const c=ms();qe(c,new Ko(c))}Kn.STAT_EVENT="statevent";function Wo(o,c){N.call(this,Kn.STAT_EVENT,o),this.stat=c}g(Wo,N);function rt(o){const c=ms();qe(c,new Wo(c,o))}Kn.Ja="timingevent";function fn(o,c){N.call(this,Kn.Ja,o),this.size=c}g(fn,N);function ys(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Go(o,c,f,v,P,L){o.info(function(){if(o.g)if(L){var $="",oe=L.split("&");for(let Ie=0;Ie<oe.length;Ie++){var Xe=oe[Ie].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const Cn=st.split("_");$=Cn.length>=2&&Cn[1]=="type"?$+(st+"="+Xe+"&"):$+(st+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+P+"]: "+c+`
`+f+`
`+$})}function $c(o,c,f,v,P,L,$){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+P+"]: "+c+`
`+f+`
`+L+" "+$})}function mr(o,c,f,v){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+qc(o,f)+(v?" "+v:"")})}function Qo(o,c){o.info(function(){return"TIMEOUT: "+c})}pr.prototype.info=function(){};function qc(o,c){if(!o.g)return c;if(!c)return null;try{const L=JSON.parse(c);if(L){for(o=0;o<L.length;o++)if(Array.isArray(L[o])){var f=L[o];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var P=v[0];if(P!="noop"&&P!="stop"&&P!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return Bn(L)}catch{return c}}var ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Yo;function la(){}g(la,Bo),la.prototype.g=function(){return new XMLHttpRequest},Yo=new la;function pn(o){return encodeURIComponent(String(o))}function Bc(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function In(o,c,f,v){this.j=o,this.i=c,this.l=f,this.S=v||1,this.V=new ds(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new p}function p(){this.i=null,this.g="",this.h=!1}var I={},O={};function H(o,c,f){o.M=1,o.A=Jo(_n(c)),o.u=f,o.R=!0,ne(o,null)}function ne(o,c){o.F=Date.now(),le(o),o.B=_n(o.A);var f=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),Tm(f.i,"t",v),o.C=0,f=o.j.L,o.h=new p,o.g=qm(o.j,f?c:null,!o.u),o.P>0&&(o.O=new Te(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,v=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(qo[0]=P.toString()),P=qo);for(let L=0;L<P.length;L++){const $=cs(f,P[L],v||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.J?xe(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),gs(),Go(o.i,o.v,o.B,o.l,o.S,o.u)}In.prototype.ba=function(o){o=o.target;const c=this.O;c&&vr(o)==3?c.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const oe=vr(this.g),Xe=this.g.ya(),Ie=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Rm(this.g)))){this.K||oe!=4||Xe==7||(Xe==8||Ie<=0?gs(3):gs(2)),Hc(this);var c=this.g.ca();this.X=c;var f=X(this);if(this.o=c==200,$c(this.i,this.v,this.B,this.l,this.S,oe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var v,P=this.g;if((v=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(v)){var L=v;break t}}L=null}if(o=L)mr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kc(this,o);else{this.o=!1,this.m=3,rt(12),vs(this),ua(this);break e}}if(this.R){o=!0;let st;for(;!this.K&&this.C<f.length;)if(st=ye(this,f),st==O){oe==4&&(this.m=4,rt(14),o=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(st==I){this.m=4,rt(15),mr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else mr(this.i,this.l,st,null),Kc(this,st);if(ve(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,rt(16),o=!1),this.o=this.o&&o,!o)mr(this.i,this.l,f,"[Invalid Chunked Response]"),vs(this),ua(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),eh($),$.P=!0,rt(11))}}else mr(this.i,this.l,f,null),Kc(this,f);oe==4&&vs(this),this.o&&!this.K&&(oe==4?Fm(this.j,this):(this.o=!1,le(this)))}else kk(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),vs(this),ua(this)}}}catch{}finally{}};function X(o){if(!ve(o))return o.g.la();const c=Rm(o.g);if(c==="")return"";let f="";const v=c.length,P=vr(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return vs(o),ua(o),"";o.h.i=new a.TextDecoder}for(let L=0;L<v;L++)o.h.h=!0,f+=o.h.i.decode(c[L],{stream:!(P&&L==v-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function ve(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ye(o,c){var f=o.C,v=c.indexOf(`
`,f);return v==-1?O:(f=Number(c.substring(f,v)),isNaN(f)?I:(v+=1,v+f>c.length?O:(c=c.slice(v,v+f),o.C=v+f,c)))}In.prototype.cancel=function(){this.K=!0,vs(this)};function le(o){o.T=Date.now()+o.H,Et(o,o.H)}function Et(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ys(h(o.aa,o),c)}function Hc(o){o.D&&(a.clearTimeout(o.D),o.D=null)}In.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qo(this.i,this.B),this.M!=2&&(gs(),rt(17)),vs(this),this.m=2,ua(this)):Et(this,this.T-o)};function ua(o){o.j.I==0||o.K||Fm(o.j,o)}function vs(o){Hc(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,fr(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Kc(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||Wc(f.h,o))){if(!o.L&&Wc(f.h,o)&&f.I==3){try{var v=f.Ba.g.parse(c)}catch{v=null}if(Array.isArray(v)&&v.length==3){var P=v;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)rl(f),tl(f);else break e;Zc(f),rt(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ys(h(f.Va,f),6e3));ym(f.h)<=1&&f.ta&&(f.ta=void 0)}else ws(f,11)}else if((o.L||f.g==o)&&rl(f),!k(c))for(P=f.Ba.g.parse(c),c=0;c<P.length;c++){let Ie=P[c];const st=Ie[0];if(!(st<=f.K))if(f.K=st,Ie=Ie[1],f.I==2)if(Ie[0]=="c"){f.M=Ie[1],f.ba=Ie[2];const Cn=Ie[3];Cn!=null&&(f.ka=Cn,f.j.info("VER="+f.ka));const ai=Ie[4];ai!=null&&(f.za=ai,f.j.info("SVER="+f.za));const br=Ie[5];br!=null&&typeof br=="number"&&br>0&&(v=1.5*br,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const wr=o.g;if(wr){const il=wr.g?wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(il){var L=v.h;L.g||il.indexOf("spdy")==-1&&il.indexOf("quic")==-1&&il.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Gc(L,L.h),L.h=null))}if(v.G){const th=wr.g?wr.g.getResponseHeader("X-HTTP-Session-Id"):null;th&&(v.wa=th,Ne(v.J,v.G,th))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var $=o;if(v.na=$m(v,v.L?v.ba:null,v.W),$.L){vm(v.h,$);var oe=$,Xe=v.O;Xe&&(oe.H=Xe),oe.D&&(Hc(oe),le(oe)),v.g=$}else Mm(v);f.i.length>0&&nl(f)}else Ie[0]!="stop"&&Ie[0]!="close"||ws(f,7);else f.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?ws(f,7):Jc(f):Ie[0]!="noop"&&f.l&&f.l.qa(Ie),f.A=0)}}gs(4)}catch{}}var uk=class{constructor(o,c){this.g=o,this.map=c}};function mm(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gm(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ym(o){return o.h?1:o.g?o.g.size:0}function Wc(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Gc(o,c){o.g?o.g.add(c):o.h=c}function vm(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}mm.prototype.cancel=function(){if(this.i=bm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bm(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return C(o.i)}var wm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ck(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const v=o[f].indexOf("=");let P,L=null;v>=0?(P=o[f].substring(0,v),L=o[f].substring(v+1)):P=o[f],c(P,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gr(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof gr?(this.l=o.l,ca(this,o.j),this.o=o.o,this.g=o.g,ha(this,o.u),this.h=o.h,Qc(this,Nm(o.i)),this.m=o.m):o&&(c=String(o).match(wm))?(this.l=!1,ca(this,c[1]||"",!0),this.o=da(c[2]||""),this.g=da(c[3]||"",!0),ha(this,c[4]),this.h=da(c[5]||"",!0),Qc(this,c[6]||"",!0),this.m=da(c[7]||"")):(this.l=!1,this.i=new pa(null,this.l))}gr.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(fa(c,xm,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(fa(c,xm,!0),"@"),o.push(pn(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(fa(f,f.charAt(0)=="/"?fk:dk,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",fa(f,mk)),o.join("")},gr.prototype.resolve=function(o){const c=_n(this);let f=!!o.j;f?ca(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var v=o.h;if(f)ha(c,o.u);else if(f=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var P=c.h.lastIndexOf("/");P!=-1&&(v=c.h.slice(0,P+1)+v)}if(P=v,P==".."||P==".")v="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){v=P.lastIndexOf("/",0)==0,P=P.split("/");const L=[];for(let $=0;$<P.length;){const oe=P[$++];oe=="."?v&&$==P.length&&L.push(""):oe==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&$==P.length&&L.push("")):(L.push(oe),v=!0)}v=L.join("/")}else v=P}return f?c.h=v:f=o.i.toString()!=="",f?Qc(c,Nm(o.i)):f=!!o.m,f&&(c.m=o.m),c};function _n(o){return new gr(o)}function ca(o,c,f){o.j=f?da(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ha(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Qc(o,c,f){c instanceof pa?(o.i=c,gk(o.i,o.l)):(f||(c=fa(c,pk)),o.i=new pa(c,o.l))}function Ne(o,c,f){o.i.set(c,f)}function Jo(o){return Ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function da(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fa(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,hk),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hk(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xm=/[#\/\?@]/g,dk=/[#\?:]/g,fk=/[#\?]/g,pk=/[#\?@]/g,mk=/#/g;function pa(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function bs(o){o.g||(o.g=new Map,o.h=0,o.i&&ck(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=pa.prototype,t.add=function(o,c){bs(this),this.i=null,o=si(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function km(o,c){bs(o),c=si(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Sm(o,c){return bs(o),c=si(o,c),o.g.has(c)}t.forEach=function(o,c){bs(this),this.g.forEach(function(f,v){f.forEach(function(P){o.call(c,P,v,this)},this)},this)};function Em(o,c){bs(o);let f=[];if(typeof c=="string")Sm(o,c)&&(f=f.concat(o.g.get(si(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}t.set=function(o,c){return bs(this),this.i=null,o=si(this,o),Sm(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=Em(this,o),o.length>0?String(o[0]):c):c};function Tm(o,c,f){km(o,c),f.length>0&&(o.i=null,o.g.set(si(o,c),C(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let v=0;v<c.length;v++){var f=c[v];const P=pn(f);f=Em(this,f);for(let L=0;L<f.length;L++){let $=P;f[L]!==""&&($+="="+pn(f[L])),o.push($)}}return this.i=o.join("&")};function Nm(o){const c=new pa;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function si(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function gk(o,c){c&&!o.j&&(bs(o),o.i=null,o.g.forEach(function(f,v){const P=v.toLowerCase();v!=P&&(km(this,v),Tm(this,P,f))},o)),o.j=c}function yk(o,c){const f=new pr;if(a.Image){const v=new Image;v.onload=m(yr,f,"TestLoadImage: loaded",!0,c,v),v.onerror=m(yr,f,"TestLoadImage: error",!1,c,v),v.onabort=m(yr,f,"TestLoadImage: abort",!1,c,v),v.ontimeout=m(yr,f,"TestLoadImage: timeout",!1,c,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else c(!1)}function vk(o,c){const f=new pr,v=new AbortController,P=setTimeout(()=>{v.abort(),yr(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:v.signal}).then(L=>{clearTimeout(P),L.ok?yr(f,"TestPingServer: ok",!0,c):yr(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),yr(f,"TestPingServer: error",!1,c)})}function yr(o,c,f,v,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),v(f)}catch{}}function bk(){this.g=new fs}function Xc(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Xc,Bo),Xc.prototype.g=function(){return new Zo(this.i,this.h)};function Zo(o,c){nt.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Zo,nt),t=Zo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,ga(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ma(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ga(this)),this.g&&(this.readyState=3,ga(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Im(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Im(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ma(this):ga(this),this.readyState==3&&Im(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,ma(this))},t.Na=function(o){this.g&&(this.response=o,ma(this))},t.ga=function(){this.g&&ma(this)};function ma(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ga(o)}t.setRequestHeader=function(o,c){this.A.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function ga(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _m(o){let c="";return Z(o,function(f,v){c+=v,c+=":",c+=f,c+=`\r
`}),c}function Yc(o,c,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=_m(f),typeof o=="string"?f!=null&&pn(f):Ne(o,c,f))}function Fe(o){nt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Fe,nt);var wk=/^https?$/i,xk=["POST","PUT"];t=Fe.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,c,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Yo.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(L){Cm(this,L);return}if(o=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var P in v)f.set(P,v[P]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())f.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(xk,c,void 0)>=0)||v||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of f)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(L){Cm(this,L)}};function Cm(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Am(o),el(o)}function Am(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,qe(this,"complete"),qe(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Pm(this):this.Xa())},t.Xa=function(){Pm(this)};function Pm(o){if(o.h&&typeof i<"u"){if(o.v&&vr(o)==4)setTimeout(o.Ca.bind(o),0);else if(qe(o,"readystatechange"),vr(o)==4){o.h=!1;try{const L=o.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var v;if(v=L===0){let $=String(o.D).match(wm)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),v=!wk.test($?$.toLowerCase():"")}f=v}if(f)qe(o,"complete"),qe(o,"success");else{o.o=6;try{var P=vr(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",Am(o)}}finally{el(o)}}}}function el(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||qe(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function vr(o){return o.g?o.g.readyState:0}t.ca=function(){try{return vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Vc(c)}};function Rm(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function kk(o){const c={};o=(o.g&&vr(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(k(o[v]))continue;var f=Bc(o[v]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[P]||[];c[P]=L,L.push(f)}ae(c,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Dm(o){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ya("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ya("baseRetryDelayMs",5e3,o),this.Za=ya("retryDelaySeedMs",1e4,o),this.Ta=ya("forwardChannelMaxRetries",2,o),this.va=ya("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new mm(o&&o.concurrentRequestLimit),this.Ba=new bk,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dm.prototype,t.ka=8,t.I=1,t.connect=function(o,c,f,v){rt(0),this.W=o,this.H=c||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=$m(this,null,this.W),nl(this)};function Jc(o){if(Lm(o),o.I==3){var c=o.V++,f=_n(o.J);if(Ne(f,"SID",o.M),Ne(f,"RID",c),Ne(f,"TYPE","terminate"),va(o,f),c=new In(o,o.j,c),c.M=2,c.A=Jo(_n(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=qm(c.j,null),c.g.ea(c.A)),c.F=Date.now(),le(c)}zm(o)}function tl(o){o.g&&(eh(o),o.g.cancel(),o.g=null)}function Lm(o){tl(o),o.v&&(a.clearTimeout(o.v),o.v=null),rl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function nl(o){if(!gm(o.h)&&!o.m){o.m=!0;var c=o.Ea;z||b(),q||(z(),q=!0),w.add(c,o),o.D=0}}function Sk(o,c){return ym(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ys(h(o.Ea,o,c),Vm(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new In(this,this.j,o);let L=this.o;if(this.U&&(L?(L=xe(L),Jt(L,this.U)):L=this.U),this.u!==null||this.R||(P.J=L,L=null),this.S)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(c+=v,c>4096){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=jm(this,P,c),f=_n(this.J),Ne(f,"RID",o),Ne(f,"CVER",22),this.G&&Ne(f,"X-HTTP-Session-Id",this.G),va(this,f),L&&(this.R?c="headers="+pn(_m(L))+"&"+c:this.u&&Yc(f,this.u,L)),Gc(this.h,P),this.Ra&&Ne(f,"TYPE","init"),this.S?(Ne(f,"$req",c),Ne(f,"SID","null"),P.U=!0,H(P,f,null)):H(P,f,c),this.I=2}}else this.I==3&&(o?Om(this,o):this.i.length==0||gm(this.h)||Om(this))};function Om(o,c){var f;c?f=c.l:f=o.V++;const v=_n(o.J);Ne(v,"SID",o.M),Ne(v,"RID",f),Ne(v,"AID",o.K),va(o,v),o.u&&o.o&&Yc(v,o.u,o.o),f=new In(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=jm(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Gc(o.h,f),H(f,v,c)}function va(o,c){o.H&&Z(o.H,function(f,v){Ne(c,v,f)}),o.l&&Z({},function(f,v){Ne(c,v,f)})}function jm(o,c,f){f=Math.min(o.i.length,f);const v=o.l?h(o.l.Ka,o.l,o):null;e:{var P=o.i;let oe=-1;for(;;){const Xe=["count="+f];oe==-1?f>0?(oe=P[0].g,Xe.push("ofs="+oe)):oe=0:Xe.push("ofs="+oe);let Ie=!0;for(let st=0;st<f;st++){var L=P[st].g;const Cn=P[st].map;if(L-=oe,L<0)oe=Math.max(0,P[st].g-100),Ie=!1;else try{L="req"+L+"_"||"";try{var $=Cn instanceof Map?Cn:Object.entries(Cn);for(const[ai,br]of $){let wr=br;l(br)&&(wr=Bn(br)),Xe.push(L+ai+"="+encodeURIComponent(wr))}}catch(ai){throw Xe.push(L+"type="+encodeURIComponent("_badmap")),ai}}catch{v&&v(Cn)}}if(Ie){$=Xe.join("&");break e}}$=void 0}return o=o.i.splice(0,f),c.G=o,$}function Mm(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;z||b(),q||(z(),q=!0),w.add(c,o),o.A=0}}function Zc(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ys(h(o.Da,o),Vm(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Um(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ys(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),tl(this),Um(this))};function eh(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Um(o){o.g=new In(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=_n(o.na);Ne(c,"RID","rpc"),Ne(c,"SID",o.M),Ne(c,"AID",o.K),Ne(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ne(c,"TO",o.ia),Ne(c,"TYPE","xmlhttp"),va(o,c),o.u&&o.o&&Yc(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Jo(_n(c)),f.u=null,f.R=!0,ne(f,o)}t.Va=function(){this.C!=null&&(this.C=null,tl(this),Zc(this),rt(19))};function rl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Fm(o,c){var f=null;if(o.g==c){rl(o),eh(o),o.g=null;var v=2}else if(Wc(o.h,c))f=c.G,vm(o.h,c),v=1;else return;if(o.I!=0){if(c.o)if(v==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var P=o.D;v=ms(),qe(v,new fn(v,f)),nl(o)}else Mm(o);else if(P=c.m,P==3||P==0&&c.X>0||!(v==1&&Sk(o,c)||v==2&&Zc(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),P){case 1:ws(o,5);break;case 4:ws(o,10);break;case 3:ws(o,6);break;default:ws(o,2)}}}function Vm(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function ws(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),v=o.Ua;const P=!v;v=new gr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ca(v,"https"),Jo(v),P?yk(v.toString(),f):vk(v.toString(),f)}else rt(2);o.I=0,o.l&&o.l.pa(c),zm(o),Lm(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function zm(o){if(o.I=0,o.ja=[],o.l){const c=bm(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ja,c),R(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function $m(o,c,f){var v=f instanceof gr?_n(f):new gr(f);if(v.g!="")c&&(v.g=c+"."+v.g),ha(v,v.u);else{var P=a.location;v=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const L=new gr(null);v&&ca(L,v),c&&(L.g=c),P&&ha(L,P),f&&(L.h=f),v=L}return f=o.G,c=o.wa,f&&c&&Ne(v,f,c),Ne(v,"VER",o.ka),va(o,v),v}function qm(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Fe(new Xc({ab:f})):new Fe(o.ma),c.Fa(o.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bm(){}t=Bm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function sl(){}sl.prototype.g=function(o,c){return new $t(o,c)};function $t(o,c){nt.call(this),this.g=new Dm(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!k(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!k(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ii(this)}g($t,nt),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Jc(this.g)},$t.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Bn(o),o=f);c.i.push(new uk(c.Ya++,o)),c.I==3&&nl(c)},$t.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,$t.Z.N.call(this)};function Hm(o){J.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const f in c){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}g(Hm,J);function Km(){Hn.call(this),this.status=1}g(Km,Hn);function ii(o){this.g=o}g(ii,Bm),ii.prototype.ra=function(){qe(this.g,"a")},ii.prototype.qa=function(o){qe(this.g,new Hm(o))},ii.prototype.pa=function(o){qe(this.g,new Km)},ii.prototype.oa=function(){qe(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,jx=function(){return new sl},Ox=function(){return ms()},Lx=Kn,Zd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Wl=ri,Xo.COMPLETE="complete",Dx=Xo,zc.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",nt.prototype.listen=nt.prototype.J,Oa=zc,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,Rx=Fe}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});const Qy="@firebase/firestore",Xy="4.9.2";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let na="12.3.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bs=new hc("@firebase/firestore");function li(){return Bs.logLevel}function W(t,...e){if(Bs.logLevel<=ce.DEBUG){const n=e.map(Ap);Bs.debug(`Firestore (${na}): ${t}`,...n)}}function lr(t,...e){if(Bs.logLevel<=ce.ERROR){const n=e.map(Ap);Bs.error(`Firestore (${na}): ${t}`,...n)}}function Bi(t,...e){if(Bs.logLevel<=ce.WARN){const n=e.map(Ap);Bs.warn(`Firestore (${na}): ${t}`,...n)}}function Ap(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(t)}catch{return t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Mx(t,r,n)}function Mx(t,e,n){let r=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Mx(e,s,r)}function ie(t,e){return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ux{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class RC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DC{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new Ux(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class LC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new LC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Yy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=MC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ef(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return $h(s)===$h(i)?he(s,i):$h(s)?1:-1}return he(t.length,e.length)}const UC=55296,FC=57343;function $h(t){const e=t.charCodeAt(0);return e>=UC&&e<=FC}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jy="__name__";class Dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=Dn.isNumericId(e),s=Dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):ef(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class ke extends Dn{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Dn{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jy}static keyField(){return new ct([Jy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ke.fromString(e))}static fromName(e){return new Y(ke.fromString(e).popFirst(5))}static empty(){return new Y(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ke(e.slice()))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fx(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zC(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zy(t){if(!Y.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e0(t){if(Y.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function jo(t,e){if(!Vx(t))throw new K(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(M.INVALID_ARGUMENT,n);return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const t0=-62135596800,n0=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*n0);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<t0)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/n0}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jo(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-t0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Qe("string",Ae._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ae(0,0))}static max(){return new se(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wo=-1;function $C(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Xr(s,Y.empty(),e)}function qC(t){return new Xr(t.readTime,t.key,wo)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(se.min(),Y.empty(),wo)}static max(){return new Xr(se.max(),Y.empty(),wo)}}function BC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const HC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function ra(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==HC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(m=>{a[h]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function WC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function sa(t){return t.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bc.ce=-1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rp=-1;function wc(t){return t==null}function Du(t){return t===0&&1/t==-1/0}function GC(t){return typeof t=="number"&&Number.isInteger(t)&&!Du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zx="";function QC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=r0(e)),e=XC(t.get(n),e);return r0(e)}function XC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zx:n+="";break;default:n+=i}}return n}function r0(t){return t+zx+""}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $x(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Me{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nl(this.root,e,this.comparator,!0)}}class Nl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class et{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i0(this.data.getIterator())}getIteratorFrom(e){return new i0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class i0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new et(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qx("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const YC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=YC.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bx="server_timestamp",Hx="__type__",Kx="__previous_value__",Wx="__local_write_time__";function Dp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[Hx])==null?void 0:n.stringValue)===Bx}function xc(t){const e=t.mapValue.fields[Kx];return Dp(e)?xc(e):e}function xo(t){const e=Yr(t.mapValue.fields[Wx].timestampValue);return new Ae(e.seconds,e.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class JC{constructor(e,n,r,s,i,a,l,u,h,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const Lu="(default)";class ko{constructor(e,n){this.projectId=e,this.database=n||Lu}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database===Lu}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Gx="__type__",ZC="__max__",Il={mapValue:{}},Qx="__vector__",Ou="value";function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dp(t)?4:tA(t)?9007199254740991:eA(t)?10:11:te(28295,{value:t})}function qn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Yr(r.timestampValue),a=Yr(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Jr(r.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Be(r.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Be(r.integerValue)===Be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Be(r.doubleValue),a=Be(s.doubleValue);return i===a?Du(i)===Du(a):isNaN(i)&&isNaN(a)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(s0(i)!==s0(a))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(a[l]===void 0||!qn(i[l],a[l])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function So(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function Ki(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,i){const a=Be(s.integerValue||s.doubleValue),l=Be(i.integerValue||i.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return a0(t.timestampValue,e.timestampValue);case 4:return a0(xo(t),xo(e));case 5:return ef(t.stringValue,e.stringValue);case 6:return function(s,i){const a=Jr(s),l=Jr(i);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),l=i.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=he(a[u],l[u]);if(h!==0)return h}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const a=he(Be(s.latitude),Be(i.latitude));return a!==0?a:he(Be(s.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return o0(t.arrayValue,e.arrayValue);case 10:return function(s,i){var a,l,u,h;const m=s.fields||{},g=i.fields||{},y=(a=m[Ou])==null?void 0:a.arrayValue,C=(l=g[Ou])==null?void 0:l.arrayValue,R=he(((u=y==null?void 0:y.values)==null?void 0:u.length)||0,((h=C==null?void 0:C.values)==null?void 0:h.length)||0);return R!==0?R:o0(y,C)}(t.mapValue,e.mapValue);case 11:return function(s,i){if(s===Il.mapValue&&i===Il.mapValue)return 0;if(s===Il.mapValue)return 1;if(i===Il.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=i.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const g=ef(l[m],h[m]);if(g!==0)return g;const y=Ki(a[l[m]],u[h[m]]);if(y!==0)return y}return he(l.length,h.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function a0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Yr(t),r=Yr(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function o0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ki(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function Wi(t){return tf(t)}function tf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const n=Yr(e);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return Jr(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return Y.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=tf(s);return n+"]"}(t.arrayValue):"mapValue"in t?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const i of n)s?s=!1:r+=",",r+=`${i}:${tf(e.fields[i])}`;return r+"}"}(t.mapValue):te(61005,{value:t})}function Gl(t){switch(Zr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(t);return e?16+Gl(e):16;case 5:return 2*t.stringValue.length;case 6:return Jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,s)=>r+Gl(s),0)}(t.arrayValue);case 10:case 11:return function(n){let r=0;return ls(n.fields,(s,i)=>{r+=s.length+Gl(i)}),r}(t.mapValue);default:throw te(13486,{value:t})}}function l0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nf(t){return!!t&&"integerValue"in t}function Lp(t){return!!t&&"arrayValue"in t}function u0(t){return!!t&&"nullValue"in t}function c0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ql(t){return!!t&&"mapValue"in t}function eA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[Gx])==null?void 0:n.stringValue)===Qx}function Xa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xa(t.arrayValue.values[n]);return e}return{...t}}function tA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ZC}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Xa(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ql(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(Xa(this.value))}}function Xx(t){const e=[];return ls(t.fields,(n,r)=>{const s=new ct([n]);if(Ql(r)){const i=Xx(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Kt(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,se.min(),se.min(),se.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,se.min(),se.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,se.min(),se.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ju{constructor(e,n){this.position=e,this.inclusive=n}}function h0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Ki(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function d0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mu{constructor(e,n="asc"){this.field=e,this.dir=n}}function nA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yx{}class Ge extends Yx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sA(e,n,r):n==="array-contains"?new oA(e,r):n==="in"?new lA(e,r):n==="not-in"?new uA(e,r):n==="array-contains-any"?new cA(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iA(e,r):new aA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ki(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends Yx{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Tn(e,n)}matches(e){return Jx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jx(t){return t.op==="and"}function Zx(t){return rA(t)&&Jx(t)}function rA(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function rf(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(Zx(t))return t.filters.map(e=>rf(e)).join(",");{const e=t.filters.map(n=>rf(n)).join(",");return`${t.op}(${e})`}}function e1(t,e){return t instanceof Ge?function(n,r){return r instanceof Ge&&n.op===r.op&&n.field.isEqual(r.field)&&qn(n.value,r.value)}(t,e):t instanceof Tn?function(n,r){return r instanceof Tn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,a)=>s&&e1(i,r.filters[a]),!0):!1}(t,e):void te(19439)}function t1(t){return t instanceof Ge?function(e){return`${e.field.canonicalString()} ${e.op} ${Wi(e.value)}`}(t):t instanceof Tn?function(e){return e.op.toString()+" {"+e.getFilters().map(t1).join(" ,")+"}"}(t):"Filter"}class sA extends Ge{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class iA extends Ge{constructor(e,n){super(e,"in",n),this.keys=n1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aA extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=n1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class oA extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lp(n)&&So(n.arrayValue,this.value)}}class lA extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class uA extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class cA extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hA{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function f0(t,e=null,n=[],r=[],s=null,i=null,a=null){return new hA(t,e,n,r,s,i,a)}function Op(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.Te=n}return e.Te}function jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!d0(t.startAt,e.startAt)&&d0(t.endAt,e.endAt)}function sf(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dA(t,e,n,r,s,i,a,l){return new Mo(t,e,n,r,s,i,a,l)}function kc(t){return new Mo(t)}function p0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r1(t){return t.collectionGroup!==null}function Ya(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let i=new et(ct.comparator);return s.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(i=i.add(l.field))})}),i})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Mu(s,r))}),n.has(ct.keyField().canonicalString())||e.Ie.push(new Mu(ct.keyField(),r))}return e.Ie}function Fn(t){const e=ie(t);return e.Ee||(e.Ee=fA(e,Ya(t))),e.Ee}function fA(t,e){if(t.limitType==="F")return f0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mu(s.field,i)});const n=t.endAt?new ju(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ju(t.startAt.position,t.startAt.inclusive):null;return f0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function af(t,e){const n=t.filters.concat([e]);return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function of(t,e,n){return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sc(t,e){return jp(Fn(t),Fn(e))&&t.limitType===e.limitType}function s1(t){return`${Op(Fn(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>t1(r)).join(", ")}]`),wc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),`Target(${n})`}(Fn(t))}; limitType=${t.limitType})`}function Ec(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Y.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Ya(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,a){const l=h0(s,i,a);return s.inclusive?l<=0:l<0}(n.startAt,Ya(n),r)||n.endAt&&!function(s,i,a){const l=h0(s,i,a);return s.inclusive?l>=0:l>0}(n.endAt,Ya(n),r))}(t,e)}function pA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i1(t){return(e,n)=>{let r=!1;for(const s of Ya(t)){const i=mA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mA(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,i,a){const l=i.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ki(l,u):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $x(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gA=new Me(Y.comparator);function ur(){return gA}const a1=new Me(Y.comparator);function ja(...t){let e=a1;for(const n of t)e=e.insert(n.key,n);return e}function o1(t){let e=a1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function As(){return Ja()}function l1(){return Ja()}function Ja(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const yA=new Me(Y.comparator),vA=new et(Y.comparator);function de(...t){let e=vA;for(const n of t)e=e.add(n);return e}const bA=new et(he);function wA(){return bA}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function u1(t){return{integerValue:""+t}}function xA(t,e){return GC(e)?u1(e):Mp(t,e)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tc{constructor(){this._=void 0}}function kA(t,e,n){return t instanceof Uu?function(r,s){const i={fields:{[Hx]:{stringValue:Bx},[Wx]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Dp(s)&&(s=xc(s)),s&&(i.fields[Kx]=s),{mapValue:i}}(n,e):t instanceof Eo?h1(t,e):t instanceof To?d1(t,e):function(r,s){const i=c1(r,s),a=m0(i)+m0(r.Ae);return nf(i)&&nf(r.Ae)?u1(a):Mp(r.serializer,a)}(t,e)}function SA(t,e,n){return t instanceof Eo?h1(t,e):t instanceof To?d1(t,e):n}function c1(t,e){return t instanceof Fu?function(n){return nf(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class Uu extends Tc{}class Eo extends Tc{constructor(e){super(),this.elements=e}}function h1(t,e){const n=f1(e);for(const r of t.elements)n.some(s=>qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class To extends Tc{constructor(e){super(),this.elements=e}}function d1(t,e){let n=f1(e);for(const r of t.elements)n=n.filter(s=>!qn(s,r));return{arrayValue:{values:n}}}class Fu extends Tc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function m0(t){return Be(t.integerValue||t.doubleValue)}function f1(t){return Lp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Eo&&r instanceof Eo||n instanceof To&&r instanceof To?Hi(n.elements,r.elements,qn):n instanceof Fu&&r instanceof Fu?qn(n.Ae,r.Ae):n instanceof Uu&&r instanceof Uu}(t.transform,e.transform)}class TA{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function p1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Up(t.key,on.none()):new Uo(t.key,t.data,on.none());{const n=t.data,r=Rt.empty();let s=new et(ct.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new us(t.key,r,new Kt(s.toArray()),on.none())}}function NA(t,e,n){t instanceof Uo?function(r,s,i){const a=r.value.clone(),l=y0(r.fieldTransforms,s,i.transformResults);a.setAll(l),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):t instanceof us?function(r,s,i){if(!Xl(r.precondition,s))return void s.convertToUnknownDocument(i.version);const a=y0(r.fieldTransforms,s,i.transformResults),l=s.data;l.setAll(m1(r)),l.setAll(a),s.convertToFoundDocument(i.version,l).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof Uo?function(s,i,a,l){if(!Xl(s.precondition,i))return a;const u=s.value.clone(),h=v0(s.fieldTransforms,l,i);return u.setAll(h),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(s,i,a,l){if(!Xl(s.precondition,i))return a;const u=v0(s.fieldTransforms,l,i),h=i.data;return h.setAll(m1(s)),h.setAll(u),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,i,a){return Xl(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a}(t,e,n)}function IA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=c1(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function g0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hi(n,r,(s,i)=>EA(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends Nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends Nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function m1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function y0(t,e,n){const r=new Map;be(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,SA(a,l,n[s]))}return r}function v0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,kA(i,a,e))}return r}class Up extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _A extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class CA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l1();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=p1(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>g0(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>g0(n,r))}}class Fp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return yA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Fp(e,n,r,s)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class PA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ke,pe;function RA(t){switch(t){case M.OK:return te(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function g1(t){if(t===void 0)return lr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return te(39323,{code:t})}}(pe=Ke||(Ke={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DA(){return new TextEncoder}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const LA=new Hr([4294967295,4294967295],0);function b0(t){const e=DA().encode(t),n=new Px;return n.update(e),new Uint8Array(n.digest())}function w0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ma(`Invalid padding: ${n}`);if(r<0)throw new Ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(LA)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=b0(e),[r,s]=w0(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Vp(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const n=b0(e),[r,s]=w0(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ic{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ic(se.min(),s,new Me(he),ur(),de())}}class Fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,de(),de(),de())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class y1{constructor(e,n){this.targetId=e,this.Ce=n}}class v1{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class x0{constructor(){this.ve=0,this.Fe=k0(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new Fo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=k0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class OA{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=_l(),this.He=_l(),this.Ye=new Me(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(sf(i))if(r===0){const a=new Y(i.path);this.et(n,a,wt.newNoDocument(a,se.min()))}else be(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Jr(r).toUint8Array()}catch(u){if(u instanceof qx)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(a,s,i)}catch(u){return Bi(u instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&sf(l.target)){const u=new Y(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,wt.newNoDocument(u,e))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=de();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ic(e,n,this.Ye,this.je,r);return this.je=ur(),this.Je=_l(),this.He=_l(),this.Ye=new Me(he),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new x0,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new x0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _l(){return new Me(Y.comparator)}function k0(){return new Me(Y.comparator)}const jA={asc:"ASCENDING",desc:"DESCENDING"},MA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UA={and:"AND",or:"OR"};class FA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lf(t,e){return t.useProto3Json||wc(e)?e:{value:e}}function Vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VA(t,e){return Vu(t,e.toTimestamp())}function Vn(t){return be(!!t,49232),se.fromTimestamp(function(e){const n=Yr(e);return new Ae(n.seconds,n.nanos)}(t))}function zp(t,e){return uf(t,e).canonicalString()}function uf(t,e){const n=function(r){return new ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function w1(t){const e=ke.fromString(t);return be(T1(e),10190,{key:e.toString()}),e}function cf(t,e){return zp(t.databaseId,e.path)}function qh(t,e){const n=w1(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(k1(n))}function x1(t,e){return zp(t.databaseId,e)}function zA(t){const e=w1(t);return e.length===4?ke.emptyPath():k1(e)}function hf(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k1(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function S0(t,e,n){return{name:cf(t,e),fields:n.value.mapValue.fields}}function $A(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(be(h===void 0||typeof h=="string",58123),ft.fromBase64String(h||"")):(be(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const h=u.code===void 0?M.UNKNOWN:g1(u.code);return new K(h,u.message||"")}(a);n=new v1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qh(t,r.document.name),i=Vn(r.document.updateTime),a=r.document.createTime?Vn(r.document.createTime):se.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=wt.newFoundDocument(s,i,a,l),h=r.targetIds||[],m=r.removedTargetIds||[];n=new Yl(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qh(t,r.document),i=r.readTime?Vn(r.readTime):se.min(),a=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yl([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qh(t,r.document),i=r.removedTargetIds||[];n=new Yl([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new PA(s,i),l=r.targetId;n=new y1(l,a)}}return n}function qA(t,e){let n;if(e instanceof Uo)n={update:S0(t,e.key,e.value)};else if(e instanceof Up)n={delete:cf(t,e.key)};else if(e instanceof us)n={update:S0(t,e.key,e.data),updateMask:JA(e.fieldMask)};else{if(!(e instanceof _A))return te(16599,{Vt:e.type});n={verify:cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof Uu)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Eo)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof To)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fu)return{fieldPath:i.field.canonicalString(),increment:a.Ae};throw te(20930,{transform:i.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:VA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te(27497)}(t,e.precondition)),n}function BA(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(r,s){let i=r.updateTime?Vn(r.updateTime):Vn(s);return i.isEqual(se.min())&&(i=Vn(s)),new TA(i,r.transformResults||[])}(n,e))):[]}function HA(t,e){return{documents:[x1(t,e.path)]}}function KA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x1(t,s);const i=function(u){if(u.length!==0)return E1(Tn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ci(m.field),direction:QA(m.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=lf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function WA(t){let e=zA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(m){const g=S1(m);return g instanceof Tn&&Zx(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(y){return new Mu(hi(y.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,wc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,y=m.values||[];return new ju(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,y=m.values||[];return new ju(y,g)}(n.endAt)),dA(e,s,a,i,l,"F",u,h)}function GA(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=hi(e.unaryFilter.field);return Ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=hi(e.unaryFilter.field);return Ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(e.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hi(e.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(e){return Ge.create(hi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Tn.create(e.compositeFilter.filters.map(n=>S1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(e.compositeFilter.op))}(t):te(30097,{filter:t})}function QA(t){return jA[t]}function XA(t){return MA[t]}function YA(t){return UA[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return ct.fromServerFormat(t.fieldPath)}function E1(t){return t instanceof Ge?function(e){if(e.op==="=="){if(c0(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NAN"}};if(u0(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(c0(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NOT_NAN"}};if(u0(e.value))return{unaryFilter:{field:ci(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(e.field),op:XA(e.op),value:e.value}}}(t):t instanceof Tn?function(e){const n=e.getFilters().map(r=>E1(r));return n.length===1?n[0]:{compositeFilter:{op:YA(e.op),filters:n}}}(t):te(54877,{filter:t})}function JA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lr{constructor(e,n,r,s,i=se.min(),a=se.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ZA{constructor(e){this.yt=e}}function e4(t){const e=WA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?of(e,e.limit,"L"):e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class t4{constructor(){this.Cn=new n4}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Xr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class n4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(ke.comparator)).toArray()}}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const E0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},N1=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(N1,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Gi(0)}static cr(){return new Gi(-1)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const T0="LruGarbageCollector",r4=1048576;function N0([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class s4{constructor(e){this.Ir=e,this.buffer=new et(N0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();N0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class i4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(T0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){sa(n)?W(T0,"Ignoring IndexedDB error during garbage collection: ",n):await ra(n)}await this.Vr(3e5)})}}class a4{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(bc.ce);const r=new s4(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(E0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),E0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,l,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),li()<=ce.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function o4(t,e){return new a4(t,e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class l4{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class u4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class c4{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Za(r.mutation,s,Kt.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=As();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=ja();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=As();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=ur();const a=Ja(),l=function(){return Ja()}();return n.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof us)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Za(m.mutation,h,m.mutation.getFieldMask(),Ae.now())):a.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>a.set(h,m)),n.forEach((h,m)=>l.set(h,new u4(m,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ja();let s=new Me((a,l)=>a-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let m=r.get(u)||Kt.empty();m=l.applyToLocalView(h,m),r.set(u,m);const g=(s.get(l.batchId)||de()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,g=l1();m.forEach(y=>{if(!i.has(y)){const C=p1(n.get(y),r.get(y));C!==null&&g.set(y,C),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(As());let l=wo,u=i;return a.next(h=>F.forEach(h,(m,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(y=>{u=u.insert(m,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,de())).next(m=>({batchId:l,changes:o1(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=ja();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=ja();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const h=function(m,g){return new Mo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,wt.newInvalidDocument(m)))});let l=ja();return a.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Za(m.mutation,h,Kt.empty(),Ae.now()),Ec(n,h)&&(l=l.insert(u,h))}),l})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class h4{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Vn(r.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(r){return{name:r.name,query:e4(r.bundledQuery),readTime:Vn(r.readTime)}}(n)),F.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class d4{constructor(){this.overlays=new Me(Y.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=As();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=As(),i=n.length+1,a=new Y(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,m)=>h-m);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=As(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=As(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>l.set(h,m)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new AA(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class f4{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $p{constructor(){this.Qr=new et(it.$r),this.Ur=new et(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new ke([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new ke([])),r=new it(n,e),s=new it(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class p4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(it.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new CA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Rp:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(he);return n.forEach(s=>{const i=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new it(new Y(i),0);let l=new et(he);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},a),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new it(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class m4{constructor(e){this.ri=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const a=n.path,l=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||BC(qC(m),r)<=0||(s.has(m.key)||Ec(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new g4(this)}getSize(e){return F.resolve(this.size)}}class g4 extends l4{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class y4{constructor(e){this.persistence=e,this.si=new Xs(n=>Op(n),jp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new $p,this.targetCount=0,this.ai=Gi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class I1{constructor(e,n){this.ui={},this.overlays={},this.ci=new bc(0),this.li=!1,this.li=!0,this.hi=new f4,this.referenceDelegate=e(this),this.Pi=new y4(this),this.indexManager=new t4,this.remoteDocumentCache=function(r){return new m4(r)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ZA(n),this.Ii=new h4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new p4(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new v4(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class v4 extends KC{constructor(e){super(),this.currentSequenceNumber=e}}class qp{constructor(e){this.persistence=e,this.Ri=new $p,this.Vi=null}static mi(e){return new qp(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class zu{constructor(e,n){this.persistence=e,this.pi=new Xs(r=>QC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=o4(this,n)}static mi(e,n){return new zu(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,n).next(l=>{l||(r++,i.removeEntry(a,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Gl(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bp(e,n.fromCache,r,s)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class b4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class w4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return IT()?8:WC(kt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new b4;return this.Ss(e,n,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,a,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(li()<=ce.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(li()<=ce.DEBUG&&W("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(li()<=ce.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(n))):F.resolve())}ys(e,n){if(p0(n))return F.resolve(null);let r=Fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=of(n,null,"F"),r=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,a,u.readTime)?this.ys(e,of(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return p0(n)||s.isEqual(se.min())?F.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?F.resolve(null):(li()<=ce.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ui(n)),this.vs(e,a,n,$C(s,wo)).next(l=>l))})}Ds(e,n){let r=new et(i1(e));return n.forEach((s,i)=>{Ec(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return li()<=ce.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ui(n)),this.ps.getDocumentsMatchingQuery(e,n,Xr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Hp="LocalStore",x4=3e8;class k4{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(he),this.xs=new Xs(i=>Op(i),jp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c4(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function S4(t,e,n,r){return new k4(t,e,n,r)}async function _1(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=de();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function E4(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const m=u.batch,g=m.keys();let y=F.resolve();return g.forEach(C=>{y=y.next(()=>h.getEntry(l,C)).next(R=>{const D=u.docVersions.get(C);be(D!==null,48541),R.version.compareTo(D)<0&&(m.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=de();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function C1(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function T4(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((m,g)=>{const y=s.get(g);if(!y)return;l.push(n.Pi.removeMatchingKeys(i,m.removedDocuments,g).next(()=>n.Pi.addMatchingKeys(i,m.addedDocuments,g)));let C=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?C=C.withResumeToken(ft.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(g,C),function(R,D,j){return R.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=x4?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(y,C,m)&&l.push(n.Pi.updateTargetData(i,C))});let u=ur(),h=de();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(N4(i,a,e.documentUpdates).next(m=>{u=m.ks,h=m.qs})),!r.isEqual(se.min())){const m=n.Pi.getLastRemoteSnapshotVersion(i).next(g=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function N4(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=ur();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):W(Hp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function I4(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _4(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next(a=>(s=new Lr(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function df(t,e,n){const r=ie(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!sa(a))throw a;W(Hp,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function I0(t,e,n){const r=ie(t);let s=se.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,h){const m=ie(l),g=m.xs.get(h);return g!==void 0?F.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,h)}(r,a,Fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:de())).next(l=>(C4(r,pA(e),l),{documents:l,Qs:i})))}function C4(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class _0{constructor(){this.activeTargetIds=wA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class A4{constructor(){this.Mo=new _0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new _0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class P4{Oo(e){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const C0="ConnectivityMonitor";class A0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(C0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(C0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Cl=null;function ff(){return Cl===null?Cl=function(){return 268435456+Math.round(2147483648*Math.random())}():Cl++,"0x"+Cl.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bh="RestConnection",R4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class D4{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Lu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=ff(),l=this.zo(e,n.toUriEncodedString());W(Bh,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),m=is(h);return this.Jo(e,l,u,r,m).then(g=>(W(Bh,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Bi(Bh,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+na}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=R4[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class L4{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const gt="WebChannelConnection";class O4 extends D4{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=ff();return new Promise((l,u)=>{const h=new Rx;h.setWithCredentials(!0),h.listenOnce(Dx.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Wl.NO_ERROR:const g=h.getResponseJson();W(gt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Wl.TIMEOUT:W(gt,`RPC '${e}' ${a} timed out`),u(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const y=h.getStatus();if(W(gt,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const R=C==null?void 0:C.error;if(R&&R.status&&R.message){const D=function(j){const T=j.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(R.status);u(new K(D,R.message))}else u(new K(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new K(M.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(gt,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);W(gt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",m,r,15)})}T_(e,n,r){const s=ff(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=jx(),l=Ox(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");W(gt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=a.createWebChannel(m,u);this.I_(g);let y=!1,C=!1;const R=new L4({Yo:j=>{C?W(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,j):(y||(W(gt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),W(gt,`RPC '${e}' stream ${s} sending:`,j),g.send(j))},Zo:()=>g.close()}),D=(j,T,S)=>{j.listen(T,_=>{try{S(_)}catch(U){setTimeout(()=>{throw U},0)}})};return D(g,Oa.EventType.OPEN,()=>{C||(W(gt,`RPC '${e}' stream ${s} transport opened.`),R.o_())}),D(g,Oa.EventType.CLOSE,()=>{C||(C=!0,W(gt,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(g))}),D(g,Oa.EventType.ERROR,j=>{C||(C=!0,Bi(gt,`RPC '${e}' stream ${s} transport errored. Name:`,j.name,"Message:",j.message),R.a_(new K(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,Oa.EventType.MESSAGE,j=>{var T;if(!C){const S=j.data[0];be(!!S,16349);const _=S,U=(_==null?void 0:_.error)||((T=_[0])==null?void 0:T.error);if(U){W(gt,`RPC '${e}' stream ${s} received error:`,U);const z=U.status;let q=function(b){const x=Ke[b];if(x!==void 0)return g1(x)}(z),w=U.message;q===void 0&&(q=M.INTERNAL,w="Unknown error status: "+z+" with message "+U.message),C=!0,R.a_(new K(q,w)),g.close()}else W(gt,`RPC '${e}' stream ${s} received:`,S),R.u_(S)}}),D(l,Lx.STAT_EVENT,j=>{j.stat===Zd.PROXY?W(gt,`RPC '${e}' stream ${s} detected buffering proxy`):j.stat===Zd.NOPROXY&&W(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hh(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _c(t){return new FA(t,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class A1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const P0="PersistentStream";class P1{constructor(e,n,r,s,i,a,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new A1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(P0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(P0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j4 extends P1{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=$A(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?se.min():i.readTime?Vn(i.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hf(this.serializer),n.addTarget=function(s,i){let a;const l=i.target;if(a=sf(l)?{documents:HA(s,l)}:{query:KA(s,l).ft},a.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){a.resumeToken=b1(s,i.resumeToken);const u=lf(s,i.expectedCount);u!==null&&(a.expectedCount=u)}else if(i.snapshotVersion.compareTo(se.min())>0){a.readTime=Vu(s,i.snapshotVersion.toTimestamp());const u=lf(s,i.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=GA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hf(this.serializer),n.removeTarget=e,this.q_(n)}}class M4 extends P1{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BA(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=hf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qA(this.serializer,r))};this.q_(n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class U4{}class F4 extends U4{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,uf(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,uf(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(M.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class V4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Hs="RemoteStore";class z4{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ys(this)&&(W(Hs,"Restarting streams for network reachability change."),await async function(l){const u=ie(l);u.Ea.add(4),await Vo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Cc(u)}(this))})}),this.Ra=new V4(r,s)}}async function Cc(t){if(Ys(t))for(const e of t.da)await e(!0)}async function Vo(t){for(const e of t.da)await e(!1)}function R1(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qp(n)?Gp(n):ia(n).O_()&&Wp(n,e))}function Kp(t,e){const n=ie(t),r=ia(n);n.Ia.delete(e),r.O_()&&D1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ys(n)&&n.Ra.set("Unknown"))}function Wp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).Y_(e)}function D1(t,e){t.Va.Ue(e),ia(t).Z_(e)}function Gp(t){t.Va=new OA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.Ra.ua()}function Qp(t){return Ys(t)&&!ia(t).x_()&&t.Ia.size>0}function Ys(t){return ie(t).Ea.size===0}function L1(t){t.Va=void 0}async function $4(t){t.Ra.set("Online")}async function q4(t){t.Ia.forEach((e,n)=>{Wp(t,e)})}async function B4(t,e){L1(t),Qp(t)?(t.Ra.ha(e),Gp(t)):t.Ra.set("Unknown")}async function H4(t,e,n){if(t.Ra.set("Online"),e instanceof v1&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const a of s.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,i),r.Ia.delete(a),r.Va.removeTarget(a))}(t,e)}catch(r){W(Hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof Yl?t.Va.Ze(e):e instanceof y1?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await C1(t.localStore);n.compareTo(r)>=0&&await function(s,i){const a=s.Va.Tt(i);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(u);h&&s.Ia.set(u,h.withResumeToken(l.resumeToken,i))}}),a.targetMismatches.forEach((l,u)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),D1(s,l);const m=new Lr(h.target,l,u,h.sequenceNumber);Wp(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W(Hs,"Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!sa(e))throw e;t.Ea.add(1),await Vo(t),t.Ra.set("Offline"),n||(n=()=>C1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Hs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Cc(t)})}function O1(t,e){return e().catch(n=>$u(t,n,e))}async function Ac(t){const e=ie(t),n=es(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rp;for(;K4(e);)try{const s=await I4(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,W4(e,s)}catch(s){await $u(e,s)}j1(e)&&M1(e)}function K4(t){return Ys(t)&&t.Ta.length<10}function W4(t,e){t.Ta.push(e);const n=es(t);n.O_()&&n.X_&&n.ea(e.mutations)}function j1(t){return Ys(t)&&!es(t).x_()&&t.Ta.length>0}function M1(t){es(t).start()}async function G4(t){es(t).ra()}async function Q4(t){const e=es(t);for(const n of t.Ta)e.ea(n.mutations)}async function X4(t,e,n){const r=t.Ta.shift(),s=Fp.from(r,e,n);await O1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ac(t)}async function Y4(t,e){e&&es(t).X_&&await async function(n,r){if(function(s){return RA(s)&&s!==M.ABORTED}(r.code)){const s=n.Ta.shift();es(n).B_(),await O1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ac(n)}}(t,e),j1(t)&&M1(t)}async function R0(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W(Hs,"RemoteStore received new credentials");const r=Ys(n);n.Ea.add(3),await Vo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Cc(n)}async function J4(t,e){const n=ie(t);e?(n.Ea.delete(2),await Cc(n)):e||(n.Ea.add(2),await Vo(n),n.Ra.set("Unknown"))}function ia(t){return t.ma||(t.ma=function(e,n,r){const s=ie(e);return s.sa(),new j4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Xo:$4.bind(null,t),t_:q4.bind(null,t),r_:B4.bind(null,t),H_:H4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Qp(t)?Gp(t):t.Ra.set("Unknown")):(await t.ma.stop(),L1(t))})),t.ma}function es(t){return t.fa||(t.fa=function(e,n,r){const s=ie(e);return s.sa(),new M4(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:G4.bind(null,t),r_:Y4.bind(null,t),ta:Q4.bind(null,t),na:X4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ac(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Hs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Xp(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yp(t,e){if(lr("AsyncQueue",`${e}: ${t}`),sa(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oi{static emptySet(e){return new Oi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ja(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class D0{constructor(){this.ga=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,s,i,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Qi(e,n,Oi.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Z4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class eP{constructor(){this.queries=L0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const r=ie(e),s=r.queries;r.queries=L0(),s.forEach((i,a)=>{for(const l of a.Sa)l.onError(n)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function L0(){return new Xs(t=>s1(t),Sc)}async function Jp(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Z4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Yp(a,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&em(n)}async function Zp(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tP(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&em(n)}function nP(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function em(t){t.Ca.forEach(e=>{e.next()})}var pf,O0;(O0=pf||(pf={})).Ma="default",O0.Cache="cache";class tm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pf.Cache}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class U1{constructor(e){this.key=e}}class F1{constructor(e){this.key=e}}class rP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=i1(e),this.tu=new Oi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new D0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,g)=>{const y=s.get(m),C=Ec(this.query,g)?g:null,R=!!y&&this.mutatedKeys.has(y.key),D=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let j=!1;y&&C?y.data.isEqual(C.data)?R!==D&&(r.track({type:3,doc:C}),j=!0):this.su(y,C)||(r.track({type:2,doc:C}),j=!0,(u&&this.eu(C,u)>0||h&&this.eu(C,h)<0)&&(l=!0)):!y&&C?(r.track({type:0,doc:C}),j=!0):y&&!C&&(r.track({type:1,doc:y}),j=!0,(u||h)&&(l=!0)),j&&(C?(a=a.add(C),i=D?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,g)=>function(y,C){const R=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:D})}};return R(y)-R(C)}(m.type,g.type)||this.eu(m.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Qi(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new D0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new F1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new U1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nm="SyncEngine";class sP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iP{constructor(e){this.key=e,this.hu=!1}}class aP{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Xs(l=>s1(l),Sc),this.Iu=new Map,this.Eu=new Set,this.du=new Me(Y.comparator),this.Au=new Map,this.Ru=new $p,this.Vu={},this.mu=new Map,this.fu=Gi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function oP(t,e,n=!0){const r=H1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await V1(r,e,n,!0),s}async function lP(t,e){const n=H1(t);await V1(n,e,!0,!1)}async function V1(t,e,n,r){const s=await _4(t.localStore,Fn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await uP(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&R1(t.remoteStore,s),l}async function uP(t,e,n,r,s){t.pu=(g,y,C)=>async function(R,D,j,T){let S=D.view.ru(j);S.Cs&&(S=await I0(R.localStore,D.query,!1).then(({documents:q})=>D.view.ru(q,S)));const _=T&&T.targetChanges.get(D.targetId),U=T&&T.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(S,R.isPrimaryClient,_,U);return M0(R,D.targetId,z.au),z.snapshot}(t,g,y,C);const i=await I0(t.localStore,e,!0),a=new rP(e,i.Qs),l=a.ru(i.documents),u=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,u);M0(t,n,h.au);const m=new sP(e,n,a);return t.Tu.set(e,m),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function cP(t,e,n){const r=ie(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Sc(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await df(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Kp(r.remoteStore,s.targetId),mf(r,s.targetId)}).catch(ra)):(mf(r,s.targetId),await df(r.localStore,s.targetId,!0))}async function hP(t,e){const n=ie(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kp(n.remoteStore,r.targetId))}async function dP(t,e,n){const r=bP(t);try{const s=await function(i,a){const l=ie(i),u=Ae.now(),h=a.reduce((y,C)=>y.add(C.key),de());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=ur(),R=de();return l.Ns.getEntries(y,h).next(D=>{C=D,C.forEach((j,T)=>{T.isValidDocument()||(R=R.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,C)).next(D=>{m=D;const j=[];for(const T of a){const S=IA(T,m.get(T.key).overlayedDocument);S!=null&&j.push(new us(T.key,S,Xx(S.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,j,a)}).next(D=>{g=D;const j=D.applyToLocalDocumentSet(m,R);return l.documentOverlayCache.saveOverlays(y,D.batchId,j)})}).then(()=>({batchId:g.batchId,changes:o1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,a,l){let u=i.Vu[i.currentUser.toKey()];u||(u=new Me(he)),u=u.insert(a,l),i.Vu[i.currentUser.toKey()]=u}(r,s.batchId,n),await zo(r,s.changes),await Ac(r.remoteStore)}catch(s){const i=Yp(s,"Failed to persist write");n.reject(i)}}async function z1(t,e){const n=ie(t);try{const r=await T4(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?be(a.hu,14607):s.removedDocuments.size>0&&(be(a.hu,42227),a.hu=!1))}),await zo(n,r,e)}catch(r){await ra(r)}}function j0(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(i,a){const l=ie(i);l.onlineState=a;let u=!1;l.queries.forEach((h,m)=>{for(const g of m.Sa)g.va(a)&&(u=!0)}),u&&em(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fP(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Me(Y.comparator);a=a.insert(i,wt.newNoDocument(i,se.min()));const l=de().add(i),u=new Ic(se.min(),new Map,new Me(he),a,l);await z1(r,u),r.du=r.du.remove(i),r.Au.delete(e),rm(r)}else await df(r.localStore,e,!1).then(()=>mf(r,e,n)).catch(ra)}async function pP(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await E4(n.localStore,e);q1(n,r,null),$1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,s)}catch(s){await ra(s)}}async function mP(t,e,n){const r=ie(t);try{const s=await function(i,a){const l=ie(i);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(m=>(be(m!==null,37113),h=m.keys(),l.mutationQueue.removeMutationBatch(u,m))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);q1(r,e,n),$1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,s)}catch(s){await ra(s)}}function $1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function q1(t,e,n){const r=ie(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function mf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||B1(t,r)})}function B1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Kp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),rm(t))}function M0(t,e,n){for(const r of n)r instanceof U1?(t.Ru.addReference(r.key,e),gP(t,r)):r instanceof F1?(W(nm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||B1(t,r.key)):te(19791,{wu:r})}function gP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(nm,"New document in limbo: "+n),t.Eu.add(r),rm(t))}function rm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new iP(n)),t.du=t.du.insert(n,r),R1(t.remoteStore,new Lr(Fn(kc(n.path)),r,"TargetPurposeLimboResolution",bc.ce))}}async function zo(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,n).then(h=>{var m;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Bp.As(u.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,u){const h=ie(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>F.forEach(u,g=>F.forEach(g.Es,y=>h.persistence.referenceDelegate.addReference(m,g.targetId,y)).next(()=>F.forEach(g.ds,y=>h.persistence.referenceDelegate.removeReference(m,g.targetId,y)))))}catch(m){if(!sa(m))throw m;W(Hp,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const y=h.Ms.get(g),C=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(C);h.Ms=h.Ms.insert(g,R)}}}(r.localStore,i))}async function yP(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W(nm,"User change. New user:",e.toKey());const r=await _1(n.localStore,e);n.currentUser=e,function(s,i){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new K(M.CANCELLED,i))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.Ls)}}function vP(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function H1(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=z1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fP.bind(null,e),e.Pu.H_=tP.bind(null,e.eventManager),e.Pu.yu=nP.bind(null,e.eventManager),e}function bP(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mP.bind(null,e),e}class qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return S4(this.persistence,new w4,e.initialUser,this.serializer)}Cu(e){return new I1(qp.mi,this.serializer)}Du(e){return new A4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qu.provider={build:()=>new qu};class wP extends qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){be(this.persistence.referenceDelegate instanceof zu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new i4(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new I1(r=>zu.mi(r,n),this.serializer)}}class gf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yP.bind(null,this.syncEngine),await J4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eP}()}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=function(s){return new O4(s)}(e.databaseInfo);return function(s,i,a,l){return new F4(s,i,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(n,r,s,i,a){return new z4(n,r,s,i,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j0(this.syncEngine,n,0),function(){return A0.v()?new A0:new P4}())}createSyncEngine(e,n){return function(r,s,i,a,l,u,h){const m=new aP(r,s,i,a,l,u);return h&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const s=ie(r);W(Hs,"RemoteStore shutting down."),s.Ea.add(5),await Vo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}gf.provider={build:()=>new gf};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ts="FirestoreClient";class xP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W(ts,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W(ts,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),W(ts,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function U0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kP(t);W(ts,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>R0(e.remoteStore,s)),t._onlineComponents=e}async function kP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(ts,"Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new qu)}}else W(ts,"Using default OfflineComponentProvider"),await Kh(t,new wP(void 0));return t._offlineComponents}async function K1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(ts,"Using user provided OnlineComponentProvider"),await U0(t,t._uninitializedComponentsProvider._online)):(W(ts,"Using default OnlineComponentProvider"),await U0(t,new gf))),t._onlineComponents}function SP(t){return K1(t).then(e=>e.syncEngine)}async function Bu(t){const e=await K1(t),n=e.eventManager;return n.onListen=oP.bind(null,e.syncEngine),n.onUnlisten=cP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hP.bind(null,e.syncEngine),n}function EP(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,a,l,u){const h=new sm({next:g=>{h.Nu(),i.enqueueAndForget(()=>Zp(s,m));const y=g.docs.has(a);!y&&g.fromCache?u.reject(new K(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new K(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new tm(kc(a.path),h,{includeMetadataChanges:!0,qa:!0});return Jp(s,m)}(await Bu(t),t.asyncQueue,e,n,r)),r.promise}function TP(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,a,l,u){const h=new sm({next:g=>{h.Nu(),i.enqueueAndForget(()=>Zp(s,m)),g.fromCache&&l.source==="server"?u.reject(new K(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),m=new tm(a,h,{includeMetadataChanges:!0,qa:!0});return Jp(s,m)}(await Bu(t),t.asyncQueue,e,n,r)),r.promise}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const F0=new Map;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const G1="firestore.googleapis.com",V0=!0;class z0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=G1,this.ssl=V0}else this.host=e.host,this.ssl=e.ssl??V0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=N1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<r4)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W1(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PC;switch(n.type){case"firstParty":return new OC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=F0.get(e);n&&(W("ComponentProvider","Removing Datastore"),F0.delete(e),n.terminate())}(this),Promise.resolve()}}function NP(t,e,n,r={}){var s;t=Ft(t,Pc);const i=is(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;i&&(fp(`https://${u}`),pp("Firestore",!0)),a.host!==G1&&a.host!==u&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:i,emulatorOptions:r};if(!Qr(h,l)&&(t._setSettings(h),r.mockUserToken)){let m,g;if(typeof r.mockUserToken=="string")m=r.mockUserToken,g=vt.MOCK_USER;else{m=bT(r.mockUserToken,(s=t._app)==null?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new vt(y)}t._authCredentials=new RC(new Ux(m,g))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Js{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Js(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(jo(n,ze._jsonSchema))return new ze(e,r||null,new Y(ke.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Qe("string",ze._jsonSchemaVersion),referencePath:Qe("string")};class Kr extends Js{constructor(e,n,r){super(e,n,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new Y(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function xs(t,e,...n){if(t=Ee(t),Fx("collection","path",e),t instanceof Pc){const r=ke.fromString(e,...n);return e0(r),new Kr(t,null,r)}{if(!(t instanceof ze||t instanceof Kr))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return e0(r),new Kr(t.firestore,null,r)}}function yt(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=Pp.newId()),Fx("doc","path",e),t instanceof Pc){const r=ke.fromString(e,...n);return Zy(r),new ze(t,null,new Y(r))}{if(!(t instanceof ze||t instanceof Kr))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Zy(r),new ze(t.firestore,t instanceof Kr?t.converter:null,new Y(r))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $0="AsyncQueue";class q0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new A1(this,"async_queue_retry"),this._c=()=>{const r=Hh();r&&W($0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Hh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new tr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!sa(e))throw e;W($0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,lr("INTERNAL UNHANDLED ERROR: ",B0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:B0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function B0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cr extends Pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new q0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new q0(e),this._firestoreClient=void 0,await e}}}function IP(t,e){const n=typeof t=="object"?t:dc(),r=typeof t=="string"?t:Lu,s=as(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vw("firestore");i&&NP(s,...i)}return s}function Rc(t){if(t._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_P(t),t._firestoreClient}function _P(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new JC(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,W1(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)==null?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||(n=s.localCache)!=null&&n._offlineComponentProvider&&(r=s.localCache)!=null&&r._onlineComponentProvider&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new xP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(ft.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jo(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Qe("string",rn._jsonSchemaVersion),bytes:Qe("string")};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class im{constructor(e){this._methodName=e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(jo(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:Qe("string",zn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jo(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new $n(e.vectorValues);throw new K(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:Qe("string",$n._jsonSchemaVersion),vectorValues:Qe("object")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const CP=/^__.*__$/;class AP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class Q1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function X1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:t})}}class am{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new am({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),s=this.Vc({path:r,fc:!1});return s.gc(e),s}yc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),s=this.Vc({path:r,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Hu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(X1(this.Ac)&&CP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class PP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}Cc(e,n,r,s=!1){return new am({Ac:e,methodName:n,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lc(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new PP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Y1(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);om("Data must be an object, but it was:",a,r);const l=J1(r,a);let u,h;if(i.merge)u=new Kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const y=yf(e,g,n);if(!a.contains(y))throw new K(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ek(m,y)||m.push(y)}u=new Kt(m),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new AP(new Rt(l),u,h)}class Oc extends im{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}function RP(t,e,n,r){const s=t.Cc(1,e,n);om("Data must be an object, but it was:",s,r);const i=[],a=Rt.empty();ls(r,(u,h)=>{const m=lm(e,u,n);h=Ee(h);const g=s.yc(m);if(h instanceof Oc)i.push(m);else{const y=$o(h,g);y!=null&&(i.push(m),a.set(m,y))}});const l=new Kt(i);return new Q1(a,l,s.fieldTransforms)}function DP(t,e,n,r,s,i){const a=t.Cc(1,e,n),l=[yf(e,r,n)],u=[s];if(i.length%2!=0)throw new K(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(yf(e,i[y])),u.push(i[y+1]);const h=[],m=Rt.empty();for(let y=l.length-1;y>=0;--y)if(!ek(h,l[y])){const C=l[y];let R=u[y];R=Ee(R);const D=a.yc(C);if(R instanceof Oc)h.push(C);else{const j=$o(R,D);j!=null&&(h.push(C),m.set(C,j))}}const g=new Kt(h);return new Q1(m,g,a.fieldTransforms)}function LP(t,e,n,r=!1){return $o(n,t.Cc(r?4:3,e))}function $o(t,e){if(Z1(t=Ee(t)))return om("Unsupported field value:",e,t),J1(t,e);if(t instanceof im)return function(n,r){if(!X1(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const a of n){let l=$o(a,r.wc(i));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ae.fromDate(n);return{timestampValue:Vu(r.serializer,s)}}if(n instanceof Ae){const s=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vu(r.serializer,s)}}if(n instanceof zn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rn)return{bytesValue:b1(r.serializer,n._byteString)};if(n instanceof ze){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Sc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zp(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof $n)return function(s,i){return{mapValue:{fields:{[Gx]:{stringValue:Qx},[Ou]:{arrayValue:{values:s.toArray().map(a=>{if(typeof a!="number")throw i.Sc("VectorValues must only contain numeric values.");return Mp(i.serializer,a)})}}}}}}(n,r);throw r.Sc(`Unsupported field value: ${vc(n)}`)}(t,e)}function J1(t,e){const n={};return $x(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,s)=>{const i=$o(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof zn||t instanceof rn||t instanceof ze||t instanceof im||t instanceof $n)}function om(t,e,n){if(!Z1(n)||!Vx(n)){const r=vc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function yf(t,e,n){if((e=Ee(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return lm(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const OP=new RegExp("[~\\*/\\[\\]]");function lm(t,e,n){if(e.search(OP)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dc(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new K(M.INVALID_ARGUMENT,l+t+u)}function ek(t,e){return t.some(n=>n.isEqual(e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tk{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(um("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jP extends tk{data(){return super.data()}}function um(t,e){return typeof e=="string"?lm(t,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cm{}class MP extends cm{}function UP(t,e,...n){let r=[];e instanceof cm&&r.push(e),r=r.concat(n),function(s){const i=s.filter(l=>l instanceof hm).length,a=s.filter(l=>l instanceof jc).length;if(i>1||i>0&&a>0)throw new K(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class jc extends MP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jc(e,n,r)}_apply(e){const n=this._parse(e);return rk(e._query,n),new Js(e.firestore,e.converter,af(e._query,n))}_parse(e){const n=Lc(e.firestore);return function(r,s,i,a,l,u,h){let m;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new K(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){W0(h,u);const g=[];for(const y of h)g.push(K0(a,r,y));m={arrayValue:{values:g}}}else m=K0(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||W0(h,u),m=LP(i,s,h,u==="in"||u==="not-in");return Ge.create(l,u,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function FP(t,e,n){const r=e,s=um("where",t);return jc._create(s,r,n)}class hm extends cm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const a=s.getFlattenedFilters();for(const l of a)rk(i,l),i=af(i,l)}(e._query,n),new Js(e.firestore,e.converter,af(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function K0(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new K(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r1(e)&&n.indexOf("/")!==-1)throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!Y.isDocumentKey(r))throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return l0(t,new Y(r))}if(n instanceof ze)return l0(t,n._key);throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(n)}.`)}function W0(t,e){if(!Array.isArray(t)||t.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rk(t,e){const n=function(r,s){for(const i of r)for(const a of i.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VP{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)==null?void 0:n[Ou].arrayValue)==null?void 0:r.values)==null?void 0:s.map(a=>Be(a.doubleValue));return new $n(i)}convertGeoPoint(e){return new zn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);be(T1(r),9688,{name:e});const s=new ko(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ds extends tk{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(um("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),n}}Ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ds._jsonSchema={type:Qe("string",Ds._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Jl extends Ds{data(e={}){return super.data(e)}}class Ls{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ua(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jl(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(a=>{const l=new Jl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ua(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Jl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Ua(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=i.indexOf(a.doc.key),i=i.delete(a.doc.key)),a.type!==1&&(i=i.add(a.doc),h=i.indexOf(a.doc.key)),{type:zP(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Al(t){t=Ft(t,ze);const e=Ft(t.firestore,cr);return EP(Rc(e),t._key).then(n=>ik(e,t,n))}Ls._jsonSchemaVersion="firestore/querySnapshot/1.0",Ls._jsonSchema={type:Qe("string",Ls._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class dm extends VP{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function $P(t){t=Ft(t,Js);const e=Ft(t.firestore,cr),n=Rc(e),r=new dm(e);return nk(t._query),TP(n,t._query).then(s=>new Ls(e,r,t,s))}function G0(t,e,n){t=Ft(t,ze);const r=Ft(t.firestore,cr),s=sk(t.converter,e,n);return Mc(r,[Y1(Lc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function ks(t,e,n,...r){t=Ft(t,ze);const s=Ft(t.firestore,cr),i=Lc(s);let a;return a=typeof(e=Ee(e))=="string"||e instanceof Dc?DP(i,"updateDoc",t._key,e,n,r):RP(i,"updateDoc",t._key,e),Mc(s,[a.toMutation(t._key,on.exists(!0))])}function Q0(t){return Mc(Ft(t.firestore,cr),[new Up(t._key,on.none())])}function Wh(t,e){const n=Ft(t.firestore,cr),r=yt(t),s=sk(t.converter,e);return Mc(n,[Y1(Lc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function Gh(t,...e){var n,r,s;t=Ee(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||H0(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(H0(e[a])){const g=e[a];e[a]=(n=g.next)==null?void 0:n.bind(g),e[a+1]=(r=g.error)==null?void 0:r.bind(g),e[a+2]=(s=g.complete)==null?void 0:s.bind(g)}let u,h,m;if(t instanceof ze)h=Ft(t.firestore,cr),m=kc(t._key.path),u={next:g=>{e[a]&&e[a](ik(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=Ft(t,Js);h=Ft(g.firestore,cr),m=g._query;const y=new dm(h);u={next:C=>{e[a]&&e[a](new Ls(h,y,g,C))},error:e[a+1],complete:e[a+2]},nk(t._query)}return function(g,y,C,R){const D=new sm(R),j=new tm(y,D,C);return g.asyncQueue.enqueueAndForget(async()=>Jp(await Bu(g),j)),()=>{D.Nu(),g.asyncQueue.enqueueAndForget(async()=>Zp(await Bu(g),j))}}(Rc(h),m,l,u)}function Mc(t,e){return function(n,r){const s=new tr;return n.asyncQueue.enqueueAndForget(async()=>dP(await SP(n),r,s)),s.promise}(Rc(t),e)}function ik(t,e,n){const r=n.docs.get(e._key),s=new dm(t);return new Ds(t,s,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){na=n})(ea),Sn(new cn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),a=new cr(new DC(n.getProvider("auth-internal")),new jC(i,n.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(l.options.projectId,u)}(i,r),i);return s={useFetchStreams:e,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ut(Qy,Xy,t),Ut(Qy,Xy,"esm2020")})();const qP={apiKey:"AIzaSyAfe_3nO4nMJDgHMTmzKW7cxs4vb-cT5ME",authDomain:"fast-lost-and-found.firebaseapp.com",projectId:"fast-lost-and-found",storageBucket:"fast-lost-and-found.firebasestorage.app",messagingSenderId:"631567091200",appId:"1:631567091200:web:f5b8453c055594c184fae5",measurementId:"G-3KCXTRCN85"},fm=Iw(qP);hI(fm);const Ye=CC(fm),_e=IP(fm);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const BP="type.googleapis.com/google.protobuf.Int64Value",HP="type.googleapis.com/google.protobuf.UInt64Value";function ak(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Ku(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Ku(e));if(typeof t=="function"||typeof t=="object")return ak(t,e=>Ku(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Xi(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case BP:case HP:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Xi(e)):typeof t=="function"||typeof t=="object"?ak(t,e=>Xi(e)):t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pm="functions";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const X0={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Lt extends hn{constructor(e,n,r){super(`${pm}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Lt.prototype)}}function KP(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Wu(t,e){let n=KP(t),r=n,s;try{const i=e&&e.error;if(i){const a=i.status;if(typeof a=="string"){if(!X0[a])return new Lt("internal","internal");n=X0[a],r=a}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Xi(s))}}catch{}return n==="ok"?null:new Lt(n,r,s)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class WP{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const vf="us-central1",GP=/^data: (.*?)(?:\n|$)/;function QP(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Lt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class XP{constructor(e,n,r,s,i=vf,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new WP(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=vf}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function YP(t,e,n){const r=is(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(fp(t.emulatorOrigin+"/backends"),pp("Functions",!0))}function JP(t,e,n){const r=s=>eR(t,e,s,{});return r.stream=(s,i)=>nR(t,e,s,i),r}function ok(t){return t.emulatorOrigin&&is(t.emulatorOrigin)?"include":void 0}async function ZP(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:ok(s)})}catch{return{status:0,json:null}}let a=null;try{a=await i.json()}catch{}return{status:i.status,json:a}}async function lk(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function eR(t,e,n,r){const s=t._url(e);return tR(t,s,n,r)}async function tR(t,e,n,r){n=Ku(n);const s={data:n},i=await lk(t,r),a=r.timeout||7e4,l=QP(a),u=await Promise.race([ZP(e,s,i,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Lt("cancelled","Firebase Functions instance was deleted.");const h=Wu(u.status,u.json);if(h)throw h;if(!u.json)throw new Lt("internal","Response is not valid JSON object.");let m=u.json.data;if(typeof m>"u"&&(m=u.json.result),typeof m>"u")throw new Lt("internal","Response is missing data field.");return{data:Xi(m)}}function nR(t,e,n,r){const s=t._url(e);return rR(t,s,n,r||{})}async function rR(t,e,n,r){var s;n=Ku(n);const i={data:n},a=await lk(t,r);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:a,signal:r==null?void 0:r.signal,credentials:ok(t)})}catch(C){if(C instanceof Error&&C.name==="AbortError"){const D=new Lt("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const R=Wu(0,null);return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}let u,h;const m=new Promise((C,R)=>{u=C,h=R});(s=r==null?void 0:r.signal)==null||s.addEventListener("abort",()=>{const C=new Lt("cancelled","Request was cancelled.");h(C)});const g=l.body.getReader(),y=sR(g,u,h,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const C=y.getReader();return{async next(){const{value:R,done:D}=await C.read();return{value:R,done:D}},async return(){return await C.cancel(),{done:!0,value:void 0}}}}},data:m}}function sR(t,e,n,r){const s=(a,l)=>{const u=a.match(GP);if(!u)return;const h=u[1];try{const m=JSON.parse(h);if("result"in m){e(Xi(m.result));return}if("message"in m){l.enqueue(Xi(m.message));return}if("error"in m){const g=Wu(0,m);l.error(g),n(g);return}}catch(m){if(m instanceof Lt){l.error(m),n(m);return}}},i=new TextDecoder;return new ReadableStream({start(a){let l="";return u();async function u(){if(r!=null&&r.aborted){const h=new Lt("cancelled","Request was cancelled");return a.error(h),n(h),Promise.resolve()}try{const{value:h,done:m}=await t.read();if(m){l.trim()&&s(l.trim(),a),a.close();return}if(r!=null&&r.aborted){const y=new Lt("cancelled","Request was cancelled");a.error(y),n(y),await t.cancel();return}l+=i.decode(h,{stream:!0});const g=l.split(`
`);l=g.pop()||"";for(const y of g)y.trim()&&s(y.trim(),a);return u()}catch(h){const m=h instanceof Lt?h:Wu(0,null);a.error(m),n(m)}}},cancel(){return t.cancel()}})}const Y0="@firebase/functions",J0="0.13.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const iR="auth-internal",aR="app-check-internal",oR="messaging-internal";function lR(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(iR),a=n.getProvider(oR),l=n.getProvider(aR);return new XP(s,i,a,l,r)};Sn(new cn(pm,e,"PUBLIC").setMultipleInstances(!0)),Ut(Y0,J0,t),Ut(Y0,J0,"esm2020")}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uR(t=dc(),e=vf){const n=as(Ee(t),pm).getImmediate({identifier:e}),r=vw("functions");return r&&cR(n,...r),n}function cR(t,e,n){YP(Ee(t),e,n)}function hR(t,e,n){return JP(Ee(t),e)}lR();const dR="davcuzq95",fR="sddwhr9r",Z0=async t=>{const e=new FormData;e.append("file",t),e.append("upload_preset",fR);try{const n=await fetch(`https://api.cloudinary.com/v1_1/${dR}/image/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Failed to upload image");return(await n.json()).secure_url}catch(n){throw console.error("Error uploading to Cloudinary:",n),n}},pR=(t,e)=>{if(t.status===e.status||t.category!==e.category)return!1;const n=(t.title||"").toLowerCase(),r=(e.title||"").toLowerCase(),s=n.split(/\s+/),i=r.split(/\s+/);if(s.filter(m=>m.length>3&&i.includes(m)).length>=2)return!0;const a=(t.description||"").toLowerCase(),l=(e.description||"").toLowerCase(),u=a.split(/\s+/).filter(m=>m.length>4),h=l.split(/\s+/).filter(m=>m.length>4);return u.filter(m=>h.includes(m)).length>=3},Qh=["All","Electronics","Books","Bags","Clothing","Personal Items","ID Cards","Keys"],Xh=["All","Library","Cafeteria","Gym","Hostel","Science Block","Admin Block"],ev={"School of Computing":["Software Engineering","Computer Science","Artificial Intelligence","Data Science","Cyber Security"],"School of Engineering":["Electrical Engineering","Computer Engineering"],"School of Management":["Accounting and Finance","Fintech","Business Administration","Business Analytics"]},Sr="https://placehold.co/400x300/a8b9c9/ffffff?text=No+Image";function mR(){const[t,e]=re.useState(!1),[n,r]=re.useState(!0),[s,i]=re.useState(!1),[a,l]=re.useState({email:"",password:"",name:"",school:"",department:"",phone:""}),[u,h]=re.useState(""),[m,g]=re.useState([]),[y,C]=re.useState(!1),[R,D]=re.useState(!1),[j,T]=re.useState({name:"",email:"",school:"",department:"",phone:""}),[S,_]=re.useState("profile"),[U,z]=re.useState(!1),[q,w]=re.useState("home"),[b,x]=re.useState([]),[E,N]=re.useState(!1),[A,k]=re.useState(null),[fe,tt]=re.useState({title:"",message:"",type:"info"}),[Nn,Zs]=re.useState([]),[B,Z]=re.useState(!1),[ae,xe]=re.useState([]),[De,Jt]=re.useState(!1),[St,Zt]=re.useState(!1),[Vt,zt]=re.useState(!1),[en,cs]=re.useState(null),[Q,$e]=re.useState({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]}),[ge,dn]=re.useState([]),[ei,Uc]=re.useState(""),[hs,aa]=re.useState("All"),[ti,nt]=re.useState("All"),[qe,ni]=re.useState("all"),[Fc,oa]=re.useState([]),[Te,ds]=re.useState(null),[qo,fr]=re.useState(!1),[Bn,Vc]=re.useState("newest"),[fs,Bo]=re.useState(!1),[zc,ps]=re.useState(null);re.useEffect(()=>{if(!_e)return;const p=Gh(xs(_e,"items"),I=>{const O=I.docs.map(H=>({id:H.id,...H.data()}));dn(O)},I=>{console.error("Error fetching items: ",I),J("Failed to load items","error")});return()=>p()},[]),re.useEffect(()=>{if(!_e||!t)return;const p=Gh(xs(_e,"users"),I=>{const O=I.docs.map(H=>({id:H.id,...H.data()}));g(O)},I=>{console.error("Error fetching users:",I)});return()=>p()},[t]),re.useEffect(()=>{if(!_e||!t)return;const p=Gh(xs(_e,"announcements"),I=>{const O=I.docs.map(H=>({id:H.id,...H.data()})).sort((H,ne)=>{var X,ve,ye,le;const Et=((ve=(X=H.createdAt)==null?void 0:X.toDate)==null?void 0:ve.call(X))||new Date(H.createdAt||0);return(((le=(ye=ne.createdAt)==null?void 0:ye.toDate)==null?void 0:le.call(ye))||new Date(ne.createdAt||0))-Et});x(O)},I=>{console.error("Error fetching announcements:",I)});return()=>p()},[t]),re.useEffect(()=>{const p=v_(Ye,async I=>{if(I){try{const O=yt(_e,"users",I.uid),H=await Al(O);if(H.exists()&&H.data().isSuspended===!0){await El(Ye),h("Your account has been suspended. Please contact an administrator."),J("Account suspended. Please contact an administrator.","error"),e(!1),r(!0);return}}catch(O){console.error("Error checking suspension status:",O)}e(!0),r(!1);try{const O=yt(_e,"users",I.uid),H=await Al(O);if(H.exists()){const ne=H.data();T({name:ne.name||I.displayName||"",email:ne.email||I.email,school:ne.school||"",department:ne.department||"",phone:ne.phone||"",role:ne.role||"user",isSuspended:ne.isSuspended||!1})}else{const ne=UP(xs(_e,"users"),FP("email","==",I.email)),X=await $P(ne);if(X.empty)T({name:I.displayName||"",email:I.email,school:"",department:"",phone:"",role:"user",isSuspended:!1});else{const ve=X.docs[0].data();T({name:ve.name||I.displayName||"",email:ve.email||I.email,school:ve.school||"",department:ve.department||"",phone:ve.phone||"",role:ve.role||"user",isSuspended:ve.isSuspended||!1})}}}catch(O){console.error("Error fetching user profile:",O)}}else e(!1),r(!0),T({name:"",email:"",school:"",department:"",phone:"",role:"user",isSuspended:!1})});return()=>p()},[]),re.useEffect(()=>{y?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[y]);const J=(p,I="success")=>{const O=Date.now(),H={id:O,message:p,type:I};oa(ne=>[...ne,H]),setTimeout(()=>{oa(ne=>ne.filter(X=>X.id!==O))},3e3)};let Hn=ge.filter(p=>{const I=(p.title||"").toLowerCase().includes(ei.toLowerCase())||(p.description||"").toLowerCase().includes(ei.toLowerCase()),O=hs==="All"||p.category===hs,H=ti==="All"||p.location===ti,ne=qe==="all"||p.status===qe;if(fs&&p.ownerEmail!==(j==null?void 0:j.email))return!1;const X=p.approvalStatus==="approved"||p.ownerEmail===(j==null?void 0:j.email)||(j==null?void 0:j.role)==="admin";return p.archived&&(j==null?void 0:j.role)!=="admin"?!1:I&&O&&H&&ne&&X});Hn=[...Hn].sort((p,I)=>{if(Bn==="newest"){const O=p.date?new Date(p.date).getTime():0;return(I.date?new Date(I.date).getTime():0)-O}else if(Bn==="oldest"){const O=p.date?new Date(p.date).getTime():0,H=I.date?new Date(I.date).getTime():0;return O-H}else{if(Bn==="category")return(p.category||"").localeCompare(I.category||"");if(Bn==="title")return(p.title||"").localeCompare(I.title||"")}return 0});const Kn=async(p,I)=>{try{const O=yt(_e,"items",p);await ks(O,{status:I}),dn(ge.map(H=>H.id===p?{...H,status:I}:H)),J(`Item marked as ${I}`,"success")}catch(O){console.error("Error updating status:",O),J("Failed to update status","error")}},Ho=async p=>{Kn(p,"returned")},ms=p=>{const I=m.find(O=>O.email===p.ownerEmail);ps(I||null),ds(p),fr(!0)},Ko=p=>{const I=m.find(O=>O.email===p.ownerEmail);I?I.phone?(window.open(`tel:${I.phone}`,"_self"),J(`Calling ${I.name}...`,"info")):I.email?(window.open(`mailto:${I.email}?subject=Regarding: ${p.title}`,"_self"),J(`Opening email to ${I.name}...`,"info")):J("Owner contact information not available","error"):J("Owner information not found","error")},gs=p=>{cs(p),$e({title:p.title||"",description:p.description||"",category:p.category||"Electronics",location:p.location||"Library",status:p.status||"lost",images:p.images?p.images.map((I,O)=>({id:Date.now()+O,url:I,file:null})):[]}),zt(!0),fr(!1)},Wo=async()=>{if(en){if(!Q.title.trim()||!Q.description.trim()){J("Please fill in title and description","error");return}try{J("Updating item...","info");const p=Q.images.filter(X=>X.file),I=Q.images.filter(X=>!X.file).map(X=>X.url);let O=[];p.length>0&&(O=await Promise.all(p.map(async X=>X.file?await Z0(X.file):X.url)));const H=[...I,...O],ne={title:Q.title,description:Q.description,category:Q.category,location:Q.location,status:Q.status,image:H.length>0?H[0]:Sr,images:H,approvalStatus:en.approvalStatus==="approved"?"pending":en.approvalStatus};await ks(yt(_e,"items",en.id),ne),await fn("update","item",en.id,{title:ne.title,changes:Object.keys(ne)}),dn(ge.map(X=>X.id===en.id?{...X,...ne}:X)),p.forEach(X=>{X.url&&X.url.startsWith("blob:")&&URL.revokeObjectURL(X.url)}),zt(!1),cs(null),J("Item updated successfully!","success"),$e({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})}catch(p){console.error("Error updating document: ",p),J("Failed to update item","error")}}},rt=async p=>{if(window.confirm("Are you sure you want to delete this item?"))try{const I=ge.find(O=>O.id===p);await Q0(yt(_e,"items",p)),await fn("delete","item",p,{title:(I==null?void 0:I.title)||"Unknown"}),dn(ge.filter(O=>O.id!==p)),fr(!1),J("Item deleted successfully","success")}catch(I){console.error("Error deleting item:",I),J("Failed to delete item","error")}},fn=async(p,I,O,H={})=>{if(!(!t||!Ye.currentUser))try{await Wh(xs(_e,"audit_logs"),{action:p,resourceType:I,resourceId:O,userId:Ye.currentUser.uid,userEmail:(j==null?void 0:j.email)||Ye.currentUser.email,userName:(j==null?void 0:j.name)||Ye.currentUser.displayName,timestamp:new Date,details:H,ipAddress:null})}catch(ne){console.error("Error logging activity:",ne)}},ys=async p=>{try{const I=uR();await hR(I,"sendMatchEmail")(p),console.log("Match email sent successfully")}catch(I){console.error("Error sending match notification:",I)}},pr=p=>{const I=Array.from(p.target.files).map(O=>({id:Date.now()+Math.random(),url:URL.createObjectURL(O),file:O,name:O.name}));$e({...Q,images:[...Q.images,...I]})},Go=p=>{$e({...Q,images:Q.images.filter(I=>I.id!==p)})},$c=async()=>{var p,I;if(!Q.title.trim()||!Q.description.trim()){J("Please fill in title and description","error");return}try{J("Uploading images...","info");const O=await Promise.all(Q.images.map(async X=>X.file?await Z0(X.file):X.url)),H={title:Q.title,description:Q.description,category:Q.category,location:Q.location,status:Q.status,image:O.length>0?O[0]:Sr,images:O,claimed:!1,approvalStatus:"pending",date:new Date().toISOString().split("T")[0],ownerEmail:(j==null?void 0:j.email)||((p=Ye.currentUser)==null?void 0:p.email)||"",ownerName:(j==null?void 0:j.name)||((I=Ye.currentUser)==null?void 0:I.displayName)||""},ne={id:(await Wh(xs(_e,"items"),H)).id,...H};dn([ne,...ge]);try{const X=ge.filter(ve=>ve.approvalStatus!=="approved"||ve.ownerEmail===H.ownerEmail?!1:pR(ne,ve));if(X.length>0){const ve={id:Date.now().toString(),type:"match",title:"🎉 Potential Match Found!",message:`We found ${X.length} potential match${X.length>1?"es":""} for your ${Q.status} item: "${Q.title}"`,timestamp:new Date,matches:X.map(ye=>({id:ye.id,title:ye.title}))};xe(ye=>[ve,...ye]),setTimeout(()=>{xe(ye=>ye.filter(le=>le.id!==ve.id))},1e4)}for(const ve of X){const ye=m.find(le=>le.email===ve.ownerEmail);ye&&await ys({toEmail:ye.email,toName:ye.name,matchedItem:ne,userItem:ve})}X.length>0&&J(`${X.length} potential match(es) found! Email notifications sent.`,"info")}catch(X){console.error("Error checking matches:",X)}Q.images.forEach(X=>URL.revokeObjectURL(X.url)),Jt(!1),Zt(!1),J("Item posted successfully!","success"),$e({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})}catch(O){console.error("Error adding document: ",O),J("Failed to create post","error")}},mr=async()=>{var p;if(!fe.title.trim()||!fe.message.trim()){J("Please fill in title and message","error");return}try{if(A)await ks(yt(_e,"announcements",A.id),{title:fe.title,message:fe.message,type:fe.type,updatedAt:new Date}),await fn("update","announcement",A.id,{title:fe.title}),J("Announcement updated successfully","success");else{const I=await Wh(xs(_e,"announcements"),{title:fe.title,message:fe.message,type:fe.type,createdAt:new Date,createdBy:(j==null?void 0:j.email)||((p=Ye.currentUser)==null?void 0:p.email)||"admin"});await fn("create","announcement",I.id,{title:fe.title,type:fe.type}),J("Announcement created successfully","success")}N(!1),k(null),tt({title:"",message:"",type:"info"})}catch(I){console.error("Error saving announcement:",I),J(`Failed to save announcement: ${I.message}`,"error")}},Qo=async p=>{if(window.confirm("Are you sure you want to delete this announcement?"))try{const I=b.find(O=>O.id===p);await Q0(yt(_e,"announcements",p)),await fn("delete","announcement",p,{title:(I==null?void 0:I.title)||"Unknown"}),J("Announcement deleted successfully","success")}catch(I){console.error("Error deleting announcement:",I),J("Failed to delete announcement","error")}},qc=async(p,I)=>{const O={...j,[p]:I};if(T(O),Ye.currentUser)try{await G0(yt(_e,"users",Ye.currentUser.uid),O,{merge:!0}),J("Profile updated","success")}catch(H){console.error("Error updating profile:",H),J("Failed to save profile","error")}},ri=p=>p.endsWith("@isb.nu.edu.pk"),Xo=async p=>{if(p&&p.preventDefault(),h(""),!ri(a.email)){h("Please use your FAST Islamabad email (@isb.nu.edu.pk)");return}if(a.password.length<6){h("Password must be at least 6 characters long");return}try{if(s){if(!a.name.trim()||!a.school||!a.department.trim()){h("Please fill in all required fields (Name, School, Department).");return}const I=(await f_(Ye,a.email,a.password)).user;await m_(I,{displayName:a.name}),await G0(yt(_e,"users",I.uid),{name:a.name,email:a.email,school:a.school,department:a.department,phone:a.phone,role:"user",isSuspended:!1}),T({name:a.name,email:a.email,school:a.school,department:a.department,phone:a.phone,role:"user",isSuspended:!1}),J("Account created successfully! Welcome!","success")}else{const I=(await Uy(Ye,a.email,a.password)).user,O=yt(_e,"users",I.uid),H=await Al(O);if(H.exists()&&H.data().isSuspended===!0){await El(Ye),h("Your account has been suspended. Please contact an administrator."),J("Account suspended. Please contact an administrator.","error");return}l({email:"",password:"",name:"",school:"",department:"",phone:""}),J("Welcome back!","success")}}catch(I){console.error("Auth error:",I);let O="Authentication failed.";I.code==="auth/email-already-in-use"?O="Email already in use.":I.code==="auth/invalid-credential"?O="Invalid email or password.":I.code==="auth/weak-password"&&(O="Password should be at least 6 characters."),h(O),J(O,"error")}},Yo=p=>{l({...a,school:p,department:""})},la=async()=>{try{await El(Ye),ge.forEach(p=>{p.image&&p.image.startsWith("blob:")&&URL.revokeObjectURL(p.image)}),i(!1),l({email:"",password:"",name:"",school:"",department:"",phone:""}),J("Logged out successfully","info")}catch(p){console.error("Logout error:",p),J("Error logging out","error")}},pn=(p,I)=>{l({...a,[p]:I}),h("")},Bc=()=>{const p=ge.filter(O=>O.status==="lost").reduce((O,H)=>{const ne=H.category||"Unknown";return O[ne]=(O[ne]||0)+1,O},{}),I=3;return Object.entries(p).filter(([O,H])=>H>=I).map(([O])=>O)},In=({item:p})=>{const I=p.ownerEmail===(j==null?void 0:j.email),O=(j==null?void 0:j.role)==="admin",H=Bc(),ne=p.status==="lost"&&H.includes(p.category);return d.jsxs("div",{className:`${y?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} ${ne?"border-2 border-orange-500 ring-2 ring-orange-200 dark:ring-orange-800":"border"} rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl cursor-pointer`,onClick:()=>ms(p),children:[d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:p.image,alt:p.title,className:"w-full h-48 object-cover object-center",onError:X=>{X.target.onerror=null,X.target.src=Sr}}),I&&d.jsx("span",{className:"absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold",children:"My Post"}),ne&&d.jsx("span",{className:"absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10",children:"⚠️ Frequently Lost"}),p.approvalStatus==="pending"&&d.jsx("span",{className:`absolute ${ne?"top-10":"top-2"} right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold`,children:"Pending Approval"}),(I||O)&&d.jsx("button",{onClick:X=>{X.stopPropagation(),rt(p.id)},className:"absolute bottom-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition shadow-md",title:"Delete Item",children:d.jsx(oy,{size:16})})]}),d.jsxs("div",{className:"p-4 sm:p-5",children:[d.jsxs("div",{className:"flex justify-between items-start mb-2",children:[d.jsx("h3",{className:`font-extrabold text-xl ${y?"text-white":"text-gray-900"} leading-snug`,children:p.title}),d.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${p.status==="lost"?"bg-red-500 text-white":"bg-green-500 text-white"} shadow-md`,children:(p.status||"unknown").toUpperCase()})]}),d.jsx("p",{className:`text-sm mb-3 ${y?"text-gray-300":"text-gray-600"} line-clamp-2`,children:p.description}),d.jsxs("div",{className:"space-y-2 mb-4 text-sm",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(_a,{size:16,className:y?"text-blue-400":"text-blue-600"}),d.jsxs("span",{className:y?"text-gray-300":"text-gray-700",children:["Category: ",d.jsx("span",{className:`font-medium ${ne?"text-orange-600 dark:text-orange-400":""}`,children:p.category}),ne&&d.jsx("span",{className:"ml-2 text-xs text-orange-600 dark:text-orange-400",children:"⚠️ Take extra care!"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ia,{size:16,className:y?"text-yellow-400":"text-yellow-600"}),d.jsxs("span",{className:y?"text-gray-300":"text-gray-700",children:["Location: ",d.jsx("span",{className:"font-medium",children:p.location})]})]}),d.jsxs("p",{className:"text-xs pt-1 text-gray-500",children:["Reported: ",p.date?new Date(p.date).toLocaleDateString():"N/A"]})]}),d.jsx("div",{className:`w-full py-2 rounded-xl text-center font-semibold text-sm ${p.claimed?"bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200":y?"bg-gray-700 text-gray-300":"bg-gray-100 text-gray-700"}`,children:p.claimed?d.jsxs("span",{className:"flex items-center justify-center gap-2",children:[d.jsx(Ch,{size:16})," Claimed & Resolved"]}):d.jsxs("span",{className:"flex items-center justify-center gap-2",children:[d.jsx(nT,{size:16})," Click to view details"]})})]})]},p.id)};return q==="admin-login"?d.jsx("div",{className:`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${y?"bg-gray-900":"bg-gray-50"}`,children:d.jsxs("div",{className:`w-full max-w-md p-8 rounded-2xl shadow-xl ${y?"bg-gray-800":"bg-white"}`,children:[d.jsx("div",{className:"flex justify-center mb-8",children:d.jsx("div",{className:"p-3 bg-purple-600 rounded-full shadow-lg",children:d.jsx(ay,{size:40,className:"text-white"})})}),d.jsx("h2",{className:`text-3xl font-bold text-center mb-2 ${y?"text-white":"text-gray-900"}`,children:"Admin Portal"}),d.jsx("p",{className:`text-center mb-8 ${y?"text-gray-400":"text-gray-500"}`,children:"Restricted access for administrators only."}),d.jsxs("form",{onSubmit:async p=>{p.preventDefault();const I=p.target.email.value,O=p.target.password.value;try{const H=(await Uy(Ye,I,O)).user,ne=await Al(yt(_e,"users",H.uid));ne.exists()&&ne.data().role==="admin"?(J("Welcome back, Admin!","success"),w("home"),z(!0)):(await El(Ye),J("Access Denied: You are not an admin.","error"))}catch(H){console.error("Admin login error:",H),J("Login failed: "+H.message,"error")}},className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-2 ${y?"text-gray-300":"text-gray-700"}`,children:"Email Address"}),d.jsxs("div",{className:"relative",children:[d.jsx(sy,{className:`absolute left-3 top-3 ${y?"text-gray-500":"text-gray-400"}`,size:20}),d.jsx("input",{name:"email",type:"email",required:!0,className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`,placeholder:"admin@isb.nu.edu.pk"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-2 ${y?"text-gray-300":"text-gray-700"}`,children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx(ry,{className:`absolute left-3 top-3 ${y?"text-gray-500":"text-gray-400"}`,size:20}),d.jsx("input",{name:"password",type:"password",required:!0,className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`,placeholder:"••••••••"})]})]}),d.jsx("button",{type:"submit",className:"w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5",children:"Access Dashboard"})]}),d.jsx("div",{className:"mt-6 text-center",children:d.jsx("button",{onClick:()=>w("home"),className:`text-sm font-medium ${y?"text-gray-400 hover:text-white":"text-gray-500 hover:text-gray-900"} transition`,children:"← Back to Home"})})]})}):d.jsxs("div",{className:`min-h-screen transition-colors duration-300 font-sans ${y?"dark bg-gray-900":"bg-gray-50"}`,children:[d.jsx("div",{className:"fixed top-20 right-4 z-50 space-y-2 max-w-sm",children:ae.map(p=>d.jsx("div",{className:`p-4 rounded-lg shadow-lg border-l-4 ${p.type==="match"?"bg-green-50 dark:bg-green-900/20 border-green-500":"bg-blue-50 dark:bg-blue-900/20 border-blue-500"} animate-slide-in`,children:d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:`font-bold mb-1 ${p.type==="match"?"text-green-800 dark:text-green-200":"text-blue-800 dark:text-blue-200"}`,children:p.title}),d.jsx("p",{className:`text-sm ${p.type==="match"?"text-green-700 dark:text-green-300":"text-blue-700 dark:text-blue-300"}`,children:p.message}),p.matches&&p.matches.length>0&&d.jsxs("div",{className:"mt-2 text-xs",children:[d.jsx("p",{className:"font-semibold",children:"Matching items:"}),d.jsx("ul",{className:"list-disc list-inside mt-1",children:p.matches.map(I=>d.jsx("li",{children:I.title},I.id))})]})]}),d.jsx("button",{onClick:()=>xe(I=>I.filter(O=>O.id!==p.id)),className:"ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:d.jsx(Pn,{size:16})})]})},p.id))}),n&&!t&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto",children:d.jsxs("div",{className:`${y?"bg-gray-800":"bg-white"} rounded-xl max-w-md w-full p-4 sm:p-6 md:p-8 shadow-2xl my-4 sm:my-8 max-h-[95vh] overflow-y-auto`,children:[d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("h2",{className:`text-3xl font-extrabold mb-2 ${y?"text-white":"text-gray-900"}`,children:"FAST Lost & Found"}),d.jsx("p",{className:`text-sm ${y?"text-gray-400":"text-gray-600"}`,children:s?"Create your university account":"Sign in to access the system"})]}),u&&d.jsx("div",{className:"mb-4 p-3 bg-red-500 text-white rounded-lg text-sm font-medium",children:u}),d.jsxs("form",{onSubmit:Xo,className:"space-y-4",children:[s&&d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"Full Name"}),d.jsxs("div",{className:"relative",children:[d.jsx(tT,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"text",value:a.name,onChange:p=>pn("name",p.target.value),placeholder:"Enter your full name",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"FAST University Email"}),d.jsxs("div",{className:"relative",children:[d.jsx(sy,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"email",value:a.email,onChange:p=>pn("email",p.target.value),placeholder:"yourname@isb.nu.edu.pk",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:!0})]}),d.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Must use your FAST Islamabad email"})]}),s&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"School"}),d.jsxs("div",{className:"relative",children:[d.jsx(ny,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsxs("select",{value:a.school,onChange:p=>Yo(p.target.value),className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s,children:[d.jsx("option",{value:"",children:"Select School"}),Object.keys(ev).map(p=>d.jsx("option",{value:p,children:p},p))]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"Department"}),d.jsxs("div",{className:"relative",children:[d.jsx(ny,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsxs("select",{value:a.department,onChange:p=>pn("department",p.target.value),className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s,disabled:!a.school,children:[d.jsx("option",{value:"",children:"Select Department"}),a.school&&ev[a.school].map(p=>d.jsx("option",{value:p,children:p},p))]})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"Phone Number (Optional)"}),d.jsxs("div",{className:"relative",children:[d.jsx(oT,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"tel",value:a.phone,onChange:p=>pn("phone",p.target.value),placeholder:"+92 300 1234567",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx(ry,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"password",value:a.password,onChange:p=>pn("password",p.target.value),placeholder:"Enter your password",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:!0})]}),d.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Minimum 6 characters"})]}),d.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold shadow-lg",children:s?"Create Account":"Sign In"})]}),d.jsx("div",{className:"mt-6 text-center",children:d.jsx("button",{onClick:()=>{i(!s),h(""),l({...a,name:"",school:"",department:"",phone:""})},className:`text-sm ${y?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"} font-medium transition`,children:s?"Already have an account? Sign in":"Don't have an account? Register"})})]})}),d.jsx("header",{className:`${y?"bg-gray-800 shadow-gray-900/20":"bg-white shadow-gray-200/50"} sticky top-0 z-40 shadow-lg backdrop-blur-md bg-opacity-90 transition-colors duration-300`,children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",children:[d.jsxs("div",{className:"flex items-center gap-3 cursor-pointer group",onClick:()=>window.location.reload(),children:[d.jsx("div",{className:"p-2 rounded-lg bg-blue-600 group-hover:scale-110 transition-transform duration-300",children:d.jsx(iy,{className:"text-white",size:24})}),d.jsxs("h1",{className:`text-2xl font-extrabold tracking-tight ${y?"text-white":"text-gray-900"}`,children:["FAST ",d.jsx("span",{className:"text-blue-600",children:"Lost&Found"})]})]}),d.jsx("div",{className:"flex items-center gap-4",children:t&&d.jsxs(d.Fragment,{children:[j.role==="admin"&&d.jsxs("button",{onClick:()=>z(!0),className:"hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:[d.jsx(ay,{size:18}),"Admin"]}),d.jsxs("button",{onClick:()=>Jt(!0),className:"hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:[d.jsx(lT,{size:20}),"Report Item"]}),d.jsx("button",{onClick:()=>C(!y),className:`p-2 rounded-lg ${y?"bg-gray-700 text-yellow-400":"bg-gray-100 text-gray-700"} hover:opacity-80 transition`,title:y?"Switch to Light Mode":"Switch to Dark Mode",children:y?d.jsx(uT,{size:20}):d.jsx(iT,{size:20})}),d.jsx("button",{onClick:()=>D(!R),className:`p-2 rounded-lg ${y?"bg-gray-700 text-white":"bg-gray-100 text-gray-700"} hover:opacity-80 transition`,title:"Profile",children:d.jsx(Ph,{size:20})}),d.jsx("button",{onClick:la,className:`p-2 rounded-lg ${y?"bg-gray-700 text-red-400":"bg-gray-100 text-red-600"} hover:opacity-80 transition`,title:"Logout",children:d.jsx(rT,{size:20})})]})})]})}),t&&b.length>0&&d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2",children:b.filter(p=>!p.archived).slice(0,3).map(p=>d.jsx("div",{className:`mb-2 p-4 rounded-lg border-l-4 ${p.type==="warning"?"bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500":p.type==="reminder"?"bg-blue-50 dark:bg-blue-900/20 border-blue-500":"bg-gray-50 dark:bg-gray-800 border-gray-500"}`,children:d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:`font-bold mb-1 ${p.type==="warning"?"text-yellow-800 dark:text-yellow-200":p.type==="reminder"?"text-blue-800 dark:text-blue-200":"text-gray-800 dark:text-gray-200"}`,children:p.title}),d.jsx("p",{className:`text-sm ${p.type==="warning"?"text-yellow-700 dark:text-yellow-300":p.type==="reminder"?"text-blue-700 dark:text-blue-300":"text-gray-700 dark:text-gray-300"}`,children:p.message})]}),(j==null?void 0:j.role)==="admin"&&d.jsx("button",{onClick:()=>Qo(p.id),className:"ml-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400",title:"Delete Announcement",children:d.jsx(Pn,{size:16})})]})},p.id))}),R&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4",children:d.jsxs("div",{className:`${y?"bg-gray-800":"bg-white"} rounded-xl max-w-md w-full p-6 shadow-2xl`,children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h2",{className:`text-2xl font-bold ${y?"text-white":"text-gray-900"}`,children:"User Profile"}),d.jsx("button",{onClick:()=>D(!1),className:y?"text-gray-400 hover:text-white":"text-gray-600 hover:text-gray-900",children:d.jsx(Pn,{size:24})})]}),d.jsxs("div",{className:"flex gap-2 mb-6 border-b border-gray-300 dark:border-gray-700",children:[d.jsx("button",{onClick:()=>_("profile"),className:`px-4 py-2 font-semibold transition ${S==="profile"?"border-b-2 border-blue-600 text-blue-600 dark:text-blue-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:"Profile"}),d.jsx("button",{onClick:()=>_("history"),className:`px-4 py-2 font-semibold transition ${S==="history"?"border-b-2 border-blue-600 text-blue-600 dark:text-blue-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:"History"})]}),S==="profile"?d.jsxs("div",{className:"space-y-4",children:[["name","email","school","department","phone"].map(p=>d.jsxs("div",{children:[d.jsx("label",{className:`block text-sm font-medium mb-1 ${y?"text-gray-300":"text-gray-700"}`,children:p.charAt(0).toUpperCase()+p.slice(1)}),d.jsx("input",{type:p==="email"?"email":p==="phone"?"tel":"text",value:j[p]||"",onChange:I=>qc(p,I.target.value),disabled:p==="email"||p==="school"||p==="department",className:`w-full px-4 py-3 rounded-lg border ${p==="email"||p==="school"||p==="department"?y?"bg-gray-700 border-gray-600 text-gray-400":"bg-gray-100 border-gray-300 text-gray-500":y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text transition`}),p==="email"&&d.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Email is immutable."})]},p)),d.jsx("button",{onClick:()=>D(!1),className:"w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold",children:"Close / Save Changes"})]}):d.jsxs("div",{className:"space-y-4 max-h-[60vh] overflow-y-auto",children:[d.jsx("h3",{className:`text-lg font-bold ${y?"text-white":"text-gray-900"}`,children:"My Lost & Found History"}),ge.filter(p=>p.ownerEmail===(j==null?void 0:j.email)).length===0?d.jsxs("div",{className:`text-center py-8 ${y?"text-gray-400":"text-gray-500"}`,children:[d.jsx("p",{className:"text-lg mb-2",children:"No items reported yet"}),d.jsx("p",{className:"text-sm",children:"Start by reporting a lost or found item!"})]}):d.jsx("div",{className:"space-y-3",children:ge.filter(p=>p.ownerEmail===(j==null?void 0:j.email)).sort((p,I)=>new Date(I.date||0)-new Date(p.date||0)).map(p=>{var I;return d.jsx("div",{className:`p-4 rounded-lg border ${y?"bg-gray-700 border-gray-600":"bg-gray-50 border-gray-200"} cursor-pointer hover:shadow-md transition`,onClick:()=>{ms(p),D(!1)},children:d.jsxs("div",{className:"flex gap-4",children:[d.jsx("img",{src:p.image||Sr,alt:p.title,className:"w-20 h-20 object-cover rounded-lg",onError:O=>{O.target.onerror=null,O.target.src=Sr}}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex justify-between items-start mb-1",children:[d.jsx("h4",{className:`font-bold ${y?"text-white":"text-gray-900"}`,children:p.title}),d.jsx("span",{className:`px-2 py-1 rounded text-xs font-semibold ${p.status==="lost"?"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200":p.status==="found"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`,children:((I=p.status)==null?void 0:I.toUpperCase())||"UNKNOWN"})]}),d.jsx("p",{className:`text-sm mb-2 line-clamp-2 ${y?"text-gray-300":"text-gray-600"}`,children:p.description}),d.jsxs("div",{className:"flex gap-4 text-xs text-gray-500 dark:text-gray-400",children:[d.jsxs("span",{className:"flex items-center gap-1",children:[d.jsx(_a,{size:12})," ",p.category]}),d.jsxs("span",{className:"flex items-center gap-1",children:[d.jsx(Ia,{size:12})," ",p.location]}),d.jsxs("span",{className:"flex items-center gap-1",children:[d.jsx(_h,{size:12})," ",p.date?new Date(p.date).toLocaleDateString():"N/A"]})]}),p.approvalStatus==="pending"&&d.jsx("span",{className:"inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded",children:"Pending Approval"}),p.status==="returned"&&d.jsx("span",{className:"inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded",children:"✓ Resolved"})]})]})},p.id)})})]})]})}),De&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[d.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:St?"Preview Report":"Report an Item"}),d.jsx("button",{onClick:()=>{Jt(!1),Zt(!1)},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:d.jsx(Pn,{className:"w-6 h-6"})})]}),d.jsx("div",{className:"p-6 space-y-6",children:St?d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[d.jsxs("div",{className:"aspect-video relative rounded-lg overflow-hidden mb-4 bg-gray-200 dark:bg-gray-600",children:[d.jsx("img",{src:Q.images.length>0?Q.images[0].url:Sr,alt:Q.title,className:"w-full h-full object-cover"}),d.jsx("span",{className:`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium capitalize
                        ${Q.status==="lost"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:Q.status})]}),d.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:Q.title}),d.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:Q.description}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[d.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[d.jsx(_a,{className:"w-4 h-4 mr-2"}),Q.category]}),d.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[d.jsx(Ia,{className:"w-4 h-4 mr-2"}),Q.location]}),d.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[d.jsx(_h,{className:"w-4 h-4 mr-2"}),new Date().toLocaleDateString()]})]})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:()=>Zt(!1),className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Back to Edit"}),d.jsx("button",{onClick:$c,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Confirm & Post"})]})]}):d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[d.jsx("button",{onClick:()=>$e({...Q,status:"lost"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="lost"?"bg-white dark:bg-gray-600 text-red-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Lost Item"}),d.jsx("button",{onClick:()=>$e({...Q,status:"found"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="found"?"bg-white dark:bg-gray-600 text-green-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Found Item"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),d.jsx("input",{type:"text",value:Q.title,onChange:p=>$e({...Q,title:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Blue Samsonite Backpack"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Description"}),d.jsx("textarea",{value:Q.description,onChange:p=>$e({...Q,description:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Provide details like color, brand, distinguishing marks..."})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Category"}),d.jsx("select",{value:Q.category,onChange:p=>$e({...Q,category:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Qh.filter(p=>p!=="All").map(p=>d.jsx("option",{value:p,children:p},p))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Location"}),d.jsx("select",{value:Q.location,onChange:p=>$e({...Q,location:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Xh.filter(p=>p!=="All").map(p=>d.jsx("option",{value:p,children:p},p))})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Photos"}),d.jsxs("div",{className:"border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors",children:[d.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:pr,className:"hidden",id:"image-upload"}),d.jsxs("label",{htmlFor:"image-upload",className:"cursor-pointer flex flex-col items-center",children:[d.jsx(Ah,{className:"w-8 h-8 text-gray-400 mb-2"}),d.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Click to upload photos"})]})]}),Q.images.length>0&&d.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Q.images.map(p=>d.jsxs("div",{className:"relative aspect-square rounded-lg overflow-hidden group",children:[d.jsx("img",{src:p.url,alt:"Preview",className:"w-full h-full object-cover"}),d.jsx("button",{onClick:()=>Go(p.id),className:"absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(Pn,{className:"w-3 h-3"})})]},p.id))})]}),d.jsx("button",{onClick:()=>{if(!Q.title.trim()||!Q.description.trim()){J("Please fill in title and description","error");return}Zt(!0)},className:"w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"Preview Report"})]})})]})}),Vt&&en&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[d.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Edit Item"}),d.jsx("button",{onClick:()=>{zt(!1),cs(null),$e({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:d.jsx(Pn,{className:"w-6 h-6"})})]}),d.jsx("div",{className:"p-6 space-y-6",children:d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[d.jsx("button",{onClick:()=>$e({...Q,status:"lost"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="lost"?"bg-white dark:bg-gray-600 text-red-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Lost Item"}),d.jsx("button",{onClick:()=>$e({...Q,status:"found"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="found"?"bg-white dark:bg-gray-600 text-green-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Found Item"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),d.jsx("input",{type:"text",value:Q.title,onChange:p=>$e({...Q,title:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Blue Samsonite Backpack"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Description"}),d.jsx("textarea",{value:Q.description,onChange:p=>$e({...Q,description:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Provide details like color, brand, distinguishing marks..."})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Category"}),d.jsx("select",{value:Q.category,onChange:p=>$e({...Q,category:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Qh.filter(p=>p!=="All").map(p=>d.jsx("option",{value:p,children:p},p))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Location"}),d.jsx("select",{value:Q.location,onChange:p=>$e({...Q,location:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Xh.filter(p=>p!=="All").map(p=>d.jsx("option",{value:p,children:p},p))})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Photos (Add more or remove existing)"}),d.jsxs("div",{className:"border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors",children:[d.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:pr,className:"hidden",id:"edit-image-upload"}),d.jsxs("label",{htmlFor:"edit-image-upload",className:"cursor-pointer flex flex-col items-center",children:[d.jsx(Ah,{className:"w-8 h-8 text-gray-400 mb-2"}),d.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Click to add more photos"})]})]}),Q.images.length>0&&d.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Q.images.map(p=>d.jsxs("div",{className:"relative aspect-square rounded-lg overflow-hidden group",children:[d.jsx("img",{src:p.url,alt:"Preview",className:"w-full h-full object-cover"}),d.jsx("button",{onClick:()=>Go(p.id),className:"absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(Pn,{className:"w-3 h-3"})})]},p.id))})]}),en.approvalStatus==="approved"&&d.jsx("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:d.jsx("p",{className:"text-sm text-yellow-800 dark:text-yellow-200",children:"⚠️ Note: Editing this item will require admin re-approval."})}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{onClick:()=>{zt(!1),cs(null),$e({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})},className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Cancel"}),d.jsx("button",{onClick:Wo,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold",children:"Save Changes"})]})]})})]})}),U&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[d.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Admin Dashboard"}),d.jsx("button",{onClick:()=>z(!1),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:d.jsx(Pn,{className:"w-6 h-6"})})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"Statistics"}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[d.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:[d.jsx("p",{className:"text-sm text-blue-600 dark:text-blue-400 mb-1",children:"Total Items"}),d.jsx("p",{className:"text-2xl font-bold text-blue-900 dark:text-blue-100",children:ge.length})]}),d.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800",children:[d.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-1",children:"Lost Items"}),d.jsx("p",{className:"text-2xl font-bold text-red-900 dark:text-red-100",children:ge.filter(p=>p.status==="lost").length})]}),d.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800",children:[d.jsx("p",{className:"text-sm text-green-600 dark:text-green-400 mb-1",children:"Found Items"}),d.jsx("p",{className:"text-2xl font-bold text-green-900 dark:text-green-100",children:ge.filter(p=>p.status==="found").length})]}),d.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800",children:[d.jsx("p",{className:"text-sm text-purple-600 dark:text-purple-400 mb-1",children:"Recovery Rate"}),d.jsxs("p",{className:"text-2xl font-bold text-purple-900 dark:text-purple-100",children:[ge.length>0?Math.round(ge.filter(p=>p.status==="returned"||p.claimed).length/ge.length*100):0,"%"]})]})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("h4",{className:"text-md font-semibold text-gray-900 dark:text-white",children:"Category Reports"}),d.jsx("button",{onClick:()=>{const p=ge.reduce((ye,le)=>{const Et=le.category||"Unknown";return ye[Et]||(ye[Et]={total:0,lost:0,found:0,returned:0}),ye[Et].total++,le.status==="lost"&&ye[Et].lost++,le.status==="found"&&ye[Et].found++,(le.status==="returned"||le.claimed)&&ye[Et].returned++,ye},{}),I=`Category,Total Items,Lost Items,Found Items,Returned Items,Recovery Rate
`,O=Object.entries(p).sort((ye,le)=>le[1].total-ye[1].total).map(([ye,le])=>{const Et=le.total>0?(le.returned/le.total*100).toFixed(1):"0.0";return`${ye},${le.total},${le.lost},${le.found},${le.returned},${Et}%`}).join(`
`),H=I+O,ne=new Blob([H],{type:"text/csv"}),X=window.URL.createObjectURL(ne),ve=document.createElement("a");ve.href=X,ve.download=`category-report-${new Date().toISOString().split("T")[0]}.csv`,ve.click(),window.URL.revokeObjectURL(X),J("Category report downloaded","success")},className:"px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition",children:"Download Report"})]}),d.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 mb-4",children:Object.entries(ge.reduce((p,I)=>{const O=I.category||"Unknown";return p[O]=(p[O]||0)+1,p},{})).sort((p,I)=>I[1]-p[1]).slice(0,4).map(([p,I])=>d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-3 rounded-lg",children:[d.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:p}),d.jsx("p",{className:"text-lg font-bold text-gray-900 dark:text-white",children:I})]},p))}),d.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto",children:d.jsxs("table",{className:"w-full text-sm",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[d.jsx("th",{className:"text-left py-2 px-2 text-gray-700 dark:text-gray-300",children:"Category"}),d.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Total"}),d.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Lost"}),d.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Found"}),d.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Returned"}),d.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Recovery %"})]})}),d.jsx("tbody",{children:Object.entries(ge.reduce((p,I)=>{const O=I.category||"Unknown";return p[O]||(p[O]={total:0,lost:0,found:0,returned:0}),p[O].total++,I.status==="lost"&&p[O].lost++,I.status==="found"&&p[O].found++,(I.status==="returned"||I.claimed)&&p[O].returned++,p},{})).sort((p,I)=>I[1].total-p[1].total).map(([p,I])=>{const O=I.total>0?(I.returned/I.total*100).toFixed(1):"0.0";return d.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-600",children:[d.jsx("td",{className:"py-2 px-2 font-medium text-gray-900 dark:text-white",children:p}),d.jsx("td",{className:"py-2 px-2 text-right text-gray-700 dark:text-gray-300",children:I.total}),d.jsx("td",{className:"py-2 px-2 text-right text-red-600 dark:text-red-400",children:I.lost}),d.jsx("td",{className:"py-2 px-2 text-right text-green-600 dark:text-green-400",children:I.found}),d.jsx("td",{className:"py-2 px-2 text-right text-blue-600 dark:text-blue-400",children:I.returned}),d.jsxs("td",{className:"py-2 px-2 text-right font-semibold text-gray-900 dark:text-white",children:[O,"%"]})]},p)})})]})})]}),d.jsxs("div",{className:"mb-8",children:[d.jsx("h4",{className:"text-md font-semibold mb-3 text-gray-900 dark:text-white",children:"Items This Month"}),d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[d.jsx("p",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:ge.filter(p=>{if(!p.date)return!1;const I=new Date(p.date),O=new Date;return I.getMonth()===O.getMonth()&&I.getFullYear()===O.getFullYear()}).length}),d.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:["Items reported in ",new Date().toLocaleString("default",{month:"long",year:"numeric"})]})]})]}),d.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"Pending Approvals"}),d.jsx("div",{className:"space-y-4 mb-8",children:ge.filter(p=>p.approvalStatus==="pending").length===0?d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No pending items."}):ge.filter(p=>p.approvalStatus==="pending").map(p=>d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex gap-4 items-center",children:[d.jsx("img",{src:p.image||Sr,alt:p.title,className:"w-16 h-16 rounded object-cover"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-bold text-gray-900 dark:text-white",children:p.title}),d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:p.description}),d.jsxs("p",{className:"text-xs text-gray-400",children:["By: ",p.ownerName," (",p.ownerEmail,")"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:async()=>{try{await ks(yt(_e,"items",p.id),{approvalStatus:"approved"}),await fn("approve","item",p.id,{title:p.title}),dn(ge.map(I=>I.id===p.id?{...I,approvalStatus:"approved"}:I)),J("Item approved","success")}catch(I){console.error("Error approving item:",I),J(`Failed to approve: ${I.message}`,"error")}},className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"Approve"}),d.jsx("button",{onClick:async()=>{try{await ks(yt(_e,"items",p.id),{approvalStatus:"rejected"}),await fn("reject","item",p.id,{title:p.title}),dn(ge.map(I=>I.id===p.id?{...I,approvalStatus:"rejected"}:I)),J("Item rejected","info")}catch(I){console.error("Error rejecting item:",I),J(`Failed to reject: ${I.message}`,"error")}},className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"Reject"})]})]},p.id))}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-3",children:[d.jsx("h4",{className:"text-md font-semibold text-gray-900 dark:text-white",children:"Archive Management"}),d.jsx("button",{onClick:async()=>{const p=new Date;p.setDate(p.getDate()-90);const I=ge.filter(O=>O.date?new Date(O.date)<p&&!O.archived:!1);if(I.length===0){J("No items to archive (older than 90 days)","info");return}if(window.confirm(`Archive ${I.length} item(s) older than 90 days?`))try{const O=I.map(H=>ks(yt(_e,"items",H.id),{archived:!0,archivedAt:new Date}));await Promise.all(O),J(`${I.length} item(s) archived successfully`,"success")}catch(O){console.error("Error archiving items:",O),J("Failed to archive items","error")}},className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:"Archive Old Items (90+ days)"})]}),d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[d.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Items older than 90 days: ",d.jsx("span",{className:"font-bold text-gray-900 dark:text-white",children:ge.filter(p=>{if(!p.date||p.archived)return!1;const I=new Date(p.date),O=new Date;return O.setDate(O.getDate()-90),I<O}).length})]}),d.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Archived items: ",ge.filter(p=>p.archived).length]})]})]}),d.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"User Management"}),d.jsx("div",{className:"space-y-4",children:m.map(p=>{const I=ge.filter(O=>O.ownerEmail===p.email);return d.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:d.jsxs("div",{className:"flex justify-between items-start mb-2",children:[d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:p.name}),d.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:p.email}),d.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${p.role==="admin"?"bg-purple-100 text-purple-800":"bg-gray-200 text-gray-800"}`,children:p.role||"user"}),d.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:[I.length," item",I.length!==1?"s":""," reported"]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>{if(I.length===0){J("No items to download for this user","info");return}const O=`Title,Description,Category,Location,Status,Date Reported,Approval Status
`,H=I.sort((le,Et)=>new Date(Et.date||0)-new Date(le.date||0)).map(le=>`"${(le.title||"").replace(/"/g,'""')}","${(le.description||"").replace(/"/g,'""')}","${le.category||""}","${le.location||""}","${le.status||""}","${le.date||""}","${le.approvalStatus||"approved"}"`).join(`
`),ne=O+H,X=new Blob([ne],{type:"text/csv"}),ve=window.URL.createObjectURL(X),ye=document.createElement("a");ye.href=ve,ye.download=`user-history-${p.email.replace("@","-at-")}-${new Date().toISOString().split("T")[0]}.csv`,ye.click(),window.URL.revokeObjectURL(ve),J(`History report downloaded for ${p.name}`,"success")},className:"px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition",title:"Download User History",children:"📥 Download"}),p.role!=="admin"&&d.jsx("button",{onClick:async()=>{if(p.id===Ye.currentUser.uid){J("Cannot suspend your own admin account.","error");return}const O=p.isSuspended?"Unsuspend":"Suspend";if(window.confirm(`Are you sure you want to ${O} this user?`))try{await ks(yt(_e,"users",p.id),{isSuspended:!p.isSuspended}),await fn(p.isSuspended?"unsuspend":"suspend","user",p.id,{userEmail:p.email,userName:p.name}),J(`User ${O.toLowerCase()}ed successfully!`,"success")}catch(H){console.error(`Error ${O.toLowerCase()}ing user:`,H),J(`Failed to ${O.toLowerCase()} user.`,"error")}},className:`px-3 py-1 border rounded hover:opacity-80 transition ${p.isSuspended?"border-green-300 text-green-600 hover:bg-green-50":"border-red-300 text-red-600 hover:bg-red-50"}`,children:p.isSuspended?"Unsuspend":"Suspend"})]})]})},p.email)})}),d.jsxs("div",{className:"mt-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Audit Logs"}),d.jsxs("button",{onClick:()=>Z(!B),className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:[B?"Hide":"View"," Audit Logs"]})]}),B&&d.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto",children:Nn.length===0?d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No audit logs yet."}):d.jsx("div",{className:"space-y-2",children:Nn.slice(0,50).map(p=>{var I,O,H;return d.jsxs("div",{className:"text-xs border-b border-gray-200 dark:border-gray-600 pb-2",children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:p.action.toUpperCase()})," ",d.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:p.resourceType})," ",d.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:["by ",p.userName||p.userEmail]})]}),d.jsx("span",{className:"text-gray-500 dark:text-gray-500 ml-2",children:((H=(O=(I=p.timestamp)==null?void 0:I.toDate)==null?void 0:O.call(I))==null?void 0:H.toLocaleString())||"N/A"})]}),p.details&&Object.keys(p.details).length>0&&d.jsx("div",{className:"text-gray-500 dark:text-gray-400 mt-1 pl-4",children:JSON.stringify(p.details)})]},p.id)})})})]}),d.jsxs("div",{className:"mt-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Audit Logs"}),d.jsxs("button",{onClick:()=>Z(!B),className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:[B?"Hide":"View"," Audit Logs"]})]}),B&&d.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto mb-6",children:Nn.length===0?d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No audit logs yet."}):d.jsx("div",{className:"space-y-2",children:Nn.slice(0,50).map(p=>{var I,O,H;return d.jsxs("div",{className:"text-xs border-b border-gray-200 dark:border-gray-600 pb-2",children:[d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:p.action.toUpperCase()})," ",d.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:p.resourceType})," ",d.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:["by ",p.userName||p.userEmail]})]}),d.jsx("span",{className:"text-gray-500 dark:text-gray-500 ml-2",children:((H=(O=(I=p.timestamp)==null?void 0:I.toDate)==null?void 0:O.call(I))==null?void 0:H.toLocaleString())||"N/A"})]}),p.details&&Object.keys(p.details).length>0&&d.jsx("div",{className:"text-gray-500 dark:text-gray-400 mt-1 pl-4",children:JSON.stringify(p.details)})]},p.id)})})})]}),d.jsxs("div",{className:"mt-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-4",children:[d.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Announcements"}),d.jsx("button",{onClick:()=>{k(null),tt({title:"",message:"",type:"info"}),N(!0)},className:"px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition",children:"+ New Announcement"})]}),d.jsx("div",{className:"space-y-3",children:b.length===0?d.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No announcements yet."}):b.map(p=>{var I,O,H;return d.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-start",children:[d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("h4",{className:"font-bold text-gray-900 dark:text-white",children:p.title}),d.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${p.type==="warning"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":p.type==="reminder"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"}`,children:p.type})]}),d.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:p.message}),d.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-500 mt-1",children:["Created: ",((H=(O=(I=p.createdAt)==null?void 0:I.toDate)==null?void 0:O.call(I))==null?void 0:H.toLocaleDateString())||"N/A"]})]}),d.jsxs("div",{className:"flex gap-2 ml-4",children:[d.jsx("button",{onClick:()=>{k(p),tt({title:p.title,message:p.message,type:p.type}),N(!0)},className:"px-2 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded text-sm",children:"Edit"}),d.jsx("button",{onClick:()=>Qo(p.id),className:"px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-sm",children:"Delete"})]})]},p.id)})})]})]})]})}),E&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full p-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:A?"Edit Announcement":"Create Announcement"}),d.jsx("button",{onClick:()=>{N(!1),k(null),tt({title:"",message:"",type:"info"})},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:d.jsx(Pn,{className:"w-6 h-6"})})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),d.jsx("input",{type:"text",value:fe.title,onChange:p=>tt({...fe,title:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Unclaimed items policy"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),d.jsx("textarea",{value:fe.message,onChange:p=>tt({...fe,message:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Enter announcement message..."})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Type"}),d.jsxs("select",{value:fe.type,onChange:p=>tt({...fe,type:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[d.jsx("option",{value:"info",children:"Info"}),d.jsx("option",{value:"warning",children:"Warning"}),d.jsx("option",{value:"reminder",children:"Reminder"})]})]}),d.jsxs("div",{className:"flex gap-4 pt-4",children:[d.jsx("button",{onClick:()=>{N(!1),k(null),tt({title:"",message:"",type:"info"})},className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Cancel"}),d.jsxs("button",{onClick:mr,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold",children:[A?"Update":"Create"," Announcement"]})]})]})]})}),t&&d.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[d.jsx("div",{className:"flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6",children:["all","lost","found"].map(p=>d.jsxs("button",{onClick:()=>ni(p),className:`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition duration-200 ${qe===p?"bg-blue-600 text-white shadow-md":y?"bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700":"bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`,children:[p.charAt(0).toUpperCase()+p.slice(1)," Items"]},p))}),d.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 mb-8",children:[d.jsx("div",{className:"w-full lg:w-1/4",children:d.jsxs("div",{className:`${y?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} rounded-xl p-3 sm:p-4 shadow-lg sticky top-16 sm:top-20`,children:[d.jsx("h3",{className:`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${y?"text-white":"text-gray-900"}`,children:"Filters & Search"}),d.jsxs("div",{className:"relative mb-4",children:[d.jsx(iy,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),d.jsx("input",{type:"text",placeholder:"Search titles or descriptions...",value:ei,onChange:p=>Uc(p.target.value),className:`w-full pl-10 pr-4 py-2 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500`})]}),d.jsxs("div",{className:"mb-4",children:[d.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${y?"text-gray-300":"text-gray-700"}`,children:[d.jsx(_a,{size:16})," Category"]}),d.jsx("select",{value:hs,onChange:p=>aa(p.target.value),className:`w-full px-4 py-2 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:Qh.map(p=>d.jsx("option",{value:p,children:p},p))})]}),d.jsxs("div",{className:"mb-4",children:[d.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${y?"text-gray-300":"text-gray-700"}`,children:[d.jsx(Ia,{size:16})," Location"]}),d.jsx("select",{value:ti,onChange:p=>nt(p.target.value),className:`w-full px-4 py-2 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:Xh.map(p=>d.jsx("option",{value:p,children:p},p))})]}),d.jsxs("div",{className:"mb-4",children:[d.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${y?"text-gray-300":"text-gray-700"}`,children:[d.jsx(eT,{size:16})," Sort By"]}),d.jsxs("select",{value:Bn,onChange:p=>Vc(p.target.value),className:`w-full px-4 py-2 rounded-lg border ${y?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:[d.jsx("option",{value:"newest",children:"Newest First"}),d.jsx("option",{value:"oldest",children:"Oldest First"}),d.jsx("option",{value:"title",children:"Title (A-Z)"}),d.jsx("option",{value:"category",children:"Category"})]})]}),d.jsx("div",{className:"mb-6",children:d.jsxs("button",{onClick:()=>Bo(!fs),className:`w-full px-4 py-3 rounded-xl transition flex items-center justify-center gap-2 font-semibold shadow-md ${fs?"bg-blue-600 text-white hover:bg-blue-700":y?"bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`,children:[d.jsx(Ph,{size:18}),fs?"Show All Posts":"Show My Posts Only"]})}),d.jsxs("button",{onClick:()=>Jt(!0),className:"w-full px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-bold shadow-md",children:[d.jsx(Ah,{size:20}),"New Lost/Found Post"]})]})}),d.jsxs("div",{className:"w-full lg:w-3/4",children:[d.jsx("div",{className:"flex justify-between items-center mb-3 sm:mb-4",children:d.jsxs("h2",{className:`text-lg sm:text-xl md:text-2xl font-bold ${y?"text-white":"text-gray-900"} break-words`,children:[fs?"My Posts":qe.charAt(0).toUpperCase()+qe.slice(1)+" Items"," (",Hn.length,")"]})}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:Hn.map(p=>d.jsx(In,{item:p},p.id))}),Hn.length===0&&d.jsxs("div",{className:`text-center py-12 ${y?"bg-gray-800 border-gray-700 text-gray-400":"bg-white border-gray-200 text-gray-500"} border rounded-xl shadow-lg`,children:[d.jsx("p",{className:"text-xl font-semibold mb-2",children:"Nothing found here!"}),d.jsx("p",{children:"Try adjusting your search query or filters."})]})]})]})]}),d.jsx("div",{className:"fixed bottom-4 right-2 sm:right-4 left-2 sm:left-auto z-50 flex flex-col gap-2 max-w-[calc(100vw-1rem)] sm:max-w-none",children:Fc.map(p=>d.jsxs("div",{className:`px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:min-w-[300px] animate-slide-in text-sm sm:text-base ${p.type==="success"?"bg-green-500 text-white":p.type==="error"?"bg-red-500 text-white":"bg-blue-500 text-white"}`,children:[d.jsx(Ch,{size:18,className:"sm:w-5 sm:h-5 flex-shrink-0"}),d.jsx("span",{className:"font-medium truncate",children:p.message})]},p.id))}),qo&&Te&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4",children:d.jsxs("div",{className:`${y?"bg-gray-800":"bg-white"} rounded-xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl`,children:[d.jsxs("div",{className:"sticky top-0 bg-inherit border-b border-gray-300 dark:border-gray-700 p-4 sm:p-6 flex justify-between items-center",children:[d.jsx("h2",{className:`text-xl sm:text-2xl font-bold ${y?"text-white":"text-gray-900"}`,children:"Item Details"}),d.jsx("button",{onClick:()=>fr(!1),className:`${y?"text-gray-400 hover:text-white":"text-gray-600 hover:text-gray-900"} p-1`,children:d.jsx(Pn,{size:20,className:"sm:w-6 sm:h-6"})})]}),d.jsxs("div",{className:"p-4 sm:p-6",children:[d.jsxs("div",{className:"mb-4 sm:mb-6",children:[d.jsx("img",{src:Te.image,alt:Te.title,className:"w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl mb-3 sm:mb-4",onError:p=>{p.target.onerror=null,p.target.src=Sr}}),Te.images&&Te.images.length>1&&d.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2",children:Te.images.slice(1,5).map((p,I)=>d.jsx("img",{src:p,alt:`${Te.title} ${I+2}`,className:"w-full h-16 sm:h-20 object-cover rounded-lg"},I))})]}),d.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4",children:[d.jsx("h3",{className:`text-xl sm:text-2xl md:text-3xl font-extrabold ${y?"text-white":"text-gray-900"} break-words`,children:Te.title}),d.jsx("span",{className:`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${Te.status==="lost"?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:(Te.status||"unknown").toUpperCase()})]}),d.jsx("p",{className:`text-base sm:text-lg ${y?"text-gray-300":"text-gray-700"}`,children:Te.description}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(_a,{size:20,className:y?"text-blue-400":"text-blue-600"}),d.jsxs("div",{children:[d.jsx("p",{className:`text-xs ${y?"text-gray-400":"text-gray-500"}`,children:"Category"}),d.jsx("p",{className:`font-semibold ${y?"text-white":"text-gray-900"}`,children:Te.category})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ia,{size:20,className:y?"text-yellow-400":"text-yellow-600"}),d.jsxs("div",{children:[d.jsx("p",{className:`text-xs ${y?"text-gray-400":"text-gray-500"}`,children:"Location"}),d.jsx("p",{className:`font-semibold ${y?"text-white":"text-gray-900"}`,children:Te.location})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(_h,{size:20,className:y?"text-purple-400":"text-purple-600"}),d.jsxs("div",{children:[d.jsx("p",{className:`text-xs ${y?"text-gray-400":"text-gray-500"}`,children:"Reported Date"}),d.jsx("p",{className:`font-semibold ${y?"text-white":"text-gray-900"}`,children:Te.date?new Date(Te.date).toLocaleDateString():"N/A"})]})]}),Te.ownerName&&d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ph,{size:20,className:y?"text-green-400":"text-green-600"}),d.jsxs("div",{children:[d.jsx("p",{className:`text-xs ${y?"text-gray-400":"text-gray-500"}`,children:"Posted By"}),d.jsx("p",{className:`font-semibold ${y?"text-white":"text-gray-900"}`,children:Te.ownerName})]})]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700",children:[Te.ownerEmail===(j==null?void 0:j.email)?d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>gs(Te),className:"w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[d.jsx(aT,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Edit Item"]}),d.jsxs("button",{onClick:()=>rt(Te.id),className:"w-full sm:flex-1 bg-red-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[d.jsx(oy,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Delete Item"]})]}):d.jsxs("button",{onClick:()=>Ko(Te),className:"w-full sm:flex-1 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[d.jsx(sT,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Contact Owner"]}),!Te.claimed&&d.jsxs("button",{onClick:()=>{Ho(Te.id),fr(!1)},className:"w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[d.jsx(Ch,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Mark as Claimed"]})]})]})]})]})}),d.jsx("footer",{className:`py-8 border-t ${y?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} mt-12`,children:d.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[d.jsx("p",{className:`text-sm ${y?"text-gray-400":"text-gray-500"}`,children:"© 2024 FAST Lost & Found System. All rights reserved."}),d.jsx("div",{className:"mt-4 flex justify-center gap-4",children:d.jsx("button",{onClick:()=>w("admin-login"),className:`text-xs ${y?"text-gray-600 hover:text-purple-400":"text-gray-400 hover:text-purple-600"} transition`,children:"Admin Access"})})]})})]})}window.auth=Ye;Yh.createRoot(document.getElementById("root")).render(d.jsx(Vk.StrictMode,{children:d.jsx(mR,{})}));
