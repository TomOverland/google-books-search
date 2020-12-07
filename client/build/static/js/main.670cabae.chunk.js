(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(29),r=n.n(o),i=(n(37),n(13)),l=n(2);var d=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Google Books"}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link",children:"Saved"})})]})]})})};var h=function(){return Object(a.jsx)("div",{className:"jumbotron text-center",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{children:"Google Books Search"})})})},u=n(31);var j=function(e){return Object(a.jsx)("main",Object(u.a)({className:"wrapper"},e))},b=n(16),v=n(9),m=n(10),f=n(12),O=n(11);var x=function(e){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"search",children:Object(a.jsx)("h2",{children:"Search for Books"})}),Object(a.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"formControl",placeholder:"Search",id:"search"}),Object(a.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-default mt-3 mb-5",children:"Search"})]})})})},p=n(15),k=n.n(p),g=function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},N=function(e){return k.a.delete("api/books/".concat(e)).then((function(e){return e.data}))},B=function(e){return k.a.post("/api/books",e).then((function(e){return e.data}))},S=function(){return k.a.get("/api/books").then((function(e){return e.data}))},w=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={savedBooks:[]},e.handleSave=function(t){e.state.savedBooks.map((function(e){return e._id})).includes(t._id)?N(t._id).then((function(t){e.setState({savedBooks:e.state.savedBooks.filter((function(e){return e._id!==t._id}))})})).catch((function(e){console.log(e)})):B(t).then((function(t){return e.setState({savedBooks:e.state.savedBooks.concat([t])})})).catch((function(e){console.log(e)}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){e.setState({savedBooks:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:this.props.books.length?Object(a.jsx)("div",{children:this.props.books.map((function(t){return Object(a.jsx)("div",{className:"card mb-2",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-2",children:Object(a.jsx)("img",{className:"img-fluid",src:t.image,alt:t.title})}),Object(a.jsx)("div",{className:"col-md-10",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h4",{className:"card-title",children:[t.title," by ",t.authors]}),Object(a.jsx)("p",{className:"card-text",children:t.description}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3",target:"_blank",rel:"noreferrer",children:"View"}),Object(a.jsx)("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-warning mt-3 ml-3",children:e.state.savedBooks.map((function(e){return e._id})).includes(t._id)?"Unsave":"Save"})]})]})})]})},t._id)}))}):Object(a.jsx)("h1",{className:"text-center",children:"No Results Found"})})}}]),n}(s.a.Component),y=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={value:"",books:[]},e.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},e.searchBook=function(t){g(t).then((function(t){return e.setState({books:t.data.items.map((function(t){return e.makeBook(t)}))})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(b.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBook(e.state.search)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.searchBook()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Results"}),Object(a.jsx)(w,{books:this.state.books})]})]})}}]),n}(s.a.Component),C=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={savedBooks:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){e.setState({savedBooks:t})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Saved Books"}),Object(a.jsx)(w,{books:this.state.savedBooks})]})}}]),n}(s.a.Component);var F=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(h,{children:[Object(a.jsx)("h1",{children:"404 Page Not Found"}),Object(a.jsx)("p",{children:"Please check your spelling and try again!"})]})})};n(63);var I=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{}),Object(a.jsx)(h,{}),Object(a.jsxs)(j,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(a.jsx)(l.a,{exact:!0,path:"/search",component:y}),Object(a.jsx)(l.a,{exact:!0,path:"/saved",component:C}),Object(a.jsx)(l.a,{exact:!0,path:"/unknown",component:F})]})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(I,{}),document.getElementById("root")),_()}},[[64,1,2]]]);
//# sourceMappingURL=main.670cabae.chunk.js.map