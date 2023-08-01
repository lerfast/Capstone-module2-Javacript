"use strict";(self.webpackChunkcapstone_module2_javacript=self.webpackChunkcapstone_module2_javacript||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(414),t.b),u=a()(r()),d=s()(p);u.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f9f9f9;\n}\n\nheader {\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px;\n  text-align: center;\n}\n\nmain {\n  padding: 20px;\n}\n\n#items-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.item {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.item h2 {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.item p {\n  font-size: 14px;\n  color: #444;\n}\n\n.item button {\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\nfooter {\n  background-color: #007bff;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n/* Popup Styles */\n\n.popup__background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: rgba(29, 31, 45, 0.7);\n  backdrop-filter: blur(0.5rem);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 700px;\n  height: 95%;\n  border-radius: 15px;\n  background-color: rgb(146 150 154);\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n}\n\n.popup__img-container {\n  width: 87%;\n  margin-top: 20px;\n}\n\n.popup__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n.popup__details {\n  width: 87%;\n  height: 140px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.popup__title {\n  text-align: center;\n  margin-bottom: 25px;\n  font-size: 1.8rem;\n}\n\n.popup__genres,\n.popup__runtime {\n  margin-bottom: 5px;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.popup__btn_x {\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  border: none;\n  background: none;\n  margin: 15px 10px 0 0;\n}\n\n.img__x {\n  width: 17px;\n  height: 17px;\n}\n\n/* Like Button Styles */\n\n.item-like-btn {\n  width: 24px;\n  height: 27px;\n  background-image: url(${d});\n  background-size: cover;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  margin-top: 10px;\n  background-color: transparent;\n}\n\n.item-like-btn:focus,\n.item-like-btn:hover {\n  background-color: transparent;\n  outline: none; /* This will remove the focus outline */\n}\n\n.item-like-btn:focus,\n.item-like-btn:hover,\n.item-like-btn:active,\n.item-like-btn:visited {\n  border: none;\n}\n\n.item-buttons {\n  display: flex;\n  flex-direction: column;\n}\n`,""]);const l=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=o.base?s[0]+o.base:s[0],u=i[p]||0,d="".concat(p," ").concat(u);i[p]=u+1;var l=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),p=0;p<i.length;p++){var u=t(i[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},193:(n,e,t)=>{var o=t(379),r=t.n(o),i=t(795),a=t.n(i),c=t(569),s=t.n(c),p=t(565),u=t.n(p),d=t(216),l=t.n(d),m=t(589),f=t.n(m),g=t(426),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),r()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const b=t.p+"1770f1323761299bebe2.png",v=document.querySelector(".popup__container");async function x(n){const e=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/likes`;try{const n=await fetch(e);if(!n.ok)throw new Error("Failed to get likes.");return await n.json()}catch(n){return[]}}document.addEventListener("click",(n=>{n.target.matches(".item-like-btn")&&async function(n){const e="TsHUjYeYSyNZ9XlIQTrp";try{const t=await async function(n,e){const t=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/likes`,o={item_id:e};try{if(!(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)throw new Error("Failed to create like.");return!0}catch(n){return!1}}(e,n);if(t){const t=(await x(e)).find((e=>e.item_id===n)),o=t?t.likes:0;document.querySelector(`[data-item-id="${n}"] + .like-counter`).innerText=`${o} Likes`}}catch(n){}}(n.target.getAttribute("data-item-id"))})),async function(){try{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()}catch(n){return[]}}().then((n=>async function(n){const e=await x("TsHUjYeYSyNZ9XlIQTrp"),t=document.getElementById("items-container");t.innerHTML="",n.forEach((n=>{const o=e.find((e=>e.item_id===n.id)),r=o?o.likes:0,i=document.createElement("div");i.className="item",i.innerHTML=`<img class="card__img" src="${n.image.medium}">\n      <h2>${n.name}</h2>\n      <p>${n.summary}</p>\n      <div class="item-buttons">\n        <button class="item-like-btn" data-item-id="${n.id}" aria-label="Like"></button>\n        <p class="like-counter">${r} Likes</p>\n      </div>\n    `;const a=document.createElement("button");a.innerText="Show Comments",a.addEventListener("click",(()=>(n=>{v.innerHTML=`\n<div class="popup__background">  \n<div class="popup__body">\n  <button class="popup__btn_x"><img class="img__x" src="${b}"></button>\n<div class="popup__img-container">\n<img class="popup__img" src="${n.image.original}">\n</div>\n  <div class="popup__details">\n    <h2 class="popup__title">${n.name}</h2>\n    <p class="popup__genres">Category: ${n.genres}</p>\n    <p class="popup__runtime">Duration: ${n.runtime} min</p>\n  </div>\n</div>\n</div>`,document.querySelector(".popup__btn_x").addEventListener("click",(()=>{v.innerHTML=""}))})(n))),i.appendChild(a),t.appendChild(i)})),document.getElementById("item-counter").innerText=n.length}(n)))},414:(n,e,t)=>{n.exports=t.p+"ec57d7f930e7fb6e6322.svg"}},n=>{n(n.s=193)}]);