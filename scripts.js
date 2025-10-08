// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    // close others
    document.querySelectorAll('.faq-item').forEach(function(i) {
      if (i !== item) {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      }
    });
    // toggle current
    item.classList.toggle('open');
    this.setAttribute('aria-expanded', (!expanded).toString());
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ========== LANGUAGE TRANSLATION SYSTEM ==========

// Translation data for all languages
const translations = {
  en: {
    'nav-services': 'Services',
    'nav-how': 'How it works',
    'nav-testimonials': 'Testimonials',
    'nav-faq': 'FAQ',
    'cta-header': 'Get Free Consultation',
    'hero-eyebrow': 'Affordable legal help, simplified',
    'hero-title': 'Expert legal support without the complexity or surprise fees.',
    'hero-lead': 'Connect with vetted legal professionals for contracts, immigration, family matters, disputes, and more. Clear steps. Transparent pricing. Fast response.',
    'cta-book': 'Book Free Consultation',
    'cta-explore': 'Explore Services',
    'popular-requests': 'Popular Requests',
    'stat-doc': 'Doc Review',
    'stat-satisfaction': 'Client Satisfaction',
    'stat-cases': 'Cases Assisted',
    'badge-pricing': 'Fixed, upfront pricing',
    'badge-secure': 'Secure & confidential',
    'badge-vetted': 'Vetted professionals',
    'badge-fast': 'Fast response times',
    'services-title': 'Legal services made approachable',
    'services-kicker': 'Pick what you need—no jargon, no surprises.',
    'service1-title': 'Contracts & Business',
    'service1-desc': 'Drafting, review, and guidance for agreements, NDAs, partnership terms, and more.',
    'service1-price': 'From $149',
    'service2-title': 'Immigration',
    'service2-desc': 'Visa applications, appeals, sponsor licenses, and document preparation.',
    'service2-price': 'From $199',
    'service3-title': 'Family & Personal',
    'service3-desc': 'Divorce, custody, wills, name changes, and sensitive matters with care.',
    'service3-price': 'From $179',
    'service4-title': 'Housing & Disputes',
    'service4-desc': 'Landlord-tenant issues, small claims, debt recovery, and negotiation.',
    'service4-price': 'From $129',
    'service5-title': 'Employment',
    'service5-desc': 'Contracts, grievances, settlement agreements, and workplace rights.',
    'service5-price': 'From $159',
    'service6-title': 'Document Review',
    'service6-desc': 'Fast turnaround on legal document checks with clear, actionable notes.',
    'service6-price': 'From $89',
    'how-title': 'How it works',
    'how-kicker': 'Three clear steps—done in days, not weeks.',
    'step1-title': 'Tell us what you need',
    'step1-desc': 'Share a short brief or upload documents. We match you with the right expert.',
    'step2-title': 'Get a fixed quote',
    'step2-desc': 'Clear scope, timeline, and price—no hourly surprises.',
    'step3-title': 'Work and resolve',
    'step3-desc': 'Message securely, track progress, and get results you can rely on.',
    'testimonials-title': 'What clients say',
    'testimonials-kicker': 'Real outcomes from real people and businesses.',
    'testimonial1': '"Clear pricing and fast turnaround. Saved our startup weeks."',
    'testimonial1-author': '— Priya, Founder',
    'testimonial2': '"They explained everything without jargon. Felt supported throughout."',
    'testimonial2-author': '— Ahmed, Father',
    'testimonial3': '"Document review was same day and super helpful."',
    'testimonial3-author': '— James, Contractor',
    'faq-title': 'Frequently asked questions',
    'faq1-q': 'How fast can you start?',
    'faq1-a': 'For most matters, within 24–48 hours after the initial call and quote.',
    'faq2-q': 'Do you offer fixed prices?',
    'faq2-a': 'Yes. We scope the work and provide a fixed fee before you proceed.',
    'faq3-q': 'Is my information secure?',
    'faq3-a': 'Absolutely. Your data is encrypted in transit and handled confidentially.',
    'contact-title': 'Get your free consultation',
    'contact-kicker': 'Tell us a bit about your matter. We\'ll get back within 24 hours.',
    'form-name': 'Name',
    'form-name-placeholder': 'Jane Doe',
    'form-email': 'Email',
    'form-email-placeholder': 'jane@email.com',
    'form-message': 'Brief description',
    'form-message-placeholder': 'Tell us about your legal need...',
    'form-submit': 'Request Consultation'
  },
  es: {
    'nav-services': 'Servicios',
    'nav-how': 'Cómo funciona',
    'nav-testimonials': 'Testimonios',
    'nav-faq': 'Preguntas frecuentes',
    'cta-header': 'Consulta Gratis',
    'hero-eyebrow': 'Ayuda legal asequible, simplificada',
    'hero-title': 'Apoyo legal experto sin complejidad ni tarifas sorpresa.',
    'hero-lead': 'Conéctese con profesionales legales verificados para contratos, inmigración, asuntos familiares, disputas y más. Pasos claros. Precios transparentes. Respuesta rápida.',
    'cta-book': 'Reservar Consulta Gratis',
    'cta-explore': 'Explorar Servicios',
    'popular-requests': 'Solicitudes Populares',
    'stat-doc': 'Revisión de Documentos',
    'stat-satisfaction': 'Satisfacción del Cliente',
    'stat-cases': 'Casos Asistidos',
    'badge-pricing': 'Precios fijos y transparentes',
    'badge-secure': 'Seguro y confidencial',
    'badge-vetted': 'Profesionales verificados',
    'badge-fast': 'Tiempos de respuesta rápidos',
    'services-title': 'Servicios legales accesibles',
    'services-kicker': 'Elija lo que necesita, sin jerga ni sorpresas.',
    'service1-title': 'Contratos y Negocios',
    'service1-desc': 'Redacción, revisión y orientación para acuerdos, NDA, términos de asociación y más.',
    'service1-price': 'Desde $149',
    'service2-title': 'Inmigración',
    'service2-desc': 'Solicitudes de visa, apelaciones, licencias de patrocinio y preparación de documentos.',
    'service2-price': 'Desde $199',
    'service3-title': 'Familia y Personal',
    'service3-desc': 'Divorcio, custodia, testamentos, cambios de nombre y asuntos delicados con cuidado.',
    'service3-price': 'Desde $179',
    'service4-title': 'Vivienda y Disputas',
    'service4-desc': 'Problemas entre propietarios e inquilinos, reclamos menores, recuperación de deudas y negociación.',
    'service4-price': 'Desde $129',
    'service5-title': 'Empleo',
    'service5-desc': 'Contratos, quejas, acuerdos de liquidación y derechos laborales.',
    'service5-price': 'Desde $159',
    'service6-title': 'Revisión de Documentos',
    'service6-desc': 'Revisión rápida de documentos legales con notas claras y prácticas.',
    'service6-price': 'Desde $89',
    'how-title': 'Cómo funciona',
    'how-kicker': 'Tres pasos claros: hecho en días, no semanas.',
    'step1-title': 'Díganos lo que necesita',
    'step1-desc': 'Comparta un breve resumen o cargue documentos. Lo conectamos con el experto adecuado.',
    'step2-title': 'Obtenga una cotización fija',
    'step2-desc': 'Alcance claro, cronograma y precio, sin sorpresas por hora.',
    'step3-title': 'Trabaje y resuelva',
    'step3-desc': 'Envíe mensajes de forma segura, realice un seguimiento del progreso y obtenga resultados confiables.',
    'testimonials-title': 'Lo que dicen los clientes',
    'testimonials-kicker': 'Resultados reales de personas y empresas reales.',
    'testimonial1': '"Precios claros y entrega rápida. Ahorró semanas a nuestra startup."',
    'testimonial1-author': '— Priya, Fundadora',
    'testimonial2': '"Explicaron todo sin jerga. Me sentí apoyado durante todo el proceso."',
    'testimonial2-author': '— Ahmed, Padre',
    'testimonial3': '"La revisión del documento fue el mismo día y muy útil."',
    'testimonial3-author': '— James, Contratista',
    'faq-title': 'Preguntas frecuentes',
    'faq1-q': '¿Qué tan rápido pueden comenzar?',
    'faq1-a': 'Para la mayoría de los asuntos, dentro de 24 a 48 horas después de la llamada inicial y la cotización.',
    'faq2-q': '¿Ofrecen precios fijos?',
    'faq2-a': 'Sí. Definimos el trabajo y proporcionamos una tarifa fija antes de que proceda.',
    'faq3-q': '¿Es segura mi información?',
    'faq3-a': 'Absolutamente. Sus datos están cifrados en tránsito y se manejan de forma confidencial.',
    'contact-title': 'Obtenga su consulta gratuita',
    'contact-kicker': 'Cuéntenos un poco sobre su asunto. Le responderemos en 24 horas.',
    'form-name': 'Nombre',
    'form-name-placeholder': 'Juan Pérez',
    'form-email': 'Correo electrónico',
    'form-email-placeholder': 'juan@correo.com',
    'form-message': 'Breve descripción',
    'form-message-placeholder': 'Cuéntenos sobre su necesidad legal...',
    'form-submit': 'Solicitar Consulta'
  },
  fr: {
    'nav-services': 'Services',
    'nav-how': 'Comment ça marche',
    'nav-testimonials': 'Témoignages',
    'nav-faq': 'FAQ',
    'cta-header': 'Consultation Gratuite',
    'hero-eyebrow': 'Aide juridique abordable, simplifiée',
    'hero-title': 'Soutien juridique expert sans complexité ni frais surprises.',
    'hero-lead': 'Connectez-vous avec des professionnels juridiques vérifiés pour les contrats, l\'immigration, les affaires familiales, les litiges et plus encore. Étapes claires. Tarification transparente. Réponse rapide.',
    'cta-book': 'Réserver une Consultation Gratuite',
    'cta-explore': 'Explorer les Services',
    'popular-requests': 'Demandes Populaires',
    'stat-doc': 'Révision de Documents',
    'stat-satisfaction': 'Satisfaction Client',
    'stat-cases': 'Cas Assistés',
    'badge-pricing': 'Prix fixes et transparents',
    'badge-secure': 'Sécurisé et confidentiel',
    'badge-vetted': 'Professionnels vérifiés',
    'badge-fast': 'Temps de réponse rapides',
    'services-title': 'Services juridiques accessibles',
    'services-kicker': 'Choisissez ce dont vous avez besoin, sans jargon ni surprises.',
    'service1-title': 'Contrats et Affaires',
    'service1-desc': 'Rédaction, révision et conseils pour les accords, NDA, conditions de partenariat et plus encore.',
    'service1-price': 'À partir de 149 $',
    'service2-title': 'Immigration',
    'service2-desc': 'Demandes de visa, appels, licences de parrainage et préparation de documents.',
    'service2-price': 'À partir de 199 $',
    'service3-title': 'Famille et Personnel',
    'service3-desc': 'Divorce, garde, testaments, changements de nom et questions délicates avec soin.',
    'service3-price': 'À partir de 179 $',
    'service4-title': 'Logement et Litiges',
    'service4-desc': 'Problèmes entre propriétaires et locataires, petites créances, recouvrement de dettes et négociation.',
    'service4-price': 'À partir de 129 $',
    'service5-title': 'Emploi',
    'service5-desc': 'Contrats, griefs, accords de règlement et droits au travail.',
    'service5-price': 'À partir de 159 $',
    'service6-title': 'Révision de Documents',
    'service6-desc': 'Révision rapide des documents juridiques avec des notes claires et exploitables.',
    'service6-price': 'À partir de 89 $',
    'how-title': 'Comment ça marche',
    'how-kicker': 'Trois étapes claires, fait en jours, pas en semaines.',
    'step1-title': 'Dites-nous ce dont vous avez besoin',
    'step1-desc': 'Partagez un bref résumé ou téléchargez des documents. Nous vous mettons en contact avec le bon expert.',
    'step2-title': 'Obtenez un devis fixe',
    'step2-desc': 'Portée claire, calendrier et prix, sans surprises horaires.',
    'step3-title': 'Travaillez et résolvez',
    'step3-desc': 'Envoyez des messages en toute sécurité, suivez les progrès et obtenez des résultats fiables.',
    'testimonials-title': 'Ce que disent les clients',
    'testimonials-kicker': 'Des résultats réels de vraies personnes et entreprises.',
    'testimonial1': '"Prix clairs et livraison rapide. A économisé des semaines à notre startup."',
    'testimonial1-author': '— Priya, Fondatrice',
    'testimonial2': '"Ils ont tout expliqué sans jargon. Je me suis senti soutenu tout au long."',
    'testimonial2-author': '— Ahmed, Père',
    'testimonial3': '"La révision du document a été le jour même et très utile."',
    'testimonial3-author': '— James, Entrepreneur',
    'faq-title': 'Questions fréquemment posées',
    'faq1-q': 'À quelle vitesse pouvez-vous commencer?',
    'faq1-a': 'Pour la plupart des questions, dans les 24 à 48 heures après l\'appel initial et le devis.',
    'faq2-q': 'Offrez-vous des prix fixes?',
    'faq2-a': 'Oui. Nous définissons le travail et fournissons un tarif fixe avant de procéder.',
    'faq3-q': 'Mes informations sont-elles sécurisées?',
    'faq3-a': 'Absolument. Vos données sont cryptées en transit et traitées de manière confidentielle.',
    'contact-title': 'Obtenez votre consultation gratuite',
    'contact-kicker': 'Parlez-nous un peu de votre affaire. Nous vous répondrons dans les 24 heures.',
    'form-name': 'Nom',
    'form-name-placeholder': 'Marie Dupont',
    'form-email': 'Email',
    'form-email-placeholder': 'marie@email.com',
    'form-message': 'Brève description',
    'form-message-placeholder': 'Parlez-nous de votre besoin juridique...',
    'form-submit': 'Demander une Consultation'
  }
};

// Get saved language or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to change language
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Update language display
  const langDisplay = {
    'en': 'EN',
    'es': 'ES',
    'fr': 'FR'
  };
  document.getElementById('currentLang').textContent = langDisplay[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // Close dropdown
  document.getElementById('langMenu').classList.remove('show');
}

// Language dropdown toggle
document.getElementById('langBtn').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('langMenu').classList.toggle('show');
});

// Language selection
document.querySelectorAll('[data-lang]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const langMenu = document.getElementById('langMenu');
  const langBtn = document.getElementById('langBtn');
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove('show');
  }
});

// Initialize with saved language on page load
changeLanguage(currentLanguage);