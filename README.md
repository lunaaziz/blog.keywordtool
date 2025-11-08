# Keyword Tool Blog

A modern, clean blog built with **Tailwind CSS** and **DaisyUI** components.

## 🌐 Live Demo

**Live Site:** [https://lunaaziz.github.io/blog.keywordtool/](https://lunaaziz.github.io/blog.keywordtool/)

## ✨ Features

- ✅ **Modern Design** - Clean, minimal, magazine-style layout
- ✅ **100% DaisyUI Components** - All UI built with DaisyUI
- ✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✅ **Dark/Light Theme** - Toggle with localStorage persistence
- ✅ **Search Functionality** - Real-time article search
- ✅ **Category Filtering** - Browse by topic
- ✅ **No Build Process** - Pure HTML/CSS/JS, works instantly
- ✅ **Easy Content Management** - Edit one file to add articles
- ✅ **SEO Optimized** - Semantic HTML and meta tags

## 📦 Tech Stack

- **Framework:** None (Vanilla JavaScript)
- **CSS:** Tailwind CSS + DaisyUI
- **Icons:** Font Awesome 6
- **Fonts:** Inter (Google Fonts)
- **Hosting:** GitHub Pages

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/lunaaziz/blog.keywordtool.git
cd blog.keywordtool
```

2. **Start a local server:**
```bash
python3 -m http.server 3000
```

3. **Open in browser:**
```
http://localhost:3000
```

### Add Your Content

All articles are in one file: `data/articles.js`

```javascript
{
    id: 6,
    title: "Your Article Title",
    subtitle: "Your subtitle",
    excerpt: "Brief summary...",
    category: "SEO",
    tags: ["SEO", "Marketing"],
    author: "Your Name",
    authorInitials: "YN",
    date: "Nov 9, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-...",
    featured: false,
    content: `<p>Your HTML content...</p>`
}
```

## 📁 Project Structure

```
blog.keywordtool/
├── index.html              # Homepage
├── article.html            # Article detail page
├── categories.html         # Categories page
├── about.html             # About page
├── contact.html           # Contact page
├── data/
│   └── articles.js        # ⭐ All article content
├── js/
│   ├── home.js            # Homepage logic
│   ├── article.js         # Article page logic
│   ├── categories.js      # Categories logic
│   └── theme.js           # Theme toggle
├── .github/
│   └── workflows/
│       └── pages.yml      # GitHub Pages deployment
└── Documentation files...
```

## 🎨 DaisyUI Components Used

- **Navigation:** navbar, dropdown, menu
- **Layout:** hero, footer, breadcrumbs
- **Content:** card, badge, avatar
- **Actions:** button (all variants)
- **Forms:** input, textarea, select, checkbox
- **Feedback:** alert, modal, toast
- **And more!**

## 📝 Documentation

- **QUICKSTART.md** - Get started in 5 minutes
- **HOW_TO_ADD_ARTICLES.md** - Step-by-step content guide
- **DAISYUI_COMPONENTS_USED.md** - Complete component list
- **PROJECT_SUMMARY.md** - Full project overview

## 🌐 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages on every push to `main` branch.

**Live URL:** https://lunaaziz.github.io/blog.keywordtool/

### Manual Deployment

Upload to any static hosting:
- Netlify (drag & drop)
- Vercel (import repository)
- Any web host (via FTP)

## 🎯 Customization

### Change Theme Colors

Edit the `data-theme` attribute in HTML files:

```html
<html lang="en" data-theme="light">
```

**Available themes:** light, dark, cupcake, corporate, business, cyberpunk, retro, and 20+ more!

### Change Blog Name

Find and replace "Keyword Tool" in HTML files with your brand name.

### Add New Pages

1. Copy an existing HTML file
2. Modify content
3. Add link to navigation

## 📊 Performance

- ⚡ Fast loading (no build process)
- 🎨 Minimal CSS (DaisyUI + Tailwind via CDN)
- 📦 Small JavaScript footprint
- 🖼️ Optimized images (via CDN)

## 🤝 Contributing

This is a personal blog project, but feel free to:
- Fork and customize for your own use
- Report issues
- Suggest improvements

## 📄 License

Free to use for personal and commercial projects.

## 🙏 Credits

- UI Components: [DaisyUI](https://daisyui.com/)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Images: [Unsplash](https://unsplash.com/)

## 📞 Contact

- **GitHub:** [@lunaaziz](https://github.com/lunaaziz)
- **Repository:** [blog.keywordtool](https://github.com/lunaaziz/blog.keywordtool)

---

**Built with ❤️ using DaisyUI and Tailwind CSS**

⭐ Star this repo if you find it helpful!
