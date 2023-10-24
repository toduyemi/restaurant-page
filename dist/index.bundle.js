(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(537),o=t.n(a),r=t(645),i=t.n(r),d=t(667),c=t.n(d),l=new URL(t(143),t.b),s=i()(o()),p=c()(l);s.push([n.id,`html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\n\nbody {\n    line-height: 1;\n}\n\ninput {\n    border: none;\n    outline: none;\n}\n\nmenu,\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Template styling */\nbody {\n    color: #F8EDE3;\n    font-family: "Lato", sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url(${p});\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n\nheader,\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n    height: 80px;\n\n    width: 100vw;\n\n    background: rgba(0, 0, 0, .5);\n}\n\nnav div {\n    cursor: pointer;\n}\n\n/* Home-Page Styling */\n\n.home-page {\n    margin-top: 25vh;\n}\n\n.blurb-ctr {\n    width: 40vw;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    padding: 30px;\n\n    background: rgba(0, 0, 0, .5);\n}\n\n.home-page h2 {\n    font-size: 3rem;\n    font-weight: 600;\n\n    align-self: flex-end;\n}\n\n/* Menu Page Styling*/\n\n.menu-page h1 {\n    font-size: 3rem;\n    margin-bottom: 5rem;\n}\n\n.menu-page h2 {\n    font-size: 2rem;\n}\n\n.menu-ctr {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(300px, 1fr));\n    grid-auto-rows: minmax(300px, 600px);\n}\n\n.menu-ctr>div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-page img {\n    align-self: center;\n    height: 25rem;\n    width: 20rem;\n}\n\n.drink-item ul {\n    display: grid;\n    grid-template: 1fr 1fr/ 1fr 1fr\n}\n\n/*COntact page styling*/\n.contact-page {\n    width: 75vw;\n    display: grid;\n    grid-template: 1fr 3fr/ 1fr 1fr 1fr;\n    margin-top: 80px;\n}\n\n.contact-page h2 {\n    font-size: 2rem;\n}\n\nform {\n    grid-area: 2/ 3/3/4;\n}\n\n.map-ctr {\n    grid-area: 2/1/3/3;\n}\n\niframe {\n    width: 100%;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;;IAYI,cAAc;AAClB;;AAEA,kDAAkD;AAClD;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;;;IAGI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA,qBAAqB;AACrB;IACI,cAAc;IACd,+BAA+B;IAC/B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mDAA4C;IAC5C,kCAAkC;IAClC,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;AAChC;;;AAGA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;;IAEZ,YAAY;;IAEZ,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA,sBAAsB;;AAEtB;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;;IAEb,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB,oBAAoB;AACxB;;AAEA,qBAAqB;;AAErB;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,oDAAoD;IACpD,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA,uBAAuB;AACvB;IACI,WAAW;IACX,aAAa;IACb,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf",sourcesContent:["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\n\nbody {\n    line-height: 1;\n}\n\ninput {\n    border: none;\n    outline: none;\n}\n\nmenu,\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Template styling */\nbody {\n    color: #F8EDE3;\n    font-family: \"Lato\", sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url('./assets/coffee-books.jpg');\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n\nheader,\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n    height: 80px;\n\n    width: 100vw;\n\n    background: rgba(0, 0, 0, .5);\n}\n\nnav div {\n    cursor: pointer;\n}\n\n/* Home-Page Styling */\n\n.home-page {\n    margin-top: 25vh;\n}\n\n.blurb-ctr {\n    width: 40vw;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    padding: 30px;\n\n    background: rgba(0, 0, 0, .5);\n}\n\n.home-page h2 {\n    font-size: 3rem;\n    font-weight: 600;\n\n    align-self: flex-end;\n}\n\n/* Menu Page Styling*/\n\n.menu-page h1 {\n    font-size: 3rem;\n    margin-bottom: 5rem;\n}\n\n.menu-page h2 {\n    font-size: 2rem;\n}\n\n.menu-ctr {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(300px, 1fr));\n    grid-auto-rows: minmax(300px, 600px);\n}\n\n.menu-ctr>div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-page img {\n    align-self: center;\n    height: 25rem;\n    width: 20rem;\n}\n\n.drink-item ul {\n    display: grid;\n    grid-template: 1fr 1fr/ 1fr 1fr\n}\n\n/*COntact page styling*/\n.contact-page {\n    width: 75vw;\n    display: grid;\n    grid-template: 1fr 3fr/ 1fr 1fr 1fr;\n    margin-top: 80px;\n}\n\n.contact-page h2 {\n    font-size: 2rem;\n}\n\nform {\n    grid-area: 2/ 3/3/4;\n}\n\n.map-ctr {\n    grid-area: 2/1/3/3;\n}\n\niframe {\n    width: 100%;\n}"],sourceRoot:""}]);const m=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);a&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],d=0;d<n.length;d++){var c=n[d],l=a.base?c[0]+a.base:c[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=t(p),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(A);else{var u=o(A,a);a.byIndex=d,e.splice(d,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var d=t(r[i]);e[d].references--}for(var c=a(n,o),l=0;l<r.length;l++){var s=t(r[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},490:(n,e,t)=>{const a=function(){const n=document.querySelector("#content");n.textContent="",n.className="home-page";const e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("p");e.classList.add("blurb-ctr"),t.textContent="books and beans",a.textContent="Laboris excepteur eiusmod labore magna pariatur qui anim amet proident. Sint Lorem consequat dolore irure ea aliquip dolore ad. Labore adipisicing Lorem adipisicing consequat ad eu eu. Pariatur velit ad occaecat sit. Culpa aliquip velit anim sunt id non nisi cillum tempor occaecat.",e.appendChild(t),e.appendChild(a),n.appendChild(e)},o=function(){const n=document.querySelector("#content");n.textContent="",n.className="contact-page";const e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),i=document.createElement("li");t.textContent="Address",o.textContent="666 Sin St",r.textContent="Vancouver",i.textContent="V6X6X6",a.appendChild(o),a.appendChild(r),a.appendChild(i),e.appendChild(t),e.appendChild(a);const d=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("ul"),s=document.createElement("li"),p=document.createElement("li");c.textContent="Hours",s.textContent="Mon - Thurs: 11am - 12am",p.textContent="Fri - Sun: 11am - 2am",l.appendChild(s),l.appendChild(p),d.appendChild(c),d.appendChild(l);const m=document.createElement("div"),A=document.createElement("h2"),u=document.createElement("ul"),h=document.createElement("li"),f=document.createElement("li");u.appendChild(h),u.appendChild(f),m.appendChild(A),m.appendChild(u),A.textContent="Contact",h.textContent="Phone: 123 456 7890",f.textContent="Email: cuddleandread@gmail.com";const C=document.createElement("form"),g=document.createElement("input"),b=document.createElement("input"),v=document.createElement("input"),E=document.createElement("textarea"),I=document.createElement("button");C.appendChild(g),C.appendChild(b),C.appendChild(v),C.appendChild(E),C.appendChild(I),g.setAttribute("placeholder","Full Name"),b.setAttribute("placeholder","Phone"),v.setAttribute("placeholder","Email"),E.setAttribute("placeholder","Message"),I.textContent="Send";const B=document.createElement("div");B.classList.add("map-ctr"),B.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83320.05578410138!2d-123.15044831026556!3d49.26215120639332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1697948559216!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',n.appendChild(e),n.appendChild(d),n.appendChild(m),n.appendChild(B),n.appendChild(C)},r=t.p+"6321fd47e7bf05ade16d.png",i=t.p+"80ee38f389cf552254da.jpeg",d=t.p+"ae5e5ae886e54539c41e.jpeg",c=function(){const n=document.querySelector("#content");n.textContent="",n.className="menu-page";const e=document.createElement("h1"),t=document.createElement("div");t.classList.add("menu-ctr"),e.textContent="our coffee and recommendations";const a=document.createElement("div"),o=document.createElement("h2"),c=new Image;c.src=r,o.textContent="Jade City by Fonda Lee",a.appendChild(c),a.appendChild(o);const l=document.createElement("div"),s=document.createElement("h2"),p=document.createElement("ul"),m=document.createElement("li"),A=document.createElement("li"),u=document.createElement("li"),h=document.createElement("li");s.textContent="Coffee",m.textContent="Hot",A.textContent="5",u.textContent="Cold",h.textContent="4",p.appendChild(m),p.appendChild(A),p.appendChild(u),p.appendChild(h),l.appendChild(s),l.appendChild(p);const f=document.createElement("div"),C=document.createElement("h2"),g=document.createElement("ul"),b=document.createElement("li"),v=document.createElement("li"),E=document.createElement("li"),I=document.createElement("li");C.textContent="Tea",b.textContent="Matcha Latte",v.textContent="7",E.textContent="Earl Grey",I.textContent="9",g.appendChild(b),g.appendChild(v),g.appendChild(E),g.appendChild(I),f.appendChild(C),f.appendChild(g);const B=document.createElement("div"),x=document.createElement("h2"),y=new Image;y.src=i,x.textContent="Beware of Chicken by CasualFarmer",B.appendChild(y),B.appendChild(x);const k=document.createElement("div"),w=document.createElement("h2"),L=new Image;L.src=d,w.textContent="Unsouled by Will Wight",k.appendChild(L),k.appendChild(w);const S=document.createElement("div"),q=document.createElement("h2"),j=document.createElement("ul"),T=document.createElement("li"),M=document.createElement("li"),z=document.createElement("li"),D=document.createElement("li");q.textContent="Speciality Coffee",T.textContent="Espresso",M.textContent="4",z.textContent="Capaccino",D.textContent="6",j.appendChild(T),j.appendChild(M),j.appendChild(z),j.appendChild(D),S.appendChild(q),S.appendChild(j),t.appendChild(a),t.appendChild(l),t.appendChild(f),t.appendChild(B),t.appendChild(k),t.appendChild(S),n.appendChild(e),n.appendChild(t),a.classList.add("book-item"),B.classList.add("book-item"),k.classList.add("book-item"),l.classList.add("drink-item"),f.classList.add("drink-item"),S.classList.add("drink-item")};var l=t(379),s=t.n(l),p=t(795),m=t.n(p),A=t(569),u=t.n(A),h=t(565),f=t.n(h),C=t(216),g=t.n(C),b=t(589),v=t.n(b),E=t(426),I={};I.styleTagTransform=v(),I.setAttributes=f(),I.insert=u().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=g(),s()(E.Z,I),E.Z&&E.Z.locals&&E.Z.locals,n=t.hmd(n),{init:function(){(function(){const n=document.createElement("header"),e=document.createElement("nav"),t=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("a"),i=document.createElement("a"),d=document.createElement("a");r.textContent="Home",i.textContent="Menu",d.textContent="About",t.classList.add("header-tab","home-link"),a.classList.add("header-tab","menu-link"),o.classList.add("header-tab","about-link"),t.appendChild(r),a.appendChild(i),o.appendChild(d),e.appendChild(t),e.appendChild(a),e.appendChild(o),n.appendChild(e),document.body.prepend(n)})(),a(),this.cacheDom(),this.bindEvents()},cacheDom:function(){this.homeLink=document.querySelector(".home-link"),this.menuLink=document.querySelector(".menu-link"),this.contactLink=document.querySelector(".about-link")},bindEvents:function(){this.homeLink.addEventListener("click",a),this.menuLink.addEventListener("click",c),this.contactLink.addEventListener("click",o)}}.init(),n&&n.hot},143:(n,e,t)=>{n.exports=t.p+"be874c53a81cab93b998.jpg"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return n[a](r,r.exports,t),r.loaded=!0,r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.hmd=n=>((n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!n;)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t(490)})();
//# sourceMappingURL=index.bundle.js.map