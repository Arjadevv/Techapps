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

    // --- Accordion Logic (Dynamic via Event Delegation) ---
    document.addEventListener('click', function(e) {
        const accHeader = e.target.closest('.accordion-header');
        if (!accHeader) return;

        accHeader.classList.toggle('active');
        accHeader.classList.toggle('text-industrial');
        
        const panel = accHeader.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
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

// --- Dynamic Guides Fetching ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof guidesData !== 'undefined') {
        const tabs = ['techkit', 'techform', 'techcam'];
        
        tabs.forEach(tab => {
            const container = document.getElementById(`tab-${tab}`);
            if (container && guidesData[tab]) {
                const data = guidesData[tab];
                let faqsHTML = '';
                
                if (data.faqs && data.faqs.length > 0) {
                    data.faqs.forEach(faq => {
                        faqsHTML += `
                            <div class="border border-steelLight rounded-md overflow-hidden bg-steel">
                                <button class="accordion-header w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-steelLight transition-colors">
                                    <span class="font-bold text-lg">${faq.q}</span>
                                    <svg class="w-5 h-5 text-industrial transition-transform duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                    <div class="p-5 border-t border-steelLight text-gray-400 text-sm leading-relaxed">
                                        ${faq.a}
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
                
                const tabHTML = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div class="space-y-4">
                            ${faqsHTML}
                        </div>
                        <div class="bg-steel border border-steelLight rounded-lg aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden group">
                            <img src="${data.image}" alt="${data.alt}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" onerror="this.onerror=null; this.parentNode.innerHTML=\`<svg class='w-12 h-12 text-industrial mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg><span class='text-gray-400 text-sm'>[Tempat Gambar ${data.alt}]</span>\`">
                        </div>
                    </div>
                `;
                
                container.innerHTML = tabHTML;
            }
        });
    }
});

// --- Dynamic News Fetching ---
document.addEventListener('DOMContentLoaded', () => {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    if (typeof newsData !== 'undefined') {
        newsGrid.innerHTML = ''; // Hapus teks loading
        newsData.forEach((item, index) => {
            let badgeClass = "bg-industrial/20 text-industrial";
            if (item.type.toLowerCase() === 'roadmap') {
                badgeClass = "bg-blue-500/20 text-blue-400";
            }

            const cardHTML = `
                <div class="bg-dark border border-steelLight rounded-lg p-6 hover:border-gray-500 transition-colors group cursor-pointer flex flex-col justify-between h-full" onclick="openNewsModal(${index})">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="${badgeClass} text-xs font-bold px-2 py-1 rounded">${item.type}</span>
                            <span class="text-xs text-gray-500">${item.date}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3 group-hover:text-industrial transition-colors">${item.title}</h3>
                        <p class="text-gray-400 text-sm mb-6">${item.description}</p>
                    </div>
                    <div class="mt-auto">
                        <button class="text-sm font-medium text-industrial group-hover:underline focus:outline-none">Baca selengkapnya</button>
                    </div>
                </div>
            `;
            newsGrid.innerHTML += cardHTML;
        });
    } else {
        newsGrid.innerHTML = '<p class="text-gray-500">Gagal memuat berita terbaru.</p>';
    }
});

// --- News Modal Logic ---
window.openNewsModal = function(index) {
    if (typeof newsData === 'undefined' || !newsData[index]) return;
    
    const item = newsData[index];
    
    // Set Badge and Date
    let badgeClass = "bg-industrial/20 text-industrial";
    if (item.type.toLowerCase() === 'roadmap') {
        badgeClass = "bg-blue-500/20 text-blue-400";
    }
    document.getElementById('modal-news-meta').innerHTML = `
        <span class="${badgeClass} text-xs font-bold px-2 py-1 rounded">${item.type}</span>
        <span class="text-xs text-gray-400">${item.date}</span>
    `;
    
    // Set Title
    document.getElementById('modal-news-title').textContent = item.title;
    
    // Set Full Content (fallback to description if not available)
    document.getElementById('modal-news-content').innerHTML = item.fullContent || item.description;
    
    // Open Modal
    window.openModal('modal-news');
}

// --- Hero Slider Logic ---
let currentSlide = 0;
const totalSlides = 3;
let slideInterval;

window.moveSlider = function(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    updateSlider();
    resetSlideInterval();
}

function updateSlider() {
    const slider = document.getElementById('hero-slider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-white/50', 'w-2');
                dot.classList.add('bg-industrial', 'w-4');
            } else {
                dot.classList.add('bg-white/50', 'w-2');
                dot.classList.remove('bg-industrial', 'w-4');
            }
        });
    }
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        moveSlider(1);
    }, 4000);
}

// Initialize auto slide
document.addEventListener('DOMContentLoaded', () => {
    resetSlideInterval();
});
