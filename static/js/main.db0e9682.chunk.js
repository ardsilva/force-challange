(this["webpackJsonpforce-challenge"]=this["webpackJsonpforce-challenge"]||[]).push([[0],{41:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var c,i,r,a,o,d,s,b,l,j,h,p,u,x,O=t(0),g=t.n(O),m=t(32),f=t.n(m),w=t(11),F=(t(41),t(5)),v=t(2),k=t(4),C=t(1),y=k.b.button(c||(c=Object(F.a)(["\n    font-size: 1em;\n    margin: 1em;\n    padding: 1em 1.25em;\n    border: 2px solid #2C97D1;\n    border-radius: 10px;\n    background: #2C97D1;\n    color: #FFFFFF;\n    letter-spacing: 0.35em;\n    cursor: pointer;\n"]))),D=k.b.h2(i||(i=Object(F.a)(["\n    font-size: 72px;\n    font-weight: 100;\n    color: #2C97D1;\n"]))),z=k.b.h3(r||(r=Object(F.a)(["\n    color: #2C97D1;\n    font-size: 14px;\n    font-weight: 400;\n    margin: -60px 0px 60px 0px;\n    letter-spacing: 0.35em;\n"]))),A=function(){var n=Object(v.f)();return Object(C.jsxs)("div",{children:[Object(C.jsxs)(D,{children:["Welcome to ",Object(C.jsx)("strong",{children:"iClinic"})]}),Object(C.jsx)(z,{children:"FRONTEND CHALLENGE"}),Object(C.jsx)(y,{onClick:function(){return n.push("/force-side")},children:"START"})]})},L=t(15),E=t(20),S=t.n(E),P=t.p+"static/media/darth-vader.5b59175e.png",T=t.p+"static/media/luke-skywalker.7ac8850b.png",B=t.p+"static/media/saber.d63052d1.gif",M=t(21),N=t.n(M),I=N()("mode",{Darth:"#2A2A2A",Luke:"#FBFE63"}),J=N()("mode",{Darth:"#FFFFFF",Luke:"#2A2A2A"}),R=k.b.div(a||(a=Object(F.a)(["\n  background-color: ",";\n  color: ",";\n"])),I,J),G=k.b.button(o||(o=Object(F.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    font-size: 1em;\n    font-weight: bold;\n    margin: 1em;\n    padding: 1em;\n    border: 2px solid ",";\n    border-radius: 10px;\n\n    &:disabled {\n      opacity: .5;\n      cursor: wait;\n    }\n\n    @media(max-width: 799px) {\n      display: none\n    }\n"])),J,I,J),H=k.b.button(d||(d=Object(F.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    font-size: 1em;\n    font-weight: bold;\n    margin: 1em;\n    padding: 1em;\n    border: 2px solid ",";\n    border-radius: 10px;\n\n    &:disabled {\n      opacity: .5;\n      cursor: wait;\n    }\n\n    @media(min-width: 800px) {\n      display: none\n    }\n"])),J,I,J),V=k.b.button(s||(s=Object(F.a)(["\n    cursor: pointer;\n    background-color: ",";\n    border: none;\n    display: grid;\n"])),I),W=k.b.svg(b||(b=Object(F.a)(["\n    fill: currentColor;\n    color: ",";\n"])),J),Y=k.b.span(l||(l=Object(F.a)(["\n    color: ",";\n    font-size: 18px;\n    line-height: 22px;\n"])),J),q=k.b.img(j||(j=Object(F.a)(["\n    border-radius: 50%;\n    width: 20%;\n    @media(max-width: 768px) {\n      width: 50%;\n  }\n"]))),K=k.b.img(h||(h=Object(F.a)(["\n    width: 35%;\n    @media(max-width: 768px) {\n      width: 50%;\n  }\n"]))),Q=k.b.p(p||(p=Object(F.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 36px;\n    line-height: 44px;\n"]))),U=k.b.strong(u||(u=Object(F.a)(["\n  @media(max-width: 768px) {\n    display: list-item;\n  }\n"]))),X=function(){var n=Object(v.f)(),e=Object(O.useState)({}),t=Object(L.a)(e,2),c=t[0],i=t[1],r=Object(O.useState)(!0),a=Object(L.a)(r,2),o=a[0],d=a[1],s=Object(O.useState)(""),b=Object(L.a)(s,2),l=b[0],j=b[1],h=function(){d(!0),Promise.race([S.a.get("https://swapi.dev/api/people/1"),S.a.get("https://swapi.dev/api/people/4")]).then((function(n){i(n.data),j(n.data.name.split(" ")[0])})).catch((function(n){return console.log(n)})).finally((function(){return d(!1)}))};return Object(O.useEffect)((function(){return h(),function(){d(!1)}}),[]),Object(C.jsx)(k.a,{theme:{mode:l},children:Object(C.jsxs)(R,{children:[Object(C.jsx)("div",{children:Object(C.jsxs)(V,{onClick:function(){return n.push("/force-challenge")},children:[Object(C.jsx)(W,{viewBox:"0 0 32 32","data-testid":"svg-left-arrow",children:Object(C.jsx)("path",{d:"M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"})}),Object(C.jsx)(Y,{children:"back"})]})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(G,{disabled:o,onClick:function(){return h()},children:"choose your path again, Padawan"}),o?Object(C.jsx)("div",{children:Object(C.jsx)(K,{src:B,alt:"Loading..."})}):Object(C.jsxs)("div",{children:[Object(C.jsx)(q,{src:"Darth Vader"===c.name?P:T,alt:"Master"}),Object(C.jsxs)(Q,{children:["Your master is ",Object(C.jsx)(U,{children:c.name})]})]}),Object(C.jsx)(H,{disabled:o,onClick:function(){return h()},children:"choose your path again, Padawan"})]})]})})},Z=k.b.div(x||(x=Object(F.a)(["\n  display: grid;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n"]))),$=function(){return Object(C.jsx)(Z,{children:Object(C.jsxs)(v.c,{children:[Object(C.jsx)(v.a,{exact:!0,path:"/force-challenge",children:Object(C.jsx)(A,{})}),Object(C.jsx)(v.a,{exact:!0,path:"/force-side",children:Object(C.jsx)(X,{})})]})})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),i(n),r(n),a(n)}))};f.a.render(Object(C.jsx)(g.a.StrictMode,{children:Object(C.jsx)(w.a,{children:Object(C.jsx)($,{})})}),document.getElementById("root")),_()}},[[66,1,2]]]);
//# sourceMappingURL=main.db0e9682.chunk.js.map