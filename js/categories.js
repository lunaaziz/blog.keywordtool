// Categories Page JavaScript

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

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

// Get category from URL
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

// Load filtered articles
function loadFilteredArticles(category) {
    const filteredSection = document.getElementById('filtered-section');
    const categoryTitle = document.getElementById('category-title');
    const filteredArticles = document.getElementById('filtered-articles');
    
    if (!category) {
        filteredSection.style.display = 'none';
        return;
    }
    
    const articles = getArticlesByCategory(category);
    
    if (articles.length === 0) {
        filteredArticles.innerHTML = '<p class="col-span-3 text-center opacity-60">No articles found in this category.</p>';
        return;
    }
    
    filteredSection.style.display = 'block';
    categoryTitle.textContent = category + ' Articles';
    
    filteredArticles.innerHTML = articles.map(article => `
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
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
        </div>
    `).join('');
    
    // Scroll to filtered section
    filteredSection.scrollIntoView({ behavior: 'smooth' });
}

// Clear filter function
window.clearFilter = function() {
    window.location.href = 'categories.html';
};

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const category = getCategoryFromURL();
    if (category) {
        loadFilteredArticles(category);
    }
});

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

