import n from"react";import e from"styled-components";function r(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var t,a,o,l,i,d,s,p=e.div(t||(t=r(["\n  display: block;\n  font-family: Arial, Helvetica sans-serif;\n"],["\n  display: block;\n  font-family: Arial, Helvetica sans-serif;\n"]))),c=e.div(a||(a=r(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"],["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"]))),u=e.div(o||(o=r(["\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 20px 0 10px;\n"],["\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 20px 0 10px;\n"]))),f=e.button(l||(l=r(["\n  background-color: #0db09b;\n  color: #fff;\n  font-size: 1em;\n  margin: 1em 0;\n  padding: 0.5em 1em;\n  border: 2px solid #0db09b;\n  border-radius: 3px;\n"],["\n  background-color: #0db09b;\n  color: #fff;\n  font-size: 1em;\n  margin: 1em 0;\n  padding: 0.5em 1em;\n  border: 2px solid #0db09b;\n  border-radius: 3px;\n"]))),m=e(c)(i||(i=r(["\n  border: solid #f4d2d2 2px;\n  color: red;\n  padding: 5px 10px;\n"],["\n  border: solid #f4d2d2 2px;\n  color: red;\n  padding: 5px 10px;\n"]))),b=e.label(d||(d=r(["\n  margin-bottom: 5px;\n"],["\n  margin-bottom: 5px;\n"]))),v=e.input(s||(s=r(["\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  height: 40px;\n  padding: 2px 10px;\n"],["\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  height: 40px;\n  padding: 2px 10px;\n"]))),x=[{label:"6 or more characters",id:1,validator:function(n){return n.length>=6}},{label:"At least 1 number",id:2,validator:function(n){return n.split("").filter((function(n){return Number.isInteger(parseInt(n))})).length>0}},{label:"At least 1 uppercase char",id:3,validator:function(n){return n.replace(/[^a-z]/gim,"").split("").filter((function(n){return n.toUpperCase()===n})).length>0}},{label:"At least 1 lowercase char",id:4,validator:function(n){return n.split("").filter((function(n){return n.toLowerCase()===n})).length>0}},{label:"At least 1 special character (!@#$%^&*()_-+={[}]|:;\"'<,>.)",id:5,validator:function(n){return n.split("").filter((function(n){return-1!=="!@#$%^&*()_-+={[}]|:;\"'<,>.".indexOf(n)})).length>0}},{label:"To match password confirm",id:6,validatorConfirm:function(n,e){return!!n&&n===e}}];var g=function(e){var r=e.label,t=void 0===r?"Enter password":r,a=e.label_confirm,o=void 0===a?"Confirm password":a,l=e.onValidate,i=void 0===l?function(n,e){}:l,d=e.autorun,s=void 0!==d&&d,g=n.useState(""),w=g[0],h=g[1],y=n.useState(""),E=y[0],k=y[1],C=n.useState(null),A=C[0],z=C[1],I=function(n){var e,r,t=n.currentTarget;if("password-confirm"===t.name)k(t.value),r=t.value;else h(t.value),e=t.value;if(s){var a=O({password:e||w,passwordConfirm:r||E});i(a,e||w)}},O=function(n){var e=n.password,r=n.passwordConfirm;z([]);var t=function(n,e){return void 0===n&&(n=""),void 0===e&&(e=""),x.filter((function(r){return"function"==typeof r.validatorConfirm?!1===r.validatorConfirm(n,e):"function"==typeof r.validator&&!1===r.validator(n)})).map((function(n){return{id:n.id,label:n.label}}))}(e,r);return z(t),0===Object.keys(t).length};return n.createElement(p,null,n.createElement(c,null,n.createElement(b,{htmlFor:"password"},t),n.createElement(v,{id:"password","data-testid":"test-password",name:"password",type:"password",placeholder:"".concat(t,"..."),onInput:I,value:w})),n.createElement(c,null,n.createElement(b,{htmlFor:"password-confirm"},o),n.createElement(v,{id:"password-confirm","data-testid":"test-password-confirm",name:"password-confirm",type:"password",placeholder:"".concat(o,"..."),onInput:I,value:E})),n.createElement(p,null,A&&0===A.length?n.createElement(u,null,"Your password entry is valid"):null,A&&A.length?n.createElement(u,null,"Please check your password entry. Password needs:"):null,A&&A.map((function(e){return n.createElement(m,{key:e.id},e.label)}))),n.createElement(p,null,n.createElement(f,{onClick:function(){var n=O({password:w,passwordConfirm:E});i(n,w)}},"Validate")))};export{g as PasswordField};
//# sourceMappingURL=index.js.map
