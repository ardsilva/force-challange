(this["webpackJsonpforce-challenge"]=this["webpackJsonpforce-challenge"]||[]).push([[0],{41:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a,d,s,b,l,j,h,p,u,x=t(0),O=t.n(x),g=t(32),m=t.n(g),f=t(11),w=(t(41),t(5)),k=t(2),F=t(4),v=t(1),C=F.b.button(c||(c=Object(w.a)(["\n    font-size: 1em;\n    margin: 1em;\n    padding: 1em 1.25em;\n    border: 2px solid #2C97D1;\n    border-radius: 10px;\n    background: #2C97D1;\n    color: #FFFFFF;\n    letter-spacing: 0.35em;\n"]))),y=F.b.h2(i||(i=Object(w.a)(["\n    font-size: 72px;\n    font-weight: 100;\n    color: #2C97D1;\n"]))),D=F.b.h3(r||(r=Object(w.a)(["\n    color: #2C97D1;\n    font-size: 14px;\n    font-weight: 400;\n    margin: -60px 0px 60px 0px;\n    letter-spacing: 0.35em;\n"]))),z=function(){var n=Object(k.f)();return Object(v.jsxs)("div",{children:[Object(v.jsxs)(y,{children:["Welcome to ",Object(v.jsx)("strong",{children:"iClinic"})]}),Object(v.jsx)(D,{children:"FRONTEND CHALLENGE"}),Object(v.jsx)(C,{onClick:function(){return n.push("/side-pick")},children:"START"})]})},A=t(15),L=t(20),E=t.n(L),S=t.p+"static/media/darth-vader.5b59175e.png",P=t.p+"static/media/luke-skywalker.7ac8850b.png",T=t(21),B=t.n(T),M=B()("mode",{Darth:"#2A2A2A",Luke:"#FBFE63"}),N=B()("mode",{Darth:"#FFFFFF",Luke:"#2A2A2A"}),I=F.b.div(o||(o=Object(w.a)(["\n  background-color: ",";\n  color: ",";\n"])),M,N),J=F.b.button(a||(a=Object(w.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    font-size: 1em;\n    font-weight: bold;\n    margin: 1em;\n    padding: 1em;\n    border: 2px solid ",";\n    border-radius: 10px;\n\n    &:disabled {\n      opacity: .5;\n      cursor: wait;\n    }\n\n    @media(max-width: 799px) {\n      display: none\n    }\n"])),N,M,N),R=F.b.button(d||(d=Object(w.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n    font-size: 1em;\n    font-weight: bold;\n    margin: 1em;\n    padding: 1em;\n    border: 2px solid ",";\n    border-radius: 10px;\n\n    &:disabled {\n      opacity: .5;\n      cursor: wait;\n    }\n\n    @media(min-width: 800px) {\n      display: none\n    }\n"])),N,M,N),G=F.b.button(s||(s=Object(w.a)(["\n    cursor: pointer;\n    background-color: ",";\n    border: none;\n    display: grid;\n"])),M),H=F.b.svg(b||(b=Object(w.a)(["\n    fill: currentColor;\n    color: ",";\n"])),N),V=F.b.span(l||(l=Object(w.a)(["\n    color: ",";\n    font-size: 18px;\n    line-height: 22px;\n"])),N),W=F.b.img(j||(j=Object(w.a)(["\n    border-radius: 50%;\n    width: 20%;\n    @media(max-width: 768px) {\n      width: 50%;\n  }\n"]))),Y=F.b.p(h||(h=Object(w.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 36px;\n    line-height: 44px;\n"]))),q=F.b.strong(p||(p=Object(w.a)(["\n  @media(max-width: 768px) {\n    display: list-item;\n  }\n"]))),K=function(){var n=Object(k.f)(),e=Object(x.useState)({}),t=Object(A.a)(e,2),c=t[0],i=t[1],r=Object(x.useState)(!0),o=Object(A.a)(r,2),a=o[0],d=o[1],s=Object(x.useState)(""),b=Object(A.a)(s,2),l=b[0],j=b[1],h=function(){d(!0),Promise.race([E.a.get("https://swapi.dev/api/people/1"),E.a.get("https://swapi.dev/api/people/4")]).then((function(n){console.log(n.data),i(n.data),j(n.data.name.split(" ")[0])})).catch((function(n){return console.log(n)})).finally((function(){return d(!1)}))};return Object(x.useEffect)((function(){h()}),[]),Object(v.jsx)(F.a,{theme:{mode:l},children:Object(v.jsxs)(I,{children:[Object(v.jsx)("div",{children:Object(v.jsxs)(G,{onClick:function(){return n.push("/force-challange")},children:[Object(v.jsx)(H,{viewBox:"0 0 32 32",children:Object(v.jsx)("path",{d:"M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"})}),Object(v.jsx)(V,{children:"back"})]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{disabled:a,onClick:function(){return h()},children:"choose your path again, Padawan"}),a?Object(v.jsx)("div",{children:Object(v.jsx)(Y,{children:"Checking ..."})}):Object(v.jsxs)("div",{children:[Object(v.jsx)(W,{src:"Darth Vader"===c.name?S:P,alt:"Master"}),Object(v.jsxs)(Y,{children:["Your master is ",Object(v.jsx)(q,{children:c.name})]})]}),Object(v.jsx)(R,{disabled:a,onClick:function(){return h()},children:"choose your path again, Padawan"})]})]})})},Q=F.b.div(u||(u=Object(w.a)(["\n  display: grid;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n"]))),U=function(){return Object(v.jsx)(Q,{children:Object(v.jsxs)(k.c,{children:[Object(v.jsx)(k.a,{exact:!0,path:"/force-challange",children:Object(v.jsx)(z,{})}),Object(v.jsx)(k.a,{path:"/side-pick",children:Object(v.jsx)(K,{})})]})})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),c(n),i(n),r(n),o(n)}))};m.a.render(Object(v.jsx)(O.a.StrictMode,{children:Object(v.jsx)(f.a,{children:Object(v.jsx)(U,{})})}),document.getElementById("root")),X()}},[[66,1,2]]]);
//# sourceMappingURL=main.14538f9c.chunk.js.map