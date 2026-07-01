document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const path = document.getElementById('menu-icon-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            // Hamburger icon
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            // Close (X) icon
            path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });

    // --- Sticky Navbar Styling on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'bg-dark/95');
            navbar.classList.remove('bg-dark/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-dark/95');
            navbar.classList.add('bg-dark/90');
        }
    });

    // --- Accordion Logic ---
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');
            this.classList.toggle('text-industrial');
            
            // Get the content panel
            const panel = this.nextElementSibling;
            
            // Toggle panel height
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

            // Optional: Close other accordions
            /*
            accordions.forEach(otherAcc => {
                if (otherAcc !== this) {
                    otherAcc.classList.remove('active', 'text-industrial');
                    otherAcc.nextElementSibling.style.maxHeight = null;
                }
            });
            */
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

// --- Modal Logic ---
window.openModal = function(modalId) {
    const container = document.getElementById('modal-container');
    const modal = document.getElementById(modalId);
    
    // Hide all modals first
    document.querySelectorAll('.modal-content').forEach(m => m.classList.add('hidden'));
    
    container.classList.remove('hidden');
    container.classList.add('flex');
    modal.classList.remove('hidden');
    
    // Trigger animation
    setTimeout(() => {
        container.classList.remove('opacity-0');
        modal.classList.remove('scale-95');
        modal.classList.add('scale-100');
    }, 10);
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

window.closeModal = function() {
    const container = document.getElementById('modal-container');
    const modals = document.querySelectorAll('.modal-content');
    
    container.classList.add('opacity-0');
    modals.forEach(modal => {
        modal.classList.remove('scale-100');
        modal.classList.add('scale-95');
    });
    
    setTimeout(() => {
        container.classList.add('hidden');
        container.classList.remove('flex');
        modals.forEach(modal => modal.classList.add('hidden'));
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                window.closeModal();
            }
        });
    }
});

// --- Tab Logic ---
window.switchTab = function(tabId) {
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-dark', 'text-industrial', 'shadow-sm');
        btn.classList.add('text-gray-400');
    });
    
    const activeBtn = document.querySelector(`.tab-btn[data-target="${tabId}"]`);
    if(activeBtn) {
        activeBtn.classList.remove('text-gray-400');
        activeBtn.classList.add('active', 'bg-dark', 'text-industrial', 'shadow-sm');
    }
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    const activeContent = document.getElementById(tabId);
    if(activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.classList.add('active');
    }
}

// --- Toast Download Simulation ---
let toastTimeout;
window.triggerDownload = function(appName) {
    const toast = document.getElementById('toast');
    const message = document.getElementById('toast-message');
    
    message.textContent = `Memulai unduhan: ${appName}...`;
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}
