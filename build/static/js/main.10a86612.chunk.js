(this["webpackJsonpazure-mern-client"]=this["webpackJsonpazure-mern-client"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),s=a.n(c),l=(a(75),a(102),a(7)),i=a(9),o=a(18),u=a(19),m=a(16),p=a(32),h=a(21),d=a(140),f=a(141),E=a(142),v=a(124),b=a(125),g=a(86),y=a(126),N=a(127),j=a(128),O=a(129),k=a(130),x=a(131),C=a(132),w=a(133),S=a(134),A=a(135);a(40);function T(e){return e.user.avatar?r.a.createElement("img",{src:e.user.avatar,alt:"user",className:"rounded-circle align-self-center mr-2",style:{width:"32px"}}):r.a.createElement("i",{className:"far fa-user-circle fa-lg rounded-circle align-self-center mr-2",style:{width:"32px"}})}function P(e){return e.isAuthenticated?r.a.createElement(d.a,null,r.a.createElement(f.a,{nav:!0,caret:!0},r.a.createElement(T,{user:e.user})),r.a.createElement(E.a,{right:!0},r.a.createElement("h5",{className:"dropdown-item-text mb-0"},e.user.displayName),r.a.createElement("p",{className:"dropdown-item-text text-muted mb-0"},e.user.email),r.a.createElement(v.a,{divider:!0}),r.a.createElement(v.a,{onClick:e.authButtonMethod},"Sign Out"))):r.a.createElement(b.a,null,r.a.createElement(g.a,{onClick:e.authButtonMethod,className:"btn-link nav-link border-0",color:"link"},"Sign In"))}var B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(p.a)(n)),n.state={isOpen:!1},n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=null;return this.props.isAuthenticated&&(e=r.a.createElement(y.a,{inline:!0},r.a.createElement(N.a,null,r.a.createElement(j.a,{md:12},r.a.createElement(O.a,{type:"text",name:"search",id:"searchBar",placeholder:"Search"}))))),r.a.createElement("div",null,r.a.createElement(k.a,{className:"nav-bar",expand:"md",fixed:"top"},r.a.createElement(x.a,{className:"nav-link",href:"/"},"Florida Genealogy"),r.a.createElement(C.a,{onClick:this.toggle}),r.a.createElement(w.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(S.a,{className:"mr-auto",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(h.c,{to:"/",className:"nav-link",exact:!0},"Home")),this.props.isAuthenticated&&r.a.createElement(d.a,null,r.a.createElement(f.a,{nav:!0,caret:!0},"Family"),r.a.createElement(E.a,{right:!0},r.a.createElement(v.a,null,r.a.createElement(h.c,{to:"/family",className:"nav-link"}," Family ")),r.a.createElement(v.a,{divider:!0}),r.a.createElement(v.a,null,r.a.createElement(h.c,{to:"/addfamily",className:"nav-link"}," Add ")))),this.props.isAuthenticated&&r.a.createElement(d.a,null,r.a.createElement(f.a,{nav:!0,caret:!0},"Post"),r.a.createElement(E.a,{right:!0},r.a.createElement(v.a,null,r.a.createElement(h.c,{to:"/posts",className:"nav-link"}," Post ")),r.a.createElement(v.a,{divider:!0}),r.a.createElement(v.a,null,r.a.createElement(h.c,{to:"/addpost",className:"nav-link"}," Add Post "))))),e,r.a.createElement(S.a,{className:"justify-content-end",navbar:!0},r.a.createElement(b.a,null,r.a.createElement(A.a,{href:"https://developer.microsoft.com/graph/docs/concepts/overview",target:"_blank"},r.a.createElement("i",{className:"fas fa-external-link-alt mr-1"}),"Docs")),r.a.createElement(P,{isAuthenticated:this.props.isAuthenticated,authButtonMethod:this.props.authButtonMethod,user:this.props.user})))))}}]),a}(r.a.Component),D=a(143),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;return this.props.debug&&(e=r.a.createElement("pre",{className:"alert-pre border bg-light p-2"},r.a.createElement("code",null,this.props.debug))),r.a.createElement(D.a,{color:"danger"},r.a.createElement("p",{className:"mb-3"},this.props.message),e)}}]),a}(r.a.Component);a(81);function M(e){return e.isAuthenticated?r.a.createElement("div",null,r.a.createElement("h4",null,"Welcome ",e.user.displayName,"!"),r.a.createElement("p",null,"Use the nav bar at the top to get started.")):r.a.createElement(g.a,{className:"signInBtn",onClick:e.authButtonMethod},"Click here to sign in")}var _=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid px-0"},r.a.createElement("div",{className:"welcome row no-gutters align-items-start p-0"},r.a.createElement("div",{className:"col welcome-msg"},r.a.createElement("h3",null,"Connecting Floridians Across Generations"),r.a.createElement("p",{className:"lead"},"This site is open to the public."),r.a.createElement(M,{isAuthenticated:this.props.isAuthenticated,user:this.props.user,authButtonMethod:this.props.authButtonMethod}))),r.a.createElement("div",{className:"row no-gutters text-center welcome-middle"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Discover your past."))),r.a.createElement("div",{className:"row no-gutters text-center welcome-bottom"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Get your personalized report today."),r.a.createElement(h.b,{className:"custom-btn btn",to:"/search"},"Get started!"))))}}]),a}(r.a.Component),U=a(2),G=a.n(U),L=a(22),I=a(89),J={appId:"c5434299-b6b6-4f72-a55b-f4b16b871262",redirectUri:"https://lively-hill-0d8298410.azurestaticapps.net/.auth/login/aad/callback",scopes:["user.read","mailboxsettings.read","calendars.readwrite"]},Y=a(121);function q(e){return Y.Client.init({authProvider:function(t){t(null,e)}})}function R(e){return z.apply(this,arguments)}function z(){return(z=Object(L.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q(t),e.next=3,a.api("/me").select("displayName,mail,mailboxSettings,userPrincipalName").get();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return function(t){Object(o.a)(n,t);var a=Object(u.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).state={error:null,isAuthenticated:!1,user:{}},t.publicClientApplication=new I.a({auth:{clientId:J.appId,redirectUri:J.redirectUri},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}}),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.publicClientApplication.getAllAccounts();e&&e.length>0&&this.getUserProfile()}},{key:"render",value:function(){var t=this;return r.a.createElement(e,Object.assign({error:this.state.error,isAuthenticated:this.state.isAuthenticated,user:this.state.user,login:function(){return t.login()},logout:function(){return t.logout()},getAccessToken:function(e){return t.getAccessToken(e)}},this.props))}},{key:"login",value:function(){var e=Object(L.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.publicClientApplication.loginPopup({scopes:J.scopes,prompt:"select_account"});case 3:return e.next=5,this.getUserProfile();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isAuthenticated:!1,user:{},error:this.normalizeError(e.t0)});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){this.publicClientApplication.logout()}},{key:"getAccessToken",value:function(){var e=Object(L.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!((a=this.publicClientApplication.getAllAccounts()).length<=0)){e.next=4;break}throw new Error("login_required");case 4:return e.next=6,this.publicClientApplication.acquireTokenSilent({scopes:t,account:a[0]});case 6:return n=e.sent,e.abrupt("return",n.accessToken);case 10:if(e.prev=10,e.t0=e.catch(0),!this.isInteractionRequired(e.t0)){e.next=19;break}return e.next=15,this.publicClientApplication.acquireTokenPopup({scopes:t});case 15:return r=e.sent,e.abrupt("return",r.accessToken);case 19:throw e.t0;case 20:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getUserProfile",value:function(){var e=Object(L.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getAccessToken(J.scopes);case 3:if(!(t=e.sent)){e.next=9;break}return e.next=7,R(t);case 7:a=e.sent,this.setState({isAuthenticated:!0,user:{displayName:a.displayName,email:a.mail||a.userPrincipalName,timeZone:a.mailboxSettings.timeZone||"UTC",timeFormat:a.mailboxSettings.timeFormat},error:null});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this.setState({isAuthenticated:!1,user:{},error:this.normalizeError(e.t0)});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"setErrorMessage",value:function(e,t){this.setState({error:{message:e,debug:t}})}},{key:"normalizeError",value:function(e){var t={};if("string"===typeof e){var a=e.split("|");t=a.length>1?{message:a[1],debug:a[0]}:{message:e}}else t={message:e.message,debug:JSON.stringify(e)};return t}},{key:"isInteractionRequired",value:function(e){return!(!e.message||e.message.length<=0)&&(e.message.indexOf("consent_required")>-1||e.message.indexOf("interaction_required")>-1||e.message.indexOf("login_required")>-1||e.message.indexOf("no_account_in_silent_request")>-1)}}]),n}(r.a.Component)}var Z=a(62),V=a(39),W=a(13),K=a(72),Q=a.n(K),X=a(137),$=a(136),ee=a(92),te=a(94);function ae(e){var t=Object(n.useState)(!1),a=Object(W.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(e.firstName?e.firstName:""),i=Object(W.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(e.lastName?e.lastName:""),p=Object(W.a)(m,2),h=p[0],d=p[1],f=Object(n.useState)(e.dob?e.dob:""),E=Object(W.a)(f,2),v=E[0],b=E[1],y=Object(n.useState)(e.birthPlace?e.birthPlace:""),N=Object(W.a)(y,2),O=N[0],k=N[1];return c?r.a.createElement("div",{className:"entry"},r.a.createElement("div",{className:"avatar-holder"},r.a.createElement("img",{src:Q.a,alt:"Relative"})),r.a.createElement("div",{className:"name"},r.a.createElement($.a,null,r.a.createElement(j.a,{sm:"3"},r.a.createElement(ee.a,{column:!0},"First Name:")),r.a.createElement(j.a,{sm:"7"},r.a.createElement(te.a,{type:"text",value:o,onChange:function(e){return u(e.target.value)}}))),r.a.createElement($.a,null,r.a.createElement(j.a,{sm:"3"},r.a.createElement(ee.a,{column:!0},"Last Name:")),r.a.createElement(j.a,{sm:"7"},r.a.createElement(te.a,{type:"text",value:h,onChange:function(e){return d(e.target.value)}}))),r.a.createElement($.a,null,r.a.createElement(j.a,{sm:"3"},r.a.createElement(ee.a,{column:!0},"DOB:")),r.a.createElement(j.a,{sm:"7"},r.a.createElement(te.a,{type:"text",value:v,onChange:function(e){return b(e.target.value)}}))),r.a.createElement($.a,null,r.a.createElement(j.a,{sm:"3"},r.a.createElement(ee.a,{column:!0},"Birth Place:")),r.a.createElement(j.a,{sm:"7"},r.a.createElement(te.a,{type:"text",value:O,onChange:function(e){return k(e.target.value)}})))),r.a.createElement($.a,null,r.a.createElement(g.a,{className:"col btn btn-success",onClick:function(t){return function(t){t.preventDefault();var a={firstName:o,lastName:h,dob:v,birthPlace:O};console.log(e.access);var n={method:"GET",headers:{"Content-Type":"application/json",data:JSON.stringify(a),access:e.access,id:e._id}};console.log(a),fetch("/api/UpdateFamilyMember",n).then((function(e){return e.json()})).then((function(e){s(!1),console.log(e)}))}(t)}},"Update"),r.a.createElement(g.a,{className:"col btn btn-danger",onClick:function(t){return function(t){t.preventDefault();var a={firstName:o,lastName:h,dob:v,birthPlace:O},n={method:"GET",headers:{"Content-Type":"application/json",data:JSON.stringify(a),access:e.access}};console.log(a),fetch("/api/DeleteFamilyMember",n).then((function(e){return e.json()})).then((function(e){s(!1),console.log(e)}))}(t)}},"Delete"),r.a.createElement(g.a,{className:"col btn btn-primary",onClick:function(e){return s(!1)}},"Cancel"))):r.a.createElement("div",{key:e._id,className:"entry col-md-3"},r.a.createElement("div",{className:"avatar-holder"},r.a.createElement("img",{src:Q.a,alt:"Relative"})),r.a.createElement("div",{className:"name"},r.a.createElement("p",null,o+" "+h)),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"DOB: ",v||"Unknown"),r.a.createElement("p",null,"Bith Place: ",O||"Unknown"),r.a.createElement("p",null,"Relationship: ",e.relationship?e.relationship:"Unknown")),r.a.createElement("div",{className:"btn-row"},r.a.createElement(g.a,{className:"col btn btn-primary",onClick:function(e){return s(!0)}},"Edit")))}function ne(e){var t=Object(m.f)().personId,a=Object(n.useState)(!0),c=Object(W.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(""),o=Object(W.a)(i,2),u=(o[0],o[1],Object(n.useState)("")),p=Object(W.a)(u,2),d=(p[0],p[1],Object(n.useState)("")),f=Object(W.a)(d,2),E=(f[0],f[1]),v=Object(n.useState)(""),b=Object(W.a)(v,2),g=(b[0],b[1]),y=Object(n.useState)(""),O=Object(W.a)(y,2),k=O[0],x=O[1];return Object(n.useEffect)((function(){var a={method:"GET",headers:{"Content-Type":"application/json",access:e.access}};fetch("/api/FindFamilyMember/".concat(t),a,{}).then((function(e){return console.log(e.body),e.json()})).then((function(e){x(e),l(!1)})).catch((function(e){return console.log(e)}))}),[t]),r.a.createElement(r.a.Fragment,null,console.log("why"),s&&r.a.createElement("p",null,"Loading."),!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"entry col-md-3"},r.a.createElement("div",{className:"ds-top"}),r.a.createElement("div",{className:"avatar-holder"},r.a.createElement("img",{src:"https://www.flaticon.com/svg/vstatic/svg/3436/3436198.svg?token=exp=1617994947~hmac=16bf36c03e990a1e3dfbe89dcec81f96",alt:"Albert Einstein"})),r.a.createElement("div",{className:"name-edit"},r.a.createElement("p",null,k.firstName+" "+k.lastName),r.a.createElement("div",{className:"info-edit"},r.a.createElement(N.a,{as:$.a},r.a.createElement(ee.a,{column:!0},"DOB:"),r.a.createElement(j.a,{md:"12"},r.a.createElement(te.a,{type:"text",value:k.dob?k.dob:"",onChange:function(e){return E(e.target.value)}}))),r.a.createElement(ee.a,{column:!0},"Birth Place:"),r.a.createElement(te.a,{type:"text",value:k.birthPlace?k.birthPlace:"",onChange:function(e){return g(e.target.value)}}),r.a.createElement("p",null,k.relationship?k.relationship:"")),r.a.createElement("h6",{title:"dob"},r.a.createElement("i",{className:"fas fa-users"})," ",r.a.createElement("span",{className:"dob"},k.dob&&k.dob))),r.a.createElement(h.b,{className:"col btn btn-primary",to:"/addfamily"},"Go Back"))))}var re=H(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.state={firstName:"",lastName:"",dob:"",city:"",state:"",country:"",relationship:"",description:"",familyMembers:"",isLoading:!0,access:null},n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(L.a)(G.a.mark((function e(t){var a,n,r,c=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.props.getAccessToken(J.scopes);case 3:a=e.sent,this.setState({access:a}),n={},Object.keys(this.state).map((function(e){""!==c.state[e]&&"familyMembers"!==e&&"isLoading"!==e&&(n[e]=c.state[e])})),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},this.setState({isLoading:!0}),fetch("/api/HttpTrigger1",r).then((function(e){return e.json()})).then((function(e){console.log(n),c.setState((function(e){return{familyMembers:[].concat(Object(Z.a)(e.familyMembers),[n])}})),c.setState({isLoading:!1})}),(function(e){console.log(e)}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(L.a)(G.a.mark((function e(){var t,a,n=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.user){e.next=13;break}return e.prev=1,e.next=4,this.props.getAccessToken(J.scopes);case 4:t=e.sent,this.setState({access:t}),a={method:"GET",headers:{"Content-Type":"application/json",access:this.state.access}},fetch("/api/HttpTrigger6",a,{}).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({familyMembers:e,isLoading:!1}),console.log(n.state.familyMembers)})).catch((function(e){return console.log(e)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.match;return this.props.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{path:"".concat(t.url,"/:personId"),render:function(t){return r.a.createElement(ne,Object.assign({access:e.state.access},t))}}),r.a.createElement(h.a,{exact:!0,path:t.url},r.a.createElement("div",{className:"container-fluid family-page"},r.a.createElement("div",{className:"row justify-content-center "},r.a.createElement("div",{className:"col-auto"},r.a.createElement("div",{className:"family-nest"},r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Add Family Members"),r.a.createElement("p",{className:"lead"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus."),r.a.createElement(N.a,{row:!0},r.a.createElement(X.a,{for:"first-name",md:4},"First Name:"),r.a.createElement(j.a,{md:6},r.a.createElement(O.a,{type:"text",name:"firstName",value:this.state.firstName||"",onChange:this.handleChange,className:"animated fadein"}))),r.a.createElement(N.a,{row:!0},r.a.createElement(X.a,{for:"last-name",md:4},"Last Name:"),r.a.createElement(j.a,{md:6},r.a.createElement(O.a,{type:"text",name:"lastName",value:this.state.lastName||"",onChange:this.handleChange}))),r.a.createElement(N.a,{row:!0},r.a.createElement(X.a,{for:"dob",md:4},"Date of Birth:"),r.a.createElement(j.a,{md:6},r.a.createElement(O.a,{type:"text",name:"dob",value:this.state.dob||"",onChange:this.handleChange}))),r.a.createElement(N.a,{row:!0},r.a.createElement(X.a,{for:"birth-place",md:4},"Place of Birth:"),r.a.createElement(j.a,{md:4},r.a.createElement(O.a,{type:"text",name:"city",value:this.state.city||"",onChange:this.handleChange,placeholder:"City"})),r.a.createElement(j.a,{md:2},r.a.createElement(O.a,{type:"text",name:"state",value:this.state.state||"",onChange:this.handleChange,placeholder:"State"}))),r.a.createElement(N.a,{row:!0,className:""},r.a.createElement(j.a,{md:6,className:"col-md-6 offset-md-4"},r.a.createElement(O.a,{type:"text",name:"country",value:this.state.country||"",onChange:this.handleChange,placeholder:"Country"}))),r.a.createElement(N.a,{row:!0,className:""},r.a.createElement(X.a,{md:4},"Relationship to you:"),r.a.createElement(j.a,{md:6},r.a.createElement(O.a,{type:"text",name:"relationship",value:this.state.relationship||"",onChange:this.handleChange,placeholder:""}))),r.a.createElement(N.a,{row:!0},r.a.createElement(X.a,{for:"description",md:3},"Description"),r.a.createElement(j.a,{md:8,className:"col-md-6 offset-md-4"},r.a.createElement(te.a,{name:"description",as:"textarea",rows:3,value:this.state.description||"",onChange:this.handleChange}))),r.a.createElement(N.a,{row:!0},r.a.createElement(j.a,{md:10}))),r.a.createElement(g.a,{onClick:this.handleSubmit},"Add Family Member")))),r.a.createElement("div",{className:"row spacing"}),r.a.createElement("div",{className:"family-section"},r.a.createElement("div",{className:"row justify-content-center "},r.a.createElement("div",{className:"divider"},r.a.createElement("h1",{className:"text-center"},"Your Family"))),r.a.createElement("div",{className:"row member-container"},this.state.familyMembers&&this.state.familyMembers.map((function(t){return r.a.createElement(ae,Object.assign({key:t._id,access:e.state.access},t))}))))))):null}}]),a}(r.a.Component)),ce=a(139);function se(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("div",{key:e._id,className:"post-card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,e.title))),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"post-username"},r.a.createElement("p",null,"By ",e.username))))}function le(e){var t=Object(m.f)().postId,a=Object(n.useState)(!0),c=Object(W.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(""),o=Object(W.a)(i,2),u=o[0],p=o[1],h=Object(n.useState)(""),d=Object(W.a)(h,2),f=d[0],E=d[1],v=Object(n.useState)(""),b=Object(W.a)(v,2),g=b[0],y=b[1];Object(n.useEffect)((function(){var a={method:"GET",headers:{"Content-Type":"application/json",access:e.access}};fetch("/api/HttpTrigger5/".concat(t),a,{}).then((function(e){return console.log(JSON.stringify(e)),e.json()})).then((function(e){console.log(e),p(e),E(e.title),y(e.description),l(!1)})).catch((function(e){return console.log(e)}))}),[t]);var N=function(){var a=Object(L.a)(G.a.mark((function a(n){var r,c,s;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,e.getAccessToken(J.scopes);case 3:r=a.sent,c={title:f,description:g},s={method:"Post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:c,_id:t,access:r})},fetch("/api/UpdatePost",s).then((function(e){return e.json()})).then((function(e){return window.location.href="/posts"}));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("p",null,"Loading..."),!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{key:e._id,className:"post-card"},r.a.createElement(ee.a,null,"Title: "),r.a.createElement(te.a,{type:"text",value:f,onChange:function(e){return E(e.target.value)}}),r.a.createElement(ee.a,null,"Description: "),r.a.createElement(te.a,{type:"text",value:g,onChange:function(e){return y(e.target.value)}}),r.a.createElement(ce.a,{className:"post-update",onClick:function(e){return N(e)}},"Update")))),!s&&null===u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You do not have permission to edit this post.")))}var ie=H(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={access:null,yourPosts:[],notYourPosts:[]},n}return Object(i.a)(a,[{key:"fetchPosts",value:function(){var e=this,t={method:"GET",headers:{"Content-Type":"application/json",access:this.state.access}};fetch("/api/FindYourPosts",t).then((function(e){return e.json()})).then((function(t){e.setState({yourPosts:t})})),fetch("/api/NotYourPosts",t).then((function(e){return e.json()})).then((function(t){e.setState({notYourPosts:t})}))}},{key:"componentDidMount",value:function(){var e=Object(L.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getAccessToken(J.scopes);case 2:t=e.sent,this.setState({access:t}),this.fetchPosts();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(L.a)(G.a.mark((function e(t,a){var n,r=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"Post",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:a,access:this.state.access})},e.next=4,fetch("/api/DeletePost",n).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 4:fetch("/api/FindYourPosts",{method:"GET",headers:{"Content-Type":"application/json",access:this.state.access}}).then((function(e){return e.json()})).then((function(e){r.setState({yourPosts:e})}));case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.match;return this.props.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-container"},r.a.createElement(m.a,{path:"".concat(t.url,"/:postId")},r.a.createElement(le,{access:this.state.access,getAccessToken:this.props.getAccessToken})),r.a.createElement(m.a,{exact:!0,path:t.url},this.state.yourPosts.map((function(t){return r.a.createElement("div",null,r.a.createElement("div",{key:t._id,className:"post-card"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h5",null,t.title)),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(h.b,{className:"col btn btn-success",to:"/posts/".concat(t._id)},"Edit"),r.a.createElement(ce.a,{className:"post-update",onClick:function(a){return e.handleDelete(a,t._id)}},"Delete"))),r.a.createElement("p",null,t.description),r.a.createElement("div",{className:"post-username"},r.a.createElement("p",null,"By ",t.username))))})),this.state.notYourPosts.map((function(e){return r.a.createElement(se,e)}))))):null}}]),a}(r.a.Component)),oe=a(138),ue=a(95);function me(e){var t=Object(n.useState)(""),a=Object(W.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),i=Object(W.a)(l,2),o=i[0],u=i[1],m=function(){var t=Object(L.a)(G.a.mark((function t(a){var n,r,s,l,i,u,m;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.getAccessToken(J.scopes);case 3:return n=t.sent,r=e.user.displayName,s=r.indexOf(","),l=r.substring(0,s),i=r.substring(s+2),u={title:c,description:o,username:i+" "+l.substring(0,1)+"."},m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:u,access:n})},t.next=12,fetch("http://localhost:7071/api/AddPost",m).then((function(e){return e.json()})).then((function(e){console.log(e),window.location.href="/posts"}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.isAuthenticated?r.a.createElement("div",{className:"container-fluid search"},r.a.createElement("div",{className:"addpost justify-content-center row"},r.a.createElement(oe.a,null,r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,null,"Title: "),r.a.createElement(te.a,{value:c,type:"text",onChange:function(e){return s(e.target.value)}})),r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,null,"Description: "),r.a.createElement(te.a,{value:o,type:"text",rows:"3",as:"textarea",onChange:function(e){return u(e.target.value)}})),r.a.createElement(ce.a,{onClick:function(e){return m(e)}},"Submit")))):null}var pe=a(93);function he(e){var t=Object(n.useState)(!0),a=Object(W.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),i=Object(W.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(""),p=Object(W.a)(m,2),h=p[0],d=p[1],f=Object(n.useState)(""),E=Object(W.a)(f,2),v=E[0],b=E[1],g=Object(n.useState)(""),y=Object(W.a)(g,2),N=y[0],j=y[1],O=Object(n.useState)({}),k=Object(W.a)(O,2),x=k[0],C=k[1];Object(n.useEffect)((function(){}));var w=function(t){t.preventDefault();var a=e.getAccessToken(J.scopes),n={firstName:o,lastName:h,dob:v,birthPlace:N},r={method:"GET",headers:{"Content-Type":"application/json",data:JSON.stringify(n),access:a}};console.log(n),fetch("/api/HttpTrigger7",r).then((function(e){return e.json()})).then((function(e){C(e),s(!1),console.log(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid px-0 search"},r.a.createElement("div",{className:"row justify-content-center "},r.a.createElement("div",{className:"col-auto"},r.a.createElement("div",{className:"search-nest"},r.a.createElement(oe.a,{onSubmit:function(e){return w(e)}},r.a.createElement("h3",null,"Search for yourself or relatives"),r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,{column:!0},"First Name:"),r.a.createElement(pe.a,{md:"12"},r.a.createElement(te.a,{placeholder:"First Name",type:"text",value:o,onChange:function(e){return u(e.target.value)}}))),r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,{column:!0},"Last Name:"),r.a.createElement(pe.a,{md:"12"},r.a.createElement(te.a,{placeholder:"Last Name",type:"text",value:h,onChange:function(e){return d(e.target.value)}}))),r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,{column:!0},"DOB or Year:"),r.a.createElement(pe.a,{md:"12"},r.a.createElement(te.a,{placeholder:"DOB or Year",type:"text",value:v,onChange:function(e){return b(e.target.value)}}))),r.a.createElement(ue.a,{as:$.a},r.a.createElement(ee.a,{column:!0},"Place of Birth:"),r.a.createElement(pe.a,{md:"12"},r.a.createElement(te.a,{placeholder:"Place of Birth",type:"text",value:N,onChange:function(e){return j(e.target.value)}}))))),r.a.createElement("div",{className:"row justify-content-center align-content-center"},r.a.createElement("div",{className:"col-auto letsgoBtn"},r.a.createElement(ce.a,{className:"letsgo",type:"submit",value:"Submit",onClick:function(e){return w(e)}},"Let's go"))))),c&&r.a.createElement("p",null,"Loading.")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},!c&&x.map((function(e){return r.a.createElement("div",{key:e._id,className:"entry"},r.a.createElement("div",{className:"name"},r.a.createElement("p",null,e.firstName+" "+e.lastName)),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"DOB: ",e.dob?e.dob:"Unknown"),r.a.createElement("p",null,"Bith Place: ",e.birthPlace?e.birthPlace:"Unknown"),r.a.createElement("p",null,"Relationship: ",e.relationship?e.relationship:"Unknown")))})))))}function de(e){Object(n.useEffect)((function(){l()}),[]);var t=Object(n.useState)([]),a=Object(W.a)(t,2),c=a[0],s=a[1],l=function(){var t=Object(L.a)(G.a.mark((function t(){var a,n,r,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAccessToken(J.scopes);case 2:return a=t.sent,n={method:"GET",headers:{"Content-Type":"application/json",access:a}},t.next=6,fetch("/api/HttpTrigger6",n,{});case 6:return r=t.sent,t.next=9,r.json();case 9:c=t.sent,console.log(c),s(c);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"family-tree"},c.map((function(e){return r.a.createElement("div",{key:e._id,className:"entry"},r.a.createElement("div",{className:"name"},r.a.createElement("p",null,e.firstName+" "+e.lastName)),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"DOB: ",e.dob?e.dob:"Unknown"),r.a.createElement("p",null,"Bith Place: ",e.birthPlace?e.birthPlace:"Unknown"),r.a.createElement("p",null,"Relationship: ",e.relationship?e.relationship:"Unknown")))}))))}var fe=H(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleRenderProps=function(e){return r.a.createElement(ie,e)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=null;return this.props.error&&(t=r.a.createElement(F,{message:this.props.error.message,debug:this.props.error.debug})),r.a.createElement(m.c,null,r.a.createElement("div",null,r.a.createElement(B,{isAuthenticated:this.props.isAuthenticated,authButtonMethod:this.props.isAuthenticated?this.props.logout:this.props.login,user:this.props.user}),t,r.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(_,Object.assign({},t,{isAuthenticated:e.props.isAuthenticated,user:e.props.user,authButtonMethod:e.props.login}))}}),r.a.createElement(m.a,{path:"/family",className:"nav-link",exact:!0,render:function(t){return r.a.createElement(de,Object.assign({getAccessToken:e.props.getAccessToken},t))}}),r.a.createElement(m.a,{path:"/addfamily",className:"nav-link",render:function(t){return r.a.createElement(re,Object.assign({getAccessToken:e.props.getAccessToken,isAuthenticated:e.props.isAuthenticated},t))}}),r.a.createElement(m.a,{path:"/posts",render:function(t){return r.a.createElement(ie,Object.assign({user:e.props.user},t))}}),r.a.createElement(m.a,{path:"/addpost",render:function(t){return r.a.createElement(me,Object.assign({getAccessToken:e.props.getAccessToken,isAuthenticated:e.props.isAuthenticated,user:e.props.user},t))}}),r.a.createElement(m.a,{exact:!0,path:"/search",render:function(t){return r.a.createElement(he,Object.assign({getAccessToken:e.props.getAccessToken,isAuthenticated:e.props.isAuthenticated},t))}})))}}]),a}(n.Component));s.a.render(r.a.createElement(h.a,null,r.a.createElement(fe,null)),document.getElementById("root"))},40:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/grandmother.630c58a4.svg"},75:function(e,t,a){},97:function(e,t,a){e.exports=a(122)}},[[97,1,2]]]);
//# sourceMappingURL=main.10a86612.chunk.js.map