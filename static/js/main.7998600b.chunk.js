(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{33:function(e,t,n){e.exports={"login-form":"Login_login-form__3Fvhb"}},34:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__W6ELv"}},35:function(e,t,n){e.exports={navbar:"Navbar_navbar__34Su4",title:"Navbar_title__2g5O9"}},42:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(32),r=n.n(s),l=(n(42),n(22)),i=n(8),o=n(3),j=n(7),u=n(23);n(53),n(44);u.a.initializeApp({apiKey:"AIzaSyCGErmFp-mTQ61oX1SYUCua9YQoH3Ea86w",authDomain:"mymoney-2083e.firebaseapp.com",projectId:"mymoney-2083e",storageBucket:"mymoney-2083e.appspot.com",messagingSenderId:"317580992352",appId:"1:317580992352:web:800fc4724a2db415840805"});var d=u.a.firestore(),b=u.a.auth(),p=u.a.firestore.Timestamp,O=n(0),h=Object(c.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};case"INV":return Object(j.a)(Object(j.a)({},e),{},{inv:t.payload});case"inst":return Object(j.a)(Object(j.a)({},e),{},{inst:t.payload});case"time":return Object(j.a)(Object(j.a)({},e),{},{time:t.payload});case"booked":return Object(j.a)(Object(j.a)({},e),{},{booked:t.payload});case"DATE":return Object(j.a)(Object(j.a)({},e),{},{DATE:t.payload});case"search":return Object(j.a)(Object(j.a)({},e),{},{search:t.payload});case"sop":return Object(j.a)(Object(j.a)({},e),{},{sop:t.payload});case"res":return Object(j.a)(Object(j.a)({},e),{},{res:t.payload});default:return e}},x=function(e){var t=e.children,n=Object(c.useReducer)(m,{user:null,authIsReady:!1,inv:!1,inst:null,time:null,booked:!1,DATE:null,search:null,sop:!1,res:!1}),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){var e=b.onAuthStateChanged((function(t){r({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",s),Object(O.jsx)(h.Provider,{value:Object(j.a)(Object(j.a)({},s),{},{dispatch:r}),children:t})},y=function(){var e=Object(c.useContext)(h);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},f=n(26),v=function(e,t,n,a){var s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],u=Object(c.useState)(null),b=Object(o.a)(u,2),p=b[0],O=b[1],h=Object(c.useRef)(t).current,m=Object(c.useRef)(n).current,x=Object(c.useRef)(a).current;return Object(c.useEffect)((function(){var t,n,c,a=d.collection(e);h&&(a=(t=a).where.apply(t,Object(f.a)(h)));m&&(a=(n=a).orderBy.apply(n,Object(f.a)(m)));x&&(a=(c=a).orderBy.apply(c,Object(f.a)(x)));var s=a.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),i(t),O(null)}),(function(e){console.log(e),O("could not fetch the data")}));return function(){return s()}}),[e,h,m]),{documents:l,error:p}},g=n(6),N=n.n(g),S=n(12),k=n.n(S),E=n(17),C={document:null,isPending:!1,error:null,success:null},D=function(e,t){switch(t.type){case"IS_PENDING":return{success:!1,isPending:!0,error:null,document:null};case"ERROR":return{success:!1,isPending:!1,error:t.payload,document:null};case"ADDED_DOCUMENT":return{success:!0,isPending:!1,error:null,document:t.payload};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};default:return e}},_=function(e){var t=Object(c.useReducer)(D,C),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),l=Object(o.a)(r,2),i=l[0],u=l[1],b=d.collection(e),O=function(e){i||s(e)},h=function(){var e=Object(E.a)(k.a.mark((function e(t){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"IS_PENDING"}),e.prev=1,n=p.fromDate(new Date),e.next=5,b.add(Object(j.a)(Object(j.a)({},t),{},{createdAt:n}));case 5:c=e.sent,O({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(E.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:O({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return u(!0)}}),[]),{addDocument:h,deleteDocument:m,response:a}};function w(e){var t=e.uid,n=(e.displayName,Object(c.useState)("")),a=Object(o.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),j=i[0],u=i[1],d=Object(c.useState)(""),b=Object(o.a)(d,2),p=b[0],h=b[1],m=Object(c.useState)(new Map),x=Object(o.a)(m,2),f=x[0],v=(x[1],_("samples")),g=v.addDocument,N=v.response;y().user;return Object(c.useEffect)((function(){N.success&&(r(""),u(""),h(""))}),[N.success]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Add Samples"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),1!=f.get(j)&&g({uid:t,name:s,amount:j,slot:p})},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Sample name:"}),Object(O.jsx)("input",{type:"text",required:!0,onChange:function(e){return r(e.target.value)},value:s})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Box No:"}),Object(O.jsxs)("select",{value:j,onChange:function(e){console.log(e.target.value),u(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"--Choose box number--"}),Object(O.jsx)("option",{value:"1",children:"1"}),Object(O.jsx)("option",{value:"2",children:"2"}),Object(O.jsx)("option",{value:"3",children:"3"}),Object(O.jsx)("option",{value:"4",children:"4"}),Object(O.jsx)("option",{value:"5",children:"5"}),Object(O.jsx)("option",{value:"6",children:"6"}),Object(O.jsx)("option",{value:"7",children:"7"}),Object(O.jsx)("option",{value:"8",children:"8"}),Object(O.jsx)("option",{value:"9",children:"9"})]})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Slot No:"}),Object(O.jsx)("input",{onChange:function(e){console.log(e.target.value),h(e.target.value)},type:"number",required:!0,min:"0",max:"100",value:p})]}),Object(O.jsx)("button",{children:"Add"})]})]})}function I(e){var t=e.uid,n=e.displayName,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],l=s[1],i=Object(c.useState)(""),j=Object(o.a)(i,2),u=j[0],d=j[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),h=p[0],m=p[1],x=y().dispatch,f=_("transactions"),v=f.addDocument,g=f.response,N=y(),S=N.DATE,k=N.booked,E=N.inst,C=N.time;return Object(c.useEffect)((function(){g.success&&(l(""),d(""),m(""))}),[g.success]),Object(c.useEffect)((function(){l(E),d(C),m(S)}),[E,C,S]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Book a slot"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({uid:t,name:r,amount:u,displayName:n,date:h}),x({type:"inst",payload:""}),x({type:"time",payload:""}),x({type:"booked",payload:!1}),x({type:"DATE",payload:""})},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Equipment name:"}),Object(O.jsxs)("select",{value:r,required:!0,onChange:function(e){l(e.target.value),x({type:"inst",payload:e.target.value})},children:[Object(O.jsx)("option",{value:"",children:"--Choose the equipment--"}),Object(O.jsx)("option",{value:"Microscope",children:"Microscope"}),Object(O.jsx)("option",{value:"Autoclave Machine",children:"Autoclave Machine"}),Object(O.jsx)("option",{value:"Magnetic stirrers",children:"Magnetic stirrers"}),Object(O.jsx)("option",{value:"Incubator",children:"Incubator"})]})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Date:"}),Object(O.jsx)("input",{type:"date",required:!0,onChange:function(e){m(e.target.value),x({type:"DATE",payload:e.target.value})},value:h})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Time:"}),Object(O.jsxs)("select",{value:u,required:!0,onChange:function(e){d(e.target.value),x({type:"time",payload:e.target.value})},children:[Object(O.jsx)("option",{value:"",children:"--Choose the slot--"}),Object(O.jsx)("option",{value:"8:00-9:00 am",children:"8:00-9:00 am"}),Object(O.jsx)("option",{value:"9:00-10:00 am",children:"9:00-10:00 am"}),Object(O.jsx)("option",{value:"10:00-11:00 am",children:"10:00-11:00 am"}),Object(O.jsx)("option",{value:"11:00-12:00 am",children:"11:00-12:00 am"}),Object(O.jsx)("option",{value:"12:00-1:00 pm",children:"12:00-1:00 pm"}),Object(O.jsx)("option",{value:"1:00-2:00 pm",children:"1:00-2:00 pm"}),Object(O.jsx)("option",{value:"2:00-3:00 pm",children:"2:00-3:00 pm"}),Object(O.jsx)("option",{value:"3:00-4:00 pm",children:"3:00-4:00 pm"}),Object(O.jsx)("option",{value:"4:00-5:00 pm",children:"4:00-5:00 pm"})]})]}),!k&&Object(O.jsx)("button",{children:"Book"})]})]})}function A(e){var t=e.transactions;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{color:"green"},children:"Booked Slots"}),Object(O.jsx)("ul",{className:N.a.transactions,children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:N.a.name,children:e.name}),Object(O.jsxs)("div",{className:"middle",children:[Object(O.jsx)("p",{className:N.a.amount,children:e.date}),Object(O.jsxs)("p",{className:N.a.amount,children:[" ",e.amount]})]}),Object(O.jsxs)("p",{className:"bookedBy",children:["booked by: ",e.displayName]})]},e.id)}))})]})}function P(e){var t=e.sample,n=_("samples").deleteDocument;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{color:"green"},children:"Sample Inventory"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h4",{children:"Box"}),Object(O.jsx)("h4",{children:"Slot"}),Object(O.jsx)("h4",{children:"Sample"})]}),Object(O.jsx)("ul",{className:N.a.transactions,children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.amount]}),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.slot]}),Object(O.jsx)("p",{className:N.a.amount,children:e.name}),Object(O.jsx)("button",{onClick:function(){return n(e.id)},children:"x"}),Object(O.jsx)("br",{})]},e.id)}))}),console.log(t)]})}function R(e){var t=e.temp,n=e.clock,c=e.date,a=y().booked,s=y().dispatch,r=v("transactions",["date","!=",""],["date","desc"],["amount"]).documents;return Object(O.jsxs)(O.Fragment,{children:[null===r||void 0===r?void 0:r.map((function(e){e.name!==t||e.amount!==n||e.date!==c||a||(console.log("already booked"),s({type:"booked",payload:!0}))})),!a&&Object(O.jsx)("h2",{style:{color:"green"},children:"Filtered"}),a&&Object(O.jsx)("h2",{style:{color:"green"},children:"Slot is full"}),!a&&Object(O.jsx)("ul",{className:N.a.transactions,children:null===r||void 0===r?void 0:r.map((function(e){return e.name===t&&e.date===c?Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:N.a.name,children:e.name}),Object(O.jsxs)("div",{className:"middle",children:[Object(O.jsx)("p",{className:N.a.amount,children:e.date}),Object(O.jsxs)("p",{className:N.a.amount,children:[" ",e.amount]})]}),Object(O.jsxs)("p",{className:"bookedBy",children:["booked by: ",e.displayName]})]},e.id):null}))})]})}function L(e){var t=e.sample,n=e.search;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{color:"green"},children:"Sample Inventory"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h4",{children:"Box"}),Object(O.jsx)("h4",{children:"Slot"}),Object(O.jsx)("h4",{children:"Sample"})]}),Object(O.jsx)("ul",{className:N.a.transactions,children:t.map((function(e){return e.name===n?Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.amount]}),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.slot]}),Object(O.jsx)("p",{className:N.a.amount,children:e.name}),Object(O.jsx)("br",{})]},e.id):null}))}),console.log(t)]})}function F(e){var t=e.sample,n=_("sop").deleteDocument;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{color:"green"},children:"SOP"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h4",{children:"Procedure Name"}),Object(O.jsx)("h4",{children:"Link"})]}),Object(O.jsx)("ul",{className:N.a.transactions,children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.name]}),Object(O.jsx)("a",{className:N.a.amount,href:e.url,children:e.name}),Object(O.jsx)("button",{onClick:function(){return n(e.id)},children:"x"}),Object(O.jsx)("br",{})]},e.id)}))}),console.log(t)]})}function T(e){e.uid,e.displayName;var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(new Map),l=Object(o.a)(r,2),i=(l[0],l[1],Object(c.useState)("")),j=Object(o.a)(i,2),u=j[0],d=j[1],b=_("sop"),p=b.addDocument,h=b.response;y().user;return Object(c.useEffect)((function(){h.success&&(s(""),d(""))}),[h.success]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Add SOP"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p({name:a,url:u}),console.log(u)},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Project Name:"}),Object(O.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:a})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Link: "}),Object(O.jsx)("input",{type:"url",required:!0,onChange:function(e){return d(e.target.value)},name:"Link",value:u})]}),Object(O.jsx)("button",{children:"Add SOP"})]})]})}function M(e){e.uid,e.displayName;var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(new Map),l=Object(o.a)(r,2),i=(l[0],l[1],Object(c.useState)("")),j=Object(o.a)(i,2),u=j[0],d=j[1],b=_("resource"),p=b.addDocument,h=b.response;y().user;return Object(c.useEffect)((function(){h.success&&(s(""),d(""))}),[h.success]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Add Resource"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p({name:a,url:u}),console.log(u)},children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Resource Name:"}),Object(O.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:a})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Link: "}),Object(O.jsx)("input",{type:"url",required:!0,onChange:function(e){return d(e.target.value)},name:"Link",value:u})]}),Object(O.jsx)("button",{children:"Add Resource"})]})]})}function B(e){var t=e.sample,n=_("resource").deleteDocument;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{color:"green"},children:"Resources"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h4",{children:"Resource Name"}),Object(O.jsx)("h4",{children:"Link"})]}),Object(O.jsx)("ul",{className:N.a.transactions,children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("p",{className:N.a.name,children:[" ",e.name]}),Object(O.jsx)("a",{className:N.a.amount,href:e.url,children:e.name}),Object(O.jsx)("button",{onClick:function(){return n(e.id)},children:"x"}),Object(O.jsx)("br",{})]},e.id)}))}),console.log(t)]})}function q(){var e=y(),t=e.user,n=e.inv,c=e.inst,a=e.time,s=e.DATE,r=e.search,l=e.sop,i=e.res,o=v("sop").documents,j=v("resource").documents,u=v("transactions",["date","!=",""],["date","desc"],["amount"]),d=u.documents,b=u.error,p=v("samples",["amount",">=","1"],["amount","asc"]),h=p.documents,m=p.error;return Object(O.jsxs)("div",{className:N.a.container,children:[Object(O.jsxs)("div",{className:N.a.content,children:[b&&Object(O.jsx)("p",{children:b}),!i&&!l&&!c&&!n&&"admin"!=t.displayName&&d&&Object(O.jsx)(A,{transactions:d}),!i&&!l&&c&&!n&&"admin"!=t.displayName&&d&&Object(O.jsx)(R,{temp:c,clock:a,date:s}),!i&&!l&&!r&&n&&"admin"!=t.displayName&&h&&Object(O.jsx)(P,{sample:h}),!i&&!l&&r&&n&&"admin"!=t.displayName&&h&&Object(O.jsx)(L,{sample:h,search:r}),!i&&l&&"admin"!=t.displayName&&o&&Object(O.jsx)(F,{sample:o}),i&&!l&&"admin"!=t.displayName&&o&&Object(O.jsx)(B,{sample:j}),m&&Object(O.jsx)("p",{children:m}),!i&&!l&&!r&&"admin"===t.displayName&&h&&Object(O.jsx)(P,{sample:h}),!i&&!l&&r&&n&&"admin"==t.displayName&&h&&Object(O.jsx)(L,{sample:h,search:r}),!i&&l&&"admin"===t.displayName&&o&&Object(O.jsx)(F,{sample:o}),i&&!l&&"admin"===t.displayName&&o&&Object(O.jsx)(B,{sample:j})]}),Object(O.jsxs)("div",{className:N.a.sidebar,children:[!i&&!l&&!n&&"admin"!=t.displayName&&Object(O.jsx)(I,{uid:t.uid,displayName:t.displayName}),!i&&!l&&"admin"===t.displayName&&Object(O.jsx)(w,{uid:t.uid,displayName:t.displayName}),!i&&l&&"admin"===t.displayName&&Object(O.jsx)(T,{uid:t.uid,displayName:t.displayName}),i&&!l&&"admin"===t.displayName&&Object(O.jsx)(M,{uid:t.uid,displayName:t.displayName})]})]})}var U=n.p+"static/media/logo.431d2332.png",G=n(33),H=n.n(G);function V(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],j=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),d=u[0],p=u[1],O=y().dispatch,h=function(){var e=Object(E.a)(k.a.mark((function e(t,c){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),p(!0),e.prev=2,e.next=5,b.signInWithEmailAndPassword(t,c);case 5:a=e.sent,O({type:"LOGIN",payload:a.user}),O({type:"booked",payload:!1}),O({type:"bookslot",payload:!1}),O({type:"search",payload:!1}),n||(p(!1),i(null)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),n||(i(e.t0.message),p(!1));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{login:h,isPending:d,error:l}}(),u=j.login,d=j.error,p=j.isPending;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:U,width:"300",height:"180",style:{"margin-left":"600px","margin-top":"10px"}}),Object(O.jsx)("h1",{style:{color:"#1f9751","margin-left":"550px"},children:"Lab Management \ud83d\ude01"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(n,l)},className:H.a["login-form"],children:[Object(O.jsx)("h2",{children:"Login "}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Email:"}),Object(O.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Password:"}),Object(O.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:l})]}),!p&&Object(O.jsx)("button",{className:"btn",children:"Login"}),p&&Object(O.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),d&&Object(O.jsx)("p",{children:d})]})]})}var Y=n(34),z=n.n(Y);function J(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),d=u[0],p=u[1],h=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),d=u[0],p=u[1],O=y().dispatch,h=function(){var e=Object(E.a)(k.a.mark((function e(t,c,a){var s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),p(!0),e.prev=2,e.next=5,b.createUserWithEmailAndPassword(t,c);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return e.next=10,s.user.updateProfile({displayName:a});case 10:O({type:"LOGIN",payload:s.user}),n||(p(!1),i(null)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n||(i(e.t0.message),p(!1));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{signup:h,error:l,isPending:d}}(),m=h.signup,x=h.isPending,f=h.error;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:U,width:"300",height:"180",style:{"margin-left":"600px"}}),Object(O.jsx)("h1",{style:{color:"#1f9751","margin-left":"550px"},children:"Lab Management System"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n,l,d),m(n,l,d)},className:z.a["signup-form"],children:[Object(O.jsx)("h2",{children:"Sign Up"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Email:"}),Object(O.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Password:"}),Object(O.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:l})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("span",{children:"Username:"}),Object(O.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)},value:d})]}),!x&&Object(O.jsx)("button",{className:"btn",children:"Sign Up"}),x&&Object(O.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),f&&Object(O.jsx)("p",{children:f})]})]})}var W=n(35),Q=n.n(W);function K(){var e=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),d=u[0],p=u[1],O=y().dispatch,h=function(){var e=Object(E.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),p(!0),e.prev=2,e.next=5,b.signOut();case 5:O({type:"LOGOUT"}),n||(p(!1),i(null)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n||(i(e.t0.message),p(!1));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return a(!0)}}),[]),{logout:h,error:l,isPending:d}}().logout,t=y(),n=t.user,a=t.res,s=y(),r=s.dispatch,i=s.sop,j=(y().booked,y().inv),u=(y().search,Object(c.useState)(!1)),d=Object(o.a)(u,2),p=(d[0],d[1]),h=Object(c.useState)(""),m=Object(o.a)(h,2),x=m[0],f=m[1],v=function(){r({type:"INV",payload:!0}),r({type:"search",payload:!1}),r({type:"sop",payload:!1}),r({type:"res",payload:!1}),f("")},g=function(){r({type:"search",payload:x}),console.log(x)},N=function(){r({type:"sop",payload:!0}),r({type:"INV",payload:!1}),r({type:"search",payload:!1}),r({type:"res",payload:!1})},S=function(e){f(e.target.value),console.log(x)},C=function(){r({type:"res",payload:!0}),r({type:"sop",payload:!1}),r({type:"INV",payload:!1}),r({type:"search",payload:!1}),console.log(a)};return Object(c.useEffect)((function(){f("")}),[]),Object(O.jsx)("nav",{className:Q.a.navbar,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("img",{src:U,width:"100",height:"60",style:{"margin-right":"40px"}})}),!n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/login",children:"Login"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/signup",children:"Signup"})})]}),n&&"admin"!=n.displayName&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("li",{children:["hello, ",n.displayName]}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return r({type:"INV",payload:!1}),r({type:"inst",payload:""}),r({type:"time",payload:""}),r({type:"booked",payload:!1}),r({type:"bookslot",payload:!0}),r({type:"search",payload:!1}),r({type:"sop",payload:!1}),r({type:"res",payload:!1}),void p(!0)},children:" Book Slot"})}),Object(O.jsx)("li",{}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return v()},children:"Inventory"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return N()},children:"SOP"})}),!i&&j&&Object(O.jsxs)(O.Fragment,{children:["  ",Object(O.jsx)("li",{children:Object(O.jsx)("input",{type:"text",value:x,id:"simple-search",class:"btn1",placeholder:"Search       ",required:!0,onChange:S})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"search",onClick:function(){return g()},children:"\ud83d\udd0d"})})]}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return C()},children:"Resource"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:e,children:"Logout"})})]}),n&&"admin"==n.displayName&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("li",{children:["hello, ",n.displayName]}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return v()},children:"Inventory"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return N()},children:"SOP"})}),!i&&j&&Object(O.jsxs)(O.Fragment,{children:["  ",Object(O.jsx)("li",{children:Object(O.jsx)("input",{type:"text",value:x,id:"simple-search",class:"btn1",placeholder:"Search       ",required:!0,onChange:S})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"search",onClick:function(){return g()},children:"\ud83d\udd0d"})})]}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:function(){return C()},children:"Resource"})}),Object(O.jsx)("li",{children:Object(O.jsx)("button",{className:"btn",onClick:e,children:"Logout"})})]})]})})}var X=function(){var e=y(),t=e.authIsReady,n=e.user;return Object(O.jsx)("div",{className:"App",children:t&&Object(O.jsxs)(l.a,{children:[Object(O.jsx)(K,{}),Object(O.jsxs)(i.d,{children:[Object(O.jsxs)(i.b,{exact:!0,path:"/",children:[!n&&Object(O.jsx)(i.a,{to:"/login"}),n&&Object(O.jsx)(q,{})]}),Object(O.jsxs)(i.b,{path:"/login",children:[n&&Object(O.jsx)(i.a,{to:"/"}),!n&&Object(O.jsx)(V,{})]}),Object(O.jsxs)(i.b,{path:"/signup",children:[n&&n.displayName&&Object(O.jsx)(i.a,{to:"/"}),!n&&Object(O.jsx)(J,{})]})]})]})})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(x,{children:Object(O.jsx)(X,{})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Home_container__2IDzn",content:"Home_content__1S44t",sidebar:"Home_sidebar__-B9pi",transactions:"Home_transactions__1Jup2",name:"Home_name__2jpH6",amount:"Home_amount__13CGn"}}},[[52,1,2]]]);
//# sourceMappingURL=main.7998600b.chunk.js.map