"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{696:function(t,n,e){e.d(n,{M1:function(){return c},V0:function(){return s},fh:function(){return i},jP:function(){return o},rj:function(){return a}});var r=e(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="8ea045b96646bcab5dbf8f19b575f601",a=function(){return r.Z.get("/trending/movie/day",{params:{api_key:u}}).then((function(t){return t.data}))},i=function(t){return r.Z.get("/movie/"+t,{params:{api_key:u}}).then((function(t){return t.data}))},c=function(t){return r.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:u}}).then((function(t){return t.data}))},o=function(t){return r.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:u}}).then((function(t){return t.data}))},s=function(t){return r.Z.get("/search/movie",{params:{api_key:u,query:t}}).then((function(t){return t.data}))}},468:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(689),u="button_btn__59NTc",a=e(184),i=function(){var t=(0,r.s0)(),n=(0,r.TH)();return(0,a.jsx)("button",{onClick:function(){var e=n.state;t(e)},className:u,children:"Go back"})}},134:function(t,n,e){e.r(n);var r=e(439),u=e(791),a=e(87),i=e(689),c=e(696),o=e(468),s=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],h=(0,u.useState)(""),d=(0,r.Z)(h,2),l=d[0],m=d[1],p=(0,a.lr)(),v=(0,r.Z)(p,2),_=v[0],b=v[1],g=(0,i.TH)(),j=_.get("query");return(0,u.useEffect)((function(){(0,c.V0)(j).then((function(t){return f(t.results)}))}),[j]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)("div",{children:(0,s.jsx)("form",{onSubmit:function(t){t.preventDefault(),b({query:l})},children:(0,s.jsx)("input",{onChange:function(t){return m(t.target.value)},className:"",type:"text",placeholder:"Search images and photos"})})}),(0,s.jsx)("ul",{children:e.map((function(t){var n=t.title,e=t.id;return(0,s.jsx)("li",{children:(0,s.jsx)(a.OL,{to:"/movies/"+e,state:g,children:n})},e)}))})]})}}}]);
//# sourceMappingURL=134.44e0e420.chunk.js.map