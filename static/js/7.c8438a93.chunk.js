(this.webpackJsonpreactjsapptemplate=this.webpackJsonpreactjsapptemplate||[]).push([[7],{37:function(e,t,s){"use strict";s.r(t);var a=s(19),n=s(14),c=s(15),i=s(17),l=s(16),r=s(5),o=s(0),j=s(18),m=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={txtUserName:"",txtPassword:""},a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){console.log("SignCom",this.props)}},{key:"onTextChange",value:function(e){var t=e.target.name,s=e.target.value;this.setState(Object(a.a)({},t,s))}},{key:"handleLogin",value:function(){var e=this.state,t=e.txtUserName,s=e.txtPassword;console.log("handleLogin",t,s)}},{key:"render",value:function(){var e=this.state,t=e.txtUserName,s=e.txtPassword;return Object(r.jsx)("div",{className:"container-fluid login",children:Object(r.jsx)("div",{className:"wrap-login",children:Object(r.jsxs)("form",{action:"",method:"",className:"frm-login",children:[Object(r.jsx)("span",{className:"frm-login-title",children:"Sign In"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{className:"txtUsername",type:"text",name:"txtUserName",placeholder:"Username or email",value:t,onChange:this.onTextChange}),Object(r.jsx)("span",{className:"focus-input"})]}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{className:"txtPassword",type:"password",name:"txtPassword",placeholder:"Password",value:s,onChange:this.onTextChange}),Object(r.jsx)("span",{className:"focus-input"})]}),Object(r.jsx)("div",{className:"login-form-btn",children:Object(r.jsx)(j.b,{to:"/",className:"form-btn-submit",children:"Sign In"})}),Object(r.jsx)("div",{className:"txtorloginwith text-center ",children:Object(r.jsx)("span",{className:"txt",children:"Or login with"})}),Object(r.jsxs)("div",{className:"group-social",children:[Object(r.jsx)("a",{href:"#",className:"social-item",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})}),Object(r.jsx)("a",{href:"#",className:"social-item",children:Object(r.jsx)("img",{src:"/src/assets/images/icons/google.jpg",alt:""})})]}),Object(r.jsx)("div",{className:"text-center txtlink",children:Object(r.jsx)(j.b,{to:"Register",className:"txt",children:"Sign Up"})})]})})})}}]),s}(o.Component);t.default=m}}]);
//# sourceMappingURL=7.c8438a93.chunk.js.map