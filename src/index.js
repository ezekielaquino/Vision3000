import RequestImage from './RequestImage';


/**
  VISION3000
  2018
  A proof of concept WIP
  It's usable, but use it at your own risk!
  Note: if you're planning to use this in Safari,
  then you have to polyfill IntersectionObserver

  yarn add intersection-observer
  and just import 'intersection-observer' (2.5kb)
  then you're good to go
*/
class Vision3000 {
  constructor(options = {}) {
    this.options = {
      rootMargin: options.rootMargin || '0px 0px',
      threshold: options.threshold || [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };
    this.onIntersect = options.onIntersect;
    this.FPS = 2;
    this.init();
  }

  init() {
    window.VISION3K = {
      observer: new IntersectionObserver(entries => { this.intersect(entries) }, this.options),
      observe: this.observe,
      onIntersect: this.onIntersect,
      observables: [],
      inView: [],
      viewed: [],
      errors: [],
    };

    this.scrollIntent();
  }

  intersect(entries) {
    entries.forEach(entry => {
      const id = entry.target.observeId;

      window.VISION3K.inView = window.VISION3K.inView.filter(item => item !== id);

      if (entry.isIntersecting) window.VISION3K.inView.push(id);
    });

    const onIntersect = window.VISION3K.onIntersect || this.onIntersect;
    if (typeof onIntersect === 'function') onIntersect(window.VISION3K.inView, window.VISION3K.viewed);
  }

  loadImages() {
    window.VISION3K.inView.forEach(index => {
      if (!window.VISION3K.viewed.includes(index)) {
        const element = window.VISION3K.observables[index];
        const image = element.querySelector('img');

        window.VISION3K.viewed.push(index);

        if (typeof element.onLoadStart === 'function') element.onLoadStart(element, image, window.VISION3K.viewed);

        RequestImage(image.dataset.src)
          .then(img => {
            img.classList = image.classList;

            img.decode().then(() => {
              image.replaceWith(img);
              if (typeof element.onLoad === 'function') element.onLoad(element, image, window.VISION3K.viewed);
            });
          })
          .catch(e => {
             console.error(`Failed to load image ${image.dataset.src}`);
          });
      }
    });
  }

  scrollIntent() {
   this.scrollProps = {
      scrollSpeed: 0,
      isHalted: true,
      prevScrollSpeed: 0,
      prevY: 0,
    };

    const setScrollProps = () => {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        const scrollSpeed = Math.abs(window.scrollY - this.scrollProps.prevY);
        const isHalted = scrollSpeed === 0;

        this.scrollProps = {
          scrollSpeed,
          isHalted,
          prevY: window.scrollY,
          prevScrollSpeed: this.scrollProps.scrollSpeed,
        };

        if (isHalted) this.loadImages();

        setScrollProps();
      }, 1000 / this.FPS);
    }

    setScrollProps();
  }

  observe(element, options) {
    window.VISION3K.observables.push(element);

    element.observeId = window.VISION3K.observables.length - 1;
    element.onLoadStart = options.onLoadStart;
    element.onLoad = options.onLoad;

    window.VISION3K.observer.observe(element);
  }
}

export const initVision3000 = options => new Vision3000(options);


export default Vision3000;