(function(n){function e(e){for(var r,o,u=e[0],i=e[1],l=e[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);b&&b(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,o=1;o<t.length;o++){var i=t[o];0!==c[i]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},c={app:0},a=[];function o(n){return u.p+"js/"+({}[n]||n)+"."+{"chunk-1805ecd1":"d9d80651","chunk-2d0af0fb":"f12f72e7","chunk-2d0cc046":"e41252ba","chunk-2d0cf4c3":"9a1846dd","chunk-2d0f0a00":"244c5fc4","chunk-30b6cd67":"79413053","chunk-6f04b1a8":"a98744df","chunk-735037e8":"215e647f","chunk-a3d6d12e":"b7055ae9"}[n]+".js"}function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t=c[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=c[n]=[e,r]}));e.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(n);var l=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(d);var t=c[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}c[n]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/jiangsvue3_week6/dist/",u.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var b=l;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"277b":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=t("bc3a"),a=t.n(c),o=t("2106"),u=t.n(o);function i(n,e){var t=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(t)}t("c1b5");const l={};l.render=i;var d=l,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),f={class:"navbar navbar-expand-lg navbar-dark bg-dark "},s={class:"container-fluid"},p=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"RE:HOUSE",-1),h=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},O={class:"navbar-nav"},j=Object(r["f"])(" >"),g=Object(r["f"])("首頁"),m=Object(r["f"])(" | >"),k=Object(r["f"])("關於我們"),y=Object(r["f"])(" | >"),w=Object(r["f"])("產品列表"),P=Object(r["f"])(" | >"),_=Object(r["f"])("購物車"),A=Object(r["f"])(" | >"),x=Object(r["f"])("後台管理頁面");function M(n,e){var t=Object(r["u"])("router-link"),c=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("nav",f,[Object(r["g"])("div",s,[p,h,Object(r["g"])("div",v,[Object(r["g"])("div",O,[j,Object(r["g"])(t,{class:"nav-link",to:"/"},{default:Object(r["A"])((function(){return[g]})),_:1}),m,Object(r["g"])(t,{class:"nav-link",to:"/about"},{default:Object(r["A"])((function(){return[k]})),_:1}),y,Object(r["g"])(t,{class:"nav-link",to:"/products"},{default:Object(r["A"])((function(){return[w]})),_:1}),P,Object(r["g"])(t,{class:"nav-link",to:"/cart"},{default:Object(r["A"])((function(){return[_]})),_:1}),A,Object(r["g"])(t,{class:"nav-link",to:"/admin/products"},{default:Object(r["A"])((function(){return[x]})),_:1})])])])]),Object(r["g"])(c)],64)}const S={};S.render=M;var E=S,T=[{path:"/",name:"Home",component:E,children:[{path:"",component:function(){return t.e("chunk-2d0cc046").then(t.bind(null,"4bac"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-2d0f0a00").then(t.bind(null,"9cbb"))}},{path:"/products",name:"Products",component:function(){return t.e("chunk-6f04b1a8").then(t.bind(null,"ed84"))}},{path:"/product/:id",name:"Product",component:function(){return t.e("chunk-a3d6d12e").then(t.bind(null,"658f"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-2d0cf4c3").then(t.bind(null,"62b3"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-30b6cd67").then(t.bind(null,"ac5b"))}},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-735037e8").then(t.bind(null,"a92e"))},children:[{path:"products",name:"adminProducts",component:function(){return t.e("chunk-1805ecd1").then(t.bind(null,"372d"))}},{path:"orders",name:"adminOrders",component:function(){return t.e("chunk-2d0af0fb").then(t.bind(null,"0d5f"))}}]}],C=Object(b["a"])({history:Object(b["b"])(),routes:T}),L=C,N=Object(r["c"])(d);N.use(L),N.use(u.a,a.a),N.mount("#app")},c1b5:function(n,e,t){"use strict";t("277b")}});
//# sourceMappingURL=app.8971a58a.js.map