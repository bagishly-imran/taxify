(this.webpackJsonptaxy=this.webpackJsonptaxy||[]).push([[0],{23:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(12),s=t.n(c),l=(t(23),t(2)),n=t(6),i=t(1);var o=function(){return Object(i.jsx)("div",{className:"bg-light bg-gradient",children:Object(i.jsxs)("div",{className:"navbar justify-content-center container",children:[Object(i.jsx)(n.b,{to:"/taxify/",className:"btn btn-outline-secondary m-1",children:"\u018fsas S\u0259hif\u0259"}),Object(i.jsx)(n.b,{to:"/customers",className:"btn btn-outline-secondary m-1",children:"M\xfc\u015ft\u0259ri se\xe7"}),Object(i.jsx)(n.b,{to:"/drivers",className:"btn btn-outline-secondary m-1",children:"S\xfcr\xfcc\xfc se\xe7"}),Object(i.jsx)(n.b,{to:"/add",className:"btn btn-outline-secondary m-1",children:"\u018flav\u0259 et"})]})})},m=t(13),j=t(3),d=t(7),b=t(8),u=t(31);var h=function(){var e=Object(b.b)(),a=Object(l.f)(),t=Object(r.useState)({id:u(),name:"",where_from:"",where:"",category:"",hour:"",price:0,tel:""}),c=Object(d.a)(t,2),s=c[0],n=c[1],o=function(e){n(Object(j.a)(Object(j.a)({},s),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("form",{className:"form m-2",onSubmit:function(t){t.preventDefault(),"1"==s.category&&(e(function(e){return function(a){try{a({type:"ADD_DRIVERS",payload:e})}catch(t){a({type:"ADD_DRIVERS_ERROR"})}}}(s)),a("/drivers")),"2"==s.category&&(e(function(e){return function(a){try{a({type:"ADD_CUSTOMERS",payload:e})}catch(t){a({type:"ADD_CUSTOMERS_ERROR"})}}}(s)),a("/customers"))},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Ad\u0131n\u0131z"}),Object(i.jsx)("input",{type:"text",name:"name",value:s.name,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ad\u0131n\u0131z..."})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Haradan?"}),Object(i.jsx)("input",{type:"text",name:"where_from",value:s.where_from,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Haradan ged\u0259c\u0259ksiz?"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Haraya?"}),Object(i.jsx)("input",{type:"text",name:"where",value:s.where,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Ged\u0259c\u0259yiniz yeri qeyd edin..."})]}),Object(i.jsxs)("select",{className:"form-select mb-3",name:"category",defaultValue:0,value:s.category,onChange:o,"aria-label":"Default select example",children:[Object(i.jsx)("option",{children:"Kateqorian\u0131 se\xe7"}),Object(i.jsx)("option",{value:1,children:"S\xfcr\xfcc\xfc"}),Object(i.jsx)("option",{value:2,children:"M\xfc\u015ft\u0259ri"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Qiymet"}),Object(i.jsx)("input",{type:"number",name:"price",value:s.price,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Qiymet..."})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"\xc7\u0131x\u0131\u015f saat\u0131"}),Object(i.jsx)("input",{type:"time",name:"hour",value:s.hour,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\xc7\u0131x\u0131\u015f vaxt\u0131..."})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"\u018flaq\u0259 n\xf6mr\u0259si"}),Object(i.jsx)("input",{type:"tel",name:"tel",value:s.tel,onChange:o,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"505110003"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-success d-block w-100",children:"\u018flav\u0259 et"})]})};var x=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(h,{})})};var O=function(e){var a=e.user;return Object(i.jsxs)("div",{className:"card user-card",children:[Object(i.jsxs)("h5",{className:"card-header",children:[a.where_from," \u2192 ",a.where]}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h5",{className:"card-title m-0",children:["Qiymet: ",a.price," \u20bc"]}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h6",{className:"card-text",children:["1"==a.category?"S\xfcr\xfcc\xfc:":"M\xfc\u015ft\u0259ri"," ",a.name]}),Object(i.jsxs)("h6",{className:"card-text",children:["\xc7\u0131x\u0131\u015f saat\u0131: ",a.hour]})]}),Object(i.jsx)("a",{href:"tel:994".concat(a.tel),className:"btn btn-outline-success d-block",children:"Elaqe"})]})]},a.id)};var p=function(){var e=Object(b.c)((function(e){return e.customers.customers})).reverse();return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"card-title text-center",children:"M\xfc\u015ft\u0259ril\u0259r"}),Object(i.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:e.reverse().map((function(e){return Object(i.jsx)(O,{user:e},e.id)}))})]})};var v=function(){var e=Object(b.c)((function(e){return e.drivers.drivers})).reverse();return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"card-title text-center",children:"S\xfcr\xfcc\xfcl\u0259r"}),Object(i.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:e.map((function(e){return Object(i.jsx)(O,{user:e},e.id)}))})]})};var f=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{}),Object(i.jsx)(p,{})]})};var y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(l.a,{path:"/taxify/",exact:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(l.a,{path:"/customers",exact:!0,element:Object(i.jsx)(p,{})}),Object(i.jsx)(l.a,{path:"/drivers",exact:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(l.a,{path:"/add",exact:!0,element:Object(i.jsx)(x,{})})]})]})},N=t(11),E=t(14),R={customers:[{id:"1",name:"Hakim",where_from:"\u015eu\u015fa",where:"Masalli",hour:"17:00",price:25,tel:"505110003",category:2},{id:"2",name:"Nadir",where_from:"Bak\u0131",where:"Masalli",hour:"18:30",price:15,tel:"505110003",category:2},{id:"3",name:"Eli",where_from:"Gence",where:"Baki",hour:"06:30",price:10,tel:"505110003",category:2}],error:""},g={drivers:[{id:1,name:"Imran",where_from:"Bak\u0131",where:"\u015eu\u015fa",hour:"17:00",price:45,tel:"505110003",category:"1"},{id:2,name:"Isaxan",where_from:"Bak\u0131",where:"Masalli",hour:"18:30",price:20,tel:"505110003",category:"1"},{id:3,name:"Ayxan",where_from:"Gedebey",where:"Baki",hour:"06:30",price:15,tel:"505110003",category:"1"}],error:""},_=Object(N.b)({customers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CUSTOMERS":return Object(j.a)(Object(j.a)({},e),{},{customers:a.payload,error:""});case"ADD_CUSTOMERS":return Object(j.a)(Object(j.a)({},e),{},{customers:[].concat(Object(E.a)(e.customers),[a.payload]),error:""});case"GET_CUSTOMERS_ERROR":case"ADD_CUSTOMERS_ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:"Yuklenme error"});default:return e}},drivers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_DRIVERS":return Object(j.a)(Object(j.a)({},e),{},{drivers:a.payload,error:""});case"ADD_DRIVERS":return Object(j.a)(Object(j.a)({},e),{},{drivers:[].concat(Object(E.a)(e.drivers),[a.payload]),error:""});case"GET_DRIVERS_ERROR":case"ADD_DRIVERS_ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:"Yuklenme error"});default:return e}}}),w=t(18),S=Object(N.c)(_,Object(N.a)(w.a));s.a.render(Object(i.jsx)(b.a,{store:S,children:Object(i.jsx)(n.a,{children:Object(i.jsx)(y,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4572c335.chunk.js.map