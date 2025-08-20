// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
});