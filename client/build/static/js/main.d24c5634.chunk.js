(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,a,t){e.exports=t(72)},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),c=t(1),s=t(14),i=t(2),m=t(15),u=t(39),p=t(41),f=t(74),d=function(e){return"app/".concat("alerts","/").concat(e)},E=d("SET_ALERT"),h=d("REMOVE_ALERT"),b=function(e,a){return function(t){var n=Object(f.a)();t({payload:{msg:e,alertType:a,id:n,name:"SET_ALERT"},type:E}),setTimeout((function(){return t(function(e){return{payload:e,type:h}}({id:n,name:"REMOVE_ALERT"}))}),5e3)}},g=[];var v=t(3),y=t(6),N=t.n(y),C=t(16),w=t(8),O=t.n(w),x=function(e){e?O.a.defaults.headers.common["x-auth-token"]=e:delete O.a.defaults.headers.common["x-auth-token"]},k=function(e){return"app/".concat("auth","/").concat(e)},S=k("GET_PROFILE"),j=k("ERROR_PROFILE"),L=k("CLEAR_PROFILE"),D=function(e){return{payload:e,type:S}},A=function(e){return{payload:e,type:j}},R=function(){return function(){var e=Object(C.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/profile/me");case 3:t=e.sent,a(D(t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(A({msg:e.t0.response.statusText,status:e.t0.response.status}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},T=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var n=Object(C.a)(N.a.mark((function n(r){var l,o,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l={headers:{"Content-Type":"application/json"}},n.next=4,O.a.post("/api/profile",e,l);case 4:o=n.sent,r(D(o.data)),r(b(t?"Profile updated":"Profile created")),t||a.push("/dashboard"),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(0),(c=n.t0.response.data.errors)&&c.forEach((function(e){return r(b(e.msg,"danger"))})),r(A({msg:n.t0.response.statusText,status:n.t0.response.status}));case 15:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},I={profile:null,profiles:[],repos:[],loading:!0,error:{}};var P=function(e){return"app/".concat("auth","/").concat(e)},U=P("REGISTER_SUCCESS"),_=P("REGISTER_FAIL"),G=P("USER_LOADED"),M=P("AUTH_ERROR"),F=P("LOGIN_SUCCESS"),J=P("LOGIN_FAIL"),Y=P("LOGOUT"),W=(P("CLEAR_PROFILE"),function(e){return{payload:e,type:_}}),q=function(e){return{payload:e,type:M}},B=function(e){return{payload:e,type:J}},H=function(){return function(){var e=Object(C.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&x(localStorage.token),e.prev=1,e.next=4,O.a.get("/api/auth");case 4:t=e.sent,a({payload:t.data,type:G}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(q({name:"AUTH_ERROR"}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}()},V=function(){return function(e){var a;e({payload:a,type:L}),e(function(e){return{payload:e,type:Y}}({name:"LOGOUT"}))}},X={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var $={},z={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:case F:return localStorage.setItem("token",a.payload.token),Object(v.a)({},e,{},a.payload,{isAuthenticated:!0,loading:!1});case _:case M:case J:case Y:return localStorage.removeItem("token"),Object(v.a)({},e,{token:null,isAuthenticated:null,loading:!1,user:null});case G:return Object(v.a)({},e,{isAuthenticated:!0,loading:!1,user:a.payload});default:return e}},alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return[].concat(Object(p.a)(e),[a.payload]);case h:return e.filter((function(e){return e.id!==a.payload.id}));default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S:return Object(v.a)({},e,{profile:a.payload,loading:!1});case j:return Object(v.a)({},e,{error:a.payload,loading:!1});case L:return Object(v.a)({},e,{profile:null,repos:[],loading:!1});default:return e}}};Object.keys($).forEach((function(e){"undefined"==typeof z[e]&&(z[e]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})}));var K=Object(m.c)(z),Q=Object(m.e)(K,$,Object(m.d)(Object(m.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Z=function(e){var a=e.auth,t=a.isAuthenticated,n=a.loading,l=e.userLogout,o=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/profiles"},"Developers")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/posts"},"Posts")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("i",{className:"fas fa-user"})," ",r.a.createElement("span",{className:"hide-sm"},"Dashboard"))),r.a.createElement("li",null,r.a.createElement("a",{onClick:l,href:"#!"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," ",r.a.createElement("span",{className:"hide-sm"},"Logout")))),s=r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/profiles"},"Developers")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/login"},"Login")));return r.a.createElement("nav",{className:"navbar bg-dark"},r.a.createElement("h1",null,r.a.createElement(c.b,{to:"/"},r.a.createElement("i",{className:"fas fa-code"})," DevConnector")),!n&&r.a.createElement("div",null,t?o:s))},ee=Object(i.b)((function(e){return{auth:e.auth}}),(function(e){return{userLogout:function(){return e(V())}}}))(Z),ae=(t(71),function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(ee,null),r.a.createElement("main",null,a))}),te=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement("section",{className:"landing"},r.a.createElement("div",{className:"dark-overlay"},r.a.createElement("div",{className:"landing-inner"},r.a.createElement("h1",{className:"x-large"},"Developer Connector"),r.a.createElement("p",{className:"lead"},"Create a developer profile/portfolio, share posts and get help from other developers"),r.a.createElement("div",{className:"buttons"},r.a.createElement(c.b,{to:"/register",className:"btn btn-primary"},"Sign Up"),r.a.createElement(c.b,{to:"/login",className:"btn btn-light"},"Login")))))})),ne=t(10),re=t(11),le=t(12),oe=t(13),ce=t(9),se=t.n(ce),ie=function(e){Object(oe.a)(t,e);var a=Object(le.a)(t);function t(){var e;Object(ne.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{email:"",password:""}},e.onChange=function(a){var t=e.state.formData,n=Object(v.a)({},t);n[a.target.name]=a.target.value,e.setState({formData:n})},e.onSubmit=function(a){var t=e.state.formData,n=t.email,r=t.password,l=e.props.logUser;a.preventDefault(),l(n,r)},e}return Object(re.a)(t,[{key:"render",value:function(){var e=this.state.formData,a=e.email,t=e.password;return this.props.isAuth?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"large text-primary"},"Sign In"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),r.a.createElement("form",{className:"form",action:"create-profile.html",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:a,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:t,onChange:this.onChange})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Login"})),r.a.createElement("p",{className:"my-1"},"Don't have an account? ",r.a.createElement(c.b,{to:"/register"},"Sign In")))}}]),t}(n.Component);ie.poropTypes={logUser:se.a.func,isAuth:se.a.bool};var me=ie,ue=Object(i.b)((function(e){return{isAuth:e.auth.isAuthenticated}}),(function(e){return{logUser:function(a,t,n){return e(function(e,a){return function(){var t=Object(C.a)(N.a.mark((function t(n){var r,l,o,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:a}),t.prev=2,t.next=5,O.a.post("/api/auth",l,r);case 5:o=t.sent,n({payload:o.data,type:U}),n(H()),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),(c=t.t0.response.data.errors)&&c.forEach((function(e){return n(b(e.msg,"danger"))})),n(W({name:"REGISTER_FAIL"}));case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()}(a,t))}}}))(me),pe=function(e){Object(oe.a)(t,e);var a=Object(le.a)(t);function t(){var e;Object(ne.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{name:"",email:"",password:"",password2:""}},e.onChange=function(a){var t=e.state.formData,n=Object(v.a)({},t);n[a.target.name]=a.target.value,e.setState({formData:n})},e.onSubmit=function(a){var t=e.state.formData,n=t.password,r=t.password2,l=t.name,o=t.email,c=e.props,s=c.setAlert,i=c.regUser;a.preventDefault(),n!==r?s("Password do not match","danger"):i({name:l,email:o,password:n})},e}return Object(re.a)(t,[{key:"render",value:function(){var e=this.state.formData,a=e.name,t=e.email,n=e.password,l=e.password2;return this.props.isAuth?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"large text-primary"},"Sign Up"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),r.a.createElement("form",{className:"form",action:"create-profile.html",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:a,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:t,onChange:this.onChange,required:!0}),r.a.createElement("small",{className:"form-text"},"This site uses Gravatar so if you want a profile image, use a Gravatar email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",minLength:"6",value:n,onChange:this.onChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:l,onChange:this.onChange,required:!0,minLength:"6"})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})),r.a.createElement("p",{className:"my-1"},"Already have an account? ",r.a.createElement(c.b,{to:"/login"},"Sign In")))}}]),t}(n.Component),fe=Object(i.b)((function(e){return{isAuth:e.auth.isAuthenticated}}),(function(e){return{setAlert:function(a,t){return e(b(a,t))},regUser:function(a,t,n){return e(function(e){var a=e.name,t=e.email,n=e.password;return function(){var e=Object(C.a)(N.a.mark((function e(r){var l,o,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:a,email:t,password:n}),e.prev=2,e.next=5,O.a.post("/api/users",o,l);case 5:c=e.sent,r({payload:c.data,type:F}),r(H()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(s=e.t0.response.data.errors)&&s.forEach((function(e){return r(b(e.msg,"danger"))})),r(B({name:"LOGIN_FAIL"}));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}()}(a))}}}))(pe),de=function(e){var a=e.alerts;return null!==a&&a.length>0&&a.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))},Ee=Object(i.b)((function(e){return{alerts:e.alerts}}),(function(e){return{}}))(de),he=function(){return r.a.createElement("div",{className:"dash-buttons"},r.a.createElement(c.b,{to:"/edit-profile",className:"btn btn-light"},r.a.createElement("i",{className:"fas fa-user-circle text-primary"})," Edit Profile"),r.a.createElement(c.b,{to:"/add-experience",className:"btn btn-light"},r.a.createElement("i",{className:"fab fa-black-tie text-primary"})," Add Experience"),r.a.createElement(c.b,{to:"/add-education",className:"btn btn-light"},r.a.createElement("i",{className:"fas fa-graduation-cap text-primary"})," Add Education"))},be=function(e){Object(oe.a)(t,e);var a=Object(le.a)(t);function t(){var e;Object(ne.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).renderElements=function(){var a=e.props,t=a.auth.user,n=a.profile,l=n.profile;return n.loading&&null===l?r.a.createElement("div",null,r.a.createElement("h3",null,"Loading Profile....")):null!==l?r.a.createElement("div",null,r.a.createElement("h1",{className:"large text-primary"},"Dashboard"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Welcome ",t&&t.name),r.a.createElement("div",null,r.a.createElement(he,null),r.a.createElement("h2",{className:"my-2"},"Experience Credentials"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",{className:"hide-sm"},"Title"),r.a.createElement("th",{className:"hide-sm"},"Years"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Tech Guy Web Solutions"),r.a.createElement("td",{className:"hide-sm"},"Senior Developer"),r.a.createElement("td",{className:"hide-sm"},"02-03-2009 - 01-02-2014"),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger"},"Delete"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Traversy Media"),r.a.createElement("td",{className:"hide-sm"},"Instructor & Developer"),r.a.createElement("td",{className:"hide-sm"},"02-03-2015 - Now"),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger"},"Delete"))))),r.a.createElement("h2",{className:"my-2"},"Education Credentials"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"School"),r.a.createElement("th",{className:"hide-sm"},"Degree"),r.a.createElement("th",{className:"hide-sm"},"Years"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Northern Essex"),r.a.createElement("td",{className:"hide-sm"},"Associates"),r.a.createElement("td",{className:"hide-sm"},"02-03-2007 - 01-02-2009"),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger"},"Delete"))))),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{className:"btn btn-danger"},r.a.createElement("i",{className:"fas fa-user-minus"}),"Delete My Account")))):r.a.createElement("div",null,r.a.createElement("h1",{className:"large text-primary"},"Dashboard"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Welcome ",t&&t.name),r.a.createElement("div",null,r.a.createElement("p",null,"You have no profile. Please create one"),r.a.createElement(c.b,{to:"/create-profile",className:"btn btn-primary my-1"},"Create Profile")))},e}return Object(re.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getUserProfile)()}},{key:"render",value:function(){return r.a.createElement("section",{className:"container"},this.renderElements())}}]),t}(n.Component),ge=Object(i.b)((function(e){return{profile:e.profile,auth:e.auth}}),(function(e){return{getUserProfile:function(){return e(R())}}}))(be),ve=t(42),ye=function(e){var a=e.component,t=e.auth,n=t.isAuthenticated,l=t.loading,o=Object(ve.a)(e,["component","auth"]);return r.a.createElement(s.b,Object.assign({},o,{render:function(e){return n||l?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/login"})}}))},Ne=Object(i.b)((function(e){return{auth:e.auth}}))(ye),Ce=function(e){Object(oe.a)(t,e);var a=Object(le.a)(t);function t(){var e;Object(ne.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formData:{company:"",website:"",location:"",status:"",skills:"",githubusername:"",bio:"",twitter:"",facebook:"",linkedin:"",youtube:"",instagram:""},displaySocial:!1},e.toggleSoacial=function(){e.state.displaySocial?e.setState({displaySocial:!1}):e.setState({displaySocial:!0})},e.onChange=function(a){var t=e.state.formData,n=Object(v.a)({},t);n[a.target.name]=a.target.value,e.setState({formData:n})},e.onSubmit=function(a){var t=e.props,n=t.createProfile,r=t.history,l=e.state.formData;a.preventDefault(),n(l,r)},e}return Object(re.a)(t,[{key:"render",value:function(){var e=this,a=this.state.formData,t=a.company,n=a.website,l=a.location,o=a.status,c=a.skills,s=a.githubusername,i=a.bio,m=a.twitter,u=a.facebook,p=a.linkedin,f=a.youtube,d=a.instagram,E=this.state.displaySocial;return r.a.createElement("section",{className:"container"},r.a.createElement("h1",{className:"large text-primary"},"Create Your Profile"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{className:"form",onSubmit:function(a){return e.onSubmit(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"status",value:o,onChange:this.onChange},r.a.createElement("option",{value:"0"},"* Select Professional Status"),r.a.createElement("option",{value:"Developer"},"Developer"),r.a.createElement("option",{value:"Junior Developer"},"Junior Developer"),r.a.createElement("option",{value:"Senior Developer"},"Senior Developer"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Student or Learning"},"Student or Learning"),r.a.createElement("option",{value:"Instructor"},"Instructor or Teacher"),r.a.createElement("option",{value:"Intern"},"Intern"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("small",{className:"form-text"},"Give us an idea of where you are at in your career")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Company",name:"company",value:t,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"Could be your own company or one you work for")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Website",name:"website",value:n,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"Could be your own or a company website")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Location",name:"location",value:l,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"City & state suggested (eg. Boston, MA)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Skills",name:"skills",value:c,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:s,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"If you want your latest repos and a Github link, include your username")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{placeholder:"A short bio of yourself",name:"bio",value:i,onChange:this.onChange}),r.a.createElement("small",{className:"form-text"},"Tell us a little about yourself")),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{onClick:this.toggleSoacial,type:"button",className:"btn btn-light"},"Add Social Network Links"),r.a.createElement("span",null,"Optional")),E&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-twitter fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:m,onChange:this.onChange})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-facebook fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:u,onChange:this.onChange})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-youtube fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:f,onChange:this.onChange})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:p,onChange:this.onChange})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:d,onChange:this.onChange}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary my-1"}),r.a.createElement("a",{className:"btn btn-light my-1",href:"/dashboard"},"Go Back")))}}]),t}(n.Component),we=Object(i.b)(void 0,(function(e){return{createProfile:function(a,t){return e(T(a,t))}}}))(Object(s.g)(Ce)),Oe=t(22),xe=t(27),ke=function(e){var a=e.profile,t=a.profile,l=a.loading,o=e.createProfile,s=e.getCurrentProfileData,i=e.history,m=Object(n.useState)({company:"",website:"",location:"",status:"",skills:"",githubusername:"",bio:"",twitter:"",facebook:"",linkedin:"",youtube:"",instagram:""}),u=Object(xe.a)(m,2),p=u[0],f=u[1],d=Object(n.useState)(!1),E=Object(xe.a)(d,2),h=E[0],b=E[1];Object(n.useEffect)((function(){s(),f({company:l||!t.company?"":t.company,website:l||!t.website?"":t.website,location:l||!t.location?"":t.location,status:l||!t.status?"":t.status,skills:l||!t.skills?"":t.skills.join(","),githubusername:l||!t.githubusername?"":t.githubusername,bio:l||!t.bio?"":t.bio,twitter:l||!t.social?"":t.social.twitter,facebook:l||!t.social?"":t.social.facebook,linkedin:l||!t.social?"":t.social.linkedin,youtube:l||!t.social?"":t.social.youtube,instagram:l||!t.social?"":t.social.instagram})}),[l]);var g=p.company,y=p.website,N=p.location,C=p.status,w=p.skills,O=p.githubusername,x=p.bio,k=p.twitter,S=p.facebook,j=p.linkedin,L=p.youtube,D=p.instagram,A=function(e){return f(Object(v.a)({},p,Object(Oe.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"large text-primary"},"Create Your Profile"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",{className:"fas fa-user"})," Let's get some information to make your profile stand out"),r.a.createElement("small",null,"* = required field"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),o(p,i,!0)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"status",value:C,onChange:function(e){return A(e)}},r.a.createElement("option",{value:"0"},"* Select Professional Status"),r.a.createElement("option",{value:"Developer"},"Developer"),r.a.createElement("option",{value:"Junior Developer"},"Junior Developer"),r.a.createElement("option",{value:"Senior Developer"},"Senior Developer"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Student or Learning"},"Student or Learning"),r.a.createElement("option",{value:"Instructor"},"Instructor or Teacher"),r.a.createElement("option",{value:"Intern"},"Intern"),r.a.createElement("option",{value:"Other"},"Other")),r.a.createElement("small",{className:"form-text"},"Give us an idea of where you are at in your career")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Company",name:"company",value:g,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own company or one you work for")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Website",name:"website",value:y,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"Could be your own or a company website")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Location",name:"location",value:N,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"City & state suggested (eg. Boston, MA)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"* Skills",name:"skills",value:w,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Github Username",name:"githubusername",value:O,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"If you want your latest repos and a Github link, include your username")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{placeholder:"A short bio of yourself",name:"bio",value:x,onChange:function(e){return A(e)}}),r.a.createElement("small",{className:"form-text"},"Tell us a little about yourself")),r.a.createElement("div",{className:"my-2"},r.a.createElement("button",{onClick:function(){return b(!h)},type:"button",className:"btn btn-light"},"Add Social Network Links"),r.a.createElement("span",null,"Optional")),h&&r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-twitter fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Twitter URL",name:"twitter",value:k,onChange:function(e){return A(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-facebook fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Facebook URL",name:"facebook",value:S,onChange:function(e){return A(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-youtube fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"YouTube URL",name:"youtube",value:L,onChange:function(e){return A(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Linkedin URL",name:"linkedin",value:j,onChange:function(e){return A(e)}})),r.a.createElement("div",{className:"form-group social-input"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}),r.a.createElement("input",{type:"text",placeholder:"Instagram URL",name:"instagram",value:D,onChange:function(e){return A(e)}}))),r.a.createElement("input",{type:"submit",className:"btn btn-primary my-1"}),r.a.createElement(c.b,{className:"btn btn-light my-1",to:"/dashboard"},"Go Back")))},Se=Object(i.b)((function(e){return{profile:e.profile}}),(function(e){return{createProfile:function(a,t){return e(T(a,t))},getCurrentProfileData:function(){return e(R())}}}))(Object(s.g)(ke)),je=function(){return Object(n.useEffect)((function(){x(localStorage.token),Q.dispatch(H())}),[]),r.a.createElement(i.a,{store:Q},r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(ae,null,r.a.createElement(s.b,{exact:!0,path:"/",component:te}),r.a.createElement("section",{className:"container"},r.a.createElement(Ee,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/register",component:fe}),r.a.createElement(s.b,{exact:!0,path:"/login",component:ue}),r.a.createElement(Ne,{exact:!0,path:"/dashboard",component:ge}),r.a.createElement(Ne,{exact:!0,path:"/create-profile",component:we}),r.a.createElement(Ne,{exact:!0,path:"/edit-profile",component:Se})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d24c5634.chunk.js.map