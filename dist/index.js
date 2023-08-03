"use strict";(self.webpackChunkcapstone_module2_javacript=self.webpackChunkcapstone_module2_javacript||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),c=t(667),s=t.n(c),d=new URL(t(414),t.b),p=a()(i()),l=s()(d);p.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f9f9f9;\n}\n\nheader {\n  background: linear-gradient(to right, #125eb0, rgb(8 60 117 / 80%));\n  color: #fff;\n  padding: 10px;\n  text-align: center;\n}\n\nmain {\n  padding: 20px;\n}\n\n#items-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.item h2 {\n  font-size: 18px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.item p {\n  font-size: 14px;\n  color: #444;\n}\n\n.item button {\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\nfooter {\n  background: linear-gradient(to right, #125eb0, rgb(8 60 117 / 80%));\n  color: #fff;\n  text-align: center;\n  padding: 20px;\n}\n\n/* Popup Styles */\n\n.popup__background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: rgba(29, 31, 45, 0.7);\n  backdrop-filter: blur(0.5rem);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 600px;\n  height: 95%;\n  border-radius: 15px;\n  background: rgb(26 24 24);\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n}\n\n.popup__img-container {\n  width: 82%;\n  max-width: 450px;\n  margin-top: 20px;\n  height: 600px;\n}\n\n.popup__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n.popup__details {\n  width: 87%;\n  height: 140px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: #d7d7d7;\n}\n\n.popup__title {\n  text-align: center;\n  margin-bottom: 25px;\n  font-size: 1.8rem;\n  color: #d7d7d7;\n}\n\n.popup__genres,\n.popup__runtime {\n  margin-bottom: 5px;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.popup__btn_x {\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  border: none;\n  background: none;\n  margin: 15px 14px 0 0;\n}\n\n.img__x {\n  width: 24px;\n}\n\n/* Like Button Styles */\n\n.item-like-btn {\n  width: 24px;\n  height: 27px;\n  background-image: url(${l});\n  background-size: cover;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  margin-top: 10px;\n  background-color: transparent;\n}\n\n.item-like-btn:focus,\n.item-like-btn:hover {\n  background-color: transparent;\n  outline: none; /* This will remove the focus outline */\n}\n\n.item-like-btn:focus,\n.item-like-btn:hover,\n.item-like-btn:active,\n.item-like-btn:visited {\n  border: none;\n}\n\n.item-buttons {\n  display: flex;\n  flex-direction: column;\n}\n\n/* Comments */\n.popoup__comments {\n  width: 90%;\n  margin-top: 10px;\n}\n\n.popup__AddComment {\n  text-align: center;\n  margin-bottom: 14px;\n  display: inline-block;\n  width: 100%;\n  color: #d7d7d7;\n}\n\n.inputs-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 90%;\n  max-width: 500px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#username__input,\n#comments__textarea {\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n#comments__texarea {\n  height: 100px;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n#btn-submit__comments {\n  width: 58%;\n  align-self: center;\n  padding: 13px;\n  border-radius: 6px;\n  margin-top: 2px;\n  min-width: 160px;\n}\n\n.container__comments {\n  display: flex;\n  flex-direction: column;\n  background-color: #d4d4d4;\n  border-radius: 4px;\n  padding: 3px;\n  margin-bottom: 12px;\n}\n\n.comment {\n  background-color: #313131;\n  padding: 10px;\n  margin: 3px;\n  color: #d7d7d7;\n  border-radius: 8px;\n}\n\n.comment-header {\n  color: #d7d7d7;\n  text-align: center;\n  margin-bottom: 13px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.utilities {\n  display: flex;\n  list-style: none;\n  gap: 25px;\n  align-items: center;\n  margin-right: 20px;\n}\n`,""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],p=r[d]||0,l="".concat(d," ").concat(p);r[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:g,references:1})}a.push(l)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var s=o(n,i),d=0;d<r.length;d++){var p=t(r[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},414:(n,e,t)=>{n.exports=t.p+"ec57d7f930e7fb6e6322.svg"},68:(n,e,t)=>{var o=t(379),i=t.n(o),r=t(795),a=t.n(r),c=t(569),s=t.n(c),d=t(565),p=t.n(d),l=t(216),u=t.n(l),m=t(589),g=t.n(m),f=t(426),h={};h.styleTagTransform=g(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),i()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const b=t.p+"91e7b4ff1fcce8ff954d.svg",x=async n=>{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OsSQl2R6ei1KLnLLBTTT/comments?item_id=${n.id}`);(n=>{const e=document.querySelector(".container__comments");e.innerHTML="",Array.isArray(n)&&n.forEach((n=>{e.innerHTML+=`<p class="comment"><strong>${n.username}:</strong> ${n.comment}</p>`}))})(await e.json())},_=document.querySelector(".popup__container"),v=n=>{x(n),_.innerHTML=`\n  <div class="popup__background">  \n  <div class="popup__body">\n    <button class="popup__btn_x"><img class="img__x" src="${b}"></button>\n    <h2 class="popup__title">${n.name}</h2>\n  <div class="popup__img-container">\n  <img class="popup__img" src="${n.image.original}">\n  </div>\n    <div class="popup__details">\n      <p class="popup__genres"><strong>Category:</strong> ${n.genres}</p>\n      <p class="popup__runtime"><strong>Duration:</strong> ${n.runtime} min</p>\n      <p class="popup__runtime"><strong>Language:</strong> ${n.language}</p>\n    </div>\n    <div class="popoup__comments">\n    <h2 class="comment-header"></h2>\n    <div class="container__comments">\n    </div>\n    <h2 class="popup__AddComment">Add a Comment</h2>\n    <div class="inputs-container">\n    <input  id="username__input" type="text" placeholder="Your Name">\n    <input id="comments__textarea" placeholder="Your insights">\n    <button id="btn-submit__comments" type="submit">Submit your comment</button>\n    </div>\n    </div>\n  </div>\n  </div>`,document.querySelector(".popup__btn_x").addEventListener("click",(()=>{_.innerHTML=""})),(n=>{const e=document.getElementById("username__input"),t=document.getElementById("comments__textarea");document.getElementById("btn-submit__comments").addEventListener("click",(async()=>{""!==e.value.trim()&&""!==t.value.trim()&&(await(async(n,e,t)=>{const o=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OsSQl2R6ei1KLnLLBTTT/comments",{method:"POST",body:JSON.stringify({item_id:n.id,username:e.value,comment:t.value}),headers:{"Content-type":"application/json;charset=utf-8"}});return await o.text()})(n,e,t),x(n),e.value="",t.value="")}))})(n);const e=document.querySelector(".container__comments");new MutationObserver((()=>{const n=document.querySelectorAll(".comment").length;document.querySelector(".comment-header").textContent=`Comments(${n})`})).observe(e,{childList:!0,subtree:!0})},y=async n=>{const e=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/likes`;try{const n=await fetch(e);if(!n.ok)throw new Error("Failed to get likes.");return await n.json()}catch(n){return[]}},k=()=>document.getElementById("items-container").querySelectorAll(".item").length,w="TsHUjYeYSyNZ9XlIQTrp",T=async()=>{try{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()}catch(n){return[]}},S=async(n,e)=>{const t=document.getElementById("items-container");t.innerHTML="",n.slice(0,48).forEach((n=>{const o=e.find((e=>e.item_id===n.id)),i=o?o.likes:0,r=document.createElement("div");r.className="item",r.innerHTML=`<img class="card__img" src="${n.image.medium}">\n      <h2 class="title-series">${n.name}</h2>\n      <div class="item-buttons">\n        <button class="item-like-btn" data-item-id="${n.id}" aria-label="Like"></button>\n        <p class="like-counter" data-like-count="${i}">${i} Likes</p>\n      </div>\n    `;const a=document.createElement("button");a.innerText="Show Comments",a.addEventListener("click",(()=>v(n))),r.appendChild(a),t.appendChild(r)}))},L=async n=>{try{const e=await(async(n,e)=>{const t=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/likes`,o={item_id:e};try{if(!(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)throw new Error("Failed to create like.");const i=(await y(n)).find((n=>n.item_id===e));return i?i.likes:0}catch(n){return null}})(w,n);if(null!==e){const t=document.querySelector(`[data-item-id="${n}"] + .like-counter`);t.innerText=`${e} Likes`,t.setAttribute("data-like-count",e),localStorage.setItem(`likes_${n}`,e)}}catch(n){}};document.addEventListener("click",(n=>{if(n.target.matches(".item-like-btn")){const e=n.target.getAttribute("data-item-id");L(e)}})),document.addEventListener("DOMContentLoaded",(async()=>{const n=await T(),e=await y(w);S(n,e),n.forEach((n=>{const e=n.id,t=document.querySelector(`[data-item-id="${e}"] + .like-counter`),o=localStorage.getItem(`likes_${e}`);t&&null!==o?(t.innerText=`${o} Likes`,t.setAttribute("data-like-count",o)):t&&(t.innerText="0 Likes",t.setAttribute("data-like-count","0"))}));const t=k();document.getElementById("total-items-counter").innerText=`Total Series: ${t}`,document.querySelectorAll(".item-like-btn").forEach((n=>{const e=n.getAttribute("data-item-id");L(e)}))})),(async()=>{const n=await T(),e=await y(w);S(n,e),n.forEach((n=>{const e=n.id,t=document.querySelector(`[data-item-id="${e}"] + .like-counter`),o=localStorage.getItem(`likes_${e}`);t&&null!==o?(t.innerText=`${o} Likes`,t.setAttribute("data-like-count",o)):t&&(t.innerText="0 Likes",t.setAttribute("data-like-count","0"))}));const t=k();document.getElementById("total-items-counter").innerText=`Total Series: ${t}`})()}},n=>{n(n.s=68)}]);