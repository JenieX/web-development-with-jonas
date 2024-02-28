// @ts-check

import elements from './elements.js';
import { asserted, closeModal, openModal } from './helpers.js';

// Modal window
(() => {
  for (const btnOpenModal of document.querySelectorAll('.btn--show-modal')) {
    btnOpenModal.addEventListener('click', openModal);
  }

  elements.btnCloseModal.addEventListener('click', closeModal);
  elements.overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !elements.modal.classList.contains('hidden')) {
      closeModal();
    }
  });
})();

// Button scrolling
(() => {
  elements.btnScrollTo.addEventListener('click', function (event) {
    // const section1Coords = elements.section1.getBoundingClientRect();

    // console.log(/** @type {HTMLElement} */ (event.target).getBoundingClientRect());
    // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

    // No animation
    // window.scrollTo(
    //   section1Coords.left + window.scrollX,
    //   section1Coords.top + window.scrollY,
    // );

    // window.scrollTo({
    //   left: section1Coords.left + window.scrollX,
    //   top: section1Coords.top + window.scrollY,
    //   behavior: 'smooth',
    // });

    elements.section1.scrollIntoView({ behavior: 'smooth' });
  });
})();

// Tabbed component
(() => {
  elements.tabsContainer.addEventListener('click', (event) => {
    const target = /** @type {Element} */ (event.target);

    const tab = target.closest('.operations__tab');

    if (!tab || !(tab instanceof HTMLElement)) {
      return;
    }

    // Clearing tabs

    for (const element of elements.tabs) {
      element.classList.remove('operations__tab--active');
    }

    for (const element of elements.tabsContent) {
      element.classList.remove('operations__content--active');
    }

    // Activating clicked tab

    tab.classList.add('operations__tab--active');

    const tabContentSelector = `.operations__content--${tab.dataset.tab}`;
    const tabContent = asserted(document.querySelector(tabContentSelector));
    tabContent.classList.add('operations__content--active');
  });
})();

// Menu fade animation
(() => {
  // /** @type {(this: number, event: Event) => void} */
  // const handleHover = function (event) {
  //   const target = /** @type {HTMLElement} */ (event.target);

  //   if (target.classList.contains('nav__link')) {
  //     const elements = [
  //       ...asserted(target.closest('.nav')?.querySelectorAll('.nav__link')),
  //       asserted(target.closest('.nav')?.querySelector('img')),
  //     ];

  //     for (const element of elements) {
  //       if (element !== target) {
  //         // const e = /** @type {HTMLElement} */ (element);
  //         /** @type {HTMLElement} */ (element).style.opacity = this.toString();
  //       }
  //     }
  //   }
  // };

  // elements.nav.addEventListener('mouseover', handleHover.bind(0.5));
  // elements.nav.addEventListener('mouseout', handleHover.bind(1));

  /** @type {(opacity: number, event: Event) => void} */
  const handleHover = (opacity, event) => {
    const target = /** @type {HTMLElement} */ (event.target);

    if (target.classList.contains('nav__link')) {
      const elements = [
        ...asserted(target.closest('.nav')?.querySelectorAll('.nav__link')),
        asserted(target.closest('.nav')?.querySelector('img')),
      ];

      for (const element of elements) {
        if (element !== target) {
          // const e = /** @type {HTMLElement} */ (element);
          /** @type {HTMLElement} */ (element).style.opacity = opacity.toString();
        }
      }
    }
  };

  // The original event parameter will be pushed to be the second
  elements.nav.addEventListener('mouseover', handleHover.bind(undefined, 0.5));
  elements.nav.addEventListener('mouseout', handleHover.bind(undefined, 1));
})();

// Sticky navigation: Intersection Observer API
(() => {
  const { height: navHeight } = elements.nav.getBoundingClientRect();

  /**
   * @type {(
   *   entries: IntersectionObserverEntry[],
   *   observer: IntersectionObserver,
   * ) => void}
   */
  const handleIntersection = ([{ isIntersecting, intersectionRatio }]) => {
    // console.log({ isIntersecting, intersectionRatio });

    if (isIntersecting) {
      elements.nav.classList.remove('sticky');
    } else {
      elements.nav.classList.add('sticky');
    }
  };

  const headerObserver = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(elements.header);
})();

// Reveal sections
(() => {
  return;

  /**
   * @type {(
   *   entries: IntersectionObserverEntry[],
   *   observer: IntersectionObserver,
   * ) => void}
   */
  const handleIntersection = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const target = /** @type {HTMLElement} */ (entry.target);
        console.log('In view:', target);
        observer.unobserve(target);
        target.classList.remove('section--hidden');
      }
    }
  };

  const observer = new IntersectionObserver(handleIntersection, {
    // root: null,
    threshold: 0.15,
  });

  for (const section of elements.sections) {
    observer.observe(section);
    section.classList.add('section--hidden');
  }
})();

(() => {
  /**
   * @type {(
   *   entries: IntersectionObserverEntry[],
   *   observer: IntersectionObserver,
   * ) => void}
   */
  const handleIntersection = (entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const target = /** @type {HTMLImageElement} */ (entry.target);

        target.addEventListener('load', () => target.classList.remove('lazy-img'));
        setTimeout(() => {
          target.src = asserted(target.dataset.src);
        }, 1000);

        observer.unobserve(target);
      }
    }
  };

  const imgObserver = new IntersectionObserver(handleIntersection, {
    // root: null,
    threshold: 0,
    // rootMargin: '200px',
  });

  for (const element of document.querySelectorAll('img[data-src]')) {
    imgObserver.observe(element);
  }
})();

(() => {
  /* let firstSlidePosition = 0;

  const getFirstSlidePositions = (modifier) => {
    if (modifier > 0) {
      firstSlidePosition -= 100;
    } else {
      firstSlidePosition += 100;
    }

    // Reset
    if (firstSlidePosition < -200) {
      firstSlidePosition = 0;
    } else if (firstSlidePosition > 0) {
      firstSlidePosition = -200;
    }

    console.log(firstSlidePosition);
  };

  getFirstSlidePositions(1);
  getFirstSlidePositions(1); */

  const slider = /** @type {HTMLElement} */ (document.querySelector('.slider'));

  // slider.innerHTML =
    // '<div class=slide><img src=./img/img-1.jpg></div><div class=slide><img src=./img/img-2.jpg></div><div class=slide><img src=./img/img-3.jpg></div><div class=slide><img src=./img/img-4.jpg></div><button class="slider__btn slider__btn--left">←</button> <button class="slider__btn slider__btn--right">→</button><div class=dots></div>';

  const slides = [
    .../** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('.slide')),
  ];
  const btnLeft = asserted(document.querySelector('.slider__btn--left'));
  const btnRight = asserted(document.querySelector('.slider__btn--right'));
  const dotContainer = asserted(document.querySelector('.dots'));

  // slider.style.setProperty('transform', 'scale(0.3) translateX(-600px)');
  // slider.style.setProperty('overflow', 'visible');

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, index) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`,
      );
    });
  };

  createDots();

  /** @type {(slide: number) => void} */
  const activateDot = (slide) => {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    asserted(
      document.querySelector(`.dots__dot[data-slide="${slide}"]`),
    ).classList.add('dots__dot--active');
  };

  /** @type {(slide: number) => void} */
  const goToSlide = (slide) => {
    // slides.forEach((element, index) => {
    //   element.style.setProperty(
    //     'transform',
    //     `translateX(${100 * (index - slide)}%)`,
    //   );
    // });

    for (const [index, element] of slides.entries()) {
      // console.log(index - slide);

      element.style.setProperty(
        'transform',
        `translateX(${100 * (index - slide)}%)`,
      );
    }
  };

  goToSlide(currentSlide);
  activateDot(currentSlide);

  const nextSlide = () => {
    // currentSlide += 1;

    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = () => {
    // currentSlide -= 1;

    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide -= 1;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', ({ key }) => {
    if (key === 'ArrowLeft') {
      prevSlide();
    } else if (key === 'ArrowRight') {
      nextSlide();
    }
  });

  dotContainer.addEventListener('click', (event) => {
    const target = /** @type {HTMLElement} */ (event.target);

    if (target.classList.contains('dots__dot')) {
      const slide = Number(asserted(target.dataset.slide));
      goToSlide(slide);
      activateDot(slide);
    }
  });
})();
