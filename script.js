// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initCustomCursor();
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimation();
    initSkillBars();
    initProjectFilter();
    initCounters();
    initTabs();
    initLanguageToggle();
});

// Language and Translations
const translations = {
    'en': {
        // Navigation
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        
        // Hero section
        'hero.badge': 'Full-Stack Developer',
        'hero.title': 'Creating digital <span class="text-gradient">experiences</span> with clean code',
        'hero.subtitle': 'I design and build high-quality websites and applications that focus on performance and user experience.',
        'hero.btnProjects': 'View Projects',
        'hero.btnContact': 'Contact Me',
        'hero.scroll': 'Scroll down',
        
        // About section
        'about.title': 'About Me',
        'about.text1': "Hello! I'm vladislave01, an aspiring full-stack developer from Kazakhstan.",
        'about.text2': "Just like my passion for the mountains — where every climb is a challenge that rewards me with breathtaking views — I see programming as a journey of constant learning and discovery. Each project is a new peak to conquer, bringing me closer to becoming a stronger and more confident developer.",
        'about.projects': 'Projects Completed',
        'about.clients': 'Happy Clients',
        'about.experience': 'Years Experience',
        'about.downloadCV': 'Download CV',
        
        // Skills section
        'skills.title': 'My Skills',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools',
        
        // Projects section
        'projects.title': 'My Projects',
        'projects.all': 'All',
        'projects.frontend': 'Frontend',
        'projects.backend': 'Backend',
        'projects.fullstack': 'Fullstack',
        'projects.ecommerce': 'LynorShop',
        'projects.ecommerceDesc': 'A full-featured online store boots with product management, cart, and checkout functionality.',
        
        // Experience section
        'experience.title': 'Work Experience',
        'experience.current': 'Present',
        'experience.fullstack': 'Full-Stack Developer',
        'experience.fullstackDesc': 'Developing and maintaining web applications using modern technologies.',
        'experience.fullstack1': 'Developed responsive web applications using JavaScript, PHP, MySQL, CSS, HTML, and backend work including Google authentication and checkout functionality',
        'experience.frontend': '3-month internship at IT Company',
        'experience.frontendDesc': 'Learned IntelIj IDE and Jmix framework',
        'experience.frontend1': 'Created several Jmix projects including corporate websites with Google authentication',
        'experience.frontend2': 'Learning server applications and databases',
        'experience.frontendDesc2': 'Studying Proxmox, MySQL, PostgreSQL',
        'experience.frontend3': 'Studying Proxmox, MySQL and PostgreSQL. In Proxmox, virtual machines were created and configured, one of which was connected to a custom domain and hosted a website with HTTPS support and data encryption. MySQL was used for integration with training projects, including data storage and processing. PostgreSQL was applied for working with more complex data structures and testing application functionality, which provided experience in administration and optimization of different DBMS.',

        
        // Footer
        'footer.navigation': 'Navigation',
        'footer.copyright': '© 2025 vladislave01. All rights reserved.',
        "footer.contact": "Contact"
    },
    'ru': {
        // Navigation
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.projects': 'Проекты',
        'nav.experience': 'Опыт',
        
        // Hero section
        'hero.badge': 'Full-Stack разработчик',
        'hero.title': 'Создаю цифровые <span class="text-gradient">впечатления</span> с помощью чистого кода',
        'hero.subtitle': 'Я разрабатываю и создаю высококачественные веб-сайты и приложения, ориентированные на производительность и пользовательский опыт.',
        'hero.btnProjects': 'Посмотреть проекты',
        'hero.btnContact': 'Связаться',
        'hero.scroll': 'Листайте вниз',
        
        // About section
        'about.title': 'Обо мне',
        'about.text1': "Привет! Я vladislave01, начинающий full-stack разработчик из Казахстана.",
        'about.text2': "Так же, как и моя страсть к горам — где каждое восхождение является испытанием, которое вознаграждает меня захватывающими видами — я рассматриваю программирование как путешествие постоянного обучения и открытий. Каждый проект — это новая вершина, которую нужно покорить, приближая меня к становлению более сильным и уверенным разработчиком.",
        'about.projects': 'Завершенных практических проектов',
        'about.clients': 'Довольных клиентов',
        'about.experience': 'Год опыта',
        'about.downloadCV': 'Скачать резюме',
        
        // Skills section
        'skills.title': 'Мои навыки',
        'skills.frontend': 'Фронтенд',
        'skills.backend': 'Бэкенд',
        'skills.tools': 'Инструменты',
        
        // Projects section
        'projects.title': 'Мои проекты',
        'projects.all': 'Все',
        'projects.frontend': 'Фронтенд',
        'projects.backend': 'Бэкенд',
        'projects.fullstack': 'Фуллстек',
        'projects.ecommerce': 'LynorShop',
        'projects.ecommerceDesc': 'Полнофункциональный интернет-магазин кроссовок с управлением товарами, корзиной и функцией оформления заказа.',
        
        // Experience section
        'experience.title': 'Опыт работы',
        'experience.current': 'Настоящее время',
        'experience.fullstack': 'Начинающий Full-Stack разработчик',
        'experience.fullstackDesc': 'Создал несколько Full-Stack проектов',
        'experience.fullstack1': 'В этих проектах я использовал JavaScript,PHP,MySQL,CSS,HTML, так же была работа с backend делал вход через гугл,оформление покупки кроссовок и т.п',
        'experience.frontend': 'Практика 3 мес в IT-Компании',
        'experience.frontendDesc': 'Обучался IntelIje IDE а именно фреймворку JMIX',
        'experience.frontend1': 'Создал несколько проектов на Jmix, такие как и корпаративные и сайты, так же использовал вход через Google a2th',
        'experience.frontend2': 'Обучение серверных приложений и баз данных',
        'experience.frontendDesc2': 'Изучение Proxmox,MySQL,PostgresSQL',
        'experience.frontend3': 'Изучение Proxmox, MySQL и PostgreSQL. В Proxmox было выполнено создание и настройка виртуальных машин, на одной из которых подключен собственный домен и развернут сайт с поддержкой HTTPS и шифрованием данных. MySQL использовалась для подключения и интеграции с учебными проектами, включая хранение и обработку данных. PostgreSQL применялась для работы с более сложными структурами данных и тестирования функционала приложений, что позволило получить опыт администрирования и оптимизации разных СУБД.',
        
        // Footer
        'footer.navigation': 'Навигация',
        'footer.copyright': '© 2025 vladislave01. Все права защищены.',
        'footer.contact': 'Связаться'
    }
};

// Initialize language toggle
function initLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    const languageText = document.querySelector('.language-text');
    
    // Get saved language from localStorage or default to 'ru'
    const savedLanguage = localStorage.getItem('language') || 'ru';
    
    // Apply saved language
    applyLanguage(savedLanguage);
    
    // Set initial button text
    languageText.textContent = savedLanguage === 'ru' ? 'EN' : 'RU';
    
    // Add click event listener
    languageToggle.addEventListener('click', function() {
        const currentLang = localStorage.getItem('language') || 'ru';
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        
        // Apply new language
        applyLanguage(newLang);
        
        // Save to localStorage
        localStorage.setItem('language', newLang);
        
        // Update button text
        languageText.textContent = newLang === 'ru' ? 'EN' : 'RU';
    });
}

// Apply language translations
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Cursor effects on interactive elements
        const hoverElements = document.querySelectorAll('a, button, .project-card, .tab-btn, .filter-btn');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-follower-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-follower-hover');
            });
        });
    } else {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    }
}

// Sticky Header
function initStickyHeader() {
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animation
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillSections = document.querySelectorAll('.skill-progress');
    
    if (skillSections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillSections.forEach(skill => {
        observer.observe(skill);
    });
}

// Project Filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.classList.remove('hide');
                    setTimeout(() => {
                        card.style.display = 'block';
                    }, 300);
                } else {
                    card.classList.add('hide');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // ms
    const step = 20; // ms
    const increment = target / (duration / step);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, step);
}

// Tabs
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length === 0 || tabPanes.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    // Reinitialize cursor on resize
    initCustomCursor();
});