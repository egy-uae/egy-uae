document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('langSwitcher');
    const body = document.body;

    // Function to set language preferences
    function setLanguage(lang) {
        if (lang === 'ar') {
            body.classList.remove('ltr');
            body.classList.add('rtl');
            body.setAttribute('dir', 'rtl');
            langSwitcher.textContent = 'English';
            localStorage.setItem('lang', 'ar');
            // Update texts to Arabic
            updateContent('ar');
        } else {
            body.classList.remove('rtl');
            body.classList.add('ltr');
            body.setAttribute('dir', 'ltr');
            langSwitcher.textContent = 'العربية';
            localStorage.setItem('lang', 'en');
            // Update texts to English
            updateContent('en');
        }
    }

    // Function to update content based on language (simple example)
    function updateContent(lang) {
        // This is a very basic example. For a real multi-language site,
        // you'd typically have data structures or API calls for translations.
        // Here, we'll just update a few key elements.
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Placeholder: Replace with actual translation logic
            // For example, if you have a translations object:
            // element.textContent = translations[lang][key] || element.textContent;

            // Simple switch for demo purposes (you'll fill this with actual translations)
            if (lang === 'ar') {
                switch(key) {
                    case 'home': element.textContent = 'الرئيسية'; break;
                    case 'about': element.textContent = 'من نحن'; break;
                    case 'services': element.textContent = 'خدماتنا'; break;
                    case 'products': element.textContent = 'المنتجات'; break;
                    case 'faqs': element.textContent = 'الأسئلة الشائعة'; break;
                    case 'compliance': element.textContent = 'الامتثال والجودة'; break;
                    case 'careers': element.textContent = 'الوظائف'; break;
                    case 'contact': element.textContent = 'اتصل بنا'; break;
                    case 'hero-heading': element.innerHTML = 'المؤسسة المصرية الإماراتية<br>للاستيراد والتصدير والتوكيلات التجارية'; break;
                    case 'hero-subheading': element.textContent = 'بوابة التجارة العالمية: ثقة، جودة، سرعة.'; break;
                    case 'discover-more': element.textContent = 'اكتشف المزيد'; break;
                    case 'about-us-summary': element.textContent = 'من نحن: تأسست المؤسسة المصرية الإماراتية في عام 2020 لتكون جسرًا تجاريًا بين مصر والإمارات والعالم. نلتزم بالجودة والابتكار.'; break;
                    case 'our-services-heading': element.textContent = 'خدماتنا المميزة'; break;
                    // Add more keys for other pages and sections
                }
            } else { // English
                switch(key) {
                    case 'home': element.textContent = 'Home'; break;
                    case 'about': element.textContent = 'About Us'; break;
                    case 'services': element.textContent = 'Services'; break;
                    case 'products': element.textContent = 'Products'; break;
                    case 'faqs': element.textContent = 'FAQs'; break;
                    case 'compliance': element.textContent = 'Compliance & Quality'; break;
                    case 'careers': element.textContent = 'Careers'; break;
                    case 'contact': element.textContent = 'Contact Us'; break;
                    case 'hero-heading': element.innerHTML = 'Al Massria Al Emaratia<br>for Import, Export & Commercial Agencies'; break;
                    case 'hero-subheading': element.textContent = 'Global Trade Gateway: Trust, Quality, Speed.'; break;
                    case 'discover-more': element.textContent = 'Discover More'; break;
                    case 'about-us-summary': element.textContent = 'About Us: Established in 2020, Al Massria Al Emaratia serves as a trade bridge between Egypt, UAE, and the world. We are committed to quality and innovation.'; break;
                    case 'our-services-heading': element.textContent = 'Our Distinguished Services'; break;
                    // Add more keys for other pages and sections
                }
            }
        });
        // Update other dynamic elements if needed, e.g., form placeholders
        if (document.getElementById('nameInput')) {
            document.getElementById('nameInput').placeholder = lang === 'ar' ? 'الاسم' : 'Name';
            document.getElementById('emailInput').placeholder = lang === 'ar' ? 'البريد الإلكتروني' : 'Email';
            document.getElementById('messageTextarea').placeholder = lang === 'ar' ? 'رسالتك' : 'Your Message';
        }

        // Update footer links
        document.querySelectorAll('.footer-link').forEach(link => {
            const originalHref = link.getAttribute('data-original-href');
            if (originalHref) {
                if (lang === 'ar') {
                    link.href = originalHref.replace('.html', '_ar.html'); // Example: about.html -> about_ar.html
                    // Or, simpler, just rely on the JS content update for static pages
                } else {
                    link.href = originalHref; // back to original English version
                }
            }
        });
    }

    // Load preferred language from localStorage or default to Arabic
    const preferredLang = localStorage.getItem('lang') || 'ar';
    setLanguage(preferredLang);

    // Event listener for language switcher
    if (langSwitcher) {
        langSwitcher.addEventListener('click', fu
