(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"Filter_title__vqn6T",input:"Filter_input__FWRJJ","modal-form-icon":"Filter_modal-form-icon__2U5np"}},2:function(t,e,n){t.exports={input:"ContactForm_input__2JJOF","modal-form-icon":"ContactForm_modal-form-icon__J1Z7q",title:"ContactForm_title__1AjuH",text:"ContactForm_text__kmHHP",button:"ContactForm_button__1bbyu"}},20:function(t,e,n){},29:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__1hcxz",text:"ContactList_text__2FWwC",text_d:"ContactList_text_d__1xOH9",item:"ContactList_item__2ZYw3",button:"ContactList_button__1wXdC"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(12),r=n.n(i),s=(n(20),n(13)),o=n(15),l=n(6),u=n(7),d=n(9),m=n(8),b=n(14),h=n.n(b),j=(n(29),n(5)),p=n(2),f=n.n(p),x=n(0),_=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handelChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handelSubmit=function(e){e.preventDefault(),t.props.handlelAddContact(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.handelSubmit,e=this.handelChange,n=this.state,a=n.name,c=n.number;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("h1",{className:f.a.title,children:"Phonebook "}),Object(x.jsxs)("label",{className:f.a.label,children:[Object(x.jsx)("p",{className:f.a.text,children:"Name"}),Object(x.jsx)("input",{type:"text",className:f.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e,value:a})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("p",{className:f.a.text,children:"Number"}),Object(x.jsx)("input",{type:"tel",className:f.a.input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:e,value:c})]}),Object(x.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=_,C=n(3),v=n.n(C);var g=function(t){var e=t.contacts,n=t.deliteContact;return Object(x.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:v.a.text,children:["Name: ",Object(x.jsx)("span",{className:v.a.text_d,children:t.name})]}),Object(x.jsxs)("p",{className:v.a.text,children:["Number: ",Object(x.jsx)("span",{className:v.a.text_d,children:t.number})]})]}),Object(x.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})},N=n(11),y=n.n(N);var F=function(t){var e=t.filter,n=t.handelChangeFilter;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:y.a.title,children:"Find contacts by name"}),Object(x.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:e,onChange:n})]})};var A=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())}))},S=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handlelAddContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[Object(s.a)({id:h.a.generate()},e)])}}))},t.deliteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t.handelChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:null!==t&&void 0!==t?t:this.state.contacts})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(O,{handlelAddContact:this.handlelAddContact}),Object(x.jsx)(F,{filter:this.state.filter,handelChangeFilter:this.handelChangeFilter}),Object(x.jsx)(g,{contacts:A(this.state.contacts,this.state.filter),deliteContact:this.deliteContact})]})}}]),n}(a.Component),k=S;r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.05b6fdc8.chunk.js.map