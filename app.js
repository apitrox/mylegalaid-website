(function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            menu.hidden = isOpen;
        });
    }


    const form = document.getElementById('quick-find');
    const topic = document.getElementById('topic');
    if (form && topic) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const q = topic.value.trim();
            if (!q) return;
// Replace with real routing later
            window.location.href = `#/search?q=${encodeURIComponent(q)}`;
        });
    }
})();