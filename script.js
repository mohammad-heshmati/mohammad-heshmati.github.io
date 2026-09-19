// اسکرول نرم و فعال‌سازی منو
document.querySelectorAll('.navbar ul a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.navbar ul a').forEach(a => {
            a.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// انیمیشن ورود کارت‌ها هنگام اسکرول
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = '0.6s';
    observer.observe(card);
});

console.log('🚀 سایت محمد حشمتی با موفقیت بارگذاری شد!');
