// Improved UX with minimal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Button animation for better UX
    const buttons = document.querySelectorAll('.action-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
    });

    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Promotion Banner for Free Shipping on Orders Above 50€
    const promoBanner = document.createElement('div');
    promoBanner.classList.add('promo-banner');
    promoBanner.textContent = 'Doprava zdarma pri objednávkach nad 50€!';
    document.body.insertBefore(promoBanner, document.body.firstChild);

    // Promo Banner Styles - odstránená pozícia sticky
    const bannerStyle = document.createElement('style');
    bannerStyle.textContent = `
        .promo-banner {
            background-color: #24c29a;
            color: #fff;
            text-align: center;
            padding: 10px;
            font-size: 1.2em;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px; /* Pridaný margin na oddelenie od obsahu */
        }
    `;
    document.head.appendChild(bannerStyle);
});
