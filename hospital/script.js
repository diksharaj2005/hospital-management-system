document.addEventListener('DOMContentLoaded', function() {
    const headerOffset = document.querySelector('header').offsetHeight;

    const addSmoothScrolling = (selector) => {
        const links = document.querySelectorAll(selector);

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    };

    addSmoothScrolling('.nav-bar a');
    addSmoothScrolling('.footer-links a');
});
