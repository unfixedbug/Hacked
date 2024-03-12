(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77493,29636,10292],{39079:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(44759),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),a=r(85893),o=i.forwardRef((e,t)=>{let{className:r,color:i,height:o=24,width:l=24}=e;return a.jsx.call(void 0,n.b,{className:r,ref:t,color:i,width:l,height:o,viewBox:"0 0 24 24",children:a.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.27958 6.27748C9.65235 5.90751 10.2567 5.90751 10.6295 6.27748L15.7204 11.3301C16.0932 11.7001 16.0932 12.2999 15.7204 12.6699L10.6295 17.7225C10.2567 18.0925 9.65235 18.0925 9.27958 17.7225C8.90681 17.3526 8.90681 16.7527 9.27958 16.3827L13.6955 12L9.27958 7.61726C8.90681 7.24729 8.90681 6.64745 9.27958 6.27748Z",fill:"currentcolor"})})});o.displayName="RightChevron",t.a=o,t.b=o},8131:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=r(67294))&&n.__esModule?n:{default:n},a=()=>{let e="undefined"==typeof window,[t,r]=i.default.useState({width:e?0:null==window?void 0:window.innerWidth,height:e?0:null==window?void 0:window.innerHeight});return i.default.useEffect(()=>{let t=()=>{r({width:window.innerWidth,height:window.innerHeight})};return e||null==window||window.addEventListener("resize",t),()=>{e||null==window||window.removeEventListener("resize",t)}},[]),t},o=t.a=a;t.a=o},3792:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(46914),a=r(96852),o=r(70220),l=r(97269),s=r(91551),c=r(37186),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),d=(n=r(16829))&&n.__esModule?n:{default:n},f=r(85893),h=d.default.call(void 0,l.a)`
  min-width: auto;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: ${e=>e.theme.measurements.spacing(6)};
  line-height: ${e=>e.theme.measurements.spacing(7)};
  border: 1px solid ${e=>e.theme.palette.DIVIDER};
  border-radius: ${e=>e.theme.measurements.shape(2)};
  padding: ${e=>e.theme.measurements.spacing(4)}
    ${e=>e.theme.measurements.spacing(6)};
`,p=d.default.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${e=>e.theme.breakpoint.mobile}) {
    .aquilla-carousel-wrapper > *:first-child {
      margin-left: ${e=>e.theme.measurements.spacing(8)};
    }

    .aquilla-carousel-wrapper > *:last-child {
      margin-right: ${e=>e.theme.measurements.spacing(8)};
    }
  }
`,m=d.default.call(void 0,o.b)`
  display: ${e=>!0===e.$hideArrowButtons?"none":"flex"};
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`,v=t.a=u.forwardRef((e,t)=>{let{className:r,children:n,title:o,description:l,hideArrowButtons:d,onSeeAll:v,itemsPerSlide:g=3}=e,[b,y]=u.useState({prev:{disabled:!1},next:{disabled:!1}}),w=u.useRef(null),x=s.a.call(void 0),j=({canMoveToPrev:e,canMoveToNext:t})=>{y(r=>c.b.call(void 0,c.a.call(void 0,{},r),{prev:c.b.call(void 0,c.a.call(void 0,{},r.prev),{disabled:!e}),next:c.b.call(void 0,c.a.call(void 0,{},r.next),{disabled:!t})}))},_=()=>{var e;null==(e=w.current)||e.onNext()},$=()=>{var e;null==(e=w.current)||e.onPrev()};return f.jsxs.call(void 0,p,{ref:t,className:r,children:[f.jsx.call(void 0,i.b,{title:o,description:l,actions:x&&!v?null:f.jsxs.call(void 0,f.Fragment,{children:[v&&f.jsx.call(void 0,h,{variant:"secondary",size:"small",onClick:v,children:"SEE ALL"}),f.jsx.call(void 0,m,{type:"prev",disabled:b.prev.disabled,onClick:$,$hideArrowButtons:d,className:"aquilla-showcase-arrow showcase-arrow arrow-prev"}),f.jsx.call(void 0,m,{type:"next",disabled:b.next.disabled,onClick:_,$hideArrowButtons:d,className:"aquilla-showcase-arrow showcase-arrow arrow-next"})]}),className:"aquilla-showcase-section-header showcase-section-header"}),f.jsx.call(void 0,a.b,{ref:w,itemsPerSlide:g,onChange:j,children:n})]})}),g=t.b=v;t.a=v,t.b=g},46914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(74623),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),o=(n=r(16829))&&n.__esModule?n:{default:n},l=r(85893),s=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${e=>e.theme.measurements.spacing(8)};
  @media screen and (max-width: ${e=>e.theme.breakpoint.mobile}) {
    padding: 0px ${e=>e.theme.measurements.spacing(8)};
  }
`,c=o.default.div`
  width: ${e=>e.$hasActions?"50%":"100%"};
  display: flex;
  flex-direction: column;
`,u=o.default.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: ${e=>e.theme.measurements.spacing(4)};
`,d=t.a=a.forwardRef((e,t)=>{let{className:r,children:n,title:o,description:d,actions:f}=e,h=!!a.Children.count(f),p=a.isValidElement(o);return l.jsxs.call(void 0,l.Fragment,{children:[l.jsxs.call(void 0,s,{className:r,ref:t,children:[l.jsxs.call(void 0,c,{$hasActions:h,className:"aquilla-showcase-section-header-heading showcase-section-header-heading",children:[p?o:l.jsx.call(void 0,i.b,{variant:"h4",children:o}),d&&l.jsx.call(void 0,i.b,{variant:"p2",children:d})]}),h&&l.jsx.call(void 0,u,{className:"aquilla-showcase-section-header-actions showcase-section-header-actions",children:f})]}),n]})});d.displayName="SectionHeader",t.a=d,t.b=d},66536:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(44759),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),a=r(85893),o=i.forwardRef((e,t)=>{let{className:r,color:i,height:o=24,width:l=24}=e;return a.jsxs.call(void 0,n.b,{className:r,ref:t,width:l,height:o,color:i,viewBox:"0 0 24 24",children:[a.jsx.call(void 0,"ellipse",{cx:"12",cy:"14.8137",rx:"3.81409",ry:"3.81409",stroke:"currentcolor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx.call(void 0,"path",{d:"M2.99622 14.8137C2.99622 9.84105 7.02733 5.80994 12 5.80994C16.9726 5.80994 21.0037 9.84105 21.0037 14.8137",stroke:"currentcolor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]})});o.displayName="Eye",t.a=o,t.b=o},91551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(29751),i=r(89786),a=()=>{let e=i.b.call(void 0);return n.a.call(void 0,`(max-width: ${e.mobile})`)},o=t.a=a;t.a=o},70220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(95527),a=r(39079),o=r(85619),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),s=(n=r(16829))&&n.__esModule?n:{default:n},c=r(85893),u=s.default.call(void 0,i.a)`
  border: 1px solid ${e=>e.theme.palette.DIVIDER};
  border-radius: ${e=>e.theme.measurements.shape(2)};
  padding: ${e=>e.theme.measurements.spacing(3)};
  @media screen and (max-width: ${e=>e.theme.breakpoint.mobile}) {
    display: none;
  }
`,d=t.a=l.forwardRef((e,t)=>{let{className:r,disabled:n,type:i,onClick:l}=e;return c.jsx.call(void 0,u,{className:r,ref:t,$type:i,disabled:n,variant:"secondary",onClick:l,children:"prev"===i?c.jsx.call(void 0,o.b,{height:20,width:20}):c.jsx.call(void 0,a.b,{height:20,width:20})})});d.displayName="ArrowButton",t.a=d,t.b=d},96852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(8131),a=r(70220),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),l=(n=r(16829))&&n.__esModule?n:{default:n},s=r(85893),c=l.default.div`
  display: flex;
  flex-direction: row;
`,u=l.default.div`
  position: relative;
  height: 100%;
  width: 100%;
`,d=l.default.call(void 0,c)`
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
`,f=l.default.call(void 0,c)`
  height: 100%;
  width: 100%;
  gap: ${e=>"single"===e.$variant?"0px":"16px"};
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  transform: ${({$currentPage:e,$offset:t,$variant:r})=>"single"===r?`translateX(calc(${-100*e}%))`:`translateX(calc(${-100*e}% + ${t}px))`};

  ${e=>"auto"===e.$mode?`
        @media screen and (max-width: ${e.theme.breakpoint.mobile}) {
          transform: translateX(0);
        }
      `:""}
`,h=l.default.div``,p=l.default.call(void 0,c)`
  gap: ${e=>"single"===e.$variant?"0px":"16px"};
`,m=l.default.call(void 0,a.b)`
  z-index: 10;
  position: absolute;
  border: none;
  top: calc(50% - ${e=>e.theme.measurements.spacing(8)});
  left: ${e=>"prev"===e.type?`-${e.theme.measurements.spacing(5)}`:"initial"};
  right: ${e=>"next"===e.type?`-${e.theme.measurements.spacing(5)}`:"initial"};
`,v=t.a=o.forwardRef((e,t)=>{var r;let n,a,[l,c]=o.useState(0),v=o.useRef(null),g=o.useRef(null),b=o.useRef(null),{width:y}=i.a.call(void 0),{className:w,children:x,itemsPerSlide:j=1,mode:_="auto",controls:$,onChange:k}=e,C=1===j?"single":"multiple",O=!!(null!=$&&$.loop),M=!!(null!=$&&$.autoplay),E=!!(null!=$&&$.showArrows);o.useEffect(()=>{c(0),g.current&&g.current.scrollTo({top:0,left:0,behavior:"smooth"})},[y]);let L=o.useMemo(()=>o.Children.toArray(x).length,[x]),N=o.useMemo(()=>Math.ceil(L/j)-1,[L,j]),P=o.useCallback(()=>{c(e=>{let t=e-1;return t<0?O?N:e:t})},[O,N]),S=o.useCallback(()=>{c(e=>{let t=e+1;return t>N?O?0:e:t})},[O,N]);o.useEffect(()=>{let e;return M&&(e=setInterval(()=>{S()},2e3)),()=>{clearInterval(e)}},[M,S]);let{slideList:z,slideItemCount:A}=o.useMemo(()=>{let e=[];return{slideList:o.Children.toArray(x).reduce((t,r,n)=>{let i=s.jsx.call(void 0,h,{ref:b,children:r},`each_slide_item_${n}`);return n%j==0?(t.push([i]),e.push(1)):(t[t.length-1].push(i),e[e.length-1]+=1),t},[]),slideItemCount:e}},[x,L,j]),F=O||l>0,B=O||l<N;o.useImperativeHandle(t,()=>({onNext:()=>{S()},setSlide:e=>{c(e)},onPrev:()=>{P()}})),o.useEffect(()=>{k&&k({currenSlide:l,canMoveToPrev:F,canMoveToNext:B})},[l,F,B]);let V=(n=(null==(r=b.current)?void 0:r.clientWidth)||0,a=A[l]===j,"single"===C?0:a?0===l?0:-(16*l):a||0!==l?(j-A[l])*n+(j-A[l]-1)*16+-((l-1)*16):0);return s.jsxs.call(void 0,u,{className:w,ref:v,children:[E&&F&&s.jsx.call(void 0,m,{type:"prev",onClick:P}),s.jsx.call(void 0,d,{$mode:_,ref:g,children:s.jsx.call(void 0,f,{className:"aquilla-carousel-wrapper",$mode:_,$currentPage:l,$offset:V,$variant:C,children:z.map((e,t)=>s.jsx.call(void 0,p,{$variant:C,children:e},`each_slide_${t}`))})}),E&&B&&s.jsx.call(void 0,m,{type:"next",onClick:S})]})});v.displayName="Carousel",t.a=v,t.b=v},36848:function(){},60922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(44759),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),a=r(85893),o=i.forwardRef((e,t)=>{let{className:r,color:i,height:o=24,width:l=24}=e;return a.jsxs.call(void 0,n.b,{className:r,ref:t,width:l,height:o,color:i,viewBox:"0 0 24 24",children:[a.jsx.call(void 0,"path",{d:"M11.9997 9.35309L12.0007 13.3548",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx.call(void 0,"path",{d:"M9.99902 11.3544L14.0007 11.3534",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx.call(void 0,"path",{d:"M9.50879 18.0025V18.5147C9.50879 19.8894 10.6232 21.0038 11.9978 21.0038H11.9998C12.6602 21.004 13.2937 20.7419 13.7608 20.2751C14.228 19.8084 14.4906 19.1751 14.4909 18.5147V18.0025",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9494 18.0025C19.0837 18.0025 20.0032 17.083 20.0032 15.9487V15.9487C20.0028 15.3725 19.774 14.8199 19.367 14.412L18.0024 13.0485V8.99878C18.0024 5.68369 15.315 2.99628 11.9999 2.99628V2.99628C8.68483 2.99628 5.99742 5.68369 5.99742 8.99878V13.0485L4.63285 14.412C4.22583 14.8199 3.99704 15.3725 3.99658 15.9487V15.9487C3.99658 16.4934 4.21297 17.0158 4.59814 17.401C4.98331 17.7861 5.50572 18.0025 6.05044 18.0025H17.9494Z",stroke:"currentcolor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})});o.displayName="Notify",t.a=o,t.b=o},87649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=r(16829))&&n.__esModule?n:{default:n},a=r(67294),o=r(85893),l=i.default.div`
  position: relative;
  height: ${e=>e.theme.measurements.spacing(2)};
`,s=i.default.div`
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  height: ${e=>e.theme.measurements.spacing(2)};
  border-radius: ${e=>e.theme.measurements.shape(7.5)};
  background: ${e=>e.theme.palette.WHITE};
  opacity: 30%;
`,c=i.default.call(void 0,l)`
  height: ${e=>e.theme.measurements.spacing(2)};
  width: ${e=>e.$width};
  background: ${e=>e.theme.palette.WHITE};
  position: absolute;
  border-radius: ${e=>e.theme.measurements.shape(7.5)};
  left: 0;
  top: 0;
  z-index: 2;
`;t.a=function(e){let{progress:t}=e,r=a.useMemo.call(void 0,()=>`${t}%`,[t]);return o.jsxs.call(void 0,l,{children:[o.jsx.call(void 0,s,{}),o.jsx.call(void 0,c,{$width:r})]})}},12204:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(95527),a=r(6776),o=(n=r(16829))&&n.__esModule?n:{default:n},l=r(70917),s=r(85893),c=e=>l.keyframes`
  50% {
    box-shadow: 0 0 0 ${e} rgba(235, 87, 87, 0.125);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(235, 87, 87, 0);
  }
`,u=o.default.call(void 0,i.a)`
  border-radius: 50%;
  padding: ${e=>e.theme.measurements.spacing(7)};
  box-shadow: 0 0 0 0 rgba(235, 87, 87, 0.5);
  animation: ${e=>c(e.theme.measurements.spacing(4))}
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
`;t.a=function(){return s.jsx.call(void 0,u,{variant:"danger",size:"large",children:s.jsx.call(void 0,a.b,{height:12,width:12})})}},7294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(95527),a=r(6776),o=r(42310),l=r(67294),s=(n=r(16829))&&n.__esModule?n:{default:n},c=r(85893),u=s.default.call(void 0,i.a)`
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
`;t.a=function({topicColor:e,variant:t="fill"}){let r=o.b.call(void 0).VIOLET,n=l.useMemo.call(void 0,()=>e||r,[e,t]);return c.jsx.call(void 0,u,{size:"large",$buttonColor:n,children:c.jsx.call(void 0,a.b,{height:12,width:12})})}},31355:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7294),a=r(12204),o=r(49588),l=r(87649),s=r(95527),c=r(97269),u=r(4784),d=r(74623),f=r(72407),h=r(66536),p=r(60922),m=r(42310),v=n(r(16829)),g=r(67294),b=n(g),y=r(85893),w=v.default.a`
  display: flex;
  flex-flow: column;
  cursor: pointer;
  width: ${e=>e.theme.measurements.spacing(136)};
  max-width: ${e=>e.theme.measurements.spacing(136)};
`,x=v.default.div`
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
`,_=v.default.div`
  display: flex;
  align-items: flex-end;
`,$=v.default.div`
  display: flex;
  gap: ${e=>e.theme.measurements.spacing(4)};
  justify-content: flex-start;
  flex: 1;
`,k=v.default.call(void 0,u.a)`
  text-transform: uppercase;
  padding: ${e=>e.theme.measurements.spacing(2)}
    ${e=>e.theme.measurements.spacing(3)};
`,C=v.default.call(void 0,c.a)`
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
`,O=v.default.call(void 0,s.a)`
  border: none;
  border-radius: ${e=>e.theme.measurements.spacing(16)};
  padding: ${e=>e.theme.measurements.spacing(4)};
  min-width: ${e=>e.theme.measurements.spacing(16)};
  min-height: ${e=>e.theme.measurements.spacing(16)};
`,M=v.default.call(void 0,u.a)`
  border: none;
  display: flex;
  gap: ${e=>e.theme.measurements.spacing(2)};
  font-weight: 600;
`,E=v.default.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  &.align-item-left {
    justify-content: flex-start;
  }
`,L=v.default.div`
  display: flex;
  flex-flow: column;
  margin-top: ${e=>e.theme.measurements.spacing(6)};
  gap: ${e=>e.theme.measurements.spacing(3)};
`,N=v.default.call(void 0,d.a)`
  line-height: ${e=>e.theme.measurements.spacing(12)};
`,P=v.default.div`
  display: flex;
  flex-direction: row;
  gap: ${e=>e.theme.measurements.spacing(4)};
  align-items: center;
`,S=v.default.call(void 0,d.a)`
  color: ${e=>e.$topicColor||e.theme.palette.VIOLET};
  font-size: ${e=>e.theme.measurements.spacing(6)};
  font-weight: 700;
  line-height: ${e=>e.theme.measurements.spacing(6)};
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,z=v.default.div`
  font-size: ${e=>e.theme.measurements.spacing(7)};
  line-height: ${e=>e.theme.measurements.spacing(10)};
  color: ${e=>e.theme.palette.SECONDARY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,A=v.default.call(void 0,z)`
  a {
    color: ${e=>e.theme.palette.SECONDARY};
  }
`,F=v.default.call(void 0,z)``,B=v.default.call(void 0,u.a)`
  white-space: nowrap;
`,V=b.default.forwardRef((e,t)=>{let{title:r,langLabel:n="EN",variant:s,showPlayButton:c=!0,showNotifyButton:u=!1,viewCount:d=0,progress:v=0,topicName:b,topicColor:z,educatorName:V,detailsLine:R,ariaLabel:I,dataTestId:D,className:T,onClick:W,href:H,newTab:q,onNotify:Z,thumbnail:U,educatorLink:X="",as:Y="a",notified:K=!1}=e,G=m.b.call(void 0),J=g.useMemo.call(void 0,()=>"Continue Watching"===s&&v,[s,v]),Q=e=>{Z&&(e.preventDefault(),Z(e))},ee=e=>{Z&&(e.preventDefault(),Z(e))},et=e=>{W&&(e.preventDefault(),W(e))},er=e=>{e.stopPropagation()};return y.jsxs.call(void 0,w,{as:Y,ref:t,className:`${T||""} aquilla-classcard classcard`,onClick:et,href:H,"aria-label":I,"data-testid":D,title:r,rel:"noopener noreferrer",target:q?"_blank":"_self",children:[y.jsxs.call(void 0,x,{children:[U?y.jsx.call(void 0,U,{}):"",y.jsxs.call(void 0,j,{children:[y.jsxs.call(void 0,_,{children:["Upcoming"!==s?y.jsxs.call(void 0,$,{children:["Live"===s?y.jsx.call(void 0,k,{variant:"solid",color:G.RED,size:"small",children:"Live"}):"",d?y.jsxs.call(void 0,M,{size:"small",variant:"default",children:[y.jsx.call(void 0,h.b,{height:16,width:16})," ",d]}):""]}):"",y.jsxs.call(void 0,E,{className:"Upcoming"===s?"align-item-left":"",children:["Live"===s&&c?y.jsx.call(void 0,a.a,{}):"","Upcoming"===s&&u&&(K?y.jsx.call(void 0,O,{variant:"secondary",onClick:ee,children:y.jsx.call(void 0,f.b,{height:16,width:16})}):y.jsx.call(void 0,C,{variant:"secondary",size:"small",startIcon:y.jsx.call(void 0,p.b,{height:16,width:16}),label:"NOTIFY ME",onClick:Q})),("Missed"===s||"Continue Watching"===s)&&c&&y.jsx.call(void 0,o.a,{topicColor:z}),"Completed"===s&&c&&y.jsx.call(void 0,i.a,{topicColor:z})]})]}),J?y.jsx.call(void 0,l.a,{progress:v}):""]})]}),y.jsxs.call(void 0,L,{children:[y.jsxs.call(void 0,P,{children:[y.jsx.call(void 0,B,{as:"div",variant:"default",size:"small",children:n}),y.jsx.call(void 0,S,{as:"div",variant:"p2",$topicColor:z,children:b})]}),y.jsx.call(void 0,N,{variant:"h5",children:r}),V?y.jsx.call(void 0,A,{title:V,children:X?y.jsx.call(void 0,"a",{href:X||"",title:V,onClick:er,children:V}):V}):"",y.jsx.call(void 0,F,{title:R,children:R})]})]})}),R=t.a=V;t.a=R},72407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(44759),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),a=r(85893),o=i.forwardRef((e,t)=>{let{className:r,color:i="#3C4852",height:o=24,width:l=24}=e;return a.jsxs.call(void 0,n.b,{className:r,ref:t,width:l,height:o,color:i,viewBox:"0 0 16 16",children:[a.jsx.call(void 0,"path",{d:"M6.33911 12.0017V12.3432C6.33911 13.2596 7.08203 14.0025 7.99847 14.0025H7.9998C8.44007 14.0027 8.86237 13.828 9.17381 13.5168C9.48525 13.2056 9.66032 12.7835 9.66049 12.3432V12.0017",stroke:i,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx.call(void 0,"path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9662 12.0017C12.7224 12.0017 13.3354 11.3887 13.3354 10.6325V10.6325C13.3351 10.2483 13.1826 9.87998 12.9112 9.60806L12.0015 8.69902V5.99923C12.0015 3.78917 10.2099 1.99756 7.99986 1.99756V1.99756C5.7898 1.99756 3.9982 3.78917 3.9982 5.99923V8.69902L3.08848 9.60806C2.81714 9.87998 2.66461 10.2483 2.66431 10.6325V10.6325C2.66431 10.9956 2.80857 11.3439 3.06535 11.6007C3.32213 11.8575 3.6704 12.0017 4.03354 12.0017H11.9662Z",fill:i,stroke:i,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx.call(void 0,"path",{d:"M9.2228 6.80493L7.69521 8.33335L6.77734 7.4163",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]})});o.displayName="Notified",t.a=o,t.b=o},6372:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={A:"#DE4B9B",B:"#00B3B3",C:"#8873FF",D:"#2894D1",E:"#F1B334",F:"#FF986C",G:"#64BEFF",H:"#5873FF",I:"#FF6694",J:"#27B772",K:"#CF866F",L:"#FF932F",M:"#DE4B9B",N:"#00B3B3",O:"#8873FF",P:"#2894D1",Q:"#F1B334",R:"#FF986C",S:"#64BEFF",T:"#5873FF",U:"#FF6694",V:"#27B772",W:"#CF866F",X:"#FF932F",Y:"#DE4B9B",Z:"#00B3B3"},n=Object.keys(r).reduce((e,t)=>(e[t]=r[t],e[t.toLowerCase()]=r[t],e),{}),i=t.a=n;t.a=i},85619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(44759),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294)),a=r(85893),o=i.forwardRef((e,t)=>{let{className:r,color:i,height:o=24,width:l=24}=e;return a.jsx.call(void 0,n.b,{className:r,ref:t,color:i,width:l,height:o,viewBox:"0 0 24 24",children:a.jsx.call(void 0,"path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7204 6.27748C15.0932 6.64745 15.0932 7.24729 14.7204 7.61726L10.3045 12L14.7204 16.3827C15.0932 16.7527 15.0932 17.3526 14.7204 17.7225C14.3476 18.0925 13.7433 18.0925 13.3705 17.7225L8.27958 12.6699C7.90681 12.2999 7.90681 11.7001 8.27958 11.3301L13.3705 6.27748C13.7433 5.90751 14.3476 5.90751 14.7204 6.27748Z",fill:"currentcolor"})})});o.displayName="LeftChevron",t.a=o,t.b=o},49588:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=r(95527),a=r(6776),o=r(42310),l=r(67294),s=(n=r(16829))&&n.__esModule?n:{default:n},c=r(85893),u=s.default.call(void 0,i.a)`
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
`;t.a=function({topicColor:e}){let t=o.b.call(void 0).VIOLET,r=l.useMemo.call(void 0,()=>e||t,[e]);return c.jsx.call(void 0,u,{size:"large",$buttonColor:r,children:c.jsx.call(void 0,a.b,{height:12,width:12})})}},29751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=r(67294))&&n.__esModule?n:{default:n},a=e=>{let t=e=>"undefined"!=typeof window&&window.matchMedia(e).matches,[r,n]=i.default.useState(t(e));function a(){n(t(e))}return i.default.useEffect(()=>{let t=window.matchMedia(e);return a(),t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}},[e]),r},o=t.a=a;t.a=o},47239:function(e,t,r){"use strict";var n=r(3792);r(36848),r(46914),r(96852),r(8131),r(70220),r(95527),r(50117),r(97269),r(93711),r(55429),r(65923),r(74623),r(39079),r(85619),r(44759),r(91551),r(42310),r(29751),r(89786),r(37186),t.VT=n.a,t.ZP=n.b},22066:function(e,t,r){"use strict";var n=r(31355);r(7294),r(12204),r(49588),r(87649),r(95527),r(50117),r(97269),r(93711),r(55429),r(94271),r(4784),r(65923),r(74623),r(72407),r(66536),r(60922),r(6776),r(44759),r(42310),r(47076),r(37186);var i=n.a;t.Z=i},57402:function(e,t,r){"use strict";var n=r(6372);r(37186);var i=e=>{let t=e.charAt(0);return n.a[t]},a=t.Z=i;t.Z=a},88668:function(e,t,r){var n=r(83369),i=r(90619),a=r(72385);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=i,o.prototype.has=a,e.exports=o},82908:function(e){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},89881:function(e,t,r){var n=r(47816),i=r(99291)(n);e.exports=i},47816:function(e,t,r){var n=r(28483),i=r(3674);e.exports=function(e,t){return e&&n(e,t,i)}},90939:function(e,t,r){var n=r(2492),i=r(37005);e.exports=function e(t,r,a,o,l){return t===r||(null!=t&&null!=r&&(i(t)||i(r))?n(t,r,a,o,e,l):t!=t&&r!=r)}},2492:function(e,t,r){var n=r(46384),i=r(67114),a=r(18351),o=r(16096),l=r(64160),s=r(1469),c=r(44144),u=r(36719),d="[object Arguments]",f="[object Array]",h="[object Object]",p=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,m,v,g){var b=s(e),y=s(t),w=b?f:l(e),x=y?f:l(t);w=w==d?h:w,x=x==d?h:x;var j=w==h,_=x==h,$=w==x;if($&&c(e)){if(!c(t))return!1;b=!0,j=!1}if($&&!j)return g||(g=new n),b||u(e)?i(e,t,r,m,v,g):a(e,t,w,r,m,v,g);if(!(1&r)){var k=j&&p.call(e,"__wrapped__"),C=_&&p.call(t,"__wrapped__");if(k||C){var O=k?e.value():e,M=C?t.value():t;return g||(g=new n),v(O,M,r,m,g)}}return!!$&&(g||(g=new n),o(e,t,r,m,v,g))}},74757:function(e){e.exports=function(e,t){return e.has(t)}},99291:function(e,t,r){var n=r(98612);e.exports=function(e,t){return function(r,i){if(null==r)return r;if(!n(r))return e(r,i);for(var a=r.length,o=t?a:-1,l=Object(r);(t?o--:++o<a)&&!1!==i(l[o],o,l););return r}}},67114:function(e,t,r){var n=r(88668),i=r(82908),a=r(74757);e.exports=function(e,t,r,o,l,s){var c=1&r,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var f=s.get(e),h=s.get(t);if(f&&h)return f==t&&h==e;var p=-1,m=!0,v=2&r?new n:void 0;for(s.set(e,t),s.set(t,e);++p<u;){var g=e[p],b=t[p];if(o)var y=c?o(b,g,p,t,e,s):o(g,b,p,e,t,s);if(void 0!==y){if(y)continue;m=!1;break}if(v){if(!i(t,function(e,t){if(!a(v,t)&&(g===e||l(g,e,r,o,s)))return v.push(t)})){m=!1;break}}else if(!(g===b||l(g,b,r,o,s))){m=!1;break}}return s.delete(e),s.delete(t),m}},18351:function(e,t,r){var n=r(62705),i=r(11149),a=r(77813),o=r(67114),l=r(68776),s=r(21814),c=n?n.prototype:void 0,u=c?c.valueOf:void 0;e.exports=function(e,t,r,n,c,d,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!d(new i(e),new i(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var h=l;case"[object Set]":var p=1&n;if(h||(h=s),e.size!=t.size&&!p)break;var m=f.get(e);if(m)return m==t;n|=2,f.set(e,t);var v=o(h(e),h(t),n,c,d,f);return f.delete(e),v;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},16096:function(e,t,r){var n=r(58234),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,o,l){var s=1&r,c=n(e),u=c.length;if(u!=n(t).length&&!s)return!1;for(var d=u;d--;){var f=c[d];if(!(s?f in t:i.call(t,f)))return!1}var h=l.get(e),p=l.get(t);if(h&&p)return h==t&&p==e;var m=!0;l.set(e,t),l.set(t,e);for(var v=s;++d<u;){var g=e[f=c[d]],b=t[f];if(a)var y=s?a(b,g,f,t,e,l):a(g,b,f,e,t,l);if(!(void 0===y?g===b||o(g,b,r,a,l):y)){m=!1;break}v||(v="constructor"==f)}if(m&&!v){var w=e.constructor,x=t.constructor;w!=x&&"constructor"in e&&"constructor"in t&&!("function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x)&&(m=!1)}return l.delete(e),l.delete(t),m}},68776:function(e){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}},90619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},72385:function(e){e.exports=function(e){return this.__data__.has(e)}},21814:function(e){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},41609:function(e,t,r){var n=r(280),i=r(64160),a=r(35694),o=r(1469),l=r(98612),s=r(44144),c=r(25726),u=r(36719),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||a(e)))return!e.length;var t=i(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!n(e).length;for(var r in e)if(d.call(e,r))return!1;return!0}},82677:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e){return!!(e&&"function"==typeof e.hasOwnProperty&&(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function s(e,t,r){return Object.keys(e).reduce(function(t,n){var i=""+n;return t.has(i)?t.set(i,r(t.get(i),e[i])):t},t)}r.d(t,{Fv:function(){return w},fK:function(){return y}});var c=function(){function e(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),!e||"string"!=typeof e)throw Error("Expected a string key for Entity, but found "+e+".");var n=r,i=n.idAttribute,o=void 0===i?"id":i,s=n.mergeStrategy,c=void 0===s?function(e,t){return a({},e,t)}:s,u=n.processStrategy,d=void 0===u?function(e){return a({},e)}:u,f=n.fallbackStrategy;this._key=e,this._getId="function"==typeof o?o:function(e){return l(e)?e.get(o):e[o]},this._idAttribute=o,this._mergeStrategy=c,this._processStrategy=d,this._fallbackStrategy=void 0===f?function(e,t){}:f,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return a({},t,((n={})[r]=i,n))},this.schema||{})},t.getId=function(e,t,r){return this._getId(e,t,r)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.fallback=function(e,t){return this._fallbackStrategy(e,t)},t.normalize=function(e,t,r,n,i,a){var o=this,l=this.getId(e,t,r),s=this.key;if(s in a||(a[s]={}),l in a[s]||(a[s][l]=[]),a[s][l].some(function(t){return t===e}))return l;a[s][l].push(e);var c=this._processStrategy(e,t,r);return Object.keys(this.schema).forEach(function(t){if(c.hasOwnProperty(t)&&"object"==typeof c[t]){var r=o.schema[t],l="function"==typeof r?r(e):r;c[t]=n(c[t],c,t,l,i,a)}}),i(this,c,e,t,r),l},t.denormalize=function(e,t){var r=this;return l(e)?s(this.schema,e,t):(Object.keys(this.schema).forEach(function(n){if(e.hasOwnProperty(n)){var i=r.schema[n];e[n]=t(e[n],i)}}),e)},i(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),u=function(){function e(e,t){t&&(this._schemaAttribute="string"==typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,r){return!this.isSingleSchema&&this._schemaAttribute(e,t,r)},t.inferSchema=function(e,t,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(e,t,r);return this.schema[n]},t.normalizeValue=function(e,t,r,n,i,a){var o=this.inferSchema(e,t,r);if(!o)return e;var l=n(e,t,r,o,i,a);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,r)}},t.denormalizeValue=function(e,t){var r=l(e)?e.get("schema"):e.schema;if(!this.isSingleSchema&&!r)return e;var n=this.isSingleSchema?void 0:l(e)?e.get("id"):e.id,i=this.isSingleSchema?this.schema:this.schema[r];return t(n||e,i)},i(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),d=function(e){function t(t,r){if(!r)throw Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,r)||this}o(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,a){return this.normalizeValue(e,t,r,n,i,a)},r.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(u),f=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){var l=this;return Object.keys(e).reduce(function(t,r,s){var c,u=e[r];return null!=u?a({},t,((c={})[r]=l.normalizeValue(u,e,r,n,i,o),c)):t},{})},r.denormalize=function(e,t){var r=this;return Object.keys(e).reduce(function(n,i){var o,l=e[i];return a({},n,((o={})[i]=r.denormalizeValue(l,t),o))},{})},t}(u),h=function(e){if(Array.isArray(e)&&e.length>1)throw Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},p=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},m=function(e,t,r,n,i,a,o){return e=h(e),p(t).map(function(t,l){return i(t,r,n,e,a,o)})},v=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,a){var o=this;return p(e).map(function(e,l){return o.normalizeValue(e,t,r,n,i,a)}).filter(function(e){return null!=e})},r.denormalize=function(e,t){var r=this;return e&&e.map?e.map(function(e){return r.denormalizeValue(e,t)}):e},t}(u),g=function(e,t,r,n,i,o,l){var s=a({},t);return Object.keys(e).forEach(function(r){var n=e[r],a="function"==typeof n?n(t):n,c=i(t[r],t,r,a,o,l);null==c?delete s[r]:s[r]=c}),s},b=function(e,t,r){if(l(t))return s(e,t,r);var n=a({},t);return Object.keys(e).forEach(function(t){null!=n[t]&&(n[t]=r(n[t],e[t]))}),n},y={Array:v,Entity:c,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return a({},t,((n={})[r]=i,n))},this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return g.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return b.apply(void 0,[this.schema].concat(t))},e}(),Union:d,Values:f},w=function(e,t){if(!e||"object"!=typeof e)throw Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===e?"null":typeof e)+'".');var r,n={},i=function e(t,r,n,i,a,o){return"object"==typeof t&&t?"object"!=typeof i||i.normalize&&"function"==typeof i.normalize?i.normalize(t,r,n,e,a,o):(Array.isArray(i)?m:g)(i,t,r,n,e,a,o):t}(e,e,null,t,(r=n,function(e,t,n,i,a){var o=e.key,l=e.getId(n,i,a);o in r||(r[o]={});var s=r[o][l];s?r[o][l]=e.merge(s,t):r[o][l]=t}),{});return{entities:n,result:i}}}}]);
//# sourceMappingURL=77493-268fe51b3666ea44.js.map