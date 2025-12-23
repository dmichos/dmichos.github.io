// Initialize particles.js with hardcoded config to avoid CORS issues on file:// protocol
const particlesConfig = {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff41" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": false, "anim": { "enable": true, "speed": 1, "opacity_min": 0.2, "sync": false } },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00e5ff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
};

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
}

// IP Fetcher
async function fetchIp() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipDisplay = document.getElementById('ip-address');
        if (ipDisplay) {
            ipDisplay.innerText = `IP: ${data.ip}`;
        }
    } catch (error) {
        console.error('Error fetching IP:', error);
    }
}
fetchIp();

// Typewriter Effect
const title = "WHOAMI: DMICHOS";
const subtitle = "Red Team Specialist | Vulnerability Researcher";
const titleEl = document.getElementById('typewriter-title');
const subEl = document.getElementById('typewriter-sub');
const contentEl = document.getElementById('terminal-content');

async function typeWriter(text, element, delay = 100) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function runIntro() {
    if (!titleEl || !subEl) return;

    await new Promise(resolve => setTimeout(resolve, 800)); // Initial delay
    await typeWriter(title, titleEl, 70);
    await new Promise(resolve => setTimeout(resolve, 500));
    await typeWriter(subtitle, subEl, 40);

    // Show rest of content
    if (contentEl) {
        contentEl.style.display = 'block';
        contentEl.style.opacity = '0';
        let opacity = 0;
        const fade = setInterval(() => {
            if (opacity >= 1) clearInterval(fade);
            contentEl.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }
}

window.onload = runIntro;

