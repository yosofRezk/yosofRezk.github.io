/**
 * Youssof Rezk Portfolio Application Engine
 * Architecture: Clean Modular IIFE Controller Pattern
 */
(function PortfolioApp() {
  'use strict';

  /* ==========================================================================
     1. DOM Element References
     ========================================================================== */
  const DOM = {
    heroContainer: document.getElementById('hero'),
    glowingColumns: document.getElementById('cols'),
    heroGlassLaths: document.getElementById('lastre'),
    btnToggle3D: document.getElementById('nav-vetro'),
    btnToggleAudio: document.getElementById('aud'),
    btnMenuOpen: document.getElementById('mo'),
    btnMenuClose: document.getElementById('mc'),
    navigationPanel: document.getElementById('panel'),
    backdropVeil: document.getElementById('veil'),
    workListContainer: document.getElementById('wl'),
    caseStudyModal: document.getElementById('case'),
    caseStudyInner: document.getElementById('ci'),
    contactForm: document.getElementById('cf'),
    clockHero: document.getElementById('clk'),
    clockFooter: document.getElementById('clk2'),
    footerYear: document.getElementById('yr'),
    bigNameContainer: document.getElementById('bn'),
    bigNameWrapper: document.querySelector('.bn-wrap'),
    progressBar: document.getElementById('sp-bar')
  };

  /* ==========================================================================
     2. Helper Utilities & UI Component Builders
     ========================================================================== */
  /**
   * Generates the SVG Arrow Icon Markup
   */
  function createArrowSvg() {
    return `<svg class="arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>`;
  }

  /**
   * Primary Action Button Markup Generator
   */
  function createPrimaryButtonHtml(label, extraClass = '', href = null, targetBlank = false) {
    const tag = href ? 'a' : 'button';
    const hrefAttr = href ? `href="${href}"` : 'type="button"';
    const targetAttr = targetBlank ? 'target="_blank" rel="noopener"' : '';
    const clickHandler = href ? 'onclick="event.stopPropagation()"' : '';

    return `<${tag} ${hrefAttr} ${targetAttr} class="btn-primary-pill ${extraClass}" ${clickHandler}>
              <span class="btn-text-flip">
                <span class="btn-text-front">${label}</span>
                <span class="btn-text-back">${label}</span>
              </span>
              <span class="btn-primary-pill-icon">
                ${createArrowSvg()}
                ${createArrowSvg()}
              </span>
            </${tag}>`;
  }

  /* ==========================================================================
     3. Hero Visual Animation Setup
     ========================================================================== */
  function initHeroVisuals() {
    // Generate Animated Glowing Grid Beams
    if (DOM.glowingColumns) {
      for (let i = 0; i < 30; i++) {
        const col = document.createElement('div');
        col.className = 'glowing-column';
        const beam = document.createElement('div');
        beam.className = 'glowing-beam';
        beam.style.animationDelay = (-0.3 * i) + 's';
        col.appendChild(beam);
        DOM.glowingColumns.appendChild(col);
      }
    }

    // Generate Glass Lath Panels
    if (DOM.heroGlassLaths) {
      const windowWidth = window.innerWidth;
      const count = windowWidth < 768 ? 3 : windowWidth < 992 ? 6 : 12;
      for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = 'hero-lastra';
        const delay = (Math.abs(i - (count - 1) / 2) * 0.225 / (count > 3 ? 1 : 1) * (count > 3 ? 0.5 : 1)).toFixed(3) + 's';
        span.style.setProperty('--scaglione', delay);
        DOM.heroGlassLaths.appendChild(span);
      }
    }

    // Interactive 3D Mode Toggle
    if (DOM.btnToggle3D && DOM.heroContainer) {
      DOM.btnToggle3D.addEventListener('click', () => {
        const isPressed = DOM.btnToggle3D.getAttribute('aria-pressed') === 'true';
        const nextState = !isPressed;
        DOM.btnToggle3D.setAttribute('aria-pressed', nextState);
        DOM.heroContainer.classList.toggle('vetro-acceso', nextState);
      });
    }

    // Audio Button Toggle
    if (DOM.btnToggleAudio) {
      DOM.btnToggleAudio.addEventListener('click', () => {
        const isPressed = DOM.btnToggleAudio.getAttribute('aria-pressed') === 'true';
        DOM.btnToggleAudio.setAttribute('aria-pressed', !isPressed);
      });
    }
  }

  /* ==========================================================================
     4. Navigation Drawer Panel Controls
     ========================================================================== */
  function initNavigationDrawer() {
    function toggleDrawer(isOpen) {
      if (DOM.navigationPanel) DOM.navigationPanel.classList.toggle('on', isOpen);
      if (DOM.backdropVeil) DOM.backdropVeil.classList.toggle('on', isOpen);
      if (DOM.btnMenuOpen) DOM.btnMenuOpen.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        if (window.lenis) window.lenis.stop();
      } else {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start();
      }
    }

    if (DOM.btnMenuOpen) DOM.btnMenuOpen.addEventListener('click', () => toggleDrawer(true));
    if (DOM.btnMenuClose) DOM.btnMenuClose.addEventListener('click', () => toggleDrawer(false));
    if (DOM.backdropVeil) DOM.backdropVeil.addEventListener('click', () => toggleDrawer(false));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(false);
        closeCaseStudyModal();
      }
    });

    if (DOM.navigationPanel) {
      DOM.navigationPanel.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', () => toggleDrawer(false));
      });
    }
  }

  /* ==========================================================================
     5. Projects Showcase Rendering
     ========================================================================== */
  function getP(p, key) {
    const isAr = document.documentElement.lang === 'ar';
    return (isAr && p[key + '_ar']) ? p[key + '_ar'] : p[key];
  }

  function renderProjectsCatalog() {
    if (!DOM.workListContainer || typeof PROJECTS_CATALOG === 'undefined') return;

    DOM.workListContainer.innerHTML = PROJECTS_CATALOG.map((project, index) => {
      return `
        <article class="pr" data-i="${index}" tabindex="0" role="link" aria-label="Open ${project.name} Case Study">
          <div class="shot" ${project.image ? `style="--img:url(${project.image})"` : ''}>
            <div class="win">
              <video muted loop playsinline preload="none" ${project.image ? `poster="${project.image}"` : ''} ${project.video ? `data-src="${project.video}"` : ''}></video>
            </div>
          </div>
          <div class="pinfo">
            <h3 class="pj-title">${project.name}</h3>
            <div class="pj-detail">
              <b>${getP(project, 'category')}</b>
              <span><span data-i18n="case_role">Role: </span>${getP(project, 'role')}</span>
            </div>
            <div class="pj-actions">
              ${createPrimaryButtonHtml('<span data-i18n="case_open">OPEN CASE STUDY</span>', 'btn-case-trigger')}
              ${createPrimaryButtonHtml('<span data-i18n="case_demo">LIVE DEMO ↗</span>', 'btn-live-pill', project.url, true)}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Video Hover & Touch Play Listeners
    document.querySelectorAll('.pr').forEach((row) => {
      const video = row.querySelector('video');
      if (!video) return;

      const playVideo = () => {
        row.classList.add('play');
        if (video.dataset.src && !video.src) {
          video.src = video.dataset.src;
          video.addEventListener('canplay', () => video.classList.add('ok'), { once: true });
        }
        if (video.src) video.play().catch(() => { });
      };

      const pauseVideo = () => {
        row.classList.remove('play');
        video.pause();
      };

      row.addEventListener('mouseenter', playVideo);
      row.addEventListener('mouseleave', pauseVideo);
      row.addEventListener('focusin', playVideo);
      row.addEventListener('focusout', pauseVideo);
    });

    // Touch devices fallback observer
    if (window.matchMedia('(hover: none)').matches) {
      const touchObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.dispatchEvent(new Event(entry.isIntersecting ? 'mouseenter' : 'mouseleave'));
        });
      }, { threshold: 0.6 });

      document.querySelectorAll('.pr').forEach((row) => touchObserver.observe(row));
    }
  }

  /* ==========================================================================
     6. Case Study Modal Controller
     ========================================================================== */
  function initCaseStudyModal() {
    if (!DOM.caseStudyModal) return;

    // Prevent wheel/touch bubbling to main smooth scroll engine
    DOM.caseStudyModal.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
    DOM.caseStudyModal.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });

    // Event Delegation for Project Card Clicks
    if (DOM.workListContainer) {
      DOM.workListContainer.addEventListener('click', (e) => {
        if (e.target.closest('.btn-live-pill')) return;
        const projectArticle = e.target.closest('.pr');
        if (projectArticle) {
          e.preventDefault();
          openCaseStudyModal(parseInt(projectArticle.dataset.i, 10));
        }
      });

      DOM.workListContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (e.target.closest('.btn-live-pill')) return;
          const projectArticle = e.target.closest('.pr');
          if (projectArticle) {
            e.preventDefault();
            openCaseStudyModal(parseInt(projectArticle.dataset.i, 10));
          }
        }
      });
    }
  }

  function openCaseStudyModal(index) {
    document.body.classList.add('case-open');
    if (typeof PROJECTS_CATALOG === 'undefined') return;

    const project = PROJECTS_CATALOG[index];
    const nextProject = PROJECTS_CATALOG[(index + 1) % PROJECTS_CATALOG.length];

    const formatList = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    const formatChips = `<div class="chips">${project.stack.map((x) => `<span>${x}</span>`).join('')}</div>`;
    const textStyle = 'font-size:14px;line-height:1.6;color:rgba(255,255,255,0.7)';

    // Dynamic media block renderer (image or styled placeholder)
    const getSectionMedia = (imgSrc, fallbackText) => {
      if (imgSrc) {
        return `<div class="im" style="padding:0;overflow:hidden;background:transparent;display:flex;align-items:center;justify-content:center;border-radius:14px;aspect-ratio:auto;border:none;"><img src="${imgSrc}" alt="${fallbackText}" style="width:100%;height:auto;object-fit:contain;border-radius:14px;display:block;"></div>`;
      }
      return `<div class="im">${fallbackText}</div>`;
    };

    const imgs = project.caseStudyImages || {};
    const overviewImg = imgs.overview || (project.gallery && project.gallery[0]) || null;
    const featuresImg = imgs.features || (project.gallery && project.gallery[1]) || null;
    const techImg = imgs.technical || (project.gallery && project.gallery[2]) || null;
    const stackImg = imgs.stack || (project.gallery && project.gallery[3]) || null;

    const nextBanner = nextProject.bannerImage || nextProject.image;
    const nxBg = nextBanner
      ? `linear-gradient(to top, rgba(10,10,10,0.95) 10%, rgba(10,10,10,0.4) 100%), url('${nextBanner}') center/cover no-repeat`
      : `linear-gradient(135deg, #141414, #0a0a0a)`;

    DOM.caseStudyInner.innerHTML = `
      <div class="cs-reveal" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2rem">
        <a class="btn-primary-pill" href="#" id="back" style="display:inline-flex">
          <span class="btn-primary-pill-icon" style="transform:rotate(-135deg);margin-right:0.5rem">
            ${createArrowSvg()}
          </span>
          <span class="btn-text-flip">
            <span class="btn-text-front">ALL PROJECTS</span>
            <span class="btn-text-back">ALL PROJECTS</span>
          </span>
        </a>
        ${createPrimaryButtonHtml('VISIT LIVE SITE ↗', 'btn-live-pill', project.url, true)}
      </div>

      <div class="ct cs-reveal">
        <i><span data-i18n="cs_case">Case</span></i><h2 class="h1" data-i18n="cs_study">Study</h2>
      </div>

      <div class="cimg cs-reveal" style="background:rgba(255,255,255,0.03);display:flex;align-items:center;justify-content:center;border-radius:14px;overflow:hidden;">
        ${(project.bannerImage || project.image) ? `<img src="${project.bannerImage || project.image}" alt="${project.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;">` : project.name}
      </div>

      <div class="cm cs-reveal">
        <div>
          <p class="k" data-i18n="cs_p_project">Project</p>
          <p class="cl">${project.name}</p>
        </div>
        <div>
          <p class="k" data-i18n="cs_p_overview">Overview</p>
          <p style="${textStyle};max-width:340px">${getP(project, 'description')}</p>
        </div>
        <div>
          <p class="k" data-i18n="cs_p_services">Services</p>
          <p style="${textStyle.replace('1.6', '1.7')}">${project.category.split(', ').join('<br>')}</p>
        </div>
        <div>
          <p class="k" data-i18n="cs_p_live">Live site</p>
          ${createPrimaryButtonHtml('<span data-i18n="case_demo">LIVE DEMO ↗</span>', 'btn-live-pill', project.url, true)}
        </div>
      </div>

      <div class="cs cs-reveal">
        <div>
          <p class="k mu up" style="font-size:11px"><span data-i18n="cs_01">01 — Overview & role</span></p>
          <p style="${textStyle};margin-top:15px">${getP(project, 'description')}</p>
          <p style="${textStyle};margin-top:12px"><span data-i18n="case_role">Role: </span>${getP(project, 'role')}</p>
        </div>
        ${getSectionMedia(overviewImg, project.name)}
      </div>

      <div class="cs cs-reveal">
        <div>
          <p class="k mu up" style="font-size:11px"><span data-i18n="cs_02">02 — Main features</span></p>
          ${formatList(getP(project, 'features'))}
        </div>
        ${getSectionMedia(featuresImg, project.name)}
      </div>

      <div class="cs cs-reveal">
        <div>
          <p class="k mu up" style="font-size:11px"><span data-i18n="cs_03">03 — Technical implementation</span></p>
          <p style="${textStyle};margin-top:15px">${getP(project, 'technical')}</p>
        </div>
        ${getSectionMedia(techImg, project.name)}
      </div>

      <div class="cs cs-reveal">
        <div>
          <p class="k mu up" style="font-size:11px"><span data-i18n="cs_04">04 — Stack & highlights</span></p>
          ${formatChips}
          <p class="hl">${getP(project, 'highlights')}</p>
        </div>
        ${getSectionMedia(stackImg, project.name)}
      </div>

      <div class="nx cs-reveal" id="nx" style="background: ${nxBg};">
        <p class="up mu" style="font-size:11px;color:var(--brand);position:relative;z-index:2;">Next project</p>
        <h3 class="h1" style="position:relative;z-index:2;">${nextProject.name}</h3>
        <span class="btn-primary-pill" style="align-self:flex-start;position:relative;z-index:2;">
          <span class="btn-text-flip">
            <span class="btn-text-front">OPEN NEXT PROJECT</span>
            <span class="btn-text-back">OPEN NEXT PROJECT</span>
          </span>
          <span class="btn-primary-pill-icon">${createArrowSvg()}</span>
        </span>
      </div>

      <div class="sh cs-reveal">
        <div>
          <i style="font-style:normal">Let's work together</i><br>
          <a class="h1" href="#contact" id="sh">Say hello ↗</a>
        </div>
      </div>
    `;

    DOM.caseStudyModal.classList.add('on');
    DOM.caseStudyModal.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (window.lenis) window.lenis.stop();

    // Modal Navigation Handlers
    document.getElementById('back').onclick = (e) => {
      e.preventDefault();
      closeCaseStudyModal();
    };

    document.getElementById('nx').onclick = () => {
      openCaseStudyModal((index + 1) % PROJECTS_CATALOG.length);
    };

    document.getElementById('sh').onclick = () => {
      closeCaseStudyModal();
    };

    // Scoped Modal Scroll Observer
    const modalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { root: DOM.caseStudyModal, threshold: 0.12 });

    DOM.caseStudyInner.querySelectorAll('.cs-reveal').forEach((el) => modalObserver.observe(el));
  }

  function closeCaseStudyModal() {
    if (!DOM.caseStudyModal) return;
    document.body.classList.remove('case-open');
    DOM.caseStudyModal.classList.remove('on');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
    window.dispatchEvent(new Event('scroll'));
  }

  /* ==========================================================================
     7. Real-time Utilities & Clock
     ========================================================================== */
  function initRealtimeClock() {
    function updateCairoClock() {
      const timeString = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Africa/Cairo',
        hour12: false
      }) + ' (EET)';

      if (DOM.clockHero) DOM.clockHero.textContent = timeString;
      if (DOM.clockFooter) DOM.clockFooter.textContent = timeString;
    }

    updateCairoClock();
    setInterval(updateCairoClock, 1000);

    if (DOM.footerYear) {
      DOM.footerYear.textContent = new Date().getFullYear();
    }
  }

  function initAnimatedFooterName() {
    if (!DOM.bigNameContainer || !DOM.bigNameWrapper) return;

    DOM.bigNameContainer.innerHTML = Array.from('YOUSSOF REZK').map((char) => {
      return `<span class="c" aria-hidden="true"><span>${char === ' ' ? '&nbsp;' : char}</span></span>`;
    }).join('');

    function fitFooterText() {
      DOM.bigNameContainer.style.fontSize = '100px';
      const wrapperWidth = DOM.bigNameWrapper.clientWidth;
      const textWidth = DOM.bigNameContainer.getBoundingClientRect().width;
      if (textWidth > 0) {
        DOM.bigNameContainer.style.fontSize = (100 * wrapperWidth / textWidth * 0.99) + 'px';
      }
    }

    fitFooterText();
    window.addEventListener('resize', fitFooterText);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitFooterText);
    }
  }

  function initTopScrollProgressBar() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (DOM.progressBar) DOM.progressBar.style.width = percentage + '%';
    }, { passive: true });
  }

  function initContactForm() {
    if (!DOM.contactForm) return;

    // Web3Forms configuration
    // 1. Get your free access key from https://web3forms.com/
    // 2. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual key
    const WEB3FORMS_ACCESS_KEY = '991ac592-11dd-4a68-b41f-3c9bb3e25a25';

    DOM.contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
      const originalTextFront = submitBtn.querySelector('.btn-text-front').innerText;
      const originalTextBack = submitBtn.querySelector('.btn-text-back').innerText;

      // Update UI to show sending state
      submitBtn.querySelector('.btn-text-front').innerText = 'SENDING...';
      submitBtn.querySelector('.btn-text-back').innerText = 'SENDING...';
      submitBtn.style.pointerEvents = 'none';

      const formData = new FormData(DOM.contactForm);

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.get('n') || '',
        email: formData.get('e') || '',
        message: formData.get('m') || '',
        subject: 'New Project Inquiry from ' + (formData.get('n') || 'Portfolio Form')
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload)
        });

        const json = await response.json();

        if (response.status === 200) {
          // Success
          submitBtn.querySelector('.btn-text-front').innerText = 'SENT SUCCESSFULLY!';
          submitBtn.querySelector('.btn-text-back').innerText = 'SENT SUCCESSFULLY!';
          DOM.contactForm.reset();
        } else {
          // Error from Web3Forms
          console.error(json);
          submitBtn.querySelector('.btn-text-front').innerText = 'ERROR, TRY AGAIN';
          submitBtn.querySelector('.btn-text-back').innerText = 'ERROR, TRY AGAIN';
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        submitBtn.querySelector('.btn-text-front').innerText = 'NETWORK ERROR';
        submitBtn.querySelector('.btn-text-back').innerText = 'NETWORK ERROR';
      } finally {
        setTimeout(() => {
          submitBtn.querySelector('.btn-text-front').innerText = originalTextFront;
          submitBtn.querySelector('.btn-text-back').innerText = originalTextBack;
          submitBtn.style.pointerEvents = 'auto';
        }, 4000);
      }
    });
  }

  /* ==========================================================================
     8. GSAP & Lenis Scroll Animation Drivers
     ========================================================================== */
  function initGSAPAnimations() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion || !window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis Smooth Scroll Setup
    if (window.Lenis) {
      const lenis = new Lenis({ lerp: 0.09 });
      window.lenis = lenis;

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const targetHash = anchor.getAttribute('href');
          if (targetHash.length > 1 && document.querySelector(targetHash)) {
            e.preventDefault();
            lenis.scrollTo(targetHash, { offset: 0 });
          }
        });
      });
    }

    // Hero Timeline Animations
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .from('.top-nav', { y: -20, opacity: 0, duration: 1 })
      .from('.line > span', { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.1)
      .from('.hero-paragraph-wrapper', { y: 20, opacity: 0, duration: 1.1 }, 0.5)
      .from('.footer-left-col', { y: 14, opacity: 0, duration: 1 }, 0.7);

    // Dynamic Scroll Driven Projects Showcase Scaling & Fade-In/Out Effect
    gsap.utils.toArray('.pr').forEach((row) => {
      const setScrollStyles = (progress) => {
        const sineWave = Math.sin(Math.PI * progress);
        const style = row.style;

        style.setProperty('--w', (40 + 22 * sineWave).toFixed(2));
        style.setProperty('--h', (65 + 32 * sineWave).toFixed(2));

        // Smooth fade-in curve: 0 when off-center, 1.0 at screen center
        const opacityVal = Math.max(0, Math.min(1, (sineWave - 0.15) / 0.65));
        style.setProperty('--o', opacityVal.toFixed(3));
        style.setProperty('--vis', opacityVal > 0.01 ? 'visible' : 'hidden');
        style.setProperty('--glow', sineWave.toFixed(3));
      };

      ScrollTrigger.create({
        trigger: row,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => setScrollStyles(self.progress),
        onRefresh: (self) => setScrollStyles(self.progress)
      });
    });

    // General Sections Stagger Fade Reveal
    gsap.utils.toArray('.tag, .h2, .intro-title, .desc, .intro-bottom .btn-primary-pill, .card, .info > div, .ct-form').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      });
    });

    // Big Footer Name Letter Stagger Reveal tied to scroll
    gsap.from('#bn .c > span', {
      yPercent: 110,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#bn',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }

  /* ==========================================================================
     9. Application Initialization Entry Point
     ========================================================================== */
  function init() {
    initHeroVisuals();
    initNavigationDrawer();
    renderProjectsCatalog();
    initCaseStudyModal();
    initRealtimeClock();
    initAnimatedFooterName();
    initTopScrollProgressBar();

    // Floating Dock Logic
    const dock = document.getElementById('floatingDock');
    const menuBtn = document.getElementById('dockMenuBtn');
    const popupMenu = document.getElementById('macPopupMenu');
    const topBtn = document.getElementById('dockTopBtn');

    if (dock && menuBtn && popupMenu) {
      const handleScroll = (yPos) => {
        if (yPos > 60) {
          dock.classList.add('show');
        } else {
          dock.classList.remove('show');
          popupMenu.classList.remove('show');
        }
      };

      window.addEventListener('scroll', () => {
        if (!document.body.classList.contains('case-open')) {
          handleScroll(window.scrollY);
        }
      }, { passive: true });

      if (DOM.caseStudyModal) {
        DOM.caseStudyModal.addEventListener('scroll', () => {
          if (document.body.classList.contains('case-open')) {
            handleScroll(DOM.caseStudyModal.scrollTop);
          }
        }, { passive: true });
      }

      if (topBtn) {
        topBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (document.body.classList.contains('case-open')) {
            DOM.caseStudyModal.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      }

      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popupMenu.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (!popupMenu.contains(e.target) && !menuBtn.contains(e.target)) {
          popupMenu.classList.remove('show');
        }
      });

      popupMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          popupMenu.classList.remove('show');
          if (document.body.classList.contains('case-open')) {
            closeCaseStudyModal();
          }
        });
      });
    }
    initContactForm();
    initGSAPAnimations();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
