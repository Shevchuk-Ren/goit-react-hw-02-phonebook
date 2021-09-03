(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,d,l,b,s,u,j,p=t(1),h=t.n(p),x=t(9),m=t.n(x),g=(t(19),t(12)),f=t(4),O=t(5),v=t(7),C=t(6),y=t(25),k=t(2),w=t(3),A=w.a.h2(r||(r=Object(k.a)(["\ncolor: rgb(61, 57, 57);\n"]))),S=t(0),z=function(e){var n=e.title,t=e.children;return Object(S.jsxs)("section",{children:[n&&Object(S.jsx)(A,{children:n}),t]})},F=t(11),Z=w.a.form(a||(a=Object(k.a)(["\n   border: 1px solid rgb(61, 57, 57);\n   width: 300px;\n   padding: 10px;\n   background-color: rgba(84, 81, 81, 0.353);\n"]))),B=w.a.label(c||(c=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  color: rgb(241, 239, 235);\n"]))),D=w.a.input(o||(o=Object(k.a)(["\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='text'],\n  &[type='tel'] {\n  background-color: inherit;\n  border: 1px solid rgb(76, 74, 74);\n  color: aliceblue;\n}\n  &[type='text']:focus {\n  background-color: rgb(61, 57, 57);\n}\n"]))),I=w.a.button(i||(i=Object(k.a)(["\n  width: fit-content;\n  padding: 3px 5px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),J=function(e){Object(v.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={name:"",number:""},e.handleSubmitForm=function(n){n.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.handleInputChange=function(n){e.setState(Object(F.a)({},n.currentTarget.name,n.currentTarget.value))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(O.a)(t,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.number,r=Object(y.a)(),a=Object(y.a)();return Object(S.jsxs)(Z,{onSubmit:this.handleSubmitForm,children:[Object(S.jsxs)(B,{htmlFor:r,children:["Name",Object(S.jsx)(D,{id:r,type:"text",value:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),Object(S.jsxs)(B,{htmlFor:a,children:["Number",Object(S.jsx)(D,{id:a,type:"tel",name:"number",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(S.jsx)(I,{type:"submit",onClick:this.addNameFhoneBook,children:"Add contact"})]})}}]),t}(h.a.Component),q=w.a.ul(d||(d=Object(k.a)(["\n   width: 300px;\n  padding: 10px;\n"]))),L=w.a.li(l||(l=Object(k.a)(["\n   display: flex;\n  justify-content: space-between;\n  padding: 5px;\n  border: 1px solid rgb(61, 57, 57);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),M=w.a.button(b||(b=Object(k.a)(["\n  width: 50px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),N=function(e){var n=e.contacts,t=e.onDelete;return Object(S.jsx)(q,{children:n.map((function(e){var n=e.name,r=e.number,a=e.id;return Object(S.jsxs)(L,{children:[Object(S.jsxs)("span",{children:[n," : "]}),Object(S.jsx)("span",{children:r}),Object(S.jsx)(M,{onClick:function(){return t(a)},children:"Delete"})]},a)}))})},T=w.a.label(s||(s=Object(k.a)(["\n  width: 300px;\n  display: flex;\n  justify-content: flex-end;\n  border: 1px solid rgb(61, 57, 57);\n  padding: 10px;\n  color: rgb(241, 239, 235);\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),E=w.a.input(u||(u=Object(k.a)(["\n\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='text'],\n  &[type='tel'] {\n  background-color: inherit;\n  border: 1px solid rgb(76, 74, 74);\n  color: aliceblue;\n}\n"]))),$=function(e){var n=e.filter,t=e.onChange;return Object(S.jsxs)(T,{children:["Find contacts by name",Object(S.jsx)(E,{type:"text",value:n,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:t})]})},H=w.a.div(j||(j=Object(k.a)(["\n   background-color: rgba(39, 36, 36, 0.394);\n  padding: 15px;\n  width: fit-content;\n  border-radius: 6px;\n"]))),K=function(e){var n=e.children;return Object(S.jsx)(H,{children:n})},P=function(e){Object(v.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={filter:"",contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]},e.filterContacts=function(n){e.setState({filter:n.currentTarget.value})},e.formSubmithanler=function(n){n.id=Object(y.a)();var t=e.state.contacts.filter((function(e){return e.name.includes(n.name)}));1!==t.length?e.setState((function(e){return{contacts:[].concat(Object(g.a)(e.contacts),[n])}})):alert("".concat(t.name," is alredy in contacts."))},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e.visibleContact=function(){var n=e.state,t=n.contacts,r=n.filter;return t.filter((function(e){return e.name.toLocaleLowerCase().includes(r.toLowerCase())}))},e}return Object(O.a)(t,[{key:"render",value:function(){var e=this.state.filter,n=this.visibleContact();return Object(S.jsxs)(K,{children:[Object(S.jsx)(z,{title:"Phonebook",children:Object(S.jsx)(J,{onSubmit:this.formSubmithanler})}),Object(S.jsxs)(z,{title:"Contacts",children:[Object(S.jsx)($,{onChange:this.filterContacts,filter:e}),Object(S.jsx)(N,{contacts:n,onDelete:this.deleteContact})]})]})}}]),t}(h.a.Component);m.a.render(Object(S.jsx)(h.a.StrictMode,{children:Object(S.jsx)(P,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bbb1dacb.chunk.js.map