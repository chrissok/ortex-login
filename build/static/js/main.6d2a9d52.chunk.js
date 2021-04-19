(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),s=n(9),c=n(7),A={container:Object(c.a)({display:"flex",flexDirection:"column",padding:"30px",border:"solid",borderColor:"#00b4d8",borderRadius:"5px",borderWidth:"1px",height:"50%",width:"50%",backgroundColor:"#222a36",$nest:{"@media screen and (max-width: 700px)":{width:"75%"}}}),title:Object(c.a)({fontFamily:"Antonio , sans-serif",alignSelf:"center",fontSize:"60px",letterSpacing:"20px",color:"#ffffff",$nest:{"@media screen and (max-width: 700px)":{fontSize:"40px"}}}),form:Object(c.a)({display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"}),inputContainer:Object(c.a)({marginTop:"30px",display:"flex",flexDirection:"column"}),input:Object(c.a)({fontFamily:"PT Sans Narrow, sans-serif",paddingLeft:"10px",borderRadius:"5px",fontSize:"15px",color:"#ffffff",marginTop:"30px",height:"40px",backgroundColor:"#253244",borderTopStyle:"hidden",borderRightStyle:"hidden",borderLeftStyle:"hidden",borderBottomStyle:"hidden",$nest:{"&::placeholder":{color:"#bababa"},"@media screen and (max-width: 700px)":{marginTop:"10px",fontSize:"14px",height:"20px",padding:"5px"}}}),submit:Object(c.a)({marginTop:"40px",height:"50px",width:"100%",padding:"10px 15px 50px",fontFamily:"PT Sans Narrow, sans-serif",borderRadius:"5px",fontSize:"30px",color:"#ffffff",alignSelf:"center",backgroundColor:"#2299b1",borderTopStyle:"hidden",borderRightStyle:"hidden",borderLeftStyle:"hidden",borderBottomStyle:"hidden",$nest:{"&:hover":{backgroundColor:"#111824",color:"#bfcba8",transition:"0.3s"},"@media screen and (max-width: 700px)":{marginTop:"10px",fontSize:"20px",height:"50px",padding:"5px"}}}),footer:Object(c.a)({marginTop:"15px",fontFamily:"PT Sans Narrow, sans-serif",color:"#bababa",alignSelf:"center",$nest:{"&:hover":{textDecoration:"underline"}}}),invalidCredentials:Object(c.a)({fontFamily:"PT Sans Narrow, sans-serif",color:"#d10d0d",alignSelf:"center",position:"absolute"})},d=n(28),l=n.n(d),p=n(12),f=n(18),b=n(13),j={formContainer:Object(c.a)({padding:"10px"})},h=n(4);function x(e){var t=e.showModal,n=e.handleCloseModal;return Object(h.jsxs)(p.a,{show:t,onHide:n,children:[Object(h.jsx)(p.a.Header,{closeButton:!0,children:Object(h.jsx)(p.a.Title,{children:"Account Recovery"})}),Object(h.jsx)(p.a.Body,{children:"Please enter your account Email, we will send a link to reset your password"}),Object(h.jsx)("div",{className:j.formContainer,children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(b.a.Label,{children:"Email address"}),Object(h.jsx)(b.a.Control,{type:"email",placeholder:"Enter email"}),Object(h.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(h.jsxs)(p.a.Footer,{children:[Object(h.jsx)(f.a,{variant:"secondary",onClick:n,children:"Close"}),Object(h.jsx)(f.a,{variant:"primary",onClick:n,children:"Send"})]})]})}function u(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),c=o[0],d=o[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:A.container,children:[Object(h.jsx)("div",{className:A.title,children:"ORTEX"}),Object(h.jsxs)("form",{className:A.form,onSubmit:function(e){e.preventDefault();var t=e.target.username.value,n=e.target.password.value;if(function(e,t){return""===e||""===t}(t,n))r(!0);else{r(!1);var a={username:t,password:n};l.a.post("/login",{userCredentials:a})}},children:[Object(h.jsx)("div",{children:n&&Object(h.jsx)("div",{className:A.invalidCredentials,children:"Please enter valid username and password"})}),Object(h.jsxs)("div",{className:A.inputContainer,children:[Object(h.jsx)("input",{className:A.input,type:"text",placeholder:"Enter Username",name:"username"}),Object(h.jsx)("input",{className:A.input,type:"password",placeholder:"Enter Password",name:"password"})]}),Object(h.jsx)("input",{className:A.submit,type:"submit",value:"LOG IN"})]}),Object(h.jsx)("div",{className:A.footer,onClick:function(){return d(!0)},children:"\xbfForgot your password?"})]}),Object(h.jsx)(x,{handleCloseModal:function(){return d(!1)},showModal:c})]})}var m={container:Object(c.a)({backgroundColor:"#141a23",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"})},g=(n(56),n(57),n(29)),O=n.n(g),w={container:Object(c.a)({marginTop:"30px"}),dateTime:Object(c.a)({marginTop:"15px",color:"#ffffffff"}),eurUsdExchange:Object(c.a)({color:"#ffffffff"}),price:Object(c.a)({color:"#07a31e"})};function C(){var e=new WebSocket("ws://stream.tradingeconomics.com/?client=guest:guest"),t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),A=c[0],d=c[1],l=Object(a.useState)(!0),p=Object(s.a)(l,2),f=p[0],b=p[1];return Object(a.useEffect)((function(){e.onopen=function(t){e.send('{"topic": "subscribe", "to": "EURUSD:CUR"}')},e.onmessage=function(e){var t=JSON.parse(e.data);(function(e){return"keepalive"===e.topic})(t)||(b(!1),d(t.dt),i(t.price))},e.onerror=function(e){console.log("error"+e)}})),Object(h.jsxs)("div",{className:w.container,children:[f&&Object(h.jsx)("img",{alt:"spinner",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r&&Object(h.jsx)("div",{className:w.eurUsdExchange,children:" EUR/USD "}),r&&Object(h.jsxs)("div",{className:w.price,children:[" ",r," "]}),A&&Object(h.jsxs)("div",{className:w.dateTime,children:[" ",O()(A).format("LLL")," "]})]})}var S=function(){return Object(h.jsxs)("div",{className:m.container,children:[Object(h.jsx)(u,{}),Object(h.jsx)(C,{})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6d2a9d52.chunk.js.map