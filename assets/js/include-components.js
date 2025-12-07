// Include Header and Footer Components
// Embedded HTML content to work without a web server
const preloaderHTML = `<!--Preloader-->
<div id="preloader">
    <div class="loader-cover">
        <div class="loader-container">
            <div class="loader-icon"></div>
        </div>
    </div>
</div>
<!--Preloader-end -->`;

const headerHTML = `<!-- Navbar -->
<header>
    <div class="container position-relative">
        <div class="position-relative">
            <nav class="navbar navbar-expand-lg navbar-home-2 flex-nowrap z-999 p-0 border border-1 rounded-3">
                <a href="#" class="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex" data-bs-target=".offCanvas__info" aria-controls="offCanvas__info">
                    <i class="ri-menu-2-line"></i>
                </a>
                <div class="container py-3 px-4">
                    <a class="navbar-brand d-flex main-logo align-items-center" href="index.html">
                        <img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
                        <span class="fs-4 ms-2">Elkheir.Ilyas</span>
                    </a>
                    <div class="d-none d-lg-flex">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="index.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#resume">Resume</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="project-list.html">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="blog-list.html">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
                        <div class="d-md-flex d-none gap-3">
                          
                        
                            <a href="https://www.linkedin.com/in/imsayif/">
                                <i class="ri-linkedin-fill fs-18"></i>
                            </a>
                            <a href="https://github.com/F0rS3c">
                                <i class="ri-github-fill fs-18"></i>
                            </a>
                        </div>
                        <div class="burger-icon burger-icon-white border rounded-3">
                            <span class="burger-icon-top"></span>
                            <span class="burger-icon-mid"></span>
                            <span class="burger-icon-bottom"></span>
                        </div>
                    </div>
                </div>
                <div class="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80" style="cursor: pointer;">
                    <i class="ri-sun-fill text-warning"></i>
                    <i class="ri-contrast-2-line text-white"></i>
                </div>
            </nav>
        </div>
        <!-- offCanvas-menu -->
        <div class="offCanvas__info style-2">
            <div class="offCanvas__close-icon menu-close">
                <button><i class="ri-close-line"></i></button>
            </div>
            <div class="offCanvas__logo mb-5">
                <h3 class="mb-0">Get in touch</h3>
            </div>
            <div class="offCanvas__side-info mb-30">
                <div class="contact-list mb-30">
                    <p class="fs-6 fw-medium text-200 mb-5">I'm always excited to take on new projects and collaborate with innovative minds.</p>
                    <div class="mb-3">
                        <span class="text-400 fs-5">Phone Number</span>
                        <p class="mb-0">+212 708-063033</p>
                    </div>
                    <div class="mb-3">
                        <span class="text-400 fs-5">Email</span>
                        <p class="mb-0">Elkheirilyas@outlook.com</p>
                    </div>
           
            
                </div>
                <div class="contact-list">
                    <p class="text-400 fs-5 mb-2">Social</p>
                    <div class="d-md-flex d-none gap-3">
                      
                      
                        <a href="https://www.linkedin.com/in/imsayif/">
                            <i class="ri-linkedin-fill fs-18"></i>
                        </a>
                        <a href="https://github.com/F0rS3c">
                            <i class="ri-github-fill fs-18"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="offCanvas__overly"></div>
        <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
            <div class="mobile-header-wrapper-inner">
                <div class="mobile-header-logo">
                    <a class="d-flex main-logo align-items-center d-inline-flex" href="index.html">
                        <img src="assets/imgs/footer/logo.svg" alt="zelio" />
                        <span class="fs-4 ms-2 text-dark">Elkheir.Ilyas</span>
                    </a>
                    <div class="burger-icon burger-icon-white border rounded-3">
                        <span class="burger-icon-top"></span>
                        <span class="burger-icon-mid"></span>
                        <span class="burger-icon-bottom"></span>
                    </div>
                </div>
                <div class="mobile-header-content-area">
                    <div class="perfect-scroll">
                        <div class="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul class="mobile-menu font-heading ps-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="project-list.html">Projects</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html#services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="blog-list.html">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html#contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`;

const footerHTML = `<!-- Footer -->
<footer>
    <div class="section-footer-2 position-relative">
        <div class="container position-relative z-1 border-top border-1 pb-2 pt-4 text-center">
            <a class="d-flex main-logo align-items-center d-inline-flex" href="index.html">
                <img src="assets/imgs/footer/3.png" data-bb-lazy="false" style="max-height: 40px" alt="Software Developer">
                <span class="fs-4 ms-2 site-name-text text-white-keep">Elkheir.Ilyas</span>
            </a>
            <div class="row text-center py-4">
                <span class="fs-6 text-white-keep">
                    © 2025 All Rights Reserved by <a href="https://f0rsec.com" class="text-primary">F0rS3c</a>.
                </span>
            </div>
        </div>
    </div>
</footer>
<!-- Scroll top -->
<div class="btn-scroll-top @@style">
    <svg class="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
        <path d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" />
    </svg>
</div>`;

// Function to inject HTML content
function injectHTML(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
        
        // Re-execute scripts in the loaded content
        const scripts = element.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
        
        // Trigger custom event for components loaded
        window.dispatchEvent(new CustomEvent('componentsLoaded', { 
            detail: { component: elementId } 
        }));
        
        // If header was loaded, initialize dark mode switcher
        if (elementId === 'header-placeholder') {
            initializeDarkModeSwitcher();
        }
    }
}

// Global function to update theme (used by both initialization and click handlers)
function updateThemeGlobally(isDarkMode) {
    const switchers = document.querySelectorAll('.dark-light-switcher');
    
    switchers.forEach(function (switcher) {
        const darkIcon = switcher.querySelector('.ri-sun-fill');
        const lightIcon = switcher.querySelector('.ri-contrast-2-line');
        
        if (darkIcon && lightIcon) {
            if (isDarkMode) {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'block';
            } else {
                lightIcon.style.display = 'block';
                darkIcon.style.display = 'none';
            }
        }
    });
    
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
}

// Function to initialize dark mode switcher
function initializeDarkModeSwitcher() {
    // Get all dark-light switchers (including newly injected ones)
    const switchers = document.querySelectorAll('.dark-light-switcher');
    
    if (switchers.length === 0) return;
    
    // Retrieve stored theme and update the theme
    const storedTheme = localStorage.getItem('theme') || 'dark';
    const isDarkMode = storedTheme === 'dark';
    updateThemeGlobally(isDarkMode);
    
    // Add click event listeners (using event delegation to avoid duplicates)
    switchers.forEach(function (switcher) {
        // Check if already initialized
        if (switcher.dataset.initialized === 'true') return;
        
        switcher.dataset.initialized = 'true';
        
        // Add click event listener
        switcher.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            const currentTheme = localStorage.getItem('theme') || 'dark';
            const isCurrentlyDark = currentTheme === 'dark';
            
            // Toggle theme
            const newTheme = isCurrentlyDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            updateThemeGlobally(newTheme === 'dark');
        });
    });
}

// Function to inject preloader directly into body
function injectPreloader() {
    // Check if preloader already exists
    if (!document.getElementById('preloader')) {
        const body = document.body;
        if (body) {
            // Insert preloader at the beginning of body
            body.insertAdjacentHTML('afterbegin', preloaderHTML);
        }
    }
}

// Function to hide preloader - more aggressive approach
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Immediately set styles to hide
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
        
        // Use jQuery if available for smooth fade
        if (typeof jQuery !== 'undefined' && jQuery.fn.fadeOut) {
            try {
                jQuery(preloader).fadeOut(300, function() {
                    jQuery(this).remove();
                });
            } catch(e) {
                // If jQuery fails, use vanilla JS
                setTimeout(() => {
                    preloader.style.display = 'none';
                    preloader.remove();
                }, 300);
            }
        } else {
            // Vanilla JS fallback: remove after transition
            setTimeout(() => {
                preloader.style.display = 'none';
                preloader.remove();
            }, 300);
        }
        return true;
    }
    return false;
}

// Load header and footer when DOM is ready
function loadComponents() {
    // Inject preloader first (directly into body)
    injectPreloader();
    
    // Then inject header and footer
    injectHTML('header-placeholder', headerHTML);
    injectHTML('footer-placeholder', footerHTML);
    
    // Initialize dark mode switcher after a short delay to ensure DOM is ready
    setTimeout(() => {
        initializeDarkModeSwitcher();
    }, 100);
    
    // Hide preloader immediately - no delay needed
    hidePreloader();
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadComponents();
        // Also hide preloader after DOM is ready
        setTimeout(hidePreloader, 50);
    });
} else {
    // DOM already loaded - run immediately
    loadComponents();
    setTimeout(hidePreloader, 50);
}

// Multiple fallbacks to ensure preloader is hidden
window.addEventListener('load', function() {
    hidePreloader();
    // Force hide after window load
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            preloader.remove();
        }
    }, 100);
});

// Immediate fallback - hide as soon as possible
setTimeout(() => {
    hidePreloader();
}, 200);

// Additional fallback after 500ms
setTimeout(() => {
    hidePreloader();
}, 500);

// Last resort - force hide after 1 second
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important;';
        preloader.remove();
    }
}, 1000);

