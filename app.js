// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');
const sections = document.querySelectorAll('.section');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Show the target section and hide others
            sections.forEach(section => {
                section.classList.remove('active');
            });
            targetElement.classList.add('active');
            
            // Update active link
            navLinksItems.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Scroll to the section
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Experience data
const experiences = [
    {
        company: 'Vantix Solutions',
        position: 'Frontend & Backend developer',
        duration: '2023-present',
        description: 'Developed and maintained cheats and spoofers.'
    },
    {
        company: 'Swapify',
        position: 'Full Time Exchanger',
        duration: '2024-Present',
        description: 'Full time exchanger.'
    },
    {
        company: 'Arena Cheats',
        position: 'Cheat Developer',
        duration: '2025-present',
        description: 'Created Perm Spoofer & Cheat.'
    }
];

// Social media links
const socialLinks = [
    
    {
        name: 'Discord',
        icon: 'fab fa-discord',
        url: 'discord.gg/vantixud'
    },
    {
        name: 'Youtube',
        icon: 'fab fa-youtube',
        url: 'https://youtube.com/@sosa-x2k'
    },
    {
        name: 'Telegram',
        icon: 'fas fa-telegram',
        url: 'https://t.me/sosa450'
    }
];

// Render experience cards
function renderExperienceCards() {
    const container = document.getElementById('experience-container');
    
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.innerHTML = `
            <h3>${exp.company}</h3>
            <p class="position">${exp.position}</p>
            <p class="duration">${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        container.appendChild(card);
    });
}

// Render social links
function renderSocialLinks() {
    const container = document.getElementById('social-links');
    
    socialLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'social-link';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            <span>${link.name}</span>
        `;
        container.appendChild(linkElement);
    });
}

// Show home section by default
window.addEventListener('load', () => {
    document.getElementById('home').classList.add('active');
    renderExperienceCards();
    renderSocialLinks();
});

// Update active section on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});
