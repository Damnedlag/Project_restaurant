!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=()=>{const e=document.getElementById("container");e.innerHTML="Well, this is the contact page so here's some  contact copypaste: ";const t=document.createElement("p");e.appendChild(t).innerHTML="This is an address"};var r=()=>{let e=[{name:"Some soup",price:"2$"},{name:"Spagetti",price:"4$"},{name:"Pizza",price:"5$"}];const t=document.createElement("ul");for(let n=0;n<3;n++){let i=document.createElement("li");i.innerHTML=e[n].name+" "+e[n].price,t.appendChild(i)}const n=document.getElementById("container");n.innerHTML="",document.getElementById("title").innerHTML="Menu",n.appendChild(t)};var o=()=>{document.getElementById("title").innerHTML="Welcome to my default restaurant homepage",document.getElementById("container").innerHTML="This is the introduction of our great team at this dream restaurant. Jk, it's placeholder. \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};const a=document.getElementById("content"),u=document.createElement("div");u.id="banner",a.appendChild(u);const c=document.createElement("ul");c.id="navbar";const l=document.createElement("li"),d=document.createElement("li"),m=document.createElement("li");l.innerHTML="Home",m.innerHTML="Contact",d.innerHTML="Menu",c.appendChild(l),c.appendChild(d),c.appendChild(m),u.appendChild(c);const s=document.createElement("h1");s.innerHTML="Welcome to my default restaurant homepage",s.id="title",a.appendChild(s);const p=document.createElement("p");p.id="container",p.innerHTML="This is the introduction of our great team at this dream restaurant. Jk, it's placeholder. \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",a.appendChild(p),m.addEventListener("click",e=>i()),d.addEventListener("click",e=>r()),l.addEventListener("click",e=>o())}]);