(this["webpackJsonpreact-ass2"]=this["webpackJsonpreact-ass2"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),s=(n(13),n(8)),d=n(2),j=n(3),u=n(5),h=n(4),l=(n(14),n(0));function b(t){return Object(l.jsx)("div",{className:"use",children:Object(l.jsxs)("h3",{className:"second",children:["Name :",t.item.name," | Department : ",t.item.department," | Rating : ",t.item.rating]})})}var o=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:this.props.entry.map((function(t){return Object(l.jsx)(b,{item:t},t.id)}))})})}}]),n}(a.Component),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={feedback:[],name:"",department:"",rating:""},t.updateName=function(e){var n=e.target.value;t.setState({name:n})},t.updateDepart=function(e){var n=e.target.value;console.log(n),t.setState({department:n})},t.updateRate=function(e){var n=e.target.value;t.setState({rating:n})},t.card=function(e){e.preventDefault();var n=Object(s.a)(t.state.feedback),a={id:n.length+1,name:t.state.name,department:t.state.department,rating:t.state.rating};n.push(a),t.setState({feedback:n,name:"",department:"",rating:""})},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"EMPLOYEE FEEDBACK FORM"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.updateName})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"department",children:"Department : "}),Object(l.jsx)("input",{type:"text",name:"depart",value:this.state.department,onChange:this.updateDepart})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"rating",children:"Rating : "}),Object(l.jsx)("input",{type:"number",name:"rate",value:this.state.rating,onChange:this.updateRate})]}),Object(l.jsx)("button",{onClick:this.card,children:"Submit"})]}),Object(l.jsx)("hr",{}),this.state.feedback.length>0&&Object(l.jsx)(o,{entry:this.state.feedback})]})}}]),n}(a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.9f953275.chunk.js.map