  (function () {
    const carousel = document.querySelector('.experiences-hero--carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.experiences-hero__track');
    const slides = Array.from(carousel.querySelectorAll('.experiences-hero__slide'));
    const prevBtn = carousel.querySelector('.experiences-hero__nav--prev');
    const nextBtn = carousel.querySelector('.experiences-hero__nav--next');
    const dotsWrap = carousel.querySelector('.experiences-hero__indicators');

    let index = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 3000;

    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'experiences-hero__dot' + (i === 0 ? ' is-active' : '');
      b.setAttribute('aria-label', `Ir al slide ${i + 1}`);
      b.addEventListener('click', () => {
        goTo(i);
        restartAutoplay();
      });
      dotsWrap.appendChild(b);
      return b;
    });

    function update() {
      track.style.transform = `translateX(${-index * 100}%)`;

      slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === index));

      slides.forEach((s, i) => {
        const v = s.querySelector('video');
        if (!v) return;
        if (i === index) v.play().catch(() => {});
        else { v.pause(); v.currentTime = 0; }
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => goTo(index + 1), AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    prevBtn.addEventListener('click', () => { goTo(index - 1); restartAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(index + 1); restartAutoplay(); });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { goTo(index - 1); restartAutoplay(); }
      if (e.key === 'ArrowRight') { goTo(index + 1); restartAutoplay(); }
    });

    // Click en slide → scroll a la card
    slides.forEach(slide => {
      slide.addEventListener('click', (e) => {
        if (e.target.closest('.experiences-hero__nav') || e.target.closest('.experiences-hero__dot')) return;

        const targetSelector = slide.dataset.target;
        if (!targetSelector) return;

        const target = document.querySelector(targetSelector);
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    update();
    startAutoplay();
  })();

