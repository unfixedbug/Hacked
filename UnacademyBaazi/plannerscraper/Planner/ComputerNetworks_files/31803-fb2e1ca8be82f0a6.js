"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31803],{16330:function(t,e,n){n.d(e,{wO:function(){return o},yT:function(){return i}});var r=n(51513);let i=t=>"v2/batch/".concat(t,"/demo-class/"),o=t=>"v1/uplus/".concat(t,"/demo-class/"),u=t=>{let{data:{data:e}={},...n}=(0,r.Z)(t);return{key:t,demoClasses:e,...n,isError:n.isError||!!(null==e?void 0:e.errorCode)}};e.ZP=u},99283:function(t,e,n){n.d(e,{I:function(){return a}});var r=n(51513),i=n(43221),o=n(67294),u=n(87976);let a="E5222",l=t=>{let e=(0,u.Z)(i.M7),{data:n,isError:l,...c}=(0,r.Z)(t&&e?"v1/subscriptions/pay_in_parts_subscription_details?goal_uid=".concat(t):null),s=(0,o.useMemo)(()=>n||((null==l?void 0:l.error_code)===a?l:null),[n,l]);return{partPaymentStatus:s,...c}};e.Z=l},73595:function(t,e,n){var r=n(35944),i=n(4298),o=n.n(i);let u=()=>(0,r.tZ)(o(),{id:"appsflyer-onelink",src:"".concat("https://static.uacdn.net/production/_next","/static/onelink-smart-script-V2.js"),type:"text/javascript",strategy:"beforeInteractive"});e.Z=u},98791:function(t,e,n){n.d(e,{Z:function(){return D}});var r=n(35944),i=n(16829),o=n(46829),u=n(67294),a=n(16330),l=n(35193),c=n(20987),s=n(22066),d=n(89048),f=n(82353),p=n(67366),m=n(59937),v=n(50629),E=n(81981),h=n(54570);let T=(0,i.default)("div",{target:"e13s7t9b0",label:"OuterContainer"})("position:relative;"),_=(0,i.default)("div",{target:"e13s7t9b1",label:"Container"})("overflow:hidden;position:relative;",o.cy.uptoTablet,"{overflow:scroll;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;}"),I=(0,i.default)("div",{target:"e13s7t9b2",label:"CarouselWrapper"})("display:flex;gap:16px;transition:transform linear 0.3s;transform:translateX(0px);"),g=(0,i.default)("div",{target:"e13s7t9b3",label:"CarouselItem"})("flex-shrink:0;"),S=(0,i.default)("div",{target:"e13s7t9b4",label:"RightBlur"})("position:absolute;width:17%;height:100%;right:0px;bottom:-0.2px;background:linear-gradient(\n    270deg,#fcfcfc 0.39%,rgba(252,252,252,0) 100%\n  );z-index:2;",o.cy.uptoTablet,"{display:none;}"),C=(0,i.default)(h.b4,{target:"e13s7t9b5",label:"StyledArrowButton"})("z-index:2;position:absolute;top:50%;left:",t=>"prev"===t.type?"0":"initial",";right:",t=>"next"===t.type?"0":"initial",";border:1px solid var(--color-i-divider);transform:",t=>"next"===t.type?"translate(50%, -50%)":"translate(-50%, -50%)",";",o.cy.uptoTablet,"{display:none;}"),A=t=>{let{children:e}=t,n=(0,u.useRef)(null),i=(0,u.useRef)(null),o=(0,u.useRef)(0),a=(0,u.useRef)(0),l=(0,u.useRef)(0),c=(0,u.useRef)(null),s=(0,u.useRef)(2),[d,f]=(0,u.useState)(!0),[p,m]=(0,u.useState)(!1),v=t=>t?parseInt(t.match(/translateX\(-*\d+px\)/)[0].match(/-*\d+/),10):0,E=()=>{m(0===a.current),f(0===l.current)},h=()=>{let t=v(n.current.style.transform);a.current<=0||(a.current<s.current*o.current?(n.current.style.transform="translateX(".concat(t-Math.ceil(a.current/o.current)*(o.current+16),"px)"),a.current=0,f(!0)):(n.current.style.transform="translateX(".concat(t-s.current*(o.current+16),"px)"),a.current-=s.current*(o.current+16)),l.current=Math.abs(v(n.current.style.transform)),E())},A=()=>{let t=v(n.current.style.transform);l.current<=0||(Math.abs(l.current)<s.current*o.current?(n.current.style.transform="translateX(0px)",l.current=0):(n.current.style.transform="translateX(".concat(t+s.current*(o.current+16),"px)"),l.current-=s.current*(o.current+16)),a.current=n.current.scrollWidth-c.current.offsetWidth-l.current,E())};return(0,u.useEffect)(()=>{o.current=i.current.firstChild.offsetWidth,a.current=n.current.scrollWidth-c.current.offsetWidth,s.current=Math.floor(c.current.offsetWidth/o.current),0!==a.current&&p&&m(!1),E()},[]),(0,r.BX)(T,{children:[(0,r.BX)(_,{ref:c,children:[(0,r.tZ)(I,{ref:n,children:e.map((t,e)=>(0,r.tZ)(g,{ref:0===e?i:null,children:t},e))}),(0,r.tZ)(S,{})]}),!d&&(0,r.tZ)(C,{type:"prev",disabled:d,onClick:A}),!p&&(0,r.tZ)(C,{type:"next",disabled:p,onClick:h})]})},b=(0,i.default)("div",{target:"e12hgd7f0",label:"Wrapper"})("display:grid;grid-template-columns:repeat(24,1fr);grid-column-gap:",o.t8.SPACING_4B,";grid-column:span 24;position:relative;margin-bottom:",o.t8.SPACING_10B,";",o.cy.uptoMobile,"{display:block;grid-column:span 10;grid-template-columns:repeat(10,1fr);margin-bottom:",o.t8.SPACING_6B,";}"),N=(0,i.default)("div",{target:"e12hgd7f1",label:"LeftWrapper"})("grid-column:2/8;position:sticky;top:235px;z-index:1;",o.cy.uptoMobile,"{position:relative;top:0;padding:0;grid-column:span 10;margin-bottom:",o.t8.SPACING_6B,";}"),R=(0,i.default)("div",{target:"e12hgd7f2",label:"RightWrapper"})("grid-column:9/25;grid-template-columns:repeat(2,2fr);grid-column-gap:",o.t8.SPACING_4B,";grid-row-gap:",o.t8.SPACING_4B,";margin-bottom:",o.t8.SPACING_2B,";",o.cy.uptoMobile,"{grid-column:span 10;grid-template-columns:repeat(1,1fr);& > a{grid-column:span 10;margin-bottom:0;}}"),y=(0,i.default)(f.ZP,{target:"e12hgd7f3",label:"StyledTypo"})("font-weight:bold;margin-bottom:",o.t8.SPACING_2B,";",o.cy.uptoMobile,"{margin-bottom:2px;}"),L=t=>{let{apiKey:e,goalUID:n}=t,{demoClasses:i=[],isError:o}=(0,a.ZP)(e),u=(0,v.TN)(E.d6),h=(0,p.Z)({goalUID:n}),T=()=>{m.EX.track("Demo Classes Card Clicked",{...h,last_primary_source:u,last_primary_source_section:"Demo Classes Section"})};return o||0===i.length?null:(0,r.BX)(b,{children:[(0,r.BX)(N,{children:[(0,r.tZ)(y,{variant:"h5",children:"Demo classes"}),(0,r.BX)(f.ZP,{variant:"p2",color:"var(--color-text-secondary)",children:[" ","Watch free classes by the educators of this batch"]})]}),(0,r.tZ)(R,{children:(0,r.tZ)(A,{children:i.map(t=>{var e;if(!t.nextSession)return null;let n=(0,c.Rg)({...t,nextTrack:{...t.nextSession,...null===(e=t.nextSession)||void 0===e?void 0:e.properties}});return(0,r.tZ)(d.Z,{passHref:!0,href:n,children:(0,r.tZ)(s.Z,{title:"Special class title",topicColor:"#8873FF",...(0,l.q6)({classInfo:t,hideDetailsLine:!1,onClick:T})})},t.uid)})})})]})};var D=L},35193:function(t,e,n){n.d(e,{MB:function(){return Z},Ns:function(){return R},Sg:function(){return O},bB:function(){return M},g9:function(){return P},q6:function(){return D},uQ:function(){return U}});var r=n(35944),i=n(20987),o=n(57402),u=n(71836),a=n(32057),l=n(75030),c=n(7484),s=n(17209),d=n(97985),f=n(66390),p=n(16829),m=n(57444),v=n(46829),E=n(8412),h=n(11619),T=n(32629);let _=(0,p.default)("div",{target:"emembii0",label:"ClassThumbnailWrapper"})("position:relative;width:272px;"),I=(0,p.default)("div",{target:"emembii1",label:"ClassThumbnail"})("position:relative;width:272px;"),g=(0,p.default)("div",{target:"emembii2",label:"PreviewContainer"})(v.cy.uptoMobile,"{position:relative;}"),S=(0,p.default)("div",{target:"emembii3",label:"PreviewWrapper"})("position:relative;display:inline-flex;cursor:pointer;"),C=(0,p.default)(d.Z,{target:"emembii4",label:"PlayIconButton"})("border-radius:50%;position:absolute;bottom:",v.t8.SPACING_4B,";right:",v.t8.SPACING_4B,";border:none;width:56px;height:56px;padding:",t=>t.theme.measurements.spacing(7),";background:",t=>{let{$buttonColor:e,$isLive:n}=t;return n?"var(--color-i-red)":"".concat(e,"33")},";transition:0.5s;&:hover,&:active,&:focus{background:",t=>{let{$buttonColor:e,$isLive:n}=t;return n?"var(--color-i-red)":"".concat(e,"33")},";transform:scale(1.1);}",v.cy.uptoMobile,"{width:40px;height:40px;}svg{color:",t=>{let{$buttonColor:e,$isLive:n}=t;return n?"var(--color-i-white)":"".concat(e)},";}"),A=(0,p.default)("div",{target:"emembii5",label:"ImageWrapper"})("width:464px;",v.cy.uptoTablet,"{width:400px;}",v.cy.uptoMobile,"{width:calc(100vw - 32px);}img{aspect-ratio:16/9;height:unset;",v.cy.uptoMobile,"{width:100%;}}"),b=(0,p.default)(s.Z,{target:"emembii6",label:"EduImage"})("object-fit:cover;border-radius:8px;"),N=(0,p.default)(E.ZP,{target:"emembii7",label:"LiveClassTag"})("text-transform:uppercase;position:absolute;left:",v.t8.SPACING_4B,";bottom:",v.t8.SPACING_4B,";padding:",t=>t.theme.measurements.spacing(2)," ",t=>t.theme.measurements.spacing(3),";");function R(t,e,n,i){return function(){return t?(0,r.tZ)(_,{children:(0,r.tZ)(s.Z,{src:t,alt:"",height:i||156,width:n||272})}):(0,r.tZ)(f.Z,{variant:"content-thumbnail-with-person",color:e,width:n||272,height:i||156})}}let y={[u.A_.FUTURE]:"Upcoming",[u.A_.LIVE]:"Live",[u.A_.PAST]:"Completed",[u.A_.DORMANT]:"Dormont"},L=t=>{let{startsAt:e,endsAt:n}=t;if(!e)return null;let r=new Date(e),i=n?new Date(n):null,o=(0,m.$s)(r),u=(0,m.mU)(60*(0,m.FU)(r,i));return""+("".concat(o," • ")+u)};function D(t){var e,n,r,u,s,d;let{classInfo:f,hideViewCount:p=!1,hideDetailsLine:m=!0,onClick:v}=t,{author:E,name:h,topicGroups:T,languageDisplay:_,coverPhotoV1:I,nextSession:g,totalViews:S}=f,C=y[null==g?void 0:null===(e=g.properties)||void 0===e?void 0:e.state],A=p?null:S||(null==g?void 0:null===(n=g.properties)||void 0===n?void 0:n.attendance)||0,b=()=>{v&&v(f);let t={href:(0,l.bc)(f),as:(0,i.Rg)(f)};(0,c.Z)(t.href,t.as)},N={educatorName:"".concat(E.firstName," ").concat(E.lastName),educatorLink:"/@".concat(E.username),title:h,topicName:null==T?void 0:null===(r=T[0])||void 0===r?void 0:r.name,topicColor:(null==T?void 0:null===(u=T[0])||void 0===u?void 0:u.name)?(0,o.Z)((null==T?void 0:null===(s=T[0])||void 0===s?void 0:s.name[0])||""):"#8873FF",langLabel:_,...C&&{variant:C},thumbnail:R(I,(0,o.Z)((null==T?void 0:null===(d=T[0])||void 0===d?void 0:d.name[0])||"")),...A&&{viewCount:(0,a.pF)(A,1)},onClick:b,detailsLine:m?"":L(f)};return N}function O(t,e){var n,u,a,d;let{name:f,languageDisplay:p,topicGroups:v,author:E,coverPhoto:h,coverPhotoV1:_,startsAt:g,endsAt:S}=t,C=function(t,e){let n=new Date,r=(0,m.aN)(n,t),i=(0,m.aN)(n,e),o="";return r>0&&(o="Starts on ".concat((0,m.$s)(t))),0===r&&(o="Starts today"),r<0&&(o="In progress"),i<0&&(o="Ended on ".concat((0,m.$s)(e))),o}(g,S),A=()=>{e?T.Z.setItem("lpss",e):T.Z.deleteItem("lpss");let n={href:(0,l.bc)(t),as:(0,i.Rg)(t)};(0,c.Z)(n.href,n.as)},b={title:f,langLabel:p,topicName:null===(n=v[0])||void 0===n?void 0:n.name,educatorName:"".concat(E.firstName," ").concat(E.lastName),educatorLink:"/@".concat(E.username),thumbnail:(d=_||h,function(){return(0,r.tZ)(I,{children:(0,r.tZ)(s.Z,{src:d,alt:"",height:156,width:272})})}),detailsLine:C,topicColor:(null===(u=v[0])||void 0===u?void 0:u.name)?(0,o.Z)((null===(a=v[0])||void 0===a?void 0:a.name[0])||""):"#8873FF",onClick:A};return b}function U(t,e){let{name:n,totalQuestionCount:r,childrenCount:i}=t,o=(0,a.pF)(i),u=(0,a.pF)(r),l="".concat(o," concepts  • ").concat(u," questions"),c={title:n,description:l,href:"/goal/".concat(null==e?void 0:e.slug,"/").concat(null==e?void 0:e.uid,"/practice/topics/").concat(null==t?void 0:t.uid)};return c}let Z=t=>{let{url:e,color:n,handlePlayCTA:i,isLive:o,isMobile:u,className:a}=t;return(0,r.tZ)(g,{className:a,children:(0,r.BX)(S,{onClick:i,children:[o&&(0,r.tZ)(N,{variant:"solid",color:"var(--color-i-red)",size:"small",children:"Live"}),(0,r.tZ)(A,{children:(0,r.tZ)(b,{src:e,alt:"edu-image",priority:!0,height:261,width:464})}),(0,r.tZ)(C,{size:"large",$buttonColor:n,$isLive:o,children:(0,r.tZ)(h.ZP,{height:u?12:17,width:u?12:17})})]})})},P=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=Math.floor(t/3600),r=Math.floor((t-3600*n)/60),i=Math.floor(t-3600*n-60*r),o="",u=!1;return(n>0&&(o+="".concat(n),u=!0),(r>0||0===r)&&(u&&(o+="".concat(e)),o+=r>9?"".concat(r):"0".concat(r),u=!0),i>0&&(u&&(o+="".concat(e)),o+=i>9?"".concat(i):"0".concat(i)),o)?o:"".concat(t,"s")},M=(t,e,n)=>!e||t?"locked":n?"live":"missed"},20250:function(t,e,n){n.d(e,{$b:function(){return c},Cj:function(){return m},Du:function(){return u},EV:function(){return h},UA:function(){return E},UI:function(){return f},ZL:function(){return d},cX:function(){return l},eg:function(){return v},et:function(){return o},iH:function(){return p},jb:function(){return s},z1:function(){return a}});var r=n(48586),i=n(46829);let o={EVENT:"event",TIMELINE:"timeline",DAY_TITLE:"day_title",GREETING:"greeting",SUBSCRIPTION_FEEDBACK:"subscription_feedback",SUBSCRIPTION_RENEWAL:"renewal_card",FEATURE_CARD:"feature_card",FEATURE_INTRODUCTION:"feature_introduction",FEATURE_AWARENESS:"feature_card",BROWSE:"browse",SUBSCRIPTION_FEEDBACK_V2:"subscription_feedback_v2",FREE_TRIAL_CARD:"trial_subscription",SKELETON_LOADER:"skeleton_loader"},u=24,a=24,l=24,c=20,s=162,d=i.t8.SPACING_7B,f={[o.DAY_TITLE]:64,[o.TIMELINE]:12+u,[o.BROWSE]:160+l,[o.GREETING]:72+c,[o.SUBSCRIPTION_FEEDBACK]:160+l,[o.SUBSCRIPTION_RENEWAL]:160+l,[o.FEATURE_INTRODUCTION]:168+l,[o.FEATURE_AWARENESS]:160+l,[o.SUBSCRIPTION_FEEDBACK_V2]:160+l,[o.SKELETON_LOADER]:108+a,[o.FREE_TRIAL_CARD]:212+l},p={[r.pt.CLASS]:s+a,[r.pt.CLASS_WITH_PRACTICE]:222+a,[r.pt.TEST]:108+a,[r.pt.TEST_WITH_EDUCATOR]:108+a,[r.pt.QUIZ]:108+a,[r.pt.COMBAT]:108+a,[r.pt.LIVE_INTERACTION]:98+a,[r.pt.DAILY_PRACTICE_REMINDER]:84+a,[r.pt.OPENHOUSE]:80+a,[r.pt.OFFLINE_TEST]:136+a},m=16,v="plus_subscription",E="platform_subscription",h="gtp_subscription"},84239:function(t,e,n){n.d(e,{$r:function(){return _},Fj:function(){return U},G8:function(){return C},Jb:function(){return Z},Jf:function(){return S},Kd:function(){return N},LJ:function(){return d},Lr:function(){return h},MA:function(){return T},Ny:function(){return g},R1:function(){return O},Sx:function(){return f},Up:function(){return u},VL:function(){return m},Ws:function(){return c},Xg:function(){return R},Y8:function(){return b},ad:function(){return a},cq:function(){return A},gi:function(){return l},jb:function(){return y},ki:function(){return v},lz:function(){return I},nI:function(){return s},oH:function(){return P},oZ:function(){return p},pj:function(){return L},qu:function(){return D},xl:function(){return E}});var r=n(63624),i=n(57444),o=n(30351);let u=-1,a={ALL:{display_name:"All",code:0}},l={user_preference:0,available_languages:[],language_selection_available:!1},c={FULL:1,EACH_TOPIC:2,PYQ:3,TEXTBOOK:4,INCORRECT:5},s={NORMAL_PRACTICE:"1",CLASS_PRACTICE:"2",SYLLABUS_PRACTICE:"3",AUTO_DPP:"4"},d=["Mistake in the question/option choices","Mistake in solution","Technical issue","Plagiarism"],f={ALL:"all-filter"},p=[{why:r.X.DIFFICULT_QUESTION,icon:(0,o.gJ)("practice-session/thinking-face.svg")},{why:r.X.DIDNT_UNDERSTAND,icon:(0,o.gJ)("practice-session/confused.svg")},{why:r.X.HAVENT_STUDIED,icon:(0,o.gJ)("practice-session/exclamation-question.svg")}],m={POSITIVE:1,NEGATIVE:2},v={ALL:-1},E=30,h=5,T={POSITIVE:{QUALITY_OF_SOLUTIONS:496,QUALITY_OF_QUESTIONS:497,MIX_OF_QUESTIONS:498,INTERFACE:499,SYLLABUS:500},NEGATIVE:{QUALITY_OF_SOLUTIONS:501,QUALITY_OF_QUESTIONS:502,MIX_OF_QUESTIONS:503,INTERFACE:504,SYLLABUS:505}},_=[{value:10,label:"10 questions"},{value:20,label:"20 questions"},{value:30,label:"30 questions"}],I=(()=>{let t=[],{twentyFourHrFormat:e,twelveHrFormat:n}=(0,i.SA)({interval:30});return n.forEach((n,r)=>{t.push({value:e[r],label:n})}),t})(),g={PRACTICE_REMINDER:"PRACTICE_REMINDER"},S={SHOW_REMINDER_SETTING:"show_reminder_setting"},C={TOTAL_QUESTION_LIMIT_REACHED:"Total questions limit reached",CANNOT_ADD_MORE_QUESTIONS:"Cannot add more questions",NULL:""},A=5,b={SET_REMINDER_DEFAULT_DATA:"SET_REMINDER_DEFAULT_DATA"},N=5,R=7,y=10,L="09:00",D="09:00 AM",O="DPP - Set Reminder Card Viewed ",U="DPP - Set Reminder Clicked",Z=1,P=0},63624:function(t,e,n){n.d(e,{X:function(){return r}});let r={DIFFICULT_QUESTION:"Difficult Question",DIDNT_UNDERSTAND:"Didn't Understand",HAVENT_STUDIED:"Haven't studied"}},48586:function(t,e,n){n.d(e,{JL:function(){return a},ft:function(){return o},hc:function(){return u},pt:function(){return l}});var r=n(71836);let i={MISSED:1,WATCHED_OR_ATTEMPTED:2,UPCOMING:3,CANCELLED:4},o={[i.MISSED]:"missed",[i.WATCHED_OR_ATTEMPTED]:"completed",[i.UPCOMING]:"upcoming",[i.CANCELLED]:"cancelled"},u={CLASS:1,QUIZ:2,COMBAT:3,TEST:4,LIVE_INTERACTION:5,OPENHOUSE:6,DAILY_PRACTICE_REMINDER:7},a={[u.CLASS]:r.cs.CLASS,[u.QUIZ]:r.cs.QUIZ,[u.TEST]:r.cs.TEST,[u.COMBAT]:r.cs.COMBAT};u.CLASS,u.QUIZ,u.COMBAT,u.TEST,u.LIVE_INTERACTION,u.OPENHOUSE;let l={CLASS:"class",CLASS_WITH_PRACTICE:"class_with_practice",TEST:"test",TEST_WITH_EDUCATOR:"test_with_educator",QUIZ:"quiz",COMBAT:"combat",LIVE_INTERACTION:"live_interaction",DAILY_PRACTICE_REMINDER:"daily_practice_reminder",OPENHOUSE:"openhouse",OFFLINE_TEST:"offline_test"}},57207:function(t,e,n){n.d(e,{$1:function(){return C},$Q:function(){return H},A7:function(){return w},Bd:function(){return V},Dl:function(){return I},Fc:function(){return A},Fl:function(){return M},Lv:function(){return x},M7:function(){return E},Pp:function(){return D},S4:function(){return y},TD:function(){return j},Up:function(){return N},W4:function(){return tr},Yq:function(){return L},Zw:function(){return Y},_l:function(){return te},aK:function(){return P},ac:function(){return G},b8:function(){return tt},bp:function(){return R},bq:function(){return ti},c5:function(){return T},d6:function(){return _},hP:function(){return h},ie:function(){return b},jo:function(){return g},k$:function(){return Q},pe:function(){return q},qS:function(){return W},r$:function(){return S},rN:function(){return J},rS:function(){return X},rU:function(){return Z},sX:function(){return O},tY:function(){return U},vs:function(){return F},xI:function(){return B},zH:function(){return tn},ze:function(){return K}});var r,i,o,u,a,l,c,s,d,f,p,m=n(43221),v=n(61800);let E=t=>{let{auth:e}=t;return e.isLoggedIn||!1},h=t=>{let{auth:e}=t;return e.accessToken},T=t=>{var e,n;let{auth:i}=t;return null!==(r=null===(e=i.me.channels)||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:n.uid)&&void 0!==r?r:""},_=t=>{let{auth:e}=t;return e.me.searchJwtToken},I=t=>{let{auth:e}=t;return e.me.kycDetails||v.FD},g=t=>{let{auth:e}=t;return e.me},S=t=>{let{auth:e}=t;return e.fetchingUserData},C=t=>{let{auth:e}=t;return e.me.stargateJwtToken},A=t=>{let{auth:e}=t;return e.me.jwtToken},b=t=>{let{auth:e}=t;return e.me.email},N=t=>{let{auth:e}=t;return e.me.uid},R=t=>{let{auth:e}=t;return e.me.userID},y=t=>{let{auth:e}=t;return e.me.firstName||""},L=t=>g(t).lastName||"",D=t=>g(t).name,O=t=>g(t).thumbnail,U=t=>{let{auth:e}=t;return e.me.username},Z=t=>{let{auth:e}=t;return e.me.canAddSpecialClass},P=t=>{let{auth:e}=t;return e.me.canAddPlusCourse},M=t=>g(t).isEducator,w=t=>g(t).isModerator,k=t=>g(t).isVendor,F=t=>{let{auth:e}=t;return e.me.currentEpoch},B=t=>{let{auth:e}=t;return null!==(i=e.me.isModerator)&&void 0!==i&&i},x=t=>{let{auth:e}=t;return null!==(o=e.me.isQuestionEditor)&&void 0!==o&&o},W=t=>{let{auth:e}=t;return null!==(u=e.me.isExternalContentCreator)&&void 0!==u&&u},G=t=>{let{auth:e}=t;return null!==(a=e.me.isContentAuditor)&&void 0!==a&&a},X=t=>{let{auth:e}=t;return e.me.jwtToken},Q=t=>{let{auth:e}=t;return null!==(l=e.localEmail)&&void 0!==l?l:""},H=t=>{let{auth:e}=t;return null!==(c=e.localName)&&void 0!==c?c:""},V=(t,e)=>!M(t)&&((0,m.qZ)(e)||(0,m.fw)(e)||(0,m.Hr)(e)||W(t)||(0,m.ud)(e)||k(t)),q=t=>{let{auth:e}=t;return e.isSubmittingFeedback},Y=t=>{var e;let{auth:n}=t;return null!==(s=null===(e=n.me.platformUnlockStatus)||void 0===e?void 0:e.is_platform_unlocked)&&void 0!==s&&s},j=t=>{let{auth:e}=t;return e.referralStats||{}},z=t=>{var e;let{auth:n}=t;return(null==n?void 0:null===(e=n.purchasedItems)||void 0===e?void 0:e.platformSubscriptionUIDs)||v.n8},$=t=>{var e;let{auth:n}=t;return(null==n?void 0:null===(e=n.purchasedItems)||void 0===e?void 0:e.platformSubscriptionGoalUIDs)||v.n8},K=(t,e)=>!!e&&$(t).includes(e.toUpperCase()),J=t=>{var e;let{auth:n}=t;return null!==(d=null==n?void 0:null===(e=n.purchasedItems)||void 0===e?void 0:e.batchGroupSubscriptions)&&void 0!==d?d:[]},tt=t=>{var e;return null!==(f=null===(e=z(t))||void 0===e?void 0:e.length)&&void 0!==f?f:0},te=t=>{var e;let{auth:n}=t;return null!==(p=null===(e=n.otpOrEmailData)||void 0===e?void 0:e.is_registered)&&void 0!==p&&p},tn=t=>{var e;return!!(null===(e=z(t))||void 0===e?void 0:e.length)},tr=t=>{let{auth:e}=t;return e.localPhoneNumber},ti=t=>{let{auth:e}=t;return e.localSelectedCountry}},61705:function(t,e,n){n.d(e,{Gp:function(){return i},nB:function(){return r}});let r=t=>{let{others:e}=t;return e.nextPreviewMode||!1},i=t=>{let{others:e}=t;return null==e?void 0:e.isScheduleDataForDppFetched}},15854:function(t,e){let n=t=>{let e={"@context":"https://schema.org/","@type":"BreadcrumbList"};return e.itemListElement=t.filter(t=>t.name&&t.url).map((t,e)=>({"@type":"ListItem",position:e+1,name:t.name,item:t.url})),e};e.Z=n},10148:function(t,e,n){var r=n(57444),i=n(32057);let o=t=>Array.isArray(t)?t.map(t=>({"@type":"Person",name:t.name||"".concat(t.firstName," ").concat(t.lastName)})):{"@type":"Person",name:t.name};e.Z=function(t){let{thumbnail:e,topic:n,name:u,authors:a,author:l,description:c,permalink:s,forPlus:d,goal:f={},coverPhoto:p,uid:m,language:v,languages:E}=t;if(!f)return null;let h=a?a[0]:null!=l?l:{};return{"@context":"https://schema.org/","@type":"Course",image:p||e,courseCode:m,accessMode:["auditory","visual"],url:s,thumbnailUrl:p||e,provider:{"@type":"Organization",name:(null==h?void 0:h.name)||"".concat(null==h?void 0:h.firstName," ").concat(null==h?void 0:h.lastName),sameAs:"https://unacademy.com/@".concat(null==h?void 0:h.username)},about:{name:n},audience:{audienceType:["Anyone Prepearing for ".concat(f.name)],"@type":"Audience"},name:u,inLanguage:v||(0,i.nt)(E,"label",", ",", "),publisher:{"@type":"Organization",name:"Unacademy",sameAs:"https://unacademy.com/"},description:(c||"").replace(/</g,"< ").replace(/>/g," >"),"@id":s,creator:o(a||l),isAccessibleForFree:d?"http://schema.org/False":"http://schema.org/True",hasCourseInstance:[{"@type":"CourseInstance",courseMode:["Online","Distance Learning"],startDate:(0,r._3)(t.startsAt)}]}}},63331:function(t,e,n){var r=n(26013),i=n(66331),o=n(17603),u=n(46776),a=n(64444),l=n(80712),c=n(43866),s=n(1269),d=n(21102);let f=!1,p=[],m=async t=>{var e,n,m,v,E,h,T;let{error:_,action:I={type:""},dispatch:g,getState:S,rest:C={},options:A,headers:b,endpoint:N,source:R}=t;if((null==_?void 0:null===(e=_.response)||void 0===e?void 0:e.status)>=400&&(null==_?void 0:null===(n=_.response)||void 0===n?void 0:n.status)<600&&(0,d.Z)({endpoint:N,error:_,source:R,options:A,headers:b}),(null==_?void 0:null===(m=_.response)||void 0===m?void 0:m.status)===401){let{accessToken:y,refreshToken:L}=(0,s.Z)(S);if(y&&L){if(!f){"ME"!==I.type&&p.push(I),f=!0;try{let D=await (await (0,c.R$)(L)).json();if(null==D?void 0:D.error)throw Error(null==D?void 0:D.error);f=!1,g((0,r.YR)({accessToken:D.access_token,refreshToken:D.refresh_token})),await g((0,r.ct)()),p.forEach(t=>g(t))}catch(O){(0,l.Z)("",{keepSelectedGoal:!0}),(0,i.SL)(u.es),g({type:"".concat(a.CK.ME,"_FAILURE")})}finally{p=[]}}}else(0,l.Z)("",{keepSelectedGoal:!0}),(0,i.SL)(u.es),g({type:"".concat(a.CK.ME,"_FAILURE")})}if((null==_?void 0:null===(v=_.response)||void 0===v?void 0:v.status)===429&&o.P6.open({message:"Too many requests. Please try again after sometime.",type:"error"}),(null==_?void 0:null===(E=_.response)||void 0===E?void 0:E.status)>=500||_.status>=500)return g({...C,error:_,type:"".concat(I.type,"_FAILURE")});let U=await (null==_?void 0:null===(h=_.response)||void 0===h?void 0:h.json());return g({...C,error:U,type:"".concat(I.type,"_FAILURE"),statusCode:null==_?void 0:null===(T=_.response)||void 0===T?void 0:T.status})};e.Z=m},97598:function(t,e,n){var r=n(12828),i=n.n(r),o=n(83556);let u=async(t,e)=>{let n;let{headers:r,useCamelCase:u=!1,hasTextResponse:a=!1,requestType:l="GET",isFormData:c=!1,body:s=null}=e||{},d={method:l,headers:r||{},credentials:"same-origin"};if(s)try{d.body=c?s:JSON.stringify(s)}catch(f){}let p=await fetch(t,d);if((0,o.Z)(p),204===p.status)return p;if(a)n=await p.text();else try{n=await p.json(),u&&(n=i()(n,{deep:!0}))}catch(m){}return n};e.Z=u},67290:function(t,e,n){var r=n(35091),i=n(71836),o=n(57207),u=n(64292),a=n(1269);let l=(0,r.tW)(),c=t=>{let{url:e,getState:n,headersOptions:{useAuthToken:r=!0,useSearchToken:c=!1,useJWTToken:s=!1,isFormData:d=!1,useStarGateToken:f=!1},headers:p}=t,{accessToken:m,searchToken:v,JWTToken:E}=(0,a.Z)(n),h={...r&&m?{authorization:"Bearer ".concat(m)}:"",...s&&E?{authorization:"Bearer ".concat(E)}:"",...c&&v?{searchToken:"Bearer ".concat(v)}:"",...!d&&{"Content-Type":"application/json"},...p||{}};if(e.includes(l)){let T=u.ZP.isMobile({isServer:!1})?i.iw.MOBILE:i.iw.OTHER;h["X-Platform"]=T}if(f){let _=(0,o.$1)(n());h["Stargate-Token"]=_}return h};e.Z=c},1269:function(t,e,n){var r=n(58940),i=n(57207);let o=t=>{let e=r.ZP.readCookie("accessToken",t),n=r.ZP.readCookie("refreshToken",t);e||(e=r.ZP.readCookie("accessToken")),n||(n=r.ZP.readCookie("refreshToken"));let o="function"==typeof t?(0,i.d6)(t()):"",u=(0,i.rS)(t());return{accessToken:e,refreshToken:n,searchToken:o,JWTToken:u}};e.Z=o}}]);
//# sourceMappingURL=31803-fb2e1ca8be82f0a6.js.map