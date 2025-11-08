// Main JavaScript for Homepage

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Load Articles on Homepage
let currentFilter = 'all';
let displayedArticles = 6;

function loadArticles(filter = 'all', limit = null) {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;

    let articles = filter === 'all' ? getAllArticles() : getArticlesByCategory(filter);
    
    // Limit the number of articles to display
    const articlesToShow = limit ? articles.slice(0, limit) : articles.slice(0, displayedArticles);
    
    articlesGrid.innerHTML = '';
    
    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (articles.length <= displayedArticles) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300';
    card.setAttribute('data-category', article.category);
    
    card.innerHTML = `
        <figure>
            <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover" />
        </figure>
        <div class="card-body">
            <div class="flex gap-2 flex-wrap mb-2">
                <div class="badge badge-primary">${article.category}</div>
                <div class="badge badge-outline">${article.readTime}</div>
            </div>
            <h3 class="card-title text-lg hover:text-primary transition-colors">
                <a href="article.html?id=${article.id}">${article.title}</a>
            </h3>
            <p class="text-sm opacity-80 line-clamp-2">${article.excerpt}</p>
            <div class="flex items-center gap-3 mt-4">
                <div class="avatar placeholder">
                    <div class="bg-primary text-primary-content rounded-full w-10">
                        <span class="text-xs">${article.authorInitials}</span>
                    </div>
                </div>
                <div>
                    <div class="font-semibold text-sm">${article.author}</div>
                    <div class="text-xs opacity-60">${article.date}</div>
                </div>
            </div>
            <div class="card-actions justify-end mt-4">
                <a href="article.html?id=${article.id}" class="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>
    `;
    
    return card;
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    loadArticles('all');
    
    // Tab filtering
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('tab-active'));
            this.classList.add('tab-active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            displayedArticles = 6;
            
            loadArticles(filter);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            displayedArticles += 6;
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
            searchResults.innerHTML = '<p class="text-sm opacity-60 p-4">Type at least 2 characters to search...</p>';
            return;
        }
        
        const results = searchArticles(query);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-sm opacity-60 p-4">No articles found matching your search.</p>';
            return;
        }
        
        searchResults.innerHTML = results.map(article => `
            <a href="article.html?id=${article.id}" class="block p-4 hover:bg-base-200 rounded-lg transition-colors">
                <div class="flex items-start gap-3">
                    <img src="${article.image}" alt="${article.title}" class="w-16 h-16 object-cover rounded" />
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm line-clamp-2">${article.title}</h4>
                        <div class="flex gap-2 mt-1">
                            <span class="badge badge-xs badge-primary">${article.category}</span>
                            <span class="text-xs opacity-60">${article.readTime}</span>
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    });
}

// Smooth scroll for anchor links
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

// Add animation on scroll
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

// Observe article cards when they're loaded
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

