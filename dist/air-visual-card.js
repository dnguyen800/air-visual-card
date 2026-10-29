function t(t,e,i,a){var n,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(o<3?n(s):o>3?n(e,i,s):n(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new o(i,t,a)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&c(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const o=a?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(i)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of a){const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=i.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=a;const o=n.fromAttribute(e,t.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(t,e,i,a=!1,n){if(void 0!==t){const o=this.constructor;if(!1===a&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??w)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=t=>t,C=A.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,H="?"+S,k=`<${H}>`,z=document,P=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,B=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,N=/"/g,D=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),W=new WeakMap,F=z.createTreeWalker(z,129);function K(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,a=[];let n,o=2===e?"<svg>":3===e?"<math>":"",s=U;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===U?"!--"===l[1]?s=q:void 0!==l[1]?s=B:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=I):void 0!==l[3]&&(s=I):s===I?">"===l[0]?(s=n??U,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?I:'"'===l[3]?N:R):s===N||s===R?s=I:s===q||s===B?s=U:(s=I,n=void 0);const d=s===I&&t[e+1].startsWith("/>")?" ":"";o+=s===U?i+k:c>=0?(a.push(r),i.slice(0,c)+M+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class Y{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let n=0,o=0;const s=t.length-1,r=this.parts,[l,c]=X(t,e);if(this.el=Y.createElement(l,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=F.nextNode())&&r.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(M)){const e=c[o++],i=a.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:n}),a.removeAttribute(t));if(D.test(a.tagName)){const t=a.textContent.split(S),e=t.length-1;if(e>0){a.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],P()),F.nextNode(),r.push({type:2,index:++n});a.append(t[e],P())}}}else if(8===a.nodeType)if(a.data===H)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=a.data.indexOf(S,t+1));)r.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,a){if(e===V)return e;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,a)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??z).importNode(e,!0);F.currentNode=a;let n=F.nextNode(),o=0,s=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Z(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new nt(n,this,t)),this._$AV.push(e),r=i[++s]}o!==r?.index&&(n=F.nextNode(),o++)}return F.currentNode=z,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),O(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new J(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Y(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const n of t)a===e.length?e.push(i=new Z(this.O(P()),this.O(P()),this,this.options)):i=e[a],i._$AI(n),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,a){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const a=t;let s,r;for(t=n[0],s=0;s<n.length-1;s++)r=G(this,a[i+s],e,s),r===V&&(r=this._$AH[s]),o||=!O(r)||r!==this._$AH[s],r===Q?t=Q:t!==Q&&(t+=(r??"")+n[s+1]),this._$AH[s]=r}o&&!a&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class at extends tt{constructor(t,e,i,a,n){super(t,e,i,a,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??Q)===V)return;const i=this._$AH,a=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Q&&(i===Q||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Y,Z),(A.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;let rt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let n=a._$litPart$;if(void 0===n){const t=i?.renderBefore??null;a._$litPart$=n=new Z(e.insertBefore(P(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const lt=st.litElementPolyfillSupport;lt?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},dt=(t=ht,e,i)=>{const{kind:a,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,n,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];e.call(this,i),this.requestUpdate(a,n,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ut({...t,state:!0,attribute:!1})}var ft,gt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(gt||(gt={}));const _t=["closed","locked","off"],mt=(t,e,i,a)=>{a=a||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=i,t.dispatchEvent(n),n},vt=(t,e)=>{if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;let i,a;if(Array.isArray(t)){const n=e;if(a=t.length,a!==n.length)return!1;for(i=a;0!==i--;)if(!vt(t[i],n[i]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;for(i of t.entries())if(!vt(i[1],e.get(i[0])))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i of t.entries())if(!e.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return((t,e)=>{if(t.byteLength!==e.byteLength)return!1;const i=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);for(let t=0;t<i.length;t++)if(i[t]!==a[t])return!1;return!0})(t,e);if(t instanceof RegExp&&e instanceof RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const n=t,o=e,s=Object.keys(n);if(a=s.length,a!==Object.keys(o).length)return!1;for(i=a;0!==i--;)if(!Object.prototype.hasOwnProperty.call(e,s[i]))return!1;for(i=a;0!==i--;){const t=s[i];if(!vt(n[t],o[t]))return!1}return!0}return t!=t&&e!=e},yt=t=>{mt(window,"haptic",t)},wt=(t,e,i,a)=>{if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(t=>t.user===e.user.id)||(yt("warning"),confirm(a.confirmation.text||`Are you sure you want to ${a.action}?`)))switch(a.action){case"more-info":(i.entity||i.camera_image)&&mt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&((t,e,i=!1)=>{i?history.replaceState(null,"",e):history.pushState(null,"",e),mt(window,"location-changed",{replace:i})})(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(((t,e)=>{((t,e,i=!0)=>{const a=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===a?"homeassistant":a;let o;switch(a){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(n,o,{entity_id:e})})(t,e,_t.includes(t.states[e].state))})(e,i.entity),yt("success"));break;case"call-service":{if(!a.service)return void yt("failure");const[t,i]=a.service.split(".",2);e.callService(t,i,a.service_data,a.target),yt("success");break}case"fire-dom-event":mt(t,"ll-custom",a)}};function bt(t){return void 0!==t&&"none"!==t.action}const $t={1:{level:1,label:"Good",bgColor:"#B0E867",faceColor:"#A8E05F",fontColor:"#718B3A"},2:{level:2,label:"Moderate",bgColor:"#E3C143",faceColor:"#FDD64B",fontColor:"#A57F23"},3:{level:3,label:"Unhealthy for Sensitive Groups",bgColor:"#E48B4E",faceColor:"#FF9B57",fontColor:"#B25826"},4:{level:4,label:"Unhealthy",bgColor:"#E45F5E",faceColor:"#FE6A69",fontColor:"#AF2C3C"},5:{level:5,label:"Very Unhealthy",bgColor:"#986EA9",faceColor:"#A97ABC",fontColor:"#634675"},6:{level:6,label:"Hazardous",bgColor:"#A5516B",faceColor:"#A87383",fontColor:"#683E51"}},At={"clear-night":"night-clear-sky",cloudy:"scattered-clouds",fog:"scattered-clouds",hail:"rain",lightning:"rain","lightning-rainy":"rain",partlycloudy:"new-clouds",pouring:"rain",rainy:"rain",snowy:"snow","snowy-rainy":"snow",sunny:"clear-sky",windy:"scattered-clouds","windy-variant":"scattered-clouds",exceptional:"snow"},xt={p2:"PM2.5",pm25:"PM2.5",pm10:"PM10",p1:"PM10",o3:"Ozone",no2:"Nitrogen Dioxide",n2:"Nitrogen Dioxide",so2:"Sulfur Dioxide",s2:"Sulfur Dioxide",co:"Carbon Monoxide",neph:"Nephelometry"},Ct={pm25:"µg/m³",pm10:"µg/m³",p2:"µg/m³",p1:"µg/m³",o3:"ppb",no2:"ppb",n2:"ppb",so2:"ppb",s2:"ppb",co:"ppm",neph:"1/Mm"},Et={good:1,moderate:2,unhealthy_for_sensitive_groups:3,"unhealthy-for-sensitive-groups":3,unhealthy_sensitive:3,"unhealthy-sensitive":3,unhealthy:4,very_unhealthy:5,"very-unhealthy":5,hazardous:6},Mt=j`
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
`,St=j`
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
`,Ht=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M22.851 37.65a.377.377 0 0 0 0 .754h2.298a.376.376 0 0 0 0-.753h-2.298zm-.272-6.836c.513.148.986.22 1.448.22.46 0 .934-.072 1.446-.22a.378.378 0 0 0 .076-.693.372.372 0 0 0-.283-.03c-.892.257-1.587.257-2.479 0a.366.366 0 0 0-.283.03.372.372 0 0 0-.182.227.371.371 0 0 0 .032.287.373.373 0 0 0 .225.18m5.363 6.349a.375.375 0 0 0 .374-.418.374.374 0 0 0-.138-.252c-1.143-.92-2.496-1.387-4.025-1.387-1.53 0-2.883.466-4.026 1.387a.374.374 0 0 0-.057.53c.13.16.368.187.53.056 1.004-.81 2.2-1.22 3.553-1.22 1.353 0 2.548.41 3.553 1.22.068.055.15.084.236.084m4.072-14.527a.375.375 0 0 0 .324-.422.382.382 0 0 0-.423-.323c-1.588.21-3.277-.342-4.408-1.445a.378.378 0 0 0-.64.275.38.38 0 0 0 .114.265c1.093 1.065 2.686 1.702 4.262 1.702.259 0 .518-.018.771-.052M21.01 20.454a.373.373 0 0 0-.266-.114h-.004a.374.374 0 0 0-.262.107c-1.13 1.103-2.816 1.658-4.408 1.444a.374.374 0 0 0-.423.324.377.377 0 0 0 .324.422c.254.034.514.052.771.052 1.577 0 3.17-.637 4.263-1.703a.377.377 0 0 0 .005-.532m10.016 4.189c0-.515-.689-.935-1.536-.935-.846 0-1.534.42-1.534.935 0 .524.673.934 1.534.934.847 0 1.536-.42 1.536-.934m-12.539.934c.848 0 1.537-.42 1.537-.934 0-.515-.69-.935-1.537-.935-.846 0-1.534.42-1.534.935 0 .524.674.934 1.534.934"/>
        <path d="M40.139 24.513a1.358 1.358 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.836 8.836 0 0 1-.759-.438l-.051-.035a.191.191 0 0 0-.26.052l-.334.492a.189.189 0 0 0 .053.265l.053.034c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.033.041a.19.19 0 0 0 .235.052l.531-.278a.191.191 0 0 0 .066-.278l-.042-.059c-.172-.24-.653-.795-1.595-1.132.342-.019.783-.033 1.022-.033 4.698 0 8.964 1.701 11.702 4.668 2.59 2.807 3.719 6.554 3.353 11.137a43.37 43.37 0 0 1-.944 6.087l-.051.27a.254.254 0 0 0 .247.3h.362a.255.255 0 0 0 .154-.054l.057-.045c.245-.187.546-.236.716-.115.343.242.35 1.053.019 2.064l-.335 1.03-.01.027c-.192.595-.39 1.21-.637 1.943-.389 1.152-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.142-.336a.255.255 0 0 0-.143-.327l-.408-.16a.255.255 0 0 0-.324.141c-1.775 4.454-3.995 7.823-6.986 10.603-1.625 1.51-3.206 1.82-5.079 1.82-1.873 0-3.453-.31-5.078-1.821-2.993-2.78-5.212-6.15-6.985-10.602a.253.253 0 0 0-.326-.14l-.407.16a.25.25 0 0 0-.142.327c.046.116.094.227.143.338.02.046.04.09.058.137a.45.45 0 0 1-.039-.006c-.796-.146-1.472-.88-1.855-2.014a142.07 142.07 0 0 1-.628-1.911l-.353-1.09c-.333-1.01-.325-1.82.018-2.062.175-.123.47-.072.734.129l.067.042a.251.251 0 0 0 .15.038l.357-.024a.226.226 0 0 0 .114-.039.252.252 0 0 0 .133-.002c.352-.089.698-.396.95-.843.41-.727.704-1.79 1.044-3.019.684-2.48 1.537-5.566 3.756-6.965 2.486-1.568 4.627-1.291 7.106-.971 2.38.306 5.074.652 8.572-.574l.08.052c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.249-3.448-3.569-3.636-5.324a.38.38 0 0 0-.172-.278l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.512-.322-4.881-.625-7.592 1.083-2.466 1.554-3.361 4.796-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.153.27-.314.404-.42.46a42.807 42.807 0 0 1-.89-5.834c-.743-9.32 4.854-13.079 8.258-14.49a.635.635 0 0 1 .045-.019c.42.184.813.318 1.167.398.876.197 1.312.622 1.494.858l.032.041a.19.19 0 0 0 .236.052l.53-.277a.191.191 0 0 0 .097-.124.184.184 0 0 0-.03-.154l-.043-.06c-.208-.29-.831-.998-2.102-1.286-.658-.147-1.472-.518-2.235-1.015l-.05-.034a.19.19 0 0 0-.261.051l-.334.492a.189.189 0 0 0 .053.266l.053.033c.112.073.226.141.338.207-5.757 2.681-8.74 8.19-8.185 15.136a43.8 43.8 0 0 0 .777 5.363 1.361 1.361 0 0 0-.923.237c-.423.298-1.033 1.102-.37 3.124l.334 1.026c.209.648.402 1.245.65 1.982.668 1.978 2.005 2.684 3.034 2.684.05 0 .1-.005.15-.01l.008-.001c1.733 3.91 3.835 6.935 6.612 9.515 1.959 1.821 3.907 2.072 5.72 2.072 1.812 0 3.76-.25 5.72-2.071 2.776-2.58 4.878-5.605 6.611-9.516h.007c.05.006.101.01.153.01 1.028 0 2.365-.705 3.032-2.683.253-.748.453-1.364.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125"/>
      </g>
    </g>
  </svg>
`,kt=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M32.065 21.722a.377.377 0 0 0-.376-.377h-4.396a.376.376 0 0 0 0 .754h4.396c.207 0 .376-.17.376-.377m-4.11 2.921c0 .524.674.934 1.535.934.847 0 1.536-.42 1.536-.934 0-.516-.689-.935-1.536-.935-.846 0-1.535.42-1.535.935m-6.893-2.921a.377.377 0 0 0-.376-.377H16.29a.376.376 0 0 0 0 .754h4.396c.208 0 .376-.17.376-.377m-4.109 2.921c0 .524.674.934 1.534.934.847 0 1.536-.42 1.536-.934 0-.516-.689-.935-1.536-.935-.846 0-1.534.42-1.534.935m10.753 9.122h-7.411a.377.377 0 0 0 0 .754h7.41a.377.377 0 0 0 0-.754m.001 2.212h-7.411a.377.377 0 0 0 0 .753h7.41a.377.377 0 0 0 0-.753m.001 2.213h-7.411a.377.377 0 0 0 0 .752h7.41a.377.377 0 0 0 0-.753"/>
        <path d="M11.586 32.41a2.976 2.976 0 0 1-.467-.072l-.024-.008c-.435-.118-1.237-.535-1.727-1.986-.245-.726-.443-1.338-.633-1.928l-.348-1.071c-.332-1.012-.324-1.822.018-2.064.171-.122.48-.074.715.115.1.079.136.145.147.185.477 1.834 1.227 4.102 2.007 6.067l.312.763zm23.771.777c-1.663 3.677-3.66 6.525-6.278 8.957-1.625 1.511-3.206 1.82-5.08 1.82-1.872 0-3.453-.309-5.078-1.82-2.619-2.433-4.615-5.281-6.278-8.957.574-.017 1.302-.132 2.336-.728a63.87 63.87 0 0 0 2.612-1.607l.024-.015c2.364-1.51 4.232-2.703 6.385-2.704 2.153.001 4.02 1.194 6.386 2.704a65.4 65.4 0 0 0 2.635 1.622c1.034.596 1.762.71 2.336.728zm4.257-5.842l-.349 1.071c-.19.591-.388 1.202-.633 1.929-.49 1.451-1.292 1.867-1.727 1.985l-.022.008c-.122.032-.28.056-.469.073l.312-.763c.78-1.964 1.53-4.232 2.006-6.065a.42.42 0 0 1 .148-.187.797.797 0 0 1 .48-.182c.09 0 .172.022.235.067.343.242.35 1.052.019 2.064zm.525-2.832a1.36 1.36 0 0 0-.924-.238c.377-1.81.637-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.007.242a8.836 8.836 0 0 1-.759-.439l-.051-.034a.19.19 0 0 0-.26.052l-.334.491a.19.19 0 0 0 .053.265l.053.035c.856.561 1.79.983 2.561 1.157.875.197 1.311.622 1.493.858l.033.041a.19.19 0 0 0 .235.051l.531-.277a.191.191 0 0 0 .066-.278l-.042-.058c-.172-.24-.653-.795-1.595-1.134.343-.018.785-.032 1.022-.032 4.698 0 8.964 1.701 11.702 4.668 2.59 2.806 3.719 6.554 3.353 11.137a42.16 42.16 0 0 1-.943 6.085c-.471 2.041-1.554 5.263-2.525 7.513-.669.01-1.27-.099-2.19-.63a63.936 63.936 0 0 1-2.605-1.605c-2.37-1.512-4.415-2.818-6.795-2.822-2.37.003-4.416 1.309-6.787 2.822a63.116 63.116 0 0 1-2.606 1.605c-.92.53-1.529.64-2.188.63-.882-2.04-1.846-4.847-2.414-7.023.337-.1.667-.4.91-.83.41-.727.703-1.79 1.043-3.02.684-2.48 1.537-5.567 3.756-6.966 2.486-1.567 4.627-1.29 7.106-.97 2.38.306 5.074.652 8.572-.573l.08.051c.257 1.897 1.445 4.389 4.016 5.73a.376.376 0 1 0 .347-.668c-2.394-1.25-3.448-3.569-3.636-5.323a.38.38 0 0 0-.172-.279l-.387-.245a.37.37 0 0 0-.33-.037c-3.418 1.24-6.063.898-8.406.595-2.512-.322-4.882-.625-7.592 1.083-2.466 1.554-3.361 4.795-4.08 7.401-.327 1.182-.608 2.203-.973 2.85-.153.27-.314.404-.42.46a42.82 42.82 0 0 1-.89-5.834c-.743-9.32 4.854-13.079 8.258-14.49l.045-.019c.42.185.813.319 1.167.398.876.198 1.312.622 1.494.858l.032.04a.19.19 0 0 0 .236.053l.53-.278a.19.19 0 0 0 .067-.277l-.043-.06c-.208-.29-.831-.998-2.102-1.285-.658-.148-1.472-.519-2.235-1.016l-.05-.034a.19.19 0 0 0-.261.051l-.334.492a.189.189 0 0 0 .053.266l.053.033c.112.073.226.141.338.207-5.757 2.681-8.74 8.19-8.185 15.135.139 1.74.4 3.543.777 5.364a1.36 1.36 0 0 0-.923.237c-.423.298-1.033 1.102-.37 3.123l.334 1.027c.198.617.398 1.234.65 1.982.668 1.978 2.005 2.684 3.034 2.684.05 0 .101-.005.151-.01h.007c1.735 3.911 3.837 6.936 6.612 9.515 1.96 1.82 3.907 2.071 5.72 2.071 1.812 0 3.76-.25 5.72-2.072 2.776-2.58 4.878-5.604 6.613-9.515h.005c.05.006.101.01.153.01 1.028 0 2.365-.705 3.032-2.683.257-.759.463-1.395.652-1.982l.332-1.025c.664-2.023.054-2.826-.368-3.125z"/>
      </g>
    </g>
  </svg>
`,zt=j`
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
`,Pt=j`
  <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 48h48V0H0z"/>
      <g fill="currentColor">
        <path d="M27.746 24.537c0-1.464.882-2.655 1.964-2.655 1.083 0 1.965 1.191 1.965 2.655 0 1.463-.882 2.655-1.965 2.655-1.082 0-1.964-1.192-1.964-2.655m1.964 3.408c1.499 0 2.717-1.529 2.717-3.408s-1.218-3.408-2.717-3.408c-1.498 0-2.716 1.53-2.716 3.408 0 1.879 1.218 3.408 2.716 3.408m-13.386-3.408c0-1.464.882-2.655 1.964-2.655 1.083 0 1.965 1.191 1.965 2.655 0 1.463-.882 2.655-1.965 2.655-1.082 0-1.964-1.192-1.964-2.655m1.964 3.408c1.499 0 2.717-1.529 2.717-3.408s-1.218-3.408-2.717-3.408c-1.498 0-2.716 1.53-2.716 3.408 0 1.879 1.218 3.408 2.716 3.408m1.865 11.492c.997-.617 2.385-.967 3.847-.967s2.85.35 3.848.967zm-1.383 1.746c.06-.345.225-.68.49-.994h9.48c.265.315.429.649.49.994zm8.833 2.5c-.982.533-2.251.825-3.603.825-1.353 0-2.62-.292-3.602-.825zm1.597-1.747c-.091.35-.287.684-.582.993h-9.236c-.295-.31-.49-.643-.582-.993zM24 45.262c3.317 0 6.015-1.693 6.015-3.773S27.317 37.717 24 37.717s-6.016 1.692-6.016 3.772 2.7 3.773 6.016 3.773z"/>
        <path d="M17.74 38.036c.26-2.17 3.02-3.88 6.286-3.888 3.265.009 6.027 1.722 6.287 3.901.428 3.054.461 3.494.461 3.556 0 2.399-3.027 4.357-6.748 4.367-3.72-.01-6.748-1.968-6.748-4.367 0-.062.033-.502.462-3.569m6.285-21.54c5.077.007 9.18 2.16 10.21 5.357 1.212 3.769-1.398 9.52-4.534 13.573-1.334-1.265-3.439-2.024-5.65-2.036H24c-2.21.012-4.315.771-5.648 2.036-3.136-4.053-5.746-9.804-4.534-13.573 1.03-3.197 5.132-5.35 10.208-5.357m16.114 8.017a1.366 1.366 0 0 0-.924-.238c.377-1.81.638-3.614.777-5.363.382-4.79-.863-8.887-3.6-11.849-2.92-3.158-7.437-4.97-12.392-4.97-1.258 0-2.374.124-3.008.242a8.916 8.916 0 0 1-.758-.439l-.051-.033a.19.19 0 0 0-.26.052l-.334.49a.188.188 0 0 0 .053.265l.053.035c.857.562 1.791.984 2.56 1.157.876.197 1.312.622 1.494.857l.032.042a.19.19 0 0 0 .236.051l.531-.277a.19.19 0 0 0 .066-.278l-.042-.059c-.172-.24-.653-.794-1.595-1.133.342-.018.783-.032 1.022-.032 4.699 0 8.964 1.7 11.702 4.668 2.59 2.806 3.718 6.553 3.353 11.137a43.393 43.393 0 0 1-.944 6.088l-.051.27a.253.253 0 0 0 .247.298h.362a.254.254 0 0 0 .154-.052l.057-.046c.243-.187.546-.236.717-.115.342.243.349 1.052.018 2.064l-.335 1.03c-.22.678-.405 1.254-.647 1.97-.389 1.151-1.092 1.899-1.898 2.024l.063-.145c.047-.11.095-.22.141-.336a.253.253 0 0 0-.142-.327l-.408-.16a.255.255 0 0 0-.324.14c-1.29 3.237-2.844 5.928-4.75 8.22-.068-.504-.15-1.106-.25-1.815-.081-.68-.366-1.337-.846-1.95 3.307-4.232 6.047-10.306 4.737-14.376-1.129-3.51-5.522-5.874-10.93-5.882-5.407.008-9.799 2.372-10.929 5.882-1.31 4.07 1.43 10.144 4.737 14.376-.48.614-.764 1.27-.844 1.948-.104.733-.188 1.354-.258 1.87-1.929-2.309-3.498-5.016-4.795-8.272a.254.254 0 0 0-.326-.14l-.408.16a.252.252 0 0 0-.14.327c.045.115.093.226.14.338a2.1 2.1 0 0 1 .06.137.45.45 0 0 1-.039-.006c-.796-.146-1.472-.88-1.855-2.014-.244-.719-.439-1.325-.628-1.911l-.354-1.09c-.332-1.01-.324-1.82.019-2.063.175-.123.47-.072.735.13l.066.042a.255.255 0 0 0 .15.038l.358-.023a.229.229 0 0 0 .113-.04.24.24 0 0 0 .134-.003c.35-.087.697-.394.95-.841.41-.728.703-1.79 1.043-3.02.684-2.48 1.536-5.567 3.756-6.965 2.486-1.568 4.627-1.292 7.106-.971 2.38.306 5.074.651 8.572-.573l.08.05c.257 1.898 1.444 4.39 4.016 5.73a.38.38 0 0 0 .507-.16.372.372 0 0 0 .025-.288.37.37 0 0 0-.185-.22c-2.394-1.248-3.448-3.568-3.636-5.323a.381.381 0 0 0-.172-.278l-.387-.245a.372.372 0 0 0-.33-.036c-3.418 1.238-6.062.897-8.406.594-2.513-.321-4.883-.624-7.592 1.083-2.466 1.553-3.361 4.797-4.081 7.402-.326 1.18-.607 2.201-.973 2.85-.152.27-.312.403-.42.458a42.788 42.788 0 0 1-.888-5.833C8.203 9.517 13.8 5.759 17.203 4.348l.046-.019c.42.185.813.318 1.168.398.875.198 1.311.622 1.493.858l.032.04a.19.19 0 0 0 .236.053l.532-.278a.192.192 0 0 0 .095-.124.187.187 0 0 0-.03-.154l-.042-.058c-.209-.292-.832-1-2.103-1.286-.657-.148-1.472-.518-2.235-1.016l-.05-.034a.19.19 0 0 0-.26.052l-.335.491a.187.187 0 0 0 .053.265l.053.034c.111.073.226.14.339.206-5.758 2.682-8.74 8.192-8.186 15.137a43.8 43.8 0 0 0 .777 5.363 1.355 1.355 0 0 0-.924.236c-.422.3-1.032 1.103-.369 3.125l.334 1.026c.209.648.402 1.245.65 1.982.669 1.979 2.006 2.684 3.034 2.684.05 0 .1-.005.15-.01l.008-.001c1.338 3.019 2.942 5.555 4.903 7.75-.034.298-.05.469-.05.537 0 2.807 3.355 5.105 7.479 5.125h.052c4.124-.02 7.48-2.318 7.48-5.125 0-.071-.018-.26-.057-.589 1.94-2.185 3.529-4.704 4.857-7.698h.006c.05.006.1.01.152.01 1.028 0 2.366-.704 3.034-2.684.252-.747.452-1.363.65-1.98l.333-1.026c.664-2.023.054-2.826-.368-3.125"/>
      </g>
    </g>
  </svg>
`,Ot=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 72h72V0H0z"/>
      <g stroke="currentColor" stroke-linejoin="round" stroke-width="3">
        <path stroke-linecap="round" d="M36 49.5a6.758 6.758 0 0 1-6.75-6.75"/>
        <path d="M47.678 36c-2.931-5.077-11.68-20.25-11.68-20.25L24.324 36a13.454 13.454 0 0 0-1.824 6.75c0 7.454 6.045 13.5 13.5 13.5 7.458 0 13.5-6.046 13.5-13.5 0-2.46-.672-4.762-1.821-6.75z"/>
      </g>
    </g>
  </svg>
`,Lt=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
    <g fill="none" fill-rule="evenodd">
      <path d="M-4 19h24V-5H-4z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 13l7.236-12L8 6.118.764 1z"/>
    </g>
  </svg>
`,Tt=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12 7.5A4.505 4.505 0 0 0 7.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-2.48-2.019-4.5-4.5-4.5m0 9.938a.375.375 0 0 0-.375.375v1.875a.375.375 0 0 0 .75 0v-1.875a.375.375 0 0 0-.375-.375m0-10.875a.375.375 0 0 0 .375-.375V4.313a.375.375 0 0 0-.75 0v1.875c0 .207.168.375.375.375m4.376 9.282a.375.375 0 0 0-.531.53L17.17 17.7a.372.372 0 0 0 .53 0 .374.374 0 0 0 .001-.53l-1.325-1.326zm-8.752-7.69a.376.376 0 0 0 .53 0 .374.374 0 0 0 .001-.53L6.83 6.299a.375.375 0 0 0-.531.53zm12.064 3.47h-1.875a.375.375 0 0 0 0 .75h1.875a.375.375 0 0 0 0-.75M6.563 12a.375.375 0 0 0-.375-.375H4.313a.375.375 0 0 0 0 .75h1.875A.375.375 0 0 0 6.563 12m9.547-3.735a.378.378 0 0 0 .266-.11l1.325-1.326a.375.375 0 0 0-.53-.53l-1.327 1.326a.375.375 0 0 0 .266.64m-8.486 7.58L6.299 17.17a.374.374 0 0 0 .001.53.372.372 0 0 0 .53 0l1.325-1.326a.375.375 0 0 0-.531-.53" fill="#fdd737"/>
    </g>
  </svg>
`,Ut=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M6.587 11.235l-.288-.889.756-.549A.093.093 0 0 0 7 9.628h-.935l-.29-.889a.092.092 0 0 0-.087-.065.094.094 0 0 0-.09.065l-.288.89h-.935a.093.093 0 0 0-.055.168l.755.55-.288.888a.093.093 0 0 0 .034.104.088.088 0 0 0 .055.02c.02 0 .039-.007.055-.02l.757-.549.755.55a.09.09 0 0 0 .11 0 .091.091 0 0 0 .034-.105M9.419 6.15l-.385 1.185a.125.125 0 0 0 .193.14l1.008-.732 1.008.731a.125.125 0 1 0 .193-.139L11.05 6.15l1.008-.733a.126.126 0 0 0 .046-.14.127.127 0 0 0-.12-.086h-1.247l-.383-1.185a.126.126 0 0 0-.24 0L9.73 5.191H8.484a.127.127 0 0 0-.12.086.126.126 0 0 0 .047.14l1.008.733zm8.161 1.551a6.492 6.492 0 0 0-2.258-1.545l-.385-.159a.187.187 0 0 0-.248.235l.137.393a5.789 5.789 0 0 1-1.48 6.096A5.74 5.74 0 0 1 9.383 14.3a5.756 5.756 0 0 1-2.205-.435l-.386-.158a.187.187 0 0 0-.248.235l.137.393c.307.883.785 1.67 1.42 2.34a6.467 6.467 0 0 0 4.74 2.04 6.501 6.501 0 0 0 4.485-1.786 6.48 6.48 0 0 0 2.035-4.56 6.481 6.481 0 0 0-1.78-4.667" fill="#CAD4DB"/>
    </g>
  </svg>
`,qt=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path fill="none" d="M0 24h24V0H0z"/>
      <path fill="#CAD4DB" d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052"/>
      <path fill="#FDD737" d="M5.661 10.902a4.493 4.493 0 0 1 4.09-2.65c.248 0 .5.023.76.072.22-.398.492-.756.791-1.088a3.916 3.916 0 0 0-3.423-2.01 3.942 3.942 0 0 0-3.938 3.938c0 .651.175 1.274.473 1.836.268-.074.545-.126.836-.126.138 0 .274.01.411.028M7.879 4.29a.375.375 0 0 1-.375-.376V2.04a.375.375 0 0 1 .75 0v1.875a.375.375 0 0 1-.375.375M4.166 5.827a.378.378 0 0 1-.266-.11L2.575 4.391a.375.375 0 0 1 .531-.53l1.326 1.326a.375.375 0 0 1-.266.64M2.629 9.54H.754a.375.375 0 0 1 0-.75h1.875a.375.375 0 0 1 0 .75m8.961-3.713a.378.378 0 0 1-.265-.11.377.377 0 0 1 0-.53l1.327-1.326a.375.375 0 1 1 .53.53l-1.325 1.326a.378.378 0 0 1-.266.11"/>
    </g>
  </svg>
`,Bt=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12.932 9.57a.373.373 0 0 1 0 .53.373.373 0 0 1-.53 0 3.722 3.722 0 0 0-1.487-.897 3.743 3.743 0 0 0-1.165-.202c-1.475 0-2.734.86-3.344 2.1a3.17 3.17 0 0 1 1.09.7.376.376 0 0 1-.265.641.374.374 0 0 1-.264-.11 2.42 2.42 0 0 0-.843-.539l.014.004a2.426 2.426 0 0 0-.888-.172 2.438 2.438 0 1 0 0 4.875h10.5a5.25 5.25 0 0 0 0-10.5c-2.169 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.051" fill="#cad4db"/>
    </g>
  </svg>
`,It=j`
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M7.268 23.132a.374.374 0 0 0 .325.562.376.376 0 0 0 .325-.187l3.613-6.258h-.867zm4.684-2.922a.374.374 0 0 0 .325.561.376.376 0 0 0 .325-.187l1.925-3.335h-.866l-1.709 2.96zm-5.997 0a.374.374 0 0 0 .325.561.376.376 0 0 0 .325-.187L8.53 17.25h-.866z" fill="#61b6df"/>
      <path d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052" fill="#879cb2"/>
    </g>
  </svg>
`,Rt=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
      <path d="M0 24h24V0H0z"/>
      <path d="M12.932 9.57a.374.374 0 0 1-.265.64.37.37 0 0 1-.265-.11 3.708 3.708 0 0 0-1.488-.898v.001a3.738 3.738 0 0 0-1.164-.202c-1.474 0-2.734.86-3.343 2.1.404.157.776.388 1.089.7a.374.374 0 0 1 0 .53.373.373 0 0 1-.53.002 2.398 2.398 0 0 0-.842-.54l.014.004a2.421 2.421 0 0 0-.888-.173 2.437 2.437 0 0 0 0 4.875h10.5a5.25 5.25 0 1 0 0-10.5c-2.17 0-3.64 1.215-4.483 2.518 0 0 .83.232 1.665 1.052m-.277 12.389h-.923l.462-.799a.225.225 0 0 0-.39-.225l-.46.798-.462-.798a.225.225 0 0 0-.39.225l.461.8h-.923a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45m3.55-2.842h-.922l.461-.799a.226.226 0 0 0-.39-.224l-.46.798-.462-.798a.226.226 0 0 0-.391.224l.461.8h-.922a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45m-7.099 0h-.922l.461-.799a.226.226 0 0 0-.39-.224l-.46.798-.462-.798a.226.226 0 0 0-.391.224l.461.8h-.922a.225.225 0 0 0 0 .45h.923l-.462.8a.226.226 0 0 0 .391.223l.461-.798.46.798a.227.227 0 0 0 .308.083.226.226 0 0 0 .083-.307l-.462-.8h.923a.225.225 0 0 0 0-.45" fill="#CAD4DB"/>
    </g>
  </svg>
`,Nt=s`
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

  .header {
    padding: 12px 16px 8px;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--primary-text-color);
    text-align: center;
    letter-spacing: 0.2px;
  }

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

  .warning {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-weight: 500;
    text-align: center;
    font-size: 0.9rem;
  }
`;class Dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const jt=(t,e,i)=>{mt(t,e,i)},Vt="ontouchstart"in window||navigator.maxTouchPoints>0||"msMaxTouchPoints"in navigator&&navigator.msMaxTouchPoints>0,Qt=()=>{const t=document.body,e=t.querySelector(".action-handler-air-visual-card");if(e)return e;const i=document.createElement("div");i.className="action-handler-air-visual-card",i.style.position="absolute",i.style.width=Vt?"100px":"50px",i.style.height=Vt?"100px":"50px",i.style.transform="translate(-50%, -50%) scale(0)",i.style.pointerEvents="none",i.style.zIndex="999",i.style.transition="transform 0.1s ease-out",i.style.borderRadius="50%",i.style.background="rgba(var(--rgb-primary-color), 0.3)";const a=i;a.holdTime=500,a.cancelled=!1,a.held=!1,a.timer=void 0,a.dblClickTimeout=void 0,a.isRepeating=!1,a.repeatTimeout=void 0,t.appendChild(i);const n=(t=>{const e=t;return e.startAnimation=(t,i)=>{Object.assign(e.style,{left:`${t}px`,top:`${i}px`,transform:"translate(-50%, -50%) scale(1)"})},e.stopAnimation=()=>{Object.assign(e.style,{left:"",top:"",transform:"translate(-50%, -50%) scale(0)"})},e.bind=(t,i={})=>{if(t.actionHandler&&vt(i,t.actionHandler.options))return;if(t.actionHandler?(t.removeEventListener("touchstart",t.actionHandler.start),t.removeEventListener("touchend",t.actionHandler.end),t.removeEventListener("touchcancel",t.actionHandler.end),t.removeEventListener("mousedown",t.actionHandler.start),t.removeEventListener("click",t.actionHandler.end),t.removeEventListener("keydown",t.actionHandler.handleKeyDown),t.actionHandler.handleTouchMove&&t.removeEventListener("touchmove",t.actionHandler.handleTouchMove)):t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}),t.actionHandler={options:i},i.disabled)return;t.actionHandler.start=a=>{if(a.detail?.ignore)return;let n,o;e.cancelled=!1,e.held=!1,a.touches?(n=a.touches[0].clientX,o=a.touches[0].clientY):(n=a.clientX,o=a.clientY),i.hasHold&&(e.timer=window.setTimeout(()=>{if(e.startAnimation(n,o),e.held=!0,jt(t,"action",{action:"hold"}),i.repeat&&i.repeat>0){let a=0;e.isRepeating=!0,e.repeatTimeout=window.setInterval(()=>{a++,jt(t,"action",{action:"hold"}),i.repeatLimit&&a>=i.repeatLimit&&(window.clearInterval(e.repeatTimeout),e.isRepeating=!1)},i.repeat)}},e.holdTime))},t.actionHandler.end=a=>{if(!a.detail?.ignore)return["touchend","touchcancel"].includes(a.type)&&e.cancelled?(e.isRepeating&&e.repeatTimeout&&(window.clearInterval(e.repeatTimeout),e.isRepeating=!1),void(i.isMomentary&&jt(t,"action",{action:"release"}))):void("touchcancel"!==a.type&&(["touchend","touchcancel","mouseup"].includes(a.type)&&e.stopAnimation(),e.isRepeating&&e.repeatTimeout&&(window.clearInterval(e.repeatTimeout),e.isRepeating=!1),e.timer&&(clearTimeout(e.timer),e.timer=void 0),e.held||(i.hasDoubleClick?"click"===a.type&&a.detail<2||!e.dblClickTimeout?e.dblClickTimeout=window.setTimeout(()=>{e.dblClickTimeout=void 0,jt(t,"action",{action:"tap"})},250):(clearTimeout(e.dblClickTimeout),e.dblClickTimeout=void 0,jt(t,"action",{action:"double_tap"})):jt(t,"action",{action:"tap"})),i.isMomentary&&jt(t,"action",{action:"release"})))},i.disableKbd||(t.actionHandler.handleKeyDown=e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.click())});const a=i=>{if(!i.touches)return;const a=i.touches[0],n=t.getBoundingClientRect(),o=a.clientX-n.left,s=a.clientY-n.top;(o<0||s<0||o>=n.width||s>=n.height)&&(e.cancelled=!0)};t.actionHandler.handleTouchMove=a,t.addEventListener("touchstart",t.actionHandler.start,{passive:!0}),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",t.actionHandler.end),t.addEventListener("touchcancel",t.actionHandler.end),t.addEventListener("mousedown",t.actionHandler.start,{passive:!0}),t.addEventListener("click",t.actionHandler.end),i.disableKbd||t.addEventListener("keydown",t.actionHandler.handleKeyDown)},["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{e.cancelled=!0,e.timer&&(e.stopAnimation(),clearTimeout(e.timer),e.timer=void 0,e.isRepeating&&e.repeatTimeout&&(window.clearInterval(e.repeatTimeout),e.isRepeating=!1))},{passive:!0})}),e})(i);return n};const Wt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Dt{constructor(t){super(t)}render(t){}update(t,[e]){return vt(e,this.previousOptions)||(((t,e)=>{const i=Qt();i&&i.bind(t,e)})(t.element,e),this.previousOptions=e?{...e}:void 0),this.render(e)}});console.info("%c  AIR-VISUAL-CARD  \n%c  Version 3.0.6    ","color: #279b48; font-weight: bold; background: #eafaf1; padding: 2px 6px; border-radius: 4px;","color: #333; font-weight: bold; background: #f0f0f0; padding: 2px 6px; border-radius: 4px;");const Ft=window;Ft.customCards=Ft.customCards||[],Ft.customCards.push({type:"air-visual-card",name:"Air Visual Card",description:"A modern, responsive Lovelace card displaying Air Quality Index (AQI) and weather data.",preview:!0});let Kt=class extends rt{static async getConfigElement(){return await Promise.resolve().then(function(){return Yt}),document.createElement("air-visual-card-editor")}static getStubConfig(){return{air_quality_index:"sensor.u_s_air_quality_index",air_pollution_level:"sensor.u_s_air_pollution_level",main_pollutant:"sensor.u_s_main_pollutant",city:"San Francisco",country:"US",unit_of_measurement:"AQI",hide_title:!1,hide_face:!1,hide_weather:!1}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.air_quality_index&&!t.air_pollution_level)throw new Error("Please define at least one air quality sensor entity (air_quality_index or air_pollution_level).");this._config={unit_of_measurement:"AQI",...t,tap_action:t.tap_action||{action:"more-info"},hold_action:t.hold_action||{action:"more-info"}}}get config(){return this._config}shouldUpdate(t){if(!this._config)return!1;if(t.has("_config"))return!0;const e=t.get("hass");if(!e||!this.hass)return!0;const i=[this._config.air_quality_index,this._config.air_pollution_level,this._config.main_pollutant,this._config.main_pollutant_value,this._config.weather].filter(Boolean);return 0===i.length||i.some(t=>e.states[t]!==this.hass.states[t])}getCardSize(){return this._config?.hide_weather?2:3}getLayoutOptions(){return{grid_columns:2,grid_rows:this._config?.hide_weather?2:3,grid_min_columns:1,grid_min_rows:2}}_openMoreInfo(t){t&&this.hass&&mt(this,"hass-more-info",{entityId:t})}_handleCardAction(t){if(this.hass&&this._config&&t.detail.action){const e={entity:this._config.air_quality_index||this._config.air_pollution_level||this._config.main_pollutant||this._config.main_pollutant_value,...this._config};((t,e,i,a)=>{let n;"double_tap"===a&&i.double_tap_action?n=i.double_tap_action:"hold"===a&&i.hold_action?n=i.hold_action:"tap"===a&&i.tap_action&&(n=i.tap_action),wt(t,e,i,n)})(this,this.hass,e,t.detail.action)}}render(){if(!this.hass||!this._config)return j``;const t=this._config.air_quality_index?this.hass.states[this._config.air_quality_index]:void 0,e=this._config.air_pollution_level?this.hass.states[this._config.air_pollution_level]:void 0,i=this._config.main_pollutant?this.hass.states[this._config.main_pollutant]:void 0,a=this._config.main_pollutant_value?this.hass.states[this._config.main_pollutant_value]:void 0,n=this._config.weather?this.hass.states[this._config.weather]:void 0;let o=NaN;if(t)o=parseInt(t.state,10);else if(e){const t=parseInt(e.state,10);isNaN(t)||(o=t)}const s=!isNaN(o);let r=s?(l=o)<=50?1:l<=100?2:l<=150?3:l<=200?4:l<=300?5:6:1;var l;!s&&e&&Et[e.state.toLowerCase()]&&(r=Et[e.state.toLowerCase()]);const c=$t[r];let h=c.label;if(e&&isNaN(parseInt(e.state,10))){const t=this.hass.formatEntityState?.(e);h=t||e.state.replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}let d="",u="",p="";if(i){const t=i.state.toLowerCase(),e=i.attributes?.pollutant_symbol?.toLowerCase()||t;d=xt[e]||xt[t]||i.state,u=i.attributes?.pollutant_unit||Ct[e]||Ct[t]||""}if(a&&(p=a.state,!u&&a.attributes?.unit_of_measurement&&(u=a.attributes.unit_of_measurement),!d)){const t=a.attributes?.device_class,e=(this._config.main_pollutant_value||"").toLowerCase(),i=String(a.attributes?.friendly_name||"").toLowerCase();"pm25"===t||e.includes("pm2_5")||e.includes("pm25")||i.includes("pm2.5")||i.includes("pm 2.5")||i.includes("pm2_5")||i.includes("particulate matter 2.5")?d="PM2.5":"pm10"===t||e.includes("pm10")||i.includes("pm10")?d="PM10":"o3"===t||e.includes("ozone")||i.includes("ozone")?d="Ozone":"co"===t||e.includes("carbon_monoxide")?d="Carbon Monoxide":"no2"===t||e.includes("nitrogen_dioxide")?d="Nitrogen Dioxide":("so2"===t||e.includes("sulphur_dioxide")||e.includes("sulfur_dioxide"))&&(d="Sulfur Dioxide")}let f="";p&&u?f=`${p} ${u}`:p?f=p:u&&(f=u);const g=this._config.city||"",_=this._config.unit_of_measurement||"AQI",m=Boolean(this._config.hide_title||!g),v=Boolean(this._config.hide_face),y=Boolean(this._config.hide_aqi),w=Boolean(this._config.hide_apl),b=Boolean(this._config.hide_weather||!n);let $="",A="",x="",C="";if(n){C=n.state;const t=n.attributes?.temperature,e=this.hass.config?.unit_system?.temperature||"°";void 0!==t&&($=`${t}${e}`);const i=n.attributes?.humidity;void 0!==i&&(A=`${i}%`);const a=n.attributes?.wind_speed,o=this._config.speed_unit||n.attributes?.wind_speed_unit||("km"===this.hass.config?.unit_system?.length?"km/h":"mph");void 0!==a&&(x=`${a} ${o}`)}const E=["main-grid"];return v&&E.push("no-face"),w&&!v&&E.push("only-aqi"),j`
      <ha-card
        .actionHandler=${Wt({hasHold:bt(this._config.hold_action),hasDoubleClick:bt(this._config.double_tap_action)})}
        @action=${this._handleCardAction}
      >
        <div class="card-container">
          ${m?j``:j`<div class="header">${g} Air Quality Index</div>`}

          <div
            class="${E.join(" ")}"
            style="background-color: ${c.bgColor}; color: ${c.fontColor};"
          >
            ${v?j``:j`
                  <div
                    class="face-section"
                    style="background-color: ${c.faceColor}; color: ${c.fontColor};"
                    @click=${()=>this._openMoreInfo(this._config.air_quality_index||this._config.air_pollution_level)}
                    title="Air Quality: ${c.label}"
                  >
                    ${(t=>{switch(t){case 1:default:return Mt;case 2:return St;case 3:return Ht;case 4:return kt;case 5:return zt;case 6:return Pt}})(r)}
                  </div>
                `}
            ${y?j``:j`
                  <div
                    class="aqi-section"
                    @click=${()=>this._openMoreInfo(this._config.air_quality_index)}
                    title="AQI: ${s?o:"N/A"}"
                  >
                    <div class="aqi-value">${s?o:"—"}</div>
                    <div class="aqi-unit">${this._config.country?`${this._config.country} `:""}${_}</div>
                  </div>
                `}
            ${w?j``:j`
                  <div
                    class="apl-section"
                    @click=${()=>this._openMoreInfo(this._config.main_pollutant_value||this._config.main_pollutant||this._config.air_pollution_level)}
                    title="${h}"
                  >
                    <div class="apl-badge">${h}</div>
                    ${d||f?j`
                          <div class="pollutant-badge">
                            ${[d,f].filter(Boolean).join(" | ")}
                          </div>
                        `:j``}
                  </div>
                `}
          </div>

          ${!b&&n?j`
                <div
                  class="weather-bar"
                  @click=${()=>this._openMoreInfo(this._config.weather)}
                  title="Weather: ${C}"
                >
                  <div class="weather-item">
                    ${(t=>{if(!t)return Tt;switch(At[t.toLowerCase()]||t){case"night-clear-sky":return Ut;case"new-clouds":return qt;case"scattered-clouds":return Bt;case"rain":return It;case"snow":return Rt;default:return Tt}})(C)}
                    <span>${$}</span>
                  </div>
                  <div class="weather-item">
                    ${Ot}
                    <span>${A}</span>
                  </div>
                  <div class="weather-item">
                    ${Lt}
                    <span>${x}</span>
                  </div>
                </div>
              `:j``}
        </div>
      </ha-card>
    `}static get styles(){return Nt}};t([ut({attribute:!1})],Kt.prototype,"hass",void 0),t([pt()],Kt.prototype,"_config",void 0),Kt=t([ct("air-visual-card")],Kt);let Xt=class extends rt{constructor(){super(...arguments),this._schema=[{name:"integration_preset",required:!1,selector:{select:{mode:"dropdown",options:[{label:"Manual / Custom",value:"manual"},{label:"OpenWeatherMap",value:"openweathermap"},{label:"AirVisual (IQAir)",value:"airvisual"},{label:"WAQI (World Air Quality Index)",value:"waqi"}]}}},{name:"air_quality_index",required:!1,selector:{entity:{domain:"sensor"}}},{name:"air_pollution_level",required:!1,selector:{entity:{domain:"sensor"}}},{name:"main_pollutant",required:!1,selector:{entity:{domain:"sensor"}}},{name:"main_pollutant_value",required:!1,selector:{entity:{domain:"sensor"}}},{name:"weather",required:!1,selector:{entity:{domain:"weather"}}},{type:"grid",name:"",schema:[{name:"city",selector:{text:{}}},{name:"country",selector:{text:{}}}]},{type:"grid",name:"",schema:[{name:"unit_of_measurement",selector:{text:{}}},{name:"speed_unit",selector:{text:{}}}]},{type:"grid",name:"",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_face",selector:{boolean:{}}},{name:"hide_weather",selector:{boolean:{}}},{name:"hide_aqi",selector:{boolean:{}}},{name:"hide_apl",selector:{boolean:{}}}]}],this._computeLabel=t=>({integration_preset:"Integration Preset / Auto-Fill",air_quality_index:"Air Quality Index Sensor",air_pollution_level:"Air Pollution Level Sensor",main_pollutant:"Main Pollutant Sensor",main_pollutant_value:"Main Pollutant Value Sensor",weather:"Weather Entity (Optional)",city:"City Name",country:"Country / Standard Label",unit_of_measurement:"AQI Unit (Default: AQI)",speed_unit:"Wind Speed Unit Override",hide_title:"Hide City Title",hide_face:"Hide Face Icon",hide_weather:"Hide Weather Forecast Bar",hide_aqi:"Hide AQI Value Badge",hide_apl:"Hide Pollution Level & Pollutant"}[t.name]||t.name),this._computeHelper=t=>({integration_preset:"Select an integration to automatically detect and pre-fill linked sensors from your Home Assistant setup"}[t.name]||"")}setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return j``;const t={integration_preset:this._config.integration_preset||"manual",...this._config,hide_title:this._config.hide_title??!1,hide_face:this._config.hide_face??!1,hide_weather:this._config.hide_weather??!1,hide_aqi:this._config.hide_aqi??!1,hide_apl:this._config.hide_apl??!1,unit_of_measurement:this._config.unit_of_measurement||"AQI",country:this._config.country||"",city:this._config.city||""};return j`
      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=this._config.integration_preset||"manual",i=t.detail.value.integration_preset,a={...this._config,...t.detail.value};i&&i!==e&&"manual"!==i&&this._applyIntegrationPreset(i,a),Object.keys(a).forEach(t=>{""!==a[t]&&void 0!==a[t]||delete a[t]}),this._config=a,mt(this,"config-changed",{config:this._config})}_applyIntegrationPreset(t,e){if(!this.hass)return;const i=this.hass.entities,a=this.hass.states,n=Object.keys(a),o=n.filter(e=>{const n=i?.[e],o=String(a[e]?.attributes?.attribution||"").toLowerCase();return n?.platform===t||e.toLowerCase().includes(t)||o.includes(t)});if("openweathermap"===t){const t=o.find(t=>{const e=a[t];return"aqi"===e?.attributes?.device_class||t.includes("air_quality_index")||t.includes("air_pollution")||t.includes("aqi")});t&&(e.air_quality_index=t),delete e.air_pollution_level,delete e.main_pollutant;const s=n.find(t=>{if(!t.startsWith("weather."))return!1;const e=i?.[t];return"openweathermap"===e?.platform||t.toLowerCase().includes("openweathermap")||String(a[t]?.attributes?.attribution||"").toLowerCase().includes("openweathermap")});s&&(e.weather=s);const r=o.find(t=>{const e=a[t],n=String(e?.attributes?.friendly_name||"").toLowerCase(),o=i?.[t]?.translation_key;return"pm25"===e?.attributes?.device_class||"particulate_matter_2_5"===o||"pm2_5"===o||"pm25"===o||n.includes("pm2.5")||n.includes("pm 2.5")||n.includes("pm2_5")||n.includes("particulate matter 2.5")||t.includes("particulate_matter_2_5")||t.includes("pm2_5")||t.includes("pm25")});if(r&&(e.main_pollutant_value=r),!e.city){const i=s&&a[s]?.attributes?.friendly_name||t&&a[t]?.attributes?.friendly_name;if(i){const t=i.replace(/open\s*weather\s*map/gi,"").replace(/^[-_\s]+|[-_\s]+$/g,"");t&&(e.city=t)}}}else if("airvisual"===t){const t=o.find(t=>"aqi"===a[t]?.attributes?.device_class||t.includes("air_quality_index"));t&&(e.air_quality_index=t);const i=o.find(t=>t.includes("air_pollution_level"));i&&(e.air_pollution_level=i);const n=o.find(t=>t.includes("main_pollutant")&&!t.includes("value"));if(n&&(e.main_pollutant=n),!e.city&&t){const i=a[t]?.attributes?.city;i&&(e.city=String(i))}}else if("waqi"===t){const t=o.find(t=>"aqi"===a[t]?.attributes?.device_class||t.includes("air_quality")||t.includes("aqi"));t&&(e.air_quality_index=t);const i=o.find(t=>"pm25"===a[t]?.attributes?.device_class||t.includes("pm2_5")||t.includes("pm25"));i&&(e.main_pollutant_value=i)}}static get styles(){return s`
      ha-form {
        display: block;
      }
    `}};t([ut({attribute:!1})],Xt.prototype,"hass",void 0),t([pt()],Xt.prototype,"_config",void 0),Xt=t([ct("air-visual-card-editor")],Xt);var Yt=Object.freeze({__proto__:null,get AirVisualCardEditor(){return Xt}});export{Kt as AirVisualCard};
