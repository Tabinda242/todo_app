(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),s=n.n(a),c=n(4),d=n.n(c),i=(n(15),n(3)),r=n(7),u=n(5),j=n(6),l=n(9),b=n(8),h=(n(16),function(t){var e=t.onInputChange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{className:"addItem",children:"Add An Item"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",onChange:e,placeholder:"    Enter an Item name",size:"40",className:"input"})]})}),p=(n(17),function(t){var e=t.addItem;return Object(o.jsx)("button",{onClick:e,className:"addItem-btn",children:"Add Item"})}),m=(n(18),function(t){var e=t.todos,n=t.deleteTodo,a=t.EditTodo;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{children:e.map((function(t,e){return Object(o.jsxs)("li",{id:e,className:"items",children:[t,Object(o.jsx)("button",{onClick:function(){return n(e)},id:e,className:"delete-btn",children:"Delete"},e),Object(o.jsx)("button",{type:"text",onClick:function(){return a(e)},id:e,className:"edit-btn",children:"Edit"},e)]},e)}))})})}),O=n(22),f=(n(19),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).onInputChange=function(e){t.setState({input:e.target.value})},t.addItem=function(){var e;t.state.todos.length;if(""!==t.state.input){var n=Object(r.a)(t.state.todos);n.push(t.state.input),t.setState((e={todos:""},Object(i.a)(e,"todos",n),Object(i.a)(e,"input",""),e))}},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t,n){return e!==n}));t.setState({todos:n})},t.EditTodo=function(e){var n=prompt("Let make something change");console.log(n);var o=t.state.todos.map((function(t,o){return e===o?n:t}));t.setState({todos:o})},t.state={todos:[],input:"",todo:"",id:Object(O.a)()},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"heading",children:"ToDo App"}),Object(o.jsx)(h,{onInputChange:this.onInputChange}),Object(o.jsx)("br",{}),Object(o.jsx)(p,{addItem:this.addItem}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{todos:this.state.todos,deleteTodo:this.deleteTodo,EditTodo:this.EditTodo})]})}}]),n}(s.a.Component));d.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1a8750a3.chunk.js.map