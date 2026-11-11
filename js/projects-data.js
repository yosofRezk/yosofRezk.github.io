/**
 * Youssof Rezk - Portfolio Project Catalog Data
 * Structure: Clean JS Data Object Specification
 */
const PROJECTS_CATALOG = [
  {
    "name": "Rahal Booking System",
    "badge": "STANDALONE WP PLUGIN",
    "category": "WordPress Plugin, PHP 8+, Concurrency Locks, Shortcodes, Security",
    "role": "Plugin Developer & Backend Architect",
    "url": "https://rahal.duckdns.org/",
    "githubUrl": "https://github.com/yosofRezk/rahal-booking",
    "description": "A lightweight, standalone WordPress booking engine for tour operators and travel agencies. Binds full reservation workflows to any existing Custom Post Type (CPT) with zero dependencies on WooCommerce or commercial plugins.",
    "features": [
      "Zero Overbooking: Atomic MySQL GET_LOCK() prevents race conditions during concurrent checkouts.",
      "Content Agnostic: Binds seamlessly to any existing Tour CPT and Post Meta fields.",
      "Server-Side Pricing: Authoritative backend calculation prevents client-side price tampering.",
      "Multi-Layer Security: Built-in honeypot trap, double-click debounce, and IP rate limiting.",
      "Obfuscated References: Human-friendly non-enumerable booking IDs (RHL-YYYY-NNNNN-XXXX).",
      "Native Admin Interface: WP_List_Table dashboard with color-coded status lifecycles.",
      "Automated Dual-Email: Responsive HTML confirmations for travelers and instant admin alerts.",
      "5 Dynamic Shortcodes: Flexible embeddable forms, modal buttons, and live seat counters."
    ],
    "technical": "Engineered as an independent WordPress plugin adhering to WP Core standards. Implements custom {prefix}rahl_bookings database table with MySQL GET_LOCK() for concurrency control, native WP_List_Table admin management, transactional SMTP filters, and complete uninstall cleanup.",
    "stack": [
      "WordPress Plugin API",
      "PHP 8+",
      "MySQL GET_LOCK()",
      "WP_List_Table",
      "Custom Shortcodes",
      "AJAX / REST",
      "Custom Post Types",
      "ACF / Native Meta",
      "Rate Limiting & Security",
      "HTML5 / CSS3",
      "Transactional SMTP"
    ],
    "highlights": "Architected with zero-overbooking MySQL concurrency locks, a 5-shortcode embed system, and native WP_List_Table management.",
    "image": "assets/projects/rahal-plugin/rahal-plugin-cover.png",
    "bannerImage": "assets/projects/rahal-plugin/rahal-plugin-banner.png",
    "caseStudyImages": {
      "overview": "assets/projects/rahal-plugin/rahal-tour-booking.png",
      "features": "assets/projects/rahal-plugin/rahal-booking-modal.png",
      "technical": "assets/projects/rahal-plugin/rahal-admin-dashboard.png",
      "stack": "assets/projects/rahal-plugin/rahal-plugin-settings.png"
    },
    "role_ar": "مطور الإضافة ومهندس الواجهة الخلفية",
    "category_ar": "إضافة ووردبريس مخصصة، PHP 8+، حماية التضارب، شورت كود، أمان",
    "description_ar": "محرك ونظام حجز متكامل وخفيف الوزن لووردبريس لوكالات السفر والرحلات. يربط دورة حجز كاملة بأي CPT موجود دون تغيير هيكل الموقع أو الاعتماد على ووكومرس أو إضافات مدفوعة.",
    "features_ar": [
      "منع الحجز الزائد (Zero Overbooking) بأقفال MySQL GET_LOCK() لمنع الـ Race Conditions.",
      "مرونة تامة للارتباط بأي CPT وحقول بيانات مخصصة (Post Meta) بدون أي تعقيد.",
      "حساب أسعار صارم من الخادم (Server-Side) لمنع أي تلاعب من جانب العميل.",
      "حماية أمنية تشمل مصيدة سبام (Honeypot)، وتحديد معدل الطلبات بالـ IP، ومنع النقر المزدوج.",
      "أرقام حجز مشفرة وغير قابلة للتخمين بنمط (RHL-YYYY-NNNNN-XXXX).",
      "لوحة تحكم إدارية مدمجة بمعايير ووردبريس (WP_List_Table) لإدارة ومتابعة الحجوزات.",
      "نظام إشعارات بريدية مزدوج يرسل فواتير HTML للعملاء وتنبيهات فورية للإدارة.",
      "5 أكواد قصيرة (Shortcodes) مرنة لعرض الفورم، والزرار المنبثق، وعداد المقاعد المتبقية."
    ],
    "technical_ar": "تم بناء الإضافة من الصفر معتمدة على معايير ووردبريس القياسية دون أي اعتمادات خارجية، مع جدول قاعدة بيانات مخصص {prefix}rahl_bookings ونظام 5 أكواد قصيرة مرنة.",
    "extraHtml": `
      <div>
        <p class="k mu up" style="font-size:11px"><span style="color:var(--brand)">05 — Architecture & Shortcode Ecosystem</span></p>
        <h3 class="h2" style="font-size:clamp(1.4rem, 2.5vw, 2rem);margin-top:0.75rem;margin-bottom:1rem;color:#fff;">High Concurrency &amp; Modular Shortcodes</h3>
        
        <div class="plugin-feature-grid">
          <div class="plugin-feature-card">
            <h4><span>🔒</span> Zero Overbooking Guarantee</h4>
            <p>Utilizes MySQL <code>GET_LOCK()</code> mutex locking during checkout to eliminate race conditions under simultaneous bookings.</p>
          </div>
          <div class="plugin-feature-card">
            <h4><span>🛡️</span> Multi-Layer Security Shield</h4>
            <p>Built-in honeypot trap, client debouncing, and IP rate limiting (max 5/hr) to block automated submissions.</p>
          </div>
          <div class="plugin-feature-card">
            <h4><span>⚡</span> Content-Agnostic Binding</h4>
            <p>Hooks seamlessly into any existing Tour CPT and post meta without modifying core tables or requiring ACF Pro.</p>
          </div>
          <div class="plugin-feature-card">
            <h4><span>✉️</span> Automated Dual-Email Engine</h4>
            <p>Dispatches responsive HTML emails to customers with payment deadlines and alerts admins with 1-click review links.</p>
          </div>
        </div>

        <div style="margin-top:2.5rem;">
          <h4 style="font-family:var(--font-heading);font-size:1.1rem;color:#fff;margin-bottom:0.75rem;">Dynamic Shortcodes Reference</h4>
          <div class="shortcode-list">
            <div class="shortcode-item">
              <span class="shortcode-tag">[rahl_booking_form tour_id="85"]</span>
              <span class="shortcode-desc">Renders an embedded, responsive booking form with real-time price calculation.</span>
            </div>
            <div class="shortcode-item">
              <span class="shortcode-tag">[rahl_booking_button tour_id="85" text="Reserve Your Spot"]</span>
              <span class="shortcode-desc">Opens an interactive modal booking popup with automatic "Fully Booked" disable state.</span>
            </div>
            <div class="shortcode-item">
              <span class="shortcode-tag">[rahl_available_seats tour_id="85"]</span>
              <span class="shortcode-desc">Outputs live remaining seats count to establish urgency and boost conversion.</span>
            </div>
            <div class="shortcode-item">
              <span class="shortcode-tag">[rahl_total_seats] &nbsp;|&nbsp; [rahl_booked_seats]</span>
              <span class="shortcode-desc">Outputs total tour capacity and confirmed passenger counts for social proof.</span>
            </div>
          </div>
        </div>

        <div class="plugin-github-banner">
          <div class="plugin-github-info">
            <h4>Open Source Plugin Repository</h4>
            <p>Explore clean, documented PHP code, database schema migrations, and admin hooks on GitHub.</p>
          </div>
          <a href="https://github.com/yosofRezk/rahal-booking" target="_blank" rel="noopener" class="btn-primary-pill" style="display:inline-flex;align-items:center;padding:0.75rem 1.4rem;">
            <span class="btn-text-flip">
              <span class="btn-text-front">VIEW GITHUB REPO ↗</span>
              <span class="btn-text-back">VIEW GITHUB REPO ↗</span>
            </span>
          </a>
        </div>
      </div>
    `
  },
  {
    "name": "FreshCart",
    "category": "WooCommerce, Custom Development, Performance",
    "role": "WordPress Developer",
    "url": "https://freshcart.duckdns.org/",
    "description": "FreshCart is a custom WooCommerce store where I worked on both the visual experience and the functionality of the online store. I redesigned and customized important WooCommerce sections including the Shop, Product, Cart, Checkout, and My Account pages instead of relying on the default WooCommerce layouts.",
    "features": [
      "Custom WooCommerce store design.",
      "Redesigned Shop, Product, Cart, Checkout, and My Account pages.",
      "Built with an Astra Child Theme.",
      "AJAX product filtering using HUSKY.",
      "Customized WooCommerce functionality using hooks.",
      "Dynamic cart badge updates.",
      "Responsive design across desktop and mobile.",
      "Performance-focused implementation."
    ],
    "technical": "I worked with product filtering and WooCommerce hooks to customize the store without modifying WooCommerce core files.",
    "stack": [
      "WordPress",
      "WooCommerce",
      "Astra Child Theme",
      "Elementor",
      "HUSKY Filter",
      "PHP",
      "JavaScript",
      "AJAX",
      "CSS"
    ],
    "highlights": "Customized WooCommerce functionality using hooks and an Astra Child Theme.",
    "image": "assets/projects/FreshCart/Freshcart-home.png",
    "video": "assets/projects/FreshCart/Screen%20Recording%202026-10-08%20095345.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/FreshCart/Woman-Shawl-Freshcart.png",
      "features": "assets/projects/FreshCart/Cart-Freshcart.png",
      "technical": "assets/projects/FreshCart/Wishlist-Freshcart.png",
      "stack": "assets/projects/FreshCart/My-account-Freshcart.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "???????? ????? ????? ????? ??????",
    "description_ar": "???? ???? ?? ???? ??????? ???? ??? ???? ??? ?? ?? ??????? ??????? ?????? ??????. ??? ?????? ????? ?????? ??????? ?????? ??? ??????? ??????? ?????? ????? ?????? ????? ?? ???????? ??? ??????? ??????? ??????????.",
    "features_ar": [
      "????? ???? ??????? ????.",
      "????? ????? ????? ?????? ??????? ?????? ?????? ??????.",
      "???? ???????? ???? ????? ??????.",
      "????? ?????? ?????? AJAX ???????? HUSKY.",
      "????? ????? ??????? ???????? ????????.",
      "????? ???????? ??????? ?????.",
      "????? ?????? ??? ???? ???????.",
      "????? ???? ??? ?????? ???????."
    ],
    "technical_ar": "???? ??? ????? ???????? ??????? ??????? ?????? ?????? ???? ????? ????? ??????? ????????."
  },
  {
    "name": "Steakhome",
    "category": "WordPress, Elementor, Amelia Booking, Multilingual",
    "role": "WordPress Developer",
    "url": "https://steakhome.duckdns.org/",
    "description": "Steakhome is a restaurant website focused on creating a strong visual experience while providing an integrated table-booking flow.",
    "features": [
      "Custom restaurant website design.",
      "Custom Elementor booking interface.",
      "Amelia booking integration.",
      "Availability-based booking flow.",
      "Multilingual support with Polylang.",
      "Video-based hero section using Revolution Slider.",
      "Responsive layouts and interactive UI elements."
    ],
    "technical": "The website was built with Elementor and uses Amelia for booking management. I also worked on the frontend booking experience and multilingual setup.",
    "stack": [
      "WordPress",
      "Elementor",
      "Hello Elementor Child",
      "Amelia",
      "Polylang",
      "Revolution Slider",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "highlights": "Custom Elementor booking interface integrated with Amelia.",
    "image": "assets/projects/SteakHome/steak-image-poster.png",
    "bannerImage": "assets/projects/SteakHome/Steak-paner.png",
    "video": "assets/projects/SteakHome/Screen%20Recording%202026-10-08%20090010.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/SteakHome/steak-1.png",
      "features": "assets/projects/SteakHome/steack-2.png",
      "technical": "assets/projects/SteakHome/steak-3.png",
      "stack": "assets/projects/SteakHome/steak-4.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "????????? ???????? ??? Amelia? ????? ??????",
    "description_ar": "???? ??? ?? ???? ???? ???? ??? ????? ????? ????? ???? ?? ????? ???? ?????? ???? ????????.",
    "features_ar": [
      "????? ???? ????? ??????.",
      "????? ??? ????? ????????.",
      "??? ???? ??? Amelia.",
      "???? ??? ????? ??? ???????.",
      "??? ????? ?????? ???????? Polylang.",
      "??? ????? ????? ??? ??????? ???????? Revolution Slider.",
      "??????? ??????? ?????? ???????."
    ],
    "technical_ar": "?? ???? ?????? ???????? ??????? ??????? Amelia ?????? ????????. ???? ????? ??? ????? ????? ?? ??????? ???????? ?????? ?????? ????????."
  },
  {
    "name": "Al-Nour Law Firm",
    "category": "WordPress, Custom Plugin, Custom Post Types, Shortcodes",
    "role": "WordPress Developer",
    "url": "https://alnourlaw.duckdns.org/",
    "description": "Al-Nour is a law firm website where I worked not only on the frontend but also on custom WordPress functionality. This project demonstrates my experience beyond page building, including WordPress customization, custom plugins, CPTs, custom fields, templates, shortcodes, and filters.",
    "features": [
      "Developed a custom WordPress plugin.",
      "Created custom content structures for Attorneys and Success Cases.",
      "Used ACF for custom fields and structured information.",
      "Connected related content between attorneys and cases.",
      "Built custom shortcodes and filtering functionality.",
      "Created custom templates for frontend display.",
      "Used a Child Theme for customizations."
    ],
    "technical": "One of the main technical parts of this project was developing a custom WordPress plugin to manage attorneys and successful cases from the WordPress dashboard. The plugin provides a structured way to create and manage attorney profiles and successful cases, connect related content, and display the information on the frontend using custom templates, shortcodes, and filters.",
    "stack": [
      "WordPress",
      "Elementor",
      "ACF",
      "Custom Plugin Development",
      "CPT",
      "PHP",
      "JavaScript",
      "CSS"
    ],
    "highlights": "Developed a custom WordPress plugin to manage attorneys and successful cases from the dashboard.",
    "image": "assets/projects/alnour-law-firm/alnour-poster-image.png",
    "bannerImage": "assets/projects/alnour-law-firm/alour-paner.png",
    "video": "assets/projects/alnour-law-firm/Screen%20Recording%202026-10-08%20091121.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/alnour-law-firm/alnour-1.png",
      "features": "assets/projects/alnour-law-firm/alnour-2.png",
      "technical": "assets/projects/alnour-law-firm/alnour-3.png",
      "stack": "assets/projects/alnour-law-firm/alnour-4.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "????????? ????? ?????? Custom Post Types? Shortcodes",
    "description_ar": "????? ?? ???? ???? ?????? ??? ?? ????? ??? ??????? ???????? ?? ???? ????? ??? ????? ???????? ???????. ???? ??? ??????? ????? ???? ?????? ???? ???? ???????? ????? ????? ????????? ???????? ???????? ??? CPTs? ?????? ???????? ???????? ???? Shortcodes.",
    "features_ar": [
      "????? ????? ???????? ?????.",
      "????? ????? ????? ????? ???????? ?????? ??????.",
      "??????? ACF ?????? ???????.",
      "??? ??????? ??? ???????? ????????.",
      "???? Shortcodes ?????? ?????.",
      "????? ????? ????? ?????.",
      "??????? ???? ???? ?????????."
    ],
    "technical_ar": "??? ?? ??? ??????? ??????? ?? ??? ??????? ????? ????? ????? ?????? ???????? ???????? ??????? ?? ???? ???? ????????. ???? ??????? ????? ????? ?????? ?????? ???????? ???? ?????????."
  },
  {
    "name": "DARR",
    "category": "WordPress, Elementor Pro, ACF, Custom Post Types, Performance",
    "role": "WordPress Developer",
    "url": "https://darr.tech-nya.com/",
    "description": "Darr is a larger WordPress project where the focus was on building a professional interface while keeping the content structured and manageable through WordPress.",
    "features": [
      "Elementor-based website development.",
      "Custom Post Types and ACF.",
      "Reusable page components.",
      "Responsive layouts.",
      "Performance optimization.",
      "Caching implementation.",
      "WebP image optimization.",
      "Redis object caching."
    ],
    "technical": "The project uses Elementor with custom content structures through CPT and ACF, allowing different types of content to be managed from the WordPress dashboard. I also worked with caching and image optimization tools to improve the website's overall performance.",
    "stack": [
      "WordPress",
      "Elementor Pro",
      "Astra Pro",
      "ElementsKit",
      "ACF",
      "CPT UI",
      "PHP",
      "JavaScript",
      "CSS",
      "Breeze Cache",
      "Redis Object Cache Pro"
    ],
    "highlights": "Elementor with custom content structures through CPT and ACF.",
    "image": "assets/projects/darr/darr-image-poster.png",
    "bannerImage": "assets/projects/darr/darr-paner.png",
    "video": "assets/projects/darr/Screen%20Recording%202026-10-08%20104543.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/darr/darr-1.png",
      "features": "assets/projects/darr/darr-2.png",
      "technical": "assets/projects/darr/darr-3.png",
      "stack": "assets/projects/darr/darr-4.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "????????? ??????? ???? ACF? Custom Post Types? ????? ??????",
    "description_ar": "??? ?? ????? ???????? ???? ??? ??? ??????? ??? ???? ????? ???????? ?? ?????? ??? ????? ??????? ??????? ?? ???? ????????.",
    "features_ar": [
      "????? ?????? ????????.",
      "????? ?????? ????? ? ACF.",
      "?????? ????? ????? ?????? ?????????.",
      "??????? ???????.",
      "????? ?????? ???????.",
      "????? ??????? ?????? (Caching).",
      "????? ????? ????? WebP.",
      "??????? ?????? ???????? Redis."
    ],
    "technical_ar": "?????? ??????? ??????? ?? ????? ????? ?????? ??? ???? ?????? ????? ?????? ?? ???????. ???? ????? ?? ????? ??????? ?????? ?????? ????? ???? ???? ??????."
  },
  {
    "name": "Xpress Prepaid",
    "category": "WordPress, Elementor Pro, Responsive Design",
    "role": "WordPress Developer",
    "url": "https://seagreen-mole-743118.hostingersite.com/",
    "description": "Xpress Prepaid is a service-focused website designed to present prepaid services and information through a clean and easy-to-navigate interface.",
    "features": [
      "WordPress website development.",
      "Elementor-based page building.",
      "Responsive layouts.",
      "Structured service sections.",
      "Custom UI styling and frontend adjustments."
    ],
    "technical": "My work focused on translating the required design into a responsive WordPress website while maintaining consistency across different sections and screen sizes.",
    "stack": [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "highlights": "Structured service sections with a clean responsive layout.",
    "image": "assets/projects/Xpress/xpress-image-poster.png",
    "bannerImage": "assets/projects/Xpress/Xpress-paner.png",
    "video": "assets/projects/Xpress/Screen%20Recording%202026-10-08%20092856.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/Xpress/xpress-1.png",
      "features": "assets/projects/Xpress/xpress-2.png",
      "technical": "assets/projects/Xpress/xpress-3.png",
      "stack": "assets/projects/Xpress/xpress-4.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "????????? ???????? CSS? ????? ???????",
    "description_ar": "??????? ?? ???? ???? ??? ???? ??? ??????? ???????? ?????? ????? ?????? ????? ??????.",
    "features_ar": [
      "????? ??????? ???????? ????????.",
      "????? ?????? ????? ???????.",
      "????? ?????? ????????.",
      "????? ????? ???????? ???????."
    ],
    "technical_ar": "?? ????? ??????? ???????? ??????? ? CSS ?????? ???? ??????? ????? ?? ????? ?? ??????? ??????? ??????????."
  },
  {
    "name": "Mudarar Althiqah",
    "category": "UX Review, Multilingual Navigation, WordPress, Elementor",
    "role": "UX and website improvements",
    "url": "https://mudarar.com/en/home/",
    "description": "Mudarar is a professional service website focused on maintenance, operations, and facility management services. The website includes service pages, subscription plans, projects, articles, FAQs, and a service booking flow.",
    "features": [
      "Structured service and project sections.",
      "Subscription plan presentation.",
      "Service booking flow.",
      "Responsive layouts for desktop and mobile.",
      "Clean UI with a focus on usability and content structure."
    ],
    "technical": "My role focused on building the website in WordPress and creating the pages and interactive sections while keeping the structure clear and easy to manage.",
    "stack": [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "highlights": "Clean UI with a focus on usability and content structure.",
    "image": "assets/projects/Mudrar/mudrar-image-poster.png",
    "bannerImage": "assets/projects/Mudrar/mudrar-paner.png",
    "video": "assets/projects/Mudrar/Screen%20Recording%202026-10-08%20094027.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/Mudrar/mudrar-1.png",
      "features": "assets/projects/Mudrar/mudrar-2.png",
      "technical": "assets/projects/Mudrar/mudrar-3.png",
      "stack": "assets/projects/Mudrar/mudrar-4.png"
    },
    "role_ar": "???? ????????",
    "category_ar": "????????? ???????? ??? ???????? ????? ??????",
    "description_ar": "????? ????? ?? ???? ????? ??????? ???? ??? ??????? ????????? ?????? ???????.",
    "features_ar": [
      "????? ????? ??????? ?????????.",
      "??? ??? ??????????.",
      "???? ??? ???????.",
      "??? ????? ??????.",
      "????? ?????? ?????? ?????? ?????."
    ],
    "technical_ar": "تم العمل على بناء وتطوير صفحات وأقسام الموقع التفاعلية على ووردبريس مع الحفاظ على وضوح وسلاسة الهيكل الإداري للمحتوى."
  },
  {
    "name": "Rahal Travel",
    "category": "WordPress, Elementor, ACF, Multilingual",
    "role": "WordPress Developer",
    "url": "https://rahal.duckdns.org/",
    "description": "Rahal is a travel website designed to showcase tours, destinations, and travel services through a structured and visually focused experience. Integrated with the custom Rahal Booking System plugin for real-time tour reservations.",
    "features": [
      "Custom Tour content structure with CPT UI & ACF.",
      "Integrated with Rahal Booking System: Standalone custom booking engine with zero-overbooking MySQL locking.",
      "Organized destinations and travel services.",
      "Custom tour and destination pages with responsive layouts.",
      "Manageable and scalable content architecture."
    ],
    "technical": "The project uses WordPress as a content management system, with custom content structures for tours and destinations, making it easier to manage and expand the website.",
    "stack": [
      "WordPress",
      "Elementor",
      "ACF",
      "CPT UI",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "highlights": "Custom Tour content structure paired with custom-engineered booking workflow.",
    "image": "assets/projects/rahal/rahal-image-poster.png",
    "bannerImage": "assets/projects/rahal/rahal-paner.png",
    "video": "assets/projects/rahal/Screen%20Recording%202026-10-08%20082138.mp4",
    "caseStudyImages": {
      "overview": "assets/projects/rahal/rahal-1.png",
      "features": "assets/projects/rahal/rahal-2.png",
      "technical": "assets/projects/rahal/rahal-3.png",
      "stack": "assets/projects/rahal/rahal-4.png"
    },
    "role_ar": "مطور ووردبريس",
    "category_ar": "ووردبريس، إليمنتور، ACF، متعدد اللغات",
    "description_ar": "رحال هو موقع سياحي صُمم لعرض الجولات والوجهات والخدمات السياحية من خلال تجربة بصرية وتفاعلية منظمة، مدمج مع إضافة Rahal Booking System للحجز الفوري.",
    "features_ar": [
      "هيكلية مخصصة للرحلات والجولات باستخدام CPT وACF.",
      "دمج كامل مع إضافة Rahal Booking System لحجز الجولات المباشر.",
      "تنظيم الوجهات وباقات السفر بأسلوب سلس.",
      "تصميم متجاوب وسريع للأجهزة المحمولة وسطح المكتب.",
      "إدارة مرنة للمحتوى قابلة للتوسع والتطوير المستمر."
    ],
    "technical_ar": "يعتمد المشروع على ووردبريس لإدارة المحتوى، مع هيكلة مخصصة للجولات والوجهات لتبسيط إدارة الموقع وتوسيعه مستقبلاً."
  }
];
