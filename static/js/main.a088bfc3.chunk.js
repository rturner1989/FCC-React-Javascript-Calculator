(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{28:function(n,t,e){},39:function(n,t){},40:function(n,t,e){"use strict";e.r(t);var c=e(2),r=e.n(c),u=e(20),i=e.n(u),l=(e(28),e(29),e(3)),o=e(7),a=e(22),s=e(1),d=function(n){var t=n.handleClick,e=n.handleNumbers,r=n.handleOperators,u=n.handleKeyPress,i=n.clearInput,l=n.calculate,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){o.current.focus()}),[]),Object(s.jsxs)("section",{id:"keypad",onKeyDown:u,children:[Object(s.jsx)("button",{id:"clear",ref:o,onClick:function(){return i()},children:"AC"}),Object(s.jsx)("button",{id:"backspace",value:"backspace",onClick:function(n){return t(n.target.value)},children:Object(s.jsx)(a.a,{})}),Object(s.jsx)("button",{id:"divide",onClick:function(n){return r(n.target.innerHTML)},children:"/"}),Object(s.jsx)("button",{id:"seven",onClick:function(n){return e(n.target.innerHTML)},children:"7"}),Object(s.jsx)("button",{id:"eight",onClick:function(n){return e(n.target.innerHTML)},children:"8"}),Object(s.jsx)("button",{id:"nine",onClick:function(n){return e(n.target.innerHTML)},children:"9"}),Object(s.jsx)("button",{id:"multiply",onClick:function(n){return r(n.target.innerHTML)},children:"*"}),Object(s.jsx)("button",{id:"four",onClick:function(n){return e(n.target.innerHTML)},children:"4"}),Object(s.jsx)("button",{id:"five",onClick:function(n){return e(n.target.innerHTML)},children:"5"}),Object(s.jsx)("button",{id:"six",onClick:function(n){return e(n.target.innerHTML)},children:"6"}),Object(s.jsx)("button",{id:"subtract",onClick:function(n){return r(n.target.innerHTML)},children:"-"}),Object(s.jsx)("button",{id:"one",onClick:function(n){return e(n.target.innerHTML)},children:"1"}),Object(s.jsx)("button",{id:"two",onClick:function(n){return e(n.target.innerHTML)},children:"2"}),Object(s.jsx)("button",{id:"three",onClick:function(n){return e(n.target.innerHTML)},children:"3"}),Object(s.jsx)("button",{id:"add",onClick:function(n){return r(n.target.innerHTML)},children:"+"}),Object(s.jsx)("button",{id:"zero",onClick:function(n){return e(n.target.innerHTML)},children:"0"}),Object(s.jsx)("button",{id:"decimal",onClick:function(n){return t(n.target.innerHTML)},children:"."}),Object(s.jsx)("button",{id:"equals",onClick:function(){return l()},children:"="}),Object(s.jsx)("button",{id:"up",value:"up",children:"up"})]})},b=function(n){var t=n.equationDisplay,e=n.calculatedResult;return Object(s.jsxs)("section",{className:"display",children:[Object(s.jsx)("h3",{id:"input",children:t}),Object(s.jsx)("h1",{id:"display",children:e})]})},j=e(42),f=function(){var n=Object(c.useState)(""),t=Object(o.a)(n,2),e=t[0],r=t[1],u=Object(c.useState)("0"),i=Object(o.a)(u,2),a=i[0],f=i[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),k=O[0],x=O[1],p=Object(c.useState)(null),g=Object(o.a)(p,2),C=g[0],v=g[1],y=Object(c.useState)(null),M=Object(o.a)(y,2),H=M[0],L=M[1],T=new RegExp(/[-,+,*,\/]/),D=new RegExp(/[0-9]/),m=function(){r((function(n){return n.substr(0,n.length-1)})),f((function(n){return n.substr(0,n.length-1)}))};Object(c.useEffect)((function(){v(k.length-1)}),[k]);var w=function(n){null!==H&&(L(null),f(""),r("")),1===a.length&&"0"===a.charAt(0)?f(n):f((function(t){return t+n})),T.test(a)&&f(n),r((function(t){return t+n}))},S=function(n){null!==H?(r("".concat(H).concat(n)),L(null)):"-"===n?r((function(t){return t+n})):T.test(a)?r("-"===a?function(t){return t.substr(0,t.length-2)+n}:function(t){return t.substr(0,t.length-1)+n}):r((function(t){return t+n})),f(n)},E=function(){if(null===H){var n=j.a(e);f(n),r((function(t){return t+"=".concat(n)})),L(n),x((function(n){return[].concat(Object(l.a)(n),[e])})),console.log(e)}},R=function(){r(""),f("0")};return Object(s.jsxs)("div",{id:"calculator",children:[Object(s.jsx)(b,{equationDisplay:e,calculatedResult:a}),Object(s.jsx)(d,{handleClick:function(n){"."===n&&(a.includes(n)||(r((function(t){return t+n})),f((function(t){return t+n})))),"backspace"===n&&m()},handleNumbers:w,handleOperators:S,handleKeyPress:function(n){D.test(n.key)?(n.preventDefault(),w(n.key)):T.test(n.key)?(n.preventDefault(),S(n.key)):8===n.keyCode?(n.preventDefault(),m()):13===n.keyCode?(n.preventDefault(),E()):46===n.keyCode?(n.preventDefault(),R()):38===n.keyCode?(n.preventDefault(),null!==C&&C>=0&&(R(),L(null),r(k[C]),v(C-1))):40===n.keyCode&&(n.preventDefault(),null!==C&&C<=k.length&&(R(),L(null),r(k[C+2]),v(C+1)))},clearInput:R,calculate:E})]})};var h=function(){return Object(s.jsx)("main",{children:Object(s.jsx)(f,{})})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a088bfc3.chunk.js.map