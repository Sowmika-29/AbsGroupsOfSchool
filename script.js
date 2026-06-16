/* ============================================================
   ABS GROUP OF SCHOOLS — UNIFIED MULTI-CAMPUS CONTROLLER
   ============================================================ */

// Campus-specific database
const CAMPUS_DATA = {
  group: {
    id: "group",
    shortName: "ABS Group",
    fullName: "ABS Group of Schools",
    tagline: "Nurturing Excellence, Virtue and Talent Since 2009",
    affiliation: "Accredited Management Office",
    logoEmblem: "ABS",
    address: "No. 59, Anna Salai, SVS Club Complex (Next to Devi Theatre), Chennai – 600002",
    phones: ["044-28416801", "96001 00011"],
    emails: ["info@absgroupschools.com"],
    mapUrl: "https://maps.google.com/maps?q=Devi%20Theatre%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 15, pass: 100, students: 6500, faculty: 350, books: 45000 },
    aboutTitle: "About ABS",
    aboutSubtitle: "Our Story",
    aboutText1: "ABS Group of Schools is a leading educational trust in Chennai and Thiruvallur, managing premier institutions designed to deliver high-quality CBSE and Matriculation curricula. Established in 2009, we have spent over 15 years developing academic brilliance and character in our students.",
    aboutText2: "Our group represents a combination of academic rigor, technological training (including smart classrooms and robotics labs), state-of-the-art sports facilities, and professional entrance coaching (IIT-JEE & NEET) to ensure absolute preparedness for future endeavors.",
    aboutImg: "assets/school_hero_professional.jpeg",
    slides: [
      {
        bg: "assets/school_hero_professional.jpeg",
        badge: "ABS Group of Schools",
        title: "Nurturing Excellence<br /><span>Virtue & Talent</span>",
        desc: "Welcome to ABS Group of Schools. Five premier campuses in Greater Chennai & Thiruvallur shaping the leaders of tomorrow."
      },
      {
        bg: "assets/school_hero.jpeg",
        badge: "Modern Infrastructure",
        title: "Digital Integration &<br /><span>Integrated Coaching</span>",
        desc: "From smart classrooms to custom robotics training, math/science labs, and focused NEET/JEE prep, ABS sets the benchmark."
      },
      {
        bg: "assets/students_sports.jpeg",
        badge: "Holistic Development",
        title: "Beyond Classrooms —<br /><span>Sports, Arts & Values</span>",
        desc: "Karate, Yoga, Music, Dance, Abacus, and Athletics are integral parts of the balanced student life at ABS schools."
      }
    ]
  },
  korattur: {
    id: "korattur",
    shortName: "ABS Korattur",
    fullName: "ABS Global Smart School, Korattur",
    tagline: "CBSE Affiliated · Affiliation No. 1931489",
    affiliation: "CBSE Affiliation No. 1931489",
    logoEmblem: "KOR",
    address: "No. 9, Sriramulu Nagar, Dr. YSR Street, Korattur, Chennai – 600076",
    phones: ["96001 00011", "96001 00033"],
    emails: ["info@absglobal.org", "ktadmin@absglobal.org"],
    mapUrl: "https://maps.google.com/maps?q=ABS%20Global%20Smart%20School%20Korattur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 15, pass: 100, students: 1800, faculty: 90, books: 15000 },
    aboutTitle: "About ABS Korattur",
    aboutSubtitle: "Flagship Campus",
    aboutText1: "ABS Global Smart School Korattur is the flagship CBSE campus of the ABS Group. Operating since 2009, we have established ourselves as a premier center of learning for students from Class I to XII.",
    aboutText2: "Equipped with interactive smart classroom technologies, fully loaded Physics, Chemistry, Biology, and Computer science labs, and advanced coaching, we prepare students for board examinations and competitive gateways.",
    aboutImg: "assets/school_hero.jpeg",
    slides: [
      {
        bg: "https://absglobal.org/assets/images/banner/banner1.jpg",
        badge: "CBSE Affiliation No. 1931489",
        title: "ABS Global Smart School<br /><span>Korattur Campus</span>",
        desc: "Providing world-class CBSE education, smart digital assets, and high-quality coaching for competitive exams since 2009."
      },
      {
        bg: "https://absglobal.org/assets/images/smart.JPG",
        badge: "Smart Classrooms",
        title: "Technology-Driven<br /><span>Classroom Learning</span>",
        desc: "Digital interactive boards, 3D animated content, and web tools make complex lessons easy to absorb and remember."
      }
    ]
  },
  avadi: {
    id: "avadi",
    shortName: "ABS Avadi",
    fullName: "ABS Global Smart School, Avadi",
    tagline: "CBSE Affiliated · Affiliation No. 1931580",
    affiliation: "CBSE Affiliation No. 1931580",
    logoEmblem: "AVD",
    address: "Mango Garden, Tonekala Camp Road, Annanur, Avadi, Chennai – 600109",
    phones: ["96000 44447", "96001 00055"],
    emails: ["principalav@absgroupschools.com", "coordinatorav@absgroupschools.com"],
    mapUrl: "https://maps.google.com/maps?q=ABS%20Global%20Smart%20School%20Avadi&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 8, pass: 100, students: 1400, faculty: 75, books: 12000 },
    aboutTitle: "About ABS Avadi",
    aboutSubtitle: "Annanur Campus",
    aboutText1: "ABS Global Smart School Avadi campus caters to the growing educational needs of the Avadi and Annanur regions. With our lush green, safe campus, children find a peaceful and highly productive environment.",
    aboutText2: "Our Avadi branch features outstanding sports facilities, a digital curriculum structure, custom robotics labs, and integrated school hours training program for JEE/NEET exams.",
    aboutImg: "assets/smart_classroom.png",
    slides: [
      {
        bg: "assets/smart_classroom.png",
        badge: "CBSE Affiliation No. 1931580",
        title: "ABS Global Smart School<br /><span>Avadi Campus</span>",
        desc: "Combining natural settings with advanced smart-tech education at our Mango Garden, Annanur campus."
      },
      {
        bg: "assets/school_hero_professional.jpeg",
        badge: "Co-curricular Excellence",
        title: "Developing Sports,<br /><span>Skills & Talents</span>",
        desc: "Equipping children with athletic coaching, music clubs, yoga, and abacus to build self-reliance and focus."
      }
    ]
  },
  jnroad: {
    id: "jnroad",
    shortName: "ABS Thiruvallur JN",
    fullName: "ABS Global Smart School, J.N. Road",
    tagline: "CBSE Affiliated · Affiliation No. 1931689",
    affiliation: "CBSE Affiliation No. 1931689",
    logoEmblem: "TJN",
    address: "16, JN Road, VM Nagar, Thiruvallur – 602001 (Opposite to Municipal Office)",
    phones: ["95000 63055", "95000 58400"],
    emails: ["admissionsjn@absgroupschools.com"],
    mapUrl: "https://maps.google.com/maps?q=ABS%20Global%20Smart%20School%20Thiruvallur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 6, pass: 100, students: 1100, faculty: 60, books: 9000 },
    aboutTitle: "About ABS J.N. Road",
    aboutSubtitle: "Central Campus",
    aboutText1: "ABS Global Smart School J.N. Road brings high-standard CBSE schooling directly into the heart of Thiruvallur town. Our central location enables convenient commuting while maintaining a quiet, highly focused learning atmosphere.",
    aboutText2: "Our JN Road campus features smart boards, well-established physics, chemistry and math labs, and structured mentoring systems to help children achieve district top-ranks.",
    aboutImg: "assets/school_hero_professional.jpeg",
    slides: [
      {
        bg: "assets/school_hero.jpeg",
        badge: "CBSE Affiliation No. 1931689",
        title: "ABS Global Smart School<br /><span>Thiruvallur J.N. Road</span>",
        desc: "A highly accessible, high-performance CBSE campus located in central Thiruvallur, nurturing local leaders."
      }
    ]
  },
  mandhir: {
    id: "mandhir",
    shortName: "ABS Vidhya Mandhir",
    fullName: "ABS Vidhya Mandhir, Thiruvallur",
    tagline: "CBSE Affiliated · Affiliation No. 1930290",
    affiliation: "CBSE Affiliation No. 1930290",
    logoEmblem: "AVM",
    address: "Thalakancherry Road, Iveli Agaram, Thiruvallur – 602021",
    phones: ["96000 47651", "96000 48361"],
    emails: ["principal@absvidhyamandhir.org"],
    mapUrl: "https://maps.google.com/maps?q=ABS%20Vidhya%20Mandhir%20Thiruvallur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 12, pass: 100, students: 2000, faculty: 110, books: 18000 },
    aboutTitle: "About Vidhya Mandhir",
    aboutSubtitle: "Academic Hub",
    aboutText1: "ABS Vidhya Mandhir is an prestigious CBSE school in Thiruvallur, offering holistic educational guidance for over 12 years. We specialize in high-grade academic coaching combined with ethical development.",
    aboutText2: "Students at Vidhya Mandhir benefit from state-of-the-art infrastructure, advanced robotics systems, expansive sport grounds, and integrated preparation for national-level IIT and medical entrance exams.",
    aboutImg: "assets/school_hero.jpeg",
    slides: [
      {
        bg: "https://absgroupschools.com/images/about/about1.jpg",
        badge: "CBSE Affiliation No. 1930290",
        title: "ABS Vidhya Mandhir<br /><span>Thiruvallur Campus</span>",
        desc: "Providing a nurturing, high-tech, and disciplined learning environment at Thalakancherry Road, Thiruvallur."
      }
    ]
  },
  vidhyaalayaa: {
    id: "vidhyaalayaa",
    shortName: "ABS Vidhyaalayaa",
    fullName: "ABS Vidhyaalayaa Matric Hr. Sec. School",
    tagline: "Recognised by Govt. of Tamil Nadu · Matric Board",
    affiliation: "Recognised by Govt. of Tamil Nadu",
    logoEmblem: "AVS",
    address: "Thalakanchery Road, Iveli Agaram, Thiruvallur – 602021",
    phones: ["99400 62555", "96000 47651"],
    emails: ["principalmatric@absgroupschools.com"],
    mapUrl: "https://maps.google.com/maps?q=ABS%20Vidhyaalayaa%20Thiruvallur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    stats: { years: 16, pass: 100, students: 2500, faculty: 130, books: 22000 },
    aboutTitle: "About Vidhyaalayaa",
    aboutSubtitle: "Matric School",
    aboutText1: "ABS Vidhyaalayaa Matriculation Higher Secondary School is a household name in Thiruvallur. Since our inception, we have consistently secured top board-exam ranks in Tamil Nadu matriculation curricula.",
    aboutText2: "Featuring rigorous study systems, custom computer classes, and a wide array of activities including Road Safety Patrol, Scouts & Guides, and martial arts, we prepare students for outstanding higher-education transitions.",
    aboutImg: "assets/students_sports.jpeg",
    slides: [
      {
        bg: "assets/students_sports.jpeg",
        badge: "Recognised by Govt. of Tamil Nadu",
        title: "ABS Vidhyaalayaa<br /><span>Matriculation Campus</span>",
        desc: "Thiruvallur's top matric school, producing consecutive district toppers and offering 100% higher secondary pass rates."
      }
    ]
  }
};

// State variables
let activeCampus = "group";
let currentSlide = 0;
let slides = [];
let dots = [];
let sliderTimer = null;

// ============================================================
// CAMPUS SWITCHER CONTROLLER
// ============================================================
function switchCampus(campusId) {
  if (!CAMPUS_DATA[campusId]) return;
  activeCampus = campusId;

  // Sync drop-down selectors if they exist
  const selectElements = document.querySelectorAll('.campus-select-dropdown');
  selectElements.forEach(sel => {
    if (sel.value !== campusId) sel.value = campusId;
  });

  const data = CAMPUS_DATA[campusId];

  // Update document title & favicon meta (optionally)
  document.title = data.fullName + " — ABS Group of Schools";

  // Update brand header
  const emblem = document.querySelector('.logo-emblem');
  if (emblem) emblem.textContent = data.logoEmblem;
  
  const logoName = document.querySelector('.logo-name');
  if (logoName) logoName.textContent = data.fullName;
  
  const logoTagline = document.querySelector('.logo-tagline');
  if (logoTagline) logoTagline.textContent = data.tagline;

  // Update Topbar and footer affiliations
  const affilTexts = document.querySelectorAll('.affil-text');
  affilTexts.forEach(el => {
    el.innerHTML = `<i class="fas fa-certificate"></i> ${data.affiliation}`;
  });

  const footerCbseBadge = document.querySelector('.footer-cbse-badge-text');
  if (footerCbseBadge) {
    footerCbseBadge.textContent = data.affiliation;
  }

  // Update contact details in top bar
  const topbarPhone = document.querySelector('.topbar-phone');
  if (topbarPhone) {
    topbarPhone.innerHTML = `<i class="fas fa-phone-alt"></i> ` + data.phones.join(" / ");
  }
  const topbarEmail = document.querySelector('.topbar-email');
  if (topbarEmail) {
    topbarEmail.innerHTML = `<i class="fas fa-envelope"></i> ` + data.emails[0];
  }
  const topbarAddress = document.querySelector('.topbar-address');
  if (topbarAddress) {
    topbarAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ` + data.address.split(',')[0] + ', Chennai';
  }

  // Update About Section content
  const aboutHeading = document.getElementById('aboutCampusHeading');
  if (aboutHeading) {
    aboutHeading.innerHTML = `${data.aboutTitle} <span class="text-black">${data.aboutSubtitle}</span>`;
  }
  const aboutP1 = document.getElementById('aboutCampusText1');
  if (aboutP1) aboutP1.textContent = data.aboutText1;
  const aboutP2 = document.getElementById('aboutCampusText2');
  if (aboutP2) aboutP2.textContent = data.aboutText2;

  const aboutMainImg = document.querySelector('.about-main-img');
  if (aboutMainImg) {
    aboutMainImg.src = data.aboutImg;
    aboutMainImg.alt = data.fullName + " Campus View";
  }
  const aboutYearsBadge = document.querySelector('.about-years-badge-text');
  if (aboutYearsBadge) {
    aboutYearsBadge.textContent = data.stats.years + "+";
  }

  // Re-run stats counters observers or set targets
  const counterElements = document.querySelectorAll('.counter');
  counterElements.forEach(el => {
    el.dataset.counted = '';
    if (el.classList.contains('count-years')) el.dataset.target = data.stats.years;
    if (el.classList.contains('count-pass')) el.dataset.target = data.stats.pass;
    if (el.classList.contains('count-students')) el.dataset.target = data.stats.students;
    if (el.classList.contains('count-faculty')) el.dataset.target = data.stats.faculty;
    if (el.classList.contains('count-books')) el.dataset.target = data.stats.books;
    el.textContent = "0";
  });
  // Trigger immediate animation trigger for visible counters
  triggerCounterVisibilityCheck();

  // Update Contact Info Section Card details
  const contactAddress = document.querySelector('#cAddr p');
  if (contactAddress) contactAddress.innerHTML = data.address.replace(/, /g, '<br />');

  const contactPhone = document.querySelector('#cPhone p');
  if (contactPhone) {
    contactPhone.innerHTML = data.phones.map(p => `<a href="tel:${p.replace(/\s+/g, '')}">${p}</a>`).join(" / ");
  }

  const contactEmail = document.querySelector('#cEmail p');
  if (contactEmail) {
    contactEmail.innerHTML = data.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join("<br />");
  }

  // Update Map iframe
  const mapIframe = document.querySelector('.map-wrap iframe');
  if (mapIframe) {
    mapIframe.src = data.mapUrl;
    mapIframe.title = `${data.fullName} Location`;
  }

  // Pre-fill fields in enquiry form & contact forms
  const formCampusSelect = document.getElementById('pCampus');
  if (formCampusSelect) formCampusSelect.value = campusId;

  // Toggle dynamic display of "Campuses landing grid"
  // If in Group Hub mode, show campus hub grid. If in specific school mode, hide it or show simple links.
  const campusGridSection = document.getElementById('campusGridSection');
  if (campusGridSection) {
    if (campusId === 'group') {
      campusGridSection.style.display = 'block';
    } else {
      campusGridSection.style.display = 'none';
    }
  }

  // Update footer copyright and logos
  const footerBrandTitle = document.querySelector('.footer-brand-title');
  if (footerBrandTitle) footerBrandTitle.textContent = data.fullName;

  const footerText = document.querySelector('.footer-brand-desc');
  if (footerText) {
    footerText.textContent = `Nurturing excellence, virtue, and talent since 2009. ${data.affiliation}.`;
  }

  // Update Hero Slider content
  updateHeroSlider(data.slides);
  
  // Smooth scroll up when campus changes to show the updated slide headers
  // Only scroll if switched from UI (avoid on startup)
  if (arguments.length > 1 && arguments[1] === true) {
    const headerOffset = 100;
    const elementPosition = document.getElementById('home').getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// Update the DOM slider dynamically
function updateHeroSlider(slidesData) {
  stopAutoSlide();
  const sliderContainer = document.querySelector('.hero-slider');
  if (!sliderContainer) return;
  
  // Save controls before clearing
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');

  // Clear existing slides (excluding controls)
  const existingSlides = sliderContainer.querySelectorAll('.hero-slide');
  existingSlides.forEach(s => s.remove());

  // Inject new slides
  slidesData.forEach((sData, index) => {
    const slide = document.createElement('div');
    slide.className = `hero-slide${index === 0 ? ' active' : ''}`;
    slide.style.backgroundImage = `url('${sData.bg}')`;
    slide.innerHTML = `
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <div class="slide-badge"><i class="fas fa-award"></i> ${sData.badge}</div>
        <h1 class="slide-title">${sData.title}</h1>
        <p class="slide-desc">${sData.desc}</p>
        <div class="slide-actions">
          <button class="btn-primary-hero" onclick="openEnquiry(event)">
            <i class="fas fa-user-graduate"></i> Apply for Admission
          </button>
          <a href="#about" class="btn-secondary-hero">
            <i class="fas fa-play-circle"></i> Discover More
          </a>
        </div>
      </div>
    `;
    sliderContainer.appendChild(slide);
  });

  // Re-append controls to keep them on top
  if (prevBtn) sliderContainer.appendChild(prevBtn);
  if (nextBtn) sliderContainer.appendChild(nextBtn);
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slidesData.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `sdot${index === 0 ? ' active' : ''}`;
      dot.dataset.slide = index;
      dot.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(index);
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
    sliderContainer.appendChild(dotsContainer);
  }

  // Re-query state variables
  slides = document.querySelectorAll('.hero-slide');
  dots   = document.querySelectorAll('.sdot');
  currentSlide = 0;

  // Restart slider timer
  startAutoSlide();
}

// ============================================================
// HERO SLIDER CORE NAVIGATION
// ============================================================
function goToSlide(index) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  
  currentSlide = (index + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  if (slides.length > 1) {
    sliderTimer = setInterval(nextSlide, 3000);
  }
}
function stopAutoSlide() {
  if (sliderTimer) clearInterval(sliderTimer);
}

// Bind slider navigation controls
document.getElementById('sliderNext').addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});
document.getElementById('sliderPrev').addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});


// ============================================================
// ENQUIRY POPUP
// ============================================================
function openEnquiry(e) {
  if (e) e.preventDefault();
  document.getElementById('enquiryPopup').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeEnquiry() {
  document.getElementById('enquiryPopup').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('closePopup').addEventListener('click', closeEnquiry);
document.getElementById('enquiryPopup').addEventListener('click', function (e) {
  if (e.target === this) closeEnquiry();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeEnquiry();
});

// Auto-open popup after 6 seconds
setTimeout(() => {
  // Only auto-open if the popup is not already open and user is on landing page
  if (!document.getElementById('enquiryPopup').classList.contains('open')) {
    openEnquiry();
  }
}, 6000);

function togglePillars() {
  const pillars = document.getElementById('aboutPillars');
  const btn = document.getElementById('viewMorePillarsBtn');
  if (pillars.style.display === 'none') {
    pillars.style.display = 'flex';
    btn.innerHTML = 'View Less <i class="fas fa-arrow-up"></i>';
  } else {
    pillars.style.display = 'none';
    btn.innerHTML = 'View More <i class="fas fa-arrow-right"></i>';
  }
}

// Enquiry form submit handler
document.getElementById('enquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('enquirySubmit');
  const targetCampus = document.getElementById('pCampus').value;
  const campusName = CAMPUS_DATA[targetCampus] ? CAMPUS_DATA[targetCampus].fullName : "ABS Group";
  
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
  btn.disabled = true;
  
  setTimeout(() => {
    const box = document.querySelector('.popup-box');
    box.innerHTML = `
      <div class="form-success" style="padding:40px 20px; text-align:center;">
        <div class="si" style="font-size:3.5rem; margin-bottom:16px;">🎉</div>
        <h3 style="font-family:'Poppins',sans-serif; color:var(--navy); margin-bottom:8px; font-weight:800;">Enquiry Received!</h3>
        <p style="font-size:0.9rem; color:var(--muted);">Thank you for choosing <strong>${campusName}</strong>. Our admissions coordinator will reach you within 24 working hours.</p>
        <button onclick="closeEnquiry()" class="btn-primary full" style="margin-top:24px;">
          <i class="fas fa-check"></i> Close
        </button>
      </div>`;
  }, 1400);
});

// Contact form submit handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('cfSubmit');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = '#2e7d32';
    btn.style.borderColor = '#2e7d32';
    this.reset();
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
    }, 3500);
  }, 1500);
});


// ============================================================
// NAVBAR: SCROLL EFFECT + ACTIVE LINK
// ============================================================
const navbar = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Scroll-to-top button
  if (scrollBtn) {
    scrollBtn.classList.toggle('visible', y > 400);
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(sec => {
    const top    = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    const link   = document.querySelector(`.nav-item[href="#${sec.id}"]`);
    if (link) {
      link.classList.toggle('active', y >= top && y < bottom);
    }
  });
});


// ============================================================
// HAMBURGER / MOBILE MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

// Dropdown toggle on mobile
document.querySelectorAll('.nav-dropdown > .nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// Close nav on anchor click (mobile)
navMenu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});


// ============================================================
// ANIMATED COUNTERS
// ============================================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const duration = 2000;
  const steps    = 60;
  const increment = target / steps;
  let current = 0;
  let count   = 0;
  const timer = setInterval(() => {
    current += increment;
    count++;
    el.textContent = Math.floor(current).toLocaleString();
    if (count >= steps) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    }
  }, duration / steps);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

function triggerCounterVisibilityCheck() {
  document.querySelectorAll('.counter').forEach(el => {
    // If element is in viewport, animate it
    const rect = el.getBoundingClientRect();
    const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
    if (isVisible && !el.dataset.counted) {
      el.dataset.counted = 'true';
      animateCounter(el);
    }
  });
}


// ============================================================
// SCROLL REVEAL (FADE-IN ANIMATIONS ON INTERSECTION)
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.why-card, .prog-card, .achieve-card, .fac-card, .act-item, .cinfo-card, .testi-card, .gal-item, .pillar'
).forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`;
  revealObserver.observe(el);
});


// ============================================================
// TESTIMONIAL SLIDER
// ============================================================
let testiCurrent = 0;
const testiTrack = document.getElementById('testiTrack');
const testiDotsWrap = document.getElementById('testiDots');

function getVisibleTesti() {
  return window.innerWidth < 640 ? 1 : 2;
}

function initTesti() {
  if (!testiTrack) return;
  const cards   = testiTrack.querySelectorAll('.testi-card');
  const visible = getVisibleTesti();
  const max     = cards.length - visible;
  testiDotsWrap.innerHTML = '';
  for (let i = 0; i <= max; i++) {
    const d = document.createElement('span');
    d.className = 'tdot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTesti(i));
    testiDotsWrap.appendChild(d);
  }
}

function goTesti(index) {
  if (!testiTrack) return;
  const cards   = testiTrack.querySelectorAll('.testi-card');
  const visible = getVisibleTesti();
  const max     = cards.length - visible;
  testiCurrent  = Math.max(0, Math.min(index, max));
  const w       = cards[0].offsetWidth + 24;
  testiTrack.style.transform = `translateX(-${testiCurrent * w}px)`;
  testiDotsWrap.querySelectorAll('.tdot').forEach((d, i) => d.classList.toggle('active', i === testiCurrent));
}

function slideTesti(dir) {
  if (!testiTrack) return;
  const cards   = testiTrack.querySelectorAll('.testi-card');
  const visible = getVisibleTesti();
  const max     = cards.length - visible;
  goTesti(testiCurrent + dir < 0 ? max : testiCurrent + dir > max ? 0 : testiCurrent + dir);
}

// Auto-play Testimonials
let testiAuto = null;
if (testiTrack) {
  testiAuto = setInterval(() => slideTesti(1), 5500);
  const testiSlider = document.getElementById('testiSlider');
  if (testiSlider) {
    testiSlider.addEventListener('mouseenter', () => clearInterval(testiAuto));
    testiSlider.addEventListener('mouseleave', () => {
      testiAuto = setInterval(() => slideTesti(1), 5500);
    });
  }
}

window.addEventListener('load', initTesti);
window.addEventListener('resize', () => { testiCurrent = 0; initTesti(); goTesti(0); });


// ============================================================
// SMOOTH ANCHOR SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  });
});


// ============================================================
// GALLERY LIGHTBOX
// ============================================================
document.querySelectorAll('.gal-item').forEach(item => {
  item.addEventListener('click', function () {
    const img = this.querySelector('img');
    if (!img) return;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9999;
      background:rgba(10,24,50,0.95);
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;animation:fadeUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    const image = document.createElement('img');
    image.src = img.src; image.alt = img.alt;
    image.style.cssText = `max-width:90vw;max-height:85vh;border-radius:10px;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,0.5);`;
    const cap = document.createElement('div');
    cap.textContent = img.alt;
    cap.style.cssText = `position:absolute;bottom:32px;left:50%;transform:translateX(-50%);
      background:#f3ba4e;color:#000;padding:8px 20px;border-radius:4px;font-size:0.85rem;font-weight:600;font-family:Poppins,sans-serif;white-space:nowrap;`;
    overlay.appendChild(image);
    overlay.appendChild(cap);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', () => { overlay.remove(); document.body.style.overflow = ''; });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { overlay.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', esc); }
    });
  });
});


// ============================================================
// INITIALIZATION
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic switcher defaults to 'group' (or checks hash if we want to deep link)
  const hash = window.location.hash.substring(1);
  if (CAMPUS_DATA[hash]) {
    switchCampus(hash);
  } else {
    switchCampus("group");
  }
  
  // Dispatch scroll to sync initial navbar state
  window.dispatchEvent(new Event('scroll'));
  console.log('%cABS Group of Schools Portal Connected', 'color:#1a3c6e;font-size:16px;font-weight:bold;font-family:Poppins,sans-serif;');
});
