document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight;
        
        sections.forEach(section => {
            if (scrollPos > section.offsetTop + section.clientHeight / 2) {
                section.classList.add('visible');
            }
        });
    });
});
