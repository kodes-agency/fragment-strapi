"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6052],{6668:(te,A,o)=>{o.r(A),o.d(A,{SettingsPage:()=>Re,default:()=>Dt});var a=o(67294),M=o(15482),N=o(97132),D=o(95489),h=o(85893);const R=t=>(0,h.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,h.jsx)("path",{d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z",fill:"#212134"})}),H=R;var E=o(41580),O=o(11047),i=o(45697),m=o(27821),U=o(54574),V=o(19270),K=o(63428),ge=o(96404),pe=o(2504),Q=o(41363),ae=o(15585),k=o(75515);const Se=(0,m.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ke=m.default.div`
  animation: ${Se} 2s infinite linear;
  will-change: transform;
`,Be=(0,m.default)(O.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t})=>t.colors.primary600};
  }

  ${ae.BF}
`,fe=a.forwardRef(({children:t,startIcon:e,endIcon:n,onClick:r,disabled:s=!1,loading:l=!1,...c},u)=>{const p=r&&!s?r:void 0,d=s||l;return(0,h.jsxs)(Be,{ref:u,"aria-disabled":d,onClick:p,as:"button",type:"button",...c,children:[(e||l)&&(0,h.jsx)(E.x,{as:"span",paddingRight:2,"aria-hidden":!0,children:l?(0,h.jsx)(ke,{children:(0,h.jsx)(Q.Loader,{})}):e}),(0,h.jsx)(k.Z,{variant:"pi",textColor:d?"neutral600":"primary600",children:t}),n&&(0,h.jsx)(E.x,{as:"span",paddingLeft:2,"aria-hidden":!0,children:n})]})});fe.displayName="TextButton";var ne=o(75228),Le=o(88262),Ne=o(63237);const Ae=m.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,Ie=(0,m.default)(E.x)`
  cursor: ${({disabled:t})=>t?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,ae.k3)()}
`,he=(0,m.default)(O.k).attrs({hasRadius:!0})`
  background-color: ${({theme:t,checked:e,disabled:n})=>e?n?t.colors.neutral200:t.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:t,checked:e,disabled:n})=>e&&e!==null?n?t.colors.neutral300:t.colors.neutral200:n?t.colors.neutral150:t.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:t})=>`${t==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:t})=>`${t==="S"?"2px":"6px"}`};
`,Me=m.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,Y=a.forwardRef(({size:t,onLabel:e,offLabel:n,children:r,checked:s,disabled:l,onChange:c,...u},p)=>{const{error:d,hint:C,id:x,name:B,required:T}=(0,Le.U)(),I="neutral600";let F=!s&&s!==null?"danger700":I,j=s?"primary600":I;const b=$=>{l||c($)};let f;return d?f=`${x}-error`:C&&(f=`${x}-hint`),a.createElement(Ae,null,a.createElement(Ne.T,null,r),a.createElement(Ie,{hasRadius:!0,disabled:l,padding:1,display:"flex",background:l?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},a.createElement(he,{size:t,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:s===null?!1:!s,disabled:l},a.createElement(k.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:l?"neutral700":F},n)),a.createElement(he,{size:t,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:s===null?!1:s,disabled:l},a.createElement(k.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:l?"neutral700":j},e)),a.createElement(Me,{type:"checkbox","aria-disabled":l,"aria-describedby":f,onChange:$=>b($),name:B,ref:p,"aria-required":T,...u,checked:!(s===null||!s)})))});Y.displayName="ToggleCheckbox",Y.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},Y.propTypes={checked:i.bool,children:i.string.isRequired,disabled:i.bool,offLabel:i.string.isRequired,onChange:i.func,onLabel:i.string.isRequired,size:i.oneOf(Object.keys(ne.J.input))};const Fe=(0,m.default)(U.g)`
  max-width: 320px;
`,je=(0,m.default)(fe)`
  align-self: flex-end;
  margin-left: auto;
`,W=({disabled:t,size:e,error:n,hint:r,label:s,name:l,labelAction:c,required:u,id:p,onClear:d,clearLabel:C,checked:x,...B})=>{const T=(0,pe.M)(p);return a.createElement(Fe,{name:l,hint:r,error:n,id:T,required:u},a.createElement(O.k,{direction:"column",alignItems:"stretch",gap:1},a.createElement(O.k,null,a.createElement(V.Q,{action:c},s),C&&d&&x!==null&&!t&&a.createElement(je,{onClick:d},C)),a.createElement(Y,{id:T,size:e,checked:x,disabled:t,...B},s),a.createElement(K.J,null),a.createElement(ge.c,null)))};W.displayName="ToggleInput",W.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},W.propTypes={checked:i.bool,clearLabel:i.string,disabled:i.bool,error:i.string,hint:i.oneOfType([i.string,i.node,i.arrayOf(i.node)]),id:i.string,label:i.string,labelAction:i.node,name:i.string,onClear:i.func,required:i.bool,size:i.oneOf(Object.keys(ne.J.input))};var re=o(29728);const ze=m.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,ie=({labelledBy:t,...e})=>{const n=t||"main-content-title";return a.createElement(ze,{"aria-labelledby":n,id:"main-content",tabIndex:-1,...e})};ie.defaultProps={labelledBy:void 0},ie.propTypes={labelledBy:i.string};var be=o(7681);let se=new Map,le=!1;try{le=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let X=!1;try{X=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const ve={degree:{narrow:{default:"\xB0","ja-JP":" \u5EA6","zh-TW":"\u5EA6","sl-SI":" \xB0"}}};class Ue{format(e){let n="";if(!le&&this.options.signDisplay!=null?n=Ze(this.numberFormatter,this.options.signDisplay,e):n=this.numberFormatter.format(e),this.options.style==="unit"&&!X){var r;let{unit:s,unitDisplay:l="short",locale:c}=this.resolvedOptions(),u=(r=ve[s])===null||r===void 0?void 0:r[l];n+=u[c]||u.default}return n}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,n){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,n);if(n<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} \u2013 ${this.format(n)}`}formatRangeToParts(e,n){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,n);if(n<e)throw new RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(e),s=this.numberFormatter.formatToParts(n);return[...r.map(l=>({...l,source:"startRange"})),{type:"literal",value:" \u2013 ",source:"shared"},...s.map(l=>({...l,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!le&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!X&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,n={}){this.numberFormatter=We(e,n),this.options=n}}function We(t,e={}){let{numberingSystem:n}=e;if(n&&t.indexOf("-u-nu-")===-1&&(t=`${t}-u-nu-${n}`),e.style==="unit"&&!X){var r;let{unit:c,unitDisplay:u="short"}=e;if(!c)throw new Error('unit option must be provided with style: "unit"');if(!(!((r=ve[c])===null||r===void 0)&&r[u]))throw new Error(`Unsupported unit ${c} with unitDisplay = ${u}`);e={...e,style:"decimal"}}let s=t+(e?Object.entries(e).sort((c,u)=>c[0]<u[0]?-1:1).join():"");if(se.has(s))return se.get(s);let l=new Intl.NumberFormat(t,e);return se.set(s,l),l}function Ze(t,e,n){if(e==="auto")return t.format(n);if(e==="never")return t.format(Math.abs(n));{let r=!1;if(e==="always"?r=n>0||Object.is(n,0):e==="exceptZero"&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):r=n>0),r){let s=t.format(-n),l=t.format(n),c=s.replace(l,"").replace(/\u200e|\u061C/,"");return[...c].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),s.replace(l,"!!!").replace(c,"+").replace("!!!",l)}else return t.format(n)}}const He=new RegExp("^.*\\(.*\\).*$"),Ve=["latn","arab","hanidec"];class Ke{parse(e){return oe(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,n,r){return oe(this.locale,this.options,e).isValidPartialNumber(e,n,r)}getNumberingSystem(e){return oe(this.locale,this.options,e).options.numberingSystem}constructor(e,n={}){this.locale=e,this.options=n}}const ye=new Map;function oe(t,e,n){let r=Ee(t,e);if(!t.includes("-nu-")&&!r.isValidPartialNumber(n)){for(let s of Ve)if(s!==r.options.numberingSystem){let l=Ee(t+(t.includes("-u-")?"-nu-":"-u-nu-")+s,e);if(l.isValidPartialNumber(n))return l}}return r}function Ee(t,e){let n=t+(e?Object.entries(e).sort((s,l)=>s[0]<l[0]?-1:1).join():""),r=ye.get(n);return r||(r=new Ge(t,e),ye.set(n,r)),r}class Ge{parse(e){let n=this.sanitize(e);n=q(n,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let r=n?+n:NaN;if(isNaN(r))return NaN;if(this.options.currencySign==="accounting"&&He.test(e)&&(r=-1*r),this.options.style==="percent"){r/=100;var s;r=+r.toFixed(((s=this.options.maximumFractionDigits)!==null&&s!==void 0?s:0)+2)}return r}sanitize(e){return e=e.replace(this.symbols.literals,""),e=e.replace("-",this.symbols.minusSign),this.options.numberingSystem==="arab"&&(e=e.replace(",",this.symbols.decimal),e=e.replace(String.fromCharCode(1548),this.symbols.decimal),e=q(e,".",this.symbols.group)),this.options.locale==="fr-FR"&&(e=q(e,".",String.fromCharCode(8239))),e}isValidPartialNumber(e,n=-1/0,r=1/0){return e=this.sanitize(e),e.startsWith(this.symbols.minusSign)&&n<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&r>0&&(e=e.slice(this.symbols.plusSign.length)),e.startsWith(this.symbols.group)?!1:(e=q(e,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,""),e.length===0)}constructor(e,n={}){this.formatter=new Intl.NumberFormat(e,n),this.options=this.formatter.resolvedOptions(),this.symbols=Je(this.formatter,this.options,n)}}const xe=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Je(t,e,n){var r,s,l,c;let u=t.formatToParts(-10000.111),p=t.formatToParts(10000.111),d=t.formatToParts(1);var C;let x=(C=(r=u.find(v=>v.type==="minusSign"))===null||r===void 0?void 0:r.value)!==null&&C!==void 0?C:"-",B=(s=p.find(v=>v.type==="plusSign"))===null||s===void 0?void 0:s.value;!B&&(n?.signDisplay==="exceptZero"||n?.signDisplay==="always")&&(B="+");let T=(l=u.find(v=>v.type==="decimal"))===null||l===void 0?void 0:l.value,I=(c=u.find(v=>v.type==="group"))===null||c===void 0?void 0:c.value,F=u.filter(v=>!xe.has(v.type)).map(v=>Ce(v.value)),j=d.filter(v=>!xe.has(v.type)).map(v=>Ce(v.value)),b=[...new Set([...j,...F])].sort((v,Z)=>Z.length-v.length),f=b.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${b.join("|")}|[\\p{White_Space}]`,"gu"),$=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),w=new Map($.map((v,Z)=>[v,Z])),J=new RegExp(`[${$.join("")}]`,"g");return{minusSign:x,plusSign:B,decimal:T,group:I,literals:f,numeral:J,index:v=>String(w.get(v))}}function q(t,e,n){return t.replaceAll?t.replaceAll(e,n):t.split(e).join(n)}function Ce(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}var Qe=o(45377);const $e="en-EN",Ye=()=>typeof navigator>"u"?$e:navigator.language?navigator.language:navigator.userLanguage?navigator.userLanguage:$e;var Oe=o(7801),de=o(79698);function Xe({prop:t,defaultProp:e,onChange:n=()=>{}}){const[r,s]=qe({defaultProp:e,onChange:n}),l=t!==void 0,c=typeof t=="function"?t(r):t,u=l?c:r,p=(0,de.W)(n),d=a.useCallback(C=>{if(l){const x=typeof C=="function"?C(c):C;x!==c&&(p(x),s(C))}else s(C)},[l,c,s,p]);return[u,d]}function qe({defaultProp:t,onChange:e}){const n=a.useState(t),[r]=n,s=a.useRef(r),l=(0,de.W)(e);return a.useEffect(()=>{s.current!==r&&(l(r),s.current=r)},[r,s,l]),n}var Te=o(52624);const we=m.default.button`
  display: flex;
  height: 1rem;
  align-items: ${({reverse:t})=>t?"flex-end":"flex-start"};
  transform: translateY(${({reverse:t})=>t?"-2px":"2px"});
  cursor: ${({disabled:t})=>t?"not-allowed":void 0};
  svg {
    display: block;
    height: ${4/16}rem;
    transform: ${({reverse:t})=>t?"rotateX(180deg)":void 0};
  }
`,_e="",_=a.forwardRef(({size:t,startAction:e,name:n,hint:r,error:s,label:l,labelAction:c,locale:u,id:p,onValueChange:d,value:C,step:x,required:B,disabled:T,...I},F)=>{const j=(0,pe.M)(p),b=u||Ye(),f=(0,a.useRef)(new Ke(b,{style:"decimal"})),$=(0,a.useRef)(new Ue(b,{maximumFractionDigits:20})),[w,J]=Xe({prop(y){const S=String(C);return isNaN(S)||S!==y&&y!==""?y:S},defaultProp:_e,onChange(y){const S=f.current.parse(y);d(isNaN(S)?void 0:S)}}),z=y=>{J(String(y))},v=({target:{value:y}})=>{f.current.isValidPartialNumber(y)&&z(y)},Z=()=>{if(!w){z(x);return}const y=f.current.parse(w),S=isNaN(y)?x:y+x;z($.current.format(S))},Pe=()=>{if(!w){z(-x);return}const y=f.current.parse(w),S=isNaN(y)?-x:y-x;z($.current.format(S))},Rt=y=>{if(!T)switch(y.key){case Oe.y.DOWN:{y.preventDefault(),Pe();break}case Oe.y.UP:{y.preventDefault(),Z();break}}},Pt=()=>{if(w){const y=f.current.parse(w),S=isNaN(y)?"":$.current.format(y);z(S)}};return a.createElement(U.g,{name:n,hint:r,error:s,id:j,required:B},a.createElement(O.k,{direction:"column",alignItems:"stretch",gap:1},l&&a.createElement(V.Q,{action:c},l),a.createElement(Qe._,{ref:F,startAction:e,disabled:T,type:"text",inputmode:"decimal",onChange:v,onKeyDown:Rt,onBlur:Pt,value:w,size:t,endAction:a.createElement(a.Fragment,null,a.createElement(we,{disabled:T,"aria-hidden":!0,reverse:!0,onClick:Z,tabIndex:-1,type:"button","data-testid":"ArrowUp"},a.createElement(Te.J,{as:Q.CarretDown,color:"neutral500"})),a.createElement(we,{disabled:T,"aria-hidden":!0,onClick:Pe,tabIndex:-1,type:"button","data-testid":"ArrowDown"},a.createElement(Te.J,{as:Q.CarretDown,color:"neutral500"}))),...I}),a.createElement(K.J,null),a.createElement(ge.c,null)))});_.displayName="NumberInput",_.defaultProps={"aria-label":void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:void 0,labelAction:void 0,locale:void 0,required:!1,size:"M",startAction:void 0,step:1,value:void 0},_.propTypes={"aria-label":i.string,disabled:i.bool,error:i.string,hint:i.oneOfType([i.string,i.node,i.arrayOf(i.node)]),id:i.string,label:i.string,labelAction:i.element,locale:i.string,name:i.string.isRequired,onValueChange:i.func.isRequired,required:i.bool,size:i.oneOf(Object.keys(ne.J.input)),startAction:i.element,step:i.number,value:i.number};var et=o(49656);const tt=m.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:t})=>t?"none":void 0};
  color: ${({disabled:t,theme:e})=>t?e.colors.neutral600:e.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${k.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:t})=>t.colors.primary500};
  }

  &:active {
    color: ${({theme:t})=>t.colors.primary700};
  }

  ${ae.BF};
`,ce=(0,m.default)(E.x)`
  display: flex;
`,at=a.forwardRef(({children:t,href:e,to:n,disabled:r=!1,startIcon:s,endIcon:l,...c},u)=>(0,h.jsxs)(tt,{as:n&&!r?et.NavLink:"a",target:e?"_blank":void 0,rel:e?"noreferrer noopener":void 0,to:r?void 0:n,href:r?"#":e,disabled:r,ref:u,...c,children:[s&&(0,h.jsx)(ce,{as:"span","aria-hidden":!0,paddingRight:2,children:s}),(0,h.jsx)(k.Z,{children:t}),l&&!e&&(0,h.jsx)(ce,{as:"span","aria-hidden":!0,paddingLeft:2,children:l}),e&&(0,h.jsx)(ce,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,h.jsx)(Q.ExternalLink,{})})]}));var De=o(11276),nt=o(86675);const rt=m.default.div`
  grid-column: span ${({col:t})=>t};
  max-width: 100%;

  ${({theme:t})=>t.mediaQueries.tablet} {
    grid-column: span ${({s:t})=>t};
  }

  ${({theme:t})=>t.mediaQueries.mobile} {
    grid-column: span ${({xs:t})=>t};
  }
`,P=({col:t,xs:e,s:n,...r})=>{const{gap:s,gridCols:l}=(0,nt.N)();return a.createElement(rt,{gap:s,gridCols:l,col:t,xs:e,s:n},a.createElement(E.x,{...r}))};P.defaultProps={col:void 0,s:void 0,xs:void 0},P.propTypes={col:i.number,s:i.number,xs:i.number};var L=o(28702);const it=t=>(0,h.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,h.jsx)("path",{d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z",fill:"#32324D"})}),st=it,lt=t=>(0,h.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,h.jsx)("path",{d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z",fill:"#212134"})}),ot=lt,ue=({children:t})=>a.createElement(E.x,{paddingLeft:10,paddingRight:10},t);ue.propTypes={children:i.node.isRequired};const dt=t=>{const e=(0,a.useRef)(null),[n,r]=(0,a.useState)(!0),s=([l])=>{r(l.isIntersecting)};return(0,a.useEffect)(()=>{const l=e.current,c=new IntersectionObserver(s,t);return l&&c.observe(e.current),()=>{l&&c.disconnect()}},[e,t]),[e,n]},ct=(t,e)=>{const n=(0,de.W)(e);(0,a.useLayoutEffect)(()=>{const r=new ResizeObserver(n);return Array.isArray(t)?t.forEach(s=>{s.current&&r.observe(s.current)}):t.current&&r.observe(t.current),()=>{r.disconnect()}},[t,n])},ut=()=>{const t=(0,a.useRef)(null),[e,n]=(0,a.useState)(null),[r,s]=dt({root:null,rootMargin:"0px",threshold:0});return ct(r,()=>{r.current&&n(r.current.getBoundingClientRect())}),(0,a.useEffect)(()=>{t.current&&n(t.current.getBoundingClientRect())},[t]),{containerRef:r,isVisible:s,baseHeaderLayoutRef:t,headerSize:e}},ee=t=>{const{containerRef:e,isVisible:n,baseHeaderLayoutRef:r,headerSize:s}=ut();return a.createElement(a.Fragment,null,a.createElement("div",{style:{height:s?.height},ref:e},n&&a.createElement(G,{ref:r,...t})),!n&&a.createElement(G,{...t,sticky:!0,width:s?.width}))};ee.displayName="HeaderLayout";const mt=(0,m.default)(E.x)`
  width: ${t=>t.width}px;
`,G=a.forwardRef(({navigationAction:t,primaryAction:e,secondaryAction:n,subtitle:r,title:s,sticky:l,width:c,...u},p)=>{const d=typeof r=="string";return l?a.createElement(mt,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:c,zIndex:4,"data-strapi-header-sticky":!0},a.createElement(O.k,{justifyContent:"space-between"},a.createElement(O.k,null,t&&a.createElement(E.x,{paddingRight:3},t),a.createElement(E.x,null,a.createElement(k.Z,{variant:"beta",as:"h1",...u},s),d?a.createElement(k.Z,{variant:"pi",textColor:"neutral600"},r):r),n?a.createElement(E.x,{paddingLeft:4},n):null),a.createElement(O.k,null,e?a.createElement(E.x,{paddingLeft:2},e):void 0))):a.createElement(E.x,{ref:p,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:t?6:8,background:"neutral100","data-strapi-header":!0},t?a.createElement(E.x,{paddingBottom:2},t):null,a.createElement(O.k,{justifyContent:"space-between"},a.createElement(O.k,{minWidth:0},a.createElement(k.Z,{as:"h1",variant:"alpha",...u},s),n?a.createElement(E.x,{paddingLeft:4},n):null),e),d?a.createElement(k.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},r):r)});G.displayName="BaseHeaderLayout",G.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},G.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,sticky:i.bool,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired,width:i.number},ee.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},ee.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired};const gt=(0,m.default)(E.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:t})=>t?"auto 1fr":"1fr"};
`,pt=(0,m.default)(E.x)`
  overflow-x: hidden;
`,me=({sideNav:t,children:e})=>a.createElement(gt,{hasSideNav:Boolean(t)},t,a.createElement(pt,{paddingBottom:10},e));me.defaultProps={sideNav:void 0},me.propTypes={children:i.node.isRequired,sideNav:i.node};var ft=o(19325),ht=o(18446),bt=o.n(ht),g=o(61039);const vt=t=>t,yt=t=>{const{formatMessage:e}=(0,N.useIntl)(),n=(0,a.useRef)(null),r=["cover","contain","fill","inside","outside"],s=["centre","center","north","northeast","east","southeast","south","southwest","west","northwest"],l=[{value:"",label:"Same as source"},{value:"jpg",label:"JPEG"},{value:"png",label:"PNG"},{value:"webp",label:"WebP"},{value:"avif",label:"AVIF"}],c=t.format,u=t.handleFormatsChange,p=t.index;return(0,a.useEffect)(()=>{c.name===""&&document.getElementById(`responsive-image-name-${p}`).focus()}),a.createElement(De.r,{gap:6},a.createElement(P,{col:6,s:12},a.createElement(L.TextInput,{id:`responsive-image-name-${p}`,label:e({id:(0,g.OB)("settings.form.formats.name.label")}),hint:e({id:(0,g.OB)("settings.form.formats.name.description")}),validations:{required:!0},name:"name",onChange:d=>u(d,p),type:"text",value:c.name})),a.createElement(P,{col:3,s:6},a.createElement(W,{checked:c.x2,label:e({id:(0,g.OB)("settings.form.formats.x2.label")}),name:"x2",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),hint:`${c.width*2}px`,onChange:d=>{u({target:{name:"x2",value:d.target.checked}},p)}})),a.createElement(P,{col:3,s:6},a.createElement(L.Select,{label:e({id:(0,g.OB)("settings.form.formats.convertToFormat.label")}),hint:e({id:(0,g.OB)("settings.form.formats.convertToFormat.description")}),name:"convertToFormat",value:c.convertToFormat,selectButtonTitle:"Carret Down Button",onChange:d=>u({target:{name:"convertToFormat",value:d}},p)},l.map(d=>a.createElement(L.Option,{key:d.value,value:d.value},d.label)))),a.createElement(P,{col:6,s:12},a.createElement(L.NumberInput,{label:e({id:(0,g.OB)("settings.form.formats.width.label")}),name:"width",validations:{min:1},onValueChange:d=>u({target:{name:"width",value:d}},p),value:c.width})),a.createElement(P,{col:6,s:12},a.createElement(L.NumberInput,{label:e({id:(0,g.OB)("settings.form.formats.height.label")}),name:"height",onValueChange:d=>u({target:{name:"height",value:d}},p),value:c.height})),a.createElement(P,{col:4,s:7},a.createElement(L.Select,{label:e({id:(0,g.OB)("settings.form.formats.fit.label")}),hint:e({id:(0,g.OB)("settings.form.formats.fit.description")}),name:"fit",value:c.fit,selectButtonTitle:"Carret Down Button",onChange:d=>u({target:{name:"fit",value:d}},p)},r.map(d=>a.createElement(L.Option,{key:d,value:d},d)))),a.createElement(P,{col:4,s:7},a.createElement(L.Select,{label:e({id:(0,g.OB)("settings.form.formats.position.label")}),hint:e({id:(0,g.OB)("settings.form.formats.position.description")}),name:"position",value:c.position,selectButtonTitle:"Carret Down Button",onChange:d=>u({target:{name:"position",value:d}},p)},s.map(d=>a.createElement(L.Option,{key:d,value:d},d)))),a.createElement(P,{col:4,s:7},a.createElement(W,{checked:c.withoutEnlargement,label:e({id:(0,g.OB)("settings.form.formats.withoutEnlargement.label")}),hint:e({id:(0,g.OB)("settings.form.formats.withoutEnlargement.description")}),name:"withoutEnlargement",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:d=>{u({target:{name:"withoutEnlargement",value:d.target.checked}},p)}})))};var Et=o(18172),xt=o(36968),Ct=o.n(xt);const $t={isLoading:!0,isSubmiting:!1,responsiveDimensions:!0,initialData:{formats:[],quality:87,progressive:!1},modifiedData:{formats:[],quality:87,progressive:!1}},Ot={name:"",width:500,fit:"cover",position:"centre",withoutEnlargement:!1,convertToFormat:""},Tt=(t,e)=>(0,Et.default)(t,n=>{switch(e.type){case"CANCEL_CHANGES":n.modifiedData=t.initialData;break;case"GET_DATA_SUCCEEDED":n.isLoading=!1,n.responsiveDimensions=e.data.responsiveDimensions,n.initialData=e.data,n.modifiedData=e.data;break;case"ON_CHANGE":Ct()(n,["modifiedData",...e.keys.split(".")],e.value);break;case"ON_FORMATS_CHANGE":n.modifiedData.formats[e.index][e.keys]=e.value;break;case"ADD_FORMAT":n.modifiedData.formats.push(Ot);break;case"DELETE_FORMAT":n.modifiedData.formats.splice(e.index,1);break;case"ON_SUBMIT":{n.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":n.initialData=t.modifiedData,n.isSubmiting=!1;break;case"ON_SUBMIT_ERROR":{n.isSubmiting=!1;break}default:return t}});var wt=o(70624);const Re=()=>{const{formatMessage:t}=(0,N.useIntl)(),{lockApp:e,unlockApp:n}=(0,D.useOverlayBlocker)(),r=(0,D.useNotification)();(0,D.useFocusWhenNavigate)();const[{initialData:s,isLoading:l,isSubmiting:c,modifiedData:u,responsiveDimensions:p},d]=(0,a.useReducer)(Tt,$t,vt),C=(0,a.useRef)(!0);(0,a.useEffect)(()=>{const f=ft.Z.CancelToken.source(),$=async()=>{try{const{data:{data:w}}=await g.be.get((0,g.IF)("settings"),{cancelToken:f.token}),{data:{data:J}}=await g.be.get("/upload/settings",{cancelToken:f.token});d({type:"GET_DATA_SUCCEEDED",data:{...w,responsiveDimensions:J.responsiveDimensions}})}catch(w){console.error(w)}};return C.current&&$(),()=>{f.cancel("Operation canceled by the user."),C.current=!1}},[]);const x=bt()(s,u),B=async b=>{if(b.preventDefault(),!x){e(),d({type:"ON_SUBMIT"});try{await g.be.put((0,g.IF)("settings"),u),d({type:"SUBMIT_SUCCEEDED"}),r({type:"success",message:{id:"notification.form.success.fields"}})}catch(f){console.error(f);try{r({type:"warning",message:f.response.data.error.message||f.message})}catch{}d({type:"ON_SUBMIT_ERROR"})}n()}},T=({target:{name:b,value:f}})=>{d({type:"ON_CHANGE",keys:b,value:f})},I=({target:{name:b,value:f}},$)=>{d({type:"ON_FORMATS_CHANGE",keys:b,value:f,index:$})},F=()=>{d({type:"ADD_FORMAT"})},j=b=>{d({type:"DELETE_FORMAT",index:b})};return p?a.createElement(ie,{tabIndex:-1},a.createElement(M.Helmet,{title:t({id:(0,g.OB)("page.title"),defaultMessage:"Settings - Responsive Image"})}),a.createElement("form",{onSubmit:B},a.createElement(ee,{title:t({id:(0,g.OB)("settings.header.label"),defaultMessage:"Responsive image"}),primaryAction:a.createElement(re.z,{disabled:x,"data-testid":"save-button",loading:c,type:"submit",startIcon:a.createElement(H,null),size:"L"},t({id:"app.components.Button.save",defaultMessage:"Save"})),subtitle:t({id:(0,g.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the responsive image"})}),a.createElement(ue,null,l?a.createElement(D.LoadingIndicatorPage,null):a.createElement(me,null,a.createElement(be.K,{spacing:12},a.createElement(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},a.createElement(be.K,{spacing:4},a.createElement(O.k,null,a.createElement(k.Z,{variant:"delta",as:"h2"},t({id:(0,g.OB)("settings.section.global.label")}))),a.createElement(De.r,{gap:6},a.createElement(P,{col:6,s:12},a.createElement(_,{label:t({id:(0,g.OB)("settings.form.quality.label")}),name:"quality",validations:{min:1,max:100},onValueChange:b=>T({target:{name:"quality",value:b}}),value:u.quality})),a.createElement(P,{col:6,s:12},a.createElement(W,{checked:u.progressive,label:t({id:(0,g.OB)("settings.form.progressive.label")}),name:"progressive",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:b=>{T({target:{name:"progressive",value:b.target.checked}})}}))))),a.createElement(L.BaseHeaderLayout,{primaryAction:a.createElement(re.z,{startIcon:a.createElement(ot,null),onClick:F},t({id:(0,g.OB)("settings.section.formats.add.label")})),title:t({id:(0,g.OB)("settings.section.formats.label")}),as:"h2",style:{margin:"0 -56px 0 -56px"}}),u.formats.map((b,f)=>a.createElement(E.x,{key:f,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,style:{marginTop:30}},a.createElement(yt,{className:"row",format:b,handleFormatsChange:I,index:f}),a.createElement(re.z,{variant:"danger",startIcon:a.createElement(st,null),onClick:()=>j(f),style:{marginTop:25}},t({id:(0,g.OB)("settings.section.formats.delete.label")}))))))))):a.createElement(ue,null,a.createElement(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,style:{textAlign:"center",marginTop:50,fontSize:"1.2em"}},a.createElement(k.Z,{variant:"beta"},t({id:(0,g.OB)("settings.section.toActivate.label")},{setting:t({id:"upload.settings.form.responsiveDimensions.label"}),link:b=>a.createElement(at,{to:"/settings/media-library",key:"settings-link"},b)}))))},Dt=()=>a.createElement(D.CheckPagePermissions,{permissions:wt.Z.settings},a.createElement(Re,null))},96404:(te,A,o)=>{o.d(A,{c:()=>D});var a=o(85893),M=o(88262),N=o(75515);const D=()=>{const{id:h,error:R}=(0,M.U)();return!R||typeof R!="string"?null:(0,a.jsx)(N.Z,{variant:"pi",as:"p",id:`${h}-error`,textColor:"danger600","data-strapi-field-error":!0,children:R})}},63428:(te,A,o)=>{o.d(A,{J:()=>D});var a=o(85893),M=o(88262),N=o(75515);const D=()=>{const{id:h,hint:R,error:H}=(0,M.U)();return!R||typeof R!="string"||H?null:(0,a.jsx)(N.Z,{variant:"pi",as:"p",id:`${h}-hint`,textColor:"neutral600",children:R})}},7681:(te,A,o)=>{o.d(A,{K:()=>O});var a=o(85893),M=o(67294),N=o(27821),D=o(11047),h=o(38821);const R={size:!0,spacing:!0},H=(0,N.default)(D.k).withConfig({shouldForwardProp:(i,m)=>!R[i]&&m(i)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:i,spacing:m})=>(0,h.$)(i.spaces,m,void 0)};
  }
`,E=(0,N.default)(D.k).withConfig({shouldForwardProp:(i,m)=>!R[i]&&m(i)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:i,spacing:m})=>(0,h.$)(i.spaces,m,void 0)};
  }
`,O=(0,M.forwardRef)(({horizontal:i=!1,spacing:m,size:U,...V},K)=>(U&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),i?(0,a.jsx)(E,{ref:K,spacing:m||U,...V}):(0,a.jsx)(H,{direction:"column",alignItems:"stretch",ref:K,spacing:m||U,...V})));O.displayName="Stack"}}]);
