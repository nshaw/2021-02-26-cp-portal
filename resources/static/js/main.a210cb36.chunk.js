(window["webpackJsonpticket-details-widget"]=window["webpackJsonpticket-details-widget"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"ticket":{"id":"ID","systemId":"entities.ticket.systemId","type":"entities.ticket.type","description":"entities.ticket.description","priority":"entities.ticket.priority","status":"entities.ticket.status","createDate":"entities.ticket.createDate","updateDate":"entities.ticket.updateDate"}}}')},71:function(e,t,n){e.exports=n(91)},72:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);n(72);var a=n(27),r=n(28),c=n(35),i=n(20),o=n(29),l=n(64),s=n(24),u=n(0),p=n.n(u),d=n(12),m=n.n(d),f=p.a.createContext(null),b=n(16),k=n.n(b),h=n(31),y=n(37),E=n(23),O=n(123),v=n(63),w=n(3),g=n.n(w),j=(g.a.shape({initialized:g.a.bool,authenticated:g.a.bool}),n(65));g.a.oneOfType([g.a.func,g.a.shape({current:g.a.elementType}),g.a.shape(null)]);var D=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},P=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},S=n(125),C=(g.a.shape({id:g.a.number,systemId:g.a.string,type:g.a.string,description:g.a.string,priority:g.a.string,status:g.a.string,createDate:g.a.string,updateDate:g.a.string}),n(117)),N=n(121),x=n(120),z=n(118),R=n(119),I=function(e){var t=e.t,n=e.i18n.language,a=e.ticket;return p.a.createElement(C.a,null,p.a.createElement(z.a,null,p.a.createElement(R.a,null,p.a.createElement(x.a,null,t("common.name")),p.a.createElement(x.a,null,t("common.value")))),p.a.createElement(N.a,null,p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.id"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.id))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.systemId"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.systemId))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.type"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.type))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.description"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.description))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.priority"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.priority))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.status"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.status))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.createDate"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.createDate&&new Date(a.createDate).toLocaleString(n)))),p.a.createElement(R.a,null,p.a.createElement(x.a,null,p.a.createElement("span",null,t("entities.ticket.updateDate"))),p.a.createElement(x.a,null,p.a.createElement("span",null,a.updateDate&&new Date(a.updateDate).toLocaleString(n))))))};I.defaultProps={ticket:[]};var A=Object(E.b)()(I),F=function(e){var t=e.t,n=e.ticket;return p.a.createElement(S.a,null,p.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Ticket"})),p.a.createElement(A,{ticket:n}))};F.defaultProps={ticket:{}};var T=Object(E.b)()(F),L=n(4),U=n(126),M=n(128),K=n(122),H=n(5),J=n(127),V=n(59),W=n.n(V),B=n(60),G=n.n(B),q=n(58),Q=n.n(q),X=n(61),Y=n.n(X),Z={success:Q.a,error:W.a,info:G.a},$={success:3e3,error:null,info:5e3},_=function e(t){var n=t.className,a=t.classes,r=t.status,c=t.message,i=t.onClose,o=!!c,l=r||e.INFO,s=Z[l],u=$[l],d=p.a.createElement("span",{className:a.message},p.a.createElement(s,{className:Object(L.a)(a.icon,a.iconStatus)}),c);return p.a.createElement(U.a,{open:o,onClose:i,autoHideDuration:u},p.a.createElement(M.a,{className:Object(L.a)(a[l],n),message:d,action:[p.a.createElement(J.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},p.a.createElement(Y.a,{className:a.icon}))]}))};_.SUCCESS="success",_.ERROR="error",_.defaultProps={message:null,className:"",status:_.INFO="info",onClose:function(){}};var ee=Object(H.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:K.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(_),te=function(){var e=Object(h.a)(k.a.mark((function e(t,n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){var e=Object(h.a)(k.a.mark((function e(t,n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/tickets","/").concat(n),r=ae({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",te(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={loading:!0,ticket:{},notificationStatus:null,notificationMessage:null},n.theme=Object(v.a)(),n.closeNotification=n.closeNotification.bind(Object(y.a)(n)),n.fetchData=n.fetchData.bind(Object(y.a)(n)),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(h.a)(k.a.mark((function e(){var t,n,a,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,re(r,a);case 6:c=e.sent,this.setState((function(){return{ticket:c,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("common.couldNotFetchData"),notificationStatus:ee.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.ticket,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,c=this.props,i=c.t,o=c.keycloak;return p.a.createElement(O.a,{theme:this.theme},p.a.createElement(P,{keycloak:o},i("common.notAuthenticated")),p.a.createElement(D,{keycloak:o},r&&i("common.loading"),!r&&p.a.createElement(T,{ticket:t})),p.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(p.a.Component);ce.defaultProps={onError:function(){},serviceUrl:""};var ie=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(r=Object(c.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(l)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,c=Object(j.a)(n,["forwardedRef"]);return p.a.createElement(e,Object.assign({},c,{ref:a,keycloak:t}))},r}return Object(o.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement(f.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return p.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(E.b)()(ce)),oe=n(49),le={en:n(62)};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ue=Object.keys(le).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(s.a)({},t,Object(s.a)({},"translation",le[t])))}),{}),pe=(oe.a.t,function(e){!function(e,t){oe.a.use(E.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:ue,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(){return window&&window.entando&&window.entando.keycloak&&me({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},be="service-url",ke="locale",he=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=fe(),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e,t,n=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=me({},fe(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(e="keycloak",t=function(){n.keycloak=me({},fe(),{initialized:!0}),n.render()},window.addEventListener(e,t),function(){window.removeEventListener(e,t)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(be)||"",n=this.getAttribute(ke);pe(n);var a=this.getAttribute("id"),r=p.a.createElement(ie,{id:a,onError:function(t){var n=new CustomEvent("".concat("ticket.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});m.a.render(p.a.createElement(f.Provider,{value:this.keycloak},r),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(l.a)(HTMLElement));customElements.define("ticket-details",he)}},[[71,1,2]]]);
//# sourceMappingURL=main.a210cb36.chunk.js.map