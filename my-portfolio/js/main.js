// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? '🌞' : '🌙';
    toggleButton.textContent = theme;
});

// Set the initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleButton.textContent = '🌞';
}

// Save theme preference
window.addEventListener('load', () => {
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
