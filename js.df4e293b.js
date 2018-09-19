parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"SnTA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){var r=new Image;return new Promise(function(o,n){r.src=e,r.onload=o(r),r.onerror=n})};exports.default=e;
},{}],"uOLC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initVision3000=void 0;var e=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),o=require("./RequestImage"),n=t(o);function t(e){return e&&e.__esModule?e:{default:e}}function i(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function(){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,o),this.options={rootMargin:e.rootMargin||"0px 0px",threshold:e.threshold||[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},this.onIntersect=e.onIntersect,this.FPS=2,this.init()}return e(o,[{key:"init",value:function(){var e=this;window.VISION3K={observer:new IntersectionObserver(function(o){e.intersect(o)},this.options),observe:this.observe,onIntersect:this.onIntersect,observables:[],inView:[],viewed:[],errors:[]},this.scrollIntent()}},{key:"intersect",value:function(e){e.forEach(function(e){var o=e.target.observeId;window.VISION3K.inView=window.VISION3K.inView.filter(function(e){return e!==o}),e.isIntersecting&&window.VISION3K.inView.push(o)});var o=window.VISION3K.onIntersect||this.onIntersect;"function"==typeof o&&o(window.VISION3K.inView,window.VISION3K.viewed)}},{key:"loadImages",value:function(){window.VISION3K.inView.forEach(function(e){if(!window.VISION3K.viewed.includes(e)){var o=window.VISION3K.observables[e-1],t=o.querySelector("img");window.VISION3K.viewed.push(e),"function"==typeof o.onLoadStart&&o.onLoadStart(o,t,window.VISION3K.viewed),(0,n.default)(t.dataset.src).then(function(e){e.classList=t.classList,e.decode().then(function(){t.replaceWith(e),"function"==typeof o.onLoad&&o.onLoad(o,t,window.VISION3K.viewed)})}).catch(function(e){console.error("Failed to load image "+t.dataset.src)})}})}},{key:"scrollIntent",value:function(){var e=this;this.scrollProps={scrollSpeed:0,isHalted:!0,prevScrollSpeed:0,prevY:0};!function o(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){var n=Math.abs(window.scrollY-e.scrollProps.prevY),t=0===n;e.scrollProps={scrollSpeed:n,isHalted:t,prevY:window.scrollY,prevScrollSpeed:e.scrollProps.scrollSpeed},t&&e.loadImages(),o()},1e3/e.FPS)}()}},{key:"observe",value:function(e,o){window.VISION3K.observables.push(e),e.observeId=window.VISION3K.observables.length,e.onLoadStart=o.onLoadStart,e.onLoad=o.onLoad,window.VISION3K.observer.observe(e)}}]),o}(),s=exports.initVision3000=function(e){return new r(e)};exports.default=r;
},{"./RequestImage":"SnTA"}],"J6BM":[function(require,module,exports) {
module.exports="1.d7cc9dba.jpg";
},{}],"FZ0x":[function(require,module,exports) {
module.exports="10.74012a5e.jpg";
},{}],"jIk+":[function(require,module,exports) {
module.exports="11.5e28673f.jpg";
},{}],"+US0":[function(require,module,exports) {
module.exports="12.c6f8d9fc.jpg";
},{}],"xK0/":[function(require,module,exports) {
module.exports="13.c79f9824.jpg";
},{}],"r8tv":[function(require,module,exports) {
module.exports="14.d8bc68f1.jpg";
},{}],"2yC6":[function(require,module,exports) {
module.exports="15.fdc95caf.jpg";
},{}],"3iz/":[function(require,module,exports) {
module.exports="16.56889c30.jpg";
},{}],"C4Qk":[function(require,module,exports) {
module.exports="17.18729ece.jpg";
},{}],"9jAr":[function(require,module,exports) {
module.exports="18.04fe478b.jpg";
},{}],"tD22":[function(require,module,exports) {
module.exports="19.913fd124.jpg";
},{}],"cZPY":[function(require,module,exports) {
module.exports="2.f6774e7b.jpg";
},{}],"aEpx":[function(require,module,exports) {
module.exports="20.a11142b9.jpg";
},{}],"vzy7":[function(require,module,exports) {
module.exports="21.6eb22dc7.jpg";
},{}],"yNVL":[function(require,module,exports) {
module.exports="3.1b368b39.jpg";
},{}],"rDyL":[function(require,module,exports) {
module.exports="4.7850af65.jpg";
},{}],"mQpB":[function(require,module,exports) {
module.exports="5.cb5209bf.jpg";
},{}],"Azi9":[function(require,module,exports) {
module.exports="6.6afe6d73.jpg";
},{}],"8bpu":[function(require,module,exports) {
module.exports="7.048876f8.jpg";
},{}],"1kjx":[function(require,module,exports) {
module.exports="8.13afb857.jpg";
},{}],"YTtI":[function(require,module,exports) {
module.exports="9.8e21099f.jpg";
},{}],"0UXf":[function(require,module,exports) {
module.exports={1:require("./1.jpg"),2:require("./2.jpg"),3:require("./3.jpg"),4:require("./4.jpg"),5:require("./5.jpg"),6:require("./6.jpg"),7:require("./7.jpg"),8:require("./8.jpg"),9:require("./9.jpg"),10:require("./10.jpg"),11:require("./11.jpg"),12:require("./12.jpg"),13:require("./13.jpg"),14:require("./14.jpg"),15:require("./15.jpg"),16:require("./16.jpg"),17:require("./17.jpg"),18:require("./18.jpg"),19:require("./19.jpg"),20:require("./20.jpg"),21:require("./21.jpg")};
},{"./1.jpg":"J6BM","./10.jpg":"FZ0x","./11.jpg":"jIk+","./12.jpg":"+US0","./13.jpg":"xK0/","./14.jpg":"r8tv","./15.jpg":"2yC6","./16.jpg":"3iz/","./17.jpg":"C4Qk","./18.jpg":"9jAr","./19.jpg":"tD22","./2.jpg":"cZPY","./20.jpg":"aEpx","./21.jpg":"vzy7","./3.jpg":"yNVL","./4.jpg":"rDyL","./5.jpg":"mQpB","./6.jpg":"Azi9","./7.jpg":"8bpu","./8.jpg":"1kjx","./9.jpg":"YTtI"}],"EfBJ":[function(require,module,exports) {
module.exports="1.61e614d4.svg";
},{}],"j2x8":[function(require,module,exports) {
module.exports="10.61fb2d1b.svg";
},{}],"aVUw":[function(require,module,exports) {
module.exports="11.f0adf2a7.svg";
},{}],"RAVJ":[function(require,module,exports) {
module.exports="12.ed04b171.svg";
},{}],"8127":[function(require,module,exports) {
module.exports="13.95ab7e36.svg";
},{}],"xIEx":[function(require,module,exports) {
module.exports="14.0eef52ff.svg";
},{}],"ibPm":[function(require,module,exports) {
module.exports="15.b97e5c1d.svg";
},{}],"HZl7":[function(require,module,exports) {
module.exports="16.75bedb94.svg";
},{}],"1OMV":[function(require,module,exports) {
module.exports="17.4ad5f147.svg";
},{}],"zXuo":[function(require,module,exports) {
module.exports="18.8d5136fa.svg";
},{}],"BFVC":[function(require,module,exports) {
module.exports="19.3fcc0dd5.svg";
},{}],"KCM/":[function(require,module,exports) {
module.exports="2.bc45c936.svg";
},{}],"LnFk":[function(require,module,exports) {
module.exports="20.7518c81a.svg";
},{}],"/xaA":[function(require,module,exports) {
module.exports="21.6061fb21.svg";
},{}],"FpcJ":[function(require,module,exports) {
module.exports="3.550b36e5.svg";
},{}],"YD8d":[function(require,module,exports) {
module.exports="4.fbac35c5.svg";
},{}],"ObW3":[function(require,module,exports) {
module.exports="5.e9b57b3d.svg";
},{}],"l4uv":[function(require,module,exports) {
module.exports="6.65e00eba.svg";
},{}],"ZtkZ":[function(require,module,exports) {
module.exports="7.9ccfda50.svg";
},{}],"tEZl":[function(require,module,exports) {
module.exports="8.ff3f911d.svg";
},{}],"6JpL":[function(require,module,exports) {
module.exports="9.0c20450e.svg";
},{}],"bgT6":[function(require,module,exports) {
module.exports={1:require("./1.svg"),2:require("./2.svg"),3:require("./3.svg"),4:require("./4.svg"),5:require("./5.svg"),6:require("./6.svg"),7:require("./7.svg"),8:require("./8.svg"),9:require("./9.svg"),10:require("./10.svg"),11:require("./11.svg"),12:require("./12.svg"),13:require("./13.svg"),14:require("./14.svg"),15:require("./15.svg"),16:require("./16.svg"),17:require("./17.svg"),18:require("./18.svg"),19:require("./19.svg"),20:require("./20.svg"),21:require("./21.svg")};
},{"./1.svg":"EfBJ","./10.svg":"j2x8","./11.svg":"aVUw","./12.svg":"RAVJ","./13.svg":"8127","./14.svg":"xIEx","./15.svg":"ibPm","./16.svg":"HZl7","./17.svg":"1OMV","./18.svg":"zXuo","./19.svg":"BFVC","./2.svg":"KCM/","./20.svg":"LnFk","./21.svg":"/xaA","./3.svg":"FpcJ","./4.svg":"YD8d","./5.svg":"ObW3","./6.svg":"l4uv","./7.svg":"ZtkZ","./8.svg":"tEZl","./9.svg":"6JpL"}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("../../../src"),t=d(e),a=require("../images/highres/*.jpg"),n=d(a),r=require("../images/sqip/*.svg"),i=d(r);function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var c=document.querySelector(".nav"),o=window.innerWidth>720?60:30,l=Math.floor((window.innerWidth-o)/60),u={cells:3*l,width:60*l};c.querySelector(".nav__wrap").style.width=u.width+"px";var m=function(e){var t=["observable"];return e>2&&e<7&&t.push("observable--40"),t},p=document.createDocumentFragment(),v=document.createDocumentFragment(),h=21,f=[].concat(s(Array(u.cells).keys())).map(function(e,t){var a,r=document.createElement("div"),d=document.createElement("figure"),c=new Image;c.src=i.default[""+(t+1)],c.dataset.src=n.default[""+(t+1)],(a=r.classList).add.apply(a,s(m(t))),r.id="image-"+(t+1),d.appendChild(c),r.appendChild(d),p.appendChild(r);var o=document.createElement("li"),l=document.createElement("a"),u=document.createElement("span"),h=document.createElement("span");return u.innerHTML="IMG"+(t+1),u.classList.add("nav__label"),h.classList.add("nav__dot"),o.classList.add("nav__item"),l.setAttribute("href","#image-"+(t+1)),l.append(u,h),o.appendChild(l),v.appendChild(o),r});c.querySelector("ul").appendChild(v),document.body.appendChild(p);var g=[].concat(s(document.querySelectorAll(".nav__item"))),w=new t.default({rootMargin:"0px 0px",threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],onIntersect:function(e,t){g.forEach(function(t,a){e.includes(a+1)?t.classList.add("viewing"):t.classList.remove("viewing")})}});f.forEach(function(e,t){w.observe(e,{onLoadStart:function(a,n){console.log("Element "+t+" is in vision with src "+n.dataset.src),e.classList.add("is-loading")},onLoad:function(a,n){console.log("Image Loaded! Source is "+n.dataset.src+"."),e.classList.remove("is-loading"),g[t].classList.add("viewed")}})});
},{"../../../src":"uOLC","../images/highres/*.jpg":"0UXf","../images/sqip/*.svg":"bgT6"}]},{},["QvaY"], null)