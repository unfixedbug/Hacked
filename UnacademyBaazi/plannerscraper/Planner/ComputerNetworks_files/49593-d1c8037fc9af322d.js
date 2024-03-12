"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49593],{58365:function(e,t,a){var i=a(87462),l=a(45987),r=a(67294),o=a(86010),n=a(59693),s=a(52543),d=r.forwardRef(function(e,t){var a=e.animation,n=void 0===a?"pulse":a,s=e.classes,d=e.className,c=e.component,u=e.height,h=e.variant,m=e.width,f=(0,l.Z)(e,["animation","classes","className","component","height","variant","width"]),p=Boolean(f.children);return r.createElement(void 0===c?"span":c,(0,i.Z)({ref:t,className:(0,o.default)(s.root,s[void 0===h?"text":h],d,p&&[s.withChildren,!m&&s.fitContent,!u&&s.heightAuto],!1!==n&&s[n])},f,{style:(0,i.Z)({width:m,height:u},f.style)}))});t.Z=(0,s.Z)(function(e){return{root:{display:"block",backgroundColor:(0,n.Fq)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},{name:"MuiSkeleton"})(d)},39079:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(44759),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),r=a(85893),o=l.forwardRef((e,t)=>{let{className:a,color:l,height:o=24,width:n=24}=e;return r.jsx.call(void 0,i.b,{className:a,ref:t,color:l,width:n,height:o,viewBox:"0 0 24 24",children:r.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.27958 6.27748C9.65235 5.90751 10.2567 5.90751 10.6295 6.27748L15.7204 11.3301C16.0932 11.7001 16.0932 12.2999 15.7204 12.6699L10.6295 17.7225C10.2567 18.0925 9.65235 18.0925 9.27958 17.7225C8.90681 17.3526 8.90681 16.7527 9.27958 16.3827L13.6955 12L9.27958 7.61726C8.90681 7.24729 8.90681 6.64745 9.27958 6.27748Z",fill:"currentcolor"})})});o.displayName="RightChevron",t.a=o,t.b=o},8131:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=(i=a(67294))&&i.__esModule?i:{default:i},r=()=>{let e="undefined"==typeof window,[t,a]=l.default.useState({width:e?0:null==window?void 0:window.innerWidth,height:e?0:null==window?void 0:window.innerHeight});return l.default.useEffect(()=>{let t=()=>{a({width:window.innerWidth,height:window.innerHeight})};return e||null==window||window.addEventListener("resize",t),()=>{e||null==window||window.removeEventListener("resize",t)}},[]),t},o=t.a=r;t.a=o},66536:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(44759),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),r=a(85893),o=l.forwardRef((e,t)=>{let{className:a,color:l,height:o=24,width:n=24}=e;return r.jsxs.call(void 0,i.b,{className:a,ref:t,width:n,height:o,color:l,viewBox:"0 0 24 24",children:[r.jsx.call(void 0,"ellipse",{cx:"12",cy:"14.8137",rx:"3.81409",ry:"3.81409",stroke:"currentcolor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx.call(void 0,"path",{d:"M2.99622 14.8137C2.99622 9.84105 7.02733 5.80994 12 5.80994C16.9726 5.80994 21.0037 9.84105 21.0037 14.8137",stroke:"currentcolor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})});o.displayName="Eye",t.a=o,t.b=o},70220:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=a(95527),r=a(39079),o=a(85619),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),s=(i=a(16829))&&i.__esModule?i:{default:i},d=a(85893),c=s.default.call(void 0,l.a)`
  border: 1px solid ${e=>e.theme.palette.DIVIDER};
  border-radius: ${e=>e.theme.measurements.shape(2)};
  padding: ${e=>e.theme.measurements.spacing(3)};
  @media screen and (max-width: ${e=>e.theme.breakpoint.mobile}) {
    display: none;
  }
`,u=t.a=n.forwardRef((e,t)=>{let{className:a,disabled:i,type:l,onClick:n}=e;return d.jsx.call(void 0,c,{className:a,ref:t,$type:l,disabled:i,variant:"secondary",onClick:n,children:"prev"===l?d.jsx.call(void 0,o.b,{height:20,width:20}):d.jsx.call(void 0,r.b,{height:20,width:20})})});u.displayName="ArrowButton",t.a=u,t.b=u},96852:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=a(8131),r=a(70220),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),n=(i=a(16829))&&i.__esModule?i:{default:i},s=a(85893),d=n.default.div`
  display: flex;
  flex-direction: row;
`,c=n.default.div`
  position: relative;
  height: 100%;
  width: 100%;
`,u=n.default.call(void 0,d)`
  overflow: hidden;
  height: 100%;
  width: 100%;

  @media screen and (max-width: ${e=>e.theme.breakpoint.tablet}) {
    overflow-x: ${e=>"auto"===e.$mode?"auto":"hidden"};
    margin: 0;
    overscroll-behavior: unset;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,h=n.default.call(void 0,d)`
  height: 100%;
  width: 100%;
  gap: ${e=>"single"===e.$variant?"0px":"16px"};
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  transform: ${({$currentPage:e,$offset:t,$variant:a})=>"single"===a?`translateX(calc(${-100*e}%))`:`translateX(calc(${-100*e}% + ${t}px))`};

  ${e=>"auto"===e.$mode?`
        @media screen and (max-width: ${e.theme.breakpoint.mobile}) {
          transform: translateX(0);
        }
      `:""}
`,m=n.default.div``,f=n.default.call(void 0,d)`
  gap: ${e=>"single"===e.$variant?"0px":"16px"};
`,p=n.default.call(void 0,r.b)`
  z-index: 10;
  position: absolute;
  border: none;
  top: calc(50% - ${e=>e.theme.measurements.spacing(8)});
  left: ${e=>"prev"===e.type?`-${e.theme.measurements.spacing(5)}`:"initial"};
  right: ${e=>"next"===e.type?`-${e.theme.measurements.spacing(5)}`:"initial"};
`,v=t.a=o.forwardRef((e,t)=>{var a;let i,r,[n,d]=o.useState(0),v=o.useRef(null),g=o.useRef(null),b=o.useRef(null),{width:w}=l.a.call(void 0),{className:x,children:$,itemsPerSlide:j=1,mode:y="auto",controls:C,onChange:k}=e,_=1===j?"single":"multiple",M=!!(null!=C&&C.loop),L=!!(null!=C&&C.autoplay),N=!!(null!=C&&C.showArrows);o.useEffect(()=>{d(0),g.current&&g.current.scrollTo({top:0,left:0,behavior:"smooth"})},[w]);let O=o.useMemo(()=>o.Children.toArray($).length,[$]),F=o.useMemo(()=>Math.ceil(O/j)-1,[O,j]),P=o.useCallback(()=>{d(e=>{let t=e-1;return t<0?M?F:e:t})},[M,F]),B=o.useCallback(()=>{d(e=>{let t=e+1;return t>F?M?0:e:t})},[M,F]);o.useEffect(()=>{let e;return L&&(e=setInterval(()=>{B()},2e3)),()=>{clearInterval(e)}},[L,B]);let{slideList:E,slideItemCount:R}=o.useMemo(()=>{let e=[];return{slideList:o.Children.toArray($).reduce((t,a,i)=>{let l=s.jsx.call(void 0,m,{ref:b,children:a},`each_slide_item_${i}`);return i%j==0?(t.push([l]),e.push(1)):(t[t.length-1].push(l),e[e.length-1]+=1),t},[]),slideItemCount:e}},[$,O,j]),V=M||n>0,I=M||n<F;o.useImperativeHandle(t,()=>({onNext:()=>{B()},setSlide:e=>{d(e)},onPrev:()=>{P()}})),o.useEffect(()=>{k&&k({currenSlide:n,canMoveToPrev:V,canMoveToNext:I})},[n,V,I]);let W=(i=(null==(a=b.current)?void 0:a.clientWidth)||0,r=R[n]===j,"single"===_?0:r?0===n?0:-(16*n):r||0!==n?(j-R[n])*i+(j-R[n]-1)*16+-((n-1)*16):0);return s.jsxs.call(void 0,c,{className:x,ref:v,children:[N&&V&&s.jsx.call(void 0,p,{type:"prev",onClick:P}),s.jsx.call(void 0,u,{$mode:y,ref:g,children:s.jsx.call(void 0,h,{className:"aquilla-carousel-wrapper",$mode:y,$currentPage:n,$offset:W,$variant:_,children:E.map((e,t)=>s.jsx.call(void 0,f,{$variant:_,children:e},`each_slide_${t}`))})}),N&&I&&s.jsx.call(void 0,p,{type:"next",onClick:B})]})});v.displayName="Carousel",t.a=v,t.b=v},60922:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(44759),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),r=a(85893),o=l.forwardRef((e,t)=>{let{className:a,color:l,height:o=24,width:n=24}=e;return r.jsxs.call(void 0,i.b,{className:a,ref:t,width:n,height:o,color:l,viewBox:"0 0 24 24",children:[r.jsx.call(void 0,"path",{d:"M11.9997 9.35309L12.0007 13.3548",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx.call(void 0,"path",{d:"M9.99902 11.3544L14.0007 11.3534",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx.call(void 0,"path",{d:"M9.50879 18.0025V18.5147C9.50879 19.8894 10.6232 21.0038 11.9978 21.0038H11.9998C12.6602 21.004 13.2937 20.7419 13.7608 20.2751C14.228 19.8084 14.4906 19.1751 14.4909 18.5147V18.0025",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9494 18.0025C19.0837 18.0025 20.0032 17.083 20.0032 15.9487V15.9487C20.0028 15.3725 19.774 14.8199 19.367 14.412L18.0024 13.0485V8.99878C18.0024 5.68369 15.315 2.99628 11.9999 2.99628V2.99628C8.68483 2.99628 5.99742 5.68369 5.99742 8.99878V13.0485L4.63285 14.412C4.22583 14.8199 3.99704 15.3725 3.99658 15.9487V15.9487C3.99658 16.4934 4.21297 17.0158 4.59814 17.401C4.98331 17.7861 5.50572 18.0025 6.05044 18.0025H17.9494Z",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})});o.displayName="Notify",t.a=o,t.b=o},87649:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=(i=a(16829))&&i.__esModule?i:{default:i},r=a(67294),o=a(85893),n=l.default.div`
  position: relative;
  height: ${e=>e.theme.measurements.spacing(2)};
`,s=l.default.div`
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  height: ${e=>e.theme.measurements.spacing(2)};
  border-radius: ${e=>e.theme.measurements.shape(7.5)};
  background: ${e=>e.theme.palette.WHITE};
  opacity: 30%;
`,d=l.default.call(void 0,n)`
  height: ${e=>e.theme.measurements.spacing(2)};
  width: ${e=>e.$width};
  background: ${e=>e.theme.palette.WHITE};
  position: absolute;
  border-radius: ${e=>e.theme.measurements.shape(7.5)};
  left: 0;
  top: 0;
  z-index: 2;
`;t.a=function(e){let{progress:t}=e,a=r.useMemo.call(void 0,()=>`${t}%`,[t]);return o.jsxs.call(void 0,n,{children:[o.jsx.call(void 0,s,{}),o.jsx.call(void 0,d,{$width:a})]})}},12204:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=a(95527),r=a(6776),o=(i=a(16829))&&i.__esModule?i:{default:i},n=a(70917),s=a(85893),d=e=>n.keyframes`
  50% {
    box-shadow: 0 0 0 ${e} rgba(235, 87, 87, 0.125);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(235, 87, 87, 0);
  }
`,c=o.default.call(void 0,l.a)`
  border-radius: 50%;
  padding: ${e=>e.theme.measurements.spacing(7)};
  box-shadow: 0 0 0 0 rgba(235, 87, 87, 0.5);
  animation: ${e=>d(e.theme.measurements.spacing(4))}
    2s infinite;
  transition: 0.5s;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

  svg {
    color: ${e=>e.theme.palette.WHITE};
  }
`;t.a=function(){return s.jsx.call(void 0,c,{variant:"danger",size:"large",children:s.jsx.call(void 0,r.b,{height:12,width:12})})}},7294:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=a(95527),r=a(6776),o=a(42310),n=a(67294),s=(i=a(16829))&&i.__esModule?i:{default:i},d=a(85893),c=s.default.call(void 0,l.a)`
  border-radius: 50%;
  padding: ${e=>e.theme.measurements.spacing(7)};
  background: ${e=>`${e.$buttonColor}33`};
  border-color: transparent;
  transition: 0.5s;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
    background: ${e=>`${e.$buttonColor}33`};
    border-color: transparent;
  }

  svg {
    color: ${e=>e.$buttonColor};
  }
`;t.a=function({topicColor:e,variant:t="fill"}){let a=o.b.call(void 0).VIOLET,i=n.useMemo.call(void 0,()=>e||a,[e,t]);return d.jsx.call(void 0,c,{size:"large",$buttonColor:i,children:d.jsx.call(void 0,r.b,{height:12,width:12})})}},31355:function(e,t,a){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7294),r=a(12204),o=a(49588),n=a(87649),s=a(95527),d=a(97269),c=a(4784),u=a(74623),h=a(72407),m=a(66536),f=a(60922),p=a(42310),v=i(a(16829)),g=a(67294),b=i(g),w=a(85893),x=v.default.a`
  display: flex;
  flex-flow: column;
  cursor: pointer;
  width: ${e=>e.theme.measurements.spacing(136)};
  max-width: ${e=>e.theme.measurements.spacing(136)};
`,$=v.default.div`
  position: relative;
  display: block;
  min-width: fit-content;
  height: ${e=>e.theme.measurements.spacing(78)};
  img {
    width: 100%;
    max-width: ${e=>e.theme.measurements.spacing(136)};
    height: ${e=>e.theme.measurements.spacing(78)};
    border-radius: ${e=>e.theme.measurements.shape(2)};
  }
`,j=v.default.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  bottom: ${e=>e.theme.measurements.spacing(6)};
  gap: ${e=>e.theme.measurements.spacing(4)};
  left: ${e=>e.theme.measurements.spacing(6)};
  right: ${e=>e.theme.measurements.spacing(6)};
`,y=v.default.div`
  display: flex;
  align-items: flex-end;
`,C=v.default.div`
  display: flex;
  gap: ${e=>e.theme.measurements.spacing(4)};
  justify-content: flex-start;
  flex: 1;
`,k=v.default.call(void 0,c.a)`
  text-transform: uppercase;
  padding: ${e=>e.theme.measurements.spacing(2)}
    ${e=>e.theme.measurements.spacing(3)};
`,_=v.default.call(void 0,d.a)`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.measurements.spacing(1.25)};
  text-transform: uppercase;
  min-width: ${e=>e.theme.measurements.spacing(16)};
  max-height: ${e=>e.theme.measurements.spacing(16)};
  border: none;
  border-radius: ${e=>e.theme.measurements.spacing(12)};
  padding: ${e=>e.theme.measurements.spacing(4)}
    ${e=>e.theme.measurements.spacing(8)}
    ${e=>e.theme.measurements.spacing(4)}
    ${e=>e.theme.measurements.spacing(6)};
`,M=v.default.call(void 0,s.a)`
  border: none;
  border-radius: ${e=>e.theme.measurements.spacing(16)};
  padding: ${e=>e.theme.measurements.spacing(4)};
  min-width: ${e=>e.theme.measurements.spacing(16)};
  min-height: ${e=>e.theme.measurements.spacing(16)};
`,L=v.default.call(void 0,c.a)`
  border: none;
  display: flex;
  gap: ${e=>e.theme.measurements.spacing(2)};
  font-weight: 600;
`,N=v.default.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  &.align-item-left {
    justify-content: flex-start;
  }
`,O=v.default.div`
  display: flex;
  flex-flow: column;
  margin-top: ${e=>e.theme.measurements.spacing(6)};
  gap: ${e=>e.theme.measurements.spacing(3)};
`,F=v.default.call(void 0,u.a)`
  line-height: ${e=>e.theme.measurements.spacing(12)};
`,P=v.default.div`
  display: flex;
  flex-direction: row;
  gap: ${e=>e.theme.measurements.spacing(4)};
  align-items: center;
`,B=v.default.call(void 0,u.a)`
  color: ${e=>e.$topicColor||e.theme.palette.VIOLET};
  font-size: ${e=>e.theme.measurements.spacing(6)};
  font-weight: 700;
  line-height: ${e=>e.theme.measurements.spacing(6)};
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,E=v.default.div`
  font-size: ${e=>e.theme.measurements.spacing(7)};
  line-height: ${e=>e.theme.measurements.spacing(10)};
  color: ${e=>e.theme.palette.SECONDARY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,R=v.default.call(void 0,E)`
  a {
    color: ${e=>e.theme.palette.SECONDARY};
  }
`,V=v.default.call(void 0,E)``,I=v.default.call(void 0,c.a)`
  white-space: nowrap;
`,W=b.default.forwardRef((e,t)=>{let{title:a,langLabel:i="EN",variant:s,showPlayButton:d=!0,showNotifyButton:c=!1,viewCount:u=0,progress:v=0,topicName:b,topicColor:E,educatorName:W,detailsLine:z,ariaLabel:T,dataTestId:D,className:Z,onClick:H,href:A,newTab:S,onNotify:X,thumbnail:U,educatorLink:Y="",as:q="a",notified:G=!1}=e,J=p.b.call(void 0),K=g.useMemo.call(void 0,()=>"Continue Watching"===s&&v,[s,v]),Q=e=>{X&&(e.preventDefault(),X(e))},ee=e=>{X&&(e.preventDefault(),X(e))},et=e=>{H&&(e.preventDefault(),H(e))},ea=e=>{e.stopPropagation()};return w.jsxs.call(void 0,x,{as:q,ref:t,className:`${Z||""} aquilla-classcard classcard`,onClick:et,href:A,"aria-label":T,"data-testid":D,title:a,rel:"noopener noreferrer",target:S?"_blank":"_self",children:[w.jsxs.call(void 0,$,{children:[U?w.jsx.call(void 0,U,{}):"",w.jsxs.call(void 0,j,{children:[w.jsxs.call(void 0,y,{children:["Upcoming"!==s?w.jsxs.call(void 0,C,{children:["Live"===s?w.jsx.call(void 0,k,{variant:"solid",color:J.RED,size:"small",children:"Live"}):"",u?w.jsxs.call(void 0,L,{size:"small",variant:"default",children:[w.jsx.call(void 0,m.b,{height:16,width:16})," ",u]}):""]}):"",w.jsxs.call(void 0,N,{className:"Upcoming"===s?"align-item-left":"",children:["Live"===s&&d?w.jsx.call(void 0,r.a,{}):"","Upcoming"===s&&c&&(G?w.jsx.call(void 0,M,{variant:"secondary",onClick:ee,children:w.jsx.call(void 0,h.b,{height:16,width:16})}):w.jsx.call(void 0,_,{variant:"secondary",size:"small",startIcon:w.jsx.call(void 0,f.b,{height:16,width:16}),label:"NOTIFY ME",onClick:Q})),("Missed"===s||"Continue Watching"===s)&&d&&w.jsx.call(void 0,o.a,{topicColor:E}),"Completed"===s&&d&&w.jsx.call(void 0,l.a,{topicColor:E})]})]}),K?w.jsx.call(void 0,n.a,{progress:v}):""]})]}),w.jsxs.call(void 0,O,{children:[w.jsxs.call(void 0,P,{children:[w.jsx.call(void 0,I,{as:"div",variant:"default",size:"small",children:i}),w.jsx.call(void 0,B,{as:"div",variant:"p2",$topicColor:E,children:b})]}),w.jsx.call(void 0,F,{variant:"h5",children:a}),W?w.jsx.call(void 0,R,{title:W,children:Y?w.jsx.call(void 0,"a",{href:Y||"",title:W,onClick:ea,children:W}):W}):"",w.jsx.call(void 0,V,{title:z,children:z})]})]})}),z=t.a=W;t.a=z},72407:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(44759),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),r=a(85893),o=l.forwardRef((e,t)=>{let{className:a,color:l="#3C4852",height:o=24,width:n=24}=e;return r.jsxs.call(void 0,i.b,{className:a,ref:t,width:n,height:o,color:l,viewBox:"0 0 16 16",children:[r.jsx.call(void 0,"path",{d:"M6.33911 12.0017V12.3432C6.33911 13.2596 7.08203 14.0025 7.99847 14.0025H7.9998C8.44007 14.0027 8.86237 13.828 9.17381 13.5168C9.48525 13.2056 9.66032 12.7835 9.66049 12.3432V12.0017",stroke:l,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),r.jsx.call(void 0,"path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9662 12.0017C12.7224 12.0017 13.3354 11.3887 13.3354 10.6325V10.6325C13.3351 10.2483 13.1826 9.87998 12.9112 9.60806L12.0015 8.69902V5.99923C12.0015 3.78917 10.2099 1.99756 7.99986 1.99756V1.99756C5.7898 1.99756 3.9982 3.78917 3.9982 5.99923V8.69902L3.08848 9.60806C2.81714 9.87998 2.66461 10.2483 2.66431 10.6325V10.6325C2.66431 10.9956 2.80857 11.3439 3.06535 11.6007C3.32213 11.8575 3.6704 12.0017 4.03354 12.0017H11.9662Z",fill:l,stroke:l,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),r.jsx.call(void 0,"path",{d:"M9.2228 6.80493L7.69521 8.33335L6.77734 7.4163",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]})});o.displayName="Notified",t.a=o,t.b=o},6372:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a={A:"#DE4B9B",B:"#00B3B3",C:"#8873FF",D:"#2894D1",E:"#F1B334",F:"#FF986C",G:"#64BEFF",H:"#5873FF",I:"#FF6694",J:"#27B772",K:"#CF866F",L:"#FF932F",M:"#DE4B9B",N:"#00B3B3",O:"#8873FF",P:"#2894D1",Q:"#F1B334",R:"#FF986C",S:"#64BEFF",T:"#5873FF",U:"#FF6694",V:"#27B772",W:"#CF866F",X:"#FF932F",Y:"#DE4B9B",Z:"#00B3B3"},i=Object.keys(a).reduce((e,t)=>(e[t]=a[t],e[t.toLowerCase()]=a[t],e),{}),l=t.a=i;t.a=l},85619:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(44759),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(67294)),r=a(85893),o=l.forwardRef((e,t)=>{let{className:a,color:l,height:o=24,width:n=24}=e;return r.jsx.call(void 0,i.b,{className:a,ref:t,color:l,width:n,height:o,viewBox:"0 0 24 24",children:r.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7204 6.27748C15.0932 6.64745 15.0932 7.24729 14.7204 7.61726L10.3045 12L14.7204 16.3827C15.0932 16.7527 15.0932 17.3526 14.7204 17.7225C14.3476 18.0925 13.7433 18.0925 13.3705 17.7225L8.27958 12.6699C7.90681 12.2999 7.90681 11.7001 8.27958 11.3301L13.3705 6.27748C13.7433 5.90751 14.3476 5.90751 14.7204 6.27748Z",fill:"currentcolor"})})});o.displayName="LeftChevron",t.a=o,t.b=o},49588:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=a(95527),r=a(6776),o=a(42310),n=a(67294),s=(i=a(16829))&&i.__esModule?i:{default:i},d=a(85893),c=s.default.call(void 0,l.a)`
  border-radius: 50%;
  padding: ${e=>e.theme.measurements.spacing(7)};
  background: ${e=>e.$buttonColor};
  border-color: ${e=>e.$buttonColor};
  transition: 0.5s;

  &:hover,
  &:active,
  &:focus {
    background: ${e=>e.$buttonColor};
    border-color: ${e=>e.$buttonColor};
    transform: scale(1.1);
  }

  svg {
    color: ${e=>e.theme.palette.WHITE};
  }
`;t.a=function({topicColor:e}){let t=o.b.call(void 0).VIOLET,a=n.useMemo.call(void 0,()=>e||t,[e]);return d.jsx.call(void 0,c,{size:"large",$buttonColor:a,children:d.jsx.call(void 0,r.b,{height:12,width:12})})}},22066:function(e,t,a){var i=a(31355);a(7294),a(12204),a(49588),a(87649),a(95527),a(50117),a(97269),a(93711),a(55429),a(94271),a(4784),a(65923),a(74623),a(72407),a(66536),a(60922),a(6776),a(44759),a(42310),a(47076),a(37186);var l=i.a;t.Z=l},57402:function(e,t,a){var i=a(6372);a(37186);var l=e=>{let t=e.charAt(0);return i.a[t]},r=t.Z=l;t.Z=r},11619:function(e,t,a){var i=a(6776);a(44759),a(42310),a(37186),t.sh=i.a,t.ZP=i.b}}]);
//# sourceMappingURL=49593-d1c8037fc9af322d.js.map