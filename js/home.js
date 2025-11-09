// Blog Homepage JavaScript

// Theme management
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// State
let currentFilter = 'all';
let displayedArticles = 9;

// Load articles
function loadArticles(filter = 'all') {
    const featuredContainer = document.getElementById('featured-article');
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid || !featuredContainer) return;

    // Always show the first article as featured (unfiltered)
    const allArticles = getAllArticles();
    
    // Load featured article (always the first one, unfiltered)
    featuredContainer.innerHTML = '';
    if (allArticles.length > 0) {
        const featuredCard = createFeaturedArticleCard(allArticles[0]);
        featuredContainer.appendChild(featuredCard);
    }
    
    // Filter articles for grid (excluding the first one)
    let gridArticles = filter === 'all' ? allArticles.slice(1) : getArticlesByCategory(filter).filter(article => article.id !== allArticles[0].id);
    const articlesToShow = gridArticles.slice(0, displayedArticles - 1);
    
    // Clear and populate grid
    articlesGrid.innerHTML = '';
    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (gridArticles.length <= displayedArticles - 1) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Create featured article card (full width)
function createFeaturedArticleCard(article) {
    const card = document.createElement('a');
    card.href = `article.html?id=${article.id}`;
    card.className = 'article-card block group cursor-pointer';
    card.setAttribute('data-category', article.category);
    
    card.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div class="overflow-hidden rounded-2xl order-2 lg:order-1">
                <img 
                    src="${article.image}" 
                    alt="${article.title}" 
                    class="article-card-image w-full h-96 lg:h-[500px] object-cover"
                />
            </div>
            <div class="space-y-4 order-1 lg:order-2">
                <div class="text-sm text-base-content/60">
                    <span>${article.category}</span>
                    <span class="mx-2">•</span>
                    <span>${article.readTime}</span>
                </div>
                <h2 class="text-4xl lg:text-5xl font-bold text-base-content group-hover:text-primary transition-colors leading-tight">
                    ${article.title}
                </h2>
                <p class="text-lg text-base-content/70 leading-relaxed">
                    ${article.subtitle || article.excerpt}
                </p>
                <button class="btn btn-outline btn-primary">Read full article</button>
            </div>
        </div>
    `;
    
    return card;
}

// Create article card (grid item)
function createArticleCard(article) {
    const card = document.createElement('a');
    card.href = `article.html?id=${article.id}`;
    card.className = 'article-card block group cursor-pointer';
    card.setAttribute('data-category', article.category);
    
    card.innerHTML = `
        <div class="mb-4 overflow-hidden rounded-xl">
            <img 
                src="${article.image}" 
                alt="${article.title}" 
                class="article-card-image w-full h-64 object-cover"
            />
        </div>
        <div class="space-y-3">
            <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors leading-tight line-clamp-2">
                ${article.title}
            </h3>
            <p class="text-sm text-base-content/60 line-clamp-3 mb-3">
                ${article.subtitle || article.excerpt}
            </p>
            <div class="text-xs text-base-content/60">
                <span>${article.date}</span>
                <span class="mx-1">•</span>
                <span>${article.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    loadArticles('all');
    
    // Tab filtering with active state
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
        const cards = document.querySelectorAll('.article-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            observer.observe(card);
        });
    }, 100);
});

