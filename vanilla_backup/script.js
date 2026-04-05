document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. STICKY HEADER (Show/Hide on reverse scroll)
       ========================================= */
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    let lastScrollTop = 0;

    if (header && heroSection) {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const heroBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;

            // Check if we are past the hero section
            if (currentScroll > heroBottom) {
                // If scrolling UP: show sticky header
                if (currentScroll < lastScrollTop) {
                    header.classList.add('header--sticky');
                    header.classList.remove('header--hidden');
                }
                // If scrolling DOWN: hide sticky header
                else {
                    header.classList.remove('header--sticky');
                    header.classList.add('header--hidden');
                }
            } else {
                // We are at the top, revert to basic absolute positioning
                header.classList.remove('header--sticky');
                header.classList.remove('header--hidden');
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        };

        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
    }

    /* =========================================
       2. CAROUSEL (Touch Enabled & Responsive)
       ========================================= */
    const track = document.getElementById('heroCarousel');
    const slides = Array.from(document.querySelectorAll('.carousel__slide'));
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');
    const thumbnails = document.querySelectorAll('.thumbnail');

    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    const updateCarousel = (index) => {
        // Enforce bounds cleanly
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        currentIndex = index;

        if (track) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === currentIndex);
        });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));

    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => updateCarousel(i));
    });

    // Touch Support for Mobile
    if (track) {
        track.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            handleTouchSwipe();
        }, { passive: true });
    }

    const handleTouchSwipe = () => {
        const threshold = 50; // Minimum distance to trigger swipe
        if (startX - endX > threshold) {
            // Swiped Left
            updateCarousel(currentIndex + 1);
        } else if (endX - startX > threshold) {
            // Swiped Right
            updateCarousel(currentIndex - 1);
        }
    };

    /* =========================================
       3. IMAGE ZOOM FEATURE (Desktop Only)
       ========================================= */
    const zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            // Only trigger zoom on Desktop devices (>1024px)
            if (window.innerWidth <= 1024) return;

            const rect = img.getBoundingClientRect();
            // Calculate cursor position as a percentage
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            // Apply zoom styles
            img.style.backgroundPosition = `${x}% ${y}%`;
            img.style.backgroundSize = '200%'; // Magnification level
            img.style.cursor = 'crosshair';
        });

        img.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 1024) return;
            // Reset to default
            img.style.backgroundPosition = 'center';
            img.style.backgroundSize = 'cover';
            img.style.cursor = 'default';
        });
    });

    /* =========================================
       4. FAQ ACCORDION (Max-Height Logic)
       ========================================= */
    const accordionHeaders = document.querySelectorAll('.accordion__header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Close all other accordions to keep layout clean
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current accordion height
            if (isExpanded) {
                header.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    /* =========================================
       5. MOBILE MENU (Hamburger Toggle)
       ========================================= */
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');

            // Ensure aria attributes are updated if used
            const isOpen = nav.classList.contains('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });
    }

    // Recalculate values smoothly on resize if needed
    window.addEventListener('resize', () => {
        // Only update accordion heights if they are currently open
        accordionHeaders.forEach(header => {
            if (header.getAttribute('aria-expanded') === 'true') {
                const content = header.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });

        // Close mobile nav on resize above 1024px to prevent artifacts
        if (window.innerWidth > 1024 && nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
            if (hamburger) hamburger.classList.remove('active');
        }
    });

});
