// Notion-style Blog JavaScript

// Theme management
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// State
let currentFilter = 'all';
let displayedArticles = 9;

// Load articles in Notion style
function loadArticles(filter = 'all') {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;

    let articles = filter === 'all' ? getAllArticles() : getArticlesByCategory(filter);
    const articlesToShow = articles.slice(0, displayedArticles);
    
    articlesGrid.innerHTML = '';
    
    articlesToShow.forEach(article => {
        const articleCard = createNotionStyleCard(article);
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (articles.length <= displayedArticles) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Create Notion-style article card
function createNotionStyleCard(article) {
    const card = document.createElement('a');
    card.href = `article.html?id=${article.id}`;
    card.className = 'notion-card block group cursor-pointer';
    card.setAttribute('data-category', article.category);
    
    card.innerHTML = `
        <div class="mb-4 overflow-hidden rounded-lg">
            <img 
                src="${article.image}" 
                alt="${article.title}" 
                class="notion-card-image w-full h-64 object-cover"
            />
        </div>
        <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm">
                <span class="font-medium text-base-content/60">${article.category}</span>
            </div>
            <h3 class="text-2xl font-bold text-base-content group-hover:text-primary transition-colors leading-tight">
                ${article.title}
            </h3>
            <div class="flex items-center gap-3 text-sm text-base-content/60">
                <div class="flex items-center gap-2">
                    <div class="avatar placeholder">
                        <div class="bg-neutral text-neutral-content rounded-full w-6 h-6 text-xs">
                            <span>${article.authorInitials}</span>
                        </div>
                    </div>
                    <span>${article.author}</span>
                </div>
                <span>•</span>
                <span>${article.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    loadArticles('all');
    
    // Tab filtering with Notion-style active state
    const filterTabs = document.querySelectorAll('.tab-filter');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab styling
            filterTabs.forEach(t => {
                t.classList.remove('border-base-content');
                t.classList.add('border-transparent', 'text-base-content/50');
            });
            this.classList.remove('border-transparent', 'text-base-content/50');
            this.classList.add('border-base-content', 'text-base-content');
            
            // Get filter value and load articles
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            displayedArticles = 9;
            loadArticles(filter);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            displayedArticles += 9;
            loadArticles(currentFilter);
        });
    }
});

// Search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            searchResults.innerHTML = '<p class="text-sm text-base-content/60 p-4">Start typing to search...</p>';
            return;
        }
        
        const results = searchArticles(query);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-sm text-base-content/60 p-4">No articles found.</p>';
            return;
        }
        
        searchResults.innerHTML = results.map(article => `
            <a href="article.html?id=${article.id}" class="block p-4 hover:bg-base-200 rounded-lg transition-colors">
                <div class="flex items-start gap-4">
                    <img src="${article.image}" alt="${article.title}" class="w-20 h-20 object-cover rounded" />
                    <div class="flex-1">
                        <div class="text-xs text-base-content/60 mb-1">${article.category}</div>
                        <h4 class="font-semibold text-base line-clamp-2 mb-1">${article.title}</h4>
                        <div class="text-xs text-base-content/60">${article.author} • ${article.readTime}</div>
                    </div>
                </div>
            </a>
        `).join('');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

window.addEventListener('load', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.notion-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            observer.observe(card);
        });
    }, 100);
});

