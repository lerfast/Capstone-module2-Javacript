"use strict";(self.webpackChunkcapstone_module2_javacript=self.webpackChunkcapstone_module2_javacript||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f9f9f9;\n}\n\nheader {\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px;\n  text-align: center;\n}\n\nmain {\n  padding: 20px;\n}\n\n#items-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.item {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.item h2 {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.item p {\n  font-size: 14px;\n  color: #444;\n}\n\n.item button {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.item button:hover {\n  background-color: #0056b3;\n}\n\nfooter {\n  background-color: #007bff;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n/* Popup Styles */\n\n.popup__background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: #1d1f2d;\n  mix-blend-mode: hard-light;\n  backdrop-filter: blur(0.5rem);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  max-width: 700px;\n  height: 90%;\n  border-radius: 15px;\n  background-color: #fff;\n  overflow-y: scroll;\n}\n\n.popup__img {\n  width: 87%;\n  height: 40%;\n  margin-top: 20px;\n  border: 1px blue solid;\n}\n\n.popup__details {\n  border: 1px green solid;\n  width: 87%;\n  height: 140px;\n}\n\n.popup__title {\n  text-align: center;\n}\n\n.popup__btn_x {\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  border: none;\n  background: none;\n  margin: 15px 7px 0 0;\n}\n\n.img__x {\n  width: 17px;\n  height: 17px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var p=n[c],s=r.base?p[0]+r.base:p[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var l=t(u),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var p=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},340:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),p=t.n(c),s=t(565),d=t.n(s),u=t(216),l=t.n(u),f=t(589),m=t.n(f),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=t.p+"1770f1323761299bebe2.png",v=document.querySelector(".popup__container");(async function(){try{const n=await fetch("https://api.tvmaze.com/shows");return await n.json()}catch(n){return[]}})().then((n=>function(n){const e=document.getElementById("items-container");e.innerHTML="",n.forEach((t=>{const r=document.createElement("div");r.className="item",r.innerHTML=`<h2>${t.name}</h2><p>${t.summary}</p>`;const o=document.createElement("button");o.innerText="Show Comments",o.addEventListener("click",(n=>{v.innerHTML=`\n<div class="popup__background">  \n<div class="popup__body">\n  <button class="popup__btn_x"><img class="img__x" src="${b}"></button>\n<div class="popup__img">\n</div>\n  <div class="popup__details">\n    <h2 class="popup__title">${n.name}</h2>\n    <p class="popup__genres">Category: ${n.genres}</p>\n    <p class="popup__runtime">Duration: ${n.runtime} min</p>\n  </div>\n</div>\n</div>`,document.querySelector(".popup__btn_x").addEventListener("click",(()=>{v.innerHTML=""}))})(n)),r.appendChild(o),e.appendChild(r)}))}(n)))}},n=>{n(n.s=340)}]);