document.addEventListener("DOMContentLoaded", function() {
    
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'shortcut icon';
    faviconLink.href = '/images/namo-favicon.png'; 
    document.head.appendChild(faviconLink);

    const navbarHTML = `
        <nav>
            <a href="index.html" class="logo-link">
                <div class="logo">
                    <img src="logo.png" alt="NP Logo">
                    <span>NAMO PRODUCTION</span>
                </div>
            </a>
            
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <ul class="nav-links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="services.html">SERVICES</a></li>
                <li><a href="work.html">PORTFOLIO</a></li>
                <li><a href="contact.html">CONTACT</a></li>
                <li><a href="#" class="highlight-link">NAMO JAINISM</a></li>
            </ul>
        </nav>
    `;

    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h2>NAMO PRODUCTION</h2>
                    <p>Creating cinematic visual experiences that elevate brands and tell compelling stories.</p>
                </div>
                <div class="footer-col">
                    <h4>EXPLORE</h4>
                    <ul class="footer-links">
                        <li><a href="work.html">Our Work</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>FOLLOW</h4>
                    <ul class="footer-links">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>VISIT US</h4>
                    <p>Indore,<br>Madhya Pradesh, India</p>
                    <p style="margin-top:15px; color:#fff;">+91 96309 76796</p>
                    <p style="margin-top:15px; color:#fff;">+91 82360 45863</p>
                    <p style="margin-top:15px; color:#fff;">+91 82996 37888</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Namo Production. All Rights Reserved.</p>
                <p class="lazyworkz-credit">Designed & Developed by <a href="#" target="_blank">LazyWorkz</a></p>
            </div>
        </footer>
    `;

    // --- 3. Inject HTML ---
    const headerPlaceholder = document.getElementById('universal-header');
    const footerPlaceholder = document.getElementById('universal-footer');

    if (headerPlaceholder) headerPlaceholder.innerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // --- 4. Logic & Event Listeners ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
    const body = document.body;

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            
            // Toggle body scroll lock
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            body.style.overflow = 'auto'; 
        }));
    }


    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.style.background = window.scrollY > 50 ? 'rgba(5,5,5,0.98)' : 'rgba(5,5,5,0.8)';
        }
    });
});