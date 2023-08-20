"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[721],{1613:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  & p {\n    font-size: 24px;\n    color: #0649a1;\n    font-weight: 700;\n  }\n"]))),s=t(184),c=function(n){var e=n.message;return(0,s.jsx)(i,{children:(0,s.jsx)("p",{children:e})})}},3721:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i,s,c,o,p,u,d,f,l,x=t(4165),h=t(5861),g=t(9439),m=t(2791),v=t(7689),Z=t(299),w=t(3882),y=t(3585),b=t(168),j=t(1087),E=t(5867),k=E.ZP.div(r||(r=(0,b.Z)(['\n  display: grid;\n  grid-template-columns: 40% 60%;\n  justify-items: center;\n  max-width: 1180px;\n  row-gap: 20px;\n  padding: 10px;\n  grid-template-areas:\n  "goback goback"\n  "image infoMovie"\n  "player player"\n  "addInfo addInfo"\n  "info info";\n  background-color: #e9e9e9;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  @media only screen and '," {\n    max-width: ",';\n    grid-template-columns: 1fr;\n    grid-template-areas:\n  "goback"\n  "image"\n  "infoMovie"\n  "player"\n  "addInfo"\n  "info";\n  }\n'])),y.Hb.msm,y.AV.md),_=E.ZP.img(a||(a=(0,b.Z)(["\n  grid-area: image;\n  justify-self: center;\n  width: 80%;\n  border: 1px solid #0649a1;\n  border-radius: 3px;\n"]))),S=E.ZP.div(i||(i=(0,b.Z)(["\n  display: grid;\n  grid-template-rows: 15% 15% 15% 1fr 15%;\n  grid-area: infoMovie;\n  padding-right: 15px;\n\n  & h2 {\n    color: #0649a1;\n    font-size: 24px;\n  }\n\n  & span {\n    font-size: 20px;\n    font-weight: 700;\n    color: #0649a1;\n  }\n\n  & p {\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  @media only screen and "," {\n    padding: 15px;\n\n    & h2 {\n      justify-self: center;\n    }\n\n    & p {\n      justify-self: center;\n    }\n  }\n\n"])),y.Hb.msm),I=E.ZP.div(s||(s=(0,b.Z)(["\n  grid-area: player;\n  display: grid;\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  margin: 20px 0;\n  & div {\n    margin-bottom: 20px;\n  }\n"]))),D=E.ZP.div(c||(c=(0,b.Z)(['\n  grid-area: addInfo;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas:\n      "button"\n      "info";\n  justify-items: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  row-gap: 30px;\n  padding: 20px;\n']))),N=E.ZP.div(o||(o=(0,b.Z)(["\n  grid-area: button;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  width: 320px;\n"]))),P=(0,E.ZP)(j.OL)(p||(p=(0,b.Z)(["\n  display: grid;\n  justify-content: center;\n  align-self: center;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: 800;\n  border: 3px solid #5b8fc9;\n  padding: 8px 10px 8px 10px;\n  color: #5b8fc9;\n  box-shadow: 1px 1px 4px #dadada;\n  border-radius: 3px;\n  width: 100px;\n  text-transform: uppercase;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n    background: #78b1ef;\n    color: #f6f8f9;\n    border: 3px solid #f6f8f9;\n  }\n"]))),R=(0,E.ZP)(P)(u||(u=(0,b.Z)(["\n\n  &.active{\n    background: #78b1ef;\n    color: #f6f8f9;\n    border: 3px solid #f6f8f9;\n    pointer-events: none;\n    }\n"]))),O=(0,E.ZP)(P)(d||(d=(0,b.Z)(["\n\n  &.active{\n    background: #78b1ef;\n    color: #f6f8f9;\n    border: 3px solid #f6f8f9;\n    pointer-events: none;\n    }\n"]))),Q=(0,E.ZP)(P)(f||(f=(0,b.Z)(["\n  grid-area: goback;\n  justify-self: start;\n  margin: 20px 50px;\n"]))),T=t(3134),C=t.n(T),L=t(2854),U=t(1613),V=E.ZP.div(l||(l=(0,b.Z)(["\n  padding-top: 10px;\n\n    & .react-player {\n      width: 100%;\n      height: auto;\n    }\n\n"]))),J=t(184),M=function(){var n=(0,m.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],a=(0,m.useState)(""),i=(0,g.Z)(a,2),s=i[0],c=i[1],o=(0,m.useState)(L.Q.IDLE),p=(0,g.Z)(o,2),u=p[0],d=p[1],f=(0,v.UO)().movieId;return(0,m.useEffect)((function(){function n(){return(n=(0,h.Z)((0,x.Z)().mark((function n(){var e,t,a;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.Kv)(f);case 3:if(e=n.sent,0!==(t=e.results).length){n.next=10;break}return d(L.Q.RESOLVED),n.abrupt("return");case 10:a=t.find((function(n){return"Trailer"===n.type})).key,r(a);case 12:d(L.Q.RESOLVED),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),c(n.t0.message),d(L.Q.REJECTED);case 19:case"end":return n.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}d(L.Q.PENDING),function(){n.apply(this,arguments)}()}),[f]),(0,J.jsxs)(J.Fragment,{children:[u===L.Q.PENDING&&(0,J.jsx)(w.a,{}),u===L.Q.RESOLVED&&t&&(0,J.jsx)(V,{children:(0,J.jsx)(C(),{className:"react-player",controls:!0,url:"https://www.youtube.com/watch?v=".concat(t)})}),u===L.Q.REJECTED&&(0,J.jsx)(U.Z,{error:s})]})},z=function(n){var e,t=n.movie,r=n.backLinkHrefPef;return(0,J.jsxs)(k,{children:[(0,J.jsx)(Q,{to:r,children:"go back"}),(0,J.jsx)(_,{src:"".concat(t.poster_path?y.fh+t.poster_path:y.l7+"?text="+t.original_title),alt:"poster",width:"250px"}),(0,J.jsxs)(S,{children:[t.title&&(0,J.jsx)("h2",{children:t.title}),t.name&&(0,J.jsx)("h2",{children:t.name}),(0,J.jsxs)("p",{children:[(0,J.jsx)("span",{children:"Release date: "}),t.release_date]}),(0,J.jsxs)("p",{children:[(0,J.jsx)("span",{children:"Genres: "}),null!==t.genres?null===(e=t.genres)||void 0===e?void 0:e.map((function(n){return n.name})).join(", "):"Unknown"]}),(0,J.jsx)("p",{children:t.overview}),(0,J.jsx)("p",{children:0!==t.vote_average?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("span",{children:"Rating: "}),t.vote_average," (based on ",t.vote_count," reviews)"]}):"No reviews yet"})]}),(0,J.jsx)(I,{children:(0,J.jsx)(M,{})}),(0,J.jsxs)(D,{children:[(0,J.jsxs)(N,{children:[(0,J.jsx)(R,{to:"cast",children:"Cast"}),(0,J.jsx)(O,{to:"reviews",children:"Reviews"})]}),(0,J.jsx)(m.Suspense,{fallback:(0,J.jsx)(w.a,{}),children:(0,J.jsx)(v.j3,{})})]})]})},A=function(){var n,e,t=(0,m.useState)([]),r=(0,g.Z)(t,2),a=r[0],i=r[1],s=(0,m.useState)(""),c=(0,g.Z)(s,2),o=c[0],p=c[1],u=(0,m.useState)(L.Q.IDLE),d=(0,g.Z)(u,2),f=d[0],l=d[1],y=(0,v.UO)().movieId,b=(0,v.TH)(),j=(0,m.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,m.useEffect)((function(){function n(){return(n=(0,h.Z)((0,x.Z)().mark((function n(){var e;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.Y5)(y);case 3:e=n.sent,i(e),l(L.Q.RESOLVED),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),p(n.t0.message),l(L.Q.REJECTED);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}l(L.Q.PENDING),function(){n.apply(this,arguments)}()}),[y]),(0,J.jsxs)(J.Fragment,{children:[f===L.Q.PENDING&&(0,J.jsx)(w.a,{}),f===L.Q.RESOLVED&&(0,J.jsx)(z,{movie:a,backLinkHrefPef:j.current}),f===L.Q.REJECTED&&(0,J.jsx)(U.Z,{error:o})]})}},299:function(n,e,t){t.d(e,{Kv:function(){return v},Me:function(){return x},Tg:function(){return o},Y5:function(){return f},bI:function(){return u},np:function(){return g}});var r=t(4165),a=t(5861),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={NODE_ENV:"production",PUBLIC_URL:"/react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SECRET_KEY_TMDB,c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjIzNTVjNGY5Yjc4M2VlZDFiMTIyMzQzMDRmNmNjMSIsInN1YiI6IjVlNDZiNjVkMmRhODQ2MDAxMzA0NjkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQwHZNlPuOfnBRUOpSyl3OIowwrEStcoZnUcAf9qZvE"}};function o(n){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(s,"&page=").concat(e,"&language=en-US"),c);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n,e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(s,"&page=").concat(t),c);case 2:return a=n.sent,o=a.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),c);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),c);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),c);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/videos?api_key=").concat(s,"&language=en-US"),c);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3585:function(n,e,t){t.d(e,{AV:function(){return i},Hb:function(){return s},fh:function(){return r},l7:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273",i={xs:"320px",msm:"639px",sm:"640px",mmd:"767px",md:"768px",lg:"1024px",mlg:"1100px",xl:"1280px"},s={xs:"(min-width: ".concat(i.xs,")"),sm:"(min-width: ".concat(i.sm,")"),md:"(min-width: ".concat(i.md,")"),msm:"(max-width: ".concat(i.msm,")"),mmd:"(max-width: ".concat(i.mmd,")"),mlg:"(max-width: ".concat(i.mlg,")")}},2854:function(n,e,t){t.d(e,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=721.266d1121.chunk.js.map