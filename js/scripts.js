// JavaScript code can be added here to enhance interactivity
console.log('Welcome to my security research site!');

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
