(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{58:function(e,t,n){},68:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var u=n(12),a=n.n(u),l=n(37),c=n.n(l),i=(n(58),n(52)),r=n(13),s=[{id:"clear",value:"AC",display:"AC"},{id:"backspace",value:"backspace",display:Object(r.jsx)(i.a,{"aria-hidden":!0,focusable:!1})},{id:"divide",value:"/",display:"/"},{id:"seven",value:"7",display:"7"},{id:"eight",value:"8",display:"8"},{id:"nine",value:"9",display:"9"},{id:"multiply",value:"*",display:"*"},{id:"four",value:"4",display:"4"},{id:"five",value:"5",display:"5"},{id:"six",value:"6",display:"6"},{id:"subtract",value:"-",display:"-"},{id:"one",value:"1",display:"1"},{id:"two",value:"2",display:"2"},{id:"three",value:"3",display:"3"},{id:"add",value:"+",display:"+"},{id:"zero",value:"0",display:"0"},{id:"decimal",value:".",display:"."},{id:"equals",value:"=",display:"="},{id:"up",value:"up",display:"up"}],d=n(17),o=n(22),p=n(2),f=n(72),v=a.a.createContext(),j=function(e){var t=e.children,n=Object(u.useState)(""),a=Object(o.a)(n,2),l=a[0],c=a[1],i=Object(u.useState)("0"),s=Object(o.a)(i,2),j=s[0],b=s[1],y=Object(u.useState)([]),h=Object(o.a)(y,2),O=h[0],k=h[1],x=Object(u.useState)(null),g=Object(o.a)(x,2),D=g[0],m=g[1],w=Object(u.useState)(null),A=Object(o.a)(w,2),C=A[0],E=A[1],S=new RegExp(/[-,+,*,\/]/),R=new RegExp(/[0-9]/),q=function(){c((function(e){return e.substr(0,e.length-1)})),b((function(e){return e.substr(0,e.length-1)}))},P=function(e){null!==C&&(E(null),b(""),c("")),1===j.length&&"0"===j.charAt(0)?b(e):b((function(t){return t+e})),S.test(j)&&b(e),c((function(t){return t+e}))},B=function(e){var t=l.charAt(l.length-1),n=l.charAt(l.length-2);""===l&&"-"!==e||1===l.length&&S.test(l.charAt(0))||(null!==C?(c("".concat(C).concat(e)),E(null)):S.test(t)?"-"===e&&R.test(n)?c((function(t){return t+e})):S.test(n)?c((function(t){return t.substr(0,t.length-2)+e})):c((function(t){return t.substr(0,t.length-1)+e})):c((function(t){return t+e})),b(e))},I=function(){j.includes(".")||(l||c("0"),c((function(e){return e+"."})),b((function(e){return e+"."})))},J=function(){if(null===C)try{var e=p.Ye(f.a(l));b(e),c((function(t){return t+"=".concat(e)})),E(e),k((function(e){return[].concat(Object(d.a)(e),[l])}))}catch(t){console.log(t)}},K=function(){c(""),b("0")};return Object(u.useEffect)((function(){m(O.length-1)}),[O]),Object(r.jsx)(v.Provider,{value:{handleClick:function(e){"."===e&&I(),"backspace"===e&&q(),"="===e&&J(),"AC"===e&&K(),S.test(e)&&B(e),R.test(e)&&P(e)},handleNumbers:P,handleOperators:B,handleKeyPress:function(e){R.test(e.key)?(e.preventDefault(),P(e.key)):S.test(e.key)?(e.preventDefault(),B(e.key)):"Backspace"===e.key?(e.preventDefault(),q()):"Enter"===e.key?(e.preventDefault(),J()):"Delete"===e.key?(e.preventDefault(),K()):"ArrowUp"===e.key?(e.preventDefault(),null!==D&&D>=0&&(K(),E(null),c(O[D]),D>0&&m(D-1))):"ArrowDown"===e.key?(e.preventDefault(),null!==D&&D<O.length-1&&(K(),E(null),c(O[D+1]),m(D+1))):"."===e.key&&(e.preventDefault(),I())},clearInput:K,calculate:J,equationDisplay:l,calculatedResult:j},children:t})},b=function(){return Object(u.useContext)(v)},y=function(){var e=b(),t=e.handleClick,n=e.handleKeyPress;return Object(u.useEffect)((function(){return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[n]),Object(r.jsx)("section",{id:"keypad",children:s.map((function(e){var n=e.id,u=e.value,a=e.display;return Object(r.jsx)("button",{id:n,onClick:function(){return t(u)},children:a},n)}))})},h=function(){var e=b(),t=e.equationDisplay,n=e.calculatedResult;return Object(r.jsxs)("section",{className:"display",children:[Object(r.jsx)("h3",{id:"input",children:t}),Object(r.jsx)("h1",{id:"display",children:n})]})},O=function(){return Object(r.jsxs)("div",{id:"calculator",children:[Object(r.jsx)(h,{}),Object(r.jsx)(y,{})]})};var k=function(){return Object(r.jsx)("main",{children:Object(r.jsx)(O,{})})};n(69);c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j,{children:Object(r.jsx)(k,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e3ae5ead.chunk.js.map