(this["webpackJsonpforce-challenge"]=this["webpackJsonpforce-challenge"]||[]).push([[0],{41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o,s,j=n(0),b=n.n(j),d=n(32),l=n.n(d),h=n(11),u=(n(41),n(9)),O=n(2),p=n(8),x=n(1),g=p.b.button(c||(c=Object(u.a)(["\n"]))),f=function(){var e=Object(O.f)();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:["Welcome to ",Object(x.jsx)("strong",{children:"iClinic"})]}),Object(x.jsx)("h6",{children:"FRONTEND CHALLENGE"}),Object(x.jsx)("main",{children:Object(x.jsx)(g,{onClick:function(){return e.push("/side-pick")},children:"START"})})]})},k=n(15),m=n(20),v=n.n(m),F=n.p+"static/media/darth-vader.5b59175e.png",C=n.p+"static/media/luke-skywalker.7ac8850b.png",A=n(21),w=n.n(A),E=w()("mode",{Darth:"#2A2A2A",Luke:"#FBFE63"}),L=w()("mode",{Darth:"#FFFFFF",Luke:"#2A2A2A"}),S=p.b.div(r||(r=Object(u.a)(["\n  background-color: ",";\n  color: ",";\n"])),E,L),y=p.b.button(i||(i=Object(u.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"])),L,E),D=p.b.button(a||(a=Object(u.a)(["\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n"])),L,E),T=p.b.img(o||(o=Object(u.a)(["\n    border-radius: 50%;\n"]))),P=function(){var e=Object(O.f)(),t=Object(j.useState)({}),n=Object(k.a)(t,2),c=n[0],r=n[1],i=Object(j.useState)(!0),a=Object(k.a)(i,2),o=a[0],s=a[1],b=Object(j.useState)(""),d=Object(k.a)(b,2),l=d[0],h=d[1],u=function(){s(!0),Promise.race([v.a.get("https://swapi.dev/api/people/1"),v.a.get("https://swapi.dev/api/people/4")]).then((function(e){console.log(e.data),r(e.data),h(e.data.name.split(" ")[0])})).catch((function(e){return console.log(e)})).finally((function(){return s(!1)}))};return Object(j.useEffect)((function(){u()}),[]),Object(x.jsx)(p.a,{theme:{mode:l},children:Object(x.jsxs)(S,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(D,{onClick:function(){return e.push("/force-challange")},children:"back"})}),Object(x.jsx)("div",{children:Object(x.jsx)(y,{disabled:o,onClick:function(){return u()},children:"choose your path again, Padawan"})}),Object(x.jsx)("div",{children:o?Object(x.jsx)("p",{children:"Checking ..."}):Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{src:"Darth Vader"===c.name?F:C,alt:"Master"}),Object(x.jsxs)("p",{children:["Your master is ",Object(x.jsx)("strong",{children:c.name})]})]})})]})})},B=p.b.div(s||(s=Object(u.a)(["\n  display: grid;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n"]))),N=function(){return Object(x.jsx)(B,{children:Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{exact:!0,path:"/force-challange",children:Object(x.jsx)(f,{})}),Object(x.jsx)(O.a,{path:"/side-pick",children:Object(x.jsx)(P,{})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};l.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(N,{})})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.d4baa517.chunk.js.map