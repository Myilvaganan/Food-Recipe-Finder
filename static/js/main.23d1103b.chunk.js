(this["webpackJsonpreceipe-app-react"]=this["webpackJsonpreceipe-app-react"]||[]).push([[0],{35:function(e,t,a){},55:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),s=(a(55),a(33)),o=a.n(s),j=a(37),l=a(15),d=a(38),u=a(92),b=a(3),p=a(102),O=a(103),h=a(96),m=a(97),x=a(98),f=a(101),g=a(104),v=a(95),N=a(94),C=a(41),S=a.n(C),y=a(42),k=a.n(y),w=a(43),I=a.n(w),E=a(40),F=a.n(E),L=a(4),M=Object(u.a)((function(e){return{root:{width:300,minHeight:400,maxWidth:350,margin:"0.5rem"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:N.a[500]}}}));function P(e){var t=M(),a=c.a.useState(!1),n=Object(l.a)(a,2),r=n[0],i=n[1],s=Math.floor(e.calories);return Object(L.jsxs)(p.a,{className:t.root,children:[Object(L.jsx)(O.a,{avatar:Object(L.jsx)(g.a,{"aria-label":"recipe",className:t.avatar,children:e.title[0]}),action:Object(L.jsx)(v.a,{"aria-label":"settings",children:Object(L.jsx)(F.a,{})}),title:e.title,subheader:e.source}),Object(L.jsx)(h.a,{className:t.media,image:e.image}),Object(L.jsxs)(m.a,{children:["Calories: ",s," g"]}),Object(L.jsxs)(x.a,{disableSpacing:!0,children:[Object(L.jsx)(v.a,{"aria-label":"add to favorites",children:Object(L.jsx)(S.a,{})}),Object(L.jsx)(v.a,{"aria-label":"share",children:Object(L.jsx)(k.a,{})}),Object(L.jsx)(v.a,{className:Object(b.a)(t.expand,Object(d.a)({},t.expandOpen,r)),onClick:function(){i(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(L.jsx)(I.a,{})})]}),Object(L.jsx)(f.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(L.jsxs)(m.a,{children:[Object(L.jsx)("p",{style:{color:"red"},children:"Ingredients:"}),Object(L.jsx)("ol",{children:e.ingredients.map((function(e){return Object(L.jsx)("li",{children:e.text})}))})]})})]})}a(35);var T=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,r=e.source;return Object(L.jsx)(P,{title:t,calories:a,image:n,ingredients:c,source:r})},q=a(100),B=a(99),D=a(44),J=a.n(D),_=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],d=i[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),p=b[0],O=b[1],h=Object(n.useState)(0),m=Object(l.a)(h,2),x=m[0],f=m[1],g="https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("6ad59d2f","&app_key=").concat("07416716df80e17aa65d0e7f10cfdbe0");Object(n.useEffect)((function(){v()}),[p]);var v=function(){var e=Object(j.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setInterval((function(){f(0)}),6e4);var N=function(){f(x<10?x+1:"Sorry! 10 requests/min ...")};return Object(L.jsxs)("div",{className:"main",children:[Object(L.jsx)("div",{className:"opacity-reducer"}),Object(L.jsxs)("div",{className:"App",children:[Object(L.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),O(s),d(""),N()},children:[Object(L.jsx)("p",{className:"text",children:"Myil's Kitchen"}),Object(L.jsx)(q.a,{placeholder:"Search here ...",type:"text",value:s,onChange:function(e){d(e.target.value)},className:"input"}),Object(L.jsx)(B.a,{variant:"contained",startIcon:Object(L.jsx)(J.a,{}),size:"medium",type:"submit",children:"RECIPE"}),Object(L.jsx)("p",{className:"count",children:x})]}),Object(L.jsx)("div",{className:"Content",children:a.map((function(e){return Object(L.jsx)(T,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,source:e.recipe.source,className:"Card"},e.recipe.label)}))})]})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(_,{})}),document.getElementById("root")),z()}},[[63,1,2]]]);
//# sourceMappingURL=main.23d1103b.chunk.js.map