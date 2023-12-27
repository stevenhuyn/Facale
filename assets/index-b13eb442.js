var ss=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var rt=(t,e,i)=>(ss(t,e,"read from private field"),i?i.call(t):e.get(t)),Yt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Jt=(t,e,i,r)=>(ss(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=window,Uo=nr.ShadowRoot&&(nr.ShadyCSS===void 0||nr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vo=Symbol(),as=new WeakMap;let ba=class{constructor(e,i,r){if(this._$cssResult$=!0,r!==Vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Uo&&e===void 0){const r=i!==void 0&&i.length===1;r&&(e=as.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&as.set(i,e))}return e}toString(){return this.cssText}};const wn=t=>new ba(typeof t=="string"?t:t+"",void 0,Vo),mi=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new ba(i,t,Vo)},xn=(t,e)=>{Uo?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{const r=document.createElement("style"),o=nr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)})},ns=Uo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const r of e.cssRules)i+=r.cssText;return wn(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nr;const fr=window,ls=fr.trustedTypes,kn=ls?ls.emptyScript:"",cs=fr.reactiveElementPolyfillSupport,po={toAttribute(t,e){switch(e){case Boolean:t=t?kn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},va=(t,e)=>e!==t&&(e==e||t==t),jr={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:va};let Ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((i,r)=>{const o=this._$Ep(r,i);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,i=jr){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,i);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,i,r){return{get(){return this[i]},set(o){const s=this[e];this[i]=o,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||jr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,r=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const o of r)this.createProperty(o,i[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)i.unshift(ns(o))}else e!==void 0&&i.push(ns(e));return i}static _$Ep(e,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(i=>i(this))}addController(e){var i,r;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var e;const i=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xn(i,this.constructor.elementStyles),i}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostConnected)===null||r===void 0?void 0:r.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostDisconnected)===null||r===void 0?void 0:r.call(i)})}attributeChangedCallback(e,i,r){this._$AK(e,r)}_$EO(e,i,r=jr){var o;const s=this.constructor._$Ep(e,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:po).toAttribute(i,r.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,i){var r;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const n=o.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:po;this._$El=s,this[s]=h.fromAttribute(i,n.type),this._$El=null}}requestUpdate(e,i,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||va)(this[e],i)?(this._$AL.has(e)||this._$AL.set(e,i),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let i=!1;const r=this._$AL;try{i=this.shouldUpdate(r),i?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(r)):this._$Ek()}catch(o){throw i=!1,this._$Ek(),o}i&&this._$AE(r)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)===null||i===void 0||i.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((i,r)=>this._$EO(r,this[r],i)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ue.finalized=!0,Ue.elementProperties=new Map,Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},cs==null||cs({ReactiveElement:Ue}),((Nr=fr.reactiveElementVersions)!==null&&Nr!==void 0?Nr:fr.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr;const mr=window,ri=mr.trustedTypes,ds=ri?ri.createPolicy("lit-html",{createHTML:t=>t}):void 0,fo="$lit$",me=`lit$${(Math.random()+"").slice(9)}$`,ya="?"+me,$n=`<${ya}>`,oi=document,Bi=()=>oi.createComment(""),Ui=t=>t===null||typeof t!="object"&&typeof t!="function",_a=Array.isArray,Cn=t=>_a(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Kr=`[ 	
\f\r]`,xi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hs=/-->/g,us=/>/g,xe=RegExp(`>|${Kr}(?:([^\\s"'>=/]+)(${Kr}*=${Kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,fs=/"/g,wa=/^(?:script|style|textarea|title)$/i,Sn=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Ut=Sn(1),Zt=Symbol.for("lit-noChange"),ot=Symbol.for("lit-nothing"),ms=new WeakMap,qe=oi.createTreeWalker(oi,129,null,!1),En=(t,e)=>{const i=t.length-1,r=[];let o,s=e===2?"<svg>":"",n=xi;for(let l=0;l<i;l++){const d=t[l];let m,u,p=-1,f=0;for(;f<d.length&&(n.lastIndex=f,u=n.exec(d),u!==null);)f=n.lastIndex,n===xi?u[1]==="!--"?n=hs:u[1]!==void 0?n=us:u[2]!==void 0?(wa.test(u[2])&&(o=RegExp("</"+u[2],"g")),n=xe):u[3]!==void 0&&(n=xe):n===xe?u[0]===">"?(n=o??xi,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,m=u[1],n=u[3]===void 0?xe:u[3]==='"'?fs:ps):n===fs||n===ps?n=xe:n===hs||n===us?n=xi:(n=xe,o=void 0);const g=n===xe&&t[l+1].startsWith("/>")?" ":"";s+=n===xi?d+$n:p>=0?(r.push(m),d.slice(0,p)+fo+d.slice(p)+me+g):d+me+(p===-2?(r.push(void 0),l):g)}const h=s+(t[i]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ds!==void 0?ds.createHTML(h):h,r]};let mo=class xa{constructor({strings:e,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=e.length-1,l=this.parts,[d,m]=En(e,i);if(this.el=xa.createElement(d,r),qe.currentNode=this.el.content,i===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(o=qe.nextNode())!==null&&l.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const p of o.getAttributeNames())if(p.endsWith(fo)||p.startsWith(me)){const f=m[n++];if(u.push(p),f!==void 0){const g=o.getAttribute(f.toLowerCase()+fo).split(me),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?zn:b[1]==="?"?On:b[1]==="@"?In:Lr})}else l.push({type:6,index:s})}for(const p of u)o.removeAttribute(p)}if(wa.test(o.tagName)){const u=o.textContent.split(me),p=u.length-1;if(p>0){o.textContent=ri?ri.emptyScript:"";for(let f=0;f<p;f++)o.append(u[f],Bi()),qe.nextNode(),l.push({type:2,index:++s});o.append(u[p],Bi())}}}else if(o.nodeType===8)if(o.data===ya)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(me,u+1))!==-1;)l.push({type:7,index:s}),u+=me.length-1}s++}}static createElement(e,i){const r=oi.createElement("template");return r.innerHTML=e,r}};function si(t,e,i=t,r){var o,s,n,h;if(e===Zt)return e;let l=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const d=Ui(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),d===void 0?l=void 0:(l=new d(t),l._$AT(t,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=l:i._$Cl=l),l!==void 0&&(e=si(t,l._$AS(t,e.values),l,r)),e}let An=class{constructor(e,i){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=e==null?void 0:e.creationScope)!==null&&i!==void 0?i:oi).importNode(r,!0);qe.currentNode=s;let n=qe.nextNode(),h=0,l=0,d=o[0];for(;d!==void 0;){if(h===d.index){let m;d.type===2?m=new Ho(n,n.nextSibling,this,e):d.type===1?m=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(m=new Ln(n,this,e)),this.u.push(m),d=o[++l]}h!==(d==null?void 0:d.index)&&(n=qe.nextNode(),h++)}return s}p(e){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,i),i+=r.strings.length-2):r._$AI(e[i])),i++}},Ho=class ka{constructor(e,i,r,o){var s;this.type=2,this._$AH=ot,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=r,this.options=o,this._$Cm=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=si(this,e,i),Ui(e)?e===ot||e==null||e===""?(this._$AH!==ot&&this._$AR(),this._$AH=ot):e!==this._$AH&&e!==Zt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cn(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==ot&&Ui(this._$AH)?this._$AA.nextSibling.data=e:this.T(oi.createTextNode(e)),this._$AH=e}$(e){var i;const{values:r,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=mo.createElement(o.h,this.options)),o);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===s)this._$AH.p(r);else{const n=new An(s,this),h=n.v(this.options);n.p(r),this.T(h),this._$AH=n}}_$AC(e){let i=ms.get(e.strings);return i===void 0&&ms.set(e.strings,i=new mo(e)),i}k(e){_a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of e)o===i.length?i.push(r=new ka(this.S(Bi()),this.S(Bi()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cm=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},Lr=class{constructor(e,i,r,o,s){this.type=1,this._$AH=ot,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ot}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)e=si(this,e,i,0),n=!Ui(e)||e!==this._$AH&&e!==Zt,n&&(this._$AH=e);else{const h=e;let l,d;for(e=s[0],l=0;l<s.length-1;l++)d=si(this,h[r+l],i,l),d===Zt&&(d=this._$AH[l]),n||(n=!Ui(d)||d!==this._$AH[l]),d===ot?e=ot:e!==ot&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}n&&!o&&this.j(e)}j(e){e===ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zn=class extends Lr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ot?void 0:e}};const Tn=ri?ri.emptyScript:"";let On=class extends Lr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ot?this.element.setAttribute(this.name,Tn):this.element.removeAttribute(this.name)}};class In extends Lr{constructor(e,i,r,o,s){super(e,i,r,o,s),this.type=5}_$AI(e,i=this){var r;if((e=(r=si(this,e,i,0))!==null&&r!==void 0?r:ot)===Zt)return;const o=this._$AH,s=e===ot&&o!==ot||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==ot&&(o===ot||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}let Ln=class{constructor(e,i,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){si(this,e)}};const gs=mr.litHtmlPolyfillSupport;gs==null||gs(mo,Ho),((qr=mr.litHtmlVersions)!==null&&qr!==void 0?qr:mr.litHtmlVersions=[]).push("2.7.0");const Dn=(t,e,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:e;let n=s._$litPart$;if(n===void 0){const h=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Ho(e.insertBefore(Bi(),h),h,void 0,i??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wr,Gr;let ee=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;const r=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=r.firstChild),r}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dn(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Zt}};ee.finalized=!0,ee._$litElement$=!0,(Wr=globalThis.litElementHydrateSupport)===null||Wr===void 0||Wr.call(globalThis,{LitElement:ee});const bs=globalThis.litElementPolyfillSupport;bs==null||bs({LitElement:ee});((Gr=globalThis.litElementVersions)!==null&&Gr!==void 0?Gr:globalThis.litElementVersions=[]).push("3.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=t=>e=>typeof e=="function"?((i,r)=>(customElements.define(i,r),r))(t,e):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(i,n)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function bi(t){return(e,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(t,e,i):Pn(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xr;((Xr=window.HTMLSlotElement)===null||Xr===void 0?void 0:Xr.prototype.assignedElements)!=null;var Rn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,No=(t,e,i,r)=>{for(var o=r>1?void 0:r?Mn(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&Rn(e,i,o),o};let Vi=class extends ee{constructor(){super(...arguments),this.name=null,this.expression=null}render(){return Ut`
      <span class="name">${this.name}</span>
      ${this.expression&&Ut`<span class="expression">${this.expression}</span>`}
      <div class="bubble">
        <slot></slot>
      </div>
    `}};Vi.styles=mi`
    :host {
      max-width: 90%;
      text-align: left;
      position: relative;
    }

    :host([bot]) {
      align-self: flex-start;
    }

    :host([user]) {
      align-self: flex-end;
    }

    .bubble {
      min-width: 1em;
      padding: 8px 12px;
      margin-bottom: 0.5em;
      border-radius: 25px;
      text-align: left;
    }

    :host([bot]) .bubble {
      background: #25282a;
      color: #e8e6e3;
    }

    :host([user]) .bubble {
      background: #006acc;
      color: #e8e6e3;
    }

    .name {
      display: block;
      font-size: 0.75em;
      margin-bottom: 0.25em;
      margin-left: 1.3em;
    }

    :host([bot]) .name {
      text-align: left;
    }

    :host([user]) .name[user] {
      text-align: right;
    }

    .expression {
      right: -10px;
      bottom: -9px;
      position: absolute;
      font-size: var(--sl-font-size-x-large);
    }
  `;No([bi()],Vi.prototype,"name",2);No([bi()],Vi.prototype,"expression",2);Vi=No([gi("message-bubble")],Vi);var Fn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Un=(t,e,i,r)=>{for(var o=r>1?void 0:r?Bn(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&Fn(e,i,o),o};let go=class extends ee{render(){return Ut`<slot> </slot>`}};go.styles=mi`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;go=Un([gi("message-list")],go);var jo=Object.defineProperty,Vn=Object.defineProperties,Hn=Object.getOwnPropertyDescriptor,Nn=Object.getOwnPropertyDescriptors,gr=Object.getOwnPropertySymbols,$a=Object.prototype.hasOwnProperty,Ca=Object.prototype.propertyIsEnumerable,vs=(t,e,i)=>e in t?jo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,G=(t,e)=>{for(var i in e||(e={}))$a.call(e,i)&&vs(t,i,e[i]);if(gr)for(var i of gr(e))Ca.call(e,i)&&vs(t,i,e[i]);return t},pt=(t,e)=>Vn(t,Nn(e)),qo=(t,e)=>{var i={};for(var r in t)$a.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&gr)for(var r of gr(t))e.indexOf(r)<0&&Ca.call(t,r)&&(i[r]=t[r]);return i},jn=(t,e)=>{for(var i in e)jo(t,i,{get:e[i],enumerable:!0})},a=(t,e,i,r)=>{for(var o=r>1?void 0:r?Hn(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&jo(e,i,o),o},ki=new WeakMap,$i=new WeakMap,Yr=new WeakSet,Qi=new WeakMap,ue=class{constructor(t,e){(this.host=t).addController(this),this.options=G({form:i=>{if(i.hasAttribute("form")&&i.getAttribute("form")!==""){const r=i.getRootNode(),o=i.getAttribute("form");if(o)return r.getElementById(o)}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var r;return(r=i.disabled)!=null?r:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,setValue:(i,r)=>i.value=r,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Qi.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Qi.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ki.has(this.form)?ki.get(this.form).add(this.host):ki.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),$i.has(this.form)||($i.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=ki.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),$i.has(this.form)&&(this.form.reportValidity=$i.get(this.form),$i.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!e&&!o&&typeof i=="string"&&i.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(s=>{t.formData.append(i,s.toString())}):t.formData.append(i,r.toString()))}handleFormSubmit(t){var e;const i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((e=ki.get(this.form))==null||e.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Qi.set(this.host,[])}handleInteraction(t){const e=Qi.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Yr.add(t):Yr.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&i.setAttribute(r,e.getAttribute(r))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Yr.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},Dr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),qn=Object.freeze(pt(G({},Dr),{valid:!1,valueMissing:!0})),Kn=Object.freeze(pt(G({},Dr),{valid:!1,customError:!0})),lr=window,Ko=lr.ShadowRoot&&(lr.ShadyCSS===void 0||lr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wo=Symbol(),ys=new WeakMap,Sa=class{constructor(e,i,r){if(this._$cssResult$=!0,r!==Wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(Ko&&e===void 0){const r=i!==void 0&&i.length===1;r&&(e=ys.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ys.set(i,e))}return e}toString(){return this.cssText}},Wn=t=>new Sa(typeof t=="string"?t:t+"",void 0,Wo),T=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new Sa(i,t,Wo)},Gn=(t,e)=>{Ko?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{const r=document.createElement("style"),o=lr.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)})},_s=Ko?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const r of e.cssRules)i+=r.cssText;return Wn(i)})(t):t,Jr,br=window,ws=br.trustedTypes,Xn=ws?ws.emptyScript:"",xs=br.reactiveElementPolyfillSupport,Hi={toAttribute(t,e){switch(e){case Boolean:t=t?Xn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ea=(t,e)=>e!==t&&(e==e||t==t),Qr={attribute:!0,type:String,converter:Hi,reflect:!1,hasChanged:Ea},Ve=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=Qr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(_s(r))}else t!==void 0&&e.push(_s(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Qr){var r;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Hi).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Hi;this._$El=o,this[o]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ea)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ve.finalized=!0,Ve.elementProperties=new Map,Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},xs==null||xs({ReactiveElement:Ve}),((Jr=br.reactiveElementVersions)!==null&&Jr!==void 0?Jr:br.reactiveElementVersions=[]).push("1.6.1");var Zr,vr=window,ai=vr.trustedTypes,ks=ai?ai.createPolicy("lit-html",{createHTML:t=>t}):void 0,ge=`lit$${(Math.random()+"").slice(9)}$`,Aa="?"+ge,Yn=`<${Aa}>`,ni=document,Ni=(t="")=>ni.createComment(t),ji=t=>t===null||typeof t!="object"&&typeof t!="function",za=Array.isArray,Jn=t=>za(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ci=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$s=/-->/g,Cs=/>/g,ke=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ss=/'/g,Es=/"/g,Ta=/^(?:script|style|textarea|title)$/i,Qn=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),w=Qn(1),Ct=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),As=new WeakMap,Ke=ni.createTreeWalker(ni,129,null,!1),Zn=(t,e)=>{const i=t.length-1,r=[];let o,s=e===2?"<svg>":"",n=Ci;for(let l=0;l<i;l++){const d=t[l];let m,u,p=-1,f=0;for(;f<d.length&&(n.lastIndex=f,u=n.exec(d),u!==null);)f=n.lastIndex,n===Ci?u[1]==="!--"?n=$s:u[1]!==void 0?n=Cs:u[2]!==void 0?(Ta.test(u[2])&&(o=RegExp("</"+u[2],"g")),n=ke):u[3]!==void 0&&(n=ke):n===ke?u[0]===">"?(n=o??Ci,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,m=u[1],n=u[3]===void 0?ke:u[3]==='"'?Es:Ss):n===Es||n===Ss?n=ke:n===$s||n===Cs?n=Ci:(n=ke,o=void 0);const g=n===ke&&t[l+1].startsWith("/>")?" ":"";s+=n===Ci?d+Yn:p>=0?(r.push(m),d.slice(0,p)+"$lit$"+d.slice(p)+ge+g):d+ge+(p===-2?(r.push(void 0),l):g)}const h=s+(t[i]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ks!==void 0?ks.createHTML(h):h,r]},yr=class{constructor({strings:e,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const h=e.length-1,l=this.parts,[d,m]=Zn(e,i);if(this.el=yr.createElement(d,r),Ke.currentNode=this.el.content,i===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(o=Ke.nextNode())!==null&&l.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(ge)){const f=m[n++];if(u.push(p),f!==void 0){const g=o.getAttribute(f.toLowerCase()+"$lit$").split(ge),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?el:b[1]==="?"?rl:b[1]==="@"?ol:Rr})}else l.push({type:6,index:s})}for(const p of u)o.removeAttribute(p)}if(Ta.test(o.tagName)){const u=o.textContent.split(ge),p=u.length-1;if(p>0){o.textContent=ai?ai.emptyScript:"";for(let f=0;f<p;f++)o.append(u[f],Ni()),Ke.nextNode(),l.push({type:2,index:++s});o.append(u[p],Ni())}}}else if(o.nodeType===8)if(o.data===Aa)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(ge,u+1))!==-1;)l.push({type:7,index:s}),u+=ge.length-1}s++}}static createElement(e,i){const r=ni.createElement("template");return r.innerHTML=e,r}};function li(t,e,i=t,r){var o,s,n,h;if(e===Ct)return e;let l=r!==void 0?(o=i._$Co)===null||o===void 0?void 0:o[r]:i._$Cl;const d=ji(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),d===void 0?l=void 0:(l=new d(t),l._$AT(t,i,r)),r!==void 0?((n=(h=i)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=l:i._$Cl=l),l!==void 0&&(e=li(t,l._$AS(t,e.values),l,r)),e}var tl=class{constructor(e,i){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var i;const{el:{content:r},parts:o}=this._$AD,s=((i=e==null?void 0:e.creationScope)!==null&&i!==void 0?i:ni).importNode(r,!0);Ke.currentNode=s;let n=Ke.nextNode(),h=0,l=0,d=o[0];for(;d!==void 0;){if(h===d.index){let m;d.type===2?m=new Pr(n,n.nextSibling,this,e):d.type===1?m=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(m=new sl(n,this,e)),this.u.push(m),d=o[++l]}h!==(d==null?void 0:d.index)&&(n=Ke.nextNode(),h++)}return s}p(e){let i=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,i),i+=r.strings.length-2):r._$AI(e[i])),i++}},Pr=class{constructor(t,e,i,r){var o;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=li(this,t,e),ji(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Ct&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jn(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==Z&&ji(this._$AH)?this._$AA.nextSibling.data=t:this.T(ni.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=yr.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const s=new tl(o,this),n=s.v(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let e=As.get(t.strings);return e===void 0&&As.set(t.strings,e=new yr(t)),e}k(t){za(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Pr(this.O(Ni()),this.O(Ni()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Rr=class{constructor(t,e,i,r,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(o===void 0)t=li(this,t,e,0),s=!ji(t)||t!==this._$AH&&t!==Ct,s&&(this._$AH=t);else{const n=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=li(this,n[i+h],e,h),l===Ct&&(l=this._$AH[h]),s||(s=!ji(l)||l!==this._$AH[h]),l===Z?t=Z:t!==Z&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}s&&!r&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},el=class extends Rr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},il=ai?ai.emptyScript:"",rl=class extends Rr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Z?this.element.setAttribute(this.name,il):this.element.removeAttribute(this.name)}},ol=class extends Rr{constructor(e,i,r,o,s){super(e,i,r,o,s),this.type=5}_$AI(e,i=this){var r;if((e=(r=li(this,e,i,0))!==null&&r!==void 0?r:Z)===Ct)return;const o=this._$AH,s=e===Z&&o!==Z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Z&&(o===Z||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,r;typeof this._$AH=="function"?this._$AH.call((r=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},sl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){li(this,t)}},zs=vr.litHtmlPolyfillSupport;zs==null||zs(yr,Pr),((Zr=vr.litHtmlVersions)!==null&&Zr!==void 0?Zr:vr.litHtmlVersions=[]).push("2.6.1");var al=(t,e,i)=>{var r,o;const s=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:e;let n=s._$litPart$;if(n===void 0){const h=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=n=new Pr(e.insertBefore(Ni(),h),h,void 0,i??{})}return n._$AI(t),n},to,eo,Ti=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=al(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Ct}};Ti.finalized=!0,Ti._$litElement$=!0,(to=globalThis.litElementHydrateSupport)===null||to===void 0||to.call(globalThis,{LitElement:Ti});var Ts=globalThis.litElementPolyfillSupport;Ts==null||Ts({LitElement:Ti});((eo=globalThis.litElementVersions)!==null&&eo!==void 0?eo:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var I=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Oa=T`
  ${I}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ia=Symbol.for(""),nl=t=>{if((t==null?void 0:t.r)===Ia)return t==null?void 0:t._$litStatic$},_r=(t,...e)=>({_$litStatic$:e.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[o+1],t[0]),r:Ia}),Os=new Map,ll=t=>(e,...i)=>{const r=i.length;let o,s;const n=[],h=[];let l,d=0,m=!1;for(;d<r;){for(l=e[d];d<r&&(s=i[d],(o=nl(s))!==void 0);)l+=o+e[++d],m=!0;h.push(s),n.push(l),d++}if(d===r&&n.push(e[r]),m){const u=n.join("$$lit$$");(e=Os.get(u))===void 0&&(n.raw=n,Os.set(u,e=n)),i=h}return t(e,...i)},Oi=ll(w);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var S=t=>t??Z;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Mt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function cl(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(i+=r.textContent)}),i}var bo=new Set,dl=new MutationObserver(Pa),Ne=new Map,La=document.documentElement.dir||"ltr",Da=document.documentElement.lang||navigator.language,Ee;dl.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function hl(...t){t.map(e=>{const i=e.$code.toLowerCase();Ne.has(i)?Ne.set(i,Object.assign(Object.assign({},Ne.get(i)),e)):Ne.set(i,e),Ee||(Ee=e)}),Pa()}function Pa(){La=document.documentElement.dir||"ltr",Da=document.documentElement.lang||navigator.language,[...bo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ra=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){bo.add(this.host)}hostDisconnected(){bo.delete(this.host)}dir(){return`${this.host.dir||La}`.toLowerCase()}lang(){return`${this.host.lang||Da}`.toLowerCase()}getTranslationData(t){var e,i;const r=new Intl.Locale(t),o=r==null?void 0:r.language.toLowerCase(),s=(i=(e=r==null?void 0:r.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&i!==void 0?i:"",n=Ne.get(`${o}-${s}`),h=Ne.get(o);return{locale:r,language:o,region:s,primary:n,secondary:h}}exists(t,e){var i;const{primary:r,secondary:o}=this.getTranslationData((i=e.lang)!==null&&i!==void 0?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||o&&o[t]||e.includeFallback&&Ee&&Ee[t])}term(t,...e){const{primary:i,secondary:r}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(r&&r[t])o=r[t];else if(Ee&&Ee[t])o=Ee[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},K=class extends Ra{},ul={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};hl(ul);function x(t,e){const i=G({waitUntilFirstUpdate:!1},e);return(r,o)=>{const{update:s}=r,n=Array.isArray(t)?t:[t];r.update=function(h){n.forEach(l=>{const d=l;if(h.has(d)){const m=h.get(d),u=this[d];m!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,u)}}),s.call(this,h)}}}var de={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mr=t=>(...e)=>({_$litDirective$:t,values:e}),Fr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var P=Mr(class extends Fr{constructor(t){var e;if(super(t),t.type!==de.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((i=this.st)===null||i===void 0)&&i.has(s))&&this.nt.add(s);return this.render(e)}const o=t.element.classList;this.nt.forEach(s=>{s in e||(o.remove(s),this.nt.delete(s))});for(const s in e){const n=!!e[s];n===this.nt.has(s)||!((r=this.st)===null||r===void 0)&&r.has(s)||(n?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return Ct}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var z=t=>e=>typeof e=="function"?((i,r)=>(customElements.define(i,r),r))(t,e):((i,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(i,n)}}})(t,e),pl=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?pt(G({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function c(t){return(e,i)=>i!==void 0?((r,o,s)=>{o.constructor.createProperty(s,r)})(t,e,i):pl(t,e)}function R(t){return c(pt(G({},t),{state:!0}))}var Go=({finisher:t,descriptor:e})=>(i,r)=>{var o;if(r===void 0){const s=(o=i.originalKey)!==null&&o!==void 0?o:i.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:pt(G({},i),{key:s});return t!=null&&(n.finisher=function(h){t(h,s)}),n}{const s=i.constructor;e!==void 0&&Object.defineProperty(i,r,e(r)),t==null||t(s,r)}};function Ma(t){return Go({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function $(t,e){return Go({descriptor:i=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const o=typeof i=="symbol"?Symbol():"__"+i;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[o]}}return r}})}function fl(t){return Go({descriptor:e=>({async get(){var i;return await this.updateComplete,(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t)},enumerable:!0,configurable:!0})})}var io;((io=window.HTMLSlotElement)===null||io===void 0?void 0:io.prototype.assignedElements)!=null;var E=class extends Ti{emit(t,e){const i=new CustomEvent(t,G({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}};a([c()],E.prototype,"dir",2);a([c()],E.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var j=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),i=t.getAttribute("form");return e.getElementById(i)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Mt(this,"[default]","prefix","suffix"),this.localize=new K(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Dr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?_r`a`:_r`button`;return Oi`
      <${e}
        part="base"
        class=${P({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${S(t?void 0:this.disabled)}
        type=${S(t?void 0:this.type)}
        title=${this.title}
        name=${S(t?void 0:this.name)}
        value=${S(t?void 0:this.value)}
        href=${S(t?this.href:void 0)}
        target=${S(t?this.target:void 0)}
        download=${S(t?this.download:void 0)}
        rel=${S(t?this.rel:void 0)}
        role=${S(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Oi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Oi`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};j.styles=Oa;a([$(".button")],j.prototype,"button",2);a([R()],j.prototype,"hasFocus",2);a([R()],j.prototype,"invalid",2);a([c()],j.prototype,"title",2);a([c({reflect:!0})],j.prototype,"variant",2);a([c({reflect:!0})],j.prototype,"size",2);a([c({type:Boolean,reflect:!0})],j.prototype,"caret",2);a([c({type:Boolean,reflect:!0})],j.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],j.prototype,"loading",2);a([c({type:Boolean,reflect:!0})],j.prototype,"outline",2);a([c({type:Boolean,reflect:!0})],j.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],j.prototype,"circle",2);a([c()],j.prototype,"type",2);a([c()],j.prototype,"name",2);a([c()],j.prototype,"value",2);a([c()],j.prototype,"href",2);a([c()],j.prototype,"target",2);a([c()],j.prototype,"rel",2);a([c()],j.prototype,"download",2);a([c()],j.prototype,"form",2);a([c({attribute:"formaction"})],j.prototype,"formAction",2);a([c({attribute:"formenctype"})],j.prototype,"formEnctype",2);a([c({attribute:"formmethod"})],j.prototype,"formMethod",2);a([c({attribute:"formnovalidate",type:Boolean})],j.prototype,"formNoValidate",2);a([c({attribute:"formtarget"})],j.prototype,"formTarget",2);a([x("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);j=a([z("sl-button")],j);var ml=T`
  ${I}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,vo=class extends E{constructor(){super(...arguments),this.localize=new K(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};vo.styles=ml;vo=a([z("sl-spinner")],vo);var yo="";function _o(t){yo=t}function gl(t=""){if(!yo){const e=[...document.getElementsByTagName("script")],i=e.find(r=>r.hasAttribute("data-shoelace"));if(i)_o(i.getAttribute("data-shoelace"));else{const r=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let o="";r&&(o=r.getAttribute("src")),_o(o.split("/").slice(0,-1).join("/"))}}return yo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var bl={name:"default",resolver:t=>gl(`assets/icons/${t}.svg`)},vl=bl,Is={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},yl={name:"system",resolver:t=>t in Is?`data:image/svg+xml,${encodeURIComponent(Is[t])}`:""},_l=yl,wl=[vl,_l],wo=[];function xl(t){wo.push(t)}function kl(t){wo=wo.filter(e=>e!==t)}function Ls(t){return wl.find(e=>e.name===t)}var $l=T`
  ${I}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Si=Symbol(),Zi=Symbol(),ro,oo=new Map,qt=class extends E{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(t){var e;let i;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Si:Zi}catch{return Zi}try{const r=document.createElement("div");r.innerHTML=await i.text();const o=r.firstElementChild;if(((e=o==null?void 0:o.tagName)==null?void 0:e.toLowerCase())!=="svg")return Si;ro||(ro=new DOMParser);const n=ro.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):Si}catch{return Si}}connectedCallback(){super.connectedCallback(),xl(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),kl(this)}getUrl(){const t=Ls(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=Ls(this.library),i=this.getUrl();if(!i){this.svg=null;return}let r=oo.get(i);r||(r=qt.resolveIcon(i),oo.set(i,r));const o=await r;if(o===Zi&&oo.delete(i),i===this.getUrl())switch(o){case Zi:case Si:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(t=e==null?void 0:e.mutator)==null||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};qt.styles=$l;a([R()],qt.prototype,"svg",2);a([c({reflect:!0})],qt.prototype,"name",2);a([c()],qt.prototype,"src",2);a([c()],qt.prototype,"label",2);a([c({reflect:!0})],qt.prototype,"library",2);a([x("label")],qt.prototype,"handleLabelChange",1);a([x(["name","src","library"])],qt.prototype,"setIcon",1);qt=a([z("sl-icon")],qt);var Cl=T`
  ${I}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,$t=Mr(class extends Fr{constructor(t){var e;if(super(t),t.type!==de.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const r=t[i];return r==null?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:i}=t.element;if(this.vt===void 0){this.vt=new Set;for(const r in e)this.vt.add(r);return this.render(e)}this.vt.forEach(r=>{e[r]==null&&(this.vt.delete(r),r.includes("-")?i.removeProperty(r):i[r]="")});for(const r in e){const o=e[r];o!=null&&(this.vt.add(r),r.includes("-")?i.setProperty(r,o):i[r]=o)}return Ct}});/*! Bundled license information:

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ci=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return w`
      <div
        part="base"
        class=${P({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${S(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${$t({width:`${this.value}%`})}>
          ${this.indeterminate?"":w` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};ci.styles=Cl;a([c({type:Number,reflect:!0})],ci.prototype,"value",2);a([c({type:Boolean,reflect:!0})],ci.prototype,"indeterminate",2);a([c()],ci.prototype,"label",2);ci=a([z("sl-progress-bar")],ci);var Ji=T`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Sl=T`
  ${I}
  ${Ji}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,El=t=>t.strings===void 0,Al={},zl=(t,e=Al)=>t._$AH=e,Te=Mr(class extends Fr{constructor(t){if(super(t),t.type!==de.PROPERTY&&t.type!==de.ATTRIBUTE&&t.type!==de.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!El(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ct||e===Z)return e;const i=t.element,r=t.name;if(t.type===de.PROPERTY){if(e===i[r])return Ct}else if(t.type===de.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return Ct}else if(t.type===de.ATTRIBUTE&&i.getAttribute(r)===e+"")return Ct;return zl(t),e}});/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Me=(t="value")=>(e,i)=>{const r=e.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,n,h){var l;const d=r.getPropertyOptions(t),m=typeof d.attribute=="string"?d.attribute:t;if(s===m){const u=d.converter||Hi,f=(typeof u=="function"?u:(l=u==null?void 0:u.fromAttribute)!=null?l:Hi.fromAttribute)(h,d.type);this[t]!==f&&(this[i]=f)}o.call(this,s,n,h)}},U=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new K(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){const t=document.createElement("input");return t.type="date",t.value=this.value,t.valueAsDate}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){const t=document.createElement("input");return t.type="number",t.value=this.value,t.valueAsNumber}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r){this.input.setRangeText(t,e,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return w`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${P({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${S(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${S(this.placeholder)}
              minlength=${S(this.minlength)}
              maxlength=${S(this.maxlength)}
              min=${S(this.min)}
              max=${S(this.max)}
              step=${S(this.step)}
              .value=${Te(this.value)}
              autocapitalize=${S(this.autocapitalize)}
              autocomplete=${S(this.autocomplete)}
              autocorrect=${S(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${S(this.pattern)}
              enterkeyhint=${S(this.enterkeyhint)}
              inputmode=${S(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?w`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?w`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?w`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:w`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};U.styles=Sl;a([$(".input__control")],U.prototype,"input",2);a([R()],U.prototype,"hasFocus",2);a([c()],U.prototype,"title",2);a([c({reflect:!0})],U.prototype,"type",2);a([c()],U.prototype,"name",2);a([c()],U.prototype,"value",2);a([Me()],U.prototype,"defaultValue",2);a([c({reflect:!0})],U.prototype,"size",2);a([c({type:Boolean,reflect:!0})],U.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],U.prototype,"pill",2);a([c()],U.prototype,"label",2);a([c({attribute:"help-text"})],U.prototype,"helpText",2);a([c({type:Boolean})],U.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([c()],U.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],U.prototype,"readonly",2);a([c({attribute:"password-toggle",type:Boolean})],U.prototype,"passwordToggle",2);a([c({attribute:"password-visible",type:Boolean})],U.prototype,"passwordVisible",2);a([c({attribute:"no-spin-buttons",type:Boolean})],U.prototype,"noSpinButtons",2);a([c({reflect:!0})],U.prototype,"form",2);a([c({type:Boolean,reflect:!0})],U.prototype,"required",2);a([c()],U.prototype,"pattern",2);a([c({type:Number})],U.prototype,"minlength",2);a([c({type:Number})],U.prototype,"maxlength",2);a([c()],U.prototype,"min",2);a([c()],U.prototype,"max",2);a([c()],U.prototype,"step",2);a([c()],U.prototype,"autocapitalize",2);a([c()],U.prototype,"autocorrect",2);a([c()],U.prototype,"autocomplete",2);a([c({type:Boolean})],U.prototype,"autofocus",2);a([c()],U.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],U.prototype,"spellcheck",2);a([c()],U.prototype,"inputmode",2);a([x("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);a([x("step",{waitUntilFirstUpdate:!0})],U.prototype,"handleStepChange",1);a([x("value",{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1);U=a([z("sl-input")],U);var Tl=T`
  ${I}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,Fa=new Map,Ol=new WeakMap;function Il(t){return t??{keyframes:[],options:{duration:0}}}function Ds(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function W(t,e){Fa.set(t,Il(e))}function tt(t,e,i){const r=Ol.get(t);if(r!=null&&r[e])return Ds(r[e],i.dir);const o=Fa.get(e);return o?Ds(o,i.dir):{keyframes:[],options:{duration:0}}}function bt(t,e){return new Promise(i=>{function r(o){o.target===t&&(t.removeEventListener(e,r),i())}t.addEventListener(e,r)})}function et(t,e,i){return new Promise(r=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,pt(G({},i),{duration:Xo()?0:i.duration}));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function Ps(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Xo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function st(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{const r=requestAnimationFrame(i);e.addEventListener("cancel",()=>r,{once:!0}),e.addEventListener("finish",()=>r,{once:!0}),e.cancel()})))}function wr(t,e){return t.map(i=>pt(G({},i),{height:i.height==="auto"?`${e}px`:i.height}))}var ht=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const t=Ps(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}}handleMouseOut(){if(this.hasTrigger("hover")){const t=Ps(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await st(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=tt(this,"tooltip.show",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await st(this.body);const{keyframes:t,options:e}=tt(this,"tooltip.hide",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${P({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};ht.styles=Tl;a([$("slot:not([name])")],ht.prototype,"defaultSlot",2);a([$(".tooltip__body")],ht.prototype,"body",2);a([$("sl-popup")],ht.prototype,"popup",2);a([c()],ht.prototype,"content",2);a([c()],ht.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);a([c({type:Number})],ht.prototype,"distance",2);a([c({type:Boolean,reflect:!0})],ht.prototype,"open",2);a([c({type:Number})],ht.prototype,"skidding",2);a([c()],ht.prototype,"trigger",2);a([c({type:Boolean})],ht.prototype,"hoist",2);a([x("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);a([x(["content","distance","hoist","placement","skidding"])],ht.prototype,"handleOptionsChange",1);a([x("disabled")],ht.prototype,"handleDisabledChange",1);ht=a([z("sl-tooltip")],ht);W("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});W("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Ll=T`
  ${I}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Dl=T`
  ${I}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;function Rs(t,e,i){return t?e():i==null?void 0:i()}var q=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await st(this.childrenContainer);const{keyframes:t,options:e}=tt(this,"tree-item.collapse",{dir:this.localize.dir()});await et(this.childrenContainer,wr(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&q.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await st(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=tt(this,"tree-item.expand",{dir:this.localize.dir()});await et(this.childrenContainer,wr(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>q.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return w`
      <div
        part="base"
        class="${P({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${P({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Rs(this.loading,()=>w` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Rs(this.selectable,()=>w`
                <sl-checkbox
                  tabindex="-1"
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${Te(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                ></sl-checkbox>
              `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `}};q.styles=Dl;a([R()],q.prototype,"indeterminate",2);a([R()],q.prototype,"isLeaf",2);a([R()],q.prototype,"loading",2);a([R()],q.prototype,"selectable",2);a([c({type:Boolean,reflect:!0})],q.prototype,"expanded",2);a([c({type:Boolean,reflect:!0})],q.prototype,"selected",2);a([c({type:Boolean,reflect:!0})],q.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],q.prototype,"lazy",2);a([$("slot:not([name])")],q.prototype,"defaultSlot",2);a([$("slot[name=children]")],q.prototype,"childrenSlot",2);a([$(".tree-item__item")],q.prototype,"itemElement",2);a([$(".tree-item__children")],q.prototype,"childrenContainer",2);a([$(".tree-item__expand-button slot")],q.prototype,"expandButtonSlot",2);a([x("loading",{waitUntilFirstUpdate:!0})],q.prototype,"handleLoadingChange",1);a([x("disabled")],q.prototype,"handleDisabledChange",1);a([x("selected")],q.prototype,"handleSelectedChange",1);a([x("expanded",{waitUntilFirstUpdate:!0})],q.prototype,"handleExpandedChange",1);a([x("expanded",{waitUntilFirstUpdate:!0})],q.prototype,"handleExpandAnimation",1);a([x("lazy",{waitUntilFirstUpdate:!0})],q.prototype,"handleLazyChange",1);q=a([z("sl-tree-item")],q);W("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});W("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function at(t,e,i){const r=o=>Object.is(o,-0)?0:o;return t<e?r(e):t>i?r(i):r(t)}function Ms(t,e=!1){function i(s){const n=s.getChildrenItems({includeDisabled:!1});if(n.length){const h=n.every(d=>d.selected),l=n.every(d=>!d.selected&&!d.indeterminate);s.selected=h,s.indeterminate=!h&&!l}}function r(s){const n=s.parentElement;q.isTreeItem(n)&&(i(n),r(n))}function o(s){for(const n of s.getChildrenItems())n.selected=e?s.selected||n.selected:!n.disabled&&s.selected,o(n);e&&i(s)}o(t),r(t)}var _e=class extends E{constructor(){super(...arguments),this.selection="single",this.localize=new K(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`);i===null?t.append(this.getExpandButtonIcon(e)):i.hasAttribute("data-default")&&i.replaceWith(this.getExpandButtonIcon(e))})}}async connectedCallback(){super.connectedCallback(),this.handleTreeChanged=this.handleTreeChanged.bind(this),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("sl-lazy-change",this.handleSlotChange)}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const r=i.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${t}-icon`,r}return null}handleTreeChanged(t){for(const e of t){const i=[...e.addedNodes].filter(q.isTreeItem),r=[...e.removedNodes].filter(q.isTreeItem);i.forEach(this.initTreeItem),r.includes(this.lastFocusedItem)&&this.focusItem(this.getFocusableItems()[0])}}syncTreeItems(t){const e=this.getAllTreeItems();if(this.selection==="multiple")Ms(t);else for(const i of e)i!==t&&(i.selected=!1)}selectItem(t){const e=[...this.selectedItems];this.selection==="multiple"?(t.selected=!t.selected,t.lazy&&(t.expanded=!0),this.syncTreeItems(t)):this.selection==="single"||t.isLeaf?(t.expanded=!t.expanded,t.selected=!0,this.syncTreeItems(t)):this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(r=>!e.includes(r)))&&Promise.all(i.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t==null||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(l=>l.matches(":focus")),s=e[o],n=l=>{const d=e[at(l,0,e.length-1)];this.focusItem(d)},h=l=>{s.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(o+1):h(!0):i&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(o-1):h(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),r=t.composedPath().some(o=>{var s;return(s=o==null?void 0:o.classList)==null?void 0:s.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(this.selection==="multiple"&&r?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleFocusOut(t){const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)}handleFocusIn(t){const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),q.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>Ms(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var r;if(i.disabled)return!1;const o=(r=i.parentElement)==null?void 0:r.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return w`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `}};_e.styles=Ll;a([$("slot:not([name])")],_e.prototype,"defaultSlot",2);a([$("slot[name=expand-icon]")],_e.prototype,"expandedIconSlot",2);a([$("slot[name=collapse-icon]")],_e.prototype,"collapsedIconSlot",2);a([c()],_e.prototype,"selection",2);a([x("selection")],_e.prototype,"handleSelectionChange",1);_e=a([z("sl-tree")],_e);var Pl=T`
  ${I}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Rl(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var xo=new Set;function Ml(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Ii(t){if(xo.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=Ml();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Li(t){xo.delete(t),xo.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ko(t,e,i="vertical",r="smooth"){const o=Rl(t,e),s=o.top+e.scrollTop,n=o.left+e.scrollLeft,h=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,m=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<h?e.scrollTo({left:n,behavior:r}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:r})),(i==="vertical"||i==="both")&&(s<d?e.scrollTo({top:s,behavior:r}):s+t.clientHeight>m&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:r}))}var Et=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.allSettled([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(i=>i.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,r)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),r.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>t.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(o);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&t.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ko(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=G({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.map(r=>r.active=r===this.activeTab),this.panels.map(r=>{var o;return r.active=r.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ko(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,r=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((h,l)=>({left:h.left+l.clientWidth,top:h.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        class=${P({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?w`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?w`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Et.styles=Pl;a([$(".tab-group")],Et.prototype,"tabGroup",2);a([$(".tab-group__body")],Et.prototype,"body",2);a([$(".tab-group__nav")],Et.prototype,"nav",2);a([$(".tab-group__indicator")],Et.prototype,"indicator",2);a([R()],Et.prototype,"hasScrollControls",2);a([c()],Et.prototype,"placement",2);a([c()],Et.prototype,"activation",2);a([c({attribute:"no-scroll-controls",type:Boolean})],Et.prototype,"noScrollControls",2);a([x("noScrollControls",{waitUntilFirstUpdate:!0})],Et.prototype,"updateScrollControls",1);a([x("placement",{waitUntilFirstUpdate:!0})],Et.prototype,"syncIndicator",1);Et=a([z("sl-tab-group")],Et);var Fl=T`
  ${I}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Bl=0,di=class extends E{constructor(){super(...arguments),this.attrId=++Bl,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return w`
      <slot
        part="base"
        class=${P({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};di.styles=Fl;a([c({reflect:!0})],di.prototype,"name",2);a([c({type:Boolean,reflect:!0})],di.prototype,"active",2);a([x("active")],di.prototype,"handleActiveChange",1);di=a([z("sl-tab-panel")],di);var Ul=T`
  ${I}
  ${Ji}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,N=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r){this.input.setRangeText(t,e,i,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e;return w`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${P({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${S(this.name)}
              .value=${Te(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${S(this.placeholder)}
              rows=${S(this.rows)}
              minlength=${S(this.minlength)}
              maxlength=${S(this.maxlength)}
              autocapitalize=${S(this.autocapitalize)}
              autocorrect=${S(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${S(this.spellcheck)}
              enterkeyhint=${S(this.enterkeyhint)}
              inputmode=${S(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};N.styles=Ul;a([$(".textarea__control")],N.prototype,"input",2);a([R()],N.prototype,"hasFocus",2);a([c()],N.prototype,"title",2);a([c()],N.prototype,"name",2);a([c()],N.prototype,"value",2);a([c({reflect:!0})],N.prototype,"size",2);a([c({type:Boolean,reflect:!0})],N.prototype,"filled",2);a([c()],N.prototype,"label",2);a([c({attribute:"help-text"})],N.prototype,"helpText",2);a([c()],N.prototype,"placeholder",2);a([c({type:Number})],N.prototype,"rows",2);a([c()],N.prototype,"resize",2);a([c({type:Boolean,reflect:!0})],N.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],N.prototype,"readonly",2);a([c({reflect:!0})],N.prototype,"form",2);a([c({type:Boolean,reflect:!0})],N.prototype,"required",2);a([c({type:Number})],N.prototype,"minlength",2);a([c({type:Number})],N.prototype,"maxlength",2);a([c()],N.prototype,"autocapitalize",2);a([c()],N.prototype,"autocorrect",2);a([c()],N.prototype,"autocomplete",2);a([c({type:Boolean})],N.prototype,"autofocus",2);a([c()],N.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],N.prototype,"spellcheck",2);a([c()],N.prototype,"inputmode",2);a([Me()],N.prototype,"defaultValue",2);a([x("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);a([x("rows",{waitUntilFirstUpdate:!0})],N.prototype,"handleRowsChange",1);a([x("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);N=a([z("sl-textarea")],N);var Vl=T`
  ${I}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Di(t,e){function i(o){const s=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,h=s.left+n.pageXOffset,l=s.top+n.pageYOffset,d=o.pageX-h,m=o.pageY-l;e!=null&&e.onMove&&e.onMove(d,m)}function r(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",r),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",r),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var yt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Di(this,{onMove:(i,r)=>{let o=this.vertical?r:i;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let h;n.endsWith("%")?h=this.size*(parseFloat(n)/100):h=parseFloat(n),e&&!this.vertical&&(h=this.size-h),o>=h-this.snapThreshold&&o<=h+this.snapThreshold&&(o=h)}),this.position=at(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=at(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`,this.style[e]="",w`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${S(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};yt.styles=Vl;a([$(".divider")],yt.prototype,"divider",2);a([c({type:Number,reflect:!0})],yt.prototype,"position",2);a([c({attribute:"position-in-pixels",type:Number})],yt.prototype,"positionInPixels",2);a([c({type:Boolean,reflect:!0})],yt.prototype,"vertical",2);a([c({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);a([c()],yt.prototype,"primary",2);a([c()],yt.prototype,"snap",2);a([c({type:Number,attribute:"snap-threshold"})],yt.prototype,"snapThreshold",2);a([x("position")],yt.prototype,"handlePositionChange",1);a([x("positionInPixels")],yt.prototype,"handlePositionInPixelsChange",1);a([x("vertical")],yt.prototype,"handleVerticalChange",1);yt=a([z("sl-split-panel")],yt);var Hl=T`
  ${I}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ft=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return w`
      <label
        part="base"
        class=${P({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${S(this.value)}
          .checked=${Te(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};ft.styles=Hl;a([$('input[type="checkbox"]')],ft.prototype,"input",2);a([R()],ft.prototype,"hasFocus",2);a([c()],ft.prototype,"title",2);a([c()],ft.prototype,"name",2);a([c()],ft.prototype,"value",2);a([c({reflect:!0})],ft.prototype,"size",2);a([c({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],ft.prototype,"checked",2);a([Me("checked")],ft.prototype,"defaultChecked",2);a([c({reflect:!0})],ft.prototype,"form",2);a([c({type:Boolean,reflect:!0})],ft.prototype,"required",2);a([x("checked",{waitUntilFirstUpdate:!0})],ft.prototype,"handleCheckedChange",1);a([x("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);ft=a([z("sl-switch")],ft);var Nl=T`
  ${I}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,jl=0,oe=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.attrId=++jl,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,w`
      <div
        part="base"
        class=${P({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?w`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};oe.styles=Nl;a([$(".tab")],oe.prototype,"tab",2);a([c({reflect:!0})],oe.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],oe.prototype,"active",2);a([c({type:Boolean})],oe.prototype,"closable",2);a([c({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);a([x("active")],oe.prototype,"handleActiveChange",1);a([x("disabled")],oe.prototype,"handleDisabledChange",1);oe=a([z("sl-tab")],oe);var ql=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],he=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:r,value:o}=ql.find(s=>Math.abs(i)<s.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/o),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;r==="minute"?s=tr("second"):r==="hour"?s=tr("minute"):r==="day"?s=tr("hour"):s=tr("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return w` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};a([R()],he.prototype,"isoTime",2);a([R()],he.prototype,"relativeTime",2);a([R()],he.prototype,"titleTime",2);a([c()],he.prototype,"date",2);a([c()],he.prototype,"format",2);a([c()],he.prototype,"numeric",2);a([c({type:Boolean})],he.prototype,"sync",2);he=a([z("sl-relative-time")],he);function tr(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}var Kl=T`
  ${I}

  :host {
    display: contents;
  }
`,qi=class extends E{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return w` <slot @slotchange=${this.handleSlotChange}></slot> `}};qi.styles=Kl;a([c({type:Boolean,reflect:!0})],qi.prototype,"disabled",2);a([x("disabled",{waitUntilFirstUpdate:!0})],qi.prototype,"handleDisabledChange",1);qi=a([z("sl-resize-observer")],qi);var Wl=T`
  ${I}
  ${Ji}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,H=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new K(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.handleDocumentFocusIn=this.handleDocumentFocusIn.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleDocumentFocusIn(t){const e=t.composedPath();this&&!e.includes(this)&&this.hide()}handleDocumentKeyDown(t){const e=t.target,i=e.closest(".select__clear")!==null,r=e.closest("sl-icon-button")!==null;if(!(i||r)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),s=o.indexOf(this.currentOption);let n=Math.max(0,s);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=s+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=s-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const s of o)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}}handleDocumentMouseDown(t){const e=t.composedPath();this&&!e.includes(this)&&this.hide()}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),r=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(t.forEach(r=>i.push(r.value)),this.setSelectedOptions(t.filter(r=>e.includes(r.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(r=>r.selected=!1),i.length&&i.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i,r;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(r=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?r:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await st(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=tt(this,"select.show",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.currentOption&&ko(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await st(this);const{keyframes:t,options:e}=tt(this,"select.hide",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,bt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return w`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${P({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?w`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((n,h)=>h<this.maxOptionsVisible||this.maxOptionsVisible<=0?w`
                            <sl-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @sl-remove=${l=>this.handleTagRemove(l,n)}
                            >
                              ${n.getTextLabel()}
                            </sl-tag>
                          `:h===this.maxOptionsVisible?w` <sl-tag size=${this.size}> +${this.selectedOptions.length-h} </sl-tag> `:null)}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?w`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};H.styles=Wl;a([$(".select")],H.prototype,"popup",2);a([$(".select__combobox")],H.prototype,"combobox",2);a([$(".select__display-input")],H.prototype,"displayInput",2);a([$(".select__value-input")],H.prototype,"valueInput",2);a([$(".select__listbox")],H.prototype,"listbox",2);a([R()],H.prototype,"hasFocus",2);a([R()],H.prototype,"displayLabel",2);a([R()],H.prototype,"currentOption",2);a([R()],H.prototype,"selectedOptions",2);a([c()],H.prototype,"name",2);a([c({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],H.prototype,"value",2);a([Me()],H.prototype,"defaultValue",2);a([c()],H.prototype,"size",2);a([c()],H.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],H.prototype,"multiple",2);a([c({attribute:"max-options-visible",type:Number})],H.prototype,"maxOptionsVisible",2);a([c({type:Boolean,reflect:!0})],H.prototype,"disabled",2);a([c({type:Boolean})],H.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],H.prototype,"open",2);a([c({type:Boolean})],H.prototype,"hoist",2);a([c({type:Boolean,reflect:!0})],H.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],H.prototype,"pill",2);a([c()],H.prototype,"label",2);a([c({reflect:!0})],H.prototype,"placement",2);a([c({attribute:"help-text"})],H.prototype,"helpText",2);a([c({reflect:!0})],H.prototype,"form",2);a([c({type:Boolean,reflect:!0})],H.prototype,"required",2);a([x("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);a([x("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);a([x("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);H=a([z("sl-select")],H);W("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Gl=T`
  ${I}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Oe=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return w`
      <span
        part="base"
        class=${P({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?w`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Oe.styles=Gl;a([c({reflect:!0})],Oe.prototype,"variant",2);a([c({reflect:!0})],Oe.prototype,"size",2);a([c({type:Boolean,reflect:!0})],Oe.prototype,"pill",2);a([c({type:Boolean})],Oe.prototype,"removable",2);Oe=a([z("sl-tag")],Oe);var Xl=T`
  ${I}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,xr=class extends E{constructor(){super(...arguments),this.effect="none"}render(){return w`
      <div
        part="base"
        class=${P({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};xr.styles=Xl;a([c()],xr.prototype,"effect",2);xr=a([z("sl-skeleton")],xr);var Yl=T`
  ${Oa}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,It=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Oi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${P({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${S(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};It.styles=Yl;a([$(".button")],It.prototype,"input",2);a([$(".hidden-input")],It.prototype,"hiddenInput",2);a([R()],It.prototype,"hasFocus",2);a([c({type:Boolean,reflect:!0})],It.prototype,"checked",2);a([c()],It.prototype,"value",2);a([c({type:Boolean,reflect:!0})],It.prototype,"disabled",2);a([c({reflect:!0})],It.prototype,"size",2);a([c({type:Boolean,reflect:!0})],It.prototype,"pill",2);a([x("disabled",{waitUntilFirstUpdate:!0})],It.prototype,"handleDisabledChange",1);It=a([z("sl-radio-button")],It);var Jl=T`
  ${I}
  ${Ji}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,mt=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this),this.hasSlotController=new Mt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Kn:t?qn:Dr}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),r=this.value;e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(h=>!h.disabled),r=(e=i.find(h=>h.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value;let n=i.indexOf(r)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(h=>{h.checked=!1,this.hasButtonGroup||(h.tabIndex=-1)}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].tabIndex=0,i[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(r=>r.checked)||t[0];i&&i.focus()}handleSlotChange(){var t,e;if(customElements.get("sl-radio")||customElements.get("sl-radio-button")){const i=this.getAllRadios();if(i.forEach(r=>{r.checked=r.value===this.value,r.size=this.size}),this.hasButtonGroup=i.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!i.some(r=>r.checked))if(this.hasButtonGroup){const r=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");r&&(r.tabIndex=0)}else i[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}else customElements.whenDefined("sl-radio").then(()=>this.handleSlotChange()),customElements.whenDefined("sl-radio-button").then(()=>this.handleSlotChange())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e,o=w`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return w`
      <fieldset
        part="form-control"
        class=${P({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?w`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};mt.styles=Jl;a([$("slot:not([name])")],mt.prototype,"defaultSlot",2);a([$(".radio-group__validation-input")],mt.prototype,"validationInput",2);a([R()],mt.prototype,"hasButtonGroup",2);a([R()],mt.prototype,"errorMessage",2);a([R()],mt.prototype,"defaultValue",2);a([c()],mt.prototype,"label",2);a([c({attribute:"help-text"})],mt.prototype,"helpText",2);a([c()],mt.prototype,"name",2);a([c({reflect:!0})],mt.prototype,"value",2);a([c({reflect:!0})],mt.prototype,"size",2);a([c({reflect:!0})],mt.prototype,"form",2);a([c({type:Boolean,reflect:!0})],mt.prototype,"required",2);a([x("value")],mt.prototype,"handleValueChange",1);mt=a([z("sl-radio-group")],mt);var Ql=T`
  ${I}
  ${Ji}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,J=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this),this.hasSlotController=new Mt(this,"help-text","label"),this.localize=new K(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",s=e*t;if(o){const n=`${e-s}px + ${t} * ${r}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${r} / 2))`}else{const n=`${s}px - ${t} * ${r}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e;return w`
      <div
        part="form-control"
        class=${P({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${P({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${S(this.name)}
              ?disabled=${this.disabled}
              min=${S(this.min)}
              max=${S(this.max)}
              step=${S(this.step)}
              .value=${Te(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?w`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};J.styles=Ql;a([$(".range__control")],J.prototype,"input",2);a([$(".range__tooltip")],J.prototype,"output",2);a([R()],J.prototype,"hasFocus",2);a([R()],J.prototype,"hasTooltip",2);a([c()],J.prototype,"title",2);a([c()],J.prototype,"name",2);a([c({type:Number})],J.prototype,"value",2);a([c()],J.prototype,"label",2);a([c({attribute:"help-text"})],J.prototype,"helpText",2);a([c({type:Boolean,reflect:!0})],J.prototype,"disabled",2);a([c({type:Number})],J.prototype,"min",2);a([c({type:Number})],J.prototype,"max",2);a([c({type:Number})],J.prototype,"step",2);a([c()],J.prototype,"tooltip",2);a([c({attribute:!1})],J.prototype,"tooltipFormatter",2);a([c({reflect:!0})],J.prototype,"form",2);a([Me()],J.prototype,"defaultValue",2);a([Ma({passive:!0})],J.prototype,"handleThumbDragStart",1);a([x("value",{waitUntilFirstUpdate:!0})],J.prototype,"handleValueChange",1);a([x("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);a([x("hasTooltip",{waitUntilFirstUpdate:!0})],J.prototype,"syncRange",1);J=a([z("sl-range")],J);var Zl=T`
  ${I}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbols--indicator {
      color: SelectedItem;
    }
  }
`,$o=class extends Fr{constructor(t){if(super(t),this.it=Z,t.type!==de.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Z||t==null)return this._t=void 0,this.it=t;if(t===Ct)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};$o.directiveName="unsafeHTML",$o.resultType=1;var Fs=Mr($o),gt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:r,width:o}=this.rating.getBoundingClientRect(),s=e?this.roundToPrecision((r-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return at(s,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,w`
      <div
        part="base"
        class=${P({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${e.map(r=>w`
              <span
                class=${P({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===r+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Fs(this.getSymbol(r+1))}
              </span>
            `)}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${e.map(r=>w`
              <span
                class=${P({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===r+1})}
                style=${$t({clipPath:i>r+1?"none":t?`inset(0 0 0 ${100-(i-r)/1*100}%)`:`inset(0 ${100-(i-r)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${Fs(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};gt.styles=Zl;a([$(".rating")],gt.prototype,"rating",2);a([R()],gt.prototype,"hoverValue",2);a([R()],gt.prototype,"isHovering",2);a([c()],gt.prototype,"label",2);a([c({type:Number})],gt.prototype,"value",2);a([c({type:Number})],gt.prototype,"max",2);a([c({type:Number})],gt.prototype,"precision",2);a([c({type:Boolean,reflect:!0})],gt.prototype,"readonly",2);a([c({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);a([c()],gt.prototype,"getSymbol",2);a([Ma({passive:!0})],gt.prototype,"handleTouchMove",1);a([x("hoverValue")],gt.prototype,"handleHoverValueChange",1);a([x("isHovering")],gt.prototype,"handleIsHoveringChange",1);gt=a([z("sl-rating")],gt);/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var tc=T`
  ${I}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Ie=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,r=i-this.value/100*i;this.indicatorOffset=`${r}px`}}render(){return w`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ie.styles=tc;a([$(".progress-ring__indicator")],Ie.prototype,"indicator",2);a([R()],Ie.prototype,"indicatorOffset",2);a([c({type:Number,reflect:!0})],Ie.prototype,"value",2);a([c()],Ie.prototype,"label",2);Ie=a([z("sl-progress-ring")],Ie);var ec=T`
  ${I}

  :host {
    display: inline-block;
  }
`,Ba=null,Ua=class{};Ua.render=function(t,e){Ba(t,e)};self.QrCreator=Ua;(function(t){function e(h,l,d,m){var u={},p=t(d,l);p.u(h),p.J(),m=m||0;var f=p.h(),g=p.h()+2*m;return u.text=h,u.level=l,u.version=d,u.O=g,u.a=function(b,C){return b-=m,C-=m,0>b||b>=f||0>C||C>=f?!1:p.a(b,C)},u}function i(h,l,d,m,u,p,f,g,b,C){function A(y,k,v,_,O,M,B){y?(h.lineTo(k+M,v+B),h.arcTo(k,v,_,O,p)):h.lineTo(k,v)}f?h.moveTo(l+p,d):h.moveTo(l,d),A(g,m,d,m,u,-p,0),A(b,m,u,l,u,0,-p),A(C,l,u,l,d,p,0),A(f,l,d,m,d,0,p)}function r(h,l,d,m,u,p,f,g,b,C){function A(y,k,v,_){h.moveTo(y+v,k),h.lineTo(y,k),h.lineTo(y,k+_),h.arcTo(y,k,y+v,k,p)}f&&A(l,d,p,p),g&&A(m,d,-p,p),b&&A(m,u,-p,-p),C&&A(l,u,p,-p)}function o(h,l){var d=l.fill;if(typeof d=="string")h.fillStyle=d;else{var m=d.type,u=d.colorStops;if(d=d.position.map(f=>Math.round(f*l.size)),m==="linear-gradient")var p=h.createLinearGradient.apply(h,d);else if(m==="radial-gradient")p=h.createRadialGradient.apply(h,d);else throw Error("Unsupported fill");u.forEach(([f,g])=>{p.addColorStop(f,g)}),h.fillStyle=p}}function s(h,l){t:{var d=l.text,m=l.v,u=l.N,p=l.K,f=l.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var g=e(d,m,u,f);break t}catch{}g=void 0}if(!g)return null;for(d=h.getContext("2d"),l.background&&(d.fillStyle=l.background,d.fillRect(l.left,l.top,l.size,l.size)),m=g.O,p=l.size/m,d.beginPath(),f=0;f<m;f+=1)for(u=0;u<m;u+=1){var b=d,C=l.left+u*p,A=l.top+f*p,y=f,k=u,v=g.a,_=C+p,O=A+p,M=y-1,B=y+1,D=k-1,L=k+1,wt=Math.floor(Math.min(.5,Math.max(0,l.R))*p),Q=v(y,k),ct=v(M,D),Tt=v(M,k);M=v(M,L);var xt=v(y,L);L=v(B,L),k=v(B,k),B=v(B,D),y=v(y,D),C=Math.round(C),A=Math.round(A),_=Math.round(_),O=Math.round(O),Q?i(b,C,A,_,O,wt,!Tt&&!y,!Tt&&!xt,!k&&!xt,!k&&!y):r(b,C,A,_,O,wt,Tt&&y&&ct,Tt&&xt&&M,k&&xt&&L,k&&y&&B)}return o(d,l),d.fill(),h}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ba=function(h,l){var d={};Object.assign(d,n,h),d.N=d.minVersion,d.K=d.maxVersion,d.v=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.R=d.radius,d.P=d.quiet,l instanceof HTMLCanvasElement?((l.width!==d.size||l.height!==d.size)&&(l.width=d.size,l.height=d.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,d)):(h=document.createElement("canvas"),h.width=d.size,h.height=d.size,d=s(h,d),l.appendChild(d))}})(function(){function t(l){var d=i.s(l);return{S:function(){return 4},b:function(){return d.length},write:function(m){for(var u=0;u<d.length;u+=1)m.put(d[u],8)}}}function e(){var l=[],d=0,m={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var f=0;f<p;f+=1)m.m((u>>>p-f-1&1)==1)},f:function(){return d},m:function(u){var p=Math.floor(d/8);l.length<=p&&l.push(0),u&&(l[p]|=128>>>d%8),d+=1}};return m}function i(l,d){function m(y,k){for(var v=-1;7>=v;v+=1)if(!(-1>=y+v||g<=y+v))for(var _=-1;7>=_;_+=1)-1>=k+_||g<=k+_||(f[y+v][k+_]=0<=v&&6>=v&&(_==0||_==6)||0<=_&&6>=_&&(v==0||v==6)||2<=v&&4>=v&&2<=_&&4>=_)}function u(y,k){for(var v=g=4*l+17,_=Array(v),O=0;O<v;O+=1){_[O]=Array(v);for(var M=0;M<v;M+=1)_[O][M]=null}for(f=_,m(0,0),m(g-7,0),m(0,g-7),v=s.G(l),_=0;_<v.length;_+=1)for(O=0;O<v.length;O+=1){M=v[_];var B=v[O];if(f[M][B]==null)for(var D=-2;2>=D;D+=1)for(var L=-2;2>=L;L+=1)f[M+D][B+L]=D==-2||D==2||L==-2||L==2||D==0&&L==0}for(v=8;v<g-8;v+=1)f[v][6]==null&&(f[v][6]=v%2==0);for(v=8;v<g-8;v+=1)f[6][v]==null&&(f[6][v]=v%2==0);for(v=s.w(p<<3|k),_=0;15>_;_+=1)O=!y&&(v>>_&1)==1,f[6>_?_:8>_?_+1:g-15+_][8]=O,f[8][8>_?g-_-1:9>_?15-_:14-_]=O;if(f[g-8][8]=!y,7<=l){for(v=s.A(l),_=0;18>_;_+=1)O=!y&&(v>>_&1)==1,f[Math.floor(_/3)][_%3+g-8-3]=O;for(_=0;18>_;_+=1)O=!y&&(v>>_&1)==1,f[_%3+g-8-3][Math.floor(_/3)]=O}if(b==null){for(y=h.I(l,p),v=e(),_=0;_<C.length;_+=1)O=C[_],v.put(4,4),v.put(O.b(),s.f(4,l)),O.write(v);for(_=O=0;_<y.length;_+=1)O+=y[_].j;if(v.f()>8*O)throw Error("code length overflow. ("+v.f()+">"+8*O+")");for(v.f()+4<=8*O&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*O)&&(v.put(236,8),!(v.f()>=8*O));)v.put(17,8);var wt=0;for(O=_=0,M=Array(y.length),B=Array(y.length),D=0;D<y.length;D+=1){var Q=y[D].j,ct=y[D].o-Q;for(_=Math.max(_,Q),O=Math.max(O,ct),M[D]=Array(Q),L=0;L<M[D].length;L+=1)M[D][L]=255&v.B()[L+wt];for(wt+=Q,L=s.C(ct),Q=r(M[D],L.b()-1).l(L),B[D]=Array(L.b()-1),L=0;L<B[D].length;L+=1)ct=L+Q.b()-B[D].length,B[D][L]=0<=ct?Q.c(ct):0}for(L=v=0;L<y.length;L+=1)v+=y[L].o;for(v=Array(v),L=wt=0;L<_;L+=1)for(D=0;D<y.length;D+=1)L<M[D].length&&(v[wt]=M[D][L],wt+=1);for(L=0;L<O;L+=1)for(D=0;D<y.length;D+=1)L<B[D].length&&(v[wt]=B[D][L],wt+=1);b=v}for(y=b,v=-1,_=g-1,O=7,M=0,k=s.F(k),B=g-1;0<B;B-=2)for(B==6&&--B;;){for(D=0;2>D;D+=1)f[_][B-D]==null&&(L=!1,M<y.length&&(L=(y[M]>>>O&1)==1),k(_,B-D)&&(L=!L),f[_][B-D]=L,--O,O==-1&&(M+=1,O=7));if(_+=v,0>_||g<=_){_-=v,v=-v;break}}}var p=o[d],f=null,g=0,b=null,C=[],A={u:function(y){y=t(y),C.push(y),b=null},a:function(y,k){if(0>y||g<=y||0>k||g<=k)throw Error(y+","+k);return f[y][k]},h:function(){return g},J:function(){for(var y=0,k=0,v=0;8>v;v+=1){u(!0,v);var _=s.D(A);(v==0||y>_)&&(y=_,k=v)}u(!1,k)}};return A}function r(l,d){if(typeof l.length>"u")throw Error(l.length+"/"+d);var m=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var f=Array(l.length-p+d),g=0;g<l.length-p;g+=1)f[g]=l[g+p];return f}(),u={c:function(p){return m[p]},b:function(){return m.length},multiply:function(p){for(var f=Array(u.b()+p.b()-1),g=0;g<u.b();g+=1)for(var b=0;b<p.b();b+=1)f[g+b]^=n.i(n.g(u.c(g))+n.g(p.c(b)));return r(f,0)},l:function(p){if(0>u.b()-p.b())return u;for(var f=n.g(u.c(0))-n.g(p.c(0)),g=Array(u.b()),b=0;b<u.b();b+=1)g[b]=u.c(b);for(b=0;b<p.b();b+=1)g[b]^=n.i(n.g(p.c(b))+f);return r(g,0).l(p)}};return u}i.s=function(l){for(var d=[],m=0;m<l.length;m++){var u=l.charCodeAt(m);128>u?d.push(u):2048>u?d.push(192|u>>6,128|u&63):55296>u||57344<=u?d.push(224|u>>12,128|u>>6&63,128|u&63):(m++,u=65536+((u&1023)<<10|l.charCodeAt(m)&1023),d.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return d};var o={L:1,M:0,Q:3,H:2},s=function(){function l(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],m={w:function(u){for(var p=u<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return u<<12|p},G:function(u){return d[u-1]},F:function(u){switch(u){case 0:return function(p,f){return(p+f)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,f){return f%3==0};case 3:return function(p,f){return(p+f)%3==0};case 4:return function(p,f){return(Math.floor(p/2)+Math.floor(f/3))%2==0};case 5:return function(p,f){return p*f%2+p*f%3==0};case 6:return function(p,f){return(p*f%2+p*f%3)%2==0};case 7:return function(p,f){return(p*f%3+(p+f)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=r([1],0),f=0;f<u;f+=1)p=p.multiply(r([1,n.i(f)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),f=0,g=0;g<p;g+=1)for(var b=0;b<p;b+=1){for(var C=0,A=u.a(g,b),y=-1;1>=y;y+=1)if(!(0>g+y||p<=g+y))for(var k=-1;1>=k;k+=1)0>b+k||p<=b+k||(y!=0||k!=0)&&A==u.a(g+y,b+k)&&(C+=1);5<C&&(f+=3+C-5)}for(g=0;g<p-1;g+=1)for(b=0;b<p-1;b+=1)C=0,u.a(g,b)&&(C+=1),u.a(g+1,b)&&(C+=1),u.a(g,b+1)&&(C+=1),u.a(g+1,b+1)&&(C+=1),(C==0||C==4)&&(f+=3);for(g=0;g<p;g+=1)for(b=0;b<p-6;b+=1)u.a(g,b)&&!u.a(g,b+1)&&u.a(g,b+2)&&u.a(g,b+3)&&u.a(g,b+4)&&!u.a(g,b+5)&&u.a(g,b+6)&&(f+=40);for(b=0;b<p;b+=1)for(g=0;g<p-6;g+=1)u.a(g,b)&&!u.a(g+1,b)&&u.a(g+2,b)&&u.a(g+3,b)&&u.a(g+4,b)&&!u.a(g+5,b)&&u.a(g+6,b)&&(f+=40);for(b=C=0;b<p;b+=1)for(g=0;g<p;g+=1)u.a(g,b)&&(C+=1);return f+=Math.abs(100*C/p/p-50)/5*10}};return m}(),n=function(){for(var l=Array(256),d=Array(256),m=0;8>m;m+=1)l[m]=1<<m;for(m=8;256>m;m+=1)l[m]=l[m-4]^l[m-5]^l[m-6]^l[m-8];for(m=0;255>m;m+=1)d[l[m]]=m;return{g:function(u){if(1>u)throw Error("glog("+u+")");return d[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),h=function(){function l(u,p){switch(p){case o.L:return d[4*(u-1)];case o.M:return d[4*(u-1)+1];case o.Q:return d[4*(u-1)+2];case o.H:return d[4*(u-1)+3]}}var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m={I:function(u,p){var f=l(u,p);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=f.length/3,p=[];for(var g=0;g<u;g+=1)for(var b=f[3*g],C=f[3*g+1],A=f[3*g+2],y=0;y<b;y+=1){var k=A,v={};v.o=C,v.j=k,p.push(v)}return p}};return m}();return i}());var ic=QrCreator,Lt=class extends E{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ic.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:null,size:this.size*2},this.canvas)}render(){var t;return w`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${$t({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Lt.styles=ec;a([$("canvas")],Lt.prototype,"canvas",2);a([c()],Lt.prototype,"value",2);a([c()],Lt.prototype,"label",2);a([c({type:Number})],Lt.prototype,"size",2);a([c()],Lt.prototype,"fill",2);a([c()],Lt.prototype,"background",2);a([c({type:Number})],Lt.prototype,"radius",2);a([c({attribute:"error-correction"})],Lt.prototype,"errorCorrection",2);a([x(["background","errorCorrection","fill","radius","size","value"])],Lt.prototype,"generate",1);Lt=a([z("sl-qr-code")],Lt);var rc=T`
  ${I}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,se=class extends E{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.setInitialAttributes(),this.addEventListeners()}disconnectedCallback(){this.removeEventListeners()}addEventListeners(){this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}removeEventListeners(){this.removeEventListener("blur",this.handleBlur),this.removeEventListener("click",this.handleClick),this.removeEventListener("focus",this.handleFocus)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return w`
      <span
        part="base"
        class=${P({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?w` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};se.styles=rc;a([R()],se.prototype,"checked",2);a([R()],se.prototype,"hasFocus",2);a([c()],se.prototype,"value",2);a([c({reflect:!0})],se.prototype,"size",2);a([c({type:Boolean,reflect:!0})],se.prototype,"disabled",2);a([x("checked")],se.prototype,"handleCheckedChange",1);a([x("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);se=a([z("sl-radio")],se);var oc=T`
  ${I}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Co=class extends E{render(){return w` <slot part="base" class="menu-label"></slot> `}};Co.styles=oc;Co=a([z("sl-menu-label")],Co);var sc=T`
  ${I}

  :host {
    display: contents;
  }
`,Kt=class extends E{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleMutation=this.handleMutation.bind(this),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}handleMutation(t){this.emit("sl-mutation",{detail:{mutationList:t}})}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return w` <slot></slot> `}};Kt.styles=sc;a([c({reflect:!0})],Kt.prototype,"attr",2);a([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],Kt.prototype,"attrOldValue",2);a([c({attribute:"char-data",type:Boolean,reflect:!0})],Kt.prototype,"charData",2);a([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Kt.prototype,"charDataOldValue",2);a([c({attribute:"child-list",type:Boolean,reflect:!0})],Kt.prototype,"childList",2);a([c({type:Boolean,reflect:!0})],Kt.prototype,"disabled",2);a([x("disabled")],Kt.prototype,"handleDisabledChange",1);a([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],Kt.prototype,"handleChange",1);Kt=a([z("sl-mutation-observer")],Kt);var ac=T`
  ${I}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Dt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var t;return((t=this.textContent)!=null?t:"").trim()}render(){return w`
      <div
        part="base"
        class=${P({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Dt.styles=ac;a([$(".option__label")],Dt.prototype,"defaultSlot",2);a([R()],Dt.prototype,"current",2);a([R()],Dt.prototype,"selected",2);a([R()],Dt.prototype,"hasHover",2);a([c({reflect:!0})],Dt.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);a([x("disabled")],Dt.prototype,"handleDisabledChange",1);a([x("selected")],Dt.prototype,"handleSelectedChange",1);a([x("value")],Dt.prototype,"handleValueChange",1);Dt=a([z("sl-option")],Dt);var so=new Map;function nc(t,e="cors"){const i=so.get(t);if(i!==void 0)return Promise.resolve(i);const r=fetch(t,{mode:e}).then(async o=>{const s={ok:o.ok,status:o.status,html:await o.text()};return so.set(t,s),s});return so.set(t,r),r}var lc=T`
  ${I}

  :host {
    display: block;
  }
`,Le=class extends E{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await nc(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return w`<slot></slot>`}};Le.styles=lc;a([c()],Le.prototype,"src",2);a([c()],Le.prototype,"mode",2);a([c({attribute:"allow-scripts",type:Boolean})],Le.prototype,"allowScripts",2);a([x("src")],Le.prototype,"handleSrcChange",1);Le=a([z("sl-include")],Le);var cc=T`
  ${I}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,kr=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const i=t.target.closest("sl-menu-item");!i||i.disabled||i.inert||(i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}}))}handleKeyDown(t){if(t.key==="Enter"){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let r=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.key==="ArrowDown"?r++:t.key==="ArrowUp"?r--:t.key==="Home"?r=0:t.key==="End"&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),e[r].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return w`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};kr.styles=cc;a([$("slot")],kr.prototype,"defaultSlot",2);kr=a([z("sl-menu")],kr);var dc=T`
  ${I}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Pt=class extends E{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleHostClick(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return cl(this.defaultSlot)}render(){return w`
      <div
        part="base"
        class=${P({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Pt.styles=dc;a([$("slot:not([name])")],Pt.prototype,"defaultSlot",2);a([$(".menu-item")],Pt.prototype,"menuItem",2);a([c()],Pt.prototype,"type",2);a([c({type:Boolean,reflect:!0})],Pt.prototype,"checked",2);a([c()],Pt.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);a([x("checked")],Pt.prototype,"handleCheckedChange",1);a([x("disabled")],Pt.prototype,"handleDisabledChange",1);a([x("type")],Pt.prototype,"handleTypeChange",1);Pt=a([z("sl-menu-item")],Pt);var hc=T`
  ${I}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,De=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),Di(this.base,{onMove:r=>{this.position=parseFloat(at(r/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const r=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=r),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=r),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=at(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        id="image-comparer"
        class=${P({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${$t({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${$t({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `}};De.styles=hc;a([$(".image-comparer")],De.prototype,"base",2);a([$(".image-comparer__handle")],De.prototype,"handle",2);a([c({type:Number,reflect:!0})],De.prototype,"position",2);a([x("position",{waitUntilFirstUpdate:!0})],De.prototype,"handlePositionChange",1);De=a([z("sl-image-comparer")],De);function Bs(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Va(t){var e,i;const r=[];function o(h){h instanceof HTMLElement&&(r.push(h),h.shadowRoot!==null&&h.shadowRoot.mode==="open"&&o(h.shadowRoot)),[...h.children].forEach(l=>o(l))}o(t);const s=(e=r.find(h=>Bs(h)))!=null?e:null,n=(i=r.reverse().find(h=>Bs(h)))!=null?i:null;return{start:s,end:n}}var Ei=[],Ha=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Ei.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ei=Ei.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ei[Ei.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=Va(this.element),i=this.tabDirection==="forward"?t:e;typeof(i==null?void 0:i.focus)=="function"&&i.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}},uc=T`
  ${I}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Us(t){return t.charAt(0).toUpperCase()+t.slice(1)}var At=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer"),this.localize=new K(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Ha(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ii(this)))}disconnectedCallback(){super.disconnectedCallback(),Li(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=tt(this,"drawer.denyClose",{dir:this.localize.dir()});et(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&!this.contained&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ii(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([st(this.drawer),st(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=tt(this,`drawer.show${Us(this.placement)}`,{dir:this.localize.dir()}),i=tt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([et(this.panel,e.keyframes,e.options),et(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Li(this)),await Promise.all([st(this.drawer),st(this.overlay)]);const t=tt(this,`drawer.hide${Us(this.placement)}`,{dir:this.localize.dir()}),e=tt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([et(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),et(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ii(this)),this.open&&this.contained&&(this.modal.deactivate(),Li(this))}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${P({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${S(this.noHeader?this.label:void 0)}
          aria-labelledby=${S(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};At.styles=uc;a([$(".drawer")],At.prototype,"drawer",2);a([$(".drawer__panel")],At.prototype,"panel",2);a([$(".drawer__overlay")],At.prototype,"overlay",2);a([c({type:Boolean,reflect:!0})],At.prototype,"open",2);a([c({reflect:!0})],At.prototype,"label",2);a([c({reflect:!0})],At.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],At.prototype,"contained",2);a([c({attribute:"no-header",type:Boolean,reflect:!0})],At.prototype,"noHeader",2);a([x("open",{waitUntilFirstUpdate:!0})],At.prototype,"handleOpenChange",1);a([x("contained",{waitUntilFirstUpdate:!0})],At.prototype,"handleNoModalChange",1);At=a([z("sl-drawer")],At);W("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});W("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});W("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});W("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});W("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});W("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ki=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[r]+this.unit,s=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:o,unitDisplay:this.display})}};a([c({type:Number})],Ki.prototype,"value",2);a([c()],Ki.prototype,"unit",2);a([c()],Ki.prototype,"display",2);Ki=a([z("sl-format-bytes")],Ki);var _t=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return w`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};a([c()],_t.prototype,"date",2);a([c()],_t.prototype,"weekday",2);a([c()],_t.prototype,"era",2);a([c()],_t.prototype,"year",2);a([c()],_t.prototype,"month",2);a([c()],_t.prototype,"day",2);a([c()],_t.prototype,"hour",2);a([c()],_t.prototype,"minute",2);a([c()],_t.prototype,"second",2);a([c({attribute:"time-zone-name"})],_t.prototype,"timeZoneName",2);a([c({attribute:"time-zone"})],_t.prototype,"timeZone",2);a([c({attribute:"hour-format"})],_t.prototype,"hourFormat",2);_t=a([z("sl-format-date")],_t);var Rt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([c({type:Number})],Rt.prototype,"value",2);a([c()],Rt.prototype,"type",2);a([c({attribute:"no-grouping",type:Boolean})],Rt.prototype,"noGrouping",2);a([c()],Rt.prototype,"currency",2);a([c({attribute:"currency-display"})],Rt.prototype,"currencyDisplay",2);a([c({attribute:"minimum-integer-digits",type:Number})],Rt.prototype,"minimumIntegerDigits",2);a([c({attribute:"minimum-fraction-digits",type:Number})],Rt.prototype,"minimumFractionDigits",2);a([c({attribute:"maximum-fraction-digits",type:Number})],Rt.prototype,"maximumFractionDigits",2);a([c({attribute:"minimum-significant-digits",type:Number})],Rt.prototype,"minimumSignificantDigits",2);a([c({attribute:"maximum-significant-digits",type:Number})],Rt.prototype,"maximumSignificantDigits",2);Rt=a([z("sl-format-number")],Rt);var pc=T`
  ${I}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function dt(t,e){fc(t)&&(t="100%");var i=mc(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function er(t){return Math.min(1,Math.max(0,t))}function fc(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function mc(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Na(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ir(t){return t<=1?"".concat(Number(t)*100,"%"):t}function Ae(t){return t.length===1?"0"+t:String(t)}function gc(t,e,i){return{r:dt(t,255)*255,g:dt(e,255)*255,b:dt(i,255)*255}}function Vs(t,e,i){t=dt(t,255),e=dt(e,255),i=dt(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),s=0,n=0,h=(r+o)/2;if(r===o)n=0,s=0;else{var l=r-o;switch(n=h>.5?l/(2-r-o):l/(r+o),r){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4;break}s/=6}return{h:s,s:n,l:h}}function ao(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function bc(t,e,i){var r,o,s;if(t=dt(t,360),e=dt(e,100),i=dt(i,100),e===0)o=i,s=i,r=i;else{var n=i<.5?i*(1+e):i+e-i*e,h=2*i-n;r=ao(h,n,t+1/3),o=ao(h,n,t),s=ao(h,n,t-1/3)}return{r:r*255,g:o*255,b:s*255}}function Hs(t,e,i){t=dt(t,255),e=dt(e,255),i=dt(i,255);var r=Math.max(t,e,i),o=Math.min(t,e,i),s=0,n=r,h=r-o,l=r===0?0:h/r;if(r===o)s=0;else{switch(r){case t:s=(e-i)/h+(e<i?6:0);break;case e:s=(i-t)/h+2;break;case i:s=(t-e)/h+4;break}s/=6}return{h:s,s:l,v:n}}function vc(t,e,i){t=dt(t,360)*6,e=dt(e,100),i=dt(i,100);var r=Math.floor(t),o=t-r,s=i*(1-e),n=i*(1-o*e),h=i*(1-(1-o)*e),l=r%6,d=[i,n,s,s,h,i][l],m=[h,i,i,n,s,s][l],u=[s,s,h,i,i,n][l];return{r:d*255,g:m*255,b:u*255}}function Ns(t,e,i,r){var o=[Ae(Math.round(t).toString(16)),Ae(Math.round(e).toString(16)),Ae(Math.round(i).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function yc(t,e,i,r,o){var s=[Ae(Math.round(t).toString(16)),Ae(Math.round(e).toString(16)),Ae(Math.round(i).toString(16)),Ae(_c(r))];return o&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function _c(t){return Math.round(parseFloat(t)*255).toString(16)}function js(t){return kt(t)/255}function kt(t){return parseInt(t,16)}function wc(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var So={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function xc(t){var e={r:0,g:0,b:0},i=1,r=null,o=null,s=null,n=!1,h=!1;return typeof t=="string"&&(t=Cc(t)),typeof t=="object"&&(ce(t.r)&&ce(t.g)&&ce(t.b)?(e=gc(t.r,t.g,t.b),n=!0,h=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ce(t.h)&&ce(t.s)&&ce(t.v)?(r=ir(t.s),o=ir(t.v),e=vc(t.h,r,o),n=!0,h="hsv"):ce(t.h)&&ce(t.s)&&ce(t.l)&&(r=ir(t.s),s=ir(t.l),e=bc(t.h,r,s),n=!0,h="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Na(i),{ok:n,format:t.format||h,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var kc="[-\\+]?\\d+%?",$c="[-\\+]?\\d*\\.\\d+%?",be="(?:".concat($c,")|(?:").concat(kc,")"),no="[\\s|\\(]+(".concat(be,")[,|\\s]+(").concat(be,")[,|\\s]+(").concat(be,")\\s*\\)?"),lo="[\\s|\\(]+(".concat(be,")[,|\\s]+(").concat(be,")[,|\\s]+(").concat(be,")[,|\\s]+(").concat(be,")\\s*\\)?"),Ft={CSS_UNIT:new RegExp(be),rgb:new RegExp("rgb"+no),rgba:new RegExp("rgba"+lo),hsl:new RegExp("hsl"+no),hsla:new RegExp("hsla"+lo),hsv:new RegExp("hsv"+no),hsva:new RegExp("hsva"+lo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Cc(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(So[t])t=So[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var i=Ft.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=Ft.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Ft.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=Ft.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Ft.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=Ft.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Ft.hex8.exec(t),i?{r:kt(i[1]),g:kt(i[2]),b:kt(i[3]),a:js(i[4]),format:e?"name":"hex8"}:(i=Ft.hex6.exec(t),i?{r:kt(i[1]),g:kt(i[2]),b:kt(i[3]),format:e?"name":"hex"}:(i=Ft.hex4.exec(t),i?{r:kt(i[1]+i[1]),g:kt(i[2]+i[2]),b:kt(i[3]+i[3]),a:js(i[4]+i[4]),format:e?"name":"hex8"}:(i=Ft.hex3.exec(t),i?{r:kt(i[1]+i[1]),g:kt(i[2]+i[2]),b:kt(i[3]+i[3]),format:e?"name":"hex"}:!1)))))))))}function ce(t){return!!Ft.CSS_UNIT.exec(String(t))}var qs=function(){function t(e,i){e===void 0&&(e=""),i===void 0&&(i={});var r;if(e instanceof t)return e;typeof e=="number"&&(e=wc(e)),this.originalInput=e;var o=xc(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=i.format)!==null&&r!==void 0?r:o.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),i,r,o,s=e.r/255,n=e.g/255,h=e.b/255;return s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),h<=.03928?o=h/12.92:o=Math.pow((h+.055)/1.055,2.4),.2126*i+.7152*r+.0722*o},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Na(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=Hs(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Hs(this.r,this.g,this.b),i=Math.round(e.h*360),r=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?"hsv(".concat(i,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(i,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=Vs(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=Vs(this.r,this.g,this.b),i=Math.round(e.h*360),r=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?"hsl(".concat(i,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(i,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),Ns(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),yc(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(i,", ").concat(r,")"):"rgba(".concat(e,", ").concat(i,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(i){return"".concat(Math.round(dt(i,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(i){return Math.round(dt(i,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Ns(this.r,this.g,this.b,!1),i=0,r=Object.entries(So);i<r.length;i++){var o=r[i],s=o[0],n=o[1];if(e===n)return s}return!1},t.prototype.toString=function(e){var i=!!e;e=e??this.format;var r=!1,o=this.a<1&&this.a>=0,s=!i&&o&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=er(i.l),new t(i)},t.prototype.brighten=function(e){e===void 0&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new t(i)},t.prototype.darken=function(e){e===void 0&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=er(i.l),new t(i)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=er(i.s),new t(i)},t.prototype.saturate=function(e){e===void 0&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=er(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),r=(i.h+e)%360;return i.h=r<0?360+r:r,new t(i)},t.prototype.mix=function(e,i){i===void 0&&(i=50);var r=this.toRgb(),o=new t(e).toRgb(),s=i/100,n={r:(o.r-r.r)*s+r.r,g:(o.g-r.g)*s+r.g,b:(o.b-r.b)*s+r.b,a:(o.a-r.a)*s+r.a};return new t(n)},t.prototype.analogous=function(e,i){e===void 0&&(e=6),i===void 0&&(i=30);var r=this.toHsl(),o=360/i,s=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,s.push(new t(r));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var i=this.toHsv(),r=i.h,o=i.s,s=i.v,n=[],h=1/e;e--;)n.push(new t({h:r,s:o,v:s})),s=(s+h)%1;return n},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(i.r-r.r)*i.a,g:r.g+(i.g-r.g)*i.a,b:r.b+(i.b-r.b)*i.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),r=i.h,o=[this],s=360/e,n=1;n<e;n++)o.push(new t({h:(r+n*s)%360,s:i.s,l:i.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),Ks="EyeDropper"in window,V=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this),this.isSafeValue=!1,this.localize=new K(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut)}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFocusIn(){this.hasFocus=!0,this.emit("sl-focus")}handleFocusOut(){this.hasFocus=!1,this.emit("sl-blur")}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:r}=e.getBoundingClientRect();let o=this.value;i.focus(),t.preventDefault(),Di(e,{onMove:s=>{this.alpha=at(s/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:r}=e.getBoundingClientRect();let o=this.value;i.focus(),t.preventDefault(),Di(e,{onMove:s=>{this.hue=at(s/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:r,height:o}=e.getBoundingClientRect();let s=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Di(e,{onMove:(n,h)=>{this.saturation=at(n/r*100,0,100),this.brightness=at(100-h/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=at(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=at(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=at(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=at(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=at(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=at(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=at(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=at(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new qs(t);if(!e.isValid)return null;const i=e.toHsl(),r={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),h=e.toHsv(),l={h:h.h,s:h.s*100,v:h.v*100,a:h.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Ks)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,r=100){const o=new qs(`hsva(${t}, ${e}, ${i}, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),r=w`
      <div
        part="base"
        class=${P({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?w`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${$t({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${P({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${$t({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${S(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${$t({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${S(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?w`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${$t({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${$t({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${S(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${$t({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":w`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Ks?w`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?w`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const s=this.parseColor(o);return s?w`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${S(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${$t({backgroundColor:s.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:w`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${P({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${$t({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};V.styles=pc;a([$('[part~="base"]')],V.prototype,"base",2);a([$('[part~="input"]')],V.prototype,"input",2);a([$(".color-dropdown")],V.prototype,"dropdown",2);a([$('[part~="preview"]')],V.prototype,"previewButton",2);a([$('[part~="trigger"]')],V.prototype,"trigger",2);a([R()],V.prototype,"hasFocus",2);a([R()],V.prototype,"isDraggingGridHandle",2);a([R()],V.prototype,"isEmpty",2);a([R()],V.prototype,"inputValue",2);a([R()],V.prototype,"hue",2);a([R()],V.prototype,"saturation",2);a([R()],V.prototype,"brightness",2);a([R()],V.prototype,"alpha",2);a([c()],V.prototype,"value",2);a([Me()],V.prototype,"defaultValue",2);a([c()],V.prototype,"label",2);a([c()],V.prototype,"format",2);a([c({type:Boolean,reflect:!0})],V.prototype,"inline",2);a([c()],V.prototype,"size",2);a([c({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);a([c()],V.prototype,"name",2);a([c({type:Boolean,reflect:!0})],V.prototype,"disabled",2);a([c({type:Boolean})],V.prototype,"hoist",2);a([c({type:Boolean})],V.prototype,"opacity",2);a([c({type:Boolean})],V.prototype,"uppercase",2);a([c()],V.prototype,"swatches",2);a([c({reflect:!0})],V.prototype,"form",2);a([c({type:Boolean,reflect:!0})],V.prototype,"required",2);a([x("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);a([x("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);a([x("value")],V.prototype,"handleValueChange",1);V=a([z("sl-color-picker")],V);var Sc=T`
  ${I}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Eo=class extends E{render(){return w` <slot></slot> `}};Eo.styles=Sc;Eo=a([z("sl-visually-hidden")],Eo);var Ec=T`
  ${I}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,vt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(t){var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,r,o;const s=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(o=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(s==null?void 0:s.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handlePanelSelect(t){const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),r=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(r),r.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(r=>Va(r).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await st(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=tt(this,"dropdown.show",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await st(this);const{keyframes:t,options:e}=tt(this,"dropdown.hide",{dir:this.localize.dir()});await et(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return w`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${P({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};vt.styles=Ec;a([$(".dropdown")],vt.prototype,"popup",2);a([$(".dropdown__trigger")],vt.prototype,"trigger",2);a([$(".dropdown__panel")],vt.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],vt.prototype,"open",2);a([c({reflect:!0})],vt.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);a([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],vt.prototype,"stayOpenOnSelect",2);a([c({attribute:!1})],vt.prototype,"containingElement",2);a([c({type:Number})],vt.prototype,"distance",2);a([c({type:Number})],vt.prototype,"skidding",2);a([c({type:Boolean})],vt.prototype,"hoist",2);a([x("open",{waitUntilFirstUpdate:!0})],vt.prototype,"handleOpenChange",1);vt=a([z("sl-dropdown")],vt);W("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Ac=T`
  ${I}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function vi(t){return t.split("-")[1]}function Yo(t){return t==="y"?"height":"width"}function ve(t){return t.split("-")[0]}function yi(t){return["top","bottom"].includes(ve(t))?"x":"y"}function Ws(t,e,i){let{reference:r,floating:o}=t;const s=r.x+r.width/2-o.width/2,n=r.y+r.height/2-o.height/2,h=yi(e),l=Yo(h),d=r[l]/2-o[l]/2,m=h==="x";let u;switch(ve(e)){case"top":u={x:s,y:r.y-o.height};break;case"bottom":u={x:s,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:n};break;case"left":u={x:r.x-o.width,y:n};break;default:u={x:r.x,y:r.y}}switch(vi(e)){case"start":u[h]-=d*(i&&m?-1:1);break;case"end":u[h]+=d*(i&&m?-1:1)}return u}var zc=async(t,e,i)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:n}=i,h=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:m,y:u}=Ws(d,r,l),p=r,f={},g=0;for(let b=0;b<h.length;b++){const{name:C,fn:A}=h[b],{x:y,y:k,data:v,reset:_}=await A({x:m,y:u,initialPlacement:r,placement:p,strategy:o,middlewareData:f,rects:d,platform:n,elements:{reference:t,floating:e}});m=y??m,u=k??u,f=pt(G({},f),{[C]:G(G({},f[C]),v)}),_&&g<=50&&(g++,typeof _=="object"&&(_.placement&&(p=_.placement),_.rects&&(d=_.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):_.rects),{x:m,y:u}=Ws(d,p,l)),b=-1)}return{x:m,y:u,placement:p,strategy:o,middlewareData:f}};function ja(t){return typeof t!="number"?function(e){return G({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function Ao(t){return pt(G({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function Jo(t,e){var i;e===void 0&&(e={});const{x:r,y:o,platform:s,rects:n,elements:h,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:p=!1,padding:f=0}=e,g=ja(f),b=h[p?u==="floating"?"reference":"floating":u],C=Ao(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(b)))==null||i?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(h.floating)),boundary:d,rootBoundary:m,strategy:l})),A=u==="floating"?pt(G({},n.floating),{x:r,y:o}):n.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h.floating)),k=await(s.isElement==null?void 0:s.isElement(y))&&await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1},v=Ao(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:A,offsetParent:y,strategy:l}):A);return{top:(C.top-v.top+g.top)/k.y,bottom:(v.bottom-C.bottom+g.bottom)/k.y,left:(C.left-v.left+g.left)/k.x,right:(v.right-C.right+g.right)/k.x}}var zo=Math.min,Ce=Math.max;function To(t,e,i){return Ce(t,zo(e,i))}var Tc=t=>({name:"arrow",options:t,async fn(e){const{element:i,padding:r=0}=t||{},{x:o,y:s,placement:n,rects:h,platform:l}=e;if(i==null)return{};const d=ja(r),m={x:o,y:s},u=yi(n),p=Yo(u),f=await l.getDimensions(i),g=u==="y"?"top":"left",b=u==="y"?"bottom":"right",C=h.reference[p]+h.reference[u]-m[u]-h.floating[p],A=m[u]-h.reference[u],y=await(l.getOffsetParent==null?void 0:l.getOffsetParent(i));let k=y?u==="y"?y.clientHeight||0:y.clientWidth||0:0;k===0&&(k=h.floating[p]);const v=C/2-A/2,_=d[g],O=k-f[p]-d[b],M=k/2-f[p]/2+v,B=To(_,M,O),D=vi(n)!=null&&M!=B&&h.reference[p]/2-(M<_?d[g]:d[b])-f[p]/2<0;return{[u]:m[u]-(D?M<_?_-M:O-M:0),data:{[u]:B,centerOffset:M-B}}}}),Oc=["top","right","bottom","left"];Oc.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Ic={left:"right",right:"left",bottom:"top",top:"bottom"};function $r(t){return t.replace(/left|right|bottom|top/g,e=>Ic[e])}function Lc(t,e,i){i===void 0&&(i=!1);const r=vi(t),o=yi(t),s=Yo(o);let n=o==="x"?r===(i?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=$r(n)),{main:n,cross:$r(n)}}var Dc={start:"end",end:"start"};function co(t){return t.replace(/start|end/g,e=>Dc[e])}var Pc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i;const{placement:r,middlewareData:o,rects:s,initialPlacement:n,platform:h,elements:l}=e,d=t,{mainAxis:m=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0}=d,C=qo(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),A=ve(r),y=ve(n)===n,k=await(h.isRTL==null?void 0:h.isRTL(l.floating)),v=p||(y||!b?[$r(n)]:function(Q){const ct=$r(Q);return[co(Q),ct,co(ct)]}(n));p||g==="none"||v.push(...function(Q,ct,Tt,xt){const Xt=vi(Q);let Ot=function(wi,Hr,vn){const rs=["left","right"],os=["right","left"],yn=["top","bottom"],_n=["bottom","top"];switch(wi){case"top":case"bottom":return vn?Hr?os:rs:Hr?rs:os;case"left":case"right":return Hr?yn:_n;default:return[]}}(ve(Q),Tt==="start",xt);return Xt&&(Ot=Ot.map(wi=>wi+"-"+Xt),ct&&(Ot=Ot.concat(Ot.map(co)))),Ot}(n,b,g,k));const _=[n,...v],O=await Jo(e,C),M=[];let B=((i=o.flip)==null?void 0:i.overflows)||[];if(m&&M.push(O[A]),u){const{main:Q,cross:ct}=Lc(r,s,k);M.push(O[Q],O[ct])}if(B=[...B,{placement:r,overflows:M}],!M.every(Q=>Q<=0)){var D,L;const Q=(((D=o.flip)==null?void 0:D.index)||0)+1,ct=_[Q];if(ct)return{data:{index:Q,overflows:B},reset:{placement:ct}};let Tt=(L=B.filter(xt=>xt.overflows[0]<=0).sort((xt,Xt)=>xt.overflows[1]-Xt.overflows[1])[0])==null?void 0:L.placement;if(!Tt)switch(f){case"bestFit":{var wt;const xt=(wt=B.map(Xt=>[Xt.placement,Xt.overflows.filter(Ot=>Ot>0).reduce((Ot,wi)=>Ot+wi,0)]).sort((Xt,Ot)=>Xt[1]-Ot[1])[0])==null?void 0:wt[0];xt&&(Tt=xt);break}case"initialPlacement":Tt=n}if(r!==Tt)return{reset:{placement:Tt}}}return{}}}},Rc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:i,y:r}=e,o=await async function(s,n){const{placement:h,platform:l,elements:d}=s,m=await(l.isRTL==null?void 0:l.isRTL(d.floating)),u=ve(h),p=vi(h),f=yi(h)==="x",g=["left","top"].includes(u)?-1:1,b=m&&f?-1:1,C=typeof n=="function"?n(s):n;let{mainAxis:A,crossAxis:y,alignmentAxis:k}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:G({mainAxis:0,crossAxis:0,alignmentAxis:null},C);return p&&typeof k=="number"&&(y=p==="end"?-1*k:k),f?{x:y*b,y:A*g}:{x:A*g,y:y*b}}(e,t);return{x:i+o.x,y:r+o.y,data:o}}}};function Mc(t){return t==="x"?"y":"x"}var Fc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:o}=e,s=t,{mainAxis:n=!0,crossAxis:h=!1,limiter:l={fn:A=>{let{x:y,y:k}=A;return{x:y,y:k}}}}=s,d=qo(s,["mainAxis","crossAxis","limiter"]),m={x:i,y:r},u=await Jo(e,d),p=yi(ve(o)),f=Mc(p);let g=m[p],b=m[f];if(n){const A=p==="y"?"bottom":"right";g=To(g+u[p==="y"?"top":"left"],g,g-u[A])}if(h){const A=f==="y"?"bottom":"right";b=To(b+u[f==="y"?"top":"left"],b,b-u[A])}const C=l.fn(pt(G({},e),{[p]:g,[f]:b}));return pt(G({},C),{data:{x:C.x-i,y:C.y-r}})}}},Gs=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:r,platform:o,elements:s}=e,n=t,{apply:h=()=>{}}=n,l=qo(n,["apply"]),d=await Jo(e,l),m=ve(i),u=vi(i),p=yi(i)==="x",{width:f,height:g}=r.floating;let b,C;m==="top"||m==="bottom"?(b=m,C=u===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(C=m,b=u==="end"?"top":"bottom");const A=g-d[b],y=f-d[C];let k=A,v=y;if(p?v=zo(f-d.right-d.left,y):k=zo(g-d.bottom-d.top,A),!e.middlewareData.shift&&!u){const O=Ce(d.left,0),M=Ce(d.right,0),B=Ce(d.top,0),D=Ce(d.bottom,0);p?v=f-2*(O!==0||M!==0?O+M:Ce(d.left,d.right)):k=g-2*(B!==0||D!==0?B+D:Ce(d.top,d.bottom))}await h(pt(G({},e),{availableWidth:v,availableHeight:k}));const _=await o.getDimensions(s.floating);return f!==_.width||g!==_.height?{reset:{rects:!0}}:{}}}};function St(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ie(t){return St(t).getComputedStyle(t)}var Xs=Math.min,Pi=Math.max,Cr=Math.round;function qa(t){const e=ie(t);let i=parseFloat(e.width),r=parseFloat(e.height);const o=t.offsetWidth,s=t.offsetHeight,n=Cr(i)!==o||Cr(r)!==s;return n&&(i=o,r=s),{width:i,height:r,fallback:n}}function we(t){return Wa(t)?(t.nodeName||"").toLowerCase():""}var rr;function Ka(){if(rr)return rr;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(rr=t.brands.map(e=>e.brand+"/"+e.version).join(" "),rr):navigator.userAgent}function re(t){return t instanceof St(t).HTMLElement}function jt(t){return t instanceof St(t).Element}function Wa(t){return t instanceof St(t).Node}function Ys(t){return typeof ShadowRoot>"u"?!1:t instanceof St(t).ShadowRoot||t instanceof ShadowRoot}function Br(t){const{overflow:e,overflowX:i,overflowY:r,display:o}=ie(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+i)&&!["inline","contents"].includes(o)}function Bc(t){return["table","td","th"].includes(we(t))}function Oo(t){const e=/firefox/i.test(Ka()),i=ie(t),r=i.backdropFilter||i.WebkitBackdropFilter;return i.transform!=="none"||i.perspective!=="none"||!!r&&r!=="none"||e&&i.willChange==="filter"||e&&!!i.filter&&i.filter!=="none"||["transform","perspective"].some(o=>i.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const s=i.contain;return s!=null&&s.includes(o)})}function Io(){return/^((?!chrome|android).)*safari/i.test(Ka())}function Qo(t){return["html","body","#document"].includes(we(t))}function Ga(t){return jt(t)?t:t.contextElement}var Xa={x:1,y:1};function We(t){const e=Ga(t);if(!re(e))return Xa;const i=e.getBoundingClientRect(),{width:r,height:o,fallback:s}=qa(e);let n=(s?Cr(i.width):i.width)/r,h=(s?Cr(i.height):i.height)/o;return n&&Number.isFinite(n)||(n=1),h&&Number.isFinite(h)||(h=1),{x:n,y:h}}function Pe(t,e,i,r){var o,s;e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),h=Ga(t);let l=Xa;e&&(r?jt(r)&&(l=We(r)):l=We(t));const d=h?St(h):window,m=Io()&&i;let u=(n.left+(m&&((o=d.visualViewport)==null?void 0:o.offsetLeft)||0))/l.x,p=(n.top+(m&&((s=d.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,f=n.width/l.x,g=n.height/l.y;if(h){const b=St(h),C=r&&jt(r)?St(r):r;let A=b.frameElement;for(;A&&r&&C!==b;){const y=We(A),k=A.getBoundingClientRect(),v=getComputedStyle(A);k.x+=(A.clientLeft+parseFloat(v.paddingLeft))*y.x,k.y+=(A.clientTop+parseFloat(v.paddingTop))*y.y,u*=y.x,p*=y.y,f*=y.x,g*=y.y,u+=k.x,p+=k.y,A=St(A).frameElement}}return{width:f,height:g,top:p,right:u+f,bottom:p+g,left:u,x:u,y:p}}function ye(t){return((Wa(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ur(t){return jt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ya(t){return Pe(ye(t)).left+Ur(t).scrollLeft}function Wi(t){if(we(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ys(t)&&t.host||ye(t);return Ys(e)?e.host:e}function Ja(t){const e=Wi(t);return Qo(e)?e.ownerDocument.body:re(e)&&Br(e)?e:Ja(e)}function Ri(t,e){var i;e===void 0&&(e=[]);const r=Ja(t),o=r===((i=t.ownerDocument)==null?void 0:i.body),s=St(r);return o?e.concat(s,s.visualViewport||[],Br(r)?r:[]):e.concat(r,Ri(r))}function Js(t,e,i){let r;if(e==="viewport")r=function(n,h){const l=St(n),d=ye(n),m=l.visualViewport;let u=d.clientWidth,p=d.clientHeight,f=0,g=0;if(m){u=m.width,p=m.height;const b=Io();(!b||b&&h==="fixed")&&(f=m.offsetLeft,g=m.offsetTop)}return{width:u,height:p,x:f,y:g}}(t,i);else if(e==="document")r=function(n){const h=ye(n),l=Ur(n),d=n.ownerDocument.body,m=Pi(h.scrollWidth,h.clientWidth,d.scrollWidth,d.clientWidth),u=Pi(h.scrollHeight,h.clientHeight,d.scrollHeight,d.clientHeight);let p=-l.scrollLeft+Ya(n);const f=-l.scrollTop;return ie(d).direction==="rtl"&&(p+=Pi(h.clientWidth,d.clientWidth)-m),{width:m,height:u,x:p,y:f}}(ye(t));else if(jt(e))r=function(n,h){const l=Pe(n,!0,h==="fixed"),d=l.top+n.clientTop,m=l.left+n.clientLeft,u=re(n)?We(n):{x:1,y:1};return{width:n.clientWidth*u.x,height:n.clientHeight*u.y,x:m*u.x,y:d*u.y}}(e,i);else{const n=G({},e);if(Io()){var o,s;const h=St(t);n.x-=((o=h.visualViewport)==null?void 0:o.offsetLeft)||0,n.y-=((s=h.visualViewport)==null?void 0:s.offsetTop)||0}r=n}return Ao(r)}function Qs(t,e){return re(t)&&ie(t).position!=="fixed"?e?e(t):t.offsetParent:null}function Zs(t,e){const i=St(t);let r=Qs(t,e);for(;r&&Bc(r)&&ie(r).position==="static";)r=Qs(r,e);return r&&(we(r)==="html"||we(r)==="body"&&ie(r).position==="static"&&!Oo(r))?i:r||function(o){let s=Wi(o);for(;re(s)&&!Qo(s);){if(Oo(s))return s;s=Wi(s)}return null}(t)||i}function Uc(t,e,i){const r=re(e),o=ye(e),s=Pe(t,!0,i==="fixed",e);let n={scrollLeft:0,scrollTop:0};const h={x:0,y:0};if(r||!r&&i!=="fixed")if((we(e)!=="body"||Br(o))&&(n=Ur(e)),re(e)){const l=Pe(e,!0);h.x=l.x+e.clientLeft,h.y=l.y+e.clientTop}else o&&(h.x=Ya(o));return{x:s.left+n.scrollLeft-h.x,y:s.top+n.scrollTop-h.y,width:s.width,height:s.height}}var cr={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:r,strategy:o}=t;const s=i==="clippingAncestors"?function(d,m){const u=m.get(d);if(u)return u;let p=Ri(d).filter(C=>jt(C)&&we(C)!=="body"),f=null;const g=ie(d).position==="fixed";let b=g?Wi(d):d;for(;jt(b)&&!Qo(b);){const C=ie(b),A=Oo(b);C.position==="fixed"?f=null:(g?A||f:A||C.position!=="static"||!f||!["absolute","fixed"].includes(f.position))?f=C:p=p.filter(y=>y!==b),b=Wi(b)}return m.set(d,p),p}(e,this._c):[].concat(i),n=[...s,r],h=n[0],l=n.reduce((d,m)=>{const u=Js(e,m,o);return d.top=Pi(u.top,d.top),d.right=Xs(u.right,d.right),d.bottom=Xs(u.bottom,d.bottom),d.left=Pi(u.left,d.left),d},Js(e,h,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:r}=t;const o=re(i),s=ye(i);if(i===s)return e;let n={scrollLeft:0,scrollTop:0},h={x:1,y:1};const l={x:0,y:0};if((o||!o&&r!=="fixed")&&((we(i)!=="body"||Br(s))&&(n=Ur(i)),re(i))){const d=Pe(i);h=We(i),l.x=d.x+i.clientLeft,l.y=d.y+i.clientTop}return{width:e.width*h.x,height:e.height*h.y,x:e.x*h.x-n.scrollLeft*h.x+l.x,y:e.y*h.y-n.scrollTop*h.y+l.y}},isElement:jt,getDimensions:function(t){return re(t)?qa(t):t.getBoundingClientRect()},getOffsetParent:Zs,getDocumentElement:ye,getScale:We,async getElementRects(t){let{reference:e,floating:i,strategy:r}=t;const o=this.getOffsetParent||Zs,s=this.getDimensions;return{reference:Uc(e,await o(i),r),floating:G({x:0,y:0},await s(i))}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>ie(t).direction==="rtl"};function Vc(t,e,i,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:n=!0,animationFrame:h=!1}=r,l=o&&!h,d=l||s?[...jt(t)?Ri(t):t.contextElement?Ri(t.contextElement):[],...Ri(e)]:[];d.forEach(f=>{l&&f.addEventListener("scroll",i,{passive:!0}),s&&f.addEventListener("resize",i)});let m,u=null;if(n){let f=!0;u=new ResizeObserver(()=>{f||i(),f=!1}),jt(t)&&!h&&u.observe(t),jt(t)||!t.contextElement||h||u.observe(t.contextElement),u.observe(e)}let p=h?Pe(t):null;return h&&function f(){const g=Pe(t);!p||g.x===p.x&&g.y===p.y&&g.width===p.width&&g.height===p.height||i(),p=g,m=requestAnimationFrame(f)}(),i(),()=>{var f;d.forEach(g=>{l&&g.removeEventListener("scroll",i),s&&g.removeEventListener("resize",i)}),(f=u)==null||f.disconnect(),u=null,h&&cancelAnimationFrame(m)}}var Hc=(t,e,i)=>{const r=new Map,o=G({platform:cr},i),s=pt(G({},o.platform),{_c:r});return zc(t,e,pt(G({},o),{platform:s}))};function Nc(t){return jc(t)}function ho(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function jc(t){for(let e=t;e;e=ho(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ho(t);e;e=ho(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||e.tagName==="BODY"))return e}return null}var X=class extends E{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Vc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Rc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Gs({apply:({rects:i})=>{const r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Pc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Fc({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Gs({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Tc({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>cr.getOffsetParent(i,Nc):cr.getOffsetParent;Hc(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:pt(G({},cr),{getOffsetParent:e})}).then(({x:i,y:r,middlewareData:o,placement:s})=>{const n=getComputedStyle(this).direction==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${i}px`,top:`${r}px`}),this.arrow){const l=o.arrow.x,d=o.arrow.y;let m="",u="",p="",f="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,f=n?g:"",p=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",m=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:m,right:u,bottom:p,left:f,[h]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${P({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};X.styles=Ac;a([$(".popup")],X.prototype,"popup",2);a([$(".popup__arrow")],X.prototype,"arrowEl",2);a([c()],X.prototype,"anchor",2);a([c({type:Boolean,reflect:!0})],X.prototype,"active",2);a([c({reflect:!0})],X.prototype,"placement",2);a([c({reflect:!0})],X.prototype,"strategy",2);a([c({type:Number})],X.prototype,"distance",2);a([c({type:Number})],X.prototype,"skidding",2);a([c({type:Boolean})],X.prototype,"arrow",2);a([c({attribute:"arrow-placement"})],X.prototype,"arrowPlacement",2);a([c({attribute:"arrow-padding",type:Number})],X.prototype,"arrowPadding",2);a([c({type:Boolean})],X.prototype,"flip",2);a([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],X.prototype,"flipFallbackPlacements",2);a([c({attribute:"flip-fallback-strategy"})],X.prototype,"flipFallbackStrategy",2);a([c({type:Object})],X.prototype,"flipBoundary",2);a([c({attribute:"flip-padding",type:Number})],X.prototype,"flipPadding",2);a([c({type:Boolean})],X.prototype,"shift",2);a([c({type:Object})],X.prototype,"shiftBoundary",2);a([c({attribute:"shift-padding",type:Number})],X.prototype,"shiftPadding",2);a([c({attribute:"auto-size"})],X.prototype,"autoSize",2);a([c()],X.prototype,"sync",2);a([c({type:Object})],X.prototype,"autoSizeBoundary",2);a([c({attribute:"auto-size-padding",type:Number})],X.prototype,"autoSizePadding",2);X=a([z("sl-popup")],X);var qc=T`
  ${I}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Wt=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1;return}await st(this.body),this.body.hidden=!1;const{keyframes:e,options:i}=tt(this,"details.show",{dir:this.localize.dir()});await et(this.body,wr(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.open=!0;return}await st(this.body);const{keyframes:e,options:i}=tt(this,"details.hide",{dir:this.localize.dir()});await et(this.body,wr(e,this.body.scrollHeight),i),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,bt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        class=${P({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <div
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </div>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </div>
    `}};Wt.styles=qc;a([$(".details")],Wt.prototype,"details",2);a([$(".details__header")],Wt.prototype,"header",2);a([$(".details__body")],Wt.prototype,"body",2);a([$(".details__expand-icon-slot")],Wt.prototype,"expandIconSlot",2);a([c({type:Boolean,reflect:!0})],Wt.prototype,"open",2);a([c()],Wt.prototype,"summary",2);a([c({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);a([x("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);Wt=a([z("sl-details")],Wt);W("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});W("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Kc=T`
  ${I}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ae=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer"),this.localize=new K(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Ha(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ii(this))}disconnectedCallback(){super.disconnectedCallback(),Li(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=tt(this,"dialog.denyClose",{dir:this.localize.dir()});et(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ii(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([st(this.dialog),st(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=tt(this,"dialog.show",{dir:this.localize.dir()}),i=tt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([et(this.panel,e.keyframes,e.options),et(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([st(this.dialog),st(this.overlay)]);const t=tt(this,"dialog.hide",{dir:this.localize.dir()}),e=tt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([et(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),et(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Li(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${P({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${S(this.noHeader?this.label:void 0)}
          aria-labelledby=${S(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ae.styles=Kc;a([$(".dialog")],ae.prototype,"dialog",2);a([$(".dialog__panel")],ae.prototype,"panel",2);a([$(".dialog__overlay")],ae.prototype,"overlay",2);a([c({type:Boolean,reflect:!0})],ae.prototype,"open",2);a([c({reflect:!0})],ae.prototype,"label",2);a([c({attribute:"no-header",type:Boolean,reflect:!0})],ae.prototype,"noHeader",2);a([x("open",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpenChange",1);ae=a([z("sl-dialog")],ae);W("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});W("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Wc=T`
  ${I}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Gi=class extends E{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Gi.styles=Wc;a([c({type:Boolean,reflect:!0})],Gi.prototype,"vertical",2);a([x("vertical")],Gi.prototype,"handleVerticalChange",1);Gi=a([z("sl-divider")],Gi);var Gc=T`
  ${I}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ta=Symbol(),Xc=t=>(e,i,r)=>{const o=r.value;r.value=function(...s){clearTimeout(this[ta]),this[ta]=window.setTimeout(()=>{o.apply(this,s)},t)}},Qa=class{constructor(t){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.host=t,t.addController(this),this.handleScroll=this.handleScroll.bind(this),this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this)}async hostConnected(){const t=this.host;await t.updateComplete;const e=t.scrollContainer;e.addEventListener("scroll",this.handleScroll,{passive:!0}),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerUp),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),e.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const e=this.host.scrollContainer;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp),e.removeEventListener("touchstart",this.handleTouchStart),e.removeEventListener("touchend",this.handleTouchEnd)}handleScroll(){this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handlePointerDown(t){if(t.pointerType==="touch")return;this.pointers.add(t.pointerId),this.mouseDragging&&!this.dragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))}handlePointerMove(t){const e=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(e.setPointerCapture(t.pointerId),this.handleDragStart()):e.hasPointerCapture(t.pointerId)&&this.handleDrag(t)}handlePointerUp(t){this.pointers.delete(t.pointerId),this.host.scrollContainer.releasePointerCapture(t.pointerId),this.pointers.size===0&&this.handleDragEnd()}handleTouchEnd(t){for(const e of t.changedTouches)this.pointers.delete(e.identifier)}handleTouchStart(t){for(const e of t.touches)this.pointers.add(e.identifier)}handleDragStart(){const t=this.host;this.dragging=!0,t.scrollContainer.style.setProperty("scroll-snap-type","unset"),t.requestUpdate()}handleDrag(t){this.host.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY})}async handleDragEnd(){const t=this.host,e=t.scrollContainer;e.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const i=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type");const o=e.scrollLeft,s=e.scrollTop;e.style.setProperty("scroll-snap-type","unset"),e.scrollTo({left:i,top:r,behavior:"auto"}),e.scrollTo({left:o,top:s,behavior:Xo()?"auto":"smooth"}),this.scrolling&&await bt(e,"scrollend"),e.style.removeProperty("scroll-snap-type"),t.requestUpdate()}};a([Xc(100)],Qa.prototype,"handleScrollEnd",1);var Yc=T`
  ${I}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Sr=class extends E{static isCarouselItem(t){return t instanceof Element&&t.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return w` <slot></slot> `}};Sr.styles=Yc;Sr=a([z("sl-carousel-item")],Sr);var Jc=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*Qc(t,e){if(t!==void 0){let i=0;for(const r of t)yield e(r,i++)}}function*Zc(t,e,i=1){const r=e===void 0?0:t;e!=null||(e=t);for(let o=r;i>0?o<e:e<o;o+=i)yield o}var it=class extends E{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Jc(this,()=>this.next()),this.scrollController=new Qa(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new Ra(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const t=new IntersectionObserver(e=>{e.forEach(i=>{this.intersectionObserverEntries.set(i.target,i);const r=i.target;r.toggleAttribute("inert",!i.isIntersecting),r.classList.toggle("--in-view",i.isIntersecting),r.setAttribute("aria-hidden",i.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=t,t.takeRecords().forEach(e=>{this.intersectionObserverEntries.set(e.target,e)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange.bind(this)),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.floor(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:t=!0}={}){return[...this.slides].filter(e=>!t||!e.hasAttribute("data-clone"))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",r=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",s=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),s&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var n;const h=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');h&&h.focus()})}}handleScrollEnd(){const t=this.getSlides(),i=[...this.intersectionObserverEntries.values()].find(r=>r.isIntersecting);if(this.loop&&(i!=null&&i.target.hasAttribute("data-clone"))){const r=Number(i.target.getAttribute("data-clone"));this.goToSlide(r,"auto");return}i&&(this.activeSlide=t.indexOf(i.target))}handleSlotChange(t){t.some(i=>[...i.addedNodes,...i.removedNodes].some(r=>Sr.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}initializeSlides(){const t=this.getSlides(),e=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((i,r)=>{e.unobserve(i),i.classList.remove("--in-view"),i.classList.remove("--is-active"),i.setAttribute("aria-label",this.localize.term("slideNum",r+1)),i.hasAttribute("data-clone")&&i.remove()}),this.loop){const i=this.slidesPerPage,r=t.slice(-i),o=t.slice(0,i);r.reverse().forEach((s,n)=>{const h=s.cloneNode(!0);h.setAttribute("data-clone",String(t.length-n-1)),this.prepend(h)}),o.forEach((s,n)=>{const h=s.cloneNode(!0);h.setAttribute("data-clone",String(n)),this.append(h)})}this.getSlides({excludeClones:!1}).forEach(i=>{e.observe(i)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}handleSlidesPerMoveChange(){const t=this.getSlides({excludeClones:!1}),e=this.slidesPerMove;t.forEach((i,r)=>{Math.abs(r-e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:r,scrollContainer:o}=this,s=this.getSlides(),n=this.getSlides({excludeClones:!1}),h=(t+s.length)%s.length;this.activeSlide=h;const l=at(t+(r?i:0),0,n.length-1),d=n[l],m=o.getBoundingClientRect(),u=d.getBoundingClientRect();o.scrollTo({left:u.left-m.left+o.scrollLeft,top:u.top-m.top+o.scrollTop,behavior:Xo()?"auto":e})}render(){const{scrollController:t,slidesPerPage:e}=this,i=this.getPageCount(),r=this.getCurrentPage(),o=this.loop||r>0,s=this.loop||r<i-1,n=this.localize.dir()==="ltr";return w`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${P({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?w`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${P({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${P({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?w`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Qc(Zc(i),h=>{const l=h===r;return w`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${P({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",h+1,i)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(h*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};it.styles=Gc;a([c({type:Boolean,reflect:!0})],it.prototype,"loop",2);a([c({type:Boolean,reflect:!0})],it.prototype,"navigation",2);a([c({type:Boolean,reflect:!0})],it.prototype,"pagination",2);a([c({type:Boolean,reflect:!0})],it.prototype,"autoplay",2);a([c({type:Number,attribute:"autoplay-interval"})],it.prototype,"autoplayInterval",2);a([c({type:Number,attribute:"slides-per-page"})],it.prototype,"slidesPerPage",2);a([c({type:Number,attribute:"slides-per-move"})],it.prototype,"slidesPerMove",2);a([c()],it.prototype,"orientation",2);a([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],it.prototype,"mouseDragging",2);a([$("slot:not([name])")],it.prototype,"defaultSlot",2);a([$(".carousel__slides")],it.prototype,"scrollContainer",2);a([$(".carousel__pagination")],it.prototype,"paginationContainer",2);a([R()],it.prototype,"activeSlide",2);a([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],it.prototype,"initializeSlides",1);a([x("activeSlide")],it.prototype,"handelSlideChange",1);a([x("slidesPerMove")],it.prototype,"handleSlidesPerMoveChange",1);a([x("autoplay")],it.prototype,"handleAutoplayChange",1);a([x("mouseDragging")],it.prototype,"handleMouseDraggingChange",1);it=a([z("sl-carousel")],it);/*! Bundled license information:

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var td=T`
  ${I}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ut=class extends E{constructor(){super(...arguments),this.formControlController=new ue(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return w`
      <label
        part="base"
        class=${P({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${S(this.value)}
          .indeterminate=${Te(this.indeterminate)}
          .checked=${Te(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?w`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?w`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};ut.styles=td;a([$('input[type="checkbox"]')],ut.prototype,"input",2);a([R()],ut.prototype,"hasFocus",2);a([c()],ut.prototype,"title",2);a([c()],ut.prototype,"name",2);a([c()],ut.prototype,"value",2);a([c({reflect:!0})],ut.prototype,"size",2);a([c({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],ut.prototype,"checked",2);a([c({type:Boolean,reflect:!0})],ut.prototype,"indeterminate",2);a([Me("checked")],ut.prototype,"defaultChecked",2);a([c({reflect:!0})],ut.prototype,"form",2);a([c({type:Boolean,reflect:!0})],ut.prototype,"required",2);a([x("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);a([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ut.prototype,"handleStateChange",1);ut=a([z("sl-checkbox")],ut);var ed=T`
  ${I}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,hi=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const t=!!this.href;return w`
      <div
        part="base"
        class=${P({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${t?w`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${S(this.target?this.target:void 0)}"
                rel=${S(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:w`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};hi.styles=ed;a([c()],hi.prototype,"href",2);a([c()],hi.prototype,"target",2);a([c()],hi.prototype,"rel",2);hi=a([z("sl-breadcrumb-item")],hi);var id=T`
  ${I}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ui=class extends E{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Ai(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=Ai(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=Ai(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=Ai(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),r=Ai(e);r!==null&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",i===0),r.classList.toggle("sl-button-group__button--inner",i>0&&i<t.length-1),r.classList.toggle("sl-button-group__button--last",i===t.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return w`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};ui.styles=id;a([$("slot")],ui.prototype,"defaultSlot",2);a([R()],ui.prototype,"disableRole",2);a([c()],ui.prototype,"label",2);ui=a([z("sl-button-group")],ui);function Ai(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var rd=T`
  ${I}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Lo=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${P({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Lo.styles=rd;Lo=a([z("sl-card")],Lo);var od=T`
  ${I}

  :host {
    display: contents;
  }
`,Do={};jn(Do,{backInDown:()=>vd,backInLeft:()=>yd,backInRight:()=>_d,backInUp:()=>wd,backOutDown:()=>xd,backOutLeft:()=>kd,backOutRight:()=>$d,backOutUp:()=>Cd,bounce:()=>sd,bounceIn:()=>Sd,bounceInDown:()=>Ed,bounceInLeft:()=>Ad,bounceInRight:()=>zd,bounceInUp:()=>Td,bounceOut:()=>Od,bounceOutDown:()=>Id,bounceOutLeft:()=>Ld,bounceOutRight:()=>Dd,bounceOutUp:()=>Pd,easings:()=>Xh,fadeIn:()=>Rd,fadeInBottomLeft:()=>Md,fadeInBottomRight:()=>Fd,fadeInDown:()=>Bd,fadeInDownBig:()=>Ud,fadeInLeft:()=>Vd,fadeInLeftBig:()=>Hd,fadeInRight:()=>Nd,fadeInRightBig:()=>jd,fadeInTopLeft:()=>qd,fadeInTopRight:()=>Kd,fadeInUp:()=>Wd,fadeInUpBig:()=>Gd,fadeOut:()=>Xd,fadeOutBottomLeft:()=>Yd,fadeOutBottomRight:()=>Jd,fadeOutDown:()=>Qd,fadeOutDownBig:()=>Zd,fadeOutLeft:()=>th,fadeOutLeftBig:()=>eh,fadeOutRight:()=>ih,fadeOutRightBig:()=>rh,fadeOutTopLeft:()=>oh,fadeOutTopRight:()=>sh,fadeOutUp:()=>ah,fadeOutUpBig:()=>nh,flash:()=>ad,flip:()=>lh,flipInX:()=>ch,flipInY:()=>dh,flipOutX:()=>hh,flipOutY:()=>uh,headShake:()=>nd,heartBeat:()=>ld,hinge:()=>Ph,jackInTheBox:()=>Rh,jello:()=>cd,lightSpeedInLeft:()=>ph,lightSpeedInRight:()=>fh,lightSpeedOutLeft:()=>mh,lightSpeedOutRight:()=>gh,pulse:()=>dd,rollIn:()=>Mh,rollOut:()=>Fh,rotateIn:()=>bh,rotateInDownLeft:()=>vh,rotateInDownRight:()=>yh,rotateInUpLeft:()=>_h,rotateInUpRight:()=>wh,rotateOut:()=>xh,rotateOutDownLeft:()=>kh,rotateOutDownRight:()=>$h,rotateOutUpLeft:()=>Ch,rotateOutUpRight:()=>Sh,rubberBand:()=>hd,shake:()=>ud,shakeX:()=>pd,shakeY:()=>fd,slideInDown:()=>Eh,slideInLeft:()=>Ah,slideInRight:()=>zh,slideInUp:()=>Th,slideOutDown:()=>Oh,slideOutLeft:()=>Ih,slideOutRight:()=>Lh,slideOutUp:()=>Dh,swing:()=>md,tada:()=>gd,wobble:()=>bd,zoomIn:()=>Bh,zoomInDown:()=>Uh,zoomInLeft:()=>Vh,zoomInRight:()=>Hh,zoomInUp:()=>Nh,zoomOut:()=>jh,zoomOutDown:()=>qh,zoomOutLeft:()=>Kh,zoomOutRight:()=>Wh,zoomOutUp:()=>Gh});var sd=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],ad=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],nd=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],ld=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],cd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],dd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],hd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ud=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],pd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],fd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],md=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],gd=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],bd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vd=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],yd=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],_d=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],wd=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],xd=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],kd=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],$d=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Cd=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Sd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ed=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ad=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],zd=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Td=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Od=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Id=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Ld=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Dd=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Pd=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Rd=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Md=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fd=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Bd=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ud=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Vd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hd=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Nd=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jd=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qd=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kd=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Wd=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gd=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xd=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Yd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Jd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Qd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Zd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],th=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],eh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],ih=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],rh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],oh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],sh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],ah=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],nh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],lh=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ch=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],dh=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],hh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],uh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],ph=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],fh=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],mh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],gh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],bh=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vh=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],yh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],_h=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],wh=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],xh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],kh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],$h=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ch=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Sh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Eh=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ah=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],zh=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Th=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Oh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Ih=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Lh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Dh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Ph=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Rh=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Mh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Bh=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Uh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Vh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Hh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Nh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],jh=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],qh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Kh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],Wh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Gh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},nt=class extends E{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,this.emit("sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=Do.easings[this.easing])!=null?t:this.easing,r=(e=this.keyframes)!=null?e:Do[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!r?!1:(this.destroyAnimation(),this.animation=s.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return w` <slot @slotchange=${this.handleSlotChange}></slot> `}};nt.styles=od;a([fl("slot")],nt.prototype,"defaultSlot",2);a([c()],nt.prototype,"name",2);a([c({type:Boolean,reflect:!0})],nt.prototype,"play",2);a([c({type:Number})],nt.prototype,"delay",2);a([c()],nt.prototype,"direction",2);a([c({type:Number})],nt.prototype,"duration",2);a([c()],nt.prototype,"easing",2);a([c({attribute:"end-delay",type:Number})],nt.prototype,"endDelay",2);a([c()],nt.prototype,"fill",2);a([c({type:Number})],nt.prototype,"iterations",2);a([c({attribute:"iteration-start",type:Number})],nt.prototype,"iterationStart",2);a([c({attribute:!1})],nt.prototype,"keyframes",2);a([c({attribute:"playback-rate",type:Number})],nt.prototype,"playbackRate",2);a([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],nt.prototype,"handleAnimationChange",1);a([x("play")],nt.prototype,"handlePlayChange",1);a([x("playbackRate")],nt.prototype,"handlePlaybackRateChange",1);nt=a([z("sl-animation")],nt);var Yh=T`
  ${I}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,pi=class extends E{constructor(){super(...arguments),this.localize=new K(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const r=e.querySelector('[slot="separator"]');r===null?e.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),w`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};pi.styles=Yh;a([$("slot")],pi.prototype,"defaultSlot",2);a([$('slot[name="separator"]')],pi.prototype,"separatorSlot",2);a([c()],pi.prototype,"label",2);pi=a([z("sl-breadcrumb")],pi);var Jh=T`
  ${I}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,ne=class extends E{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=w`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=w``;return this.initials?e=w`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=w`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <sl-icon name="person-fill" library="system"></sl-icon>
        </slot>
      `,w`
      <div
        part="base"
        class=${P({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};ne.styles=Jh;a([R()],ne.prototype,"hasError",2);a([c()],ne.prototype,"image",2);a([c()],ne.prototype,"label",2);a([c()],ne.prototype,"initials",2);a([c()],ne.prototype,"loading",2);a([c({reflect:!0})],ne.prototype,"shape",2);a([x("image")],ne.prototype,"handleImageChange",1);ne=a([z("sl-avatar")],ne);var Qh=T`
  ${I}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Gt=class extends E{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return w`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?w`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Gt.styles=Qh;a([$(".animated-image__animated")],Gt.prototype,"animatedImage",2);a([R()],Gt.prototype,"frozenFrame",2);a([R()],Gt.prototype,"isLoaded",2);a([c()],Gt.prototype,"src",2);a([c()],Gt.prototype,"alt",2);a([c({type:Boolean,reflect:!0})],Gt.prototype,"play",2);a([x("play",{waitUntilFirstUpdate:!0})],Gt.prototype,"handlePlayChange",1);a([x("src")],Gt.prototype,"handleSrcChange",1);Gt=a([z("sl-animated-image")],Gt);var Zh=T`
  ${I}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Fe=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),le=class extends E{constructor(){super(...arguments),this.hasSlotController=new Mt(this,"icon","suffix"),this.localize=new K(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await st(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=tt(this,"alert.show",{dir:this.localize.dir()});await et(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await st(this.base);const{keyframes:t,options:e}=tt(this,"alert.hide",{dir:this.localize.dir()});await et(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}async toast(){return new Promise(t=>{Fe.parentElement===null&&document.body.append(Fe),Fe.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Fe.removeChild(this),t(),Fe.querySelector("sl-alert")===null&&Fe.remove()},{once:!0})})}render(){return w`
      <div
        part="base"
        class=${P({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?w`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};le.styles=Zh;a([$('[part~="base"]')],le.prototype,"base",2);a([c({type:Boolean,reflect:!0})],le.prototype,"open",2);a([c({type:Boolean,reflect:!0})],le.prototype,"closable",2);a([c({reflect:!0})],le.prototype,"variant",2);a([c({type:Number})],le.prototype,"duration",2);a([x("open",{waitUntilFirstUpdate:!0})],le.prototype,"handleOpenChange",1);a([x("duration")],le.prototype,"handleDurationChange",1);le=a([z("sl-alert")],le);W("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var tu=T`
  ${I}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,zt=class extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?_r`a`:_r`button`;return Oi`
      <${e}
        part="base"
        class=${P({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${S(t?void 0:this.disabled)}
        type=${S(t?void 0:"button")}
        href=${S(t?this.href:void 0)}
        target=${S(t?this.target:void 0)}
        download=${S(t?this.download:void 0)}
        rel=${S(t&&this.target?"noreferrer noopener":void 0)}
        role=${S(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${S(this.name)}
          library=${S(this.library)}
          src=${S(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};zt.styles=tu;a([$(".icon-button")],zt.prototype,"button",2);a([R()],zt.prototype,"hasFocus",2);a([c()],zt.prototype,"name",2);a([c()],zt.prototype,"library",2);a([c()],zt.prototype,"src",2);a([c()],zt.prototype,"href",2);a([c()],zt.prototype,"target",2);a([c()],zt.prototype,"download",2);a([c()],zt.prototype,"label",2);a([c({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);zt=a([z("sl-icon-button")],zt);var eu=T`
  ${I}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,fi=class extends E{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return w`
      <slot
        part="base"
        class=${P({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};fi.styles=eu;a([c({reflect:!0})],fi.prototype,"variant",2);a([c({type:Boolean,reflect:!0})],fi.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],fi.prototype,"pulse",2);fi=a([z("sl-badge")],fi);_o("dist/");const Vr=window.location.host==="plakait.com"?new URL("https://plakait-backend-production.up.railway.app/"):new URL("http://localhost:8000/"),iu=async(t,e,i)=>{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,content:i})},o=new URL(`/chat/${t}`,Vr);return fetch(o,r).then(s=>{if(s.ok)return s.json();throw Error("Failed Post message - Server returned a non 200 response")}).catch(()=>{throw Error("Post Chat Exception")})},ru=async t=>{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:t})},i=new URL("/game",Vr);return fetch(i,e).then(r=>{if(r.ok)return r.json();throw Error("Failed to initiate game - Server returned a non 200 response")}).catch(()=>{throw Error("Post Game Exception")})},ou=async t=>{const e={method:"GET",headers:{"Content-Type":"application/json"}},i=new URL(`/history/${t}`,Vr);return fetch(i,e).then(r=>{if(r.ok)return r.json();throw Error("Failed to Get game history - Server returned a non 200 response")}).catch(()=>{throw Error("Get History Exception")})},su=async()=>{const t={method:"GET",headers:{"Content-Type":"application/json"}},e=new URL("/",Vr);return fetch(e,t).then(i=>{if(i.ok)return i.text();throw Error("Failed to Get Root - Server returned a non 200 response")}).catch(()=>{throw Error("Get Root Exception")})},te={loading:"plakait-loading",history:"plakait-history",endMessage:"plakait-endMessage",gameId:"plakait-gameId",scenario:"plakait-scenario",name:"plakait-name"};var Xe,Ye,Je,Qe;const es=class extends EventTarget{constructor(){super(...arguments);Yt(this,Ye,null);Yt(this,Je,null);Yt(this,Qe,null)}static Instance(){return rt(this,Xe)||Jt(this,Xe,new es),rt(this,Xe)}get gameId(){return rt(this,Ye)}set gameId(i){rt(this,Ye)!==i&&(Jt(this,Ye,i),this.dispatch(te.gameId))}get scenario(){return rt(this,Je)}set scenario(i){rt(this,Je)!==i&&(Jt(this,Je,i),this.dispatch(te.scenario))}get name(){return rt(this,Qe)}set name(i){rt(this,Qe)!==i&&(Jt(this,Qe,i),this.dispatch(te.name))}get queryParams(){const i=new URLSearchParams({});return this.name&&i.set("name",this.name),this.gameId&&i.set("gameId",this.gameId),this.scenario&&i.set("scenario",this.scenario),i.toString()}dispatch(i,r){const o=new CustomEvent(i,{detail:r});this.dispatchEvent(o)}};let Ge=es;Xe=new WeakMap,Ye=new WeakMap,Je=new WeakMap,Qe=new WeakMap,Yt(Ge,Xe,void 0);var ze,Ze,ti,ei,ii;const is=class extends EventTarget{constructor(){super();Yt(this,ze,[]);Yt(this,Ze,!1);Yt(this,ti,null);Yt(this,ei,void 0);Jt(this,ei,Ge.Instance())}get history(){return rt(this,ze)}set history(i){rt(this,ze).toString()!==i.toString()&&(Jt(this,ze,i),this.checkEndMessage(),this.dispatch(te.history))}checkEndMessage(){const i=rt(this,ze).filter(r=>r.type==="Bot").at(-1);i&&i.endMessage&&(this.endMessage=i.endMessage,this.dispatch(te.endMessage))}get loaded(){return rt(this,Ze)}set loaded(i){rt(this,Ze)!==i&&(Jt(this,Ze,i),this.dispatch(te.loading))}get endMessage(){return rt(this,ti)}set endMessage(i){rt(this,ti)!==i&&(Jt(this,ti,i),this.dispatch(te.endMessage))}static Instance(){return rt(this,ii)||Jt(this,ii,new is),rt(this,ii)}async addMessage(i,r,o){const s={name:r,content:o,type:"User"};this.history=[...this.history,s];try{this.history=await iu(i,r,o)}catch{this.endMessage="Failed to add message - Server may be down"}}async getHistory(i){try{this.history=await ou(i),this.loaded=!0}catch{this.endMessage="Failed to get messages - Server may be down"}}async initGame(i){try{const r=await ru(i);this.history=r.messages,rt(this,ei).gameId=r.gameId,this.loaded=!0}catch{this.endMessage="Failed to initiate game - Server may be down"}}reset(){this.history=[],this.endMessage=null,this.loaded=!1,rt(this,ei).gameId=null}dispatch(i,r){const o=new CustomEvent(i,{detail:r});this.dispatchEvent(o)}};let dr=is;ze=new WeakMap,Ze=new WeakMap,ti=new WeakMap,ei=new WeakMap,ii=new WeakMap,Yt(dr,ii,void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},au=t=>(...e)=>({_$litDirective$:t,values:e});class nu{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,r){this._$Ct=e,this._$AM=i,this._$Ci=r}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lu=t=>t.strings===void 0,cu={},du=(t,e=cu)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Za=au(class extends nu{constructor(t){if(super(t),t.type!==Be.PROPERTY&&t.type!==Be.ATTRIBUTE&&t.type!==Be.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!lu(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Zt||e===ot)return e;const i=t.element,r=t.name;if(t.type===Be.PROPERTY){if(e===i[r])return Zt}else if(t.type===Be.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return Zt}else if(t.type===Be.ATTRIBUTE&&i.getAttribute(r)===e+"")return Zt;return du(t),e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*hu(t,e){if(t!==void 0){let i=0;for(const r of t)yield e(r,i++)}}const uu={BadMil:{userName:"Jane",oppName:"Pamela",introText:"Jane your mission is to retrieve your son Jack from your mother in law Pamela"},CarSale:{userName:"John",oppName:"Nick",introText:"John your mission is to try to buy a car for as cheap as possible"},ToiletRun:{userName:"Multiple People",oppName:"Jared",introText:"One of yous needs to go - really badly. This MacDonald's toilet is closed, and you are now confronting the store manager Jared"}};function Er(t){return t=t||[],Array.isArray(t)?t:[t]}function Ht(t){return`[Vaadin.Router] ${t}`}function pu(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Ar="module",zr="nomodule",Po=[Ar,zr];function ea(t){if(!t.match(/.+\.[m]?js$/))throw new Error(Ht(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function tn(t){if(!t||!Vt(t.path))throw new Error(Ht('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,i=["component","redirect","bundle"];if(!Re(t.action)&&!Array.isArray(t.children)&&!Re(t.children)&&!Tr(e)&&!i.some(r=>Vt(t[r])))throw new Error(Ht(`Expected route config "${t.path}" to include either "${i.join('", "')}" or "action" function but none found.`));if(e)if(Vt(e))ea(e);else if(Po.some(r=>r in e))Po.forEach(r=>r in e&&ea(e[r]));else throw new Error(Ht('Expected route bundle to include either "'+zr+'" or "'+Ar+'" keys, or both'));t.redirect&&["bundle","component"].forEach(r=>{r in t&&console.warn(Ht(`Route config "${t.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function ia(t){Er(t).forEach(e=>tn(e))}function ra(t,e){let i=document.head.querySelector('script[src="'+t+'"][async]');return i||(i=document.createElement("script"),i.setAttribute("src",t),e===Ar?i.setAttribute("type",Ar):e===zr&&i.setAttribute(zr,""),i.async=!0),new Promise((r,o)=>{i.onreadystatechange=i.onload=s=>{i.__dynamicImportLoaded=!0,r(s)},i.onerror=s=>{i.parentNode&&i.parentNode.removeChild(i),o(s)},i.parentNode===null?document.head.appendChild(i):i.__dynamicImportLoaded&&r()})}function fu(t){return Vt(t)?ra(t):Promise.race(Po.filter(e=>e in t).map(e=>ra(t[e],e)))}function Mi(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Tr(t){return typeof t=="object"&&!!t}function Re(t){return typeof t=="function"}function Vt(t){return typeof t=="string"}function en(t){const e=new Error(Ht(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const je=new class{};function mu(t){const e=t.port,i=t.protocol,s=i==="http:"&&e==="80"||i==="https:"&&e==="443"?t.hostname:t.host;return`${i}//${s}`}function oa(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t.composedPath?t.composedPath():t.path||[];for(let h=0;h<i.length;h++){const l=i[h];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){e=l;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||mu(e))!==window.location.origin)return;const{pathname:o,search:s,hash:n}=e;Mi("go",{pathname:o,search:s,hash:n})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const gu={activate(){window.document.addEventListener("click",oa)},inactivate(){window.document.removeEventListener("click",oa)}},bu=/Trident/.test(navigator.userAgent);bu&&!Re(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var i=document.createEvent("Event");return i.initEvent(t,!!e.bubbles,!!e.cancelable),i.state=e.state||null,i},window.PopStateEvent.prototype=window.Event.prototype);function sa(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:i,hash:r}=window.location;Mi("go",{pathname:e,search:i,hash:r})}const vu={activate(){window.addEventListener("popstate",sa)},inactivate(){window.removeEventListener("popstate",sa)}};var _i=ln,yu=Zo,_u=$u,wu=sn,xu=nn,rn="/",on="./",ku=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Zo(t,e){for(var i=[],r=0,o=0,s="",n=e&&e.delimiter||rn,h=e&&e.delimiters||on,l=!1,d;(d=ku.exec(t))!==null;){var m=d[0],u=d[1],p=d.index;if(s+=t.slice(o,p),o=p+m.length,u){s+=u[1],l=!0;continue}var f="",g=t[o],b=d[2],C=d[3],A=d[4],y=d[5];if(!l&&s.length){var k=s.length-1;h.indexOf(s[k])>-1&&(f=s[k],s=s.slice(0,k))}s&&(i.push(s),s="",l=!1);var v=f!==""&&g!==void 0&&g!==f,_=y==="+"||y==="*",O=y==="?"||y==="*",M=f||n,B=C||A;i.push({name:b||r++,prefix:f,delimiter:M,optional:O,repeat:_,partial:v,pattern:B?Cu(B):"[^"+pe(M)+"]+?"})}return(s||o<t.length)&&i.push(s+t.substr(o)),i}function $u(t,e){return sn(Zo(t,e))}function sn(t){for(var e=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(r,o){for(var s="",n=o&&o.encode||encodeURIComponent,h=0;h<t.length;h++){var l=t[h];if(typeof l=="string"){s+=l;continue}var d=r?r[l.name]:void 0,m;if(Array.isArray(d)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(d.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var u=0;u<d.length;u++){if(m=n(d[u],l),!e[h].test(m))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');s+=(u===0?l.prefix:l.delimiter)+m}continue}if(typeof d=="string"||typeof d=="number"||typeof d=="boolean"){if(m=n(String(d),l),!e[h].test(m))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+m+'"');s+=l.prefix+m;continue}if(l.optional){l.partial&&(s+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return s}}function pe(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Cu(t){return t.replace(/([=!:$/()])/g,"\\$1")}function an(t){return t&&t.sensitive?"":"i"}function Su(t,e){if(!e)return t;var i=t.source.match(/\((?!\?)/g);if(i)for(var r=0;r<i.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function Eu(t,e,i){for(var r=[],o=0;o<t.length;o++)r.push(ln(t[o],e,i).source);return new RegExp("(?:"+r.join("|")+")",an(i))}function Au(t,e,i){return nn(Zo(t,i),e,i)}function nn(t,e,i){i=i||{};for(var r=i.strict,o=i.start!==!1,s=i.end!==!1,n=pe(i.delimiter||rn),h=i.delimiters||on,l=[].concat(i.endsWith||[]).map(pe).concat("$").join("|"),d=o?"^":"",m=t.length===0,u=0;u<t.length;u++){var p=t[u];if(typeof p=="string")d+=pe(p),m=u===t.length-1&&h.indexOf(p[p.length-1])>-1;else{var f=p.repeat?"(?:"+p.pattern+")(?:"+pe(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?d+=pe(p.prefix)+"("+f+")?":d+="(?:"+pe(p.prefix)+"("+f+"))?":d+=pe(p.prefix)+"("+f+")"}}return s?(r||(d+="(?:"+n+")?"),d+=l==="$"?"$":"(?="+l+")"):(r||(d+="(?:"+n+"(?="+l+"))?"),m||(d+="(?="+n+"|"+l+")")),new RegExp(d,an(i))}function ln(t,e,i){return t instanceof RegExp?Su(t,e):Array.isArray(t)?Eu(t,e,i):Au(t,e,i)}_i.parse=yu;_i.compile=_u;_i.tokensToFunction=wu;_i.tokensToRegExp=xu;const{hasOwnProperty:zu}=Object.prototype,Ro=new Map;Ro.set("|false",{keys:[],pattern:/(?:)/});function aa(t){try{return decodeURIComponent(t)}catch{return t}}function Tu(t,e,i,r,o){i=!!i;const s=`${t}|${i}`;let n=Ro.get(s);if(!n){const d=[];n={keys:d,pattern:_i(t,d,{end:i,strict:t===""})},Ro.set(s,n)}const h=n.pattern.exec(e);if(!h)return null;const l=Object.assign({},o);for(let d=1;d<h.length;d++){const m=n.keys[d-1],u=m.name,p=h[d];(p!==void 0||!zu.call(l,u))&&(m.repeat?l[u]=p?p.split(m.delimiter).map(aa):[]:l[u]=p&&aa(p))}return{path:h[0],keys:(r||[]).concat(n.keys),params:l}}function cn(t,e,i,r,o){let s,n,h=0,l=t.path||"";return l.charAt(0)==="/"&&(i&&(l=l.substr(1)),i=!0),{next(d){if(t===d)return{done:!0};const m=t.__children=t.__children||t.children;if(!s&&(s=Tu(l,e,!m,r,o),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&m)for(;h<m.length;){if(!n){const p=m[h];p.parent=t;let f=s.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),n=cn(p,e.substr(f),i,s.keys,s.params)}const u=n.next(d);if(!u.done)return{done:!1,value:u.value};n=null,h++}return{done:!0}}}}function Ou(t){if(Re(t.route.action))return t.route.action(t)}function Iu(t,e){let i=e;for(;i;)if(i=i.parent,i===t)return!0;return!1}function Lu(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const i=(t.route||{}).path;return i&&(e+=` Resolution had failed on route: '${i}'`),e}function Du(t,e){const{route:i,path:r}=e;if(i&&!i.__synthetic){const o={path:r,route:i};if(!t.chain)t.chain=[];else if(i.parent){let s=t.chain.length;for(;s--&&t.chain[s].route&&t.chain[s].route!==i.parent;)t.chain.pop()}t.chain.push(o)}}class Xi{constructor(e,i={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=i.baseUrl||"",this.errorHandler=i.errorHandler,this.resolveRoute=i.resolveRoute||Ou,this.context=Object.assign({resolver:this},i.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ia(e);const i=[...Er(e)];this.root.__children=i}addRoutes(e){return ia(e),this.root.__children.push(...Er(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const i=Object.assign({},this.context,Vt(e)?{pathname:e}:e),r=cn(this.root,this.__normalizePathname(i.pathname),this.baseUrl),o=this.resolveRoute;let s=null,n=null,h=i;function l(d,m=s.value.route,u){const p=u===null&&s.value.route;return s=n||r.next(p),n=null,!d&&(s.done||!Iu(m,s.value.route))?(n=s,Promise.resolve(je)):s.done?Promise.reject(en(i)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},i,s.value),Du(h,s.value),Promise.resolve(o(h)).then(f=>f!=null&&f!==je?(h.result=f.result||f,h):l(d,m,f)))}return i.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(d=>{const m=Lu(h);if(d?console.warn(m):d=new Error(m),d.context=d.context||h,d instanceof DOMException||(d.code=d.code||500),this.errorHandler)return h.result=this.errorHandler(d),h;throw d})}static __createUrl(e,i){return new URL(e,i)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const i=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,i).href;if(r.slice(0,i.length)===i)return r.slice(i.length)}}Xi.pathToRegexp=_i;const{pathToRegexp:na}=Xi,la=new Map;function dn(t,e,i){const r=e.name||e.component;if(r&&(t.has(r)?t.get(r).push(e):t.set(r,[e])),Array.isArray(i))for(let o=0;o<i.length;o++){const s=i[o];s.parent=e,dn(t,s,s.__children||s.children)}}function ca(t,e){const i=t.get(e);if(i&&i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i&&i[0]}function da(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Pu(t,e={}){if(!(t instanceof Xi))throw new TypeError("An instance of Resolver is expected");const i=new Map;return(r,o)=>{let s=ca(i,r);if(!s&&(i.clear(),dn(i,t.root,t.root.__children),s=ca(i,r),!s))throw new Error(`Route "${r}" not found`);let n=la.get(s.fullPath);if(!n){let l=da(s),d=s.parent;for(;d;){const f=da(d);f&&(l=f.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),d=d.parent}const m=na.parse(l),u=na.tokensToFunction(m),p=Object.create(null);for(let f=0;f<m.length;f++)Vt(m[f])||(p[m[f].name]=!0);n={toPath:u,keys:p},la.set(l,n),s.fullPath=l}let h=n.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const l={},d=Object.keys(o);for(let u=0;u<d.length;u++){const p=d[u];n.keys[p]||(l[p]=o[p])}const m=e.stringifyQueryParams(l);m&&(h+=m.charAt(0)==="?"?m:`?${m}`)}return h}}let ha=[];function Ru(t){ha.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),ha=t}const Mu=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},Fu=(t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)};function ua(t,e){return t.classList.add(e),new Promise(i=>{if(Mu(t)){const r=t.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;t.setAttribute("style",`position: absolute; ${o}`),Fu(t,()=>{t.classList.remove(e),t.removeAttribute("style"),i()})}else t.classList.remove(e),i()})}const Bu=256;function uo(t){return t!=null}function Uu(t){const e=Object.assign({},t);return delete e.next,e}function Bt({pathname:t="",search:e="",hash:i="",chain:r=[],params:o={},redirectFrom:s,resolver:n},h){const l=r.map(d=>d.route);return{baseUrl:n&&n.baseUrl||"",pathname:t,search:e,hash:i,routes:l,route:h||l.length&&l[l.length-1]||null,params:o,redirectFrom:s,getUrl:(d={})=>ur(Nt.pathToRegexp.compile(hn(l))(Object.assign({},o,d)),n)}}function pa(t,e){const i=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:i}}}function Vu(t,e){e.location=Bt(t);const i=t.chain.map(r=>r.route).indexOf(t.route);return t.chain[i].element=e,e}function hr(t,e,i){if(Re(t))return t.apply(i,e)}function fa(t,e,i){return r=>{if(r&&(r.cancel||r.redirect))return r;if(i)return hr(i[t],e,i)}}function Hu(t,e){if(!Array.isArray(t)&&!Tr(t))throw new Error(Ht(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const i=Er(t);for(let r=0;r<i.length;r++)tn(i[r]),e.__children.push(i[r])}function or(t){if(t&&t.length){const e=t[0].parentNode;for(let i=0;i<t.length;i++)e.removeChild(t[i])}}function ur(t,e){const i=e.__effectiveBaseUrl;return i?e.constructor.__createUrl(t.replace(/^\//,""),i).pathname:t}function hn(t){return t.map(e=>e.path).reduce((e,i)=>i.length?e.replace(/\/$/,"")+"/"+i.replace(/^\//,""):e,"")}class Nt extends Xi{constructor(e,i){const r=document.head.querySelector("base"),o=r&&r.getAttribute("href");super([],Object.assign({baseUrl:o&&Xi.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},i)),this.resolveRoute=n=>this.__resolveRoute(n);const s=Nt.NavigationTrigger;Nt.setTriggers.apply(Nt,Object.keys(s).map(n=>s[n])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Bt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const i=e.route;let r=Promise.resolve();Re(i.children)&&(r=r.then(()=>i.children(Uu(e))).then(s=>{!uo(s)&&!Re(i.children)&&(s=i.children),Hu(s,i)}));const o={redirect:s=>pa(e,s),component:s=>{const n=document.createElement(s);return this.__createdByRouter.set(n,!0),n}};return r.then(()=>{if(this.__isLatestRender(e))return hr(i.action,[e,o],i)}).then(s=>{if(uo(s)&&(s instanceof HTMLElement||s.redirect||s===je))return s;if(Vt(i.redirect))return o.redirect(i.redirect);if(i.bundle)return fu(i.bundle).then(()=>{},()=>{throw new Error(Ht(`Bundle not found: ${i.bundle}. Check if the file name is correct`))})}).then(s=>{if(uo(s))return s;if(Vt(i.component))return o.component(i.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,i=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),i||this.__onNavigationEvent(),this.ready}render(e,i){const r=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},Vt(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(o).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const n=this.__previousContext;if(s===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=Bt(s),i&&this.__updateBrowserHistory(s,r===1),Mi("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,n),this.__previousContext=s,this.location;this.__addAppearingContent(s,n);const h=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,n),h.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw i&&this.__updateBrowserHistory(o),or(this.__outlet&&this.__outlet.children),this.location=Bt(Object.assign(o,{resolver:this})),Mi("error",Object.assign({router:this,error:s},o)),s}),this.ready}__fullyResolveChain(e,i=e){return this.__findComponentContextAfterAllRedirects(i).then(r=>{const s=r!==i?r:e,h=ur(hn(r.chain),r.resolver)===r.pathname,l=(d,m=d.route,u)=>d.next(void 0,m,u).then(p=>p===null||p===je?h?d:m.parent!==null?l(d,m.parent,p):p:p);return l(r).then(d=>{if(d===null||d===je)throw en(s);return d&&d!==je&&d!==r?this.__fullyResolveChain(s,d):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const i=e.result;return i instanceof HTMLElement?(Vu(e,i),Promise.resolve(e)):i.redirect?this.__redirect(i.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):i instanceof Error?Promise.reject(i):Promise.reject(new Error(Ht(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${pu(i)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(i=>i===this.__previousContext||i===e?i:this.__fullyResolveChain(i))}__runOnBeforeCallbacks(e){const i=this.__previousContext||{},r=i.chain||[],o=e.chain;let s=Promise.resolve();const n=()=>({cancel:!0}),h=l=>pa(e,l);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let l=0;l<Math.min(r.length,o.length)&&!(r[l].route!==o[l].route||r[l].path!==o[l].path&&r[l].element!==o[l].element||!this.__isReusableElement(r[l].element,o[l].element));l=++e.__divergedChainIndex);if(e.__skipAttach=o.length===r.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,i.result),e.__skipAttach){for(let l=o.length-1;l>=0;l--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:n},r[l]);for(let l=0;l<o.length;l++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:n,redirect:h},o[l]),r[l].element.location=Bt(e,r[l].route)}else for(let l=r.length-1;l>=e.__divergedChainIndex;l--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:n},r[l])}if(!e.__skipAttach)for(let l=0;l<o.length;l++)l<e.__divergedChainIndex?l<r.length&&r[l].element&&(r[l].element.location=Bt(e,r[l].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:n,redirect:h},o[l]),o[l].element&&(o[l].element.location=Bt(e,o[l].route)));return s.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,i,r,o){const s=Bt(i);return e.then(n=>{if(this.__isLatestRender(i))return fa("onBeforeLeave",[s,r,this],o.element)(n)}).then(n=>{if(!(n||{}).redirect)return n})}__runOnBeforeEnterCallbacks(e,i,r,o){const s=Bt(i,o.route);return e.then(n=>{if(this.__isLatestRender(i))return fa("onBeforeEnter",[s,r,this],o.element)(n)})}__isReusableElement(e,i){return e&&i?this.__createdByRouter.get(e)&&this.__createdByRouter.get(i)?e.localName===i.localName:e===i:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,i,r){if(i>Bu)throw new Error(Ht(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(i||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(Ht(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:i="",hash:r=""},o){if(window.location.pathname!==e||window.location.search!==i||window.location.hash!==r){const s=o?"replaceState":"pushState";window.history[s](null,document.title,e+i+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,i){let r=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const s=i&&i.chain[o].element;if(s)if(s.parentNode===r)e.chain[o].element=s,r=s;else break}return r}__addAppearingContent(e,i){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,i);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let o=r;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const n=e.chain[s].element;n&&(o.appendChild(n),this.__addedByRouter.set(n,!0),o===r&&this.__appearingContent.push(n),o=n)}}__removeDisappearingContent(){this.__disappearingContent&&or(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(or(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,i){if(i)for(let r=i.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const o=i.chain[r].element;if(o)try{const s=Bt(e);hr(o.onAfterLeave,[s,{},i.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&or(o.children)}}}__runOnAfterEnterCallbacks(e){for(let i=e.__divergedChainIndex;i<e.chain.length&&this.__isLatestRender(e);i++){const r=e.chain[i].element||{},o=Bt(e,e.chain[i].route);hr(r.onAfterEnter,[o,{},e.resolver],r)}}__animateIfNeeded(e){const i=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],o=[],s=e.chain;let n;for(let h=s.length;h>0;h--)if(s[h-1].route.animate){n=s[h-1].route.animate;break}if(i&&r&&n){const h=Tr(n)&&n.leave||"leaving",l=Tr(n)&&n.enter||"entering";o.push(ua(i,h)),o.push(ua(r,l))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:i,search:r,hash:o}=e?e.detail:window.location;Vt(this.__normalizePathname(i))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:i,search:r,hash:o},!0))}static setTriggers(...e){Ru(e)}urlForName(e,i){return this.__urlForName||(this.__urlForName=Pu(this)),ur(this.__urlForName(e,i),this)}urlForPath(e,i){return ur(Nt.pathToRegexp.compile(e)(i),this)}static go(e){const{pathname:i,search:r,hash:o}=Vt(e)?this.__createUrl(e,"http://a"):e;return Mi("go",{pathname:i,search:r,hash:o})}}const Nu=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,pr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ju(){function t(){return!0}return un(t)}function qu(){try{return Ku()?!0:Wu()?pr?!Gu():!ju():!1}catch{return!1}}function Ku(){return localStorage.getItem("vaadin.developmentmode.force")}function Wu(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Gu(){return!!(pr&&Object.keys(pr).map(e=>pr[e]).filter(e=>e.productionMode).length>0)}function un(t,e){if(typeof t!="function")return;const i=Nu.exec(t.toString());if(i)try{t=new Function(i[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return t(e)}window.Vaadin=window.Vaadin||{};const ma=function(t,e){if(window.Vaadin.developmentMode)return un(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=qu());function Xu(){}const Yu=function(){if(typeof ma=="function")return ma(Xu)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Yu();Nt.NavigationTrigger={POPSTATE:vu,CLICK:gu};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ju=t=>t??ot;var Qu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,pn=(t,e,i,r)=>{for(var o=r>1?void 0:r?Zu(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&Qu(e,i,o),o},fn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},F=(t,e,i)=>(fn(t,e,"read from private field"),i?i.call(t):e.get(t)),sr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ar=(t,e,i,r)=>(fn(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),lt,Y,Mo,fe;let Or=class extends ee{constructor(){super(),sr(this,lt,void 0),sr(this,Y,void 0),this.chat="",this.changeChat=t=>{const e=t.target;this.chat=e.value},this.pressChat=t=>{t.key==="Enter"&&this.chat.trim()&&(t.preventDefault(),F(this,Y).scenario==="ToiletRun"&&this.delayHistory(),F(this,Y).gameId&&F(this,Y).name&&F(this,lt).addMessage(F(this,Y).gameId,F(this,Y).name,this.chat.trim()),this.chat="")},sr(this,Mo,()=>{const t=document.documentElement.scrollHeight;setTimeout(()=>{window.scrollTo({top:t,behavior:"smooth"})},0)}),sr(this,fe,null),this.copyGameLink=()=>{navigator.clipboard.writeText(`${new URL(window.location.href).origin}/name?`+F(this,Y).queryParams)},this.resetGame=()=>{this.setupRoom(),F(this,lt).reset()},ar(this,lt,dr.Instance()),ar(this,Y,Ge.Instance())}async getHistory(){F(this,Y).scenario==="ToiletRun"&&this.delayHistory(),F(this,Y).gameId&&await F(this,lt).getHistory(F(this,Y).gameId)}delayHistory(){F(this,fe)&&(window.clearInterval(F(this,fe)),ar(this,fe,null)),window.setTimeout(()=>{ar(this,fe,window.setInterval(async()=>{F(this,Y).gameId&&await F(this,lt).getHistory(F(this,Y).gameId)},3e3))})}connectedCallback(){super.connectedCallback(),F(this,lt).reset(),this.setupRoom(),F(this,lt).addEventListener(te.loading,()=>this.requestUpdate()),F(this,lt).addEventListener(te.endMessage,()=>this.requestUpdate()),F(this,lt).addEventListener(te.history,()=>{this.requestUpdate(),F(this,Mo).call(this)})}disconnectedCallback(){super.disconnectedCallback(),F(this,fe)&&window.clearInterval(F(this,fe))}async setupRoom(){const t=new URLSearchParams(window.location.search);if(t.get("gameId")&&(F(this,Y).gameId=t.get("gameId")),t.get("scenario")&&(F(this,Y).scenario=t.get("scenario")),t.get("name")&&(F(this,Y).name=t.get("name")),!F(this,Y).name||!F(this,Y).scenario){Nt.go({pathname:"/",search:F(this,Y).queryParams});return}F(this,Y).gameId||await F(this,lt).initGame(F(this,Y).scenario),await this.getHistory()}reactionFace(){const t=F(this,lt).history.filter(e=>e.type==="Bot").at(-1);return t?t.expression:null}render(){if(!F(this,Y).scenario)return null;const t=uu[F(this,Y).scenario],e=this.reactionFace();return Ut`
      <div class="inner">
        <div class="row-container">
          <h1>Plakait</h1>
        </div>
        ${F(this,Y).scenario==="ToiletRun"?Ut`<div class="row-container">
              <sl-button @click=${this.copyGameLink}>Copy Link</sl-button>
            </div>`:null}
        <div class="row-container">
          <h2>${t.introText}</h2>
        </div>
        <div class="container2">
          <message-list>
            ${hu(F(this,lt).history.filter(i=>i.content),i=>{const r=i.type==="User";return Ut`<message-bubble
                  ?bot=${!r}
                  ?user=${r}
                  name=${Ju(r?i.name:t.oppName)}
                  >${i.content}
                </message-bubble>`})}
          </message-list>
        </div>
        <div class="row-container">
          ${F(this,lt).endMessage?Ut`<h3>${F(this,lt).endMessage}</h3>`:null}
        </div>
        <div class="reaction-container">
          ${e?Ut`
                <div class="opp-name">${t.oppName}</div>
                <div class="opp-expression">${e}</div>
              `:null}
        </div>
        <div class="input-container">
          <sl-input
            size="medium"
            @input=${this.changeChat}
            @keypress=${this.pressChat}
            enterkeyhint="send"
            .value=${Za(this.chat)}
            ?disabled=${!F(this,lt).loaded}
            placeholder="Action/Dialogue"
          >
            <sl-spinner ?completed=${F(this,lt).loaded} slot="suffix"></sl-spinner>
          </sl-input>
        </div>
      </div>
    `}};lt=new WeakMap;Y=new WeakMap;Mo=new WeakMap;fe=new WeakMap;Or.styles=mi`
    :host {
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-medium);
      font-weight: var(--sl-font-weight-normal);

      max-width: 800px;
      min-height: 100%;
    }

    h1 {
      background: linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .row-container {
      display: flex;
      justify-content: center;
      text-align: center;
    }

    .inner {
      padding: 0 1em;

      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    sl-input {
      width: 80%;
    }

    sl-spinner {
      transition-property: all;
      transition-duration: 0.5s;
    }

    sl-spinner[completed] {
      opacity: 0;
    }

    sl-input::part(base) {
      transition-property: all;
      transition-duration: 0.5s;
    }

    message-list {
      flex-grow: 1;
    }

    .reaction-container {
      display: flex;
      align-self: stretch;
      flex-grow: 1;
      flex-direction: column;

      place-content: start;
      align-items: center;

      margin-bottom: 2em;
    }

    .reaction-container .opp-name {
      font-size: var(--sl-font-size-x-large);
    }

    .reaction-container .opp-expression {
      font-size: var(--sl-font-size-3x-large);
    }

    .input-container {
      display: flex;
      align-self: stretch;

      justify-content: center;
      align-items: flex-end;
      align-content: center;
      margin-bottom: 2em;
    }

    .face {
      font-size: 40px;
    }

    message-list {
      max-width: 100%;
    }

    .container2 {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
    }

    .face-container {
      align-self: flex-end;
    }

    .face-container-left {
      margin-right: 30px;
    }

    .face-container-right {
      margin-left: 30px;
    }

    .action-button-container {
      margin-top: 10px;
    }

    .restart {
      margin-top: 30px;
    }
  `;pn([bi({type:String})],Or.prototype,"chat",2);Or=pn([gi("game-page")],Or);const Fi=new Nt(document.getElementById("main"));Fi.setRoutes([{path:"/",component:"landing-page"},{path:"/game(/?)(\\?.*)?",component:"game-page"},{path:"/name",component:"name-page"},{path:"(.*)",component:"not-found-page"}]);var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ts=(t,e,i,r)=>{for(var o=r>1?void 0:r?ep(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&tp(e,i,o),o},mn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},He=(t,e,i)=>(mn(t,e,"read from private field"),i?i.call(t):e.get(t)),ga=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fo=(t,e,i,r)=>(mn(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),ip=(t,e,i,r)=>({set _(o){Fo(t,e,o,i)},get _(){return He(t,e,r)}}),Se,zi;let Yi=class extends ee{constructor(){super(...arguments),this.backend="Fetching",this.progress=1,ga(this,Se,null),ga(this,zi,0)}connectedCallback(){super.connectedCallback(),this.checkBackend(),Fo(this,zi,0),Fo(this,Se,setInterval(()=>{ip(this,zi)._++,this.progress=-5e3/(He(this,zi)+50)+100},50))}async checkBackend(){su().then(()=>{this.backend="Up",this.progress=100,He(this,Se)&&clearInterval(He(this,Se))}).catch(()=>{this.backend="Down",He(this,Se)&&clearInterval(He(this,Se))})}render(){return Ut`
      <h1>Plakait</h1>
      <h2>a dialogue game.</h2>
      <div>
        <nav>
          <sl-button
            ?disabled=${this.backend!=="Up"}
            ?up=${this.backend==="Up"}
            ?down=${this.backend==="Down"}
            href=${Fi.urlForPath("/game/?name=Jane&scenario=BadMil")}
            variant="primary"
          >
            Bad Mother In Law
          </sl-button>
        </nav>
        <nav>
          <sl-button
            ?disabled=${this.backend!=="Up"}
            ?up=${this.backend==="Up"}
            ?down=${this.backend==="Down"}
            href=${Fi.urlForPath("/game/?name=John&scenario=CarSale")}
            variant="success"
          >
            Sleazy Car Salesman
          </sl-button>
        </nav>
        <nav>
          <sl-button
            ?disabled=${this.backend!=="Up"}
            ?up=${this.backend==="Up"}
            ?down=${this.backend==="Down"}
            href=${Fi.urlForPath("/name/?scenario=ToiletRun")}
            variant="danger"
          >
            Toilet Run (Multiplayer)
          </sl-button>
        </nav>
      </div>
      <div class="progress-container">
        <sl-progress-bar
          ?up=${this.backend==="Up"}
          ?down=${this.backend==="Down"}
          value=${this.progress}
        ></sl-progress-bar>
      </div>
    `}};Se=new WeakMap;zi=new WeakMap;Yi.styles=mi`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;

      margin: 0 auto;
      padding: 2rem;
    }

    .progress-container {
      margin-top: 1em;
      width: 90%;
    }

    sl-progress-bar[up] {
      --indicator-color: var(--sl-color-success-500);
    }

    sl-progress-bar[down] {
      --indicator-color: var(--sl-color-danger-500);
    }

    sl-button::part(base) {
      transition-property: all;
      transition-duration: 1s;
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }

    nav {
      display: flex;
      place-items: center;
      justify-content: center;
      padding: 0.5em 0;
    }

    h1 {
      background: linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    sl-button {
      width: 100%;
    }
  `;ts([bi({type:String})],Yi.prototype,"backend",2);ts([bi({type:Number})],Yi.prototype,"progress",2);Yi=ts([gi("landing-page")],Yi);var rp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,gn=(t,e,i,r)=>{for(var o=r>1?void 0:r?op(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&rp(e,i,o),o},bn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$e=(t,e,i)=>(bn(t,e,"read from private field"),i?i.call(t):e.get(t)),sp=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ap=(t,e,i,r)=>(bn(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i),Qt;let Ir=class extends ee{constructor(){super(),this.name="",sp(this,Qt,void 0),this.changeChat=t=>{const e=t.target;this.name=e.value},this.pressChat=t=>{t.key==="Enter"&&this.name.trim()&&($e(this,Qt).name=this.name.trim(),Nt.go({pathname:"/game?",search:$e(this,Qt).queryParams}))},ap(this,Qt,Ge.Instance())}connectedCallback(){super.connectedCallback();const t=new URLSearchParams(window.location.search);$e(this,Qt).scenario=t.get("scenario"),$e(this,Qt).gameId=t.get("gameId"),$e(this,Qt).scenario||Nt.go("/")}get submitName(){return this.name.trim()&&($e(this,Qt).name=this.name.trim()),Fi.urlForPath("/game?"+$e(this,Qt).queryParams)}render(){return Ut`
      <h2>Name your character</h2>
      <div>
        <sl-input
          @input=${this.changeChat}
          @keypress=${this.pressChat}
          .value=${Za(this.name)}
          placeholder="Your character's name"
        ></sl-input>
        <sl-button>
          <nav>
            <a href=${this.submitName}>Submit</a>
          </nav>
        </sl-button>
      </div>
    `}};Qt=new WeakMap;Ir.styles=mi`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    sl-input {
      width: 200px;
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: var(--sl-color-neutral-800);
    }
  `;gn([bi({type:String})],Ir.prototype,"name",2);Ir=gn([gi("name-page")],Ir);var np=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,cp=(t,e,i,r)=>{for(var o=r>1?void 0:r?lp(e,i):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,i,o):n(o))||o);return r&&o&&np(e,i,o),o};let Bo=class extends ee{render(){return Ut`<h1>404 Page</h1> `}};Bo.styles=mi`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;Bo=cp([gi("not-found-page")],Bo);
