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
