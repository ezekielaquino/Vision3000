var o=function(o){void 0===o&&(o={}),this.options={rootMargin:o.rootMargin||"0px 0px",threshold:o.threshold||[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},this.onIntersect=o.onIntersect,this.FPS=2,this.init()};o.prototype.init=function(){var o=this;window.VISION3K={observer:new IntersectionObserver(function(e){o.intersect(e)},this.options),observe:this.observe,onIntersect:this.onIntersect,observables:[],inView:[],viewed:[],errors:[]},this.scrollIntent()},o.prototype.intersect=function(o){o.forEach(function(o){var e=o.target.observeId;window.VISION3K.inView=window.VISION3K.inView.filter(function(o){return o!==e}),o.isIntersecting&&window.VISION3K.inView.push(e)});var e=window.VISION3K.onIntersect||this.onIntersect;"function"==typeof e&&e(window.VISION3K.inView,window.VISION3K.viewed)},o.prototype.loadImages=function(){window.VISION3K.inView.forEach(function(o){if(!window.VISION3K.viewed.includes(o)){var e=window.VISION3K.observables[o],t=e.querySelector("img");window.VISION3K.viewed.push(o),"function"==typeof e.onLoadStart&&e.onLoadStart(e,t,window.VISION3K.viewed),function(o){var e=new Image;return new Promise(function(t,n){e.src=o,e.onload=t(e),e.onerror=n})}(t.dataset.src).then(function(o){o.classList=t.classList,o.decode().then(function(){t.replaceWith(o),"function"==typeof e.onLoad&&e.onLoad(e,t,window.VISION3K.viewed)})}).catch(function(o){console.error("Failed to load image "+t.dataset.src)})}})},o.prototype.scrollIntent=function(){var o=this;this.scrollProps={scrollSpeed:0,isHalted:!0,prevScrollSpeed:0,prevY:0};var e=function(){clearTimeout(o.timeout),o.timeout=setTimeout(function(){var t=Math.abs(window.scrollY-o.scrollProps.prevY),n=0===t;o.scrollProps={scrollSpeed:t,isHalted:n,prevY:window.scrollY,prevScrollSpeed:o.scrollProps.scrollSpeed},n&&o.loadImages(),e()},1e3/o.FPS)};e()},o.prototype.observe=function(o,e){window.VISION3K.observables.push(o),o.observeId=window.VISION3K.observables.length-1,o.onLoadStart=e.onLoadStart,o.onLoad=e.onLoad,window.VISION3K.observer.observe(o)},module.exports=o;
