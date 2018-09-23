import Vision3000 from '../../../src';
import hqImgs from '../images/highres/*.jpg';
import lqImgs from '../images/sqip/*.svg';
import zenscroll from 'zenscroll';


const nav = document.querySelector('.nav');
const gutter = window.innerWidth > 720 ? 60 : 30;
let cols, props, navItems, observables;

const _getClassList = index => {
  const list = ['observable'];

  if (index > 2 && index < 7) list.push('observable--40');

  return list;
}

const appendNav = () => {
  const fragment = document.createDocumentFragment();
  const navFragment = document.createDocumentFragment();

  cols = Math.floor((window.innerWidth - gutter) / 60);
  props = {
    cells: cols * 3,
    width: cols * 60,
  };

  nav.querySelector('.nav__wrap').style.width = `${props.width}px`;

  observables = [...Array(props.cells).keys()].map((n, index) => {
    const elem = document.createElement('div');
    const fig = document.createElement('figure');
    const img = new Image();

    img.src = lqImgs[`${index + 1}`];
    img.dataset.src = hqImgs[`${index + 1}`];
    elem.classList.add(..._getClassList(index));
    elem.id = `image-${index}`;

    fig.appendChild(img);
    elem.appendChild(fig);
    fragment.appendChild(elem);

    // navigation
    const navItem = document.createElement('li');

    if (index < Object.keys(hqImgs).length) {
      const navLink = document.createElement('a');
      const navLabel = document.createElement('span');
      const navDot = document.createElement('span');

      navLabel.innerHTML = `IMG${index + 1}`;

      navLabel.classList.add('nav__label');
      navDot.classList.add('nav__dot');
      navLink.setAttribute('href', `#image-${index}`);

      navLink.append(navLabel, navDot);
      navItem.appendChild(navLink);
    }

    navItem.classList.add('nav__item');
    navFragment.appendChild(navItem);

    return elem;
  });

  nav.querySelector('ul').appendChild(navFragment);
  document.body.appendChild(fragment);
}

appendNav();

navItems = [...document.querySelectorAll('.nav__item')];

const Observer = new Vision3000({
  rootMargin: '0px 0px',
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  onIntersect: (inView, viewed) => {
    navItems.forEach((item, index) => {
      if (inView.includes(index)) {
        item.classList.add('viewing');
      } else {
        item.classList.remove('viewing');
      }
    });
  },
});

observables.forEach((observable, index) => {
  Observer.observe(observable, {
    onLoadStart: (elem, image) => {
      console.log(`Element ${index} is in vision with src ${image.dataset.src}`);
      navItems[index].classList.add('is-loading');
      observable.classList.add('is-loading');
    },
    onLoad: (elem, image) => {
      console.log(`Image Loaded! Source is ${image.dataset.src}.`);
      observable.classList.remove('is-loading');
      navItems[index].classList.add('viewed');
      navItems[index].classList.remove('is-loading');
    }
  });
});

