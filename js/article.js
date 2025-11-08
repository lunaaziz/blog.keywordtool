// Article Page JavaScript

// Theme Toggle (if it exists)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

if (themeToggle) {
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
}

// Get article ID from URL
function getArticleIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load article content
function loadArticle() {
    const articleId = getArticleIdFromURL();
    const article = getArticleById(parseInt(articleId));
    
    if (!article) {
        // Redirect to homepage if article not found
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.getElementById('page-title').textContent = article.title + ' - Keyword Tool Blog';
    
    // Update breadcrumbs (if they exist)
    const breadcrumbCategory = document.getElementById('breadcrumb-category');
    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbCategory) breadcrumbCategory.textContent = article.category;
    if (breadcrumbTitle) breadcrumbTitle.textContent = article.title.substring(0, 30) + '...';
    
    // Update article meta
    document.getElementById('article-category').textContent = article.category;
    
    const readTime1 = document.getElementById('article-read-time');
    const readTime2 = document.getElementById('article-read-time-2');
    if (readTime1) readTime1.textContent = article.readTime;
    if (readTime2) readTime2.textContent = article.readTime;
    
    // Update article header
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-subtitle').textContent = article.subtitle;
    
    // Update author info
    document.getElementById('author-initials').textContent = article.authorInitials;
    document.getElementById('article-author').textContent = article.author;
    document.getElementById('article-date').textContent = article.date;
    
    // Update bottom author info
    document.getElementById('author-initials-bottom').textContent = article.authorInitials;
    document.getElementById('article-author-bottom').textContent = article.author;
    
    // Update featured image
    const featuredImage = document.getElementById('article-image');
    featuredImage.src = article.image;
    featuredImage.alt = article.title;
    
    // Update article content
    document.getElementById('article-content').innerHTML = article.content;
    
    // Update tags
    const tagsContainer = document.getElementById('article-tags');
    tagsContainer.innerHTML = article.tags.map(tag => 
        `<span class="inline-block px-3 py-1 text-xs font-medium text-base-content/60 bg-base-200 rounded-full">${tag}</span>`
    ).join('');
    
    // Load related articles
    loadRelatedArticles(article.id);
    
    // Setup share buttons
    setupShareButtons(article);
}

// Load related articles
function loadRelatedArticles(articleId) {
    const relatedArticles = getRelatedArticles(articleId, 3);
    const relatedContainer = document.getElementById('related-articles');
    
    if (relatedArticles.length === 0) {
        relatedContainer.innerHTML = '<p class="col-span-3 text-center opacity-60">No related articles found.</p>';
        return;
    }
    
    relatedContainer.innerHTML = relatedArticles.map(article => `
        <a href="article.html?id=${article.id}" class="block group">
            <div class="mb-4 overflow-hidden rounded-lg">
                <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="space-y-2">
                <div class="text-sm font-medium text-base-content/60">${article.category}</div>
                <h3 class="text-xl font-bold group-hover:text-primary transition-colors">
                    ${article.title}
                </h3>
                <div class="flex items-center gap-2 text-sm text-base-content/60">
                    <span>${article.author}</span>
                    <span>·</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Setup share buttons
function setupShareButtons(article) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);
    
    // You can add actual share functionality here
    const shareButtons = document.querySelectorAll('.btn-circle');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-twitter')) {
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
            } else if (icon.classList.contains('fa-facebook')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            } else if (icon.classList.contains('fa-linkedin')) {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
            } else if (icon.classList.contains('fa-link')) {
                // Copy link to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Link copied to clipboard!');
                });
            }
        });
    });
}

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
document.addEventListener('DOMContentLoaded', loadArticle);

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

// Reading progress bar (optional enhancement)
window.addEventListener('scroll', function() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;
    
    const progress = ((scrolled - articleTop + windowHeight) / articleHeight) * 100;
    
    // You can add a progress bar element if desired
    // progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
});

