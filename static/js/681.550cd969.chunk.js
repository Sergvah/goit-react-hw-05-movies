"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{9681:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),i=n(7689),o=n(4390),c=n(3),u=n(184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],h=(0,a.useState)(!1),f=(0,r.Z)(h,2),l=f[0],p=f[1],d=(0,i.UO)().movieId;if((0,a.useEffect)((function(){p(!0),(0,o.Ad)(d).then((function(e){return s(e.data.results)})).catch((function(e){return console.log(e)})).finally(p(!1))}),[n,d]),n)return(0,u.jsxs)("div",{children:[l&&(0,u.jsx)(c.Z,{}),n.length>0?(0,u.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h2",{children:["Author: ",n]}),(0,u.jsxs)("p",{children:[" ",r]})]},t)}))}):"We don't have any rewiws for this movie"]})}},3:function(e,t,n){var r=n(5243),a=n(184);t.Z=function(){return(0,a.jsx)(r.Bb,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})}},4390:function(e,t,n){n.d(t,{$L:function(){return o},Ad:function(){return s},M3:function(){return i},Pq:function(){return u},dm:function(){return c}});var r=n(2388),a="6f3a72a470b06bab99f8d69f54b4e2d3",i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&page=1&query=").concat(e))},c=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))},u=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(e){return r.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=681.550cd969.chunk.js.map