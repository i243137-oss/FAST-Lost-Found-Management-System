(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function IT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nv={exports:{}},Qu={},rv={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),ST=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),AT=Symbol.for("react.strict_mode"),CT=Symbol.for("react.profiler"),bT=Symbol.for("react.provider"),NT=Symbol.for("react.context"),RT=Symbol.for("react.forward_ref"),PT=Symbol.for("react.suspense"),DT=Symbol.for("react.memo"),VT=Symbol.for("react.lazy"),Km=Symbol.iterator;function OT(t){return t===null||typeof t!="object"?null:(t=Km&&t[Km]||t["@@iterator"],typeof t=="function"?t:null)}var sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,ov={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||sv}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=Ji.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||sv}var Ef=wf.prototype=new av;Ef.constructor=wf;iv(Ef,Ji.prototype);Ef.isPureReactComponent=!0;var Qm=Array.isArray,lv=Object.prototype.hasOwnProperty,xf={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)lv.call(e,r)&&!uv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Aa,type:t,key:i,ref:o,props:s,_owner:xf.current}}function LT(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function MT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ym=/\/+/g;function nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?MT(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case ST:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+nd(o,0):r,Qm(s)?(n="",t!=null&&(n=t.replace(Ym,"$&/")+"/"),Pl(s,e,n,"",function(c){return c})):s!=null&&(Tf(s)&&(s=LT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ym,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Qm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+nd(i,l);o+=Pl(i,e,n,u,s)}else if(u=OT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+nd(i,l++),o+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function jT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},Dl={transition:null},FT={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:xf};function dv(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Ji;ue.Fragment=kT;ue.Profiler=CT;ue.PureComponent=wf;ue.StrictMode=AT;ue.Suspense=PT;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;ue.act=dv;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=xf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)lv.call(e,u)&&!uv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Aa,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:NT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bT,_context:t},t.Consumer=t};ue.createElement=cv;ue.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:RT,render:t}};ue.isValidElement=Tf;ue.lazy=function(t){return{$$typeof:VT,_payload:{_status:-1,_result:t},_init:jT}};ue.memo=function(t,e){return{$$typeof:DT,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};ue.unstable_act=dv;ue.useCallback=function(t,e){return Ct.current.useCallback(t,e)};ue.useContext=function(t){return Ct.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Ct.current.useEffect(t,e)};ue.useId=function(){return Ct.current.useId()};ue.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Ct.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};ue.useRef=function(t){return Ct.current.useRef(t)};ue.useState=function(t){return Ct.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Ct.current.useTransition()};ue.version="18.3.1";rv.exports=ue;var re=rv.exports;const UT=IT(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=re,zT=Symbol.for("react.element"),BT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,HT=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WT={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qT.call(e,r)&&!WT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:zT,type:t,key:i,ref:o,props:s,_owner:HT.current}}Qu.Fragment=BT;Qu.jsx=hv;Qu.jsxs=hv;nv.exports=Qu;var h=nv.exports,Xd={},fv={exports:{}},Yt={},pv={exports:{}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,J){var ae=H.length;H.push(J);e:for(;0<ae;){var Ee=ae-1>>>1,De=H[Ee];if(0<s(De,J))H[Ee]=J,H[ae]=De,ae=Ee;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var J=H[0],ae=H.pop();if(ae!==J){H[0]=ae;e:for(var Ee=0,De=H.length,Jt=De>>>1;Ee<Jt;){var It=2*(Ee+1)-1,Zt=H[It],Ut=It+1,$t=H[Ut];if(0>s(Zt,ae))Ut<De&&0>s($t,Zt)?(H[Ee]=$t,H[Ut]=ae,Ee=Ut):(H[Ee]=Zt,H[It]=ae,Ee=It);else if(Ut<De&&0>s($t,ae))H[Ee]=$t,H[Ut]=ae,Ee=Ut;else break e}}return J}function s(H,J){var ae=H.sortIndex-J.sortIndex;return ae!==0?ae:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],m=1,y=null,p=3,A=!1,P=!1,V=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=H)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function j(H){if(V=!1,C(H),!P)if(n(u)!==null)P=!0,kn($);else{var J=n(c);J!==null&&ei(j,J.startTime-H)}}function $(H,J){P=!1,V&&(V=!1,S(_),_=-1),A=!0;var ae=p;try{for(C(J),y=n(u);y!==null&&(!(y.expirationTime>J)||H&&!k());){var Ee=y.callback;if(typeof Ee=="function"){y.callback=null,p=y.priorityLevel;var De=Ee(y.expirationTime<=J);J=t.unstable_now(),typeof De=="function"?y.callback=De:y===n(u)&&r(u),C(J)}else r(u);y=n(u)}if(y!==null)var Jt=!0;else{var It=n(c);It!==null&&ei(j,It.startTime-J),Jt=!1}return Jt}finally{y=null,p=ae,A=!1}}var B=!1,w=null,_=-1,x=5,I=-1;function k(){return!(t.unstable_now()-I<x)}function N(){if(w!==null){var H=t.unstable_now();I=H;var J=!0;try{J=w(!0,H)}finally{J?T():(B=!1,w=null)}}else B=!1}var T;if(typeof E=="function")T=function(){E(N)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,nt=fe.port2;fe.port1.onmessage=N,T=function(){nt.postMessage(null)}}else T=function(){D(N,0)};function kn(H){w=H,B||(B=!0,T())}function ei(H,J){_=D(function(){H(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,kn($))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var ae=p;p=J;try{return H()}finally{p=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=p;p=H;try{return J()}finally{p=ae}},t.unstable_scheduleCallback=function(H,J,ae){var Ee=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ee+ae:Ee):ae=Ee,H){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=ae+De,H={id:m++,callback:J,priorityLevel:H,startTime:ae,expirationTime:De,sortIndex:-1},ae>Ee?(H.sortIndex=ae,e(c,H),n(u)===null&&H===n(c)&&(V?(S(_),_=-1):V=!0,ei(j,ae-Ee))):(H.sortIndex=De,e(u,H),P||A||(P=!0,kn($))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var J=p;return function(){var ae=p;p=J;try{return H.apply(this,arguments)}finally{p=ae}}}})(mv);pv.exports=mv;var GT=pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT=re,Qt=GT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,na={};function Gs(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(na[t]=e,t=0;t<e.length;t++)gv.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,QT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},Jm={};function YT(t){return Jd.call(Jm,t)?!0:Jd.call(Xm,t)?!1:QT.test(t)?Jm[t]=!0:(Xm[t]=!0,!1)}function XT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JT(t,e,n,r){if(e===null||typeof e>"u"||XT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Sf);ft[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Sf);ft[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Sf);ft[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kf(t,e,n,r){var s=ft.hasOwnProperty(e)?ft[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JT(e,n,s,r)&&(n=null),r||s===null?YT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=KT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),_v=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,rd;function Ro(t){if(rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rd=e&&e[1]||""}return`
`+rd+t}var sd=!1;function id(t,e){if(!t||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function ZT(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=id(t.type,!1),t;case 11:return t=id(t.type.render,!1),t;case 1:return t=id(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case fi:return"Portal";case Zd:return"Profiler";case Af:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case yv:return(t._context.displayName||"Context")+".Provider";case Cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bf:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function eI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tI(t){var e=wv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=tI(t))}function Ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(t,e){e=e.checked,e!=null&&kf(t,"checked",e,!1)}function sh(t,e){xv(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Po(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function Tv(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,Sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nI=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){nI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function Av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var rI=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(rI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Ai=null,Ci=null;function sg(t){if(t=Na(t)){if(typeof dh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ec(e),dh(t.stateNode,t.type,e))}}function Cv(t){Ai?Ci?Ci.push(t):Ci=[t]:Ai=t}function bv(){if(Ai){var t=Ai,e=Ci;if(Ci=Ai=null,sg(t),e)for(t=0;t<e.length;t++)sg(e[t])}}function Nv(t,e){return t(e)}function Rv(){}var od=!1;function Pv(t,e,n){if(od)return t(e,n);od=!0;try{return Nv(t,e,n)}finally{od=!1,(Ai!==null||Ci!==null)&&(Rv(),bv())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var r=ec(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var hh=!1;if(nr)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){hh=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{hh=!1}function sI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(m){this.onError(m)}}var zo=!1,tu=null,nu=!1,fh=null,iI={onError:function(t){zo=!0,tu=t}};function oI(t,e,n,r,s,i,o,l,u){zo=!1,tu=null,sI.apply(iI,arguments)}function aI(t,e,n,r,s,i,o,l,u){if(oI.apply(this,arguments),zo){if(zo){var c=tu;zo=!1,tu=null}else throw Error(U(198));nu||(nu=!0,fh=c)}}function Ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ig(t){if(Ks(t)!==t)throw Error(U(188))}function lI(t){var e=t.alternate;if(!e){if(e=Ks(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ig(s),t;if(i===r)return ig(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Vv(t){return t=lI(t),t!==null?Ov(t):null}function Ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ov(t);if(e!==null)return e;t=t.sibling}return null}var Lv=Qt.unstable_scheduleCallback,og=Qt.unstable_cancelCallback,uI=Qt.unstable_shouldYield,cI=Qt.unstable_requestPaint,We=Qt.unstable_now,dI=Qt.unstable_getCurrentPriorityLevel,Rf=Qt.unstable_ImmediatePriority,Mv=Qt.unstable_UserBlockingPriority,ru=Qt.unstable_NormalPriority,hI=Qt.unstable_LowPriority,jv=Qt.unstable_IdlePriority,Yu=null,On=null;function fI(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Yu,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:gI,pI=Math.log,mI=Math.LN2;function gI(t){return t>>>=0,t===0?32:31-(pI(t)/mI|0)|0}var dl=64,hl=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Do(l):(i&=o,i!==0&&(r=Do(i)))}else o=n&~s,o!==0?r=Do(o):i!==0&&(r=Do(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),s=1<<n,r|=t[n],e&=~s;return r}function yI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-wn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=yI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fv(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function _I(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-wn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function Uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $v,Df,zv,Bv,qv,mh=!1,fl=[],Or=null,Lr=null,Mr=null,ia=new Map,oa=new Map,kr=[],wI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(e.pointerId)}}function To(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Na(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function EI(t,e,n,r,s){switch(e){case"focusin":return Or=To(Or,t,e,n,r,s),!0;case"dragenter":return Lr=To(Lr,t,e,n,r,s),!0;case"mouseover":return Mr=To(Mr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ia.set(i,To(ia.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,oa.set(i,To(oa.get(i)||null,t,e,n,r,s)),!0}return!1}function Hv(t){var e=As(t.target);if(e!==null){var n=Ks(e);if(n!==null){if(e=n.tag,e===13){if(e=Dv(n),e!==null){t.blockedOn=e,qv(t.priority,function(){zv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=Na(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){Vl(t)&&n.delete(e)}function xI(){mh=!1,Or!==null&&Vl(Or)&&(Or=null),Lr!==null&&Vl(Lr)&&(Lr=null),Mr!==null&&Vl(Mr)&&(Mr=null),ia.forEach(lg),oa.forEach(lg)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,xI)))}function aa(t){function e(s){return Io(s,t)}if(0<fl.length){Io(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&Io(Or,t),Lr!==null&&Io(Lr,t),Mr!==null&&Io(Mr,t),ia.forEach(e),oa.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)Hv(n),n.blockedOn===null&&kr.shift()}var bi=dr.ReactCurrentBatchConfig,iu=!0;function TI(t,e,n,r){var s=we,i=bi.transition;bi.transition=null;try{we=1,Vf(t,e,n,r)}finally{we=s,bi.transition=i}}function II(t,e,n,r){var s=we,i=bi.transition;bi.transition=null;try{we=4,Vf(t,e,n,r)}finally{we=s,bi.transition=i}}function Vf(t,e,n,r){if(iu){var s=gh(t,e,n,r);if(s===null)yd(t,e,r,ou,n),ag(t,r);else if(EI(s,t,e,n,r))r.stopPropagation();else if(ag(t,r),e&4&&-1<wI.indexOf(t)){for(;s!==null;){var i=Na(s);if(i!==null&&$v(i),i=gh(t,e,n,r),i===null&&yd(t,e,r,ou,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else yd(t,e,r,null,n)}}var ou=null;function gh(t,e,n,r){if(ou=null,t=Nf(r),t=As(t),t!==null)if(e=Ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function Wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dI()){case Rf:return 1;case Mv:return 4;case ru:case hI:return 16;case jv:return 536870912;default:return 16}default:return 16}}var Pr=null,Of=null,Ol=null;function Gv(){if(Ol)return Ol;var t,e=Of,n=e.length,r,s="value"in Pr?Pr.value:Pr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ol=s.slice(t,1<r?1-r:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function ug(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pl:ug,this.isPropagationStopped=ug,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Xt(Zi),ba=Le({},Zi,{view:0,detail:0}),SI=Xt(ba),ld,ud,So,Xu=Le({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(ld=t.screenX-So.screenX,ud=t.screenY-So.screenY):ud=ld=0,So=t),ld)},movementY:function(t){return"movementY"in t?t.movementY:ud}}),cg=Xt(Xu),kI=Le({},Xu,{dataTransfer:0}),AI=Xt(kI),CI=Le({},ba,{relatedTarget:0}),cd=Xt(CI),bI=Le({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),NI=Xt(bI),RI=Le({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PI=Xt(RI),DI=Le({},Zi,{data:0}),dg=Xt(DI),VI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LI[t])?!!e[t]:!1}function Mf(){return MI}var jI=Le({},ba,{key:function(t){if(t.key){var e=VI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FI=Xt(jI),UI=Le({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=Xt(UI),$I=Le({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),zI=Xt($I),BI=Le({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),qI=Xt(BI),HI=Le({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WI=Xt(HI),GI=[9,13,27,32],jf=nr&&"CompositionEvent"in window,Bo=null;nr&&"documentMode"in document&&(Bo=document.documentMode);var KI=nr&&"TextEvent"in window&&!Bo,Kv=nr&&(!jf||Bo&&8<Bo&&11>=Bo),fg=" ",pg=!1;function Qv(t,e){switch(t){case"keyup":return GI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function QI(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(pg=!0,fg);case"textInput":return t=e.data,t===fg&&pg?null:t;default:return null}}function YI(t,e){if(mi)return t==="compositionend"||!jf&&Qv(t,e)?(t=Gv(),Ol=Of=Pr=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var XI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XI[t.type]:e==="textarea"}function Xv(t,e,n,r){Cv(r),e=au(e,"onChange"),0<e.length&&(n=new Lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,la=null;function JI(t){l_(t,0)}function Ju(t){var e=vi(t);if(Ev(e))return t}function ZI(t,e){if(t==="change")return e}var Jv=!1;if(nr){var dd;if(nr){var hd="oninput"in document;if(!hd){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),hd=typeof gg.oninput=="function"}dd=hd}else dd=!1;Jv=dd&&(!document.documentMode||9<document.documentMode)}function yg(){qo&&(qo.detachEvent("onpropertychange",Zv),la=qo=null)}function Zv(t){if(t.propertyName==="value"&&Ju(la)){var e=[];Xv(e,la,t,Nf(t)),Pv(JI,e)}}function e1(t,e,n){t==="focusin"?(yg(),qo=e,la=n,qo.attachEvent("onpropertychange",Zv)):t==="focusout"&&yg()}function t1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ju(la)}function n1(t,e){if(t==="click")return Ju(e)}function r1(t,e){if(t==="input"||t==="change")return Ju(e)}function s1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xn=typeof Object.is=="function"?Object.is:s1;function ua(t,e){if(xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jd.call(e,s)||!xn(t[s],e[s]))return!1}return!0}function vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _g(t,e){var n=vg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vg(n)}}function e_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t_(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function i1(t){var e=t_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e_(n.ownerDocument.documentElement,n)){if(r!==null&&Ff(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=_g(n,i);var o=_g(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o1=nr&&"documentMode"in document&&11>=document.documentMode,gi=null,yh=null,Ho=null,vh=!1;function wg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vh||gi==null||gi!==eu(r)||(r=gi,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&ua(Ho,r)||(Ho=r,r=au(yh,"onSelect"),0<r.length&&(e=new Lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gi)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yi={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},fd={},n_={};nr&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Zu(t){if(fd[t])return fd[t];if(!yi[t])return t;var e=yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n_)return fd[t]=e[n];return t}var r_=Zu("animationend"),s_=Zu("animationiteration"),i_=Zu("animationstart"),o_=Zu("transitionend"),a_=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){a_.set(t,e),Gs(e,[t])}for(var pd=0;pd<Eg.length;pd++){var md=Eg[pd],a1=md.toLowerCase(),l1=md[0].toUpperCase()+md.slice(1);ns(a1,"on"+l1)}ns(r_,"onAnimationEnd");ns(s_,"onAnimationIteration");ns(i_,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(o_,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aI(r,e,void 0,t),t.currentTarget=null}function l_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;xg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;xg(s,l,c),i=u}}}if(nu)throw t=fh,nu=!1,fh=null,t}function be(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var r=t+"__bubble";n.has(r)||(u_(e,t,2,!1),n.add(r))}function gd(t,e,n){var r=0;e&&(r|=4),u_(n,t,r,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[gl]){t[gl]=!0,gv.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||gd(n,!1,t),gd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,gd("selectionchange",!1,e))}}function u_(t,e,n,r){switch(Wv(e)){case 1:var s=TI;break;case 4:s=II;break;default:s=Vf}n=s.bind(null,e,n,t),s=void 0,!hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=As(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Pv(function(){var c=i,m=Nf(n),y=[];e:{var p=a_.get(t);if(p!==void 0){var A=Lf,P=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":A=FI;break;case"focusin":P="focus",A=cd;break;case"focusout":P="blur",A=cd;break;case"beforeblur":case"afterblur":A=cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=AI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=zI;break;case r_:case s_:case i_:A=NI;break;case o_:A=qI;break;case"scroll":A=SI;break;case"wheel":A=WI;break;case"copy":case"cut":case"paste":A=PI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=hg}var V=(e&4)!==0,D=!V&&t==="scroll",S=V?p!==null?p+"Capture":null:p;V=[];for(var E=c,C;E!==null;){C=E;var j=C.stateNode;if(C.tag===5&&j!==null&&(C=j,S!==null&&(j=sa(E,S),j!=null&&V.push(da(E,j,C)))),D)break;E=E.return}0<V.length&&(p=new A(p,P,null,n,m),y.push({event:p,listeners:V}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",p&&n!==ch&&(P=n.relatedTarget||n.fromElement)&&(As(P)||P[rr]))break e;if((A||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=c,P=P?As(P):null,P!==null&&(D=Ks(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=c),A!==P)){if(V=cg,j="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=hg,j="onPointerLeave",S="onPointerEnter",E="pointer"),D=A==null?p:vi(A),C=P==null?p:vi(P),p=new V(j,E+"leave",A,n,m),p.target=D,p.relatedTarget=C,j=null,As(m)===c&&(V=new V(S,E+"enter",P,n,m),V.target=C,V.relatedTarget=D,j=V),D=j,A&&P)t:{for(V=A,S=P,E=0,C=V;C;C=li(C))E++;for(C=0,j=S;j;j=li(j))C++;for(;0<E-C;)V=li(V),E--;for(;0<C-E;)S=li(S),C--;for(;E--;){if(V===S||S!==null&&V===S.alternate)break t;V=li(V),S=li(S)}V=null}else V=null;A!==null&&Tg(y,p,A,V,!1),P!==null&&D!==null&&Tg(y,D,P,V,!0)}}e:{if(p=c?vi(c):window,A=p.nodeName&&p.nodeName.toLowerCase(),A==="select"||A==="input"&&p.type==="file")var $=ZI;else if(mg(p))if(Jv)$=r1;else{$=t1;var B=e1}else(A=p.nodeName)&&A.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=n1);if($&&($=$(t,c))){Xv(y,$,n,m);break e}B&&B(t,p,c),t==="focusout"&&(B=p._wrapperState)&&B.controlled&&p.type==="number"&&ih(p,"number",p.value)}switch(B=c?vi(c):window,t){case"focusin":(mg(B)||B.contentEditable==="true")&&(gi=B,yh=c,Ho=null);break;case"focusout":Ho=yh=gi=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,wg(y,n,m);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":wg(y,n,m)}var w;if(jf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else mi?Qv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kv&&n.locale!=="ko"&&(mi||_!=="onCompositionStart"?_==="onCompositionEnd"&&mi&&(w=Gv()):(Pr=m,Of="value"in Pr?Pr.value:Pr.textContent,mi=!0)),B=au(c,_),0<B.length&&(_=new dg(_,t,null,n,m),y.push({event:_,listeners:B}),w?_.data=w:(w=Yv(n),w!==null&&(_.data=w)))),(w=KI?QI(t,n):YI(t,n))&&(c=au(c,"onBeforeInput"),0<c.length&&(m=new dg("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:c}),m.data=w))}l_(y,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=sa(t,n),i!=null&&r.unshift(da(t,i,s)),i=sa(t,e),i!=null&&r.push(da(t,i,s))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=sa(n,i),u!=null&&o.unshift(da(n,u,l))):s||(u=sa(n,i),u!=null&&o.push(da(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(c1,`
`).replace(d1,"")}function yl(t,e,n){if(e=Ig(e),Ig(t)!==e&&n)throw Error(U(425))}function lu(){}var _h=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(t){return Sg.resolve(null).then(t).catch(p1)}:xh;function p1(t){setTimeout(function(){throw t})}function vd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);aa(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Vn="__reactFiber$"+eo,ha="__reactProps$"+eo,rr="__reactContainer$"+eo,Th="__reactEvents$"+eo,m1="__reactListeners$"+eo,g1="__reactHandles$"+eo;function As(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kg(t);t!==null;){if(n=t[Vn])return n;t=kg(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[Vn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ec(t){return t[ha]||null}var Ih=[],_i=-1;function rs(t){return{current:t}}function Re(t){0>_i||(t.current=Ih[_i],Ih[_i]=null,_i--)}function Ie(t,e){_i++,Ih[_i]=t.current,t.current=e}var Kr={},xt=rs(Kr),Ot=rs(!1),Ls=Kr;function ji(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function uu(){Re(Ot),Re(xt)}function Ag(t,e,n){if(xt.current!==Kr)throw Error(U(168));Ie(xt,e),Ie(Ot,n)}function c_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,eI(t)||"Unknown",s));return Le({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Ls=xt.current,Ie(xt,t),Ie(Ot,Ot.current),!0}function Cg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=c_(t,e,Ls),r.__reactInternalMemoizedMergedChildContext=t,Re(Ot),Re(xt),Ie(xt,t)):Re(Ot),Ie(Ot,n)}var Kn=null,tc=!1,_d=!1;function d_(t){Kn===null?Kn=[t]:Kn.push(t)}function y1(t){tc=!0,d_(t)}function ss(){if(!_d&&Kn!==null){_d=!0;var t=0,e=we;try{var n=Kn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,tc=!1}catch(s){throw Kn!==null&&(Kn=Kn.slice(t+1)),Lv(Rf,ss),s}finally{we=e,_d=!1}}return null}var wi=[],Ei=0,du=null,hu=0,tn=[],nn=0,Ms=null,Qn=1,Yn="";function Is(t,e){wi[Ei++]=hu,wi[Ei++]=du,du=t,hu=e}function h_(t,e,n){tn[nn++]=Qn,tn[nn++]=Yn,tn[nn++]=Ms,Ms=t;var r=Qn;t=Yn;var s=32-wn(r)-1;r&=~(1<<s),n+=1;var i=32-wn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qn=1<<32-wn(e)+s|n<<s|r,Yn=i+t}else Qn=1<<i|n<<s|r,Yn=t}function Uf(t){t.return!==null&&(Is(t,1),h_(t,1,0))}function $f(t){for(;t===du;)du=wi[--Ei],wi[Ei]=null,hu=wi[--Ei],wi[Ei]=null;for(;t===Ms;)Ms=tn[--nn],tn[nn]=null,Yn=tn[--nn],tn[nn]=null,Qn=tn[--nn],tn[nn]=null}var Gt=null,Ht=null,Pe=!1,vn=null;function f_(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Ht=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(Pe){var e=Ht;if(e){var n=e;if(!bg(t,e)){if(Sh(t))throw Error(U(418));e=jr(n.nextSibling);var r=Gt;e&&bg(t,e)?f_(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Gt=t)}}else{if(Sh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,Gt=t}}}function Ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function vl(t){if(t!==Gt)return!1;if(!Pe)return Ng(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=Ht)){if(Sh(t))throw p_(),Error(U(418));for(;e;)f_(t,e),e=jr(e.nextSibling)}if(Ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Gt?jr(t.stateNode.nextSibling):null;return!0}function p_(){for(var t=Ht;t;)t=jr(t.nextSibling)}function Fi(){Ht=Gt=null,Pe=!1}function zf(t){vn===null?vn=[t]:vn.push(t)}var v1=dr.ReactCurrentBatchConfig;function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rg(t){var e=t._init;return e(t._payload)}function m_(t){function e(S,E){if(t){var C=S.deletions;C===null?(S.deletions=[E],S.flags|=16):C.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=zr(S,E),S.index=0,S.sibling=null,S}function i(S,E,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<E?(S.flags|=2,E):C):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,C,j){return E===null||E.tag!==6?(E=kd(C,S.mode,j),E.return=S,E):(E=s(E,C),E.return=S,E)}function u(S,E,C,j){var $=C.type;return $===pi?m(S,E,C.props.children,j,C.key):E!==null&&(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ir&&Rg($)===E.type)?(j=s(E,C.props),j.ref=ko(S,E,C),j.return=S,j):(j=Bl(C.type,C.key,C.props,null,S.mode,j),j.ref=ko(S,E,C),j.return=S,j)}function c(S,E,C,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Ad(C,S.mode,j),E.return=S,E):(E=s(E,C.children||[]),E.return=S,E)}function m(S,E,C,j,$){return E===null||E.tag!==7?(E=Ds(C,S.mode,j,$),E.return=S,E):(E=s(E,C),E.return=S,E)}function y(S,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=kd(""+E,S.mode,C),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ll:return C=Bl(E.type,E.key,E.props,null,S.mode,C),C.ref=ko(S,null,E),C.return=S,C;case fi:return E=Ad(E,S.mode,C),E.return=S,E;case Ir:var j=E._init;return y(S,j(E._payload),C)}if(Po(E)||Eo(E))return E=Ds(E,S.mode,C,null),E.return=S,E;_l(S,E)}return null}function p(S,E,C,j){var $=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return $!==null?null:l(S,E,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ll:return C.key===$?u(S,E,C,j):null;case fi:return C.key===$?c(S,E,C,j):null;case Ir:return $=C._init,p(S,E,$(C._payload),j)}if(Po(C)||Eo(C))return $!==null?null:m(S,E,C,j,null);_l(S,C)}return null}function A(S,E,C,j,$){if(typeof j=="string"&&j!==""||typeof j=="number")return S=S.get(C)||null,l(E,S,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ll:return S=S.get(j.key===null?C:j.key)||null,u(E,S,j,$);case fi:return S=S.get(j.key===null?C:j.key)||null,c(E,S,j,$);case Ir:var B=j._init;return A(S,E,C,B(j._payload),$)}if(Po(j)||Eo(j))return S=S.get(C)||null,m(E,S,j,$,null);_l(E,j)}return null}function P(S,E,C,j){for(var $=null,B=null,w=E,_=E=0,x=null;w!==null&&_<C.length;_++){w.index>_?(x=w,w=null):x=w.sibling;var I=p(S,w,C[_],j);if(I===null){w===null&&(w=x);break}t&&w&&I.alternate===null&&e(S,w),E=i(I,E,_),B===null?$=I:B.sibling=I,B=I,w=x}if(_===C.length)return n(S,w),Pe&&Is(S,_),$;if(w===null){for(;_<C.length;_++)w=y(S,C[_],j),w!==null&&(E=i(w,E,_),B===null?$=w:B.sibling=w,B=w);return Pe&&Is(S,_),$}for(w=r(S,w);_<C.length;_++)x=A(w,S,_,C[_],j),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?_:x.key),E=i(x,E,_),B===null?$=x:B.sibling=x,B=x);return t&&w.forEach(function(k){return e(S,k)}),Pe&&Is(S,_),$}function V(S,E,C,j){var $=Eo(C);if(typeof $!="function")throw Error(U(150));if(C=$.call(C),C==null)throw Error(U(151));for(var B=$=null,w=E,_=E=0,x=null,I=C.next();w!==null&&!I.done;_++,I=C.next()){w.index>_?(x=w,w=null):x=w.sibling;var k=p(S,w,I.value,j);if(k===null){w===null&&(w=x);break}t&&w&&k.alternate===null&&e(S,w),E=i(k,E,_),B===null?$=k:B.sibling=k,B=k,w=x}if(I.done)return n(S,w),Pe&&Is(S,_),$;if(w===null){for(;!I.done;_++,I=C.next())I=y(S,I.value,j),I!==null&&(E=i(I,E,_),B===null?$=I:B.sibling=I,B=I);return Pe&&Is(S,_),$}for(w=r(S,w);!I.done;_++,I=C.next())I=A(w,S,_,I.value,j),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),E=i(I,E,_),B===null?$=I:B.sibling=I,B=I);return t&&w.forEach(function(N){return e(S,N)}),Pe&&Is(S,_),$}function D(S,E,C,j){if(typeof C=="object"&&C!==null&&C.type===pi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ll:e:{for(var $=C.key,B=E;B!==null;){if(B.key===$){if($=C.type,$===pi){if(B.tag===7){n(S,B.sibling),E=s(B,C.props.children),E.return=S,S=E;break e}}else if(B.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ir&&Rg($)===B.type){n(S,B.sibling),E=s(B,C.props),E.ref=ko(S,B,C),E.return=S,S=E;break e}n(S,B);break}else e(S,B);B=B.sibling}C.type===pi?(E=Ds(C.props.children,S.mode,j,C.key),E.return=S,S=E):(j=Bl(C.type,C.key,C.props,null,S.mode,j),j.ref=ko(S,E,C),j.return=S,S=j)}return o(S);case fi:e:{for(B=C.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(S,E.sibling),E=s(E,C.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Ad(C,S.mode,j),E.return=S,S=E}return o(S);case Ir:return B=C._init,D(S,E,B(C._payload),j)}if(Po(C))return P(S,E,C,j);if(Eo(C))return V(S,E,C,j);_l(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,C),E.return=S,S=E):(n(S,E),E=kd(C,S.mode,j),E.return=S,S=E),o(S)):n(S,E)}return D}var Ui=m_(!0),g_=m_(!1),fu=rs(null),pu=null,xi=null,Bf=null;function qf(){Bf=xi=pu=null}function Hf(t){var e=fu.current;Re(fu),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ni(t,e){pu=t,Bf=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(pu===null)throw Error(U(308));xi=t,pu.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Cs=null;function Wf(t){Cs===null?Cs=[t]:Cs.push(t)}function y_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Wf(e)):(n.next=s.next,s.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sr(t,n)}return s=r.interleaved,s===null?(e.next=e,Wf(r)):(e.next=s.next,s.next=e),r.interleaved=e,sr(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}function Pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var s=t.updateQueue;Sr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,m=c=u=null,l=i;do{var p=l.lane,A=l.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,V=l;switch(p=e,A=n,V.tag){case 1:if(P=V.payload,typeof P=="function"){y=P.call(A,y,p);break e}y=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=V.payload,p=typeof P=="function"?P.call(A,y,p):P,p==null)break e;y=Le({},y,p);break e;case 2:Sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else A={eventTime:A,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=A,u=y):m=m.next=A,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(m===null&&(u=y),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Fs|=o,t.lanes=o,t.memoizedState=y}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Ra={},Ln=rs(Ra),fa=rs(Ra),pa=rs(Ra);function bs(t){if(t===Ra)throw Error(U(174));return t}function Kf(t,e){switch(Ie(pa,e),Ie(fa,t),Ie(Ln,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}Re(Ln),Ie(Ln,e)}function $i(){Re(Ln),Re(fa),Re(pa)}function __(t){bs(pa.current);var e=bs(Ln.current),n=ah(e,t.type);e!==n&&(Ie(fa,t),Ie(Ln,n))}function Qf(t){fa.current===t&&(Re(Ln),Re(fa))}var Ve=rs(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function Yf(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var jl=dr.ReactCurrentDispatcher,Ed=dr.ReactCurrentBatchConfig,js=0,Oe=null,Ze=null,at=null,yu=!1,Wo=!1,ma=0,_1=0;function mt(){throw Error(U(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xn(t[n],e[n]))return!1;return!0}function Jf(t,e,n,r,s,i){if(js=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?T1:I1,t=n(r,s),Wo){i=0;do{if(Wo=!1,ma=0,25<=i)throw Error(U(301));i+=1,at=Ze=null,e.updateQueue=null,jl.current=S1,t=n(r,s)}while(Wo)}if(jl.current=vu,e=Ze!==null&&Ze.next!==null,js=0,at=Ze=Oe=null,yu=!1,e)throw Error(U(300));return t}function Zf(){var t=ma!==0;return ma=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Oe.memoizedState=at=t:at=at.next=t,at}function un(){if(Ze===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=at===null?Oe.memoizedState:at.next;if(e!==null)at=e,Ze=t;else{if(t===null)throw Error(U(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},at===null?Oe.memoizedState=at=t:at=at.next=t}return at}function ga(t,e){return typeof e=="function"?e(t):e}function xd(t){var e=un(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var m=c.lane;if((js&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var y={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Oe.lanes|=m,Fs|=m}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,xn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,Fs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Td(t){var e=un(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);xn(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function w_(){}function E_(t,e){var n=Oe,r=un(),s=e(),i=!xn(r.memoizedState,s);if(i&&(r.memoizedState=s,Dt=!0),r=r.queue,ep(I_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,ya(9,T_.bind(null,n,r,s,e),void 0,null),lt===null)throw Error(U(349));js&30||x_(n,e,s)}return s}function x_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T_(t,e,n,r){e.value=n,e.getSnapshot=r,S_(e)&&k_(t)}function I_(t,e,n){return n(function(){S_(e)&&k_(t)})}function S_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xn(t,n)}catch{return!0}}function k_(t){var e=sr(t,1);e!==null&&En(e,t,1,-1)}function Vg(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=x1.bind(null,Oe,t),[e.memoizedState,t]}function ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function A_(){return un().memoizedState}function Fl(t,e,n,r){var s=Pn();Oe.flags|=t,s.memoizedState=ya(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var s=un();r=r===void 0?null:r;var i=void 0;if(Ze!==null){var o=Ze.memoizedState;if(i=o.destroy,r!==null&&Xf(r,o.deps)){s.memoizedState=ya(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=ya(1|e,n,i,r)}function Og(t,e){return Fl(8390656,8,t,e)}function ep(t,e){return nc(2048,8,t,e)}function C_(t,e){return nc(4,2,t,e)}function b_(t,e){return nc(4,4,t,e)}function N_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,N_.bind(null,e,t),n)}function tp(){}function P_(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return js&21?(xn(n,e)||(n=Fv(),Oe.lanes|=n,Fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function w1(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Ed.transition;Ed.transition={};try{t(!1),e()}finally{we=n,Ed.transition=r}}function O_(){return un().memoizedState}function E1(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L_(t))M_(e,n);else if(n=y_(t,e,n,r),n!==null){var s=kt();En(n,t,r,s),j_(n,e,r)}}function x1(t,e,n){var r=$r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L_(t))M_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,xn(l,o)){var u=e.interleaved;u===null?(s.next=s,Wf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=y_(t,e,s,r),n!==null&&(s=kt(),En(n,t,r,s),j_(n,e,r))}}function L_(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function M_(t,e){Wo=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}var vu={readContext:ln,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},T1={readContext:ln,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,N_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=E1.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:Vg,useDebugValue:tp,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=Vg(!1),e=t[0];return t=w1.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=Pn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),lt===null)throw Error(U(349));js&30||x_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Og(I_.bind(null,r,i,t),[t]),r.flags|=2048,ya(9,T_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Pn(),e=lt.identifierPrefix;if(Pe){var n=Yn,r=Qn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},I1={readContext:ln,useCallback:P_,useContext:ln,useEffect:ep,useImperativeHandle:R_,useInsertionEffect:C_,useLayoutEffect:b_,useMemo:D_,useReducer:xd,useRef:A_,useState:function(){return xd(ga)},useDebugValue:tp,useDeferredValue:function(t){var e=un();return V_(e,Ze.memoizedState,t)},useTransition:function(){var t=xd(ga)[0],e=un().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1},S1={readContext:ln,useCallback:P_,useContext:ln,useEffect:ep,useImperativeHandle:R_,useInsertionEffect:C_,useLayoutEffect:b_,useMemo:D_,useReducer:Td,useRef:A_,useState:function(){return Td(ga)},useDebugValue:tp,useDeferredValue:function(t){var e=un();return Ze===null?e.memoizedState=t:V_(e,Ze.memoizedState,t)},useTransition:function(){var t=Td(ga)[0],e=un().memoizedState;return[t,e]},useMutableSource:w_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1};function gn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?Ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),s=$r(t),i=Zn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(En(e,t,s,r),Ml(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),s=$r(t),i=Zn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Fr(t,i,s),e!==null&&(En(e,t,s,r),Ml(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=$r(t),s=Zn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Fr(t,s,r),e!==null&&(En(e,t,r,n),Ml(e,t,r))}};function Lg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,r)||!ua(s,i):!0}function F_(t,e,n){var r=!1,s=Kr,i=e.contextType;return typeof i=="object"&&i!==null?i=ln(i):(s=Lt(e)?Ls:xt.current,r=e.contextTypes,i=(r=r!=null)?ji(t,s):Kr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ln(i):(i=Lt(e)?Ls:xt.current,s.context=ji(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ch(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&rc.enqueueReplaceState(s,s.state,null),mu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=ZT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wu||(wu=!0,Uh=r),Nh(t,e)},n}function $_(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new k1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=U1.bind(null,t,e,n),e.then(t,t))}function Fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ug(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var A1=dr.ReactCurrentOwner,Dt=!1;function St(t,e,n,r){e.child=t===null?g_(e,null,n,r):Ui(e,t.child,n,r)}function $g(t,e,n,r,s){n=n.render;var i=e.ref;return Ni(e,s),r=Jf(t,e,n,r,i,s),n=Zf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Pe&&n&&Uf(e),e.flags|=1,St(t,e,r,s),e.child)}function zg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!up(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,z_(t,e,i,r,s)):(t=Bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,r)&&t.ref===e.ref)return ir(t,e,s)}return e.flags|=1,t=zr(i,r),t.ref=e.ref,t.return=e,e.child=t}function z_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ua(i,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ir(t,e,s)}return Rh(t,e,n,r,s)}function B_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ii,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ii,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ie(Ii,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ie(Ii,Bt),Bt|=r;return St(t,e,s,n),e.child}function q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,r,s){var i=Lt(n)?Ls:xt.current;return i=ji(e,i),Ni(e,s),n=Jf(t,e,n,r,i,s),r=Zf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Pe&&r&&Uf(e),e.flags|=1,St(t,e,n,s),e.child)}function Bg(t,e,n,r,s){if(Lt(n)){var i=!0;cu(e)}else i=!1;if(Ni(e,s),e.stateNode===null)Ul(t,e),F_(e,n,r),bh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Lt(n)?Ls:xt.current,c=ji(e,c));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Mg(e,o,r,c),Sr=!1;var p=e.memoizedState;o.state=p,mu(e,r,o,s),u=e.memoizedState,l!==r||p!==u||Ot.current||Sr?(typeof m=="function"&&(Ch(e,n,m,r),u=e.memoizedState),(l=Sr||Lg(e,n,l,r,p,u,c))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,v_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:gn(e.type,l),o.props=c,y=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ln(u):(u=Lt(n)?Ls:xt.current,u=ji(e,u));var A=n.getDerivedStateFromProps;(m=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||p!==u)&&Mg(e,o,r,u),Sr=!1,p=e.memoizedState,o.state=p,mu(e,r,o,s);var P=e.memoizedState;l!==y||p!==P||Ot.current||Sr?(typeof A=="function"&&(Ch(e,n,A,r),P=e.memoizedState),(c=Sr||Lg(e,n,c,r,p,P,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ph(t,e,n,r,i,s)}function Ph(t,e,n,r,s,i){q_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Cg(e,n,!1),ir(t,e,i);r=e.stateNode,A1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,i),e.child=Ui(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&Cg(e,n,!0),e.child}function H_(t){var e=t.stateNode;e.pendingContext?Ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(t,e.context,!1),Kf(t,e.containerInfo)}function qg(t,e,n,r,s){return Fi(),zf(s),e.flags|=256,St(t,e,n,r),e.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function W_(t,e,n){var r=e.pendingProps,s=Ve.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ie(Ve,s&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=oc(o,r,0,null),t=Ds(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Vh(n),e.memoizedState=Dh,t):np(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return C1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=zr(l,i):(i=Ds(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Dh,r}return i=t.child,t=i.sibling,r=zr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function np(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&zf(r),Ui(e,t.child,null,n),t=np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function C1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Id(Error(U(422))),wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=oc({mode:"visible",children:r.children},s,0,null),i=Ds(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=Dh,i);if(!(e.mode&1))return wl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=Id(i,r,void 0),wl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Dt||l){if(r=lt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sr(t,s),En(r,t,s,-1))}return lp(),r=Id(Error(U(421))),wl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=jr(s.nextSibling),Gt=e,Pe=!0,vn=null,t!==null&&(tn[nn++]=Qn,tn[nn++]=Yn,tn[nn++]=Ms,Qn=t.id,Yn=t.overflow,Ms=e),e=np(e,r.children),e.flags|=4096,e)}function Hg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ah(t.return,e,n)}function Sd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function G_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hg(t,n,e);else if(t.tag===19)Hg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Sd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&gu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Sd(e,!0,n,null,i);break;case"together":Sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b1(t,e,n){switch(e.tag){case 3:H_(e),Fi();break;case 5:__(e);break;case 1:Lt(e.type)&&cu(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ie(fu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?W_(t,e,n):(Ie(Ve,Ve.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Ie(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return G_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ie(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return ir(t,e,n)}var K_,Oh,Q_,Y_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};Q_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,bs(Ln.current);var i=null;switch(n){case"input":s=rh(t,s),r=rh(t,r),i=[];break;case"select":s=Le({},s,{value:void 0}),r=Le({},r,{value:void 0}),i=[];break;case"textarea":s=oh(t,s),r=oh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}lh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(na.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(na.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ao(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function N1(t,e,n){var r=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Lt(e.type)&&uu(),gt(e),null;case 3:return r=e.stateNode,$i(),Re(Ot),Re(xt),Yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Bh(vn),vn=null))),Oh(t,e),gt(e),null;case 5:Qf(e);var s=bs(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return gt(e),null}if(t=bs(Ln.current),vl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Vn]=e,r[ha]=i,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(s=0;s<Vo.length;s++)be(Vo[s],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":eg(r,i),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},be("invalid",r);break;case"textarea":ng(r,i),be("invalid",r)}lh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),s=["children",""+l]):na.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":ul(r),tg(r,i,!0);break;case"textarea":ul(r),rg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=lu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vn]=e,t[ha]=r,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":be("cancel",t),be("close",t),s=r;break;case"iframe":case"object":case"embed":be("load",t),s=r;break;case"video":case"audio":for(s=0;s<Vo.length;s++)be(Vo[s],t);s=r;break;case"source":be("error",t),s=r;break;case"img":case"image":case"link":be("error",t),be("load",t),s=r;break;case"details":be("toggle",t),s=r;break;case"input":eg(t,r),s=rh(t,r),be("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Le({},r,{value:void 0}),be("invalid",t);break;case"textarea":ng(t,r),s=oh(t,r),be("invalid",t);break;default:s=r}lh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Av(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ra(t,u):typeof u=="number"&&ra(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(na.hasOwnProperty(i)?u!=null&&i==="onScroll"&&be("scroll",t):u!=null&&kf(t,i,u,o))}switch(n){case"input":ul(t),tg(t,r,!1);break;case"textarea":ul(t),rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ki(t,!!r.multiple,i,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=bs(pa.current),bs(Ln.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vn]=e,(i=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=e,e.stateNode=r}return gt(e),null;case 13:if(Re(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Ht!==null&&e.mode&1&&!(e.flags&128))p_(),Fi(),e.flags|=98560,i=!1;else if(i=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Vn]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),i=!1}else vn!==null&&(Bh(vn),vn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?et===0&&(et=3):lp())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return $i(),Oh(t,e),t===null&&ca(e.stateNode.containerInfo),gt(e),null;case 10:return Hf(e.type._context),gt(e),null;case 17:return Lt(e.type)&&uu(),gt(e),null;case 19:if(Re(Ve),i=e.memoizedState,i===null)return gt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ao(i,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gu(t),o!==null){for(e.flags|=128,Ao(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ve,Ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>Bi&&(e.flags|=128,r=!0,Ao(i,!1),e.lanes=4194304)}else{if(!r)if(t=gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Pe)return gt(e),null}else 2*We()-i.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,Ao(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Ve.current,Ie(Ve,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return ap(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function R1(t,e){switch($f(e),e.tag){case 1:return Lt(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),Re(Ot),Re(xt),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(Re(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ve),null;case 4:return $i(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var El=!1,wt=!1,P1=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function Lh(t,e,n){try{n()}catch(r){$e(t,e,r)}}var Wg=!1;function D1(t,e){if(_h=iu,t=t_(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,m=0,y=t,p=null;t:for(;;){for(var A;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(A=y.firstChild)!==null;)p=y,y=A;for(;;){if(y===t)break t;if(p===n&&++c===s&&(l=o),p===i&&++m===r&&(u=o),(A=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},iu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var V=P.memoizedProps,D=P.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:gn(e.type,V),D);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(j){$e(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return P=Wg,Wg=!1,P}function Go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Lh(e,n,i)}s=s.next}while(s!==r)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X_(t){var e=t.alternate;e!==null&&(t.alternate=null,X_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[ha],delete e[Th],delete e[m1],delete e[g1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function Gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var ut=null,yn=!1;function Er(t,e,n){for(n=n.child;n!==null;)Z_(t,e,n),n=n.sibling}function Z_(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Yu,n)}catch{}switch(n.tag){case 5:wt||Ti(n,e);case 6:var r=ut,s=yn;ut=null,Er(t,e,n),ut=r,yn=s,ut!==null&&(yn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(yn?(t=ut,n=n.stateNode,t.nodeType===8?vd(t.parentNode,n):t.nodeType===1&&vd(t,n),aa(t)):vd(ut,n.stateNode));break;case 4:r=ut,s=yn,ut=n.stateNode.containerInfo,yn=!0,Er(t,e,n),ut=r,yn=s;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Lh(n,e,o),s=s.next}while(s!==r)}Er(t,e,n);break;case 1:if(!wt&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,e,l)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Er(t,e,n),wt=r):Er(t,e,n);break;default:Er(t,e,n)}}function Kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new P1),e.forEach(function(r){var s=z1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,yn=!1;break e;case 3:ut=l.stateNode.containerInfo,yn=!0;break e;case 4:ut=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(ut===null)throw Error(U(160));Z_(i,o,s),ut=null,yn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){$e(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ew(e,t),e=e.sibling}function ew(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),Nn(t),r&4){try{Go(3,t,t.return),sc(3,t)}catch(V){$e(t,t.return,V)}try{Go(5,t,t.return)}catch(V){$e(t,t.return,V)}}break;case 1:mn(e,t),Nn(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(mn(e,t),Nn(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var s=t.stateNode;try{ra(s,"")}catch(V){$e(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&xv(s,i),uh(l,o);var c=uh(l,i);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?Av(s,y):m==="dangerouslySetInnerHTML"?Sv(s,y):m==="children"?ra(s,y):kf(s,m,y,c)}switch(l){case"input":sh(s,i);break;case"textarea":Tv(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?ki(s,!!i.multiple,A,!1):p!==!!i.multiple&&(i.defaultValue!=null?ki(s,!!i.multiple,i.defaultValue,!0):ki(s,!!i.multiple,i.multiple?[]:"",!1))}s[ha]=i}catch(V){$e(t,t.return,V)}}break;case 6:if(mn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){$e(t,t.return,V)}}break;case 3:if(mn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(V){$e(t,t.return,V)}break;case 4:mn(e,t),Nn(t);break;case 13:mn(e,t),Nn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ip=We())),r&4&&Kg(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||m,mn(e,t),wt=c):mn(e,t),Nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!m&&t.mode&1)for(K=t,m=t.child;m!==null;){for(y=K=m;K!==null;){switch(p=K,A=p.child,p.tag){case 0:case 11:case 14:case 15:Go(4,p,p.return);break;case 1:Ti(p,p.return);var P=p.stateNode;if(typeof P.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(V){$e(r,n,V)}}break;case 5:Ti(p,p.return);break;case 22:if(p.memoizedState!==null){Yg(y);continue}}A!==null?(A.return=p,K=A):Yg(y)}m=m.sibling}e:for(m=null,y=t;;){if(y.tag===5){if(m===null){m=y;try{s=y.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kv("display",o))}catch(V){$e(t,t.return,V)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(V){$e(t,t.return,V)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:mn(e,t),Nn(t),r&4&&Kg(t);break;case 21:break;default:mn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ra(s,""),r.flags&=-33);var i=Gg(t);Fh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gg(t);jh(t,l,o);break;default:throw Error(U(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V1(t,e,n){K=t,tw(t)}function tw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||El;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||wt;l=El;var c=wt;if(El=o,(wt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Xg(s):u!==null?(u.return=o,K=u):Xg(s);for(;i!==null;)K=i,tw(i),i=i.sibling;K=s,El=l,wt=c}Qg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):Qg(t)}}function Qg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Dg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&aa(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}wt||e.flags&512&&Mh(e)}catch(p){$e(e,e.return,p)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Yg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Xg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){$e(e,s,u)}}var i=e.return;try{Mh(e)}catch(u){$e(e,i,u)}break;case 5:var o=e.return;try{Mh(e)}catch(u){$e(e,o,u)}}}catch(u){$e(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var O1=Math.ceil,_u=dr.ReactCurrentDispatcher,rp=dr.ReactCurrentOwner,on=dr.ReactCurrentBatchConfig,ge=0,lt=null,Ke=null,ht=0,Bt=0,Ii=rs(0),et=0,va=null,Fs=0,ic=0,sp=0,Ko=null,Rt=null,ip=0,Bi=1/0,Gn=null,wu=!1,Uh=null,Ur=null,xl=!1,Dr=null,Eu=0,Qo=0,$h=null,$l=-1,zl=0;function kt(){return ge&6?We():$l!==-1?$l:$l=We()}function $r(t){return t.mode&1?ge&2&&ht!==0?ht&-ht:v1.transition!==null?(zl===0&&(zl=Fv()),zl):(t=we,t!==0||(t=window.event,t=t===void 0?16:Wv(t.type)),t):1}function En(t,e,n,r){if(50<Qo)throw Qo=0,$h=null,Error(U(185));Ca(t,n,r),(!(ge&2)||t!==lt)&&(t===lt&&(!(ge&2)&&(ic|=n),et===4&&Ar(t,ht)),Mt(t,r),n===1&&ge===0&&!(e.mode&1)&&(Bi=We()+500,tc&&ss()))}function Mt(t,e){var n=t.callbackNode;vI(t,e);var r=su(t,t===lt?ht:0);if(r===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?y1(Jg.bind(null,t)):d_(Jg.bind(null,t)),f1(function(){!(ge&6)&&ss()}),n=null;else{switch(Uv(r)){case 1:n=Rf;break;case 4:n=Mv;break;case 16:n=ru;break;case 536870912:n=jv;break;default:n=ru}n=uw(n,nw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nw(t,e){if($l=-1,zl=0,ge&6)throw Error(U(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=su(t,t===lt?ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var s=ge;ge|=2;var i=sw();(lt!==t||ht!==e)&&(Gn=null,Bi=We()+500,Ps(t,e));do try{j1();break}catch(l){rw(t,l)}while(!0);qf(),_u.current=i,ge=s,Ke!==null?e=0:(lt=null,ht=0,e=et)}if(e!==0){if(e===2&&(s=ph(t),s!==0&&(r=s,e=zh(t,s))),e===1)throw n=va,Ps(t,0),Ar(t,r),Mt(t,We()),n;if(e===6)Ar(t,r);else{if(s=t.current.alternate,!(r&30)&&!L1(s)&&(e=xu(t,r),e===2&&(i=ph(t),i!==0&&(r=i,e=zh(t,i))),e===1))throw n=va,Ps(t,0),Ar(t,r),Mt(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ss(t,Rt,Gn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=ip+500-We(),10<e)){if(su(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=xh(Ss.bind(null,t,Rt,Gn),e);break}Ss(t,Rt,Gn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-wn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*O1(r/1960))-r,10<r){t.timeoutHandle=xh(Ss.bind(null,t,Rt,Gn),r);break}Ss(t,Rt,Gn);break;case 5:Ss(t,Rt,Gn);break;default:throw Error(U(329))}}}return Mt(t,We()),t.callbackNode===n?nw.bind(null,t):null}function zh(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(Ps(t,e).flags|=256),t=xu(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Bh(e)),t}function Bh(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function L1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!xn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~sp,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function Jg(t){if(ge&6)throw Error(U(327));Ri();var e=su(t,0);if(!(e&1))return Mt(t,We()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=zh(t,r))}if(n===1)throw n=va,Ps(t,0),Ar(t,e),Mt(t,We()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ss(t,Rt,Gn),Mt(t,We()),null}function op(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Bi=We()+500,tc&&ss())}}function Us(t){Dr!==null&&Dr.tag===0&&!(ge&6)&&Ri();var e=ge;ge|=1;var n=on.transition,r=we;try{if(on.transition=null,we=1,t)return t()}finally{we=r,on.transition=n,ge=e,!(ge&6)&&ss()}}function ap(){Bt=Ii.current,Re(Ii)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h1(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch($f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:$i(),Re(Ot),Re(xt),Yf();break;case 5:Qf(r);break;case 4:$i();break;case 13:Re(Ve);break;case 19:Re(Ve);break;case 10:Hf(r.type._context);break;case 22:case 23:ap()}n=n.return}if(lt=t,Ke=t=zr(t.current,null),ht=Bt=e,et=0,va=null,sp=ic=Fs=0,Rt=Ko=null,Cs!==null){for(e=0;e<Cs.length;e++)if(n=Cs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Cs=null}return t}function rw(t,e){do{var n=Ke;try{if(qf(),jl.current=vu,yu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}yu=!1}if(js=0,at=Ze=Oe=null,Wo=!1,ma=0,rp.current=null,n===null||n.return===null){et=1,va=e,Ke=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ht,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=l,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var A=Fg(o);if(A!==null){A.flags&=-257,Ug(A,o,l,i,e),A.mode&1&&jg(i,c,e),e=A,u=c;var P=e.updateQueue;if(P===null){var V=new Set;V.add(u),e.updateQueue=V}else P.add(u);break e}else{if(!(e&1)){jg(i,c,e),lp();break e}u=Error(U(426))}}else if(Pe&&l.mode&1){var D=Fg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ug(D,o,l,i,e),zf(zi(u,l));break e}}i=u=zi(u,l),et!==4&&(et=2),Ko===null?Ko=[i]:Ko.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=U_(i,u,e);Pg(i,S);break e;case 1:l=u;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ur===null||!Ur.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=$_(i,l,e);Pg(i,j);break e}}i=i.return}while(i!==null)}ow(n)}catch($){e=$,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function sw(){var t=_u.current;return _u.current=vu,t===null?vu:t}function lp(){(et===0||et===3||et===2)&&(et=4),lt===null||!(Fs&268435455)&&!(ic&268435455)||Ar(lt,ht)}function xu(t,e){var n=ge;ge|=2;var r=sw();(lt!==t||ht!==e)&&(Gn=null,Ps(t,e));do try{M1();break}catch(s){rw(t,s)}while(!0);if(qf(),ge=n,_u.current=r,Ke!==null)throw Error(U(261));return lt=null,ht=0,et}function M1(){for(;Ke!==null;)iw(Ke)}function j1(){for(;Ke!==null&&!uI();)iw(Ke)}function iw(t){var e=lw(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?ow(t):Ke=e,rp.current=null}function ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=R1(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ke=null;return}}else if(n=N1(n,e,Bt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);et===0&&(et=5)}function Ss(t,e,n){var r=we,s=on.transition;try{on.transition=null,we=1,F1(t,e,n,r)}finally{on.transition=s,we=r}return null}function F1(t,e,n,r){do Ri();while(Dr!==null);if(ge&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(_I(t,i),t===lt&&(Ke=lt=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,uw(ru,function(){return Ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=on.transition,on.transition=null;var o=we;we=1;var l=ge;ge|=4,rp.current=null,D1(t,n),ew(n,t),i1(wh),iu=!!_h,wh=_h=null,t.current=n,V1(n),cI(),ge=l,we=o,on.transition=i}else t.current=n;if(xl&&(xl=!1,Dr=t,Eu=s),i=t.pendingLanes,i===0&&(Ur=null),fI(n.stateNode),Mt(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(wu)throw wu=!1,t=Uh,Uh=null,t;return Eu&1&&t.tag!==0&&Ri(),i=t.pendingLanes,i&1?t===$h?Qo++:(Qo=0,$h=t):Qo=0,ss(),null}function Ri(){if(Dr!==null){var t=Uv(Eu),e=on.transition,n=we;try{if(on.transition=null,we=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,Eu=0,ge&6)throw Error(U(331));var s=ge;for(ge|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var m=K;switch(m.tag){case 0:case 11:case 15:Go(8,m,i)}var y=m.child;if(y!==null)y.return=m,K=y;else for(;K!==null;){m=K;var p=m.sibling,A=m.return;if(X_(m),m===c){K=null;break}if(p!==null){p.return=A,K=p;break}K=A}}}var P=i.alternate;if(P!==null){var V=P.child;if(V!==null){P.child=null;do{var D=V.sibling;V.sibling=null,V=D}while(V!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Go(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,K=S;break e}K=i.return}}var E=t.current;for(K=E;K!==null;){o=K;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,K=C;else e:for(o=E;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sc(9,l)}}catch($){$e(l,l.return,$)}if(l===o){K=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,K=j;break e}K=l.return}}if(ge=s,ss(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Yu,t)}catch{}r=!0}return r}finally{we=n,on.transition=e}}return!1}function Zg(t,e,n){e=zi(n,e),e=U_(t,e,1),t=Fr(t,e,1),e=kt(),t!==null&&(Ca(t,1,e),Mt(t,e))}function $e(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=zi(n,t),t=$_(e,t,1),e=Fr(e,t,1),t=kt(),e!==null&&(Ca(e,1,t),Mt(e,t));break}}e=e.return}}function U1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(ht&n)===n&&(et===4||et===3&&(ht&130023424)===ht&&500>We()-ip?Ps(t,0):sp|=n),Mt(t,e)}function aw(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=kt();t=sr(t,e),t!==null&&(Ca(t,e,n),Mt(t,n))}function $1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aw(t,n)}function z1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),aw(t,n)}var lw;lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,b1(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Pe&&e.flags&1048576&&h_(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ul(t,e),t=e.pendingProps;var s=ji(e,xt.current);Ni(e,n),s=Jf(null,e,r,t,s,n);var i=Zf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,cu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Gf(e),s.updater=rc,e.stateNode=s,s._reactInternals=e,bh(e,r,t,n),e=Ph(null,e,r,!0,i,n)):(e.tag=0,Pe&&i&&Uf(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=q1(r),t=gn(r,t),s){case 0:e=Rh(null,e,r,t,n);break e;case 1:e=Bg(null,e,r,t,n);break e;case 11:e=$g(null,e,r,t,n);break e;case 14:e=zg(null,e,r,gn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Rh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Bg(t,e,r,s,n);case 3:e:{if(H_(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,v_(t,e),mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zi(Error(U(423)),e),e=qg(t,e,r,n,s);break e}else if(r!==s){s=zi(Error(U(424)),e),e=qg(t,e,r,n,s);break e}else for(Ht=jr(e.stateNode.containerInfo.firstChild),Gt=e,Pe=!0,vn=null,n=g_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===s){e=ir(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return __(e),t===null&&kh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Eh(r,s)?o=null:i!==null&&Eh(r,i)&&(e.flags|=32),q_(t,e),St(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return W_(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),$g(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ie(fu,r._currentValue),r._currentValue=o,i!==null)if(xn(i.value,o)){if(i.children===s.children&&!Ot.current){e=ir(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ah(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ah(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ni(e,n),s=ln(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=gn(r,e.pendingProps),s=gn(r.type,s),zg(t,e,r,s,n);case 15:return z_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:gn(r,s),Ul(t,e),e.tag=1,Lt(r)?(t=!0,cu(e)):t=!1,Ni(e,n),F_(e,r,s),bh(e,r,s,n),Ph(null,e,r,!0,t,n);case 19:return G_(t,e,n);case 22:return B_(t,e,n)}throw Error(U(156,e.tag))};function uw(t,e){return Lv(t,e)}function B1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new B1(t,e,n,r)}function up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q1(t){if(typeof t=="function")return up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cf)return 11;if(t===bf)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return Ds(n.children,s,i,e);case Af:o=8,s|=8;break;case Zd:return t=sn(12,n,e,s|2),t.elementType=Zd,t.lanes=i,t;case eh:return t=sn(13,n,e,s),t.elementType=eh,t.lanes=i,t;case th:return t=sn(19,n,e,s),t.elementType=th,t.lanes=i,t;case _v:return oc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yv:o=10;break e;case vv:o=9;break e;case Cf:o=11;break e;case bf:o=14;break e;case Ir:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=sn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ds(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function oc(t,e,n,r){return t=sn(22,t,r,e),t.elementType=_v,t.lanes=n,t.stateNode={isHidden:!1},t}function kd(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function Ad(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function H1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ad(0),this.expirationTimes=ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function cp(t,e,n,r,s,i,o,l,u){return t=new H1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=sn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(i),t}function W1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cw(t){if(!t)return Kr;t=t._reactInternals;e:{if(Ks(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Lt(n))return c_(t,n,e)}return e}function dw(t,e,n,r,s,i,o,l,u){return t=cp(n,r,!0,t,s,i,o,l,u),t.context=cw(null),n=t.current,r=kt(),s=$r(n),i=Zn(r,s),i.callback=e??null,Fr(n,i,s),t.current.lanes=s,Ca(t,s,r),Mt(t,r),t}function ac(t,e,n,r){var s=e.current,i=kt(),o=$r(s);return n=cw(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(s,e,o),t!==null&&(En(t,s,o,i),Ml(t,s,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){ey(t,e),(t=t.alternate)&&ey(t,e)}function G1(){return null}var hw=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}lc.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ac(t,e,null,null)};lc.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Us(function(){ac(null,t,null,null)}),e[rr]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&Hv(t)}};function fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ty(){}function K1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Tu(o);i.call(c)}}var o=dw(e,r,t,0,null,!1,!1,"",ty);return t._reactRootContainer=o,t[rr]=o.current,ca(t.nodeType===8?t.parentNode:t),Us(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Tu(u);l.call(c)}}var u=cp(t,0,!1,null,null,!1,!1,"",ty);return t._reactRootContainer=u,t[rr]=u.current,ca(t.nodeType===8?t.parentNode:t),Us(function(){ac(e,u,n,r)}),u}function cc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Tu(o);l.call(u)}}ac(e,o,t,s)}else o=K1(n,e,t,s,r);return Tu(o)}$v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(Pf(e,n|1),Mt(e,We()),!(ge&6)&&(Bi=We()+500,ss()))}break;case 13:Us(function(){var r=sr(t,1);if(r!==null){var s=kt();En(r,t,1,s)}}),dp(t,1)}};Df=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=kt();En(e,t,134217728,n)}dp(t,134217728)}};zv=function(t){if(t.tag===13){var e=$r(t),n=sr(t,e);if(n!==null){var r=kt();En(n,t,e,r)}dp(t,e)}};Bv=function(){return we};qv=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ec(r);if(!s)throw Error(U(90));Ev(r),sh(r,s)}}}break;case"textarea":Tv(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};Nv=op;Rv=Us;var Q1={usingClientEntryPoint:!1,Events:[Na,vi,ec,Cv,bv,op]},Co={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y1={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||G1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Yu=Tl.inject(Y1),On=Tl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(e))throw Error(U(200));return W1(t,e,null,n)};Yt.createRoot=function(t,e){if(!fp(t))throw Error(U(299));var n=!1,r="",s=hw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=cp(t,1,!1,null,null,n,!1,r,s),t[rr]=e.current,ca(t.nodeType===8?t.parentNode:t),new hp(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Vv(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Us(t)};Yt.hydrate=function(t,e,n){if(!uc(e))throw Error(U(200));return cc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!fp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=hw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dw(e,null,t,1,n??null,s,!1,i,o),t[rr]=e.current,ca(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new lc(e)};Yt.render=function(t,e,n){if(!uc(e))throw Error(U(200));return cc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!uc(t))throw Error(U(40));return t._reactRootContainer?(Us(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Yt.unstable_batchedUpdates=op;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return cc(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function fw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fw)}catch(t){console.error(t)}}fw(),fv.exports=Yt;var X1=fv.exports,ny=X1;Xd.createRoot=ny.createRoot,Xd.hydrateRoot=ny.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),je=(t,e)=>{const n=re.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},m)=>re.createElement("svg",{ref:m,...J1,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Z1(t)}`,l].join(" "),...c},[...e.map(([y,p])=>re.createElement(y,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=je("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=je("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=je("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=je("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=je("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=je("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=je("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=je("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=je("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=je("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=je("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=je("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=je("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=je("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=je("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=je("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=je("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=je("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=je("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=je("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=je("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=je("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),cS=()=>{};var uy={};/**
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
 */const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let p=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(p=64)),r.push(n[m],n[y],n[p],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||y==null)throw new hS;const p=i<<2|l>>4;if(r.push(p),c!==64){const A=l<<4&240|c>>2;if(r.push(A),y!==64){const P=c<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fS=function(t){const e=pw(t);return mw.encodeByteArray(e,!0)},Iu=function(t){return fS(t).replace(/\./g,"")},gw=function(t){try{return mw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mS=()=>pS().__FIREBASE_DEFAULTS__,gS=()=>{if(typeof process>"u"||typeof uy>"u")return;const t=uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gw(t[1]);return e&&JSON.parse(e)},dc=()=>{try{return cS()||mS()||gS()||yS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yw=t=>{var e,n;return(n=(e=dc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vw=t=>{const e=yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_w=()=>{var t;return(t=dc())==null?void 0:t.config},ww=t=>{var e;return(e=dc())==null?void 0:e[`_${t}`]};/**
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
 */class vS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function _S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),""].join(".")}const Yo={};function wS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Yo))Yo[e]?t.emulator.push(e):t.prod.push(e);return t}function ES(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let cy=!1;function mp(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Yo[t]===e||Yo[t]||cy)return;Yo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=wS().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,A){p.setAttribute("width","24"),p.setAttribute("id",A),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{cy=!0,o()},p}function m(p,A){p.setAttribute("id",A),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function y(){const p=ES(r),A=n("text"),P=document.getElementById(A)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const C=p.element;l(C),m(D,V);const j=c();u(E,S),C.append(E,P,D,j),document.body.appendChild(C)}i?(P.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function TS(){var e;const t=(e=dc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kS(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AS(){return!TS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Tw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function CS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const bS="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bS,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new dn(s,l,r)}}function NS(t,e){return t.replace(RS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RS=/\{\$([^}]+)}/g;function PS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dy(i)&&dy(o)){if(!Qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dy(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DS(t,e){const n=new VS(t,e);return n.subscribe.bind(n)}class VS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pd),s.error===void 0&&(s.error=Pd),s.complete===void 0&&(s.complete=Pd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pd(){}/**
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
 */const LS=1e3,MS=2,jS=4*60*60*1e3,FS=.5;function hy(t,e=LS,n=MS){const r=e*Math.pow(n,t),s=Math.round(FS*r*(Math.random()-.5)*2);return Math.min(jS,r+s)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class US{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zS(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$S(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(t){return t===ks?void 0:t}function zS(t){return t.instantiationMode==="EAGER"}/**
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
 */class BS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new US(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const qS={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HS=ce.INFO,WS={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},GS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=HS,this._logHandler=GS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const KS=(t,e)=>e.some(n=>t instanceof n);let fy,py;function QS(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YS(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iw=new WeakMap,qh=new WeakMap,Sw=new WeakMap,Dd=new WeakMap,gp=new WeakMap;function XS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iw.set(n,t)}).catch(()=>{}),gp.set(e,t),e}function JS(t){if(qh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qh.set(t,e)}let Hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZS(t){Hh=t(Hh)}function ek(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vd(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),Br(r)}:YS().includes(t)?function(...e){return t.apply(Vd(this),e),Br(Iw.get(this))}:function(...e){return Br(t.apply(Vd(this),e))}}function tk(t){return typeof t=="function"?ek(t):(t instanceof IDBTransaction&&JS(t),KS(t,QS())?new Proxy(t,Hh):t)}function Br(t){if(t instanceof IDBRequest)return XS(t);if(Dd.has(t))return Dd.get(t);const e=tk(t);return e!==t&&(Dd.set(t,e),gp.set(e,t)),e}const Vd=t=>gp.get(t);function kw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Br(o.result),u.oldVersion,u.newVersion,Br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const nk=["get","getKey","getAll","getAllKeys","count"],rk=["put","add","delete","clear"],Od=new Map;function my(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return Od.set(e,i),i}ZS(t=>({...t,get:(e,n,r)=>my(e,n)||t.get(e,n,r),has:(e,n)=>!!my(e,n)||t.has(e,n)}));/**
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
 */class sk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ik(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ik(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",gy="0.14.6";/**
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
 */const or=new hc("@firebase/app"),ok="@firebase/app-compat",ak="@firebase/analytics-compat",lk="@firebase/analytics",uk="@firebase/app-check-compat",ck="@firebase/app-check",dk="@firebase/auth",hk="@firebase/auth-compat",fk="@firebase/database",pk="@firebase/data-connect",mk="@firebase/database-compat",gk="@firebase/functions",yk="@firebase/functions-compat",vk="@firebase/installations",_k="@firebase/installations-compat",wk="@firebase/messaging",Ek="@firebase/messaging-compat",xk="@firebase/performance",Tk="@firebase/performance-compat",Ik="@firebase/remote-config",Sk="@firebase/remote-config-compat",kk="@firebase/storage",Ak="@firebase/storage-compat",Ck="@firebase/firestore",bk="@firebase/ai",Nk="@firebase/firestore-compat",Rk="firebase",Pk="12.6.0";/**
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
 */const Gh="[DEFAULT]",Dk={[Wh]:"fire-core",[ok]:"fire-core-compat",[lk]:"fire-analytics",[ak]:"fire-analytics-compat",[ck]:"fire-app-check",[uk]:"fire-app-check-compat",[dk]:"fire-auth",[hk]:"fire-auth-compat",[fk]:"fire-rtdb",[pk]:"fire-data-connect",[mk]:"fire-rtdb-compat",[gk]:"fire-fn",[yk]:"fire-fn-compat",[vk]:"fire-iid",[_k]:"fire-iid-compat",[wk]:"fire-fcm",[Ek]:"fire-fcm-compat",[xk]:"fire-perf",[Tk]:"fire-perf-compat",[Ik]:"fire-rc",[Sk]:"fire-rc-compat",[kk]:"fire-gcs",[Ak]:"fire-gcs-compat",[Ck]:"fire-fst",[Nk]:"fire-fst-compat",[bk]:"fire-vertex","fire-js":"fire-js",[Rk]:"fire-js-all"};/**
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
 */const Su=new Map,Vk=new Map,Kh=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Kh.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Kh.set(e,t);for(const n of Su.values())yy(n,t);for(const n of Vk.values())yy(n,t);return!0}function os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ok={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Qs("app","Firebase",Ok);/**
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
 */class Lk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const to=Pk;function Aw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Gh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw qr.create("bad-app-name",{appName:String(s)});if(n||(n=_w()),!n)throw qr.create("no-options");const i=Su.get(s);if(i){if(Qr(n,i.options)&&Qr(r,i.config))return i;throw qr.create("duplicate-app",{appName:s})}const o=new BS(s);for(const u of Kh.values())o.addComponent(u);const l=new Lk(n,r,o);return Su.set(s,l),l}function fc(t=Gh){const e=Su.get(t);if(!e&&t===Gh&&_w())return Aw();if(!e)throw qr.create("no-app",{appName:t});return e}function jt(t,e,n){let r=Dk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(o.join(" "));return}Tn(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Mk="firebase-heartbeat-database",jk=1,_a="firebase-heartbeat-store";let Ld=null;function Cw(){return Ld||(Ld=kw(Mk,jk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Ld}async function Fk(t){try{const n=(await Cw()).transaction(_a),r=await n.objectStore(_a).get(bw(t));return await n.done,r}catch(e){if(e instanceof dn)or.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function vy(t,e){try{const r=(await Cw()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,bw(t)),await r.done}catch(n){if(n instanceof dn)or.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function bw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uk=1024,$k=30;class zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_y();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$k){const o=Hk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_y(),{heartbeatsToSend:r,unsentEntries:s}=Bk(this._heartbeatsCache.heartbeats),i=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function _y(){return new Date().toISOString().substring(0,10)}function Bk(t,e=Uk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wy(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}function Hk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Wk(t){Tn(new cn("platform-logger",e=>new sk(e),"PRIVATE")),Tn(new cn("heartbeat",e=>new zk(e),"PRIVATE")),jt(Wh,gy,t),jt(Wh,gy,"esm2020"),jt("fire-js","")}Wk("");var Gk="firebase",Kk="12.6.0";/**
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
 */jt(Gk,Kk,"app");const Nw="@firebase/installations",yp="0.6.19";/**
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
 */const Rw=1e4,Pw=`w:${yp}`,Dw="FIS_v2",Qk="https://firebaseinstallations.googleapis.com/v1",Yk=60*60*1e3,Xk="installations",Jk="Installations";/**
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
 */const Zk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$s=new Qs(Xk,Jk,Zk);function Vw(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function Ow({projectId:t}){return`${Qk}/projects/${t}/installations`}function Lw(t){return{token:t.token,requestStatus:2,expiresIn:tA(t.expiresIn),creationTime:Date.now()}}async function Mw(t,e){const r=(await e.json()).error;return $s.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eA(t,{refreshToken:e}){const n=jw(t);return n.append("Authorization",nA(e)),n}async function Fw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tA(t){return Number(t.replace("s","000"))}function nA(t){return`${Dw} ${t}`}/**
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
 */async function rA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ow(t),s=jw(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Dw,appId:t.appId,sdkVersion:Pw},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Fw(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Lw(c.authToken)}}else throw await Mw("Create Installation",u)}/**
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
 */function Uw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iA=/^[cdef][\w-]{21}$/,Qh="";function oA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aA(t);return iA.test(n)?n:Qh}catch{return Qh}}function aA(t){return sA(t).substr(0,22)}/**
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
 */function pc(t){return`${t.appName}!${t.appId}`}/**
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
 */const $w=new Map;function zw(t,e){const n=pc(t);Bw(n,e),lA(n,e)}function Bw(t,e){const n=$w.get(t);if(n)for(const r of n)r(e)}function lA(t,e){const n=uA();n&&n.postMessage({key:t,fid:e}),cA()}let Ns=null;function uA(){return!Ns&&"BroadcastChannel"in self&&(Ns=new BroadcastChannel("[Firebase] FID Change"),Ns.onmessage=t=>{Bw(t.data.key,t.data.fid)}),Ns}function cA(){$w.size===0&&Ns&&(Ns.close(),Ns=null)}/**
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
 */const dA="firebase-installations-database",hA=1,zs="firebase-installations-store";let Md=null;function vp(){return Md||(Md=kw(dA,hA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}})),Md}async function ku(t,e){const n=pc(t),s=(await vp()).transaction(zs,"readwrite"),i=s.objectStore(zs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zw(t,e.fid),e}async function qw(t){const e=pc(t),r=(await vp()).transaction(zs,"readwrite");await r.objectStore(zs).delete(e),await r.done}async function mc(t,e){const n=pc(t),s=(await vp()).transaction(zs,"readwrite"),i=s.objectStore(zs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&zw(t,l.fid),l}/**
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
 */async function _p(t){let e;const n=await mc(t.appConfig,r=>{const s=fA(r),i=pA(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Qh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fA(t){const e=t||{fid:oA(),registrationStatus:0};return Hw(e)}function pA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($s.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gA(t)}:{installationEntry:e}}async function mA(t,e){try{const n=await rA(t,e);return ku(t.appConfig,n)}catch(n){throw Vw(n)&&n.customData.serverCode===409?await qw(t.appConfig):await ku(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gA(t){let e=await Ey(t.appConfig);for(;e.registrationStatus===1;)await Uw(100),e=await Ey(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _p(t);return r||n}return e}function Ey(t){return mc(t,e=>{if(!e)throw $s.create("installation-not-found");return Hw(e)})}function Hw(t){return yA(t)?{fid:t.fid,registrationStatus:0}:t}function yA(t){return t.registrationStatus===1&&t.registrationTime+Rw<Date.now()}/**
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
 */async function vA({appConfig:t,heartbeatServiceProvider:e},n){const r=_A(t,n),s=eA(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Pw,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await Fw(()=>fetch(r,l));if(u.ok){const c=await u.json();return Lw(c)}else throw await Mw("Generate Auth Token",u)}function _A(t,{fid:e}){return`${Ow(t)}/${e}/authTokens:generate`}/**
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
 */async function wp(t,e=!1){let n;const r=await mc(t.appConfig,i=>{if(!Ww(i))throw $s.create("not-registered");const o=i.authToken;if(!e&&xA(o))return i;if(o.requestStatus===1)return n=wA(t,e),i;{if(!navigator.onLine)throw $s.create("app-offline");const l=IA(i);return n=EA(t,l),l}});return n?await n:r.authToken}async function wA(t,e){let n=await xy(t.appConfig);for(;n.authToken.requestStatus===1;)await Uw(100),n=await xy(t.appConfig);const r=n.authToken;return r.requestStatus===0?wp(t,e):r}function xy(t){return mc(t,e=>{if(!Ww(e))throw $s.create("not-registered");const n=e.authToken;return SA(n)?{...e,authToken:{requestStatus:0}}:e})}async function EA(t,e){try{const n=await vA(t,e),r={...e,authToken:n};return await ku(t.appConfig,r),n}catch(n){if(Vw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qw(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ku(t.appConfig,r)}throw n}}function Ww(t){return t!==void 0&&t.registrationStatus===2}function xA(t){return t.requestStatus===2&&!TA(t)}function TA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Yk}function IA(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function SA(t){return t.requestStatus===1&&t.requestTime+Rw<Date.now()}/**
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
 */async function kA(t){const e=t,{installationEntry:n,registrationPromise:r}=await _p(e);return r?r.catch(console.error):wp(e).catch(console.error),n.fid}/**
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
 */async function AA(t,e=!1){const n=t;return await CA(n),(await wp(n,e)).token}async function CA(t){const{registrationPromise:e}=await _p(t);e&&await e}/**
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
 */function bA(t){if(!t||!t.options)throw jd("App Configuration");if(!t.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jd(t){return $s.create("missing-app-config-values",{valueName:t})}/**
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
 */const Gw="installations",NA="installations-internal",RA=t=>{const e=t.getProvider("app").getImmediate(),n=bA(e),r=os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PA=t=>{const e=t.getProvider("app").getImmediate(),n=os(e,Gw).getImmediate();return{getId:()=>kA(n),getToken:s=>AA(n,s)}};function DA(){Tn(new cn(Gw,RA,"PUBLIC")),Tn(new cn(NA,PA,"PRIVATE"))}DA();jt(Nw,yp);jt(Nw,yp,"esm2020");/**
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
 */const Au="analytics",VA="firebase_id",OA="origin",LA=60*1e3,MA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
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
 */const At=new hc("@firebase/analytics");/**
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
 */const jA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Kt=new Qs("analytics","Analytics",jA);/**
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
 */function FA(t){if(!t.startsWith(Ep)){const e=Kt.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function Kw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $A(t,e){const n=UA("firebase-js-sdk-policy",{createScriptURL:FA}),r=document.createElement("script"),s=`${Ep}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function zA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BA(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await Kw(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(l){At.error(l)}t("config",s,i)}async function qA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await Kw(n);for(const u of o){const c=l.find(y=>y.measurementId===u),m=c&&e[c.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){At.error(i)}}function HA(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,u]=o;await qA(t,e,n,l,u)}else if(i==="config"){const[l,u]=o;await BA(t,e,n,r,l,u)}else if(i==="consent"){const[l,u]=o;t("consent",l,u)}else if(i==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){At.error(l)}}return s}function WA(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=HA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function GA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ep)&&n.src.includes(t))return n;return null}/**
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
 */const KA=30,QA=1e3;class YA{constructor(e={},n=QA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qw=new YA;function XA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function JA(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:XA(n)},s=MA.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let l="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Kt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function ZA(t,e=Qw,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new nC;return setTimeout(async()=>{l.abort()},LA),Yw({appId:r,apiKey:s,measurementId:i},o,l,e)}async function Yw(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Qw){var l;const{appId:i,measurementId:o}=t;try{await eC(r,e)}catch(u){if(o)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await JA(t);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!tC(c)){if(s.deleteThrottleMetadata(i),o)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const m=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?hy(n,s.intervalMillis,KA):hy(n,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return s.setThrottleMetadata(i,y),At.debug(`Calling attemptFetch again in ${m} millis`),Yw(t,y,r,s)}}function eC(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tC(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rC(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}async function sC(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function iC(){if(xw())try{await Tw()}catch(t){return At.warn(Kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oC(t,e,n,r,s,i,o){const l=ZA(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>At.error(p)),e.push(l);const u=iC().then(p=>{if(p)return r.getId()}),[c,m]=await Promise.all([l,u]);GA(i)||$A(i,c.measurementId),s("js",new Date);const y=(o==null?void 0:o.config)??{};return y[OA]="firebase",y.update=!0,m!=null&&(y[VA]=m),s("config",c.measurementId,y),c.measurementId}/**
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
 */class aC{constructor(e){this.app=e}_delete(){return delete Pi[this.app.options.appId],Promise.resolve()}}let Pi={},Ty=[];const Iy={};let Fd="dataLayer",lC="gtag",Sy,xp,ky=!1;function uC(){const t=[];if(Ew()&&t.push("This is a browser extension environment."),CS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Kt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function cC(t,e,n){uC();const r=t.options.appId;if(!r)throw Kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kt.create("no-api-key");if(Pi[r]!=null)throw Kt.create("already-exists",{id:r});if(!ky){zA(Fd);const{wrappedGtag:i,gtagCore:o}=WA(Pi,Ty,Iy,Fd,lC);xp=i,Sy=o,ky=!0}return Pi[r]=oC(t,Ty,Iy,e,Sy,Fd,n),new aC(t)}function dC(t=fc()){t=Se(t);const e=os(t,Au);return e.isInitialized()?e.getImmediate():hC(t)}function hC(t,e={}){const n=os(t,Au);if(n.isInitialized()){const s=n.getImmediate();if(Qr(e,n.getOptions()))return s;throw Kt.create("already-initialized")}return n.initialize({options:e})}function fC(t,e,n){t=Se(t),sC(xp,Pi[t.app.options.appId],e,n).catch(r=>At.error(r))}function pC(t,e,n,r){t=Se(t),rC(xp,Pi[t.app.options.appId],e,n,r).catch(s=>At.error(s))}const Ay="@firebase/analytics",Cy="0.10.19";function mC(){Tn(new cn(Au,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cC(r,s,n)},"PUBLIC")),Tn(new cn("analytics-internal",t,"PRIVATE")),jt(Ay,Cy),jt(Ay,Cy,"esm2020");function t(e){try{const n=e.getProvider(Au).getImmediate();return{logEvent:(r,s,i)=>pC(n,r,s,i),setUserProperties:(r,s)=>fC(n,r,s)}}catch(n){throw Kt.create("interop-component-reg-failed",{reason:n})}}}mC();function Xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=Xw,Jw=new Qs("auth","Firebase",Xw());/**
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
 */const Cu=new hc("@firebase/auth");function yC(t,...e){Cu.logLevel<=ce.WARN&&Cu.warn(`Auth (${to}): ${t}`,...e)}function ql(t,...e){Cu.logLevel<=ce.ERROR&&Cu.error(`Auth (${to}): ${t}`,...e)}/**
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
 */function In(t,...e){throw Tp(t,...e)}function Mn(t,...e){return Tp(t,...e)}function Zw(t,e,n){const r={...gC(),[e]:n};return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Zw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jw.create(t,...e)}function Z(t,e,...n){if(!t)throw Tp(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function ar(t,e){t||Xn(e)}/**
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
 */function Yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vC(){return by()==="http:"||by()==="https:"}function by(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function _C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vC()||Ew()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=xS()||SS()}get(){return _C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ip(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class eE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TC=new Da(3e4,6e4);function as(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hr(t,e,n,r,s={}){return tE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return IS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(c.credentials="include"),eE.fetch()(await nE(t,t.config.apiHost,n,l),c)})}async function tE(t,e,n){t._canInitEmulator=!1;const r={...EC,...e};try{const s=new SC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Il(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zw(t,m,c);In(t,m)}}catch(s){if(s instanceof dn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function Va(t,e,n,r,s={}){const i=await hr(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function nE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ip(t.config,s):`${t.config.apiScheme}://${s}`;return xC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function IC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),TC.get())})}}function Il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Mn(t,e,r);return s.customData._tokenResponse=n,s}function Ny(t){return t!==void 0&&t.enterprise!==void 0}class kC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AC(t,e){return hr(t,"GET","/v2/recaptchaConfig",as(t,e))}/**
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
 */async function CC(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function bu(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bC(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Sp(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xo(Ud(s.auth_time)),issuedAtTime:Xo(Ud(s.iat)),expirationTime:Xo(Ud(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ud(t){return Number(t)*1e3}function Sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=gw(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ry(t){const e=Sp(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&NC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class RC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xo(this.lastLoginAt),this.creationTime=Xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(t){var y;const e=t.auth,n=await t.getIdToken(),r=await qi(t,bu(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(y=s.providerUserInfo)!=null&&y.length?rE(s.providerUserInfo):[],o=DC(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,m)}async function PC(t){const e=Se(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function VC(t,e){const n=await tE(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await nE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(u.credentials="include"),eE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OC(t,e){return hr(t,"POST","/v2/accounts:revokeToken",as(t,e))}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Di;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function xr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new RC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await qi(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:y,emailVerified:p,isAnonymous:A,providerData:P,stsTokenManager:V}=n;Z(y&&V,e,"internal-error");const D=Di.fromJSON(this.name,V);Z(typeof y=="string",e,"internal-error"),xr(r,e.name),xr(s,e.name),Z(typeof p=="boolean",e,"internal-error"),Z(typeof A=="boolean",e,"internal-error"),xr(i,e.name),xr(o,e.name),xr(l,e.name),xr(u,e.name),xr(c,e.name),xr(m,e.name);const S=new _n({uid:y,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:m});return P&&Array.isArray(P)&&(S.providerData=P.map(E=>({...E}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Di;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Di;l.updateFromIdToken(r);const u=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const Py=new Map;function Jn(t){ar(t instanceof Function,"Expected a class definition");let e=Py.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Py.set(t,e),e)}/**
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
 */class sE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sE.type="NONE";const Dy=sE;/**
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
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bu(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(Jn(Dy),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Jn(Dy);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const m=await c._get(o);if(m){let y;if(typeof m=="string"){const p=await bu(e,{idToken:m}).catch(()=>{});if(!p)break;y=await _n._fromGetAccountInfoResponse(e,p,m)}else y=_n._fromJSON(e,m);c!==i&&(l=y),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Vi(i,e,r))}}/**
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
 */function Vy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cE(e))return"Blackberry";if(dE(e))return"Webos";if(oE(e))return"Safari";if((e.includes("chrome/")||aE(e))&&!e.includes("edge/"))return"Chrome";if(uE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iE(t=Tt()){return/firefox\//i.test(t)}function oE(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aE(t=Tt()){return/crios\//i.test(t)}function lE(t=Tt()){return/iemobile/i.test(t)}function uE(t=Tt()){return/android/i.test(t)}function cE(t=Tt()){return/blackberry/i.test(t)}function dE(t=Tt()){return/webos/i.test(t)}function kp(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LC(t=Tt()){var e;return kp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function MC(){return kS()&&document.documentMode===10}function hE(t=Tt()){return kp(t)||uE(t)||dE(t)||cE(t)||/windows phone/i.test(t)||lE(t)}/**
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
 */function fE(t,e=[]){let n;switch(t){case"Browser":n=Vy(Tt());break;case"Worker":n=`${Vy(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${r}`}/**
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
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function FC(t,e={}){return hr(t,"GET","/v2/passwordPolicy",as(t,e))}/**
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
 */const UC=6;class $C{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??UC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oy(this),this.idTokenSubscription=new Oy(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bu(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(er(this));const n=e?Se(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FC(this),n=new $C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&yC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return Se(t)}class Oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DS(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BC(t){gc=t}function pE(t){return gc.loadJS(t)}function qC(){return gc.recaptchaEnterpriseScript}function HC(){return gc.gapiScript}function WC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class GC{constructor(){this.enterprise=new KC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QC="recaptcha-enterprise",mE="NO_RECAPTCHA";class YC{constructor(e){this.type=QC,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{AC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new kC(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Ny(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(mE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ny(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qC();u.length!==0&&(u+=l),pE(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ly(t,e,n,r=!1,s=!1){const i=new YC(t);let o;if(s)o=mE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Jh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ly(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ly(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function XC(t,e){const n=os(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qr(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function JC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZC(t,e,n){const r=Ys(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gE(e),{host:o,port:l}=eb(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Qr(c,r.config.emulator)&&Qr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,is(o)?(pp(`${i}//${o}${u}`),mp("Auth",!0)):tb()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eb(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:My(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:My(o)}}}function My(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ap{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function nb(t,e){return hr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rb(t,e){return Va(t,"POST","/v1/accounts:signInWithPassword",as(t,e))}/**
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
 */async function sb(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",as(t,e))}async function ib(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",as(t,e))}/**
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
 */class wa extends Ap{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,n,"signInWithPassword",rb);case"emailLink":return sb(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jh(e,r,"signUpPassword",nb);case"emailLink":return ib(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oi(t,e){return Va(t,"POST","/v1/accounts:signInWithIdp",as(t,e))}/**
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
 */const ob="http://localhost";class Bs extends Ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:ob,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
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
 */function ab(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lb(t){const e=Oo(Lo(t)).link,n=e?Oo(Lo(e)).deep_link_id:null,r=Oo(Lo(t)).deep_link_id;return(r?Oo(Lo(r)).link:null)||r||n||e||t}class Cp{constructor(e){const n=Oo(Lo(e)),r=n.apiKey??null,s=n.oobCode??null,i=ab(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=lb(e);try{return new Cp(n)}catch{return null}}}/**
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
 */class no{constructor(){this.providerId=no.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cp.parseLink(n);return Z(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}no.PROVIDER_ID="password";no.EMAIL_PASSWORD_SIGN_IN_METHOD="password";no.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends yE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cr extends Oa{constructor(){super("facebook.com")}static credential(e){return Bs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
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
 */class br extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Nr extends Oa{constructor(){super("github.com")}static credential(e){return Bs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Rr extends Oa{constructor(){super("twitter.com")}static credential(e,n){return Bs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
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
 */async function ub(t,e){return Va(t,"POST","/v1/accounts:signUp",as(t,e))}/**
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
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=jy(r);return new qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jy(r);return new qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ru extends dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ru.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ru(e,n,r,s)}}function vE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ru._fromErrorAndOperation(t,i,e,r):i})}async function cb(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",r)}/**
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
 */async function db(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await qi(t,vE(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=Sp(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
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
 */async function _E(t,e,n=!1){if(qt(t.app))return Promise.reject(er(t));const r="signIn",s=await vE(t,r,e),i=await qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hb(t,e){return _E(Ys(t),e)}/**
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
 */async function wE(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fb(t,e,n){if(qt(t.app))return Promise.reject(er(t));const r=Ys(t),o=await Jh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ub).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&wE(t),u}),l=await qs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Fy(t,e,n){return qt(t.app)?Promise.reject(er(t)):hb(Se(t),no.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wE(t),r})}/**
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
 */async function pb(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qi(r,pb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gb(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function yb(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function vb(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function Sl(t){return Se(t).signOut()}const Pu="__sak";/**
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
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _b=1e3,wb=10;class xE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const Eb=xE;/**
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
 */class TE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TE.type="SESSION";const IE=TE;/**
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
 */function xb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await xb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
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
 */function bp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=bp("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const p=y;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function Ib(t){jn().location.href=t}/**
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
 */function SE(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function Sb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ab(){return SE()?self:null}/**
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
 */const kE="firebaseLocalStorageDb",Cb=1,Du="firebaseLocalStorage",AE="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vc(t,e){return t.transaction([Du],e?"readwrite":"readonly").objectStore(Du)}function bb(){const t=indexedDB.deleteDatabase(kE);return new La(t).toPromise()}function Zh(){const t=indexedDB.open(kE,Cb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Du,{keyPath:AE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Du)?e(r):(r.close(),await bb(),e(await Zh()))})})}async function Uy(t,e,n){const r=vc(t,!0).put({[AE]:e,value:n});return new La(r).toPromise()}async function Nb(t,e){const n=vc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function $y(t,e){const n=vc(t,!0).delete(e);return new La(n).toPromise()}const Rb=800,Pb=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Sb(),!this.activeServiceWorker)return;this.sender=new Tb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zh();return await Uy(e,Pu,"1"),await $y(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vc(s,!1).getAll();return new La(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const Db=CE;new Da(3e4,6e4);/**
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
 */function Vb(t,e){return e?Jn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Np extends Ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ob(t){return _E(t.auth,new Np(t),t.bypassAuthState)}function Lb(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),db(n,new Np(t),t.bypassAuthState)}async function Mb(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),cb(n,new Np(t),t.bypassAuthState)}/**
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
 */class bE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ob;case"linkViaPopup":case"linkViaRedirect":return Mb;case"reauthViaPopup":case"reauthViaRedirect":return Lb;default:In(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jb=new Da(2e3,1e4);class Si extends bE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jb.get())};e()}}Si.currentPopupAction=null;/**
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
 */const Fb="pendingRedirect",Wl=new Map;class Ub extends bE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await $b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $b(t,e){const n=qb(e),r=Bb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zb(t,e){Wl.set(t._key(),e)}function Bb(t){return Jn(t._redirectPersistence)}function qb(t){return Hl(Fb,t.config.apiKey,t.name)}async function Hb(t,e,n=!1){if(qt(t.app))return Promise.reject(er(t));const r=Ys(t),s=Vb(r,e),o=await new Ub(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wb=10*60*1e3;class Gb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wb&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NE(t);default:return!1}}/**
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
 */async function Qb(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
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
 */const Yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xb=/^https?/;async function Jb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qb(t);for(const n of e)try{if(Zb(n))return}catch{}In(t,"unauthorized-domain")}function Zb(t){const e=Yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xb.test(n))return!1;if(Yb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eN=new Da(3e4,6e4);function By(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tN(t){return new Promise((e,n)=>{var s,i,o;function r(){By(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{By(),n(Mn(t,"network-request-failed"))},timeout:eN.get()})}if((i=(s=jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const l=WC("iframefcb");return jn()[l]=()=>{gapi.load?r():n(Mn(t,"network-request-failed"))},pE(`${HC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function nN(t){return Gl=Gl||tN(t),Gl}/**
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
 */const rN=new Da(5e3,15e3),sN="__/auth/iframe",iN="emulator/auth/iframe",oN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lN(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ip(e,iN):`https://${t.config.authDomain}/${sN}`,r={apiKey:e.apiKey,appName:t.name,v:to},s=aN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pa(r).slice(1)}`}async function uN(t){const e=await nN(t),n=jn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:lN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),l=jn().setTimeout(()=>{i(o)},rN.get());function u(){jn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const cN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dN=500,hN=600,fN="_blank",pN="http://localhost";class qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mN(t,e,n,r=dN,s=hN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...cN,width:r.toString(),height:s.toString(),top:i,left:o},c=Tt().toLowerCase();n&&(l=aE(c)?fN:n),iE(c)&&(e=e||pN,u.scrollbars="yes");const m=Object.entries(u).reduce((p,[A,P])=>`${p}${A}=${P},`,"");if(LC(c)&&l!=="_self")return gN(e||"",l),new qy(null);const y=window.open(e||"",l,m);Z(y,t,"popup-blocked");try{y.focus()}catch{}return new qy(y)}function gN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yN="__/auth/handler",vN="emulator/auth/handler",_N=encodeURIComponent("fac");async function Hy(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:to,eventId:s};if(e instanceof yE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Oa){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),c=u?`#${_N}=${encodeURIComponent(u)}`:"";return`${wN(t)}?${Pa(l).slice(1)}${c}`}function wN({config:t}){return t.emulator?Ip(t,vN):`https://${t.authDomain}/${yN}`}/**
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
 */const $d="webStorageSupport";class EN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IE,this._completeRedirectFn=Hb,this._overrideRedirectResult=zb}async _openPopup(e,n,r,s){var o;ar((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Hy(e,n,r,Yh(),s);return mN(e,i,bp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hy(e,n,r,Yh(),s);return Ib(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uN(e),r=new Gb(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($d,{type:$d},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[$d];i!==void 0&&n(!!i),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hE()||oE()||kp()}}const xN=EN;var Wy="@firebase/auth",Gy="1.11.1";/**
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
 */class TN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SN(t){Tn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fE(t)},c=new zC(r,s,i,u);return JC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new cn("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new TN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Wy,Gy,IN(t)),jt(Wy,Gy,"esm2020")}/**
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
 */const kN=5*60,AN=ww("authIdTokenMaxAge")||kN;let Ky=null;const CN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AN)return;const s=n==null?void 0:n.token;Ky!==s&&(Ky=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bN(t=fc()){const e=os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XC(t,{popupRedirectResolver:xN,persistence:[Db,Eb,IE]}),r=ww("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CN(i.toString());yb(n,o,()=>o(n.currentUser)),gb(n,l=>o(l))}}const s=yw("auth");return s&&ZC(n,`http://${s}`),n}function NN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}BC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SN("Browser");var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,RE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function x(){}x.prototype=_.prototype,w.F=_.prototype,w.prototype=new x,w.prototype.constructor=w,w.D=function(I,k,N){for(var T=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)T[fe-2]=arguments[fe];return _.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,x){x||(x=0);const I=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)I[k]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(k=0;k<16;++k)I[k]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=w.g[0],x=w.g[1],k=w.g[2];let N=w.g[3],T;T=_+(N^x&(k^N))+I[0]+3614090360&4294967295,_=x+(T<<7&4294967295|T>>>25),T=N+(k^_&(x^k))+I[1]+3905402710&4294967295,N=_+(T<<12&4294967295|T>>>20),T=k+(x^N&(_^x))+I[2]+606105819&4294967295,k=N+(T<<17&4294967295|T>>>15),T=x+(_^k&(N^_))+I[3]+3250441966&4294967295,x=k+(T<<22&4294967295|T>>>10),T=_+(N^x&(k^N))+I[4]+4118548399&4294967295,_=x+(T<<7&4294967295|T>>>25),T=N+(k^_&(x^k))+I[5]+1200080426&4294967295,N=_+(T<<12&4294967295|T>>>20),T=k+(x^N&(_^x))+I[6]+2821735955&4294967295,k=N+(T<<17&4294967295|T>>>15),T=x+(_^k&(N^_))+I[7]+4249261313&4294967295,x=k+(T<<22&4294967295|T>>>10),T=_+(N^x&(k^N))+I[8]+1770035416&4294967295,_=x+(T<<7&4294967295|T>>>25),T=N+(k^_&(x^k))+I[9]+2336552879&4294967295,N=_+(T<<12&4294967295|T>>>20),T=k+(x^N&(_^x))+I[10]+4294925233&4294967295,k=N+(T<<17&4294967295|T>>>15),T=x+(_^k&(N^_))+I[11]+2304563134&4294967295,x=k+(T<<22&4294967295|T>>>10),T=_+(N^x&(k^N))+I[12]+1804603682&4294967295,_=x+(T<<7&4294967295|T>>>25),T=N+(k^_&(x^k))+I[13]+4254626195&4294967295,N=_+(T<<12&4294967295|T>>>20),T=k+(x^N&(_^x))+I[14]+2792965006&4294967295,k=N+(T<<17&4294967295|T>>>15),T=x+(_^k&(N^_))+I[15]+1236535329&4294967295,x=k+(T<<22&4294967295|T>>>10),T=_+(k^N&(x^k))+I[1]+4129170786&4294967295,_=x+(T<<5&4294967295|T>>>27),T=N+(x^k&(_^x))+I[6]+3225465664&4294967295,N=_+(T<<9&4294967295|T>>>23),T=k+(_^x&(N^_))+I[11]+643717713&4294967295,k=N+(T<<14&4294967295|T>>>18),T=x+(N^_&(k^N))+I[0]+3921069994&4294967295,x=k+(T<<20&4294967295|T>>>12),T=_+(k^N&(x^k))+I[5]+3593408605&4294967295,_=x+(T<<5&4294967295|T>>>27),T=N+(x^k&(_^x))+I[10]+38016083&4294967295,N=_+(T<<9&4294967295|T>>>23),T=k+(_^x&(N^_))+I[15]+3634488961&4294967295,k=N+(T<<14&4294967295|T>>>18),T=x+(N^_&(k^N))+I[4]+3889429448&4294967295,x=k+(T<<20&4294967295|T>>>12),T=_+(k^N&(x^k))+I[9]+568446438&4294967295,_=x+(T<<5&4294967295|T>>>27),T=N+(x^k&(_^x))+I[14]+3275163606&4294967295,N=_+(T<<9&4294967295|T>>>23),T=k+(_^x&(N^_))+I[3]+4107603335&4294967295,k=N+(T<<14&4294967295|T>>>18),T=x+(N^_&(k^N))+I[8]+1163531501&4294967295,x=k+(T<<20&4294967295|T>>>12),T=_+(k^N&(x^k))+I[13]+2850285829&4294967295,_=x+(T<<5&4294967295|T>>>27),T=N+(x^k&(_^x))+I[2]+4243563512&4294967295,N=_+(T<<9&4294967295|T>>>23),T=k+(_^x&(N^_))+I[7]+1735328473&4294967295,k=N+(T<<14&4294967295|T>>>18),T=x+(N^_&(k^N))+I[12]+2368359562&4294967295,x=k+(T<<20&4294967295|T>>>12),T=_+(x^k^N)+I[5]+4294588738&4294967295,_=x+(T<<4&4294967295|T>>>28),T=N+(_^x^k)+I[8]+2272392833&4294967295,N=_+(T<<11&4294967295|T>>>21),T=k+(N^_^x)+I[11]+1839030562&4294967295,k=N+(T<<16&4294967295|T>>>16),T=x+(k^N^_)+I[14]+4259657740&4294967295,x=k+(T<<23&4294967295|T>>>9),T=_+(x^k^N)+I[1]+2763975236&4294967295,_=x+(T<<4&4294967295|T>>>28),T=N+(_^x^k)+I[4]+1272893353&4294967295,N=_+(T<<11&4294967295|T>>>21),T=k+(N^_^x)+I[7]+4139469664&4294967295,k=N+(T<<16&4294967295|T>>>16),T=x+(k^N^_)+I[10]+3200236656&4294967295,x=k+(T<<23&4294967295|T>>>9),T=_+(x^k^N)+I[13]+681279174&4294967295,_=x+(T<<4&4294967295|T>>>28),T=N+(_^x^k)+I[0]+3936430074&4294967295,N=_+(T<<11&4294967295|T>>>21),T=k+(N^_^x)+I[3]+3572445317&4294967295,k=N+(T<<16&4294967295|T>>>16),T=x+(k^N^_)+I[6]+76029189&4294967295,x=k+(T<<23&4294967295|T>>>9),T=_+(x^k^N)+I[9]+3654602809&4294967295,_=x+(T<<4&4294967295|T>>>28),T=N+(_^x^k)+I[12]+3873151461&4294967295,N=_+(T<<11&4294967295|T>>>21),T=k+(N^_^x)+I[15]+530742520&4294967295,k=N+(T<<16&4294967295|T>>>16),T=x+(k^N^_)+I[2]+3299628645&4294967295,x=k+(T<<23&4294967295|T>>>9),T=_+(k^(x|~N))+I[0]+4096336452&4294967295,_=x+(T<<6&4294967295|T>>>26),T=N+(x^(_|~k))+I[7]+1126891415&4294967295,N=_+(T<<10&4294967295|T>>>22),T=k+(_^(N|~x))+I[14]+2878612391&4294967295,k=N+(T<<15&4294967295|T>>>17),T=x+(N^(k|~_))+I[5]+4237533241&4294967295,x=k+(T<<21&4294967295|T>>>11),T=_+(k^(x|~N))+I[12]+1700485571&4294967295,_=x+(T<<6&4294967295|T>>>26),T=N+(x^(_|~k))+I[3]+2399980690&4294967295,N=_+(T<<10&4294967295|T>>>22),T=k+(_^(N|~x))+I[10]+4293915773&4294967295,k=N+(T<<15&4294967295|T>>>17),T=x+(N^(k|~_))+I[1]+2240044497&4294967295,x=k+(T<<21&4294967295|T>>>11),T=_+(k^(x|~N))+I[8]+1873313359&4294967295,_=x+(T<<6&4294967295|T>>>26),T=N+(x^(_|~k))+I[15]+4264355552&4294967295,N=_+(T<<10&4294967295|T>>>22),T=k+(_^(N|~x))+I[6]+2734768916&4294967295,k=N+(T<<15&4294967295|T>>>17),T=x+(N^(k|~_))+I[13]+1309151649&4294967295,x=k+(T<<21&4294967295|T>>>11),T=_+(k^(x|~N))+I[4]+4149444226&4294967295,_=x+(T<<6&4294967295|T>>>26),T=N+(x^(_|~k))+I[11]+3174756917&4294967295,N=_+(T<<10&4294967295|T>>>22),T=k+(_^(N|~x))+I[2]+718787259&4294967295,k=N+(T<<15&4294967295|T>>>17),T=x+(N^(k|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const x=_-this.blockSize,I=this.C;let k=this.h,N=0;for(;N<_;){if(k==0)for(;N<=x;)s(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<_;)if(I[k++]=w.charCodeAt(N++),k==this.blockSize){s(this,I),k=0;break}}else for(;N<_;)if(I[k++]=w[N++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var x=w.length-8;x<w.length;++x)w[x]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,x=0;x<4;++x)for(let I=0;I<32;I+=8)w[_++]=this.g[x]>>>I&255;return w};function i(w,_){var x=l;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=_(w)}function o(w,_){this.h=_;const x=[];let I=!0;for(let k=w.length-1;k>=0;k--){const N=w[k]|0;I&&N==_||(x[k]=N,I=!1)}this.g=x}var l={};function u(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return y;if(w<0)return D(c(-w));const _=[];let x=1;for(let I=0;w>=x;I++)_[I]=w/x|0,x*=4294967296;return new o(_,0)}function m(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return D(m(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=c(Math.pow(_,8));let I=y;for(let N=0;N<w.length;N+=8){var k=Math.min(8,w.length-N);const T=parseInt(w.substring(N,N+k),_);k<8?(k=c(Math.pow(_,k)),I=I.j(k).add(c(T))):(I=I.j(x),I=I.add(c(T)))}return I}var y=u(0),p=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();let w=0,_=1;for(let x=0;x<this.g.length;x++){const I=this.i(x);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(V(this))return"-"+D(this).toString(w);const _=c(Math.pow(w,6));var x=this;let I="";for(;;){const k=j(x,_).g;x=S(x,k.j(_));let N=((x.g.length>0?x.g[0]:x.h)>>>0).toString(w);if(x=k,P(x))return N+I;for(;N.length<6;)N="0"+N;I=N+I}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}t.l=function(w){return w=S(this,w),V(w)?-1:P(w)?0:1};function D(w){const _=w.g.length,x=[];for(let I=0;I<_;I++)x[I]=~w.g[I];return new o(x,~w.h).add(p)}t.abs=function(){return V(this)?D(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),x=[];let I=0;for(let k=0;k<=_;k++){let N=I+(this.i(k)&65535)+(w.i(k)&65535),T=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);I=T>>>16,N&=65535,T&=65535,x[k]=T<<16|N}return new o(x,x[x.length-1]&-2147483648?-1:0)};function S(w,_){return w.add(D(_))}t.j=function(w){if(P(this)||P(w))return y;if(V(this))return V(w)?D(this).j(D(w)):D(D(this).j(w));if(V(w))return D(this.j(D(w)));if(this.l(A)<0&&w.l(A)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,x=[];for(var I=0;I<2*_;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<w.g.length;k++){const N=this.i(I)>>>16,T=this.i(I)&65535,fe=w.i(k)>>>16,nt=w.i(k)&65535;x[2*I+2*k]+=T*nt,E(x,2*I+2*k),x[2*I+2*k+1]+=N*nt,E(x,2*I+2*k+1),x[2*I+2*k+1]+=T*fe,E(x,2*I+2*k+1),x[2*I+2*k+2]+=N*fe,E(x,2*I+2*k+2)}for(w=0;w<_;w++)x[w]=x[2*w+1]<<16|x[2*w];for(w=_;w<2*_;w++)x[w]=0;return new o(x,0)};function E(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function C(w,_){this.g=w,this.h=_}function j(w,_){if(P(_))throw Error("division by zero");if(P(w))return new C(y,y);if(V(w))return _=j(D(w),_),new C(D(_.g),D(_.h));if(V(_))return _=j(w,D(_)),new C(D(_.g),_.h);if(w.g.length>30){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var x=p,I=_;I.l(w)<=0;)x=$(x),I=$(I);var k=B(x,1),N=B(I,1);for(I=B(I,2),x=B(x,2);!P(I);){var T=N.add(I);T.l(w)<=0&&(k=k.add(x),N=T),I=B(I,1),x=B(x,1)}return _=S(w,k.j(_)),new C(k,_)}for(k=y;w.l(_)>=0;){for(x=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),N=c(x),T=N.j(_);V(T)||T.l(w)>0;)x-=I,N=c(x),T=N.j(_);P(N)&&(N=p),k=k.add(N),w=S(w,T)}return new C(k,w)}t.B=function(w){return j(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)&w.i(I);return new o(x,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)|w.i(I);return new o(x,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let I=0;I<_;I++)x[I]=this.i(I)^w.i(I);return new o(x,this.h^w.h)};function $(w){const _=w.g.length+1,x=[];for(let I=0;I<_;I++)x[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(x,w.h)}function B(w,_){const x=_>>5;_%=32;const I=w.g.length-x,k=[];for(let N=0;N<I;N++)k[N]=_>0?w.i(N+x)>>>_|w.i(N+x+1)<<32-_:w.i(N+x);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,RE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=m,Hr=o}).apply(typeof Qy<"u"?Qy:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PE,Mo,DE,Kl,ef,VE,OE,LE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var R=a[v];if(!(R in f))break e;f=f[R]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var f=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&f.push([v,d[v]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,f){return a.call.apply(a.bind,arguments)}function c(a,d,f){return c=u,c.apply(null,arguments)}function m(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function y(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(v,R,O){for(var z=Array(arguments.length-2),le=2;le<arguments.length;le++)z[le-2]=arguments[le];return d.prototype[R].apply(v,z)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const d=a.length;if(d>0){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function P(a,d){for(let v=1;v<arguments.length;v++){const R=arguments[v];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=a.length||0;const O=R.length||0;a.length=f+O;for(let z=0;z<O;z++)a[f+z]=R[z]}else a.push(R)}}class V{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class E{constructor(){this.h=this.g=null}add(d,f){const v=C.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var C=new V(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let $,B=!1,w=new E,_=()=>{const a=Promise.resolve(void 0);$=()=>{a.then(x)}};function x(){for(var a;a=S();){try{a.h.call(a.g)}catch(f){D(f)}var d=C;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}B=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function fe(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}y(fe,k),fe.prototype.init=function(a,d){const f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nt="closure_listenable_"+(Math.random()*1e6|0),kn=0;function ei(a,d,f,v,R){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=R,this.key=++kn,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function J(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function ae(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function Ee(a){const d={};for(const f in a)d[f]=a[f];return d}const De="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jt(a,d){let f,v;for(let R=1;R<arguments.length;R++){v=arguments[R];for(f in v)a[f]=v[f];for(let O=0;O<De.length;O++)f=De[O],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function It(a){this.src=a,this.g={},this.h=0}It.prototype.add=function(a,d,f,v,R){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const z=Ut(a,d,v,R);return z>-1?(d=a[z],f||(d.fa=!1)):(d=new ei(d,this.src,O,!!v,R),d.fa=f,a.push(d)),d};function Zt(a,d){const f=d.type;if(f in a.g){var v=a.g[f],R=Array.prototype.indexOf.call(v,d,void 0),O;(O=R>=0)&&Array.prototype.splice.call(v,R,1),O&&(H(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ut(a,d,f,v){for(let R=0;R<a.length;++R){const O=a[R];if(!O.da&&O.listener==d&&O.capture==!!f&&O.ha==v)return R}return-1}var $t="closure_lm_"+(Math.random()*1e6|0),en={};function cs(a,d,f,v,R){if(Array.isArray(d)){for(let O=0;O<d.length;O++)cs(a,d[O],f,v,R);return null}return f=ni(f),a&&a[nt]?a.J(d,f,l(v)?!!v.capture:!1,R):Q(a,d,f,!1,v,R)}function Q(a,d,f,v,R,O){if(!d)throw Error("Invalid event type");const z=l(R)?!!R.capture:!!R;let le=ds(a);if(le||(a[$t]=le=new It(a)),f=le.add(d,f,v,z,O),f.proxy)return f;if(v=Be(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)N||(R=z),R===void 0&&(R=!1),a.addEventListener(d.toString(),v,R);else if(a.attachEvent)a.attachEvent(ti(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Be(){function a(f){return d.call(a.src,a.listener,f)}const d=Fc;return a}function ye(a,d,f,v,R){if(Array.isArray(d))for(var O=0;O<d.length;O++)ye(a,d[O],f,v,R);else v=l(v)?!!v.capture:!!v,f=ni(f),a&&a[nt]?(a=a.i,O=String(d).toString(),O in a.g&&(d=a.g[O],f=Ut(d,f,v,R),f>-1&&(H(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[O],a.h--)))):a&&(a=ds(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ut(d,f,v,R)),(f=a>-1?d[a]:null)&&hn(f))}function hn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[nt])Zt(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(ti(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=ds(d))?(Zt(f,a),f.h==0&&(f.src=null,d[$t]=null)):H(a)}}}function ti(a){return a in en?en[a]:en[a]="on"+a}function Fc(a,d){if(a.da)a=!0;else{d=new fe(d,this);const f=a.listener,v=a.ha||a.src;a.fa&&hn(a),a=f.call(v,d)}return a}function ds(a){return a=a[$t],a instanceof It?a:null}var ao="__closure_events_fn_"+(Math.random()*1e9>>>0);function ni(a){return typeof a=="function"?a:(a[ao]||(a[ao]=function(d){return a.handleEvent(d)}),a[ao])}function rt(){I.call(this),this.i=new It(this),this.M=this,this.G=null}y(rt,I),rt.prototype[nt]=!0,rt.prototype.removeEventListener=function(a,d,f,v){ye(this,a,d,f,v)};function qe(a,d){var f,v=a.G;if(v)for(f=[];v;v=v.G)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var R=d;d=new k(v,a),Jt(d,R)}R=!0;let O,z;if(f)for(z=f.length-1;z>=0;z--)O=d.g=f[z],R=ri(O,v,!0,d)&&R;if(O=d.g=a,R=ri(O,v,!0,d)&&R,R=ri(O,v,!1,d)&&R,f)for(z=0;z<f.length;z++)O=d.g=f[z],R=ri(O,v,!1,d)&&R}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let v=0;v<f.length;v++)H(f[v]);delete a.g[d],a.h--}}this.G=null},rt.prototype.J=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},rt.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function ri(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let R=!0;for(let O=0;O<d.length;++O){const z=d[O];if(z&&!z.da&&z.capture==f){const le=z.listener,Xe=z.ha||z.src;z.fa&&Zt(a.i,z),R=le.call(Xe,v)!==!1&&R}}return R&&!v.defaultPrevented}function Uc(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function lo(a){a.g=Uc(()=>{a.g=null,a.i&&(a.i=!1,lo(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ke extends I{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){I.call(this),this.h=a,this.g={}}y(hs,I);var qa=[];function fr(a){J(a.g,function(d,f){this.g.hasOwnProperty(f)&&hn(d)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),fr(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qn=o.JSON.stringify,$c=o.JSON.parse,fs=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ha(){}function zc(){}var ps={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function X(){k.call(this,"d")}y(X,k);function Hn(){k.call(this,"c")}y(Hn,k);var Wn={},Wa=null;function ms(){return Wa=Wa||new rt}Wn.Ia="serverreachability";function Ga(a){k.call(this,Wn.Ia,a)}y(Ga,k);function gs(a){const d=ms();qe(d,new Ga(d))}Wn.STAT_EVENT="statevent";function Ka(a,d){k.call(this,Wn.STAT_EVENT,a),this.stat=d}y(Ka,k);function st(a){const d=ms();qe(d,new Ka(d,a))}Wn.Ja="timingevent";function fn(a,d){k.call(this,Wn.Ja,a),this.size=d}y(fn,k);function ys(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function Qa(a,d,f,v,R,O){a.info(function(){if(a.g)if(O){var z="",le=O.split("&");for(let xe=0;xe<le.length;xe++){var Xe=le[xe].split("=");if(Xe.length>1){const it=Xe[0];Xe=Xe[1];const bn=it.split("_");z=bn.length>=2&&bn[1]=="type"?z+(it+"="+Xe+"&"):z+(it+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+v+") [attempt "+R+"]: "+d+`
`+f+`
`+z})}function Bc(a,d,f,v,R,O,z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+R+"]: "+d+`
`+f+`
`+O+" "+z})}function mr(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+qc(a,f)+(v?" "+v:"")})}function Ya(a,d){a.info(function(){return"TIMEOUT: "+d})}pr.prototype.info=function(){};function qc(a,d){if(!a.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var v=f[1];if(Array.isArray(v)&&!(v.length<1)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(let z=1;z<v.length;z++)v[z]=""}}}}return qn(O)}catch{return d}}var si={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ja;function uo(){}y(uo,Ha),uo.prototype.g=function(){return new XMLHttpRequest},Ja=new uo;function pn(a){return encodeURIComponent(String(a))}function Hc(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function An(a,d,f,v){this.j=a,this.i=d,this.l=f,this.S=v||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new g}function g(){this.i=null,this.g="",this.h=!1}var b={},L={};function q(a,d,f){a.M=1,a.A=Za(Cn(d)),a.u=f,a.R=!0,te(a,null)}function te(a,d){a.F=Date.now(),ie(a),a.B=Cn(a.A);var f=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),km(f.i,"t",v),a.C=0,f=a.j.L,a.h=new g,a.g=qm(a.j,f?d:null,!a.u),a.P>0&&(a.O=new ke(c(a.Y,a,a.g),a.P)),d=a.V,f=a.g,v=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(qa[0]=R.toString()),R=qa);for(let O=0;O<R.length;O++){const z=cs(f,R[O],v||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=a.J?Ee(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),gs(),Qa(a.i,a.v,a.B,a.l,a.S,a.u)}An.prototype.ba=function(a){a=a.target;const d=this.O;d&&vr(a)==3?d.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const le=vr(this.g),Xe=this.g.ya(),xe=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Dm(this.g)))){this.K||le!=4||Xe==7||(Xe==8||xe<=0?gs(3):gs(2)),ii(this);var d=this.g.ca();this.X=d;var f=ne(this);if(this.o=d==200,Bc(this.i,this.v,this.B,this.l,this.S,le,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,R=this.g;if((v=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var O=v;break t}}O=null}if(a=O)mr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wc(this,a);else{this.o=!1,this.m=3,st(12),vs(this),co(this);break e}}if(this.R){a=!0;let it;for(;!this.K&&this.C<f.length;)if(it=ve(this,f),it==L){le==4&&(this.m=4,st(14),a=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(it==b){this.m=4,st(15),mr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else mr(this.i,this.l,it,null),Wc(this,it);if(pe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)mr(this.i,this.l,f,"[Invalid Chunked Response]"),vs(this),co(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ed(z),z.P=!0,st(11))}}else mr(this.i,this.l,f,null),Wc(this,f);le==4&&vs(this),this.o&&!this.K&&(le==4?Um(this.j,this):(this.o=!1,ie(this)))}else xT(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),vs(this),co(this)}}}catch{}finally{}};function ne(a){if(!pe(a))return a.g.la();const d=Dm(a.g);if(d==="")return"";let f="";const v=d.length,R=vr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return vs(a),co(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<v;O++)a.h.h=!0,f+=a.h.i.decode(d[O],{stream:!(R&&O==v-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function pe(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ve(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?L:(f=Number(d.substring(f,v)),isNaN(f)?b:(v+=1,v+f>d.length?L:(d=d.slice(v,v+f),a.C=v+f,d)))}An.prototype.cancel=function(){this.K=!0,vs(this)};function ie(a){a.T=Date.now()+a.H,Fe(a,a.H)}function Fe(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ys(c(a.aa,a),d)}function ii(a){a.D&&(o.clearTimeout(a.D),a.D=null)}An.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ya(this.i,this.B),this.M!=2&&(gs(),st(17)),vs(this),this.m=2,co(this)):Fe(this,this.T-a)};function co(a){a.j.I==0||a.K||Um(a.j,a)}function vs(a){ii(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,fr(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Wc(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||Gc(f.h,a))){if(!a.L&&Gc(f.h,a)&&f.I==3){try{var v=f.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var R=v;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)sl(f),nl(f);else break e;Zc(f),st(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ys(c(f.Va,f),6e3));vm(f.h)<=1&&f.ta&&(f.ta=void 0)}else ws(f,11)}else if((a.L||f.g==a)&&sl(f),!T(d))for(R=f.Ba.g.parse(d),d=0;d<R.length;d++){let xe=R[d];const it=xe[0];if(!(it<=f.K))if(f.K=it,xe=xe[1],f.I==2)if(xe[0]=="c"){f.M=xe[1],f.ba=xe[2];const bn=xe[3];bn!=null&&(f.ka=bn,f.j.info("VER="+f.ka));const Es=xe[4];Es!=null&&(f.za=Es,f.j.info("SVER="+f.za));const _r=xe[5];_r!=null&&typeof _r=="number"&&_r>0&&(v=1.5*_r,f.O=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const wr=a.g;if(wr){const ol=wr.g?wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ol){var O=v.h;O.g||ol.indexOf("spdy")==-1&&ol.indexOf("quic")==-1&&ol.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Kc(O,O.h),O.h=null))}if(v.G){const td=wr.g?wr.g.getResponseHeader("X-HTTP-Session-Id"):null;td&&(v.wa=td,Ae(v.J,v.G,td))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),v=f;var z=a;if(v.na=Bm(v,v.L?v.ba:null,v.W),z.L){_m(v.h,z);var le=z,Xe=v.O;Xe&&(le.H=Xe),le.D&&(ii(le),ie(le)),v.g=z}else jm(v);f.i.length>0&&rl(f)}else xe[0]!="stop"&&xe[0]!="close"||ws(f,7);else f.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?ws(f,7):Jc(f):xe[0]!="noop"&&f.l&&f.l.qa(xe),f.A=0)}}gs(4)}catch{}}var uT=class{constructor(a,d){this.g=a,this.map=d}};function gm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vm(a){return a.h?1:a.g?a.g.size:0}function Gc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Kc(a,d){a.g?a.g.add(d):a.h=d}function _m(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}gm.prototype.cancel=function(){if(this.i=wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return A(a.i)}var Em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cT(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const v=a[f].indexOf("=");let R,O=null;v>=0?(R=a[f].substring(0,v),O=a[f].substring(v+1)):R=a[f],d(R,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function gr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof gr?(this.l=a.l,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.u),this.h=a.h,Qc(this,Am(a.i)),this.m=a.m):a&&(d=String(a).match(Em))?(this.l=!1,ho(this,d[1]||"",!0),this.o=po(d[2]||""),this.g=po(d[3]||"",!0),fo(this,d[4]),this.h=po(d[5]||"",!0),Qc(this,d[6]||"",!0),this.m=po(d[7]||"")):(this.l=!1,this.i=new go(null,this.l))}gr.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(mo(d,xm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(mo(d,xm,!0),"@"),a.push(pn(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(mo(f,f.charAt(0)=="/"?fT:hT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",mo(f,mT)),a.join("")},gr.prototype.resolve=function(a){const d=Cn(this);let f=!!a.j;f?ho(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var v=a.h;if(f)fo(d,a.u);else if(f=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var R=d.h.lastIndexOf("/");R!=-1&&(v=d.h.slice(0,R+1)+v)}if(R=v,R==".."||R==".")v="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){v=R.lastIndexOf("/",0)==0,R=R.split("/");const O=[];for(let z=0;z<R.length;){const le=R[z++];le=="."?v&&z==R.length&&O.push(""):le==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),v&&z==R.length&&O.push("")):(O.push(le),v=!0)}v=O.join("/")}else v=R}return f?d.h=v:f=a.i.toString()!=="",f?Qc(d,Am(a.i)):f=!!a.m,f&&(d.m=a.m),d};function Cn(a){return new gr(a)}function ho(a,d,f){a.j=f?po(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Qc(a,d,f){d instanceof go?(a.i=d,gT(a.i,a.l)):(f||(d=mo(d,pT)),a.i=new go(d,a.l))}function Ae(a,d,f){a.i.set(d,f)}function Za(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function po(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mo(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,dT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xm=/[#\/\?@]/g,hT=/[#\?:]/g,fT=/[#\?]/g,pT=/[#\?@]/g,mT=/#/g;function go(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function _s(a){a.g||(a.g=new Map,a.h=0,a.i&&cT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=go.prototype,t.add=function(a,d){_s(this),this.i=null,a=oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Tm(a,d){_s(a),d=oi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Im(a,d){return _s(a),d=oi(a,d),a.g.has(d)}t.forEach=function(a,d){_s(this),this.g.forEach(function(f,v){f.forEach(function(R){a.call(d,R,v,this)},this)},this)};function Sm(a,d){_s(a);let f=[];if(typeof d=="string")Im(a,d)&&(f=f.concat(a.g.get(oi(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}t.set=function(a,d){return _s(this),this.i=null,a=oi(this,a),Im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Sm(this,a),a.length>0?String(a[0]):d):d};function km(a,d,f){Tm(a,d),f.length>0&&(a.i=null,a.g.set(oi(a,d),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var f=d[v];const R=pn(f);f=Sm(this,f);for(let O=0;O<f.length;O++){let z=R;f[O]!==""&&(z+="="+pn(f[O])),a.push(z)}}return this.i=a.join("&")};function Am(a){const d=new go;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function oi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function gT(a,d){d&&!a.j&&(_s(a),a.i=null,a.g.forEach(function(f,v){const R=v.toLowerCase();v!=R&&(Tm(this,v),km(this,R,f))},a)),a.j=d}function yT(a,d){const f=new pr;if(o.Image){const v=new Image;v.onload=m(yr,f,"TestLoadImage: loaded",!0,d,v),v.onerror=m(yr,f,"TestLoadImage: error",!1,d,v),v.onabort=m(yr,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=m(yr,f,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function vT(a,d){const f=new pr,v=new AbortController,R=setTimeout(()=>{v.abort(),yr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(O=>{clearTimeout(R),O.ok?yr(f,"TestPingServer: ok",!0,d):yr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),yr(f,"TestPingServer: error",!1,d)})}function yr(a,d,f,v,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),v(f)}catch{}}function _T(){this.g=new fs}function Yc(a){this.i=a.Sb||null,this.h=a.ab||!1}y(Yc,Ha),Yc.prototype.g=function(){return new el(this.i,this.h)};function el(a,d){rt.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(el,rt),t=el.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,vo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vo(this)),this.g&&(this.readyState=3,vo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Cm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Cm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?yo(this):vo(this),this.readyState==3&&Cm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,yo(this))},t.Na=function(a){this.g&&(this.response=a,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,vo(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function vo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(el.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bm(a){let d="";return J(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function Xc(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=bm(f),typeof a=="string"?f!=null&&pn(f):Ae(a,d,f))}function Ue(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(Ue,rt);var wT=/^https?$/i,ET=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ja.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Nm(this,O);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var R in v)f.set(R,v[R]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())f.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ET,d,void 0)>=0)||v||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Nm(this,O)}};function Nm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Rm(a),tl(a)}function Rm(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),tl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tl(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Pm(this):this.Xa())},t.Xa=function(){Pm(this)};function Pm(a){if(a.h&&typeof i<"u"){if(a.v&&vr(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),vr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=O===0){let z=String(a.D).match(Em)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),v=!wT.test(z?z.toLowerCase():"")}f=v}if(f)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var R=vr(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Rm(a)}}finally{tl(a)}}}}function tl(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||qe(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function vr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),$c(d)}};function Dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(a){const d={};a=(a.g&&vr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(T(a[v]))continue;var f=Hc(a[v]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=d[R]||[];d[R]=O,O.push(f)}ae(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Vm(a){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_o("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_o("baseRetryDelayMs",5e3,a),this.Za=_o("retryDelaySeedMs",1e4,a),this.Ta=_o("forwardChannelMaxRetries",2,a),this.va=_o("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gm(a&&a.concurrentRequestLimit),this.Ba=new _T,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,f,v){st(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.J=Bm(this,null,this.W),rl(this)};function Jc(a){if(Om(a),a.I==3){var d=a.V++,f=Cn(a.J);if(Ae(f,"SID",a.M),Ae(f,"RID",d),Ae(f,"TYPE","terminate"),wo(a,f),d=new An(a,a.j,d),d.M=2,d.A=Za(Cn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=qm(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ie(d)}zm(a)}function nl(a){a.g&&(ed(a),a.g.cancel(),a.g=null)}function Om(a){nl(a),a.v&&(o.clearTimeout(a.v),a.v=null),sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function rl(a){if(!ym(a.h)&&!a.m){a.m=!0;var d=a.Ea;$||_(),B||($(),B=!0),w.add(d,a),a.D=0}}function TT(a,d){return vm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ys(c(a.Ea,a,d),$m(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new An(this,this.j,a);let O=this.o;if(this.U&&(O?(O=Ee(O),Jt(O,this.U)):O=this.U),this.u!==null||this.R||(R.J=O,O=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Mm(this,R,d),f=Cn(this.J),Ae(f,"RID",a),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),wo(this,f),O&&(this.R?d="headers="+pn(bm(O))+"&"+d:this.u&&Xc(f,this.u,O)),Kc(this.h,R),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",d),Ae(f,"SID","null"),R.U=!0,q(R,f,null)):q(R,f,d),this.I=2}}else this.I==3&&(a?Lm(this,a):this.i.length==0||ym(this.h)||Lm(this))};function Lm(a,d){var f;d?f=d.l:f=a.V++;const v=Cn(a.J);Ae(v,"SID",a.M),Ae(v,"RID",f),Ae(v,"AID",a.K),wo(a,v),a.u&&a.o&&Xc(v,a.u,a.o),f=new An(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Mm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Kc(a.h,f),q(f,v,d)}function wo(a,d){a.H&&J(a.H,function(f,v){Ae(d,v,f)}),a.l&&J({},function(f,v){Ae(d,v,f)})}function Mm(a,d,f){f=Math.min(a.i.length,f);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var R=a.i;let le=-1;for(;;){const Xe=["count="+f];le==-1?f>0?(le=R[0].g,Xe.push("ofs="+le)):le=0:Xe.push("ofs="+le);let xe=!0;for(let it=0;it<f;it++){var O=R[it].g;const bn=R[it].map;if(O-=le,O<0)le=Math.max(0,R[it].g-100),xe=!1;else try{O="req"+O+"_"||"";try{var z=bn instanceof Map?bn:Object.entries(bn);for(const[Es,_r]of z){let wr=_r;l(_r)&&(wr=qn(_r)),Xe.push(O+Es+"="+encodeURIComponent(wr))}}catch(Es){throw Xe.push(O+"type="+encodeURIComponent("_badmap")),Es}}catch{v&&v(bn)}}if(xe){z=Xe.join("&");break e}}z=void 0}return a=a.i.splice(0,f),d.G=a,z}function jm(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;$||_(),B||($(),B=!0),w.add(d,a),a.A=0}}function Zc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ys(c(a.Da,a),$m(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Fm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ys(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),nl(this),Fm(this))};function ed(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Fm(a){a.g=new An(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=Cn(a.na);Ae(d,"RID","rpc"),Ae(d,"SID",a.M),Ae(d,"AID",a.K),Ae(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(d,"TO",a.ia),Ae(d,"TYPE","xmlhttp"),wo(a,d),a.u&&a.o&&Xc(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Za(Cn(d)),f.u=null,f.R=!0,te(f,a)}t.Va=function(){this.C!=null&&(this.C=null,nl(this),Zc(this),st(19))};function sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Um(a,d){var f=null;if(a.g==d){sl(a),ed(a),a.g=null;var v=2}else if(Gc(a.h,d))f=d.G,_m(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var R=a.D;v=ms(),qe(v,new fn(v,f)),rl(a)}else jm(a);else if(R=d.m,R==3||R==0&&d.X>0||!(v==1&&TT(a,d)||v==2&&Zc(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),R){case 1:ws(a,5);break;case 4:ws(a,10);break;case 3:ws(a,6);break;default:ws(a,2)}}}function $m(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function ws(a,d){if(a.j.info("Error code "+d),d==2){var f=c(a.bb,a),v=a.Ua;const R=!v;v=new gr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ho(v,"https"),Za(v),R?yT(v.toString(),f):vT(v.toString(),f)}else st(2);a.I=0,a.l&&a.l.pa(d),zm(a),Om(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function zm(a){if(a.I=0,a.ja=[],a.l){const d=wm(a.h);(d.length!=0||a.i.length!=0)&&(P(a.ja,d),P(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Bm(a,d,f){var v=f instanceof gr?Cn(f):new gr(f);if(v.g!="")d&&(v.g=d+"."+v.g),fo(v,v.u);else{var R=o.location;v=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;const O=new gr(null);v&&ho(O,v),d&&(O.g=d),R&&fo(O,R),f&&(O.h=f),v=O}return f=a.G,d=a.wa,f&&d&&Ae(v,f,d),Ae(v,"VER",a.ka),wo(a,v),v}function qm(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ue(new Yc({ab:f})):new Ue(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hm(){}t=Hm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function il(){}il.prototype.g=function(a,d){return new zt(a,d)};function zt(a,d){rt.call(this),this.g=new Vm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ai(this)}y(zt,rt),zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Jc(this.g)},zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=qn(a),a=f);d.i.push(new uT(d.Ya++,a)),d.I==3&&rl(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,zt.Z.N.call(this)};function Wm(a){X.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}y(Wm,X);function Gm(){Hn.call(this),this.status=1}y(Gm,Hn);function ai(a){this.g=a}y(ai,Hm),ai.prototype.ra=function(){qe(this.g,"a")},ai.prototype.qa=function(a){qe(this.g,new Wm(a))},ai.prototype.pa=function(a){qe(this.g,new Gm)},ai.prototype.oa=function(){qe(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,LE=function(){return new il},OE=function(){return ms()},VE=Wn,ef={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},si.NO_ERROR=0,si.TIMEOUT=8,si.HTTP_ERROR=6,Kl=si,Xa.COMPLETE="complete",DE=Xa,zc.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",rt.prototype.listen=rt.prototype.J,Mo=zc,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,PE=Ue}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});const Yy="@firebase/firestore",Xy="4.9.2";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let ro="12.3.0";/**
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
 */const Hs=new hc("@firebase/firestore");function ui(){return Hs.logLevel}function G(t,...e){if(Hs.logLevel<=ce.DEBUG){const n=e.map(Rp);Hs.debug(`Firestore (${ro}): ${t}`,...n)}}function lr(t,...e){if(Hs.logLevel<=ce.ERROR){const n=e.map(Rp);Hs.error(`Firestore (${ro}): ${t}`,...n)}}function Hi(t,...e){if(Hs.logLevel<=ce.WARN){const n=e.map(Rp);Hs.warn(`Firestore (${ro}): ${t}`,...n)}}function Rp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ME(t,r,n)}function ME(t,e,n){let r=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function _e(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ME(e,s,r)}function oe(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class PN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DN{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new jE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class VN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ON{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new VN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Pp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=MN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function tf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return zd(s)===zd(i)?de(s,i):zd(s)?1:-1}return de(t.length,e.length)}const jN=55296,FN=57343;function zd(t){const e=t.charCodeAt(0);return e>=jN&&e<=FN}function Wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Zy="__name__";class Dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=Dn.isNumericId(e),s=Dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Dn.extractNumericId(e).compare(Dn.extractNumericId(n)):tf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class Te extends Dn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const UN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Dn{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return UN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zy}static keyField(){return new dt([Zy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Te.fromString(e))}static fromName(e){return new Y(Te.fromString(e).popFirst(5))}static empty(){return new Y(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Te(e.slice()))}}/**
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
 */function FE(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $N(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e0(t){if(!Y.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function t0(t){if(Y.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function UE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ma(t,e){if(!UE(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const n0=-62135596800,r0=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*r0);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<n0)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/r0}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ma(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-n0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:Ye("string",Ne._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ne(0,0))}static max(){return new se(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ea=-1;function zN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new Yr(s,Y.empty(),e)}function BN(t){return new Yr(t.readTime,t.key,Ea)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(se.min(),Y.empty(),Ea)}static max(){return new Yr(se.max(),Y.empty(),Ea)}}function qN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const HN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function so(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==HN)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(m=>{o[c]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function GN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wc.ce=-1;/**
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
 */const Dp=-1;function Ec(t){return t==null}function Vu(t){return t===0&&1/t==-1/0}function KN(t){return typeof t=="number"&&Number.isInteger(t)&&!Vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const $E="";function QN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=s0(e)),e=YN(t.get(n),e);return s0(e)}function YN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $E:n+="";break;default:n+=i}}return n}function s0(t){return t+$E+""}/**
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
 */function i0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new o0(this.data.getIterator())}getIteratorFrom(e){return new o0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class o0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new tt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class BE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new BE("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const XN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=XN.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */const qE="server_timestamp",HE="__type__",WE="__previous_value__",GE="__local_write_time__";function Vp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[HE])==null?void 0:r.stringValue)===qE}function xc(t){const e=t.mapValue.fields[WE];return Vp(e)?xc(e):e}function xa(t){const e=Xr(t.mapValue.fields[GE].timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class JN{constructor(e,n,r,s,i,o,l,u,c,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=m}}const Ou="(default)";class Ta{constructor(e,n){this.projectId=e,this.database=n||Ou}static empty(){return new Ta("","")}get isDefaultDatabase(){return this.database===Ou}isEqual(e){return e instanceof Ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const KE="__type__",ZN="__max__",Cl={mapValue:{}},QE="__vector__",Lu="value";function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vp(t)?4:tR(t)?9007199254740991:eR(t)?10:11:ee(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xa(t).isEqual(xa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xr(s.timestampValue),l=Xr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Jr(s.bytesValue).isEqual(Jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),l=He(i.doubleValue);return o===l?Vu(o)===Vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(i0(o)!==i0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Bn(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function Ia(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=He(i.integerValue||i.doubleValue),u=He(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return a0(t.timestampValue,e.timestampValue);case 4:return a0(xa(t),xa(e));case 5:return tf(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Jr(i),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const m=de(l[c],u[c]);if(m!==0)return m}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=de(He(i.latitude),He(o.latitude));return l!==0?l:de(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return l0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,A,P,V;const l=i.fields||{},u=o.fields||{},c=(p=l[Lu])==null?void 0:p.arrayValue,m=(A=u[Lu])==null?void 0:A.arrayValue,y=de(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return y!==0?y:l0(c,m)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Cl.mapValue&&o===Cl.mapValue)return 0;if(i===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},m=Object.keys(c);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const p=tf(u[y],m[y]);if(p!==0)return p;const A=Gi(l[u[y]],c[m[y]]);if(A!==0)return A}return de(u.length,m.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function a0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Xr(t),r=Xr(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function l0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gi(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function Ki(t){return nf(t)}function nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nf(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function Ql(t){switch(Zr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(t);return e?16+Ql(e):16;case 5:return 2*t.stringValue.length;case 6:return Jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ql(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ls(r.fields,(i,o)=>{s+=i.length+Ql(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function u0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function rf(t){return!!t&&"integerValue"in t}function Op(t){return!!t&&"arrayValue"in t}function c0(t){return!!t&&"nullValue"in t}function d0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function eR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[KE])==null?void 0:r.stringValue)===QE}function Jo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jo(t.arrayValue.values[n]);return e}return{...t}}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ZN}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Jo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(Jo(this.value))}}function YE(t){const e=[];return ls(t.fields,(n,r)=>{const s=new dt([n]);if(Yl(r)){const i=YE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,se.min(),se.min(),se.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,se.min(),se.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,se.min(),se.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mu{constructor(e,n){this.position=e,this.inclusive=n}}function h0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function f0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ju{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XE{}class Qe extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sR(e,n,r):n==="array-contains"?new aR(e,r):n==="in"?new lR(e,r):n==="not-in"?new uR(e,r):n==="array-contains-any"?new cR(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iR(e,r):new oR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Sn(e,n)}matches(e){return JE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function JE(t){return t.op==="and"}function ZE(t){return rR(t)&&JE(t)}function rR(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function sf(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(ZE(t))return t.filters.map(e=>sf(e)).join(",");{const e=t.filters.map(n=>sf(n)).join(",");return`${t.op}(${e})`}}function ex(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Bn(r.value,s.value)}(t,e):t instanceof Sn?function(r,s){return s instanceof Sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ex(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function tx(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(tx).join(" ,")+"}"}(t):"Filter"}class sR extends Qe{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class iR extends Qe{constructor(e,n){super(e,"in",n),this.keys=nx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oR extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=nx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nx(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class aR extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Op(n)&&Ia(n.arrayValue,this.value)}}class lR extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ia(this.value.arrayValue,n)}}class uR extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ia(this.value.arrayValue,n)}}class cR extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Op(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ia(this.value.arrayValue,r))}}/**
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
 */class dR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function p0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dR(t,e,n,r,s,i,o)}function Lp(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.Te=n}return e.Te}function Mp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ex(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!f0(t.startAt,e.startAt)&&f0(t.endAt,e.endAt)}function of(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ja{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hR(t,e,n,r,s,i,o,l){return new ja(t,e,n,r,s,i,o,l)}function Tc(t){return new ja(t)}function m0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rx(t){return t.collectionGroup!==null}function Zo(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ju(i,r))}),n.has(dt.keyField().canonicalString())||e.Ie.push(new ju(dt.keyField(),r))}return e.Ie}function Fn(t){const e=oe(t);return e.Ee||(e.Ee=fR(e,Zo(t))),e.Ee}function fR(t,e){if(t.limitType==="F")return p0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ju(s.field,i)});const n=t.endAt?new Mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mu(t.startAt.position,t.startAt.inclusive):null;return p0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function af(t,e){const n=t.filters.concat([e]);return new ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function lf(t,e,n){return new ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Mp(Fn(t),Fn(e))&&t.limitType===e.limitType}function sx(t){return`${Lp(Fn(t))}|lt:${t.limitType}`}function ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tx(s)).join(", ")}]`),Ec(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ki(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ki(s)).join(",")),`Target(${r})`}(Fn(t))}; limitType=${t.limitType})`}function Sc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Zo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=h0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Zo(r),s)||r.endAt&&!function(o,l,u){const c=h0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Zo(r),s))}(t,e)}function pR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ix(t){return(e,n)=>{let r=!1;for(const s of Zo(t)){const i=mR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mR(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Gi(u,c):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zE(this.inner)}size(){return this.innerSize}}/**
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
 */const gR=new Me(Y.comparator);function ur(){return gR}const ox=new Me(Y.comparator);function jo(...t){let e=ox;for(const n of t)e=e.insert(n.key,n);return e}function ax(t){let e=ox;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rs(){return ea()}function lx(){return ea()}function ea(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const yR=new Me(Y.comparator),vR=new tt(Y.comparator);function he(...t){let e=vR;for(const n of t)e=e.add(n);return e}const _R=new tt(de);function wR(){return _R}/**
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
 */function jp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function ux(t){return{integerValue:""+t}}function ER(t,e){return KN(e)?ux(e):jp(t,e)}/**
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
 */class kc{constructor(){this._=void 0}}function xR(t,e,n){return t instanceof Fu?function(s,i){const o={fields:{[HE]:{stringValue:qE},[GE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vp(i)&&(i=xc(i)),i&&(o.fields[WE]=i),{mapValue:o}}(n,e):t instanceof Sa?dx(t,e):t instanceof ka?hx(t,e):function(s,i){const o=cx(s,i),l=g0(o)+g0(s.Ae);return rf(o)&&rf(s.Ae)?ux(l):jp(s.serializer,l)}(t,e)}function TR(t,e,n){return t instanceof Sa?dx(t,e):t instanceof ka?hx(t,e):n}function cx(t,e){return t instanceof Uu?function(r){return rf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fu extends kc{}class Sa extends kc{constructor(e){super(),this.elements=e}}function dx(t,e){const n=fx(e);for(const r of t.elements)n.some(s=>Bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends kc{constructor(e){super(),this.elements=e}}function hx(t,e){let n=fx(e);for(const r of t.elements)n=n.filter(s=>!Bn(s,r));return{arrayValue:{values:n}}}class Uu extends kc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function g0(t){return He(t.integerValue||t.doubleValue)}function fx(t){return Op(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function IR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Sa&&s instanceof Sa||r instanceof ka&&s instanceof ka?Wi(r.elements,s.elements,Bn):r instanceof Uu&&s instanceof Uu?Bn(r.Ae,s.Ae):r instanceof Fu&&s instanceof Fu}(t.transform,e.transform)}class SR{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ac{}function px(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fp(t.key,an.none()):new Fa(t.key,t.data,an.none());{const n=t.data,r=Pt.empty();let s=new tt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new Wt(s.toArray()),an.none())}}function kR(t,e,n){t instanceof Fa?function(s,i,o){const l=s.value.clone(),u=v0(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof us?function(s,i,o){if(!Xl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=v0(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(mx(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof Fa?function(i,o,l,u){if(!Xl(i.precondition,o))return l;const c=i.value.clone(),m=_0(i.fieldTransforms,u,o);return c.setAll(m),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(i,o,l,u){if(!Xl(i.precondition,o))return l;const c=_0(i.fieldTransforms,u,o),m=o.data;return m.setAll(mx(i)),m.setAll(c),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Xl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function AR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cx(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function y0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wi(r,s,(i,o)=>IR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends Ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends Ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function v0(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TR(o,l,n[s]))}return r}function _0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xR(i,o,e))}return r}class Fp extends Ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class CR extends Ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lx();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=px(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>y0(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>y0(n,r))}}class Up{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return yR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Up(e,n,r,s)}}/**
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
 */class NR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,me;function PR(t){switch(t){case M.OK:return ee(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function gx(t){if(t===void 0)return lr("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ge.OK:return M.OK;case Ge.CANCELLED:return M.CANCELLED;case Ge.UNKNOWN:return M.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return M.INTERNAL;case Ge.UNAVAILABLE:return M.UNAVAILABLE;case Ge.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ge.NOT_FOUND:return M.NOT_FOUND;case Ge.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ge.ABORTED:return M.ABORTED;case Ge.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ge.DATA_LOSS:return M.DATA_LOSS;default:return ee(39323,{code:t})}}(me=Ge||(Ge={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DR(){return new TextEncoder}/**
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
 */const VR=new Hr([4294967295,4294967295],0);function w0(t){const e=DR().encode(t),n=new RE;return n.update(e),new Uint8Array(n.digest())}function E0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class $p{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fo(`Invalid padding: ${n}`);if(r<0)throw new Fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(VR)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=w0(e),[r,s]=E0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $p(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=w0(e),[r,s]=E0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cc(se.min(),s,new Me(de),ur(),he())}}class Ua{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ua(r,n,he(),he(),he())}}/**
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
 */class Jl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class yx{constructor(e,n){this.targetId=e,this.Ce=n}}class vx{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class x0{constructor(){this.ve=0,this.Fe=T0(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Ua(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=T0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class OR{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=bl(),this.He=bl(),this.Ye=new Me(de)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(of(i))if(r===0){const o=new Y(i.path);this.et(n,o,Et.newNoDocument(o,se.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof BE)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $p(o,s,i)}catch(u){return Hi(u instanceof Fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&of(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Et.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=he();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Cc(e,n,this.Ye,this.je,r);return this.je=ur(),this.Je=bl(),this.He=bl(),this.Ye=new Me(de),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new x0,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(de),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(de),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new x0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bl(){return new Me(Y.comparator)}function T0(){return new Me(Y.comparator)}const LR={asc:"ASCENDING",desc:"DESCENDING"},MR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jR={and:"AND",or:"OR"};class FR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uf(t,e){return t.useProto3Json||Ec(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _x(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UR(t,e){return $u(t,e.toTimestamp())}function Un(t){return _e(!!t,49232),se.fromTimestamp(function(n){const r=Xr(n);return new Ne(r.seconds,r.nanos)}(t))}function zp(t,e){return cf(t,e).canonicalString()}function cf(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wx(t){const e=Te.fromString(t);return _e(Sx(e),10190,{key:e.toString()}),e}function df(t,e){return zp(t.databaseId,e.path)}function Bd(t,e){const n=wx(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(xx(n))}function Ex(t,e){return zp(t.databaseId,e)}function $R(t){const e=wx(t);return e.length===4?Te.emptyPath():xx(e)}function hf(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xx(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function I0(t,e,n){return{name:df(t,e),fields:n.value.mapValue.fields}}function zR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,m){return c.useProto3Json?(_e(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(_e(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const m=c.code===void 0?M.UNKNOWN:gx(c.code);return new W(m,c.message||"")}(o);n=new vx(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bd(t,r.document.name),i=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):se.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(s,i,o,l),c=r.targetIds||[],m=r.removedTargetIds||[];n=new Jl(c,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bd(t,r.document),i=r.readTime?Un(r.readTime):se.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Jl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bd(t,r.document),i=r.removedTargetIds||[];n=new Jl([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RR(s,i),l=r.targetId;n=new yx(l,o)}}return n}function BR(t,e){let n;if(e instanceof Fa)n={update:I0(t,e.key,e.value)};else if(e instanceof Fp)n={delete:df(t,e.key)};else if(e instanceof us)n={update:I0(t,e.key,e.data),updateMask:JR(e.fieldMask)};else{if(!(e instanceof CR))return ee(16599,{Vt:e.type});n={verify:df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Fu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Uu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function qR(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Un(s.updateTime):Un(i);return o.isEqual(se.min())&&(o=Un(i)),new SR(o,s.transformResults||[])}(n,e))):[]}function HR(t,e){return{documents:[Ex(t,e.path)]}}function WR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ex(t,s);const i=function(c){if(c.length!==0)return Ix(Sn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(m=>function(p){return{field:di(p.field),direction:QR(p.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=uf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function GR(t){let e=$R(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_e(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(y){const p=Tx(y);return p instanceof Sn&&ZE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(p=>function(P){return new ju(hi(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(y){let p;return p=typeof y=="object"?y.value:y,Ec(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(y){const p=!!y.before,A=y.values||[];return new Mu(A,p)}(n.startAt));let c=null;return n.endAt&&(c=function(y){const p=!y.before,A=y.values||[];return new Mu(A,p)}(n.endAt)),hR(e,s,o,i,l,"F",u,c)}function KR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hi(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(hi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>Tx(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function QR(t){return LR[t]}function YR(t){return MR[t]}function XR(t){return jR[t]}function di(t){return{fieldPath:t.canonicalString()}}function hi(t){return dt.fromServerFormat(t.fieldPath)}function Ix(t){return t instanceof Qe?function(n){if(n.op==="=="){if(d0(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(c0(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(d0(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(c0(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:YR(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(s=>Ix(s));return r.length===1?r[0]:{compositeFilter:{op:XR(n.op),filters:r}}}(t):ee(54877,{filter:t})}function JR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vr{constructor(e,n,r,s,i=se.min(),o=se.min(),l=pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ZR{constructor(e){this.yt=e}}function eP(t){const e=GR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lf(e,e.limit,"L"):e}/**
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
 */class tP{constructor(){this.Cn=new nP}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Yr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class nP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Te.comparator)).toArray()}}/**
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
 */const S0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kx=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(kx,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class Qi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qi(0)}static cr(){return new Qi(-1)}}/**
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
 */const k0="LruGarbageCollector",rP=1048576;function A0([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class sP{constructor(e){this.Ir=e,this.buffer=new tt(A0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();A0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class iP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(k0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?G(k0,"Ignoring IndexedDB error during garbage collection: ",n):await so(n)}await this.Vr(3e5)})}}class oP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(wc.ce);const r=new sP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(S0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,l=Date.now(),this.removeTargets(e,r,n))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(c=Date.now(),ui()<=ce.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${y} documents in `+(c-u)+`ms
Total Duration: ${c-m}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function aP(t,e){return new oP(t,e)}/**
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
 */class lP{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ta(r.mutation,s,Wt.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=jo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ur();const o=ea(),l=function(){return ea()}();return n.forEach((u,c)=>{const m=r.get(c.key);s.has(c.key)&&(m===void 0||m.mutation instanceof us)?i=i.insert(c.key,c):m!==void 0?(o.set(c.key,m.mutation.getFieldMask()),ta(m.mutation,c,m.mutation.getFieldMask(),Ne.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,m)=>o.set(c,m)),n.forEach((c,m)=>l.set(c,new uP(m,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ea();let s=new Me((o,l)=>o-l),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let m=r.get(u)||Wt.empty();m=l.applyToLocalView(c,m),r.set(u,m);const y=(s.get(l.batchId)||he()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,m=u.value,y=lx();m.forEach(p=>{if(!i.has(p)){const A=px(n.get(p),r.get(p));A!==null&&y.set(p,A),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,y))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Rs());let l=Ea,u=i;return o.next(c=>F.forEach(c,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(p=>{u=u.insert(m,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,he())).next(m=>({batchId:l,changes:ax(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=jo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=jo();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const c=function(y,p){return new ja(p,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(m=>{m.forEach((y,p)=>{o=o.insert(y,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const m=c.getKey();o.get(m)===null&&(o=o.insert(m,Et.newInvalidDocument(m)))});let l=jo();return o.forEach((u,c)=>{const m=i.get(u);m!==void 0&&ta(m.mutation,c,Wt.empty(),Ne.now()),Sc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class dP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Un(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:eP(s.bundledQuery),readTime:Un(s.readTime)}}(n)),F.resolve()}}/**
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
 */class hP{constructor(){this.overlays=new Me(Y.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Rs(),i=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((c,m)=>c-m);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let m=i.get(c.largestBatchId);m===null&&(m=Rs(),i=i.insert(c.largestBatchId,m)),m.set(c.getKey(),c)}}const l=Rs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,m)=>l.set(c,m)),!(l.size()>=s)););return F.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NR(n,r));let i=this.qr.get(n);i===void 0&&(i=he(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class fP{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Bp{constructor(){this.Qr=new tt(ot.$r),this.Ur=new tt(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new Te([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new Te([])),r=new ot(n,e),s=new ot(n,e+1);let i=he();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||de(e.Yr,n.Yr)}static Kr(e,n){return de(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
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
 */class pP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(ot.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Dp:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(de);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new ot(new Y(i),0);let l=new tt(de);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),F.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mP{constructor(e){this.ri=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:m}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||qN(BN(m),r)<=0||(s.has(m.key)||Sc(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gP(this)}getSize(e){return F.resolve(this.size)}}class gP extends lP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class yP{constructor(e){this.persistence=e,this.si=new Xs(n=>Lp(n),Mp),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new Bp,this.targetCount=0,this.ai=Qi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
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
 */class Ax{constructor(e,n){this.ui={},this.overlays={},this.ci=new wc(0),this.li=!1,this.li=!0,this.hi=new fP,this.referenceDelegate=e(this),this.Pi=new yP(this),this.indexManager=new tP,this.remoteDocumentCache=function(s){return new mP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new ZR(n),this.Ii=new dP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new pP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new vP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class vP extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class qp{constructor(e){this.persistence=e,this.Ri=new Bp,this.Vi=null}static mi(e){return new qp(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class zu{constructor(e,n){this.persistence=e,this.pi=new Xs(r=>QN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=aP(this,n)}static mi(e,n){return new zu(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ql(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hp(e,n.fromCache,r,s)}}/**
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
 */class _P{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return AS()?8:GN(Tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _P;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ui()<=ce.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(ui()<=ce.DEBUG&&G("QueryEngine","Query:",ci(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ui()<=ce.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(n))):F.resolve())}ys(e,n){if(m0(n))return F.resolve(null);let r=Fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=lf(n,null,"F"),r=Fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,lf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return m0(n)||s.isEqual(se.min())?F.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(ui()<=ce.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ci(n)),this.vs(e,o,n,zN(s,Ea)).next(l=>l))})}Ds(e,n){let r=new tt(ix(e));return n.forEach((s,i)=>{Sc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ui()<=ce.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ci(n)),this.ps.getDocumentsMatchingQuery(e,n,Yr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Wp="LocalStore",EP=3e8;class xP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(de),this.xs=new Xs(i=>Lp(i),Mp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function TP(t,e,n,r){return new xP(t,e,n,r)}async function Cx(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=he();for(const c of s){o.push(c.batchId);for(const m of c.mutations)u=u.add(m.key)}for(const c of i){l.push(c.batchId);for(const m of c.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function IP(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,m){const y=c.batch,p=y.keys();let A=F.resolve();return p.forEach(P=>{A=A.next(()=>m.getEntry(u,P)).next(V=>{const D=c.docVersions.get(P);_e(D!==null,48541),V.version.compareTo(D)<0&&(y.applyToRemoteDocument(V,c),V.isValidDocument()&&(V.setReadTime(c.commitVersion),m.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function bx(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function SP(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((m,y)=>{const p=s.get(y);if(!p)return;l.push(n.Pi.removeMatchingKeys(i,m.removedDocuments,y).next(()=>n.Pi.addMatchingKeys(i,m.addedDocuments,y)));let A=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(pt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(y,A),function(V,D,S){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=EP?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,A,m)&&l.push(n.Pi.updateTargetData(i,A))});let u=ur(),c=he();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(kP(i,o,e.documentUpdates).next(m=>{u=m.ks,c=m.qs})),!r.isEqual(se.min())){const m=n.Pi.getLastRemoteSnapshotVersion(i).next(y=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function kP(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ur();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(Wp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function AP(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Dp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CP(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ff(t,e,n){const r=oe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!io(o))throw o;G(Wp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function C0(t,e,n){const r=oe(t);let s=se.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,m){const y=oe(u),p=y.xs.get(m);return p!==void 0?F.resolve(y.Ms.get(p)):y.Pi.getTargetData(c,m)}(r,o,Fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:he())).next(l=>(bP(r,pR(e),l),{documents:l,Qs:i})))}function bP(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class b0{constructor(){this.activeTargetIds=wR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NP{constructor(){this.Mo=new b0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new b0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RP{Oo(e){}shutdown(){}}/**
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
 */const N0="ConnectivityMonitor";class R0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(N0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(N0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nl=null;function pf(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
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
 */const qd="RestConnection",PP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ou?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=pf(),l=this.zo(e,n.toUriEncodedString());G(qd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),m=is(c);return this.Jo(e,l,u,r,m).then(y=>(G(qd,`Received RPC '${e}' ${o}: `,y),y),y=>{throw Hi(qd,`RPC '${e}' ${o} failed with error: `,y,"url: ",l,"request:",r),y})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=PP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class VP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const yt="WebChannelConnection";class OP extends DP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=pf();return new Promise((l,u)=>{const c=new PE;c.setWithCredentials(!0),c.listenOnce(DE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kl.NO_ERROR:const y=c.getResponseJson();G(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),l(y);break;case Kl.TIMEOUT:G(yt,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const p=c.getStatus();if(G(yt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const V=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(P.status);u(new W(V,P.message))}else u(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{G(yt,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(s);G(yt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",m,r,15)})}T_(e,n,r){const s=pf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LE(),l=OE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");G(yt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=o.createWebChannel(m,u);this.I_(y);let p=!1,A=!1;const P=new VP({Yo:D=>{A?G(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(G(yt,`Opening RPC '${e}' stream ${s} transport.`),y.open(),p=!0),G(yt,`RPC '${e}' stream ${s} sending:`,D),y.send(D))},Zo:()=>y.close()}),V=(D,S,E)=>{D.listen(S,C=>{try{E(C)}catch(j){setTimeout(()=>{throw j},0)}})};return V(y,Mo.EventType.OPEN,()=>{A||(G(yt,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),V(y,Mo.EventType.CLOSE,()=>{A||(A=!0,G(yt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(y))}),V(y,Mo.EventType.ERROR,D=>{A||(A=!0,Hi(yt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),V(y,Mo.EventType.MESSAGE,D=>{var S;if(!A){const E=D.data[0];_e(!!E,16349);const C=E,j=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(j){G(yt,`RPC '${e}' stream ${s} received error:`,j);const $=j.status;let B=function(x){const I=Ge[x];if(I!==void 0)return gx(I)}($),w=j.message;B===void 0&&(B=M.INTERNAL,w="Unknown error status: "+$+" with message "+j.message),A=!0,P.a_(new W(B,w)),y.close()}else G(yt,`RPC '${e}' stream ${s} received:`,E),P.u_(E)}}),V(l,VE.STAT_EVENT,D=>{D.stat===ef.PROXY?G(yt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ef.NOPROXY&&G(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hd(){return typeof document<"u"?document:null}/**
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
 */function bc(t){return new FR(t,!0)}/**
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
 */class Nx{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const P0="PersistentStream";class Rx{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(P0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(G(P0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LP extends Rx{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zR(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Un(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=hf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=of(u)?{documents:HR(i,u)}:{query:WR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_x(i,o.resumeToken);const c=uf(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=$u(i,o.snapshotVersion.toTimestamp());const c=uf(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=KR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=hf(this.serializer),n.removeTarget=e,this.q_(n)}}class MP extends Rx{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=qR(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=hf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BR(this.serializer,r))};this.q_(n)}}/**
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
 */class jP{}class FP extends jP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,cf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(M.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,cf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class UP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ws="RemoteStore";class $P{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Js(this)&&(G(Ws,"Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.Ea.add(4),await $a(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Nc(c)}(this))})}),this.Ra=new UP(r,s)}}async function Nc(t){if(Js(t))for(const e of t.da)await e(!0)}async function $a(t){for(const e of t.da)await e(!1)}function Px(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yp(n)?Qp(n):oo(n).O_()&&Kp(n,e))}function Gp(t,e){const n=oe(t),r=oo(n);n.Ia.delete(e),r.O_()&&Dx(n,e),n.Ia.size===0&&(r.O_()?r.L_():Js(n)&&n.Ra.set("Unknown"))}function Kp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(t).Y_(e)}function Dx(t,e){t.Va.Ue(e),oo(t).Z_(e)}function Qp(t){t.Va=new OR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.Ra.ua()}function Yp(t){return Js(t)&&!oo(t).x_()&&t.Ia.size>0}function Js(t){return oe(t).Ea.size===0}function Vx(t){t.Va=void 0}async function zP(t){t.Ra.set("Online")}async function BP(t){t.Ia.forEach((e,n)=>{Kp(t,e)})}async function qP(t,e){Vx(t),Yp(t)?(t.Ra.ha(e),Qp(t)):t.Ra.set("Unknown")}async function HP(t,e,n){if(t.Ra.set("Online"),e instanceof vx&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){G(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bu(t,r)}else if(e instanceof Jl?t.Va.Ze(e):e instanceof yx?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await bx(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(c);m&&i.Ia.set(c,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Dx(i,u);const y=new Vr(m.target,u,c,m.sequenceNumber);Kp(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G(Ws,"Failed to raise snapshot:",r),await Bu(t,r)}}async function Bu(t,e,n){if(!io(e))throw e;t.Ea.add(1),await $a(t),t.Ra.set("Offline"),n||(n=()=>bx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(Ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Nc(t)})}function Ox(t,e){return e().catch(n=>Bu(t,n,e))}async function Rc(t){const e=oe(t),n=es(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dp;for(;WP(e);)try{const s=await AP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,GP(e,s)}catch(s){await Bu(e,s)}Lx(e)&&Mx(e)}function WP(t){return Js(t)&&t.Ta.length<10}function GP(t,e){t.Ta.push(e);const n=es(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Lx(t){return Js(t)&&!es(t).x_()&&t.Ta.length>0}function Mx(t){es(t).start()}async function KP(t){es(t).ra()}async function QP(t){const e=es(t);for(const n of t.Ta)e.ea(n.mutations)}async function YP(t,e,n){const r=t.Ta.shift(),s=Up.from(r,e,n);await Ox(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Rc(t)}async function XP(t,e){e&&es(t).X_&&await async function(r,s){if(function(o){return PR(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();es(r).B_(),await Ox(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Rc(r)}}(t,e),Lx(t)&&Mx(t)}async function D0(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),G(Ws,"RemoteStore received new credentials");const r=Js(n);n.Ea.add(3),await $a(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nc(n)}async function JP(t,e){const n=oe(t);e?(n.Ea.delete(2),await Nc(n)):e||(n.Ea.add(2),await $a(n),n.Ra.set("Unknown"))}function oo(t){return t.ma||(t.ma=function(n,r,s){const i=oe(n);return i.sa(),new LP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:zP.bind(null,t),t_:BP.bind(null,t),r_:qP.bind(null,t),H_:HP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Yp(t)?Qp(t):t.Ra.set("Unknown")):(await t.ma.stop(),Vx(t))})),t.ma}function es(t){return t.fa||(t.fa=function(n,r,s){const i=oe(n);return i.sa(),new MP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:KP.bind(null,t),r_:XP.bind(null,t),ta:QP.bind(null,t),na:YP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Rc(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Xp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(t,e){if(lr("AsyncQueue",`${e}: ${t}`),io(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Li{static emptySet(e){return new Li(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=jo(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class V0{constructor(){this.ga=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Yi(e,n,Li.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ZP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class e2{constructor(){this.queries=O0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=O0(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function O0(){return new Xs(t=>sx(t),Ic)}async function Zp(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new ZP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Jp(o,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&tm(n)}async function em(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function t2(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&tm(n)}function n2(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function tm(t){t.Ca.forEach(e=>{e.next()})}var mf,L0;(L0=mf||(mf={})).Ma="default",L0.Cache="cache";class nm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==mf.Cache}}/**
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
 */class jx{constructor(e){this.key=e}}class Fx{constructor(e){this.key=e}}class r2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=he(),this.mutatedKeys=he(),this.eu=ix(e),this.tu=new Li(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new V0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const p=s.get(m),A=Sc(this.query,y)?y:null,P=!!p&&this.mutatedKeys.has(p.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;p&&A?p.data.isEqual(A.data)?P!==V&&(r.track({type:3,doc:A}),D=!0):this.su(p,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||c&&this.eu(A,c)<0)&&(l=!0)):!p&&A?(r.track({type:0,doc:A}),D=!0):p&&!A&&(r.track({type:1,doc:p}),D=!0,(u||c)&&(l=!0)),D&&(A?(o=o.add(A),i=V?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((m,y)=>function(A,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:D})}};return V(A)-V(P)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Yi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new V0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Fx(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new jx(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rm="SyncEngine";class s2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i2{constructor(e){this.key=e,this.hu=!1}}class o2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xs(l=>sx(l),Ic),this.Iu=new Map,this.Eu=new Set,this.du=new Me(Y.comparator),this.Au=new Map,this.Ru=new Bp,this.Vu={},this.mu=new Map,this.fu=Qi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function a2(t,e,n=!0){const r=Hx(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ux(r,e,n,!0),s}async function l2(t,e){const n=Hx(t);await Ux(n,e,!0,!1)}async function Ux(t,e,n,r){const s=await CP(t.localStore,Fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await u2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Px(t.remoteStore,s),l}async function u2(t,e,n,r,s){t.pu=(y,p,A)=>async function(V,D,S,E){let C=D.view.ru(S);C.Cs&&(C=await C0(V.localStore,D.query,!1).then(({documents:w})=>D.view.ru(w,C)));const j=E&&E.targetChanges.get(D.targetId),$=E&&E.targetMismatches.get(D.targetId)!=null,B=D.view.applyChanges(C,V.isPrimaryClient,j,$);return j0(V,D.targetId,B.au),B.snapshot}(t,y,p,A);const i=await C0(t.localStore,e,!0),o=new r2(e,i.Qs),l=o.ru(i.documents),u=Ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);j0(t,n,c.au);const m=new s2(e,n,o);return t.Tu.set(e,m),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function c2(t,e,n){const r=oe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ic(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ff(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gp(r.remoteStore,s.targetId),gf(r,s.targetId)}).catch(so)):(gf(r,s.targetId),await ff(r.localStore,s.targetId,!0))}async function d2(t,e){const n=oe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gp(n.remoteStore,r.targetId))}async function h2(t,e,n){const r=_2(t);try{const s=await function(o,l){const u=oe(o),c=Ne.now(),m=l.reduce((A,P)=>A.add(P.key),he());let y,p;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=ur(),V=he();return u.Ns.getEntries(A,m).next(D=>{P=D,P.forEach((S,E)=>{E.isValidDocument()||(V=V.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(D=>{y=D;const S=[];for(const E of l){const C=AR(E,y.get(E.key).overlayedDocument);C!=null&&S.push(new us(E.key,C,YE(C.value.mapValue),an.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,S,l)}).next(D=>{p=D;const S=D.applyToLocalDocumentSet(y,V);return u.documentOverlayCache.saveOverlays(A,D.batchId,S)})}).then(()=>({batchId:p.batchId,changes:ax(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Me(de)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await za(r,s.changes),await Rc(r.remoteStore)}catch(s){const i=Jp(s,"Failed to persist write");n.reject(i)}}async function $x(t,e){const n=oe(t);try{const r=await SP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?_e(o.hu,14607):s.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await za(n,r,e)}catch(r){await so(r)}}function M0(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let c=!1;u.queries.forEach((m,y)=>{for(const p of y.Sa)p.va(l)&&(c=!0)}),c&&tm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f2(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(Y.comparator);o=o.insert(i,Et.newNoDocument(i,se.min()));const l=he().add(i),u=new Cc(se.min(),new Map,new Me(de),o,l);await $x(r,u),r.du=r.du.remove(i),r.Au.delete(e),sm(r)}else await ff(r.localStore,e,!1).then(()=>gf(r,e,n)).catch(so)}async function p2(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await IP(n.localStore,e);Bx(n,r,null),zx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,s)}catch(s){await so(s)}}async function m2(t,e,n){const r=oe(t);try{const s=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let m;return u.mutationQueue.lookupMutationBatch(c,l).next(y=>(_e(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(c,y))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,m)).next(()=>u.localDocuments.getDocuments(c,m))})}(r.localStore,e);Bx(r,e,n),zx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,s)}catch(s){await so(s)}}function zx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Bx(t,e,n){const r=oe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||qx(t,r)})}function qx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),sm(t))}function j0(t,e,n){for(const r of n)r instanceof jx?(t.Ru.addReference(r.key,e),g2(t,r)):r instanceof Fx?(G(rm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||qx(t,r.key)):ee(19791,{wu:r})}function g2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(rm,"New document in limbo: "+n),t.Eu.add(r),sm(t))}function sm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new i2(n)),t.du=t.du.insert(n,r),Px(t.remoteStore,new Vr(Fn(Tc(n.path)),r,"TargetPurposeLimboResolution",wc.ce))}}async function za(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var m;if((c||n)&&r.isPrimaryClient){const y=c?!c.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(c){s.push(c);const y=Hp.As(u.targetId,c);i.push(y)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const m=oe(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>F.forEach(c,p=>F.forEach(p.Es,A=>m.persistence.referenceDelegate.addReference(y,p.targetId,A)).next(()=>F.forEach(p.ds,A=>m.persistence.referenceDelegate.removeReference(y,p.targetId,A)))))}catch(y){if(!io(y))throw y;G(Wp,"Failed to update sequence numbers: "+y)}for(const y of c){const p=y.targetId;if(!y.fromCache){const A=m.Ms.get(p),P=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(p,V)}}}(r.localStore,i))}async function y2(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){G(rm,"User change. New user:",e.toKey());const r=await Cx(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r.Ls)}}function v2(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Hx(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$x.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f2.bind(null,e),e.Pu.H_=t2.bind(null,e.eventManager),e.Pu.yu=n2.bind(null,e.eventManager),e}function _2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m2.bind(null,e),e}class qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return TP(this.persistence,new wP,e.initialUser,this.serializer)}Cu(e){return new Ax(qp.mi,this.serializer)}Du(e){return new NP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qu.provider={build:()=>new qu};class w2 extends qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof zu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new iP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Ax(r=>zu.mi(r,n),this.serializer)}}class yf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y2.bind(null,this.syncEngine),await JP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e2}()}createDatastore(e){const n=bc(e.databaseInfo.databaseId),r=function(i){return new OP(i)}(e.databaseInfo);return function(i,o,l,u){return new FP(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new $P(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>M0(this.syncEngine,n,0),function(){return R0.v()?new R0:new RP}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,m){const y=new o2(s,i,o,l,u,c);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);G(Ws,"RemoteStore shutting down."),i.Ea.add(5),await $a(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}yf.provider={build:()=>new yf};/**
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
 */class im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ts="FirestoreClient";class E2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Pp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(ts,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(ts,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),G(ts,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x2(t);G(ts,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>D0(e.remoteStore,s)),t._onlineComponents=e}async function x2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(ts,"Using user provided OfflineComponentProvider");try{await Wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Wd(t,new qu)}}else G(ts,"Using default OfflineComponentProvider"),await Wd(t,new w2(void 0));return t._offlineComponents}async function Wx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(ts,"Using user provided OnlineComponentProvider"),await F0(t,t._uninitializedComponentsProvider._online)):(G(ts,"Using default OnlineComponentProvider"),await F0(t,new yf))),t._onlineComponents}function T2(t){return Wx(t).then(e=>e.syncEngine)}async function Hu(t){const e=await Wx(t),n=e.eventManager;return n.onListen=a2.bind(null,e.syncEngine),n.onUnlisten=c2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=l2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=d2.bind(null,e.syncEngine),n}function I2(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const m=new im({next:p=>{m.Nu(),o.enqueueAndForget(()=>em(i,y));const A=p.docs.has(l);!A&&p.fromCache?c.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&p.fromCache&&u&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),y=new nm(Tc(l.path),m,{includeMetadataChanges:!0,qa:!0});return Zp(i,y)}(await Hu(t),t.asyncQueue,e,n,r)),r.promise}function S2(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const m=new im({next:p=>{m.Nu(),o.enqueueAndForget(()=>em(i,y)),p.fromCache&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),y=new nm(l,m,{includeMetadataChanges:!0,qa:!0});return Zp(i,y)}(await Hu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Gx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U0=new Map;/**
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
 */const Kx="firestore.googleapis.com",$0=!0;class z0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kx,this.ssl=$0}else this.host=e.host,this.ssl=e.ssl??$0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rP)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gx(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RN;switch(r.type){case"firstParty":return new ON(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U0.get(n);r&&(G("ComponentProvider","Removing Datastore"),U0.delete(n),r.terminate())}(this),Promise.resolve()}}function k2(t,e,n,r={}){var c;t=Ft(t,Pc);const s=is(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(pp(`https://${l}`),mp("Firestore",!0)),i.host!==Kx&&i.host!==l&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Qr(u,o)&&(t._setSettings(u),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=_t.MOCK_USER;else{m=_S(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new _t(p)}t._authCredentials=new PN(new jE(m,y))}}/**
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
 */class Zs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zs(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ma(n,ze._jsonSchema))return new ze(e,r||null,new Y(Te.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Ye("string",ze._jsonSchemaVersion),referencePath:Ye("string")};class Wr extends Zs{constructor(e,n,r){super(e,n,Tc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new Y(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function xs(t,e,...n){if(t=Se(t),FE("collection","path",e),t instanceof Pc){const r=Te.fromString(e,...n);return t0(r),new Wr(t,null,r)}{if(!(t instanceof ze||t instanceof Wr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return t0(r),new Wr(t.firestore,null,r)}}function vt(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Pp.newId()),FE("doc","path",e),t instanceof Pc){const r=Te.fromString(e,...n);return e0(r),new ze(t,null,new Y(r))}{if(!(t instanceof ze||t instanceof Wr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return e0(r),new ze(t.firestore,t instanceof Wr?t.converter:null,new Y(r))}}/**
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
 */const B0="AsyncQueue";class q0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nx(this,"async_queue_retry"),this._c=()=>{const r=Hd();r&&G(B0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new tr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!io(e))throw e;G(B0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,lr("INTERNAL UNHANDLED ERROR: ",H0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:H0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function H0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function W0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class cr extends Pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new q0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new q0(e),this._firestoreClient=void 0,await e}}}function A2(t,e){const n=typeof t=="object"?t:fc(),r=typeof t=="string"?t:Ou,s=os(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vw("firestore");i&&k2(s,...i)}return s}function Dc(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||C2(t),t._firestoreClient}function C2(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,m){return new JN(l,u,c,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Gx(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new E2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(pt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ma(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Ye("string",rn._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class om{constructor(e){this._methodName=e}}/**
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
 */class $n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$n._jsonSchemaVersion}}static fromJSON(e){if(Ma(e,$n._jsonSchema))return new $n(e.latitude,e.longitude)}}$n._jsonSchemaVersion="firestore/geoPoint/1.0",$n._jsonSchema={type:Ye("string",$n._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ma(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new zn(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:Ye("string",zn._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const b2=/^__.*__$/;class N2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}class Qx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new us(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class am{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new am({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Wu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Yx(this.Ac)&&b2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class R2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bc(e)}Cc(e,n,r,s=!1){return new am({Ac:e,methodName:n,Dc:r,path:dt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oc(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new R2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xx(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);lm("Data must be an object, but it was:",o,r);const l=Jx(r,o);let u,c;if(i.merge)u=new Wt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const p=vf(e,y,n);if(!o.contains(p))throw new W(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);eT(m,p)||m.push(p)}u=new Wt(m),c=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,c=o.fieldTransforms;return new N2(new Pt(l),u,c)}class Lc extends om{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lc}}function P2(t,e,n,r){const s=t.Cc(1,e,n);lm("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();ls(r,(u,c)=>{const m=um(e,u,n);c=Se(c);const y=s.yc(m);if(c instanceof Lc)i.push(m);else{const p=Ba(c,y);p!=null&&(i.push(m),o.set(m,p))}});const l=new Wt(i);return new Qx(o,l,s.fieldTransforms)}function D2(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[vf(e,r,n)],u=[s];if(i.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(vf(e,i[p])),u.push(i[p+1]);const c=[],m=Pt.empty();for(let p=l.length-1;p>=0;--p)if(!eT(c,l[p])){const A=l[p];let P=u[p];P=Se(P);const V=o.yc(A);if(P instanceof Lc)c.push(A);else{const D=Ba(P,V);D!=null&&(c.push(A),m.set(A,D))}}const y=new Wt(c);return new Qx(m,y,o.fieldTransforms)}function V2(t,e,n,r=!1){return Ba(n,t.Cc(r?4:3,e))}function Ba(t,e){if(Zx(t=Se(t)))return lm("Unsupported field value:",e,t),Jx(t,e);if(t instanceof om)return function(r,s){if(!Yx(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ba(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ER(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:$u(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(s.serializer,i)}}if(r instanceof $n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:_x(s.serializer,r._byteString)};if(r instanceof ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zn)return function(o,l){return{mapValue:{fields:{[KE]:{stringValue:QE},[Lu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return jp(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${_c(r)}`)}(t,e)}function Jx(t,e){const n={};return zE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,s)=>{const i=Ba(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Zx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof $n||t instanceof rn||t instanceof ze||t instanceof om||t instanceof zn)}function lm(t,e,n){if(!Zx(n)||!UE(n)){const r=_c(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function vf(t,e,n){if((e=Se(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return um(t,e);throw Wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const O2=new RegExp("[~\\*/\\[\\]]");function um(t,e,n){if(e.search(O2)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function eT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L2 extends tT{data(){return super.data()}}function cm(t,e){return typeof e=="string"?um(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function nT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dm{}class M2 extends dm{}function j2(t,e,...n){let r=[];e instanceof dm&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof hm).length,l=i.filter(u=>u instanceof Mc).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Mc extends M2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mc(e,n,r)}_apply(e){const n=this._parse(e);return rT(e._query,n),new Zs(e.firestore,e.converter,af(e._query,n))}_parse(e){const n=Oc(e.firestore);return function(i,o,l,u,c,m,y){let p;if(c.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){K0(y,m);const P=[];for(const V of y)P.push(G0(u,i,V));p={arrayValue:{values:P}}}else p=G0(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||K0(y,m),p=V2(l,o,y,m==="in"||m==="not-in");return Qe.create(c,m,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function F2(t,e,n){const r=e,s=cm("where",t);return Mc._create(s,r,n)}class hm extends dm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)rT(o,u),o=af(o,u)}(e._query,n),new Zs(e.firestore,e.converter,af(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function G0(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rx(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!Y.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return u0(t,new Y(r))}if(n instanceof ze)return u0(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function K0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class U2{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Lu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>He(o.doubleValue));return new zn(n)}convertGeoPoint(e){return new $n(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e(Sx(r),9688,{name:e});const s=new Ta(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function sT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vs extends tT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vs._jsonSchema={type:Ye("string",Vs._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Zl extends Vs{data(e={}){return super.data(e)}}class Os{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Uo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Uo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Uo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,m=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:$2(l.type),doc:u,oldIndex:c,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Os._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */function Rl(t){t=Ft(t,ze);const e=Ft(t.firestore,cr);return I2(Dc(e),t._key).then(n=>iT(e,t,n))}Os._jsonSchemaVersion="firestore/querySnapshot/1.0",Os._jsonSchema={type:Ye("string",Os._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class fm extends U2{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function z2(t){t=Ft(t,Zs);const e=Ft(t.firestore,cr),n=Dc(e),r=new fm(e);return nT(t._query),S2(n,t._query).then(s=>new Os(e,r,t,s))}function Q0(t,e,n){t=Ft(t,ze);const r=Ft(t.firestore,cr),s=sT(t.converter,e,n);return jc(r,[Xx(Oc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,an.none())])}function Ts(t,e,n,...r){t=Ft(t,ze);const s=Ft(t.firestore,cr),i=Oc(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Vc?D2(i,"updateDoc",t._key,e,n,r):P2(i,"updateDoc",t._key,e),jc(s,[o.toMutation(t._key,an.exists(!0))])}function Y0(t){return jc(Ft(t.firestore,cr),[new Fp(t._key,an.none())])}function Gd(t,e){const n=Ft(t.firestore,cr),r=vt(t),s=sT(t.converter,e);return jc(n,[Xx(Oc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function Kd(t,...e){var u,c,m;t=Se(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||W0(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(W0(e[r])){const y=e[r];e[r]=(u=y.next)==null?void 0:u.bind(y),e[r+1]=(c=y.error)==null?void 0:c.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let i,o,l;if(t instanceof ze)o=Ft(t.firestore,cr),l=Tc(t._key.path),i={next:y=>{e[r]&&e[r](iT(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Ft(t,Zs);o=Ft(y.firestore,cr),l=y._query;const p=new fm(o);i={next:A=>{e[r]&&e[r](new Os(o,p,y,A))},error:e[r+1],complete:e[r+2]},nT(t._query)}return function(p,A,P,V){const D=new im(V),S=new nm(A,D,P);return p.asyncQueue.enqueueAndForget(async()=>Zp(await Hu(p),S)),()=>{D.Nu(),p.asyncQueue.enqueueAndForget(async()=>em(await Hu(p),S))}}(Dc(o),l,s,i)}function jc(t,e){return function(r,s){const i=new tr;return r.asyncQueue.enqueueAndForget(async()=>h2(await T2(r),s,i)),i.promise}(Dc(t),e)}function iT(t,e,n){const r=n.docs.get(e._key),s=new fm(t);return new Vs(t,s,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ro=s})(to),Tn(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new cr(new DN(r.getProvider("auth-internal")),new LN(o,r.getProvider("app-check-internal")),function(c,m){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ta(c.options.projectId,m)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),jt(Yy,Xy,e),jt(Yy,Xy,"esm2020")})();const B2={apiKey:"AIzaSyAfe_3nO4nMJDgHMTmzKW7cxs4vb-cT5ME",authDomain:"fast-lost-and-found.firebaseapp.com",projectId:"fast-lost-and-found",storageBucket:"fast-lost-and-found.firebasestorage.app",messagingSenderId:"631567091200",appId:"1:631567091200:web:f5b8453c055594c184fae5",measurementId:"G-3KCXTRCN85"},pm=Aw(B2);dC(pm);const Je=bN(pm),Ce=A2(pm);/**
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
 */const q2="type.googleapis.com/google.protobuf.Int64Value",H2="type.googleapis.com/google.protobuf.UInt64Value";function oT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Gu(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Gu(e));if(typeof t=="function"||typeof t=="object")return oT(t,e=>Gu(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Xi(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case q2:case H2:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Xi(e)):typeof t=="function"||typeof t=="object"?oT(t,e=>Xi(e)):t}/**
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
 */const mm="functions";/**
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
 */const X0={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vt extends dn{constructor(e,n,r){super(`${mm}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Vt.prototype)}}function W2(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ku(t,e){let n=W2(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!X0[o])return new Vt("internal","internal");n=X0[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=Xi(s))}}catch{}return n==="ok"?null:new Vt(n,r,s)}/**
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
 */class G2{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,qt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const _f="us-central1",K2=/^data: (.*?)(?:\n|$)/;function Q2(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Vt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Y2{constructor(e,n,r,s,i=_f,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new G2(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=_f}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function X2(t,e,n){const r=is(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(pp(t.emulatorOrigin+"/backends"),mp("Functions",!0))}function J2(t,e,n){const r=s=>eD(t,e,s,{});return r.stream=(s,i)=>nD(t,e,s,i),r}function aT(t){return t.emulatorOrigin&&is(t.emulatorOrigin)?"include":void 0}async function Z2(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:aT(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function lT(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function eD(t,e,n,r){const s=t._url(e);return tD(t,s,n,r)}async function tD(t,e,n,r){n=Gu(n);const s={data:n},i=await lT(t,r),o=r.timeout||7e4,l=Q2(o),u=await Promise.race([Z2(e,s,i,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Vt("cancelled","Firebase Functions instance was deleted.");const c=Ku(u.status,u.json);if(c)throw c;if(!u.json)throw new Vt("internal","Response is not valid JSON object.");let m=u.json.data;if(typeof m>"u"&&(m=u.json.result),typeof m>"u")throw new Vt("internal","Response is missing data field.");return{data:Xi(m)}}function nD(t,e,n,r){const s=t._url(e);return rD(t,s,n,r||{})}async function rD(t,e,n,r){var p;n=Gu(n);const s={data:n},i=await lT(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:aT(t)})}catch(A){if(A instanceof Error&&A.name==="AbortError"){const V=new Vt("cancelled","Request was cancelled.");return{data:Promise.reject(V),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(V)}}}}}}const P=Ku(0,null);return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}let l,u;const c=new Promise((A,P)=>{l=A,u=P});(p=r==null?void 0:r.signal)==null||p.addEventListener("abort",()=>{const A=new Vt("cancelled","Request was cancelled.");u(A)});const m=o.body.getReader(),y=sD(m,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const A=y.getReader();return{async next(){const{value:P,done:V}=await A.read();return{value:P,done:V}},async return(){return await A.cancel(),{done:!0,value:void 0}}}}},data:c}}function sD(t,e,n,r){const s=(o,l)=>{const u=o.match(K2);if(!u)return;const c=u[1];try{const m=JSON.parse(c);if("result"in m){e(Xi(m.result));return}if("message"in m){l.enqueue(Xi(m.message));return}if("error"in m){const y=Ku(0,m);l.error(y),n(y);return}}catch(m){if(m instanceof Vt){l.error(m),n(m);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const c=new Vt("cancelled","Request was cancelled");return o.error(c),n(c),Promise.resolve()}try{const{value:c,done:m}=await t.read();if(m){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const p=new Vt("cancelled","Request was cancelled");o.error(p),n(p),await t.cancel();return}l+=i.decode(c,{stream:!0});const y=l.split(`
`);l=y.pop()||"";for(const p of y)p.trim()&&s(p.trim(),o);return u()}catch(c){const m=c instanceof Vt?c:Ku(0,null);o.error(m),n(m)}}},cancel(){return t.cancel()}})}const J0="@firebase/functions",Z0="0.13.1";/**
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
 */const iD="auth-internal",oD="app-check-internal",aD="messaging-internal";function lD(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(iD),o=n.getProvider(aD),l=n.getProvider(oD);return new Y2(s,i,o,l,r)};Tn(new cn(mm,e,"PUBLIC").setMultipleInstances(!0)),jt(J0,Z0,t),jt(J0,Z0,"esm2020")}/**
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
 */function uD(t=fc(),e=_f){const r=os(Se(t),mm).getImmediate({identifier:e}),s=vw("functions");return s&&cD(r,...s),r}function cD(t,e,n){X2(Se(t),e,n)}function dD(t,e,n){return J2(Se(t),e)}lD();const hD="davcuzq95",fD="sddwhr9r",ev=async t=>{const e=new FormData;e.append("file",t),e.append("upload_preset",fD);try{const n=await fetch(`https://api.cloudinary.com/v1_1/${hD}/image/upload`,{method:"POST",body:e});if(!n.ok)throw new Error("Failed to upload image");return(await n.json()).secure_url}catch(n){throw console.error("Error uploading to Cloudinary:",n),n}},pD=(t,e)=>{if(t.status===e.status||t.category!==e.category)return!1;const n=(t.title||"").toLowerCase(),r=(e.title||"").toLowerCase(),s=n.split(/\s+/),i=r.split(/\s+/);if(s.filter(p=>p.length>3&&i.includes(p)).length>=2)return!0;const l=(t.description||"").toLowerCase(),u=(e.description||"").toLowerCase(),c=l.split(/\s+/).filter(p=>p.length>4),m=u.split(/\s+/).filter(p=>p.length>4);return c.filter(p=>m.includes(p)).length>=3},Qd=["All","Electronics","Books","Bags","Clothing","Personal Items","ID Cards","Keys"],Yd=["All","Library","Cafeteria","Gym","Hostel","Science Block","Admin Block"],tv={"School of Computing":["Software Engineering","Computer Science","Artificial Intelligence","Data Science","Cyber Security"],"School of Engineering":["Electrical Engineering","Computer Engineering"],"School of Management":["Accounting and Finance","Fintech","Business Administration","Business Analytics"]},Tr="https://placehold.co/400x300/a8b9c9/ffffff?text=No+Image";function mD(){const[t,e]=re.useState(!1),[n,r]=re.useState(!0),[s,i]=re.useState(!1),[o,l]=re.useState({email:"",password:"",name:"",school:"",department:"",phone:""}),[u,c]=re.useState(""),[m,y]=re.useState([]),[p,A]=re.useState(!1),[P,V]=re.useState(!1),[D,S]=re.useState({name:"",email:"",school:"",department:"",phone:""}),[E,C]=re.useState("profile"),[j,$]=re.useState(!1),[B,w]=re.useState("home"),[_,x]=re.useState([]),[I,k]=re.useState(!1),[N,T]=re.useState(null),[fe,nt]=re.useState({title:"",message:"",type:"info"}),[kn,ei]=re.useState([]),[H,J]=re.useState(!1),[ae,Ee]=re.useState([]),[De,Jt]=re.useState(!1),[It,Zt]=re.useState(!1),[Ut,$t]=re.useState(!1),[en,cs]=re.useState(null),[Q,Be]=re.useState({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]}),[ye,hn]=re.useState([]),[ti,Fc]=re.useState(""),[ds,ao]=re.useState("All"),[ni,rt]=re.useState("All"),[qe,ri]=re.useState("all"),[Uc,lo]=re.useState([]),[ke,hs]=re.useState(null),[qa,fr]=re.useState(!1),[qn,$c]=re.useState("newest"),[fs,Ha]=re.useState(!1),[zc,ps]=re.useState(null);re.useEffect(()=>{if(!Ce)return;const g=Kd(xs(Ce,"items"),b=>{const L=b.docs.map(q=>({id:q.id,...q.data()}));hn(L)},b=>{console.error("Error fetching items: ",b),X("Failed to load items","error")});return()=>g()},[]),re.useEffect(()=>{if(!Ce||!t)return;const g=Kd(xs(Ce,"users"),b=>{const L=b.docs.map(q=>({id:q.id,...q.data()}));y(L)},b=>{console.error("Error fetching users:",b)});return()=>g()},[t]),re.useEffect(()=>{if(!Ce||!t)return;const g=Kd(xs(Ce,"announcements"),b=>{const L=b.docs.map(q=>({id:q.id,...q.data()})).sort((q,te)=>{var ve,ie,Fe,ii;const ne=((ie=(ve=q.createdAt)==null?void 0:ve.toDate)==null?void 0:ie.call(ve))||new Date(q.createdAt||0);return(((ii=(Fe=te.createdAt)==null?void 0:Fe.toDate)==null?void 0:ii.call(Fe))||new Date(te.createdAt||0))-ne});x(L)},b=>{console.error("Error fetching announcements:",b)});return()=>g()},[t]),re.useEffect(()=>{const g=vb(Je,async b=>{if(b){try{const L=vt(Ce,"users",b.uid),q=await Rl(L);if(q.exists()&&q.data().isSuspended===!0){await Sl(Je),c("Your account has been suspended. Please contact an administrator."),X("Account suspended. Please contact an administrator.","error"),e(!1),r(!0);return}}catch(L){console.error("Error checking suspension status:",L)}e(!0),r(!1);try{const L=vt(Ce,"users",b.uid),q=await Rl(L);if(q.exists()){const te=q.data();S({name:te.name||b.displayName||"",email:te.email||b.email,school:te.school||"",department:te.department||"",phone:te.phone||"",role:te.role||"user",isSuspended:te.isSuspended||!1})}else{const te=j2(xs(Ce,"users"),F2("email","==",b.email)),ne=await z2(te);if(ne.empty)S({name:b.displayName||"",email:b.email,school:"",department:"",phone:"",role:"user",isSuspended:!1});else{const pe=ne.docs[0].data();S({name:pe.name||b.displayName||"",email:pe.email||b.email,school:pe.school||"",department:pe.department||"",phone:pe.phone||"",role:pe.role||"user",isSuspended:pe.isSuspended||!1})}}}catch(L){console.error("Error fetching user profile:",L)}}else e(!1),r(!0),S({name:"",email:"",school:"",department:"",phone:"",role:"user",isSuspended:!1})});return()=>g()},[]),re.useEffect(()=>{p?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[p]);const X=(g,b="success")=>{const L=Date.now(),q={id:L,message:g,type:b};lo(te=>[...te,q]),setTimeout(()=>{lo(te=>te.filter(ne=>ne.id!==L))},3e3)};let Hn=ye.filter(g=>{const b=(g.title||"").toLowerCase().includes(ti.toLowerCase())||(g.description||"").toLowerCase().includes(ti.toLowerCase()),L=ds==="All"||g.category===ds,q=ni==="All"||g.location===ni,te=qe==="all"||g.status===qe;if(fs&&g.ownerEmail!==(D==null?void 0:D.email))return!1;const ne=g.approvalStatus==="approved"||g.ownerEmail===(D==null?void 0:D.email)||(D==null?void 0:D.role)==="admin";return g.archived&&(D==null?void 0:D.role)!=="admin"?!1:b&&L&&q&&te&&ne});Hn=[...Hn].sort((g,b)=>{if(qn==="newest"){const L=g.date?new Date(g.date).getTime():0;return(b.date?new Date(b.date).getTime():0)-L}else if(qn==="oldest"){const L=g.date?new Date(g.date).getTime():0,q=b.date?new Date(b.date).getTime():0;return L-q}else{if(qn==="category")return(g.category||"").localeCompare(b.category||"");if(qn==="title")return(g.title||"").localeCompare(b.title||"")}return 0});const Wn=async(g,b)=>{try{const L=vt(Ce,"items",g);await Ts(L,{status:b}),hn(ye.map(q=>q.id===g?{...q,status:b}:q)),X(`Item marked as ${b}`,"success")}catch(L){console.error("Error updating status:",L),X("Failed to update status","error")}},Wa=async g=>{Wn(g,"returned")},ms=g=>{const b=m.find(L=>L.email===g.ownerEmail);ps(b||null),hs(g),fr(!0)},Ga=g=>{const b=m.find(L=>L.email===g.ownerEmail);b?b.phone?(window.open(`tel:${b.phone}`,"_self"),X(`Calling ${b.name}...`,"info")):b.email?(window.open(`mailto:${b.email}?subject=Regarding: ${g.title}`,"_self"),X(`Opening email to ${b.name}...`,"info")):X("Owner contact information not available","error"):X("Owner information not found","error")},gs=g=>{cs(g),Be({title:g.title||"",description:g.description||"",category:g.category||"Electronics",location:g.location||"Library",status:g.status||"lost",images:g.images?g.images.map((b,L)=>({id:Date.now()+L,url:b,file:null})):[]}),$t(!0),fr(!1)},Ka=async()=>{if(en){if(!Q.title.trim()||!Q.description.trim()){X("Please fill in title and description","error");return}try{X("Updating item...","info");const g=Q.images.filter(ne=>ne.file),b=Q.images.filter(ne=>!ne.file).map(ne=>ne.url);let L=[];g.length>0&&(L=await Promise.all(g.map(async ne=>ne.file?await ev(ne.file):ne.url)));const q=[...b,...L],te={title:Q.title,description:Q.description,category:Q.category,location:Q.location,status:Q.status,image:q.length>0?q[0]:Tr,images:q,approvalStatus:en.approvalStatus==="approved"?"pending":en.approvalStatus};await Ts(vt(Ce,"items",en.id),te),await fn("update","item",en.id,{title:te.title,changes:Object.keys(te)}),hn(ye.map(ne=>ne.id===en.id?{...ne,...te}:ne)),g.forEach(ne=>{ne.url&&ne.url.startsWith("blob:")&&URL.revokeObjectURL(ne.url)}),$t(!1),cs(null),X("Item updated successfully!","success"),Be({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})}catch(g){console.error("Error updating document: ",g),X("Failed to update item","error")}}},st=async g=>{if(window.confirm("Are you sure you want to delete this item?"))try{const b=ye.find(L=>L.id===g);await Y0(vt(Ce,"items",g)),await fn("delete","item",g,{title:(b==null?void 0:b.title)||"Unknown"}),hn(ye.filter(L=>L.id!==g)),fr(!1),X("Item deleted successfully","success")}catch(b){console.error("Error deleting item:",b),X("Failed to delete item","error")}},fn=async(g,b,L,q={})=>{if(!(!t||!Je.currentUser))try{await Gd(xs(Ce,"audit_logs"),{action:g,resourceType:b,resourceId:L,userId:Je.currentUser.uid,userEmail:(D==null?void 0:D.email)||Je.currentUser.email,userName:(D==null?void 0:D.name)||Je.currentUser.displayName,timestamp:new Date,details:q,ipAddress:null})}catch(te){console.error("Error logging activity:",te)}},ys=async g=>{try{const b=uD();await dD(b,"sendMatchEmail")(g),console.log("Match email sent successfully")}catch(b){console.error("Error sending match notification:",b)}},pr=g=>{const L=Array.from(g.target.files).map(q=>({id:Date.now()+Math.random(),url:URL.createObjectURL(q),file:q,name:q.name}));Be({...Q,images:[...Q.images,...L]})},Qa=g=>{Be({...Q,images:Q.images.filter(b=>b.id!==g)})},Bc=async()=>{var g,b;if(!Q.title.trim()||!Q.description.trim()){X("Please fill in title and description","error");return}try{X("Uploading images...","info");const L=await Promise.all(Q.images.map(async pe=>pe.file?await ev(pe.file):pe.url)),q={title:Q.title,description:Q.description,category:Q.category,location:Q.location,status:Q.status,image:L.length>0?L[0]:Tr,images:L,claimed:!1,approvalStatus:"pending",date:new Date().toISOString().split("T")[0],ownerEmail:(D==null?void 0:D.email)||((g=Je.currentUser)==null?void 0:g.email)||"",ownerName:(D==null?void 0:D.name)||((b=Je.currentUser)==null?void 0:b.displayName)||""},ne={id:(await Gd(xs(Ce,"items"),q)).id,...q};hn([ne,...ye]);try{const pe=ye.filter(ve=>ve.approvalStatus!=="approved"||ve.ownerEmail===q.ownerEmail?!1:pD(ne,ve));if(pe.length>0){const ve={id:Date.now().toString(),type:"match",title:"🎉 Potential Match Found!",message:`We found ${pe.length} potential match${pe.length>1?"es":""} for your ${Q.status} item: "${Q.title}"`,timestamp:new Date,matches:pe.map(ie=>({id:ie.id,title:ie.title}))};Ee(ie=>[ve,...ie]),setTimeout(()=>{Ee(ie=>ie.filter(Fe=>Fe.id!==ve.id))},1e4)}for(const ve of pe){const ie=m.find(Fe=>Fe.email===ve.ownerEmail);ie&&await ys({toEmail:ie.email,toName:ie.name,matchedItem:ne,userItem:ve})}pe.length>0&&X(`${pe.length} potential match(es) found! Email notifications sent.`,"info")}catch(pe){console.error("Error checking matches:",pe)}Q.images.forEach(pe=>URL.revokeObjectURL(pe.url)),Jt(!1),Zt(!1),X("Item posted successfully!","success"),Be({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})}catch(L){console.error("Error adding document: ",L),X("Failed to create post","error")}},mr=async()=>{var g;if(!fe.title.trim()||!fe.message.trim()){X("Please fill in title and message","error");return}try{if(N)await Ts(vt(Ce,"announcements",N.id),{title:fe.title,message:fe.message,type:fe.type,updatedAt:new Date}),await fn("update","announcement",N.id,{title:fe.title}),X("Announcement updated successfully","success");else{const b=await Gd(xs(Ce,"announcements"),{title:fe.title,message:fe.message,type:fe.type,createdAt:new Date,createdBy:(D==null?void 0:D.email)||((g=Je.currentUser)==null?void 0:g.email)||"admin"});await fn("create","announcement",b.id,{title:fe.title,type:fe.type}),X("Announcement created successfully","success")}k(!1),T(null),nt({title:"",message:"",type:"info"})}catch(b){console.error("Error saving announcement:",b),X(`Failed to save announcement: ${b.message}`,"error")}},Ya=async g=>{if(window.confirm("Are you sure you want to delete this announcement?"))try{const b=_.find(L=>L.id===g);await Y0(vt(Ce,"announcements",g)),await fn("delete","announcement",g,{title:(b==null?void 0:b.title)||"Unknown"}),X("Announcement deleted successfully","success")}catch(b){console.error("Error deleting announcement:",b),X("Failed to delete announcement","error")}},qc=async(g,b)=>{const L={...D,[g]:b};if(S(L),Je.currentUser)try{await Q0(vt(Ce,"users",Je.currentUser.uid),L,{merge:!0}),X("Profile updated","success")}catch(q){console.error("Error updating profile:",q),X("Failed to save profile","error")}},si=g=>g.endsWith("@isb.nu.edu.pk"),Xa=async g=>{if(g&&g.preventDefault(),c(""),!si(o.email)){c("Please use your FAST Islamabad email (@isb.nu.edu.pk)");return}if(o.password.length<6){c("Password must be at least 6 characters long");return}try{if(s){if(!o.name.trim()||!o.school||!o.department.trim()){c("Please fill in all required fields (Name, School, Department).");return}const L=(await fb(Je,o.email,o.password)).user;await mb(L,{displayName:o.name}),await Q0(vt(Ce,"users",L.uid),{name:o.name,email:o.email,school:o.school,department:o.department,phone:o.phone,role:"user",isSuspended:!1}),S({name:o.name,email:o.email,school:o.school,department:o.department,phone:o.phone,role:"user",isSuspended:!1}),X("Account created successfully! Welcome!","success")}else{const L=(await Fy(Je,o.email,o.password)).user,q=vt(Ce,"users",L.uid),te=await Rl(q);if(te.exists()&&te.data().isSuspended===!0){await Sl(Je),c("Your account has been suspended. Please contact an administrator."),X("Account suspended. Please contact an administrator.","error");return}l({email:"",password:"",name:"",school:"",department:"",phone:""}),X("Welcome back!","success")}}catch(b){console.error("Auth error:",b);let L="Authentication failed.";b.code==="auth/email-already-in-use"?L="Email already in use.":b.code==="auth/invalid-credential"?L="Invalid email or password.":b.code==="auth/weak-password"&&(L="Password should be at least 6 characters."),c(L),X(L,"error")}},Ja=g=>{l({...o,school:g,department:""})},uo=async()=>{try{await Sl(Je),ye.forEach(g=>{g.image&&g.image.startsWith("blob:")&&URL.revokeObjectURL(g.image)}),i(!1),l({email:"",password:"",name:"",school:"",department:"",phone:""}),X("Logged out successfully","info")}catch(g){console.error("Logout error:",g),X("Error logging out","error")}},pn=(g,b)=>{l({...o,[g]:b}),c("")},Hc=()=>{const g=ye.filter(L=>L.status==="lost").reduce((L,q)=>{const te=q.category||"Unknown";return L[te]=(L[te]||0)+1,L},{}),b=3;return Object.entries(g).filter(([L,q])=>q>=b).map(([L])=>L)},An=({item:g})=>{const b=g.ownerEmail===(D==null?void 0:D.email),L=(D==null?void 0:D.role)==="admin",q=Hc(),te=g.status==="lost"&&q.includes(g.category);return h.jsxs("div",{className:`${p?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} ${te?"border-2 border-orange-500 ring-2 ring-orange-200 dark:ring-orange-800":"border"} rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl cursor-pointer`,onClick:()=>ms(g),children:[h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:g.image,alt:g.title,className:"w-full h-48 object-cover object-center",onError:ne=>{ne.target.onerror=null,ne.target.src=Tr}}),b&&h.jsx("span",{className:"absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold",children:"My Post"}),te&&h.jsx("span",{className:"absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10",children:"⚠️ Frequently Lost"}),g.approvalStatus==="pending"&&h.jsx("span",{className:`absolute ${te?"top-10":"top-2"} right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold`,children:"Pending Approval"}),(b||L)&&h.jsx("button",{onClick:ne=>{ne.stopPropagation(),st(g.id)},className:"absolute bottom-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition shadow-md",title:"Delete Item",children:h.jsx(ly,{size:16})})]}),h.jsxs("div",{className:"p-4 sm:p-5",children:[h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsx("h3",{className:`font-extrabold text-xl ${p?"text-white":"text-gray-900"} leading-snug`,children:g.title}),h.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${g.status==="lost"?"bg-red-500 text-white":"bg-green-500 text-white"} shadow-md`,children:(g.status||"unknown").toUpperCase()})]}),h.jsx("p",{className:`text-sm mb-3 ${p?"text-gray-300":"text-gray-600"} line-clamp-2`,children:g.description}),h.jsxs("div",{className:"space-y-2 mb-4 text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(No,{size:16,className:p?"text-blue-400":"text-blue-600"}),h.jsxs("span",{className:p?"text-gray-300":"text-gray-700",children:["Category: ",h.jsx("span",{className:`font-medium ${te?"text-orange-600 dark:text-orange-400":""}`,children:g.category}),te&&h.jsx("span",{className:"ml-2 text-xs text-orange-600 dark:text-orange-400",children:"⚠️ Take extra care!"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(bo,{size:16,className:p?"text-yellow-400":"text-yellow-600"}),h.jsxs("span",{className:p?"text-gray-300":"text-gray-700",children:["Location: ",h.jsx("span",{className:"font-medium",children:g.location})]})]}),h.jsxs("p",{className:"text-xs pt-1 text-gray-500",children:["Reported: ",g.date?new Date(g.date).toLocaleDateString():"N/A"]})]}),h.jsx("div",{className:`w-full py-2 rounded-xl text-center font-semibold text-sm ${g.claimed?"bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200":p?"bg-gray-700 text-gray-300":"bg-gray-100 text-gray-700"}`,children:g.claimed?h.jsxs("span",{className:"flex items-center justify-center gap-2",children:[h.jsx(bd,{size:16})," Claimed & Resolved"]}):h.jsxs("span",{className:"flex items-center justify-center gap-2",children:[h.jsx(nS,{size:16})," Click to view details"]})})]})]},g.id)};return B==="admin-login"?h.jsx("div",{className:`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${p?"bg-gray-900":"bg-gray-50"}`,children:h.jsxs("div",{className:`w-full max-w-md p-8 rounded-2xl shadow-xl ${p?"bg-gray-800":"bg-white"}`,children:[h.jsx("div",{className:"flex justify-center mb-8",children:h.jsx("div",{className:"p-3 bg-purple-600 rounded-full shadow-lg",children:h.jsx(ay,{size:40,className:"text-white"})})}),h.jsx("h2",{className:`text-3xl font-bold text-center mb-2 ${p?"text-white":"text-gray-900"}`,children:"Admin Portal"}),h.jsx("p",{className:`text-center mb-8 ${p?"text-gray-400":"text-gray-500"}`,children:"Restricted access for administrators only."}),h.jsxs("form",{onSubmit:async g=>{g.preventDefault();const b=g.target.email.value,L=g.target.password.value;try{const te=(await Fy(Je,b,L)).user,ne=await Rl(vt(Ce,"users",te.uid));ne.exists()&&ne.data().role==="admin"?(X("Welcome back, Admin!","success"),w("home"),$(!0)):(await Sl(Je),X("Access Denied: You are not an admin.","error"))}catch(q){console.error("Admin login error:",q),X("Login failed: "+q.message,"error")}},className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-2 ${p?"text-gray-300":"text-gray-700"}`,children:"Email Address"}),h.jsxs("div",{className:"relative",children:[h.jsx(iy,{className:`absolute left-3 top-3 ${p?"text-gray-500":"text-gray-400"}`,size:20}),h.jsx("input",{name:"email",type:"email",required:!0,className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`,placeholder:"admin@isb.nu.edu.pk"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-2 ${p?"text-gray-300":"text-gray-700"}`,children:"Password"}),h.jsxs("div",{className:"relative",children:[h.jsx(sy,{className:`absolute left-3 top-3 ${p?"text-gray-500":"text-gray-400"}`,size:20}),h.jsx("input",{name:"password",type:"password",required:!0,className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`,placeholder:"••••••••"})]})]}),h.jsx("button",{type:"submit",className:"w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5",children:"Access Dashboard"})]}),h.jsx("div",{className:"mt-6 text-center",children:h.jsx("button",{onClick:()=>w("home"),className:`text-sm font-medium ${p?"text-gray-400 hover:text-white":"text-gray-500 hover:text-gray-900"} transition`,children:"← Back to Home"})})]})}):h.jsxs("div",{className:`min-h-screen transition-colors duration-300 font-sans ${p?"dark bg-gray-900":"bg-gray-50"}`,children:[h.jsx("div",{className:"fixed top-20 right-4 z-50 space-y-2 max-w-sm",children:ae.map(g=>h.jsx("div",{className:`p-4 rounded-lg shadow-lg border-l-4 ${g.type==="match"?"bg-green-50 dark:bg-green-900/20 border-green-500":"bg-blue-50 dark:bg-blue-900/20 border-blue-500"} animate-slide-in`,children:h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("h4",{className:`font-bold mb-1 ${g.type==="match"?"text-green-800 dark:text-green-200":"text-blue-800 dark:text-blue-200"}`,children:g.title}),h.jsx("p",{className:`text-sm ${g.type==="match"?"text-green-700 dark:text-green-300":"text-blue-700 dark:text-blue-300"}`,children:g.message}),g.matches&&g.matches.length>0&&h.jsxs("div",{className:"mt-2 text-xs",children:[h.jsx("p",{className:"font-semibold",children:"Matching items:"}),h.jsx("ul",{className:"list-disc list-inside mt-1",children:g.matches.map(b=>h.jsx("li",{children:b.title},b.id))})]})]}),h.jsx("button",{onClick:()=>Ee(b=>b.filter(L=>L.id!==g.id)),className:"ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:h.jsx(Rn,{size:16})})]})},g.id))}),n&&!t&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto",children:h.jsxs("div",{className:`${p?"bg-gray-800":"bg-white"} rounded-xl max-w-md w-full p-4 sm:p-6 md:p-8 shadow-2xl my-4 sm:my-8 max-h-[95vh] overflow-y-auto`,children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("h2",{className:`text-3xl font-extrabold mb-2 ${p?"text-white":"text-gray-900"}`,children:"FAST Lost & Found"}),h.jsx("p",{className:`text-sm ${p?"text-gray-400":"text-gray-600"}`,children:s?"Create your university account":"Sign in to access the system"})]}),u&&h.jsx("div",{className:"mb-4 p-3 bg-red-500 text-white rounded-lg text-sm font-medium",children:u}),h.jsxs("form",{onSubmit:Xa,className:"space-y-4",children:[s&&h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"Full Name"}),h.jsxs("div",{className:"relative",children:[h.jsx(tS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"text",value:o.name,onChange:g=>pn("name",g.target.value),placeholder:"Enter your full name",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"FAST University Email"}),h.jsxs("div",{className:"relative",children:[h.jsx(iy,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"email",value:o.email,onChange:g=>pn("email",g.target.value),placeholder:"yourname@isb.nu.edu.pk",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:!0})]}),h.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Must use your FAST Islamabad email"})]}),s&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"School"}),h.jsxs("div",{className:"relative",children:[h.jsx(ry,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsxs("select",{value:o.school,onChange:g=>Ja(g.target.value),className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s,children:[h.jsx("option",{value:"",children:"Select School"}),Object.keys(tv).map(g=>h.jsx("option",{value:g,children:g},g))]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"Department"}),h.jsxs("div",{className:"relative",children:[h.jsx(ry,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsxs("select",{value:o.department,onChange:g=>pn("department",g.target.value),className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:s,disabled:!o.school,children:[h.jsx("option",{value:"",children:"Select Department"}),o.school&&tv[o.school].map(g=>h.jsx("option",{value:g,children:g},g))]})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"Phone Number (Optional)"}),h.jsxs("div",{className:"relative",children:[h.jsx(aS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"tel",value:o.phone,onChange:g=>pn("phone",g.target.value),placeholder:"+92 300 1234567",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:"Password"}),h.jsxs("div",{className:"relative",children:[h.jsx(sy,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"password",value:o.password,onChange:g=>pn("password",g.target.value),placeholder:"Enter your password",className:`w-full pl-10 pr-4 py-3 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`,required:!0})]}),h.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Minimum 6 characters"})]}),h.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold shadow-lg",children:s?"Create Account":"Sign In"})]}),h.jsx("div",{className:"mt-6 text-center",children:h.jsx("button",{onClick:()=>{i(!s),c(""),l({...o,name:"",school:"",department:"",phone:""})},className:`text-sm ${p?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"} font-medium transition`,children:s?"Already have an account? Sign in":"Don't have an account? Register"})})]})}),h.jsx("header",{className:`${p?"bg-gray-800 shadow-gray-900/20":"bg-white shadow-gray-200/50"} sticky top-0 z-40 shadow-lg backdrop-blur-md bg-opacity-90 transition-colors duration-300`,children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center gap-3 cursor-pointer group",onClick:()=>window.location.reload(),children:[h.jsx("div",{className:"p-2 rounded-lg bg-blue-600 group-hover:scale-110 transition-transform duration-300",children:h.jsx(oy,{className:"text-white",size:24})}),h.jsxs("h1",{className:`text-2xl font-extrabold tracking-tight ${p?"text-white":"text-gray-900"}`,children:["FAST ",h.jsx("span",{className:"text-blue-600",children:"Lost&Found"})]})]}),h.jsx("div",{className:"flex items-center gap-4",children:t&&h.jsxs(h.Fragment,{children:[D.role==="admin"&&h.jsxs("button",{onClick:()=>$(!0),className:"hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:[h.jsx(ay,{size:18}),"Admin"]}),h.jsxs("button",{onClick:()=>Jt(!0),className:"hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5",children:[h.jsx(lS,{size:20}),"Report Item"]}),h.jsx("button",{onClick:()=>A(!p),className:`p-2 rounded-lg ${p?"bg-gray-700 text-yellow-400":"bg-gray-100 text-gray-700"} hover:opacity-80 transition`,title:p?"Switch to Light Mode":"Switch to Dark Mode",children:p?h.jsx(uS,{size:20}):h.jsx(iS,{size:20})}),h.jsx("button",{onClick:()=>V(!P),className:`p-2 rounded-lg ${p?"bg-gray-700 text-white":"bg-gray-100 text-gray-700"} hover:opacity-80 transition`,title:"Profile",children:h.jsx(Rd,{size:20})}),h.jsx("button",{onClick:uo,className:`p-2 rounded-lg ${p?"bg-gray-700 text-red-400":"bg-gray-100 text-red-600"} hover:opacity-80 transition`,title:"Logout",children:h.jsx(rS,{size:20})})]})})]})}),t&&_.length>0&&h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2",children:_.filter(g=>!g.archived).slice(0,3).map(g=>h.jsx("div",{className:`mb-2 p-4 rounded-lg border-l-4 ${g.type==="warning"?"bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500":g.type==="reminder"?"bg-blue-50 dark:bg-blue-900/20 border-blue-500":"bg-gray-50 dark:bg-gray-800 border-gray-500"}`,children:h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("h4",{className:`font-bold mb-1 ${g.type==="warning"?"text-yellow-800 dark:text-yellow-200":g.type==="reminder"?"text-blue-800 dark:text-blue-200":"text-gray-800 dark:text-gray-200"}`,children:g.title}),h.jsx("p",{className:`text-sm ${g.type==="warning"?"text-yellow-700 dark:text-yellow-300":g.type==="reminder"?"text-blue-700 dark:text-blue-300":"text-gray-700 dark:text-gray-300"}`,children:g.message})]}),(D==null?void 0:D.role)==="admin"&&h.jsx("button",{onClick:()=>Ya(g.id),className:"ml-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400",title:"Delete Announcement",children:h.jsx(Rn,{size:16})})]})},g.id))}),P&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4",children:h.jsxs("div",{className:`${p?"bg-gray-800":"bg-white"} rounded-xl max-w-md w-full p-6 shadow-2xl`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-6",children:[h.jsx("h2",{className:`text-2xl font-bold ${p?"text-white":"text-gray-900"}`,children:"User Profile"}),h.jsx("button",{onClick:()=>V(!1),className:p?"text-gray-400 hover:text-white":"text-gray-600 hover:text-gray-900",children:h.jsx(Rn,{size:24})})]}),h.jsxs("div",{className:"flex gap-2 mb-6 border-b border-gray-300 dark:border-gray-700",children:[h.jsx("button",{onClick:()=>C("profile"),className:`px-4 py-2 font-semibold transition ${E==="profile"?"border-b-2 border-blue-600 text-blue-600 dark:text-blue-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:"Profile"}),h.jsx("button",{onClick:()=>C("history"),className:`px-4 py-2 font-semibold transition ${E==="history"?"border-b-2 border-blue-600 text-blue-600 dark:text-blue-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:"History"})]}),E==="profile"?h.jsxs("div",{className:"space-y-4",children:[["name","email","school","department","phone"].map(g=>h.jsxs("div",{children:[h.jsx("label",{className:`block text-sm font-medium mb-1 ${p?"text-gray-300":"text-gray-700"}`,children:g.charAt(0).toUpperCase()+g.slice(1)}),h.jsx("input",{type:g==="email"?"email":g==="phone"?"tel":"text",value:D[g]||"",onChange:b=>qc(g,b.target.value),disabled:g==="email"||g==="school"||g==="department",className:`w-full px-4 py-3 rounded-lg border ${g==="email"||g==="school"||g==="department"?p?"bg-gray-700 border-gray-600 text-gray-400":"bg-gray-100 border-gray-300 text-gray-500":p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text transition`}),g==="email"&&h.jsx("p",{className:"text-xs mt-1 text-gray-500",children:"Email is immutable."})]},g)),h.jsx("button",{onClick:()=>V(!1),className:"w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold",children:"Close / Save Changes"})]}):h.jsxs("div",{className:"space-y-4 max-h-[60vh] overflow-y-auto",children:[h.jsx("h3",{className:`text-lg font-bold ${p?"text-white":"text-gray-900"}`,children:"My Lost & Found History"}),ye.filter(g=>g.ownerEmail===(D==null?void 0:D.email)).length===0?h.jsxs("div",{className:`text-center py-8 ${p?"text-gray-400":"text-gray-500"}`,children:[h.jsx("p",{className:"text-lg mb-2",children:"No items reported yet"}),h.jsx("p",{className:"text-sm",children:"Start by reporting a lost or found item!"})]}):h.jsx("div",{className:"space-y-3",children:ye.filter(g=>g.ownerEmail===(D==null?void 0:D.email)).sort((g,b)=>new Date(b.date||0)-new Date(g.date||0)).map(g=>{var b;return h.jsx("div",{className:`p-4 rounded-lg border ${p?"bg-gray-700 border-gray-600":"bg-gray-50 border-gray-200"} cursor-pointer hover:shadow-md transition`,onClick:()=>{ms(g),V(!1)},children:h.jsxs("div",{className:"flex gap-4",children:[h.jsx("img",{src:g.image||Tr,alt:g.title,className:"w-20 h-20 object-cover rounded-lg",onError:L=>{L.target.onerror=null,L.target.src=Tr}}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex justify-between items-start mb-1",children:[h.jsx("h4",{className:`font-bold ${p?"text-white":"text-gray-900"}`,children:g.title}),h.jsx("span",{className:`px-2 py-1 rounded text-xs font-semibold ${g.status==="lost"?"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200":g.status==="found"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}`,children:((b=g.status)==null?void 0:b.toUpperCase())||"UNKNOWN"})]}),h.jsx("p",{className:`text-sm mb-2 line-clamp-2 ${p?"text-gray-300":"text-gray-600"}`,children:g.description}),h.jsxs("div",{className:"flex gap-4 text-xs text-gray-500 dark:text-gray-400",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(No,{size:12})," ",g.category]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(bo,{size:12})," ",g.location]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(Cd,{size:12})," ",g.date?new Date(g.date).toLocaleDateString():"N/A"]})]}),g.approvalStatus==="pending"&&h.jsx("span",{className:"inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded",children:"Pending Approval"}),g.status==="returned"&&h.jsx("span",{className:"inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded",children:"✓ Resolved"})]})]})},g.id)})})]})]})}),De&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:It?"Preview Report":"Report an Item"}),h.jsx("button",{onClick:()=>{Jt(!1),Zt(!1)},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:h.jsx(Rn,{className:"w-6 h-6"})})]}),h.jsx("div",{className:"p-6 space-y-6",children:It?h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[h.jsxs("div",{className:"aspect-video relative rounded-lg overflow-hidden mb-4 bg-gray-200 dark:bg-gray-600",children:[h.jsx("img",{src:Q.images.length>0?Q.images[0].url:Tr,alt:Q.title,className:"w-full h-full object-cover"}),h.jsx("span",{className:`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium capitalize
                        ${Q.status==="lost"?"bg-red-100 text-red-800":"bg-green-100 text-green-800"}`,children:Q.status})]}),h.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:Q.title}),h.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:Q.description}),h.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[h.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[h.jsx(No,{className:"w-4 h-4 mr-2"}),Q.category]}),h.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[h.jsx(bo,{className:"w-4 h-4 mr-2"}),Q.location]}),h.jsxs("div",{className:"flex items-center text-gray-500 dark:text-gray-400",children:[h.jsx(Cd,{className:"w-4 h-4 mr-2"}),new Date().toLocaleDateString()]})]})]}),h.jsxs("div",{className:"flex gap-4",children:[h.jsx("button",{onClick:()=>Zt(!1),className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Back to Edit"}),h.jsx("button",{onClick:Bc,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Confirm & Post"})]})]}):h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[h.jsx("button",{onClick:()=>Be({...Q,status:"lost"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="lost"?"bg-white dark:bg-gray-600 text-red-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Lost Item"}),h.jsx("button",{onClick:()=>Be({...Q,status:"found"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="found"?"bg-white dark:bg-gray-600 text-green-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Found Item"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),h.jsx("input",{type:"text",value:Q.title,onChange:g=>Be({...Q,title:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Blue Samsonite Backpack"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Description"}),h.jsx("textarea",{value:Q.description,onChange:g=>Be({...Q,description:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Provide details like color, brand, distinguishing marks..."})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Category"}),h.jsx("select",{value:Q.category,onChange:g=>Be({...Q,category:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Qd.filter(g=>g!=="All").map(g=>h.jsx("option",{value:g,children:g},g))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Location"}),h.jsx("select",{value:Q.location,onChange:g=>Be({...Q,location:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Yd.filter(g=>g!=="All").map(g=>h.jsx("option",{value:g,children:g},g))})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Photos"}),h.jsxs("div",{className:"border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors",children:[h.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:pr,className:"hidden",id:"image-upload"}),h.jsxs("label",{htmlFor:"image-upload",className:"cursor-pointer flex flex-col items-center",children:[h.jsx(Nd,{className:"w-8 h-8 text-gray-400 mb-2"}),h.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Click to upload photos"})]})]}),Q.images.length>0&&h.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Q.images.map(g=>h.jsxs("div",{className:"relative aspect-square rounded-lg overflow-hidden group",children:[h.jsx("img",{src:g.url,alt:"Preview",className:"w-full h-full object-cover"}),h.jsx("button",{onClick:()=>Qa(g.id),className:"absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:h.jsx(Rn,{className:"w-3 h-3"})})]},g.id))})]}),h.jsx("button",{onClick:()=>{if(!Q.title.trim()||!Q.description.trim()){X("Please fill in title and description","error");return}Zt(!0)},className:"w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors",children:"Preview Report"})]})})]})}),Ut&&en&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Edit Item"}),h.jsx("button",{onClick:()=>{$t(!1),cs(null),Be({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:h.jsx(Rn,{className:"w-6 h-6"})})]}),h.jsx("div",{className:"p-6 space-y-6",children:h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[h.jsx("button",{onClick:()=>Be({...Q,status:"lost"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="lost"?"bg-white dark:bg-gray-600 text-red-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Lost Item"}),h.jsx("button",{onClick:()=>Be({...Q,status:"found"}),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${Q.status==="found"?"bg-white dark:bg-gray-600 text-green-600 shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700"}`,children:"Found Item"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),h.jsx("input",{type:"text",value:Q.title,onChange:g=>Be({...Q,title:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Blue Samsonite Backpack"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Description"}),h.jsx("textarea",{value:Q.description,onChange:g=>Be({...Q,description:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Provide details like color, brand, distinguishing marks..."})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Category"}),h.jsx("select",{value:Q.category,onChange:g=>Be({...Q,category:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Qd.filter(g=>g!=="All").map(g=>h.jsx("option",{value:g,children:g},g))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Location"}),h.jsx("select",{value:Q.location,onChange:g=>Be({...Q,location:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:Yd.filter(g=>g!=="All").map(g=>h.jsx("option",{value:g,children:g},g))})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Photos (Add more or remove existing)"}),h.jsxs("div",{className:"border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors",children:[h.jsx("input",{type:"file",multiple:!0,accept:"image/*",onChange:pr,className:"hidden",id:"edit-image-upload"}),h.jsxs("label",{htmlFor:"edit-image-upload",className:"cursor-pointer flex flex-col items-center",children:[h.jsx(Nd,{className:"w-8 h-8 text-gray-400 mb-2"}),h.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Click to add more photos"})]})]}),Q.images.length>0&&h.jsx("div",{className:"mt-4 grid grid-cols-4 gap-2",children:Q.images.map(g=>h.jsxs("div",{className:"relative aspect-square rounded-lg overflow-hidden group",children:[h.jsx("img",{src:g.url,alt:"Preview",className:"w-full h-full object-cover"}),h.jsx("button",{onClick:()=>Qa(g.id),className:"absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:h.jsx(Rn,{className:"w-3 h-3"})})]},g.id))})]}),en.approvalStatus==="approved"&&h.jsx("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:h.jsx("p",{className:"text-sm text-yellow-800 dark:text-yellow-200",children:"⚠️ Note: Editing this item will require admin re-approval."})}),h.jsxs("div",{className:"flex gap-4",children:[h.jsx("button",{onClick:()=>{$t(!1),cs(null),Be({title:"",description:"",category:"Electronics",location:"Library",status:"lost",images:[]})},className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Cancel"}),h.jsx("button",{onClick:Ka,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold",children:"Save Changes"})]})]})})]})}),j&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Admin Dashboard"}),h.jsx("button",{onClick:()=>$(!1),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:h.jsx(Rn,{className:"w-6 h-6"})})]}),h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"Statistics"}),h.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[h.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:[h.jsx("p",{className:"text-sm text-blue-600 dark:text-blue-400 mb-1",children:"Total Items"}),h.jsx("p",{className:"text-2xl font-bold text-blue-900 dark:text-blue-100",children:ye.length})]}),h.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800",children:[h.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-1",children:"Lost Items"}),h.jsx("p",{className:"text-2xl font-bold text-red-900 dark:text-red-100",children:ye.filter(g=>g.status==="lost").length})]}),h.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800",children:[h.jsx("p",{className:"text-sm text-green-600 dark:text-green-400 mb-1",children:"Found Items"}),h.jsx("p",{className:"text-2xl font-bold text-green-900 dark:text-green-100",children:ye.filter(g=>g.status==="found").length})]}),h.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800",children:[h.jsx("p",{className:"text-sm text-purple-600 dark:text-purple-400 mb-1",children:"Recovery Rate"}),h.jsxs("p",{className:"text-2xl font-bold text-purple-900 dark:text-purple-100",children:[ye.length>0?Math.round(ye.filter(g=>g.status==="returned"||g.claimed).length/ye.length*100):0,"%"]})]})]}),h.jsxs("div",{className:"mb-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-3",children:[h.jsx("h4",{className:"text-md font-semibold text-gray-900 dark:text-white",children:"Category Reports"}),h.jsx("button",{onClick:()=>{const g=ye.reduce((ve,ie)=>{const Fe=ie.category||"Unknown";return ve[Fe]||(ve[Fe]={total:0,lost:0,found:0,returned:0}),ve[Fe].total++,ie.status==="lost"&&ve[Fe].lost++,ie.status==="found"&&ve[Fe].found++,(ie.status==="returned"||ie.claimed)&&ve[Fe].returned++,ve},{}),b=`Category,Total Items,Lost Items,Found Items,Returned Items,Recovery Rate
`,L=Object.entries(g).sort((ve,ie)=>ie[1].total-ve[1].total).map(([ve,ie])=>{const Fe=ie.total>0?(ie.returned/ie.total*100).toFixed(1):"0.0";return`${ve},${ie.total},${ie.lost},${ie.found},${ie.returned},${Fe}%`}).join(`
`),q=b+L,te=new Blob([q],{type:"text/csv"}),ne=window.URL.createObjectURL(te),pe=document.createElement("a");pe.href=ne,pe.download=`category-report-${new Date().toISOString().split("T")[0]}.csv`,pe.click(),window.URL.revokeObjectURL(ne),X("Category report downloaded","success")},className:"px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition",children:"Download Report"})]}),h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 mb-4",children:Object.entries(ye.reduce((g,b)=>{const L=b.category||"Unknown";return g[L]=(g[L]||0)+1,g},{})).sort((g,b)=>b[1]-g[1]).slice(0,4).map(([g,b])=>h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-3 rounded-lg",children:[h.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:g}),h.jsx("p",{className:"text-lg font-bold text-gray-900 dark:text-white",children:b})]},g))}),h.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto",children:h.jsxs("table",{className:"w-full text-sm",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[h.jsx("th",{className:"text-left py-2 px-2 text-gray-700 dark:text-gray-300",children:"Category"}),h.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Total"}),h.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Lost"}),h.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Found"}),h.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Returned"}),h.jsx("th",{className:"text-right py-2 px-2 text-gray-700 dark:text-gray-300",children:"Recovery %"})]})}),h.jsx("tbody",{children:Object.entries(ye.reduce((g,b)=>{const L=b.category||"Unknown";return g[L]||(g[L]={total:0,lost:0,found:0,returned:0}),g[L].total++,b.status==="lost"&&g[L].lost++,b.status==="found"&&g[L].found++,(b.status==="returned"||b.claimed)&&g[L].returned++,g},{})).sort((g,b)=>b[1].total-g[1].total).map(([g,b])=>{const L=b.total>0?(b.returned/b.total*100).toFixed(1):"0.0";return h.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-600",children:[h.jsx("td",{className:"py-2 px-2 font-medium text-gray-900 dark:text-white",children:g}),h.jsx("td",{className:"py-2 px-2 text-right text-gray-700 dark:text-gray-300",children:b.total}),h.jsx("td",{className:"py-2 px-2 text-right text-red-600 dark:text-red-400",children:b.lost}),h.jsx("td",{className:"py-2 px-2 text-right text-green-600 dark:text-green-400",children:b.found}),h.jsx("td",{className:"py-2 px-2 text-right text-blue-600 dark:text-blue-400",children:b.returned}),h.jsxs("td",{className:"py-2 px-2 text-right font-semibold text-gray-900 dark:text-white",children:[L,"%"]})]},g)})})]})})]}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h4",{className:"text-md font-semibold mb-3 text-gray-900 dark:text-white",children:"Items This Month"}),h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[h.jsx("p",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:ye.filter(g=>{if(!g.date)return!1;const b=new Date(g.date),L=new Date;return b.getMonth()===L.getMonth()&&b.getFullYear()===L.getFullYear()}).length}),h.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:["Items reported in ",new Date().toLocaleString("default",{month:"long",year:"numeric"})]})]})]}),h.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"Pending Approvals"}),h.jsx("div",{className:"space-y-4 mb-8",children:ye.filter(g=>g.approvalStatus==="pending").length===0?h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No pending items."}):ye.filter(g=>g.approvalStatus==="pending").map(g=>h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex gap-4 items-center",children:[h.jsx("img",{src:g.image||Tr,alt:g.title,className:"w-16 h-16 rounded object-cover"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h4",{className:"font-bold text-gray-900 dark:text-white",children:g.title}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:g.description}),h.jsxs("p",{className:"text-xs text-gray-400",children:["By: ",g.ownerName," (",g.ownerEmail,")"]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:async()=>{try{await Ts(vt(Ce,"items",g.id),{approvalStatus:"approved"}),await fn("approve","item",g.id,{title:g.title}),hn(ye.map(b=>b.id===g.id?{...b,approvalStatus:"approved"}:b)),X("Item approved","success")}catch(b){console.error("Error approving item:",b),X(`Failed to approve: ${b.message}`,"error")}},className:"px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700",children:"Approve"}),h.jsx("button",{onClick:async()=>{try{await Ts(vt(Ce,"items",g.id),{approvalStatus:"rejected"}),await fn("reject","item",g.id,{title:g.title}),hn(ye.map(b=>b.id===g.id?{...b,approvalStatus:"rejected"}:b)),X("Item rejected","info")}catch(b){console.error("Error rejecting item:",b),X(`Failed to reject: ${b.message}`,"error")}},className:"px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",children:"Reject"})]})]},g.id))}),h.jsxs("div",{className:"mb-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-3",children:[h.jsx("h4",{className:"text-md font-semibold text-gray-900 dark:text-white",children:"Archive Management"}),h.jsx("button",{onClick:async()=>{const g=new Date;g.setDate(g.getDate()-90);const b=ye.filter(L=>L.date?new Date(L.date)<g&&!L.archived:!1);if(b.length===0){X("No items to archive (older than 90 days)","info");return}if(window.confirm(`Archive ${b.length} item(s) older than 90 days?`))try{const L=b.map(q=>Ts(vt(Ce,"items",q.id),{archived:!0,archivedAt:new Date}));await Promise.all(L),X(`${b.length} item(s) archived successfully`,"success")}catch(L){console.error("Error archiving items:",L),X("Failed to archive items","error")}},className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:"Archive Old Items (90+ days)"})]}),h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:[h.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Items older than 90 days: ",h.jsx("span",{className:"font-bold text-gray-900 dark:text-white",children:ye.filter(g=>{if(!g.date||g.archived)return!1;const b=new Date(g.date),L=new Date;return L.setDate(L.getDate()-90),b<L}).length})]}),h.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Archived items: ",ye.filter(g=>g.archived).length]})]})]}),h.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:"User Management"}),h.jsx("div",{className:"space-y-4",children:m.map(g=>{const b=ye.filter(L=>L.ownerEmail===g.email);return h.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg",children:h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:g.name}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:g.email}),h.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${g.role==="admin"?"bg-purple-100 text-purple-800":"bg-gray-200 text-gray-800"}`,children:g.role||"user"}),h.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:[b.length," item",b.length!==1?"s":""," reported"]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:()=>{if(b.length===0){X("No items to download for this user","info");return}const L=`Title,Description,Category,Location,Status,Date Reported,Approval Status
`,q=b.sort((ie,Fe)=>new Date(Fe.date||0)-new Date(ie.date||0)).map(ie=>`"${(ie.title||"").replace(/"/g,'""')}","${(ie.description||"").replace(/"/g,'""')}","${ie.category||""}","${ie.location||""}","${ie.status||""}","${ie.date||""}","${ie.approvalStatus||"approved"}"`).join(`
`),te=L+q,ne=new Blob([te],{type:"text/csv"}),pe=window.URL.createObjectURL(ne),ve=document.createElement("a");ve.href=pe,ve.download=`user-history-${g.email.replace("@","-at-")}-${new Date().toISOString().split("T")[0]}.csv`,ve.click(),window.URL.revokeObjectURL(pe),X(`History report downloaded for ${g.name}`,"success")},className:"px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition",title:"Download User History",children:"📥 Download"}),g.role!=="admin"&&h.jsx("button",{onClick:async()=>{if(g.id===Je.currentUser.uid){X("Cannot suspend your own admin account.","error");return}const L=g.isSuspended?"Unsuspend":"Suspend";if(window.confirm(`Are you sure you want to ${L} this user?`))try{await Ts(vt(Ce,"users",g.id),{isSuspended:!g.isSuspended}),await fn(g.isSuspended?"unsuspend":"suspend","user",g.id,{userEmail:g.email,userName:g.name}),X(`User ${L.toLowerCase()}ed successfully!`,"success")}catch(q){console.error(`Error ${L.toLowerCase()}ing user:`,q),X(`Failed to ${L.toLowerCase()} user.`,"error")}},className:`px-3 py-1 border rounded hover:opacity-80 transition ${g.isSuspended?"border-green-300 text-green-600 hover:bg-green-50":"border-red-300 text-red-600 hover:bg-red-50"}`,children:g.isSuspended?"Unsuspend":"Suspend"})]})]})},g.email)})}),h.jsxs("div",{className:"mt-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Audit Logs"}),h.jsxs("button",{onClick:()=>J(!H),className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:[H?"Hide":"View"," Audit Logs"]})]}),H&&h.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto",children:kn.length===0?h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No audit logs yet."}):h.jsx("div",{className:"space-y-2",children:kn.slice(0,50).map(g=>{var b,L,q;return h.jsxs("div",{className:"text-xs border-b border-gray-200 dark:border-gray-600 pb-2",children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:g.action.toUpperCase()})," ",h.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:g.resourceType})," ",h.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:["by ",g.userName||g.userEmail]})]}),h.jsx("span",{className:"text-gray-500 dark:text-gray-500 ml-2",children:((q=(L=(b=g.timestamp)==null?void 0:b.toDate)==null?void 0:L.call(b))==null?void 0:q.toLocaleString())||"N/A"})]}),g.details&&Object.keys(g.details).length>0&&h.jsx("div",{className:"text-gray-500 dark:text-gray-400 mt-1 pl-4",children:JSON.stringify(g.details)})]},g.id)})})})]}),h.jsxs("div",{className:"mt-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Audit Logs"}),h.jsxs("button",{onClick:()=>J(!H),className:"px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition",children:[H?"Hide":"View"," Audit Logs"]})]}),H&&h.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto mb-6",children:kn.length===0?h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No audit logs yet."}):h.jsx("div",{className:"space-y-2",children:kn.slice(0,50).map(g=>{var b,L,q;return h.jsxs("div",{className:"text-xs border-b border-gray-200 dark:border-gray-600 pb-2",children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:g.action.toUpperCase()})," ",h.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:g.resourceType})," ",h.jsxs("span",{className:"text-gray-500 dark:text-gray-500",children:["by ",g.userName||g.userEmail]})]}),h.jsx("span",{className:"text-gray-500 dark:text-gray-500 ml-2",children:((q=(L=(b=g.timestamp)==null?void 0:b.toDate)==null?void 0:L.call(b))==null?void 0:q.toLocaleString())||"N/A"})]}),g.details&&Object.keys(g.details).length>0&&h.jsx("div",{className:"text-gray-500 dark:text-gray-400 mt-1 pl-4",children:JSON.stringify(g.details)})]},g.id)})})})]}),h.jsxs("div",{className:"mt-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Announcements"}),h.jsx("button",{onClick:()=>{T(null),nt({title:"",message:"",type:"info"}),k(!0)},className:"px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition",children:"+ New Announcement"})]}),h.jsx("div",{className:"space-y-3",children:_.length===0?h.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No announcements yet."}):_.map(g=>{var b,L,q;return h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-start",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("h4",{className:"font-bold text-gray-900 dark:text-white",children:g.title}),h.jsx("span",{className:`text-xs px-2 py-0.5 rounded ${g.type==="warning"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":g.type==="reminder"?"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"}`,children:g.type})]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:g.message}),h.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-500 mt-1",children:["Created: ",((q=(L=(b=g.createdAt)==null?void 0:b.toDate)==null?void 0:L.call(b))==null?void 0:q.toLocaleDateString())||"N/A"]})]}),h.jsxs("div",{className:"flex gap-2 ml-4",children:[h.jsx("button",{onClick:()=>{T(g),nt({title:g.title,message:g.message,type:g.type}),k(!0)},className:"px-2 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded text-sm",children:"Edit"}),h.jsx("button",{onClick:()=>Ya(g.id),className:"px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-sm",children:"Delete"})]})]},g.id)})})]})]})]})}),I&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full p-6",children:[h.jsxs("div",{className:"flex justify-between items-center mb-6",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:N?"Edit Announcement":"Create Announcement"}),h.jsx("button",{onClick:()=>{k(!1),T(null),nt({title:"",message:"",type:"info"})},className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:h.jsx(Rn,{className:"w-6 h-6"})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Title"}),h.jsx("input",{type:"text",value:fe.title,onChange:g=>nt({...fe,title:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"e.g., Unclaimed items policy"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Message"}),h.jsx("textarea",{value:fe.message,onChange:g=>nt({...fe,message:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none",placeholder:"Enter announcement message..."})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Type"}),h.jsxs("select",{value:fe.type,onChange:g=>nt({...fe,type:g.target.value}),className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[h.jsx("option",{value:"info",children:"Info"}),h.jsx("option",{value:"warning",children:"Warning"}),h.jsx("option",{value:"reminder",children:"Reminder"})]})]}),h.jsxs("div",{className:"flex gap-4 pt-4",children:[h.jsx("button",{onClick:()=>{k(!1),T(null),nt({title:"",message:"",type:"info"})},className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"Cancel"}),h.jsxs("button",{onClick:mr,className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold",children:[N?"Update":"Create"," Announcement"]})]})]})]})}),t&&h.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[h.jsx("div",{className:"flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6",children:["all","lost","found"].map(g=>h.jsxs("button",{onClick:()=>ri(g),className:`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition duration-200 ${qe===g?"bg-blue-600 text-white shadow-md":p?"bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700":"bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"}`,children:[g.charAt(0).toUpperCase()+g.slice(1)," Items"]},g))}),h.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 mb-8",children:[h.jsx("div",{className:"w-full lg:w-1/4",children:h.jsxs("div",{className:`${p?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} rounded-xl p-3 sm:p-4 shadow-lg sticky top-16 sm:top-20`,children:[h.jsx("h3",{className:`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${p?"text-white":"text-gray-900"}`,children:"Filters & Search"}),h.jsxs("div",{className:"relative mb-4",children:[h.jsx(oy,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),h.jsx("input",{type:"text",placeholder:"Search titles or descriptions...",value:ti,onChange:g=>Fc(g.target.value),className:`w-full pl-10 pr-4 py-2 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500`})]}),h.jsxs("div",{className:"mb-4",children:[h.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${p?"text-gray-300":"text-gray-700"}`,children:[h.jsx(No,{size:16})," Category"]}),h.jsx("select",{value:ds,onChange:g=>ao(g.target.value),className:`w-full px-4 py-2 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:Qd.map(g=>h.jsx("option",{value:g,children:g},g))})]}),h.jsxs("div",{className:"mb-4",children:[h.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${p?"text-gray-300":"text-gray-700"}`,children:[h.jsx(bo,{size:16})," Location"]}),h.jsx("select",{value:ni,onChange:g=>rt(g.target.value),className:`w-full px-4 py-2 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:Yd.map(g=>h.jsx("option",{value:g,children:g},g))})]}),h.jsxs("div",{className:"mb-4",children:[h.jsxs("label",{className:`flex items-center gap-2 text-sm font-medium mb-2 ${p?"text-gray-300":"text-gray-700"}`,children:[h.jsx(eS,{size:16})," Sort By"]}),h.jsxs("select",{value:qn,onChange:g=>$c(g.target.value),className:`w-full px-4 py-2 rounded-lg border ${p?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500`,children:[h.jsx("option",{value:"newest",children:"Newest First"}),h.jsx("option",{value:"oldest",children:"Oldest First"}),h.jsx("option",{value:"title",children:"Title (A-Z)"}),h.jsx("option",{value:"category",children:"Category"})]})]}),h.jsx("div",{className:"mb-6",children:h.jsxs("button",{onClick:()=>Ha(!fs),className:`w-full px-4 py-3 rounded-xl transition flex items-center justify-center gap-2 font-semibold shadow-md ${fs?"bg-blue-600 text-white hover:bg-blue-700":p?"bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}`,children:[h.jsx(Rd,{size:18}),fs?"Show All Posts":"Show My Posts Only"]})}),h.jsxs("button",{onClick:()=>Jt(!0),className:"w-full px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-bold shadow-md",children:[h.jsx(Nd,{size:20}),"New Lost/Found Post"]})]})}),h.jsxs("div",{className:"w-full lg:w-3/4",children:[h.jsx("div",{className:"flex justify-between items-center mb-3 sm:mb-4",children:h.jsxs("h2",{className:`text-lg sm:text-xl md:text-2xl font-bold ${p?"text-white":"text-gray-900"} break-words`,children:[fs?"My Posts":qe.charAt(0).toUpperCase()+qe.slice(1)+" Items"," (",Hn.length,")"]})}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:Hn.map(g=>h.jsx(An,{item:g},g.id))}),Hn.length===0&&h.jsxs("div",{className:`text-center py-12 ${p?"bg-gray-800 border-gray-700 text-gray-400":"bg-white border-gray-200 text-gray-500"} border rounded-xl shadow-lg`,children:[h.jsx("p",{className:"text-xl font-semibold mb-2",children:"Nothing found here!"}),h.jsx("p",{children:"Try adjusting your search query or filters."})]})]})]})]}),h.jsx("div",{className:"fixed bottom-4 right-2 sm:right-4 left-2 sm:left-auto z-50 flex flex-col gap-2 max-w-[calc(100vw-1rem)] sm:max-w-none",children:Uc.map(g=>h.jsxs("div",{className:`px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:min-w-[300px] animate-slide-in text-sm sm:text-base ${g.type==="success"?"bg-green-500 text-white":g.type==="error"?"bg-red-500 text-white":"bg-blue-500 text-white"}`,children:[h.jsx(bd,{size:18,className:"sm:w-5 sm:h-5 flex-shrink-0"}),h.jsx("span",{className:"font-medium truncate",children:g.message})]},g.id))}),qa&&ke&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4",children:h.jsxs("div",{className:`${p?"bg-gray-800":"bg-white"} rounded-xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl`,children:[h.jsxs("div",{className:"sticky top-0 bg-inherit border-b border-gray-300 dark:border-gray-700 p-4 sm:p-6 flex justify-between items-center",children:[h.jsx("h2",{className:`text-xl sm:text-2xl font-bold ${p?"text-white":"text-gray-900"}`,children:"Item Details"}),h.jsx("button",{onClick:()=>fr(!1),className:`${p?"text-gray-400 hover:text-white":"text-gray-600 hover:text-gray-900"} p-1`,children:h.jsx(Rn,{size:20,className:"sm:w-6 sm:h-6"})})]}),h.jsxs("div",{className:"p-4 sm:p-6",children:[h.jsxs("div",{className:"mb-4 sm:mb-6",children:[h.jsx("img",{src:ke.image,alt:ke.title,className:"w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl mb-3 sm:mb-4",onError:g=>{g.target.onerror=null,g.target.src=Tr}}),ke.images&&ke.images.length>1&&h.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-2",children:ke.images.slice(1,5).map((g,b)=>h.jsx("img",{src:g,alt:`${ke.title} ${b+2}`,className:"w-full h-16 sm:h-20 object-cover rounded-lg"},b))})]}),h.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4",children:[h.jsx("h3",{className:`text-xl sm:text-2xl md:text-3xl font-extrabold ${p?"text-white":"text-gray-900"} break-words`,children:ke.title}),h.jsx("span",{className:`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${ke.status==="lost"?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:(ke.status||"unknown").toUpperCase()})]}),h.jsx("p",{className:`text-base sm:text-lg ${p?"text-gray-300":"text-gray-700"}`,children:ke.description}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(No,{size:20,className:p?"text-blue-400":"text-blue-600"}),h.jsxs("div",{children:[h.jsx("p",{className:`text-xs ${p?"text-gray-400":"text-gray-500"}`,children:"Category"}),h.jsx("p",{className:`font-semibold ${p?"text-white":"text-gray-900"}`,children:ke.category})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(bo,{size:20,className:p?"text-yellow-400":"text-yellow-600"}),h.jsxs("div",{children:[h.jsx("p",{className:`text-xs ${p?"text-gray-400":"text-gray-500"}`,children:"Location"}),h.jsx("p",{className:`font-semibold ${p?"text-white":"text-gray-900"}`,children:ke.location})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Cd,{size:20,className:p?"text-purple-400":"text-purple-600"}),h.jsxs("div",{children:[h.jsx("p",{className:`text-xs ${p?"text-gray-400":"text-gray-500"}`,children:"Reported Date"}),h.jsx("p",{className:`font-semibold ${p?"text-white":"text-gray-900"}`,children:ke.date?new Date(ke.date).toLocaleDateString():"N/A"})]})]}),ke.ownerName&&h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Rd,{size:20,className:p?"text-green-400":"text-green-600"}),h.jsxs("div",{children:[h.jsx("p",{className:`text-xs ${p?"text-gray-400":"text-gray-500"}`,children:"Posted By"}),h.jsx("p",{className:`font-semibold ${p?"text-white":"text-gray-900"}`,children:ke.ownerName})]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700",children:[ke.ownerEmail===(D==null?void 0:D.email)?h.jsxs(h.Fragment,{children:[h.jsxs("button",{onClick:()=>gs(ke),className:"w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[h.jsx(oS,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Edit Item"]}),h.jsxs("button",{onClick:()=>st(ke.id),className:"w-full sm:flex-1 bg-red-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[h.jsx(ly,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Delete Item"]})]}):h.jsxs("button",{onClick:()=>Ga(ke),className:"w-full sm:flex-1 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[h.jsx(sS,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Contact Owner"]}),!ke.claimed&&h.jsxs("button",{onClick:()=>{Wa(ke.id),fr(!1)},className:"w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base",children:[h.jsx(bd,{size:16,className:"sm:w-[18px] sm:h-[18px]"}),"Mark as Claimed"]})]})]})]})]})}),h.jsx("footer",{className:`py-8 border-t ${p?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} mt-12`,children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[h.jsx("p",{className:`text-sm ${p?"text-gray-400":"text-gray-500"}`,children:"© 2024 FAST Lost & Found System. All rights reserved."}),h.jsx("div",{className:"mt-4 flex justify-center gap-4",children:h.jsx("button",{onClick:()=>w("admin-login"),className:`text-xs ${p?"text-gray-600 hover:text-purple-400":"text-gray-400 hover:text-purple-600"} transition`,children:"Admin Access"})})]})})]})}window.auth=Je;Xd.createRoot(document.getElementById("root")).render(h.jsx(UT.StrictMode,{children:h.jsx(mD,{})}));
