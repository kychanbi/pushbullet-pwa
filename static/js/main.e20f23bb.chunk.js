(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{139:function(e,t,n){e.exports=n(170)},144:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchAndSetAllPushes",(function(){return S})),n.d(a,"setAccessToken",(function(){return g})),n.d(a,"setMainUi",(function(){return w})),n.d(a,"onSidebarShow",(function(){return O})),n.d(a,"onSidebarHide",(function(){return x})),n.d(a,"initApp",(function(){return j}));var r={};n.r(r),n.d(r,"getPushes",(function(){return T}));var c=n(0),o=n.n(c),l=n(69),i=n.n(l),u=(n(144),n(128)),s=n(198),m=n(38),f=n(195),p=n(180),d=n(196),h=n(193),E=n(58),b=n(43),v=n.n(b),k=n(77),S=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state.accessToken,console.log("fetchAndSetAllPushes",n),!n){e.next=8;break}return e.next=5,t.effects.getPushes(n);case 5:a=e.sent,console.log(a),t.state.pushes=a.pushes;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e,t){e.state.accessToken=t,localStorage.setItem("accessToken",t)},w=function(e,t){var n=t.key,a=t.value;e.state.mainUi[n]=a},O=function(e){w(e,{key:"isSidebarOpen",value:!0})},x=function(e){w(e,{key:"isSidebarOpen",value:!1})},j=function(e){e.state.accessToken=localStorage.accessToken},y=n(121),A=n.n(y),C="https://api.pushbullet.com/v2",T=function(){var e=Object(k.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"Access-Token":t},e.next=3,A.a.get("".concat(C,"/pushes"),{headers:n});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P={state:{pushes:[],accessToken:"",mainUi:{isSidebarOpen:!1}},actions:a,effects:r},W=Object(E.e)(),H=Object(E.b)(),U=(Object(E.c)(),Object(E.d)(),n(186)),z=n(185),D=n(184);function I(e){return new Date(1e3*e).toLocaleDateString(function(){if(void 0!=navigator.languages)return navigator.languages[0]}())}var B,J=function(e){var t=e.url,n=e.title,a=I(e.modified);return o.a.createElement(p.a,{borderWidth:1,w:"100%",borderRadius:"lg",p:"1em"},o.a.createElement(D.a,{href:t,isExternal:!0,color:"teal.500"},t),o.a.createElement(z.a,null,n),o.a.createElement(z.a,{fontSize:"xs",float:"right"},a))},M=function(e){var t=e.body,n=I(e.modified);return o.a.createElement(p.a,{borderWidth:1,w:"100%",borderRadius:"lg",p:"1em",borderColor:"blue"},o.a.createElement(z.a,null,t),o.a.createElement(z.a,{fontSize:"xs",float:"right"},n))};!function(e){e.link="link",e.note="note"}(B||(B={}));var R=function(e){switch(e.type){case B.link:return o.a.createElement(J,e);case B.note:return o.a.createElement(M,e)}},F=function(e){var t=e.messages;return o.a.createElement(f.a,{maxW:"100%"},t.map((function(e,t){return o.a.createElement(R,Object.assign({key:"push"+t},e))})))},L="/setting",V="/",$=[{path:L,exact:!0,comp:function(){var e=W().accessToken,t=H().setAccessToken;return o.a.createElement(p.a,null,o.a.createElement(d.a,null,"Access Token"),o.a.createElement(h.a,{defaultValue:e||"input here",onChange:t},o.a.createElement(h.c,null),o.a.createElement(h.b,null)))}},{path:V,exact:!0,comp:function(){var e=H().fetchAndSetAllPushes,t=W(),n=t.pushes,a=t.accessToken;return Object(c.useEffect)((function(){e()}),[a]),o.a.createElement(U.a,{maxW:"100vw"},o.a.createElement(z.a,null,"main"),o.a.createElement(F,{messages:n}))}}],_=n(16),q=function(e){var t=e.to,n=e.Component,a=Object(_.f)();return o.a.createElement(n,{onClick:function(e){console.log("click",e),e.preventDefault(),a.push(t)}})},G=function(e){var t=e.onClick;return o.a.createElement(u.a,{onClick:t,w:"100%"},"Setting")},K=function(e){var t=e.onClick;return o.a.createElement(u.a,{onClick:t,w:"100%"},"Home")},N=function(e){var t=e.isSidebarOpen,n=e.onSidebarHide;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{isOpen:t,placement:"left",onClose:n},o.a.createElement(m.f,null,o.a.createElement(s.b,null,o.a.createElement(m.c,null),o.a.createElement(m.e,null,"Chakra-UI"),o.a.createElement(m.b,null,o.a.createElement(f.a,null,o.a.createElement(q,{to:V,Component:K}),o.a.createElement(q,{to:L,Component:G})))))))},Q=n(187),X=n(188),Y=n(189),Z=n(199),ee=function(e){var t=e.isSidebarOpen,n=e.onShowSidebar;return o.a.createElement(Q.a,null,o.a.createElement(p.a,{flex:1},t||o.a.createElement(X.a,{icon:o.a.createElement(Z.a,{w:8,h:8}),colorScheme:"blue",variant:"outline",onClick:n,"aria-label":""})),o.a.createElement(Y.a,{flex:1,h:"40px"},o.a.createElement(z.a,{fontSize:"xl"},"Pushbullet PWA (unofficial)")),o.a.createElement(p.a,{flex:1}))},te=n(91);var ne=function(){var e=W().mainUi,t=H(),n=t.onSidebarShow,a=t.onSidebarHide,r=t.initApp;return Object(c.useEffect)((function(){r()}),[]),o.a.createElement(te.a,null,o.a.createElement(N,{isSidebarOpen:e.isSidebarOpen,onSidebarHide:a}),o.a.createElement(p.a,null,o.a.createElement(ee,{onShowSidebar:n,isSidebarOpen:e.isSidebarOpen})),o.a.createElement(_.c,null,$.map((function(e,t){return o.a.createElement(_.a,{key:"route_"+t,path:e.path,exact:e.exact,component:e.comp})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(44),re=n(191),ce=n(190),oe=Object(ce.a)({sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"}),le=Object(re.a)({breakpoints:oe}),ie=n(194),ue=Object(ae.d)(P);i.a.render(o.a.createElement(E.a,{value:ue},o.a.createElement(ie.a,{theme:le},o.a.createElement(o.a.StrictMode,null,o.a.createElement(ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.e20f23bb.chunk.js.map