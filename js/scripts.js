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


// Guardian CTF (Sector 7)
window.Sector7 = {
    scan: function () {
        console.clear();
        console.log("%c[SCAN] INITIATING SECTOR 7 DEEP SCAN...", "color: #00ff41; font-weight: bold;");
        setTimeout(() => {
            console.log("%c[!] ANOMALY CONFIRMED.", "color: #ff5f56;");
            console.log("%c[!] LOCKDOWN ACTIVE. Two security keys required for override.", "color: #00e5ff;");
            console.log("%c[HINT 1] Key Fragment Alpha is embedded in the neural header (Meta Tag: 'x-grid-key').", "color: #888;");
            console.log("%c[HINT 2] Key Fragment Beta is etched into the structural blueprint (CSS Comment: 'x-grid-lock').", "color: #888;");
            console.log("%c[CMD] Execute: Sector7.override(KeyAlpha + KeyBeta)", "color: #ffff00;");
        }, 1000);
        return "Scanning...";
    },
    override: function (passphrase) {
        // Expected: NeonGenesis
        if (passphrase === "NeonGenesis") {
            console.clear();
            console.log(`%c
   _____ ______________  ____  ___   __________  _________ 
  / ___// ____/ ____/ / / / / / / | / /  _/   |/_  __/   |
  \\__ \\/ __/ / /   / / / / /_/ /  |/ // // /| | / / / /| |
 ___/ / /___/ /___/ /_/ / __  / /|  // // ___ |/ / / ___ |
/____/_____/\\____/\\____/_/ /_/_/ |_/___/_/  |_/_/ /_/  |_|
                                                          
[+] ACCESS GRANTED. WELCOME, OPERATIVE.
[+] REWARD UNLOCKED:
    Email: dmicho@proton.me
    Subject: SECTOR7_OPERATIVE
    (Send this to claim your priority status).
`, "color: #00ff41; font-weight: bold;");
            return "Override Successful.";
        } else {
            console.log("%c[!] ACCESS DENIED. INVALID PASSPHRASE.", "color: #ff5f56; font-weight: bold;");
            return "Override Failed.";
        }
    }
};

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

    // System Boot Sequence
    const bootLogs = [
        "[ OK ] Initializing core system...",
        "[ OK ] Loading kernel modules...",
        "[ OK ] Mounting /dev/sda1 (SECURE_STORAGE)...",
        "[ OK ] Bypassing local security perimeters...",
        "[ OK ] Establishing encrypted handshake...",
        "[ OK ] TRACE_DETECTION: DISABLED",
        "[ OK ] Connection established. Welcome, Operative."
    ];

    if (contentEl) {
        contentEl.style.display = 'block';
        contentEl.style.opacity = '1';
        contentEl.innerHTML = '<div id="boot-logs"></div>';
        const logContainer = document.getElementById('boot-logs');

        for (const log of bootLogs) {
            const p = document.createElement('p');
            p.style.color = '#555';
            p.style.fontSize = '0.75rem';
            p.style.margin = '2px 0';
            p.innerText = log;
            logContainer.appendChild(p);
            await new Promise(resolve => setTimeout(resolve, 150));
        }

        await new Promise(resolve => setTimeout(resolve, 500));
        contentEl.innerHTML = ''; // Clear logs for main content
        contentEl.style.display = 'none';
    }

    await new Promise(resolve => setTimeout(resolve, 400)); // Initial delay
    await typeWriter(title, titleEl, 70);
    await new Promise(resolve => setTimeout(resolve, 500));
    await typeWriter(subtitle, subEl, 40);

    // Show rest of content
    if (contentEl) {
        contentEl.style.display = 'block';
        contentEl.style.opacity = '0';
        contentEl.innerHTML = `
            <p style="color: var(--text-dim);">[+] System initialized...</p>
            <p style="color: var(--text-dim);">[+] Security clearance: Level 5</p>
            <p style="color: var(--text-dim);">[+] Welcome back, researcher.</p>
            <br>
            <p>I am a <span style="color: var(--accent-secondary);">Pentester</span> and <span
                    style="color: var(--accent-secondary);">Security Researcher</span> dedicated to identifying
                vulnerabilities and strengthening digital perimeters.</p>
        `;
        let opacity = 0;
        const fade = setInterval(() => {
            if (opacity >= 1) clearInterval(fade);
            contentEl.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }
}

window.onload = runIntro;

// Initial Hook
setTimeout(() => {
    console.log("%c[SYSTEM] ⚠️ ANOMALY DETECTED: Unauthorized Signal in Sector 7.", "color: #ff5f56; background: #220000; padding: 4px;");
    console.log("%c[SYSTEM] Hint: Type 'Sector7.scan()' to analyze.", "color: #00ff41; background: #002200; padding: 4px;");
    console.log("%c[DEBUG] Scripts.js loaded successfully.", "color: #00ff41;");
}, 3000);


