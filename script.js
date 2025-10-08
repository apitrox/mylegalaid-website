/**
 'footer.disclaimer': 'This website does not provide legal advice. For legal advice, please contact a licensed attorney. ',
 'footer.terms': 'Terms of use',
 'footer.privacy': 'Privacy policy'
 },
 es: {
 'hero.title': 'Ayuda legal para tejanos',
 'hero.subtitle': 'Encuentre información jurídica clara y fiable y recursos.',
 'hero.ctaPrimary': 'Obtenga ayuda ahora',
 'hero.ctaSecondary': 'Más información',
 'section.help.title': 'Cómo podemos ayudar',
 'section.help.body': 'Le conectamos con información jurídica, evaluaciones y remisiones a programas que podrían ayudarle.',
 'footer.disclaimer': 'Este sitio web no proporciona asesoramiento jurídico. Para obtener asesoramiento jurídico, póngase en contacto con un abogado con licencia.',
 'footer.terms': 'Términos de uso',
 'footer.privacy': 'Política de privacidad'
 },
 vi: {
 'hero.title': 'Hỗ trợ pháp lý cho người Texas',
 'hero.subtitle': 'Tìm thông tin pháp lý rõ ràng, đáng tin cậy và các nguồn trợ giúp.',
 'hero.ctaPrimary': 'Nhận hỗ trợ ngay',
 'hero.ctaSecondary': 'Tìm hiểu thêm',
 'section.help.title': 'Cách chúng tôi có thể giúp',
 'section.help.body': 'Chúng tôi kết nối bạn với thông tin pháp lý, sàng lọc, và giới thiệu đến các chương trình có thể giúp.',
 'footer.disclaimer': 'Trang web này không cung cấp tư vấn pháp lý. Để được tư vấn pháp lý, vui lòng liên hệ luật sư được cấp phép.',
 'footer.terms': 'Điều khoản sử dụng',
 'footer.privacy': 'Chính sách bảo mật'
 }
 };


 function applyI18n(lang){
 const dict = I18N[lang] || I18N.en;
 document.querySelectorAll('[data-i18n]').forEach(el => {
 const key = el.getAttribute('data-i18n');
 const val = dict[key];
 if (typeof val === 'string') el.textContent = val;
 });
 }


 function setLang(lang){
 localStorage.setItem('lang', lang);
 document.documentElement.lang = lang;
 applyI18n(lang);
 }


 function initLang(){
 const sel = document.getElementById('lang');
 const saved = localStorage.getItem('lang') || 'en';
 if (sel) sel.value = saved;
 setLang(saved);
 sel?.addEventListener('change', (e) => setLang(e.target.value));
 }


 function setYear(){
 const y = document.getElementById('year');
 if (y) y.textContent = new Date().getFullYear();
 }


 window.addEventListener('DOMContentLoaded', () => {
 setHero();
 initLang();
 setYear();
 });
 })();