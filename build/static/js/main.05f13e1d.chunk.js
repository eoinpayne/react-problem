/*! For license information please see main.05f13e1d.chunk.js.LICENSE.txt */
(this["webpackJsonpcgc-landing2"]=this["webpackJsonpcgc-landing2"]||[]).push([[0],{37:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(42),a(43),a(44),a(19),a(9)),l=(a(15),a(33),a(5));a(12);function u(){return r.a.createElement(o.a,{bg:"light",variant:"light",fixed:"top",id:"myHeader",expand:"lg"},r.a.createElement(o.a.Brand,{style:{"margin-right":"3rem"},href:"https://simplecgt.com"},"simplecgt.com"),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}))}var d=a(36),m=a(6),E=a.n(m);function s(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(52),u=Object(l.a)(o,2),d=u[0],m=u[1],s=Object(n.useState)(3),f=Object(l.a)(s,2),U=f[0],v=f[1],R=Object(n.useState)(0),g=Object(l.a)(R,2),S=(g[0],g[1]),p=Object(n.useState)(0),D=Object(l.a)(p,2),b=D[0],P=D[1],O=(Object(n.useEffect)((function(){var t=E()(e.row.date).add(28,"days"),a=E()(),n=t.diff(a,"days");v(n>=0?n:"--")})),Object(n.useEffect)((function(){P((e.row.fmvEUR-e.row.acquiredPriceEUR)*(d/100)*c)}),[c,d]),Object(n.useEffect)((function(){console.log("ref returned");var t=e.updateOuterState(e.index,b);console.log("ref returned eND"),console.log("propalopadoo -7087089-798"),console.dir(t[0].totalLiability),console.log("propalopadoo -");var a=e.index>0?t[e.index-1].totalLiability:t[e.index].totalLiability;S(b+a)}),[b]),function(e){return r.a.createElement("select",{name:"taxRate",id:"taxRate",value:d,onChange:e.onChange},r.a.createElement("option",{value:"52"},"52%"),r.a.createElement("option",{value:"48.5"},"48.5%"),r.a.createElement("option",{value:"46"},"46%"))}),q=Object(n.useRef)();return r.a.createElement("tr",null,r.a.createElement("td",null,e.index),r.a.createElement("td",null,E()(e.row.date).format("YYYY-MM-DD")),r.a.createElement("td",null,"$",e.row.acquiredPriceUSD),r.a.createElement("td",null,"\u20ac",e.row.acquiredPriceEUR),r.a.createElement("td",null,"$",e.row.fmvUSD),r.a.createElement("td",null,"\u20ac",e.row.fmvEUR),r.a.createElement("td",null,r.a.createElement("input",{value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement("td",null,r.a.createElement(O,{onChange:function(e){return m(e.target.value)}})),r.a.createElement("td",{id:"totalLiability",ref:q},b),r.a.createElement("td",{id:"amountGain"},(e.row.fmvEUR-e.row.acquiredPriceEUR)*c),r.a.createElement("td",null,E()(e.row.date).add(29,"days").format("YYYY-MM-DD")),r.a.createElement("td",null,U),r.a.createElement("td",null,"coming soon"),r.a.createElement("td",null,"coming soon"))}var f=a(22),U=a(34);function v(){var e=Object(n.useRef)([]);console.log("&&&&&&&&&&&&&&&&&&&&&&&&      (*(*(*(*(    myRef"),console.log(e);var t=function(t,a){var n=Object(d.a)(e.current),r=n.find((function(e){return e.id===t}));return r?(r.totalLiability=a,console.log(" updated row baby = ".concat(JSON.stringify(r))),console.log(" after baby -> myObj"),console.dir(n)):(n.push({id:t,totalLiability:a}),console.log(" else Obj new concat"),console.dir(n)),e.current=n,n};return r.a.createElement(n.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Manual ESPP calculator"),r.a.createElement("p",{style:{textAlign:"center"}},"This will be automated soon in with the main site, requiring you to just upload Morgan Staley export file.")),r.a.createElement(f.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),["Share Deposit Date YYYY-MM-DD","$ Acquired Price","\u20ac Acquired Price","$ FMV","\u20ac FMV","Units","Tax Rate","TOTAL LIABILITY","total amount of gain made on share option","RTSO to be paid by","days left to pay","FORM 11: Enter total chargeable amount","FORM 11: Enter the amount of Relevant Tax on a Share Option (RTSO) paid"].map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,[{date:"2017-11-30",acquiredPriceUSD:83.63,acquiredPriceEUR:70.29,fmvUSD:103,fmvEUR:86.57},{date:"2018-05-31",acquiredPriceUSD:85.44,acquiredPriceEUR:73.07,fmvUSD:130.96,fmvEUR:112},{date:"2018-11-30",acquiredPriceUSD:107.34,acquiredPriceEUR:94.83,fmvUSD:164,fmvEUR:144.89},{date:"2019-05-31",acquiredPriceUSD:142.63,acquiredPriceEUR:127.37,fmvUSD:204.12,fmvEUR:182.28,units:10},{date:"2019-11-30",acquiredPriceUSD:152.25,acquiredPriceEUR:138,fmvUSD:179.12,fmvEUR:162.57,units:10},{date:"2020-05-31",acquiredPriceUSD:146.14,acquiredPriceEUR:131.45,fmvUSD:183.43,fmvEUR:164.99,units:10},{date:"2020-11-30",acquiredPriceUSD:151.27,acquiredPriceEUR:126.212,fmvUSD:224.55,fmvEUR:187.76,units:10}].map((function(a,n){return r.a.createElement(s,{row:a,index:n,updateOuterState:t,myStateRef:e})})))))}var R=a(13);var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("br",null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(23),p={esppRowData:[{id:0,date:"2017-11-30",acquiredPriceUSD:83.63,acquiredPriceEUR:70.29,fmvUSD:103,fmvEUR:86.57},{id:1,date:"2018-05-31",acquiredPriceUSD:85.44,acquiredPriceEUR:73.07,fmvUSD:130.96,fmvEUR:112},{id:2,date:"2018-11-30",acquiredPriceUSD:107.34,acquiredPriceEUR:94.83,fmvUSD:164,fmvEUR:144.89},{id:3,date:"2019-05-31",acquiredPriceUSD:142.63,acquiredPriceEUR:127.37,fmvUSD:204.12,fmvEUR:182.28,units:10},{id:4,date:"2019-11-30",acquiredPriceUSD:152.25,acquiredPriceEUR:138,fmvUSD:179.12,fmvEUR:162.57,units:10},{id:5,date:"2020-05-31",acquiredPriceUSD:146.14,acquiredPriceEUR:131.45,fmvUSD:183.43,fmvEUR:164.99,units:10},{id:6,date:"2020-11-30",acquiredPriceUSD:999,acquiredPriceEUR:999,fmvUSD:0,fmvEUR:0,units:99}]};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return"ADD_ARTICLE"===t.type?Object.assign({},e,{articles:e.articles.concat(t.payload)}):"UPDATE_UNITS"===t.type?Object.assign({},e,{esppRowData:e.esppRowData.concat(t.payload)}):e},b=Object(S.b)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(R.a,{store:b},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.05f13e1d.chunk.js.map