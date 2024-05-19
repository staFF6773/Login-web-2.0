const themeToggle = document.getElementById('theme-toggle');
const app = document.getElementById('app');
const card = document.getElementById('card');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const links = document.querySelectorAll('a');
const footer = document.querySelector('footer');

themeToggle.addEventListener('click', () => {
    app.classList.toggle('bg-gray-900');
    app.classList.toggle('bg-white');
    app.classList.toggle('text-gray-200');
    app.classList.toggle('text-gray-900');

    card.classList.toggle('bg-gray-800');
    card.classList.toggle('bg-gray-100');

    inputs.forEach(input => {
        input.classList.toggle('bg-gray-700');
        input.classList.toggle('bg-gray-200');
        input.classList.toggle('border-gray-600');
        input.classList.toggle('border-gray-300');
        input.classList.toggle('placeholder-gray-400');
        input.classList.toggle('placeholder-gray-500');
    });

    labels.forEach(label => {
        label.classList.toggle('text-gray-200');
        label.classList.toggle('text-gray-700');
    });

    links.forEach(link => {
        link.classList.toggle('text-indigo-600');
        link.classList.toggle('text-indigo-500');
    });

    footer.classList.toggle('bg-gray-800');
    footer.classList.toggle('bg-gray-200');
    footer.classList.toggle('text-gray-500');
    footer.classList.toggle('text-gray-800');

    themeToggle.textContent = app.classList.contains('bg-gray-900') ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    const githubLink = document.querySelector('footer a');
    githubLink.classList.toggle('text-white');
    githubLink.classList.toggle('text-gray-900');
});
