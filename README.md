# Vision3000

`Vision3000` 👁 LazyLoading for the new Millenium™

Only `800b` with zero dependencies!


## wth is `Vision3000`

You've read it above. It's a way to LazyLoad images into your webpages.
There is one key difference: LazyLoading as we know and use now only cares about
when an image has `entered` the viewport. It has no concern whether or not the user
intends to view that specific section or image. In other words, it loads everything
regardless of intent.

To describe this even further, read below, my butchered writing:

>"A user arrives into an image-heavy website; hundreds of images, with a scrollHeight
of thousands of pixels. The user is not interested in every single image: he/she might
choose to scroll fast to a certain section, or use some kind of UI to navigate to a
certain section– or they might just be scrubbing through, trying to survey the entire
page. LazyLoading or implementations of the IntersectionObserver will load images as
soon as it passes a threshold, even if no one (including imaginary friends) ever intended
to look at it. With `VISION3000`, images are only loaded if images are within a user's `scope`
or `field of vision` so to speak."

In addition to loading images, you can even trigger running/pausing scripts. For example:
animations, some gpu/processor heavy stuff like canvas and the like.


## The approach

`Vision3000` uses the modern IntersectionObserver API. It tunes into the user's
activity (e.g. what is in view) and only loads assets that it has registered
to be `currently in view` when the user has become idle at a certain section
of a webpage– webpages are consumed by sections after all.

Basically, this is how the line of thought goes:

>**Me**: Hey `Vision3000` need you.

>**Vision3000**: OK, I'm now observing all the images you specified!

*from this point on Vision3000 will be referred to as "Greg" for our own sake*

>**Greg**: Hmm, K done. So at given times, I will have a look and record which images are in-vision.

>**Greg**: When you're idle (did your scroll position change drastically?), then im going
to load all the images which i've identified to be within your vision.

>**Greg**: I'll take note when they have finished loading. If they have, then they are
forever recorded as "loaded". So the next time I have a look when they're in
vision, I dont try to do the same thing over again.

>**Greg**: On each of these events (intersection, loading, loaded) I will let you know,
so you can do things as they happen!

>**Me**: K!


## Getting started

`yarn add vision3000` or `npm install vision3000`

then just import however you like, e.g.

```js
  import MyObserver from 'vision3000';
```

Before everything else, you must define your DOM structure. Your images MUST have a `data-src` attribute.
This is the source of the image that you ultimately want to load. The example below shows an implementation that loads in low quality placeholders (e.g. blurred images with low filesize) which works great btw.

```html
  <div class="amazing-image-omg">
    <figure>
      <img src="/images/lowResPlaceholder1.jpg" data-src="/images/highRes1.jpg" />
    </figure>
  </div>

  <div class="amazing-image-omg">
    <figure>
      <img src="/images/lowResPlaceholder2.jpg" data-src="/images/highRes2.jpg" />
    </figure>
  </div>
```

First instantiate `VISION3000`. You can pass in some basic configuration options like rootMargin and threshold (the values you see below are the defaults, should you choose not to pass in any). The meat here is the `onIntersection` callback where you can basically do MAGIC.

```js
  const Observer = new Vision3000({
    rootMargin: '0px 0px',
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    onIntersection: (inView, viewed) => {
      console.log('Intersected!');
      console.log('Intersected image indexes are:', inView);
      console.log('Images that have already been viewed and loaded are:', viewed);
    }
  });

```

Once you've instantiated `VISION3000` you can now add things to observe. Otherwise, what's the point. Just loop through your DOM elements. *Q: why not just pass the array itself? I feel like looping gives more flexibility in terms of making it simpler to pass in different callbacks for each observed element.*

```js
  const myAmazingImages = document.querySelectorAll('.amazing-image-omg');

  myAmazingImages.forEach(image => {
    Observer.observe(image, {
      onLoadStart: (elem, image) => {
        // elem is the parent element we're watching
        // image is the <img> element we want to load within that parent
        console.log(`Yo, starting to load image with src ${image.dataset.src}`);
        elem.classList.add('is-loading');
      },
      onLoad: (elem, image) => {
        console.log(`Merry Christmas, image with src ${image.dataset.src} has successfully been loaded.`);
        elem.classList.toggle('is-loading', 'is-loaded');
      },
    });
  })
```

That's pretty much all there is to it. The three methods that are exposed to you as well as the record of what's currently being viewed and what's been viewed I feel gives way to a lot of possibilities.


## Demo

Click [here](https://ezekielaquino.github.io/Vision3000) to view the mini-demo!
*Note: Try scrolling fast, clicking on an IMG item on the nav, scrubbing using the scrollbar*


## P.S.

Vision3000 is available as a React component (`ReactVision3000`). So you can just do something like <ObservableImage /> in your React apps. Coming soon in a second.


## P.P.S

Do you have any comments/suggestions? Would you like to improve `VISION3000`? Please feel free to post issues, or open pull requests. I would love that. <3


## P.P.P.S

Many thanks to [Microbundle](https://github.com/developit/microbundle) and [Parcel](https://github.com/parcel-bundler/parcel) (which I wrapped as [ModuleBuilder3000](https://github.com/ezekielaquino/ModuleBuilder3000)) for making building things a pleasure.



