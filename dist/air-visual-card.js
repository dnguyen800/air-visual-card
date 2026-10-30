function e(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new o(i,e,a)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&c(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const o=a?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(i)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),n=t.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=i.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=a;const o=n.fromAttribute(t,e.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(e,t,i,a=!1,n){if(void 0!==e){const o=this.constructor;if(!1===a&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??w)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,_?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=e=>e,H=x.trustedTypes,q=H?H.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+L,M=`<${E}>`,k=document,S=()=>k.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,O="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,U=/>/g,B=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),V=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),W=new WeakMap,F=k.createTreeWalker(k,129);function K(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==q?q.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,a=[];let n,o=2===t?"<svg>":3===t?"<math>":"",r=T;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===T?"!--"===l[1]?r=I:void 0!==l[1]?r=U:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=n??T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?B:'"'===l[3]?N:D):r===N||r===D?r=B:r===I||r===U?r=T:(r=B,n=void 0);const h=r===B&&e[t+1].startsWith("/>")?" ":"";o+=r===T?i+M:c>=0?(a.push(s),i.slice(0,c)+C+i.slice(c)+L+h):i+L+(-2===c?t:h)}return[K(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Y{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,o=0;const r=e.length-1,s=this.parts,[l,c]=G(e,t);if(this.el=Y.createElement(l,i),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=F.nextNode())&&s.length<r;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(C)){const t=c[o++],i=a.getAttribute(e).split(L),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?te:"?"===r[1]?ie:"@"===r[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(L)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(R.test(a.tagName)){const e=a.textContent.split(L),t=e.length-1;if(t>0){a.textContent=H?H.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],S()),F.nextNode(),s.push({type:2,index:++n});a.append(e[t],S())}}}else if(8===a.nodeType)if(a.data===E)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(L,e+1));)s.push({type:7,index:n}),e+=L.length-1}n++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,a){if(t===V)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const o=z(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=X(e,n._$AS(e,t.values),n,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??k).importNode(t,!0);F.currentNode=a;let n=F.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new Z(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(n=F.nextNode(),o++)}return F.currentNode=k,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),z(e)?e===Q||null==e||""===e?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Y(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new Z(this.O(S()),this.O(S()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,t=this,i,a){const n=this.strings;let o=!1;if(void 0===n)e=X(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const a=e;let r,s;for(e=n[0],r=0;r<n.length-1;r++)s=X(this,a[i+r],t,r),s===V&&(s=this._$AH[r]),o||=!z(s)||s!==this._$AH[r],s===Q?e=Q:e!==Q&&(e+=(s??"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class ae extends ee{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Q)===V)return;const i=this._$AH,a=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Q&&(i===Q||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const oe=x.litHtmlPolyfillSupport;oe?.(Y,Z),(x.litHtmlVersions??=[]).push("3.3.3");const re=globalThis;let se=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new Z(t.insertBefore(S(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};se._$litElement$=!0,se.finalized=!0,re.litElementHydrateSupport?.({LitElement:se});const le=re.litElementPolyfillSupport;le?.({LitElement:se}),(re.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},he=(e=de,t,i)=>{const{kind:a,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};function ue(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return ue({...e,state:!0,attribute:!1})}var ge,me;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ge||(ge={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(me||(me={}));const fe=["closed","locked","off"],_e=(e,t,i,a)=>{a=a||{},i=null==i?{}:i;const n=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,e.dispatchEvent(n),n},ve=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let i,a;if(Array.isArray(e)){const n=t;if(a=e.length,a!==n.length)return!1;for(i=a;0!==i--;)if(!ve(e[i],n[i]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(!ve(i[1],t.get(i[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return((e,t)=>{if(e.byteLength!==t.byteLength)return!1;const i=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);for(let e=0;e<i.length;e++)if(i[e]!==a[e])return!1;return!0})(e,t);if(e instanceof RegExp&&t instanceof RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const n=e,o=t,r=Object.keys(n);if(a=r.length,a!==Object.keys(o).length)return!1;for(i=a;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,r[i]))return!1;for(i=a;0!==i--;){const e=r[i];if(!ve(n[e],o[e]))return!1}return!0}return e!=e&&t!=t},be=e=>{_e(window,"haptic",e)},we=(e,t,i,a)=>{if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(e=>e.user===t.user.id)||(be("warning"),confirm(a.confirmation.text||`Are you sure you want to ${a.action}?`)))switch(a.action){case"more-info":(i.entity||i.camera_image)&&_e(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&((e,t,i=!1)=>{i?history.replaceState(null,"",t):history.pushState(null,"",t),_e(window,"location-changed",{replace:i})})(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(((e,t)=>{((e,t,i=!0)=>{const a=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===a?"homeassistant":a;let o;switch(a){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}e.callService(n,o,{entity_id:t})})(e,t,fe.includes(e.states[t].state))})(t,i.entity),be("success"));break;case"call-service":{if(!a.service)return void be("failure");const[e,i]=a.service.split(".",2);t.callService(e,i,a.service_data,a.target),be("success");break}case"fire-dom-event":_e(e,"ll-custom",a)}};function ye(e){return void 0!==e&&"none"!==e.action}const $e={1:{level:1,label:"Good",bgColor:"#B0E867",faceColor:"#A8E05F",fontColor:"#718B3A"},2:{level:2,label:"Moderate",bgColor:"#E3C143",faceColor:"#FDD64B",fontColor:"#A57F23"},3:{level:3,label:"Unhealthy for Sensitive Groups",bgColor:"#E48B4E",faceColor:"#FF9B57",fontColor:"#B25826"},4:{level:4,label:"Unhealthy",bgColor:"#E45F5E",faceColor:"#FE6A69",fontColor:"#AF2C3C"},5:{level:5,label:"Very Unhealthy",bgColor:"#986EA9",faceColor:"#A97ABC",fontColor:"#634675"},6:{level:6,label:"Hazardous",bgColor:"#A5516B",faceColor:"#A87383",fontColor:"#683E51"}},xe={"clear-night":"night-clear-sky",cloudy:"scattered-clouds",fog:"scattered-clouds",hail:"rain",lightning:"rain","lightning-rainy":"rain",partlycloudy:"new-clouds",pouring:"rain",rainy:"rain",snowy:"snow","snowy-rainy":"snow",sunny:"clear-sky",windy:"scattered-clouds","windy-variant":"scattered-clouds",exceptional:"snow"},Ae={p2:"PM2.5",pm25:"PM2.5","pm2.5":"PM2.5",pm2_5:"PM2.5",pm10:"PM10",pm_10:"PM10",p1:"PM10",o3:"Ozone",ozone:"Ozone",no2:"Nitrogen Dioxide",n2:"Nitrogen Dioxide",nitrogen_dioxide:"Nitrogen Dioxide",so2:"Sulfur Dioxide",s2:"Sulfur Dioxide",sulfur_dioxide:"Sulfur Dioxide",sulphur_dioxide:"Sulfur Dioxide",co:"Carbon Monoxide",carbon_monoxide:"Carbon Monoxide",neph:"Nephelometry"},He={pm25:"µg/m³","pm2.5":"µg/m³",pm2_5:"µg/m³",pm10:"µg/m³",pm_10:"µg/m³",p2:"µg/m³",p1:"µg/m³",o3:"ppm",ozone:"ppm",no2:"ppb",n2:"ppb",nitrogen_dioxide:"ppb",so2:"ppb",s2:"ppb",sulfur_dioxide:"ppb",sulphur_dioxide:"ppb",co:"ppm",carbon_monoxide:"ppm",neph:"1/Mm"},qe={good:1,moderate:2,unhealthy_for_sensitive_groups:3,"unhealthy-for-sensitive-groups":3,unhealthy_sensitive:3,"unhealthy-sensitive":3,unhealthy:4,very_unhealthy:5,"very-unhealthy":5,hazardous:6},Ce=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M22.579 30.814c.512.148.986.22 1.447.22.46 0 .934-.072 1.447-.22a.378.378 0 0 0 .076-.693.373.373 0 0 0-.284-.03c-.89.257-1.586.257-2.477 0a.377.377 0 0 0-.21.724"/>
        <path d="M40.139 24.513a1.36 1.36 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.88 8.88 0 0 1-.759-.438l-.051-.035a.19.19 0 0 0-.26.052l-.334.492a.187.187 0 0 0-.03.144c.01.05.04.094.082.12l.054.035c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.032.04a.19.19 0 0 0 .236.053l.532-.278a.188.188 0 0 0 .065-.277l-.042-.06c-.172-.24-.653-.795-1.595-1.132.342-.019.783-.033 1.023-.033 4.697 0 8.963 1.701 11.701 4.668 2.59 2.807 3.719 6.554 3.353 11.137a43.37 43.37 0 0 1-.944 6.087l-.051.27a.254.254 0 0 0 .247.3h.362a.255.255 0 0 0 .154-.054l.057-.045c.245-.187.546-.236.716-.115.343.242.35 1.053.019 2.064l-.335 1.03-.01.027c-.192.595-.39 1.21-.637 1.943-.389 1.152-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.142-.336a.255.255 0 0 0-.143-.327l-.408-.16a.255.255 0 0 0-.324.141c-1.775 4.454-3.995 7.823-6.986 10.603-1.625 1.51-3.206 1.82-5.079 1.82-1.872 0-3.453-.31-5.079-1.821-2.992-2.78-5.211-6.149-6.985-10.602a.253.253 0 0 0-.326-.14l-.407.16a.252.252 0 0 0-.141.327c.046.116.094.227.142.338l.06.137c-.014-.002-.027-.003-.04-.006-.796-.146-1.472-.88-1.855-2.013-.243-.718-.438-1.322-.627-1.907l-.354-1.095c-.332-1.01-.325-1.82.018-2.062.175-.123.47-.073.734.129l.067.042c.046.028.1.04.15.038l.357-.024a.222.222 0 0 0 .114-.039c.031.014.087.01.133-.002.351-.088.698-.396.95-.843.41-.727.704-1.79 1.044-3.02.684-2.48 1.537-5.566 3.756-6.964 2.485-1.567 4.625-1.291 7.106-.971 2.38.306 5.074.652 8.572-.574l.08.052c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.249-3.448-3.569-3.636-5.324a.38.38 0 0 0-.172-.278l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.51-.321-4.882-.624-7.592 1.083-2.465 1.553-3.36 4.796-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.152.269-.312.403-.42.459a42.846 42.846 0 0 1-.89-5.833c-.743-9.32 4.854-13.079 8.257-14.49l.046-.019c.42.184.812.318 1.167.398.875.197 1.312.622 1.494.858l.032.041a.192.192 0 0 0 .236.052l.532-.278a.188.188 0 0 0 .065-.277l-.043-.06c-.209-.29-.832-.998-2.102-1.286-.658-.147-1.473-.518-2.235-1.015l-.05-.034a.188.188 0 0 0-.261.051l-.334.492a.187.187 0 0 0-.03.144c.01.05.04.094.083.122l.053.033c.111.073.226.141.338.207-5.757 2.681-8.739 8.19-8.185 15.136.138 1.736.4 3.54.778 5.363a1.354 1.354 0 0 0-.924.237c-.423.3-1.032 1.102-.37 3.124l.343 1.057c.193.597.393 1.216.641 1.95.668 1.98 2.005 2.685 3.034 2.685.05 0 .1-.005.15-.01l.008-.001c1.733 3.91 3.835 6.934 6.612 9.515 1.959 1.821 3.907 2.072 5.72 2.072 1.812 0 3.76-.25 5.72-2.071 2.776-2.582 4.879-5.606 6.612-9.516h.007c.05.006.101.01.152.01 1.028 0 2.365-.705 3.032-2.683.253-.748.453-1.364.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125"/>
        <path d="M31.026 24.643c0-.515-.689-.935-1.536-.935-.846 0-1.534.42-1.534.935 0 .524.673.934 1.534.934.847 0 1.536-.42 1.536-.934m-12.539.934c.848 0 1.537-.42 1.537-.934 0-.515-.69-.935-1.537-.935-.846 0-1.535.42-1.535.935 0 .524.674.934 1.535.934m9.093 9.999c-.404 1.021-1.388 2.631-3.58 2.631-2.19 0-3.176-1.61-3.58-2.631h7.16zM24 38.96c2.524 0 3.963-1.89 4.467-3.658a.375.375 0 0 0-.362-.48h-8.21a.378.378 0 0 0-.363.48c.505 1.768 1.944 3.658 4.468 3.658zm7.942-16.711a.372.372 0 0 0-.002-.288.373.373 0 0 0-.206-.203 6.035 6.035 0 0 0-2.239-.437c-.959 0-1.752.241-2.249.443a.377.377 0 0 0 .142.725.37.37 0 0 0 .141-.028 5.305 5.305 0 0 1 1.966-.387c.837 0 1.526.208 1.958.383a.38.38 0 0 0 .49-.208m-11.494.211a.375.375 0 0 0 .488-.495.376.376 0 0 0-.205-.202 6.042 6.042 0 0 0-2.249-.442c-.955 0-1.745.238-2.24.438a.377.377 0 0 0 .284.698 5.277 5.277 0 0 1 1.956-.383c.837 0 1.53.21 1.966.386"/>
      </g>
    </g>
  </svg>
`,Le=j`
  <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M24.027 31.035c.46 0 .934-.072 1.446-.22a.377.377 0 0 0-.207-.725c-.892.259-1.587.258-2.479 0a.374.374 0 0 0-.466.257c-.057.2.059.41.258.467.513.149.987.22 1.448.22"/>
        <path d="M40.139 24.513a1.358 1.358 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.836 8.836 0 0 1-.759-.438l-.051-.035a.191.191 0 0 0-.26.052l-.334.492a.189.189 0 0 0 .053.265l.053.034c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.033.041a.19.19 0 0 0 .235.052l.531-.278a.191.191 0 0 0 .066-.278l-.042-.059c-.172-.24-.653-.795-1.595-1.132.342-.019.783-.033 1.022-.033 4.698 0 8.964 1.701 11.702 4.668 2.59 2.807 3.719 6.554 3.353 11.137a43.37 43.37 0 0 1-.944 6.087l-.051.27a.254.254 0 0 0 .247.3h.362a.255.255 0 0 0 .154-.054l.057-.045c.245-.187.546-.236.716-.115.343.242.35 1.053.019 2.064l-.335 1.03-.01.027c-.192.595-.39 1.21-.637 1.943-.389 1.152-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.142-.336a.255.255 0 0 0-.143-.327l-.408-.16a.255.255 0 0 0-.324.141c-1.775 4.454-3.995 7.823-6.986 10.603-1.625 1.51-3.206 1.82-5.079 1.82s-3.453-.31-5.079-1.821c-2.992-2.78-5.211-6.15-6.985-10.602a.252.252 0 0 0-.325-.14l-.408.16a.252.252 0 0 0-.141.327c.045.114.092.222.14.332l.061.143a.45.45 0 0 1-.039-.006c-.796-.146-1.472-.88-1.855-2.014a142.07 142.07 0 0 1-.628-1.911l-.353-1.09c-.333-1.01-.325-1.82.018-2.062.175-.123.47-.072.734.129l.067.042a.25.25 0 0 0 .15.038l.357-.024a.224.224 0 0 0 .114-.039.261.261 0 0 0 .133-.002c.352-.089.698-.396.95-.843.41-.727.704-1.79 1.044-3.019.684-2.48 1.537-5.566 3.756-6.965 2.486-1.568 4.627-1.291 7.106-.971 2.38.306 5.074.652 8.572-.574l.08.052c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.249-3.448-3.569-3.636-5.324a.38.38 0 0 0-.172-.278l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.512-.322-4.882-.625-7.592 1.083-2.466 1.554-3.361 4.796-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.153.27-.314.404-.42.46a42.807 42.807 0 0 1-.89-5.834c-.743-9.32 4.854-13.079 8.258-14.49a.635.635 0 0 1 .045-.019c.42.184.813.318 1.167.398.876.197 1.312.622 1.494.858l.032.041a.19.19 0 0 0 .236.052l.53-.277a.191.191 0 0 0 .097-.124.184.184 0 0 0-.03-.154l-.043-.06c-.208-.29-.831-.998-2.102-1.286-.658-.147-1.472-.518-2.235-1.015l-.05-.034a.19.19 0 0 0-.261.051l-.334.492a.189.189 0 0 0 .053.266l.053.033c.112.073.226.141.338.207-5.757 2.681-8.74 8.19-8.185 15.136a43.8 43.8 0 0 0 .777 5.363 1.362 1.362 0 0 0-.923.237c-.423.298-1.033 1.102-.37 3.124l.334 1.026c.209.648.402 1.245.65 1.982.668 1.978 2.005 2.684 3.034 2.684.05 0 .1-.005.15-.01l.008-.001c1.733 3.91 3.835 6.935 6.612 9.515 1.959 1.821 3.907 2.072 5.72 2.072 1.812 0 3.76-.25 5.72-2.071 2.776-2.582 4.879-5.606 6.612-9.516h.007c.05.006.101.01.152.01 1.028 0 2.365-.705 3.032-2.683.253-.748.453-1.364.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125"/>
        <path d="M25.41 38.404v-.112a.365.365 0 0 0 0-.53v-.112h-2.814v.107a.367.367 0 0 0-.121.27c0 .101.043.199.12.27v.107h2.816zm2.611-2.498a.377.377 0 0 0-.376-.377h-7.29a.377.377 0 0 0 0 .755h7.29c.208 0 .376-.17.376-.378m4.044-14.184a.377.377 0 0 0-.376-.377h-4.396a.377.377 0 0 0 0 .753h4.396a.377.377 0 0 0 .376-.376m-2.575 3.855c.848 0 1.537-.42 1.537-.934 0-.515-.69-.935-1.537-.935-.846 0-1.535.42-1.535.935 0 .524.675.934 1.535.934m-8.428-3.855a.377.377 0 0 0-.376-.377H16.29a.377.377 0 0 0 0 .753h4.396a.377.377 0 0 0 .376-.376m-2.575 3.855c.848 0 1.537-.42 1.537-.934 0-.515-.69-.935-1.537-.935-.846 0-1.534.42-1.534.935 0 .524.674.934 1.534.934"/>
      </g>
    </g>
  </svg>
`,Ee=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M22.851 37.65a.377.377 0 0 0 0 .754h2.298a.376.376 0 0 0 0-.753h-2.298zm-.272-6.836c.513.148.986.22 1.448.22.46 0 .934-.072 1.446-.22a.378.378 0 0 0 .076-.693.372.372 0 0 0-.283-.03c-.892.257-1.587.257-2.479 0a.366.366 0 0 0-.283.03.372.372 0 0 0-.182.227.371.371 0 0 0 .032.287.373.373 0 0 0 .225.18m5.363 6.349a.375.375 0 0 0 .374-.418.374.374 0 0 0-.138-.252c-1.143-.92-2.496-1.387-4.025-1.387-1.53 0-2.883.466-4.026 1.387a.374.374 0 0 0-.057.53c.13.16.368.187.53.056 1.004-.81 2.2-1.22 3.553-1.22 1.353 0 2.548.41 3.553 1.22.068.055.15.084.236.084m4.072-14.527a.375.375 0 0 0 .324-.422.382.382 0 0 0-.423-.323c-1.588.21-3.277-.342-4.408-1.445a.378.378 0 0 0-.64.275.38.38 0 0 0 .114.265c1.093 1.065 2.686 1.702 4.262 1.702.259 0 .518-.018.771-.052M21.01 20.454a.373.373 0 0 0-.266-.114h-.004a.374.374 0 0 0-.262.107c-1.13 1.103-2.816 1.658-4.408 1.444a.374.374 0 0 0-.423.324.377.377 0 0 0 .324.422c.254.034.514.052.771.052 1.577 0 3.17-.637 4.263-1.703a.377.377 0 0 0 .005-.532m10.016 4.189c0-.515-.689-.935-1.536-.935-.846 0-1.534.42-1.534.935 0 .524.673.934 1.534.934.847 0 1.536-.42 1.536-.934m-12.539.934c.848 0 1.537-.42 1.537-.934 0-.515-.69-.935-1.537-.935-.846 0-1.534.42-1.534.935 0 .524.674.934 1.534.934"/>
        <path d="M40.139 24.513a1.358 1.358 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.836 8.836 0 0 1-.759-.438l-.051-.035a.191.191 0 0 0-.26.052l-.334.492a.189.189 0 0 0 .053.265l.053.034c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.033.041a.19.19 0 0 0 .235.052l.531-.278a.191.191 0 0 0 .066-.278l-.042-.059c-.172-.24-.653-.795-1.595-1.132.342-.019.783-.033 1.022-.033 4.698 0 8.964 1.701 11.702 4.668 2.59 2.807 3.719 6.554 3.353 11.137a43.37 43.37 0 0 1-.944 6.087l-.051.27a.254.254 0 0 0 .247.3h.362a.255.255 0 0 0 .154-.054l.057-.045c.245-.187.546-.236.716-.115.343.242.35 1.053.019 2.064l-.335 1.03-.01.027c-.192.595-.39 1.21-.637 1.943-.389 1.152-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.142-.336a.255.255 0 0 0-.143-.327l-.408-.16a.255.255 0 0 0-.324.141c-1.775 4.454-3.995 7.823-6.986 10.603-1.625 1.51-3.206 1.82-5.079 1.82-1.873 0-3.453-.31-5.078-1.821-2.993-2.78-5.212-6.15-6.985-10.602a.253.253 0 0 0-.326-.14l-.407.16a.25.25 0 0 0-.142.327c.046.116.094.227.143.338.02.046.04.09.058.137a.45.45 0 0 1-.039-.006c-.796-.146-1.472-.88-1.855-2.014a142.07 142.07 0 0 1-.628-1.911l-.353-1.09c-.333-1.01-.325-1.82.018-2.062.175-.123.47-.072.734.129l.067.042a.251.251 0 0 0 .15.038l.357-.024a.226.226 0 0 0 .114-.039.252.252 0 0 0 .133-.002c.352-.089.698-.396.95-.843.41-.727.704-1.79 1.044-3.019.684-2.48 1.537-5.566 3.756-6.965 2.486-1.568 4.627-1.291 7.106-.971 2.38.306 5.074.652 8.572-.574l.08.052c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.249-3.448-3.569-3.636-5.324a.38.38 0 0 0-.172-.278l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.512-.322-4.881-.625-7.592 1.083-2.466 1.554-3.361 4.796-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.153.27-.314.404-.42.46a42.807 42.807 0 0 1-.89-5.834c-.743-9.32 4.854-13.079 8.258-14.49a.635.635 0 0 1 .045-.019c.42.184.813.318 1.167.398.876.197 1.312.622 1.494.858l.032.041a.19.19 0 0 0 .236.052l.53-.277a.191.191 0 0 0 .097-.124.184.184 0 0 0-.03-.154l-.043-.06c-.208-.29-.831-.998-2.102-1.286-.658-.147-1.472-.518-2.235-1.015l-.05-.034a.19.19 0 0 0-.261.051l-.334.492a.189.189 0 0 0 .053.266l.053.033c.112.073.226.141.338.207-5.757 2.681-8.74 8.19-8.185 15.136a43.8 43.8 0 0 0 .777 5.363 1.361 1.361 0 0 0-.923.237c-.423.298-1.033 1.102-.37 3.124l.334 1.026c.209.648.402 1.245.65 1.982.668 1.978 2.005 2.684 3.034 2.684.05 0 .1-.005.15-.01l.008-.001c1.733 3.91 3.835 6.935 6.612 9.515 1.959 1.821 3.907 2.072 5.72 2.072 1.812 0 3.76-.25 5.72-2.071 2.776-2.58 4.878-5.605 6.611-9.516h.007c.05.006.101.01.153.01 1.028 0 2.365-.705 3.032-2.683.253-.748.453-1.364.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125"/>
      </g>
    </g>
  </svg>
`,Me=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M32.065 21.722a.377.377 0 0 0-.376-.377h-4.396a.376.376 0 0 0 0 .754h4.396c.207 0 .376-.17.376-.377m-4.11 2.921c0 .524.674.934 1.535.934.847 0 1.536-.42 1.536-.934 0-.516-.689-.935-1.536-.935-.846 0-1.535.42-1.535.935m-6.893-2.921a.377.377 0 0 0-.376-.377H16.29a.376.376 0 0 0 0 .754h4.396c.208 0 .376-.17.376-.377m-4.109 2.921c0 .524.674.934 1.534.934.847 0 1.536-.42 1.536-.934 0-.516-.689-.935-1.536-.935-.846 0-1.534.42-1.534.935m10.753 9.122h-7.411a.377.377 0 0 0 0 .754h7.41a.377.377 0 0 0 0-.754m.001 2.212h-7.411a.377.377 0 0 0 0 .753h7.41a.377.377 0 0 0 0-.753m.001 2.213h-7.411a.377.377 0 0 0 0 .752h7.41a.377.377 0 0 0 0-.753"/>
        <path d="M11.586 32.41a2.976 2.976 0 0 1-.467-.072l-.024-.008c-.435-.118-1.237-.535-1.727-1.986-.245-.726-.443-1.338-.633-1.928l-.348-1.071c-.332-1.012-.324-1.822.018-2.064.171-.122.48-.074.715.115.1.079.136.145.147.185.477 1.834 1.227 4.102 2.007 6.067l.312.763zm23.771.777c-1.663 3.677-3.66 6.525-6.278 8.957-1.625 1.511-3.206 1.82-5.08 1.82-1.872 0-3.453-.309-5.078-1.82-2.619-2.433-4.615-5.281-6.278-8.957.574-.017 1.302-.132 2.336-.728a63.87 63.87 0 0 0 2.612-1.607l.024-.015c2.364-1.51 4.232-2.703 6.385-2.704 2.153.001 4.02 1.194 6.386 2.704a65.4 65.4 0 0 0 2.635 1.622c1.034.596 1.762.71 2.336.728zm4.257-5.842l-.349 1.071c-.19.591-.388 1.202-.633 1.929-.49 1.451-1.292 1.867-1.727 1.985l-.022.008c-.122.032-.28.056-.469.073l.312-.763c.78-1.964 1.53-4.232 2.006-6.065a.42.42 0 0 1 .148-.187.797.797 0 0 1 .48-.182c.09 0 .172.022.235.067.343.242.35 1.052.019 2.064zm.525-2.832a1.36 1.36 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.836 8.836 0 0 1-.759-.439l-.051-.034a.19.19 0 0 0-.26.052l-.334.491a.19.19 0 0 0 .053.265l.053.035c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.033.041a.19.19 0 0 0 .235.051l.531-.277a.191.191 0 0 0 .066-.278l-.042-.058c-.172-.24-.653-.795-1.595-1.134.343-.018.785-.032 1.022-.032 4.698 0 8.964 1.701 11.702 4.668 2.59 2.806 3.719 6.554 3.353 11.137a42.16 42.16 0 0 1-.943 6.085c-.471 2.041-1.554 5.263-2.525 7.513-.669.01-1.27-.099-2.19-.63a63.936 63.936 0 0 1-2.605-1.605c-2.37-1.512-4.415-2.818-6.795-2.822-2.37.003-4.416 1.309-6.787 2.822a63.116 63.116 0 0 1-2.606 1.605c-.92.53-1.529.64-2.188.63-.882-2.04-1.846-4.847-2.414-7.023.337-.1.667-.4.91-.83.41-.727.703-1.79 1.043-3.02.684-2.48 1.537-5.567 3.756-6.966 2.486-1.567 4.627-1.29 7.106-.97 2.38.306 5.074.652 8.572-.573l.08.051c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.25-3.448-3.569-3.636-5.323a.38.38 0 0 0-.172-.279l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.512-.322-4.882-.625-7.592 1.083-2.466 1.554-3.361 4.795-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.153.27-.314.404-.42.46a42.82 42.82 0 0 1-.89-5.834c-.743-9.32 4.854-13.079 8.258-14.49l.045-.019c.42.185.813.319 1.167.398.876.198 1.312.622 1.494.858l.032.04a.19.19 0 0 0 .236.053l.53-.278a.19.19 0 0 0 .067-.277l-.043-.06c-.208-.29-.831-.998-2.102-1.285-.658-.148-1.472-.519-2.235-1.016l-.05-.034a.19.19 0 0 0-.261.051l-.334.492a.189.189 0 0 0 .053.266l.053.033c.112.073.226.141.338.207-5.757 2.681-8.74 8.19-8.185 15.135.139 1.74.4 3.543.777 5.364a1.36 1.36 0 0 0-.923.237c-.423.298-1.033 1.102-.37 3.123l.334 1.027c.198.617.398 1.234.65 1.982.668 1.978 2.005 2.684 3.034 2.684.05 0 .101-.005.151-.01h.007c1.735 3.911 3.837 6.936 6.612 9.515 1.96 1.82 3.907 2.071 5.72 2.071 1.812 0 3.76-.25 5.72-2.072 2.776-2.58 4.878-5.604 6.613-9.515h.005c.05.006.101.01.153.01 1.028 0 2.365-.705 3.032-2.683.257-.759.463-1.395.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125z"/>
      </g>
    </g>
  </svg>
`,ke=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M26.22 36.782a2.152 2.152 0 0 1-2.148 2.152 2.152 2.152 0 0 1 0-4.302 2.15 2.15 0 0 1 2.147 2.15m-2.147-2.9a2.9 2.9 0 0 0 0 5.802 2.901 2.901 0 0 0 0-5.802"/>
        <path d="M27.889 36.914A3.696 3.696 0 0 1 24.2 40.61a3.696 3.696 0 0 1 0-7.389 3.695 3.695 0 0 1 3.688 3.694M24.2 32.471a4.445 4.445 0 0 0 0 8.888 4.445 4.445 0 0 0 0-8.888"/>
        <path d="M38.206 36.981a.102.102 0 0 1-.007.08l-4.565 8.86a.104.104 0 0 1-.139.044l-1.017-.526 4.66-9.044 1.017.526a.102.102 0 0 1 .05.06zm-27.431-.06l1.017-.526 4.66 9.045-1.017.525a.107.107 0 0 1-.139-.044l-4.565-8.86a.105.105 0 0 1-.007-.08.105.105 0 0 1 .05-.06zm8.907 6.342c-.125.391-.393.71-.757.898l-1.808.935-4.66-9.044 1.808-.935a1.529 1.529 0 0 1 2.066.66l3.253 6.314c.188.364.223.78.098 1.172zm8.764-.213c-1.378.875-2.732.996-3.99.996-1.253 0-2.601-.12-3.975-.986a2.275 2.275 0 0 0-.232-1.313l-3.254-6.313c-.022-.044-.05-.083-.077-.123l-.018-.026c2.134-3.991 5.75-6.972 7.566-6.976 1.816.004 5.43 2.984 7.565 6.975l-.02.03a.976.976 0 0 0-.076.12l-3.254 6.313c-.205.4-.286.85-.235 1.303zm3.367 2.046l-1.808-.935a1.54 1.54 0 0 1-.659-2.07l3.253-6.314a1.525 1.525 0 0 1 1.364-.832c.246 0 .482.058.702.172l1.808.935-4.398 8.537-.262.507zm8.677-20.407a1.347 1.347 0 0 0-.918-.237c.374-1.802.633-3.597.771-5.337.38-4.767-.856-8.844-3.576-11.791-2.9-3.144-7.388-4.947-12.31-4.947-1.25 0-2.359.124-2.989.24-.29-.151-.53-.29-.753-.435l-.051-.034a.19.19 0 0 0-.258.051l-.332.49a.184.184 0 0 0-.03.141c.01.05.04.095.083.122l.053.034c.85.559 1.777.979 2.543 1.152.87.196 1.303.618 1.484.853l.032.041a.188.188 0 0 0 .234.052l.528-.277a.19.19 0 0 0 .066-.277l-.043-.058c-.17-.239-.648-.79-1.584-1.127.34-.018.778-.033 1.016-.033 4.667 0 8.904 1.694 11.624 4.646 2.574 2.793 3.695 6.522 3.332 11.083a43.229 43.229 0 0 1-.938 6.058l-.05.269a.248.248 0 0 0 .053.206.245.245 0 0 0 .192.091h.36a.255.255 0 0 0 .152-.053l.057-.044c.243-.187.542-.235.711-.115.34.241.348 1.048.02 2.054l-.347 1.066c-.19.588-.386 1.196-.63 1.92-.385 1.146-1.085 1.89-1.884 2.014.02-.05.041-.098.062-.146.047-.109.094-.218.14-.333a.253.253 0 0 0-.141-.325l-.407-.16a.253.253 0 0 0-.321.141c-.382.96-.795 1.884-1.258 2.816l-.023.03-.151-.079a2.256 2.256 0 0 0-1.74-.146c-.26.083-.5.21-.715.378a20.2 20.2 0 0 0-3.814-4.82c-1.611-1.482-3.127-2.3-4.277-2.303-1.143.003-2.66.822-4.27 2.304a20.203 20.203 0 0 0-3.815 4.82 2.263 2.263 0 0 0-.717-.379 2.255 2.255 0 0 0-1.739.146l-.151.078-.063-.078a36.789 36.789 0 0 1-1.238-2.767.25.25 0 0 0-.322-.14l-.406.16a.252.252 0 0 0-.14.326c.044.111.09.218.136.325l.064.147a.46.46 0 0 1-.04-.006c-.79-.145-1.462-.875-1.842-2.004-.24-.71-.433-1.309-.62-1.888l-.356-1.098c-.329-1.006-.321-1.812.02-2.053.173-.123.464-.072.729.128l.066.042a.244.244 0 0 0 .15.038l.354-.023a.235.235 0 0 0 .113-.04.25.25 0 0 0 .132-.002c.35-.088.693-.393.944-.838.408-.724.7-1.78 1.037-3.005.68-2.468 1.526-5.54 3.731-6.932 2.47-1.56 4.597-1.284 7.06-.966 2.365.304 5.04.649 8.516-.57l.08.051c.255 1.888 1.434 4.368 3.99 5.701a.375.375 0 0 0 .344-.664c-2.379-1.242-3.426-3.551-3.613-5.298a.377.377 0 0 0-.17-.276l-.384-.244a.369.369 0 0 0-.328-.037c-3.396 1.234-6.023.894-8.351.592-2.496-.32-4.851-.622-7.543 1.078-2.45 1.545-3.339 4.772-4.054 7.365-.324 1.176-.604 2.192-.967 2.836-.155.276-.318.409-.417.459A42.807 42.807 0 0 1 9.5 19.04c-.739-9.275 4.822-13.015 8.203-14.42l.045-.019c.418.184.808.317 1.16.397.87.196 1.303.619 1.484.853l.032.041a.19.19 0 0 0 .234.052l.527-.276a.19.19 0 0 0 .066-.277l-.042-.059c-.207-.289-.826-.994-2.089-1.28-.653-.147-1.462-.515-2.22-1.01l-.05-.034a.187.187 0 0 0-.259.051l-.332.49a.19.19 0 0 0 .052.263l.053.034c.111.073.225.14.337.205-5.72 2.669-8.683 8.152-8.132 15.063.137 1.73.397 3.526.772 5.337a1.358 1.358 0 0 0-.918.237c-.42.297-1.026 1.097-.366 3.108l.33 1.022c.198.614.396 1.228.647 1.972.663 1.97 1.992 2.671 3.014 2.671.05 0 .098-.005.146-.01h.01c.189.426.397.869.634 1.348l-2.492 1.288a1.044 1.044 0 0 0-.447 1.402l4.566 8.861a1.038 1.038 0 0 0 1.4.448l3.488-1.805c.411-.212.75-.532.986-.928 1.453.805 2.837.916 4.117.916 1.222 0 2.667-.11 4.129-.924.235.4.577.722.991.936l3.49 1.805a1.036 1.036 0 0 0 1.4-.448l4.565-8.86a1.043 1.043 0 0 0-.446-1.403l-2.508-1.295c.233-.472.44-.912.63-1.342l.012.001c.048.005.096.01.146.01 1.021 0 2.35-.702 3.013-2.671.254-.755.459-1.389.647-1.972l.33-1.02c.66-2.014.054-2.813-.365-3.11z"/>
        <path d="M31.938 21.552a.375.375 0 0 0-.374-.376h-4.367a.374.374 0 0 0 0 .75h4.367a.374.374 0 0 0 .374-.374m-3.703 2.673c0 .521.67.929 1.525.929.841 0 1.526-.417 1.526-.929 0-.513-.685-.93-1.526-.93-.84 0-1.525.417-1.525.93m-6.885-2.673a.375.375 0 0 0-.374-.376h-4.367a.374.374 0 0 0 0 .75h4.367a.374.374 0 0 0 .374-.374m-4.409 2.673c0 .521.67.929 1.525.929.841 0 1.526-.417 1.526-.929 0-.513-.685-.93-1.526-.93-.84 0-1.525.417-1.525.93"/>
      </g>
    </g>
  </svg>
`,Se=j`
  <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M27.746 24.537c0-1.464.882-2.655 1.964-2.655 1.083 0 1.965 1.191 1.965 2.655 0 1.463-.882 2.655-1.965 2.655-1.082 0-1.964-1.192-1.964-2.655m1.964 3.408c1.499 0 2.717-1.529 2.717-3.408s-1.218-3.408-2.717-3.408c-1.498 0-2.716 1.53-2.716 3.408 0 1.879 1.218 3.408 2.716 3.408m-13.386-3.408c0-1.464.882-2.655 1.964-2.655 1.083 0 1.965 1.191 1.965 2.655 0 1.463-.882 2.655-1.965 2.655-1.082 0-1.964-1.192-1.964-2.655m1.964 3.408c1.499 0 2.717-1.529 2.717-3.408s-1.218-3.408-2.717-3.408c-1.498 0-2.716 1.53-2.716 3.408 0 1.879 1.218 3.408 2.716 3.408m1.865 11.492c.997-.617 2.385-.967 3.847-.967s2.85.35 3.848.967zm-1.383 1.746c.06-.345.225-.68.49-.994h9.48c.265.315.429.649.49.994zm8.833 2.5c-.982.533-2.251.825-3.603.825-1.353 0-2.62-.292-3.602-.825zm1.597-1.747c-.091.35-.287.684-.582.993h-9.236c-.295-.31-.49-.643-.582-.993zM24 45.262c3.317 0 6.015-1.693 6.015-3.773S27.317 37.717 24 37.717s-6.016 1.692-6.016 3.772 2.7 3.773 6.016 3.773z"/>
        <path d="M17.74 38.036c.26-2.17 3.02-3.88 6.286-3.888 3.265.009 6.027 1.722 6.287 3.901.428 3.054.461 3.494.461 3.556 0 2.399-3.027 4.357-6.748 4.367-3.72-.01-6.748-1.968-6.748-4.367 0-.062.033-.502.462-3.569m6.285-21.54c5.077.007 9.18 2.16 10.21 5.357 1.212 3.769-1.398 9.52-4.534 13.573-1.334-1.265-3.439-2.024-5.65-2.036H24c-2.21.012-4.315.771-5.648 2.036-3.136-4.053-5.746-9.804-4.534-13.573 1.03-3.197 5.132-5.35 10.208-5.357m16.114 8.017a1.366 1.366 0 0 0-.924-.238c.377-1.81.638-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.008.242a8.916 8.916 0 0 1-.758-.439l-.051-.033a.19.19 0 0 0-.26.052l-.334.49a.188.188 0 0 0 .053.265l.053.035c.857.562 1.791.984 2.56 1.157.876.197 1.312.622 1.494.857l.032.042a.19.19 0 0 0 .236.051l.531-.277a.19.19 0 0 0 .066-.278l-.042-.059c-.172-.24-.653-.794-1.595-1.133.342-.018.783-.032 1.022-.032 4.699 0 8.964 1.7 11.702 4.668 2.59 2.806 3.718 6.553 3.353 11.137a43.393 43.393 0 0 1-.944 6.088l-.051.27a.253.253 0 0 0 .247.298h.362a.254.254 0 0 0 .154-.052l.057-.046c.243-.187.546-.236.717-.115.342.243.349 1.052.018 2.064l-.335 1.03c-.22.678-.405 1.254-.647 1.97-.389 1.151-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.141-.336a.253.253 0 0 0-.142-.327l-.408-.16a.255.255 0 0 0-.324.14c-1.29 3.237-2.844 5.928-4.75 8.22-.068-.504-.15-1.106-.25-1.815-.081-.68-.366-1.337-.846-1.95 3.307-4.232 6.047-10.306 4.737-14.376-1.129-3.51-5.522-5.874-10.93-5.882-5.407.008-9.799 2.372-10.929 5.882-1.31 4.07 1.43 10.144 4.737 14.376-.48.614-.764 1.27-.844 1.948-.104.733-.188 1.354-.258 1.87-1.929-2.309-3.498-5.016-4.795-8.272a.254.254 0 0 0-.326-.14l-.408.16a.252.252 0 0 0-.14.327c.045.115.093.226.14.338a2.1 2.1 0 0 1 .06.137.45.45 0 0 1-.039-.006c-.796-.146-1.472-.88-1.855-2.014-.244-.719-.439-1.325-.628-1.911l-.354-1.09c-.332-1.01-.324-1.82.019-2.063.175-.123.47-.072.735.13l.066.042a.255.255 0 0 0 .15.038l.358-.023a.229.229 0 0 0 .113-.04.24.24 0 0 0 .134-.003c.35-.087.697-.394.95-.841.41-.728.703-1.79 1.043-3.02.684-2.48 1.536-5.567 3.756-6.965 2.486-1.568 4.627-1.292 7.106-.971 2.38.306 5.074.651 8.572-.573l.08.05c.257 1.898 1.444 4.39 4.016 5.73a.38.38 0 0 0 .507-.16.372.372 0 0 0 .025-.288.37.37 0 0 0-.185-.22c-2.394-1.248-3.448-3.568-3.636-5.323a.381.381 0 0 0-.172-.278l-.387-.245a.372.372 0 0 0-.33-.036c-3.418 1.238-6.062.897-8.406.594-2.513-.321-4.883-.624-7.592 1.083-2.466 1.553-3.361 4.797-4.081 7.402-.326 1.18-.607 2.201-.973 2.85-.152.27-.312.403-.42.458a42.788 42.788 0 0 1-.888-5.833C8.203 9.517 13.8 5.759 17.203 4.348l.046-.019c.42.185.813.318 1.168.398.875.198 1.311.622 1.493.858l.032.04a.19.19 0 0 0 .236.053l.532-.278a.192.192 0 0 0 .095-.124.187.187 0 0 0-.03-.154l-.042-.058c-.209-.292-.832-1-2.103-1.286-.657-.148-1.472-.518-2.235-1.016l-.05-.034a.19.19 0 0 0-.26.052l-.335.491a.187.187 0 0 0 .053.265l.053.034c.111.073.226.14.339.206-5.758 2.682-8.74 8.192-8.186 15.137a43.8 43.8 0 0 0 .777 5.363 1.355 1.355 0 0 0-.924.236c-.422.3-1.032 1.103-.369 3.125l.334 1.026c.209.648.402 1.245.65 1.982.669 1.979 2.006 2.684 3.034 2.684.05 0 .1-.005.15-.01l.008-.001c1.338 3.019 2.942 5.555 4.903 7.75-.034.298-.05.469-.05.537 0 2.807 3.355 5.105 7.479 5.125h.052c4.124-.02 7.48-2.318 7.48-5.125 0-.071-.018-.26-.057-.589 1.94-2.185 3.529-4.704 4.857-7.698h.006c.05.006.1.01.152.01 1.028 0 2.366-.704 3.034-2.684.252-.747.452-1.363.65-1.98l.333-1.026c.664-2.023.054-2.826-.368-3.125"/>
      </g>
    </g>
  </svg>
`,ze=e=>{switch(e){case 1:default:return Ce;case 2:return Le;case 3:return Ee;case 4:return Me;case 5:return ke;case 6:return Se}},Pe=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 72h72V0H0z"/>
      <g stroke="currentColor" stroke-linejoin="round" stroke-width="3">
        <path stroke-linecap="round" d="M36 49.5a6.758 6.758 0 0 1-6.75-6.75"/>
        <path fill="currentColor" d="M47.678 36c-2.931-5.077-11.68-20.25-11.68-20.25L24.324 36a13.454 13.454 0 0 0-1.824 6.75c0 7.454 6.045 13.5 13.5 13.5 7.458 0 13.5-6.046 13.5-13.5 0-2.46-.672-4.762-1.821-6.75z"/>
      </g>
    </g>
  </svg>
`,Oe=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
    <g fill="none" fill-rule="evenodd">
      <path d="M-4 19h24V-5H-4z"/>
      <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 13l7.236-12L8 6.118.764 1z"/>
    </g>
  </svg>
`,Te=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12 7.5A4.505 4.505 0 0 0 7.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-2.48-2.019-4.5-4.5-4.5m0 9.938a.375.375 0 0 0-.375.375v1.875a.375.375 0 0 0 .75 0v-1.875a.375.375 0 0 0-.375-.375m0-10.875a.375.375 0 0 0 .375-.375V4.313a.375.375 0 0 0-.75 0v1.875c0 .207.168.375.375.375m4.376 9.282a.375.375 0 0 0-.531.53L17.17 17.7a.372.372 0 0 0 .53 0 .374.374 0 0 0 .001-.53l-1.325-1.326zm-8.752-7.69a.376.376 0 0 0 .53 0 .374.374 0 0 0 .001-.53L6.83 6.299a.375.375 0 0 0-.531.53zm12.064 3.47h-1.875a.375.375 0 0 0 0 .75h1.875a.375.375 0 0 0 0-.75M6.563 12a.375.375 0 0 0-.375-.375H4.313a.375.375 0 0 0 0 .75h1.875A.375.375 0 0 0 6.563 12m9.547-3.735a.378.378 0 0 0 .266-.11l1.325-1.326a.375.375 0 0 0-.53-.53l-1.327 1.326a.375.375 0 0 0 .266.64m-8.486 7.58L6.299 17.17a.374.374 0 0 0 .001.53.372.372 0 0 0 .53 0l1.325-1.326a.375.375 0 0 0-.531-.53" fill="#fdd737"/>
    </g>
  </svg>
`,Ie=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M6.587 11.235l-.288-.889.756-.549A.093.093 0 0 0 7 9.628h-.935l-.29-.889a.092.092 0 0 0-.087-.065.094.094 0 0 0-.09.065l-.288.89h-.935a.093.093 0 0 0-.055.168l.755.55-.288.888a.093.093 0 0 0 .034.104.088.088 0 0 0 .055.02c.02 0 .039-.007.055-.02l.757-.549.755.55a.09.09 0 0 0 .11 0 .091.091 0 0 0 .034-.105M9.419 6.15l-.385 1.185a.125.125 0 0 0 .193.14l1.008-.732 1.008.731a.125.125 0 1 0 .193-.139L11.05 6.15l1.008-.733a.126.126 0 0 0 .046-.14.127.127 0 0 0-.12-.086h-1.247l-.383-1.185a.126.126 0 0 0-.24 0L9.73 5.191H8.484a.127.127 0 0 0-.12.086.126.126 0 0 0 .047.14l1.008.733zm8.161 1.551a6.492 6.492 0 0 0-2.258-1.545l-.385-.159a.187.187 0 0 0-.248.235l.137.393a5.789 5.789 0 0 1-1.48 6.096A5.74 5.74 0 0 1 9.383 14.3a5.756 5.756 0 0 1-2.205-.435l-.386-.158a.187.187 0 0 0-.248.235l.137.393c.307.883.785 1.67 1.42 2.34a6.467 6.467 0 0 0 4.74 2.04 6.501 6.501 0 0 0 4.485-1.786 6.48 6.48 0 0 0 2.035-4.56 6.481 6.481 0 0 0-1.78-4.667" fill="#CAD4DB"/>
    </g>
  </svg>
`,Ue=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path fill="none" d="M0 24h24V0H0z"/>
      <path fill="#CAD4DB" d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052"/>
      <path fill="#FDD737" d="M5.661 10.902a4.493 4.493 0 0 1 4.09-2.65c.248 0 .5.023.76.072.22-.398.492-.756.791-1.088a3.916 3.916 0 0 0-3.423-2.01 3.942 3.942 0 0 0-3.938 3.938c0 .651.175 1.274.473 1.836.268-.074.545-.126.836-.126.138 0 .274.01.411.028M7.879 4.29a.375.375 0 0 1-.375-.376V2.04a.375.375 0 0 1 .75 0v1.875a.375.375 0 0 1-.375.375M4.166 5.827a.378.378 0 0 1-.266-.11L2.575 4.391a.375.375 0 0 1 .531-.53l1.326 1.326a.375.375 0 0 1-.266.64M2.629 9.54H.754a.375.375 0 0 1 0-.75h1.875a.375.375 0 0 1 0 .75m8.961-3.713a.378.378 0 0 1-.265-.11.377.377 0 0 1 0-.53l1.327-1.326a.375.375 0 1 1 .53.53l-1.325 1.326a.378.378 0 0 1-.266.11"/>
    </g>
  </svg>
`,Be=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12.932 9.57a.373.373 0 0 1 0 .53.373.373 0 0 1-.53 0 3.722 3.722 0 0 0-1.487-.897 3.743 3.743 0 0 0-1.165-.202c-1.475 0-2.734.86-3.344 2.1a3.17 3.17 0 0 1 1.09.7.376.376 0 0 1-.265.641.374.374 0 0 1-.264-.11 2.42 2.42 0 0 0-.843-.539l.014.004a2.426 2.426 0 0 0-.888-.172 2.438 2.438 0 1 0 0 4.875h10.5a5.25 5.25 0 0 0 0-10.5c-2.169 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.051" fill="#cad4db"/>
    </g>
  </svg>
`,De=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M7.268 23.132a.374.374 0 0 0 .325.562.376.376 0 0 0 .325-.187l3.613-6.258h-.867zm4.684-2.922a.374.374 0 0 0 .325.561.376.376 0 0 0 .325-.187l1.925-3.335h-.866l-1.709 2.96zm-5.997 0a.374.374 0 0 0 .325.561.376.376 0 0 0 .325-.187L8.53 17.25h-.866z" fill="#61b6df"/>
      <path d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052" fill="#879cb2"/>
    </g>
  </svg>
`,Ne=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052m-.277 12.389h-.923l.462-.799a.225.225 0 0 0-.39-.225l-.46.798-.462-.798a.225.225 0 0 0-.39.225l.461.8h-.923a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45m3.55-2.842h-.922l.461-.799a.226.226 0 0 0-.39-.224l-.46.798-.462-.798a.226.226 0 0 0-.391.224l.461.8h-.922a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45m-7.099 0h-.922l.461-.799a.226.226 0 0 0-.39-.224l-.46.798-.462-.798a.226.226 0 0 0-.391.224l.461.8h-.922a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45" fill="#CAD4DB"/>
    </g>
  </svg>
`,Re=e=>{if(!e)return Te;switch(xe[e.toLowerCase()]||e){case"night-clear-sky":return Ie;case"new-clouds":return Ue;case"scattered-clouds":return Be;case"rain":return De;case"snow":return Ne;default:return Te}},je=r`
  :host {
    display: block;
  }

  ha-card {
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    padding: 0;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  /* Classic Layout Header */
  .header {
    padding: 12px 16px 8px;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--primary-text-color);
    text-align: center;
    letter-spacing: 0.2px;
  }

  /* Classic Main Grid */
  .main-grid {
    display: grid;
    grid-template-columns: 90px 1fr 1.2fr;
    align-items: stretch;
    transition: background-color 0.4s ease;
  }

  .main-grid.no-face {
    grid-template-columns: 1fr 1.2fr;
  }

  .main-grid.only-aqi {
    grid-template-columns: 90px 1fr;
  }

  .face-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.2s;
  }

  .face-section:active {
    transform: scale(0.95);
  }

  .face-section svg {
    display: block;
    width: 58px;
    height: 58px;
  }

  .aqi-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    cursor: pointer;
    text-align: center;
  }

  .aqi-value {
    font-size: 2.8rem;
    line-height: 1;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    letter-spacing: -1px;
  }

  .aqi-unit {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    opacity: 0.9;
  }

  .apl-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    gap: 6px;
    cursor: pointer;
  }

  .apl-badge {
    font-size: 0.95rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    padding: 2px 4px;
  }

  .pollutant-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    color: #333333;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 600;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    max-width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Classic Weather Bar */
  .weather-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: var(--card-background-color, rgba(255, 255, 255, 0.05));
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--secondary-text-color);
  }

  .weather-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 6px;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }

  .weather-item:not(:last-child) {
    border-right: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  .weather-item:hover {
    background-color: rgba(125, 125, 125, 0.08);
  }

  .weather-item svg {
    flex-shrink: 0;
    display: inline-block;
  }

  .weather-item span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ========================================================
     Modern Layout Styles
     ======================================================== */
  .card-container.modern-layout {
    padding: 16px;
    box-sizing: border-box;
  }

  .card-container.modern-layout.no-title {
    padding: 12px;
  }

  .modern-header {
    font-size: 1.35rem;
    font-weight: 700;
    text-align: center;
    color: var(--primary-text-color, #111111);
    letter-spacing: -0.2px;
    margin: 0 0 14px 0;
    line-height: 1.25;
  }

  .modern-box {
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .modern-colored-section {
    padding: 18px 20px 16px;
    transition: background-color 0.4s ease;
    box-sizing: border-box;
  }

  .modern-top-grid {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
  }

  .modern-top-grid.no-face {
    grid-template-columns: auto 1fr;
  }

  .modern-top-grid.no-aqi {
    grid-template-columns: 1fr auto;
  }

  .modern-top-grid.only-status {
    grid-template-columns: 1fr;
  }

  .modern-aqi-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    color: inherit;
    border-radius: 12px;
    padding: 8px 14px;
    min-width: 64px;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease, background-color 0.2s ease;
  }

  .modern-box[data-font="light"] .modern-aqi-badge {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .modern-aqi-badge:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .modern-box[data-font="light"] .modern-aqi-badge:hover {
    background-color: rgba(255, 255, 255, 0.28);
  }

  .modern-aqi-badge:active {
    transform: scale(0.96);
  }

  .modern-aqi-val {
    font-size: 1.85rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
  }

  .modern-aqi-lbl {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 4px;
    opacity: 0.9;
    white-space: nowrap;
  }

  .modern-status-section {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    min-width: 0;
  }

  .modern-status-text {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.2px;
    word-break: break-word;
  }

  .modern-face-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s ease;
  }

  .modern-face-section:active {
    transform: scale(0.95);
  }

  .modern-face-section svg {
    display: block;
    width: 52px;
    height: 52px;
    color: inherit;
  }

  .modern-divider {
    height: 1px;
    background-color: currentColor;
    opacity: 0.12;
    margin: 16px 0 14px;
  }

  .modern-pollutant-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-size: 1.15rem;
    line-height: 1.25;
    cursor: pointer;
  }

  .modern-pollutant-name {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .modern-pollutant-bold {
    font-weight: 700;
  }

  .modern-pollutant-val {
    font-weight: 600;
    white-space: nowrap;
    text-align: right;
    flex-shrink: 0;
  }

  .modern-weather-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    background-color: var(--ha-card-background, var(--card-background-color, #ffffff));
    color: var(--primary-text-color, #212121);
    padding: 14px 16px;
    font-size: 1.1rem;
    font-weight: 500;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .modern-weather-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 6px;
    transition: transform 0.15s ease;
  }

  .modern-weather-item:hover {
    transform: translateY(-1px);
  }

  .modern-weather-item svg {
    flex-shrink: 0;
    display: inline-block;
  }

  .modern-weather-item.humidity-item svg {
    color: #29b6f6;
  }

  .modern-weather-item span {
    white-space: nowrap;
  }

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-weight: 500;
    text-align: center;
    font-size: 0.9rem;
  }
`;class Ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Qe=(e,t,i)=>{_e(e,t,i)},We="ontouchstart"in window||navigator.maxTouchPoints>0||"msMaxTouchPoints"in navigator&&navigator.msMaxTouchPoints>0,Fe=()=>{const e=document.body,t=e.querySelector(".action-handler-air-visual-card");if(t)return t;const i=document.createElement("div");i.className="action-handler-air-visual-card",i.style.position="absolute",i.style.width=We?"100px":"50px",i.style.height=We?"100px":"50px",i.style.transform="translate(-50%, -50%) scale(0)",i.style.pointerEvents="none",i.style.zIndex="999",i.style.transition="transform 0.1s ease-out",i.style.borderRadius="50%",i.style.background="rgba(var(--rgb-primary-color), 0.3)";const a=i;a.holdTime=500,a.cancelled=!1,a.held=!1,a.timer=void 0,a.dblClickTimeout=void 0,a.isRepeating=!1,a.repeatTimeout=void 0,e.appendChild(i);const n=(e=>{const t=e;return t.startAnimation=(e,i)=>{Object.assign(t.style,{left:`${e}px`,top:`${i}px`,transform:"translate(-50%, -50%) scale(1)"})},t.stopAnimation=()=>{Object.assign(t.style,{left:"",top:"",transform:"translate(-50%, -50%) scale(0)"})},t.bind=(e,i={})=>{if(e.actionHandler&&ve(i,e.actionHandler.options))return;if(e.actionHandler?(e.removeEventListener("touchstart",e.actionHandler.start),e.removeEventListener("touchend",e.actionHandler.end),e.removeEventListener("touchcancel",e.actionHandler.end),e.removeEventListener("mousedown",e.actionHandler.start),e.removeEventListener("click",e.actionHandler.end),e.removeEventListener("keydown",e.actionHandler.handleKeyDown),e.actionHandler.handleTouchMove&&e.removeEventListener("touchmove",e.actionHandler.handleTouchMove)):e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1}),e.actionHandler={options:i},i.disabled)return;e.actionHandler.start=a=>{if(a.detail?.ignore)return;let n,o;t.cancelled=!1,t.held=!1,a.touches?(n=a.touches[0].clientX,o=a.touches[0].clientY):(n=a.clientX,o=a.clientY),i.hasHold&&(t.timer=window.setTimeout(()=>{if(t.startAnimation(n,o),t.held=!0,Qe(e,"action",{action:"hold"}),i.repeat&&i.repeat>0){let a=0;t.isRepeating=!0,t.repeatTimeout=window.setInterval(()=>{a++,Qe(e,"action",{action:"hold"}),i.repeatLimit&&a>=i.repeatLimit&&(window.clearInterval(t.repeatTimeout),t.isRepeating=!1)},i.repeat)}},t.holdTime))},e.actionHandler.end=a=>{if(!a.detail?.ignore)return["touchend","touchcancel"].includes(a.type)&&t.cancelled?(t.isRepeating&&t.repeatTimeout&&(window.clearInterval(t.repeatTimeout),t.isRepeating=!1),void(i.isMomentary&&Qe(e,"action",{action:"release"}))):void("touchcancel"!==a.type&&(["touchend","touchcancel","mouseup"].includes(a.type)&&t.stopAnimation(),t.isRepeating&&t.repeatTimeout&&(window.clearInterval(t.repeatTimeout),t.isRepeating=!1),t.timer&&(clearTimeout(t.timer),t.timer=void 0),t.held||(i.hasDoubleClick?"click"===a.type&&a.detail<2||!t.dblClickTimeout?t.dblClickTimeout=window.setTimeout(()=>{t.dblClickTimeout=void 0,Qe(e,"action",{action:"tap"})},250):(clearTimeout(t.dblClickTimeout),t.dblClickTimeout=void 0,Qe(e,"action",{action:"double_tap"})):Qe(e,"action",{action:"tap"})),i.isMomentary&&Qe(e,"action",{action:"release"})))},i.disableKbd||(e.actionHandler.handleKeyDown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),e.click())});const a=i=>{if(!i.touches)return;const a=i.touches[0],n=e.getBoundingClientRect(),o=a.clientX-n.left,r=a.clientY-n.top;(o<0||r<0||o>=n.width||r>=n.height)&&(t.cancelled=!0)};e.actionHandler.handleTouchMove=a,e.addEventListener("touchstart",e.actionHandler.start,{passive:!0}),e.addEventListener("touchmove",a,{passive:!0}),e.addEventListener("touchend",e.actionHandler.end),e.addEventListener("touchcancel",e.actionHandler.end),e.addEventListener("mousedown",e.actionHandler.start,{passive:!0}),e.addEventListener("click",e.actionHandler.end),i.disableKbd||e.addEventListener("keydown",e.actionHandler.handleKeyDown)},["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{t.cancelled=!0,t.timer&&(t.stopAnimation(),clearTimeout(t.timer),t.timer=void 0,t.isRepeating&&t.repeatTimeout&&(window.clearInterval(t.repeatTimeout),t.isRepeating=!1))},{passive:!0})}),t})(i);return n};const Ke=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Ve{constructor(e){super(e)}render(e){}update(e,[t]){return ve(t,this.previousOptions)||(((e,t)=>{const i=Fe();i&&i.bind(e,t)})(e.element,t),this.previousOptions=t?{...t}:void 0),this.render(t)}}),Ge={pm25:{unit:"µg/m³",decimals:1,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:9},{aqiLow:51,aqiHigh:100,bpLow:9.1,bpHigh:35.4},{aqiLow:101,aqiHigh:150,bpLow:35.5,bpHigh:55.4},{aqiLow:151,aqiHigh:200,bpLow:55.5,bpHigh:125.4},{aqiLow:201,aqiHigh:300,bpLow:125.5,bpHigh:225.4},{aqiLow:301,aqiHigh:500,bpLow:225.5,bpHigh:325.4}]},pm10:{unit:"µg/m³",decimals:0,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:54},{aqiLow:51,aqiHigh:100,bpLow:55,bpHigh:154},{aqiLow:101,aqiHigh:150,bpLow:155,bpHigh:254},{aqiLow:151,aqiHigh:200,bpLow:255,bpHigh:354},{aqiLow:201,aqiHigh:300,bpLow:355,bpHigh:424},{aqiLow:301,aqiHigh:500,bpLow:425,bpHigh:604}]},co:{unit:"ppm",decimals:1,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:4.4},{aqiLow:51,aqiHigh:100,bpLow:4.5,bpHigh:9.4},{aqiLow:101,aqiHigh:150,bpLow:9.5,bpHigh:12.4},{aqiLow:151,aqiHigh:200,bpLow:12.5,bpHigh:15.4},{aqiLow:201,aqiHigh:300,bpLow:15.5,bpHigh:30.4},{aqiLow:301,aqiHigh:500,bpLow:30.5,bpHigh:50.4}]},no2:{unit:"ppb",decimals:0,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:53},{aqiLow:51,aqiHigh:100,bpLow:54,bpHigh:100},{aqiLow:101,aqiHigh:150,bpLow:101,bpHigh:360},{aqiLow:151,aqiHigh:200,bpLow:361,bpHigh:649},{aqiLow:201,aqiHigh:300,bpLow:650,bpHigh:1249},{aqiLow:301,aqiHigh:500,bpLow:1250,bpHigh:2049}]},so2:{unit:"ppb",decimals:0,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:35},{aqiLow:51,aqiHigh:100,bpLow:36,bpHigh:75},{aqiLow:101,aqiHigh:150,bpLow:76,bpHigh:185},{aqiLow:151,aqiHigh:200,bpLow:186,bpHigh:304},{aqiLow:201,aqiHigh:300,bpLow:305,bpHigh:604},{aqiLow:301,aqiHigh:500,bpLow:605,bpHigh:1004}]},o3:{unit:"ppm",decimals:3,breakpoints:[{aqiLow:0,aqiHigh:50,bpLow:0,bpHigh:.054},{aqiLow:51,aqiHigh:100,bpLow:.055,bpHigh:.07},{aqiLow:101,aqiHigh:150,bpLow:.071,bpHigh:.085},{aqiLow:151,aqiHigh:200,bpLow:.086,bpHigh:.105},{aqiLow:201,aqiHigh:300,bpLow:.106,bpHigh:.2},{aqiLow:301,aqiHigh:500,bpLow:.405,bpHigh:.604}]}};console.info("%c  AIR-VISUAL-CARD  \n%c  Version 3.2.0    ","color: #279b48; font-weight: bold; background: #eafaf1; padding: 2px 6px; border-radius: 4px;","color: #333; font-weight: bold; background: #f0f0f0; padding: 2px 6px; border-radius: 4px;");const Ye=window;Ye.customCards=Ye.customCards||[],Ye.customCards.push({type:"air-visual-card",name:"Air Visual Card",description:"A modern, responsive Lovelace card displaying Air Quality Index (AQI) and weather data.",preview:!0});let Xe=class extends se{static async getConfigElement(){return await Promise.resolve().then(function(){return Ze}),document.createElement("air-visual-card-editor")}static getStubConfig(){return{air_quality_index:"sensor.u_s_air_quality_index",air_pollution_level:"sensor.u_s_air_pollution_level",main_pollutant:"sensor.u_s_main_pollutant",city:"San Francisco",country:"US",unit_of_measurement:"AQI",layout:"modern",hide_title:!1,hide_face:!1,hide_weather:!1}}setConfig(e){if(!e)throw new Error("Invalid configuration");if(!e.air_quality_index&&!e.air_pollution_level)throw new Error("Please define at least one air quality sensor entity (air_quality_index or air_pollution_level).");this._config={unit_of_measurement:"AQI",...e,tap_action:e.tap_action||{action:"more-info"},hold_action:e.hold_action||{action:"more-info"}}}get config(){return this._config}shouldUpdate(e){if(!this._config)return!1;if(e.has("_config"))return!0;const t=e.get("hass");if(!t||!this.hass)return!0;const i=[this._config.air_quality_index,this._config.air_pollution_level,this._config.main_pollutant,this._config.main_pollutant_value,this._config.weather].filter(Boolean);return 0===i.length||i.some(e=>t.states[e]!==this.hass.states[e])}getCardSize(){return this._config?.hide_weather?2:3}getLayoutOptions(){return{grid_columns:2,grid_rows:this._config?.hide_weather?2:3,grid_min_columns:1,grid_min_rows:2}}_openMoreInfo(e){e&&this.hass&&_e(this,"hass-more-info",{entityId:e})}_handleCardAction(e){if(this.hass&&this._config&&e.detail.action){const t={entity:this._config.air_quality_index||this._config.air_pollution_level||this._config.main_pollutant||this._config.main_pollutant_value,...this._config};((e,t,i,a)=>{let n;"double_tap"===a&&i.double_tap_action?n=i.double_tap_action:"hold"===a&&i.hold_action?n=i.hold_action:"tap"===a&&i.tap_action&&(n=i.tap_action),we(e,t,i,n)})(this,this.hass,t,e.detail.action)}}render(){if(!this.hass||!this._config)return j``;const e=this._config.air_quality_index?this.hass.states[this._config.air_quality_index]:void 0,t=this._config.air_pollution_level?this.hass.states[this._config.air_pollution_level]:void 0,i=this._config.main_pollutant?this.hass.states[this._config.main_pollutant]:void 0,a=this._config.main_pollutant_value?this.hass.states[this._config.main_pollutant_value]:void 0,n=this._config.weather?this.hass.states[this._config.weather]:void 0;let o=NaN;if(e)o=parseInt(e.state,10);else if(t){const e=parseInt(t.state,10);isNaN(e)||(o=e)}const r=!isNaN(o);let s=r?(l=o)<=50?1:l<=100?2:l<=150?3:l<=200?4:l<=300?5:6:1;var l;!r&&t&&qe[t.state.toLowerCase()]&&(s=qe[t.state.toLowerCase()]);const c=$e[s];let d=c.label;if(t&&isNaN(parseInt(t.state,10))){const e=this.hass.formatEntityState?.(t);d=e||t.state.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}let h="",u="",p="";if(i){const e=i.state.toLowerCase(),t=i.attributes?.pollutant_symbol?.toLowerCase()||e;h=Ae[t]||Ae[e]||i.state,u=i.attributes?.pollutant_unit||He[t]||He[e]||""}if(a&&(p=a.state,!u&&a.attributes?.unit_of_measurement&&(u=a.attributes.unit_of_measurement),!h)){const e=a.attributes?.device_class,t=(this._config.main_pollutant_value||"").toLowerCase(),i=String(a.attributes?.friendly_name||"").toLowerCase();"pm25"===e||t.includes("pm2_5")||t.includes("pm25")||i.includes("pm2.5")||i.includes("pm 2.5")||i.includes("pm2_5")||i.includes("particulate matter 2.5")?h="PM2.5":"pm10"===e||t.includes("pm10")||i.includes("pm10")?h="PM10":"o3"===e||t.includes("ozone")||i.includes("ozone")?h="Ozone":"co"===e||t.includes("carbon_monoxide")?h="Carbon Monoxide":"no2"===e||t.includes("nitrogen_dioxide")?h="Nitrogen Dioxide":("so2"===e||t.includes("sulphur_dioxide")||t.includes("sulfur_dioxide"))&&(h="Sulfur Dioxide")}if(i&&(!p||"unknown"===p||"unavailable"===p)&&r){const e=i.attributes?.pollutant_symbol||i.state||h,t=i.attributes?.pollutant_unit,a=function(e,t,i){const a=function(e){if(!e)return null;const t=e.toLowerCase().trim().replace(/[\s\-_.]/g,"");return"pm25"===t||"p2"===t||"particulatematter25"===t?"pm25":"pm10"===t||"p1"===t||"particulatematter10"===t?"pm10":"co"===t||"carbonmonoxide"===t?"co":"no2"===t||"n2"===t||"nitrogendioxide"===t?"no2":"so2"===t||"s2"===t||"sulfurdioxide"===t||"sulphurdioxide"===t?"so2":"o3"===t||"ozone"===t?"o3":t.includes("pm25")||t.includes("pm2.5")||t.includes("particulate25")?"pm25":t.includes("pm10")||t.includes("particulate10")?"pm10":t.includes("carbonmonoxide")?"co":t.includes("nitrogendioxide")?"no2":t.includes("sulfurdioxide")||t.includes("sulphurdioxide")?"so2":t.includes("ozone")?"o3":null}(e);if(!a||!Ge[a])return null;if(isNaN(t)||t<0)return null;const n=Ge[a],{breakpoints:o}=n,r=o.find(e=>t<=e.aqiHigh)||o[o.length-1],{aqiLow:s,aqiHigh:l,bpLow:c,bpHigh:d}=r;let h=(t-s)/(l-s)*(d-c)+c,u=n.unit,p=n.decimals;const g=i?.toLowerCase().trim();return g&&("o3"===a?"ppb"===g?(h*=1e3,u="ppb",p=0):"ppm"===g&&(u="ppm",p=3):"co"===a?"ppb"===g&&(h*=1e3,u="ppb",p=0):"no2"!==a&&"so2"!==a||"ppm"===g&&(h/=1e3,u="ppm",p=3)),{value:p>0?h.toFixed(p):Math.round(h).toString(),unit:u}}(e,o,t);a&&(p=a.value,u=a.unit)}const g=u?u.replace(/ug/gi,"µg").replace(/m3/gi,"m³"):"";let m="";p&&g?m=`${p} ${g}`:p?m=p:g&&(m=g);const f=this._config.city||"",_=this._config.unit_of_measurement||"AQI",v=Boolean(this._config.hide_title||!f),b=Boolean(this._config.hide_face),w=Boolean(this._config.hide_aqi),y=Boolean(this._config.hide_apl),$=Boolean(this._config.hide_weather||!n),x="modern"===this._config.layout||"new"===this._config.layout||Boolean(this._config.modern_layout);let A="",H="",q="",C="",L="";if(n){L=n.state;const e=n.attributes?.temperature,t=this.hass.config?.unit_system?.temperature||"°";void 0!==e&&(A=`${e}${t}`);const i=n.attributes?.humidity;void 0!==i&&(H=`${i}%`,q=`${i} %`);const a=n.attributes?.wind_speed,o=this._config.speed_unit||n.attributes?.wind_speed_unit||("km"===this.hass.config?.unit_system?.length?"km/h":"mph");void 0!==a&&(C=`${a} ${o}`)}if(x){const e=["modern-top-grid"];b&&!w&&e.push("no-face"),w&&!b&&e.push("no-aqi"),b&&w&&e.push("only-status");const t=f?`${f} air quality index (${_})`:`Air quality index (${_})`;return j`
        <ha-card
          .actionHandler=${Ke({hasHold:ye(this._config.hold_action),hasDoubleClick:ye(this._config.double_tap_action)})}
          @action=${this._handleCardAction}
        >
          <div class="card-container modern-layout ${v?"no-title":""}">
            ${v?j``:j`<div class="modern-header">${t}</div>`}

            <div
              class="modern-box"
              data-font="${"#ffffff"===c.fontColor.toLowerCase()?"light":"dark"}"
            >
              <div
                class="modern-colored-section"
                style="background-color: ${c.bgColor}; color: ${c.fontColor};"
              >
                <div class="${e.join(" ")}">
                  ${w?j``:j`
                        <div
                          class="modern-aqi-badge"
                          @click=${()=>this._openMoreInfo(this._config.air_quality_index)}
                          title="AQI: ${r?o:"N/A"}"
                        >
                          <div class="modern-aqi-val">${r?o:"—"}</div>
                          <div class="modern-aqi-lbl">
                            ${this._config.country?`${this._config.country} `:""}${_}
                          </div>
                        </div>
                      `}

                  ${y?j``:j`
                        <div
                          class="modern-status-section"
                          @click=${()=>this._openMoreInfo(this._config.main_pollutant_value||this._config.main_pollutant||this._config.air_pollution_level)}
                          title="${d}"
                        >
                          <div class="modern-status-text">${d}</div>
                        </div>
                      `}

                  ${b?j``:j`
                        <div
                          class="modern-face-section"
                          @click=${()=>this._openMoreInfo(this._config.air_quality_index||this._config.air_pollution_level)}
                          title="Air Quality: ${c.label}"
                        >
                          ${ze(s)}
                        </div>
                      `}
                </div>

                ${y||!h&&!m?j``:j`
                      <div class="modern-divider"></div>
                      <div
                        class="modern-pollutant-grid"
                        @click=${()=>this._openMoreInfo(this._config.main_pollutant_value||this._config.main_pollutant||this._config.air_pollution_level)}
                        title="${h}: ${m}"
                      >
                        <div class="modern-pollutant-name">
                          Main pollutant: <span class="modern-pollutant-bold">${h||"PM2.5"}</span>
                        </div>
                        ${m?j`<div class="modern-pollutant-val">${m}</div>`:j``}
                      </div>
                    `}
              </div>

              ${!$&&n?j`
                    <div
                      class="modern-weather-bar"
                      @click=${()=>this._openMoreInfo(this._config.weather)}
                      title="Weather: ${L}"
                    >
                      <div class="modern-weather-item">
                        ${Re(L)}
                        <span>${A}</span>
                      </div>
                      <div class="modern-weather-item">
                        <span
                          style="display: inline-flex; ${void 0!==n.attributes?.wind_bearing?`transform: rotate(${n.attributes.wind_bearing}deg);`:""}"
                        >
                          ${Oe}
                        </span>
                        <span>${C}</span>
                      </div>
                      <div class="modern-weather-item humidity-item">
                        ${Pe}
                        <span>${q}</span>
                      </div>
                    </div>
                  `:j``}
            </div>
          </div>
        </ha-card>
      `}const E=["main-grid"];return b&&E.push("no-face"),y&&!b&&E.push("only-aqi"),j`
      <ha-card
        .actionHandler=${Ke({hasHold:ye(this._config.hold_action),hasDoubleClick:ye(this._config.double_tap_action)})}
        @action=${this._handleCardAction}
      >
        <div class="card-container">
          ${v?j``:j`<div class="header">${f} Air Quality Index</div>`}

          <div
            class="${E.join(" ")}"
            style="background-color: ${c.bgColor}; color: ${c.fontColor};"
          >
            ${b?j``:j`
                  <div
                    class="face-section"
                    style="background-color: ${c.faceColor}; color: ${c.fontColor};"
                    @click=${()=>this._openMoreInfo(this._config.air_quality_index||this._config.air_pollution_level)}
                    title="Air Quality: ${c.label}"
                  >
                    ${ze(s)}
                  </div>
                `}
            ${w?j``:j`
                  <div
                    class="aqi-section"
                    @click=${()=>this._openMoreInfo(this._config.air_quality_index)}
                    title="AQI: ${r?o:"N/A"}"
                  >
                    <div class="aqi-value">${r?o:"—"}</div>
                    <div class="aqi-unit">${this._config.country?`${this._config.country} `:""}${_}</div>
                  </div>
                `}
            ${y?j``:j`
                  <div
                    class="apl-section"
                    @click=${()=>this._openMoreInfo(this._config.main_pollutant_value||this._config.main_pollutant||this._config.air_pollution_level)}
                    title="${d}"
                  >
                    <div class="apl-badge">${d}</div>
                    ${h||m?j`
                          <div class="pollutant-badge">
                            ${[h,m].filter(Boolean).join(" | ")}
                          </div>
                        `:j``}
                  </div>
                `}
          </div>

          ${!$&&n?j`
                <div
                  class="weather-bar"
                  @click=${()=>this._openMoreInfo(this._config.weather)}
                  title="Weather: ${L}"
                >
                  <div class="weather-item">
                    ${Re(L)}
                    <span>${A}</span>
                  </div>
                  <div class="weather-item">
                    ${Oe}
                    <span>${C}</span>
                  </div>
                  <div class="weather-item">
                    ${Pe}
                    <span>${H}</span>
                  </div>
                </div>
              `:j``}
        </div>
      </ha-card>
    `}static get styles(){return je}};e([ue({attribute:!1})],Xe.prototype,"hass",void 0),e([pe()],Xe.prototype,"_config",void 0),Xe=e([ce("air-visual-card")],Xe);let Je=class extends se{constructor(){super(...arguments),this._computeLabel=e=>({layout:"Card Layout",integration_preset:"Integration Preset / Auto-Fill",air_quality_index:"Air Quality Index (AQI) Value",air_pollution_level:"Air Pollution Level Sensor",main_pollutant:"Main/Dominant Pollutant Sensor",main_pollutant_value:"Main/Dominant Pollutant Value",weather:"Weather Entity (Optional)",city:"City Name",country:"Country / Standard Label",unit_of_measurement:"AQI Unit (Default: AQI)",speed_unit:"Wind Speed Unit Override",hide_title:"Hide City Title",hide_face:"Hide Face Icon",hide_weather:"Hide Weather Forecast Bar",hide_aqi:"Hide AQI Value Badge",hide_apl:"Hide Pollution Level & Pollutant"}[e.name]||e.name),this._computeHelper=e=>({layout:"Choose between the classic original layout and the new modern layout",integration_preset:"Select an integration to automatically detect and pre-fill linked sensors from your Home Assistant setup",air_quality_index:"Required. This is a number that represents the AQI in your location",air_pollution_level:"Optional. Description of the air quality based on the AQI value.",main_pollutant_value:"Optional. If left blank, pollutant concentration is calculated from the AQI using EPA breakpoints."}[e.name]||"")}setConfig(e){this._config=e}get _schema(){const e=this._config?.integration_preset,t=Boolean(e&&"manual"!==e)?{entity:{domain:"sensor",integration:e}}:{entity:{domain:"sensor"}};return[{name:"layout",required:!1,selector:{select:{mode:"dropdown",options:[{label:"Classic (Original)",value:"classic"},{label:"Modern (New)",value:"modern"}]}}},{name:"integration_preset",required:!1,selector:{select:{mode:"dropdown",options:[{label:"Manual / Custom",value:"manual"},{label:"Google Air Quality",value:"google_air_quality"},{label:"OpenWeatherMap",value:"openweathermap"},{label:"AirVisual (IQAir)",value:"airvisual"},{label:"WAQI (World Air Quality Index)",value:"waqi"}]}}},{name:"air_quality_index",required:!1,selector:t},{name:"air_pollution_level",required:!1,selector:t},{name:"main_pollutant",required:!1,selector:t},{name:"main_pollutant_value",required:!1,selector:t},{name:"weather",required:!1,selector:"openweathermap"===e?{entity:{domain:"weather",integration:"openweathermap"}}:{entity:{domain:"weather"}}},{type:"grid",name:"",schema:[{name:"city",selector:{text:{}}},{name:"country",selector:{text:{}}}]},{type:"grid",name:"",schema:[{name:"unit_of_measurement",selector:{text:{}}},{name:"speed_unit",selector:{text:{}}}]},{type:"grid",name:"",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_face",selector:{boolean:{}}},{name:"hide_weather",selector:{boolean:{}}},{name:"hide_aqi",selector:{boolean:{}}},{name:"hide_apl",selector:{boolean:{}}}]}]}render(){if(!this.hass||!this._config)return j``;const e={integration_preset:this._config.integration_preset||"manual",layout:this._config.layout||"classic",...this._config,air_quality_index:this._config.air_quality_index||"",air_pollution_level:this._config.air_pollution_level||"",main_pollutant:this._config.main_pollutant||"",main_pollutant_value:this._config.main_pollutant_value||"",weather:this._config.weather||"",hide_title:this._config.hide_title??!1,hide_face:this._config.hide_face??!1,hide_weather:this._config.hide_weather??!1,hide_aqi:this._config.hide_aqi??!1,hide_apl:this._config.hide_apl??!1,unit_of_measurement:this._config.unit_of_measurement||"AQI",country:this._config.country||"",city:this._config.city||""};return j`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(e){if(!this._config||!this.hass)return;const t=this._config.integration_preset||"manual",i=e.detail.value.integration_preset,a={...this._config,...e.detail.value};i&&i!==t&&(delete a.air_quality_index,delete a.air_pollution_level,delete a.main_pollutant,delete a.main_pollutant_value,delete a.weather,delete a.city,"manual"!==i&&this._applyIntegrationPreset(i,a)),Object.keys(a).forEach(e=>{""!==a[e]&&void 0!==a[e]||delete a[e]}),this._config=a,_e(this,"config-changed",{config:this._config})}_applyIntegrationPreset(e,t){if(!this.hass)return;const i=this.hass.entities,a=this.hass.states,n=Object.keys(a),o=n.filter(t=>{const n=i?.[t],o=String(a[t]?.attributes?.attribution||"").toLowerCase();return n?.platform===e||t.toLowerCase().includes(e)||o.includes(e)});if("google_air_quality"===e){const e=o.find(e=>{const t=a[e];return e.includes("universal_air_quality_index")||e.includes("local_air_quality_index")||"aqi"===t?.attributes?.device_class||e.includes("air_quality_index")||e.includes("aqi")});e&&(t.air_quality_index=e);const n=o.find(e=>e.includes("category")||e.includes("air_pollution_level"));n&&(t.air_pollution_level=n);const r=o.find(e=>e.includes("dominant_pollutant")||e.includes("main_pollutant")&&!e.includes("value"));r&&(t.main_pollutant=r);const s=o.find(e=>{const t=a[e],n=String(t?.attributes?.friendly_name||"").toLowerCase(),o=i?.[e]?.translation_key;return"pm25"===t?.attributes?.device_class||"pm25"===o||"pm2_5"===o||"particulate_matter_2_5"===o||n.includes("pm2.5")||n.includes("pm 2.5")||n.includes("pm2_5")||n.includes("particulate matter 2.5")||e.includes("particulate_matter_2_5")||e.includes("pm25")||e.includes("pm2_5")});if(s&&(t.main_pollutant_value=s),!t.city&&e){const i=a[e]?.attributes?.friendly_name;if(i){const e=i.replace(/google\s*air\s*quality/gi,"").replace(/universal\s*air\s*quality\s*index/gi,"").replace(/local\s*air\s*quality\s*index/gi,"").replace(/air\s*quality\s*index/gi,"").replace(/^[-_\s:]+|[-_\s:]+$/g,"");e&&(t.city=e)}}}else if("openweathermap"===e){const e=o.find(e=>{const t=a[e];return"aqi"===t?.attributes?.device_class||e.includes("air_quality_index")||e.includes("air_pollution")||e.includes("aqi")});e&&(t.air_quality_index=e),delete t.air_pollution_level,delete t.main_pollutant;const r=n.find(e=>{if(!e.startsWith("weather."))return!1;const t=i?.[e];return"openweathermap"===t?.platform||e.toLowerCase().includes("openweathermap")||String(a[e]?.attributes?.attribution||"").toLowerCase().includes("openweathermap")});r&&(t.weather=r);const s=o.find(e=>{const t=a[e],n=String(t?.attributes?.friendly_name||"").toLowerCase(),o=i?.[e]?.translation_key;return"pm25"===t?.attributes?.device_class||"particulate_matter_2_5"===o||"pm2_5"===o||"pm25"===o||n.includes("pm2.5")||n.includes("pm 2.5")||n.includes("pm2_5")||n.includes("particulate matter 2.5")||e.includes("particulate_matter_2_5")||e.includes("pm2_5")||e.includes("pm25")});if(s&&(t.main_pollutant_value=s),!t.city){const i=r&&a[r]?.attributes?.friendly_name||e&&a[e]?.attributes?.friendly_name;if(i){const e=i.replace(/open\s*weather\s*map/gi,"").replace(/^[-_\s]+|[-_\s]+$/g,"");e&&(t.city=e)}}}else if("airvisual"===e){const e=o.find(e=>"aqi"===a[e]?.attributes?.device_class||e.includes("air_quality_index"));e&&(t.air_quality_index=e);const i=o.find(e=>e.includes("air_pollution_level"));i&&(t.air_pollution_level=i);const n=o.find(e=>e.includes("main_pollutant")&&!e.includes("value"));if(n&&(t.main_pollutant=n),!t.city&&e){const i=a[e]?.attributes?.city;i&&(t.city=String(i))}}else if("waqi"===e){const e=o.find(e=>"aqi"===a[e]?.attributes?.device_class||e.includes("air_quality")||e.includes("aqi"));e&&(t.air_quality_index=e),delete t.air_pollution_level;const n=o.find(e=>{const t=a[e],n=String(t?.attributes?.friendly_name||"").toLowerCase(),o=i?.[e]?.translation_key;return"pm25"===t?.attributes?.device_class||"pm25"===o||"pm2_5"===o||"particulate_matter_2_5"===o||n.includes("pm2.5")||n.includes("pm 2.5")||n.includes("pm2_5")||n.includes("particulate matter 2.5")||e.includes("particulate_matter_2_5")||e.includes("pm2_5")||e.includes("pm25")});n&&(t.main_pollutant_value=n)}}static get styles(){return r`
      ha-form {
        display: block;
      }
    `}};e([ue({attribute:!1})],Je.prototype,"hass",void 0),e([pe()],Je.prototype,"_config",void 0),Je=e([ce("air-visual-card-editor")],Je);var Ze=Object.freeze({__proto__:null,get AirVisualCardEditor(){return Je}});export{Xe as AirVisualCard};
