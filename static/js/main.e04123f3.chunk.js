(this.webpackJsonpmovify=this.webpackJsonpmovify||[]).push([[0],{30:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var i,c,o,a,r,l,s,d,p,x,b,j,f,u,h,O,v,g,w=t(1),m=t.n(w),y=t(21),k=t.n(y),S=(t(30),t(9)),M=t.n(S),z=t(22),T=t(5),C=t(2),L=t(3),P=t(0),R=L.a.div(i||(i=Object(C.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    width: 250px;\n    box-shadow: 0 3px 10px 0 #aaa;\n    cursor: pointer;\n    border-radius: 0px;\n    background: #bbdddd;\n    box-shadow:  28px 28px 56px #839b9b,\n             -28px -28px 56px #f3ffff;\n    \n"]))),D=L.a.img(c||(c=Object(C.a)(["\n    object-fit: cover;\n    height: 362px;\n"]))),E=L.a.span(o||(o=Object(C.a)(["\n    font-size: 18px;\n    font-weight: 400;\n    color: black;\n    margin: 15px 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n"]))),I=L.a.span(a||(a=Object(C.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n"]))),q=function(n){var e=n.movie,t=e.Title,i=e.Year,c=e.imdbID,o=e.Poster,a=n.query,r=t.split(new RegExp("(".concat(a,")"),"gi")),l=Object(P.jsxs)("span",{children:[" ",r.map((function(n,e){return Object(P.jsx)("span",{style:n.toLowerCase()===a.toLowerCase()?{fontWeight:"bold"}:{},children:n},e)}))," "]});return Object(P.jsxs)(R,{onClick:function(){return n.onMovieSelect(c)},children:[Object(P.jsx)(D,{src:o,alt:"  Poster missing!"}),Object(P.jsx)(E,{children:l}),Object(P.jsxs)(I,{children:["Year: ",i]})]})},A=t(7),B=t.n(A),G=L.a.div(r||(r=Object(C.a)(["\n    display: flex;\n    flex-direction: row;\n    padding: 20px 30px;\n    justify-content: center;\n    border-bottom: 1px solid lightgray;\n"]))),J=L.a.span(l||(l=Object(C.a)(["\nright: 32px;\ntop: 32px;\nwidth: 32px;\nheight: 32px;\nopacity: 1;\ncolor: black;\ncursor:pointer\nfont-size: large;\n"]))),Y=L.a.img(s||(s=Object(C.a)(["\n    object-fit: cover;\n    height: 362px;\n"]))),F=L.a.span(d||(d=Object(C.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n\n"]))),N=L.a.span(p||(p=Object(C.a)(["\n    font-size: 18px;\n    font-weight: 500;\n    color: black;\n    text-transform: capitalize;\n    \n"]))),W=L.a.span(x||(x=Object(C.a)(["\n    font-size: 16px;\n    font-weight: 500;\n    color: black;\n    overflow: hidden;\n    margin: 4px 0;\n    text-transform: capitalise;\n    text-overflow: ellipsis;\n    & span {\n        opacity: 0.6;\n    }\n"]))),X=function(n){var e=Object(w.useState)(),t=Object(T.a)(e,2),i=t[0],c=t[1],o=n.selectedMovie;return Object(w.useEffect)((function(){B.a.get("https://www.omdbapi.com/?i=".concat(o,"&apikey=").concat("c7d74ded")).then((function(n){c(n.data)}))}),[o]),Object(P.jsx)(G,{children:i?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Y,{src:null===i||void 0===i?void 0:i.Poster}),Object(P.jsxs)(F,{children:[Object(P.jsxs)(N,{children:[null===i||void 0===i?void 0:i.Type,": ",null===i||void 0===i?void 0:i.Title]}),Object(P.jsxs)(W,{children:["IMDB Rating : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.imdbRating})]}),Object(P.jsxs)(W,{children:["Language : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.Language})]}),Object(P.jsxs)(W,{children:["Released : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.Released})]}),Object(P.jsxs)(W,{children:["Genre : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.Genre})]}),Object(P.jsxs)("movieDetail",{children:["Actors : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.Actors})]}),Object(P.jsxs)("movieDetail",{children:["Plot : ",Object(P.jsx)("span",{children:null===i||void 0===i?void 0:i.Plot})]})]}),Object(P.jsx)(J,{onClick:function(){return n.onMovieSelect()},children:"X"})]}):"Loading..."})},H=L.a.body(b||(b=Object(C.a)(["\ndisplay : flex;\nflex-direction : column; \n\n"]))),K=L.a.div(j||(j=Object(C.a)(["\n  margin-left: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Q=(L.a.img(f||(f=Object(C.a)(["\n  width: 48px;\n  height: 48px;\n  margin: 15px;\n"]))),L.a.div(u||(u=Object(C.a)(["\ndisplay: flex;\nflex-direction: row;\n\ncolor: white;\npadding: 10px;\nheight:45px;\nfont-weight : bold;\nalign-items: center; \njustify-content:space-between;\nfont-family: 'Style Script', cursive;\nfont-size: 55px;\nborder-radius: 0px;\nbackground: #383939;\n\n"])))),U=L.a.div(h||(h=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  background-color: white;\n  justify-content: center;\n  width: 30%;\n  border-radius: 15px;\n  margin-left: 20px;\n  border : 5px\n  border-outline: black;\n  border-style: double;\n  \n"]))),V=L.a.input(O||(O=Object(C.a)(["\n\n  margin-left: 15px;\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  width: 100%;\n"]))),Z=L.a.div(v||(v=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap:24px;\n justify-content: space-evenly;\n background-color: #bbdddd;\n"]))),$=L.a.span(g||(g=Object(C.a)(["\n    font-size: 18px;\n    font-weight: 400;\n    color: black;\n    margin: 15px 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n"])));var _=function(){var n=Object(w.useState)(""),e=Object(T.a)(n,2),t=e[0],i=e[1],c=Object(w.useState)(),o=Object(T.a)(c,2),a=o[0],r=o[1],l=Object(w.useState)([]),s=Object(T.a)(l,2),d=s[0],p=s[1],x=Object(w.useState)(),b=Object(T.a)(x,2),j=b[0],f=b[1],u=function(){var n=Object(z.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.a.get("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("c7d74ded"));case 2:t=n.sent,p(t.data.Search);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(P.jsxs)(H,{children:[Object(P.jsxs)(Q,{children:[Object(P.jsx)(K,{children:"Movify"}),Object(P.jsx)(U,{children:Object(P.jsx)(V,{onChange:function(n){clearTimeout(a),i(n.target.value);var e=setTimeout((function(){return u(n.target.value)}),500);r(e)},placeholder:"Type Movie name...",value:t})})]}),j&&Object(P.jsx)(X,{selectedMovie:j,onMovieSelect:f}),Object(P.jsx)(Z,{children:(null===d||void 0===d?void 0:d.length)?d.map((function(n,e){return Object(P.jsx)(q,{movie:n,onMovieSelect:f,query:t},e)})):Object(P.jsx)($,{children:'"Movie Not found!"'})})]})};k.a.render(Object(P.jsx)(m.a.StrictMode,{children:Object(P.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e04123f3.chunk.js.map