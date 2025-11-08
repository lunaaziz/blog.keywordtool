# Keyword Tool Blog

A modern, responsive blog website built with **DaisyUI** and **Tailwind CSS**. This blog template is designed to be easy to customize and manage, with a clean separation between content (data) and presentation (HTML/CSS).

## 🚀 Features

- ✅ **Modern Design** - Clean, professional design inspired by Medium.com
- ✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **DaisyUI Components** - Built entirely with DaisyUI UI components
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Easy Content Management** - Add/edit articles in a single JavaScript file
- ✅ **Search Functionality** - Search articles by title, content, or category
- ✅ **Category Filtering** - Browse articles by topic
- ✅ **SEO Friendly** - Semantic HTML and meta tags
- ✅ **No Build Process** - Works directly in the browser, no compilation needed

## 📁 Project Structure

```
keywordtool_blog/
├── index.html              # Homepage with featured and latest articles
├── article.html            # Article detail page template
├── categories.html         # Categories/topics page
├── about.html             # About page
├── contact.html           # Contact page with form
├── data/
│   └── articles.js        # All article content (easy to edit!)
├── js/
│   ├── main.js           # Homepage JavaScript
│   ├── article.js        # Article page JavaScript
│   ├── categories.js     # Categories page JavaScript
│   └── theme.js          # Theme toggle functionality
└── README.md             # This file
```

## 🎨 Pages Included

1. **Homepage** (`index.html`)
   - Hero section with gradient background
   - Featured article showcase
   - Latest articles grid with filtering
   - Category cards
   - Newsletter signup
   - Fully responsive navigation and footer

2. **Article Page** (`article.html`)
   - Full article content display
   - Author information
   - Social sharing buttons
   - Related articles
   - Tags
   - Newsletter CTA

3. **Categories Page** (`categories.html`)
   - All topic categories with descriptions
   - Filter articles by category
   - Responsive grid layout

4. **About Page** (`about.html`)
   - Company mission and values
   - Stats section with DaisyUI stats component
   - Team member cards
   - Call-to-action section

5. **Contact Page** (`contact.html`)
   - Contact form with validation
   - Contact information cards
   - Social media links
   - Success notification

## 📝 How to Add/Edit Articles

All articles are stored in `data/articles.js`. To add a new article:

1. Open `data/articles.js`
2. Add a new article object to the `articlesDatabase` array:

```javascript
{
    id: 6, // Unique ID
    title: "Your Article Title",
    subtitle: "Article subtitle or description",
    excerpt: "Brief excerpt for cards",
    category: "SEO", // or "Content Marketing", "Social Media", etc.
    tags: ["Tag1", "Tag2", "Tag3"],
    author: "Your Name",
    authorInitials: "YN",
    date: "Nov 8, 2025",
    readTime: "5 min read",
    image: "https://example.com/image.jpg",
    featured: false, // Set to true for featured articles
    content: `
        <p>Your article content in HTML format...</p>
        <h2>Section Title</h2>
        <p>More content...</p>
    `
}
```

That's it! The article will automatically appear on the homepage, in search results, and in its category.

## 🎨 Customization

### Change Colors/Theme

The website uses DaisyUI themes. To customize:

1. Open any HTML file
2. Modify the `data-theme` attribute in the `<html>` tag
3. Available themes: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter

Example:
```html
<html lang="en" data-theme="dark">
```

### Customize Brand Name

Replace "Keyword Tool Blog" with your brand name in:
- Navigation (`<a href="index.html" class="btn btn-ghost text-xl font-bold">`)
- Footer
- Page titles

### Add More Categories

To add new categories:

1. Add category cards in `index.html` and `categories.html`
2. Use DaisyUI color variants: `bg-primary`, `bg-secondary`, `bg-accent`, `bg-info`, `bg-success`, `bg-warning`, `bg-error`

## 🌐 Deployment

Since this is a static website with no build process, you can deploy it to:

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Drag and drop deployment
- **Vercel** - Instant deployment
- **Any web host** - Upload files via FTP

Simply upload all files to your hosting provider, and the site will work immediately!

## 🔧 Technical Details

- **Framework**: None (vanilla JavaScript)
- **CSS Framework**: Tailwind CSS + DaisyUI
- **Icons**: Font Awesome 6
- **Fonts**: Inter (body), Merriweather (article content)
- **Images**: Unsplash (placeholder images - replace with your own)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive and tested across devices.

## 🎯 DaisyUI Components Used

- Navbar
- Hero
- Card
- Badge
- Button
- Input
- Textarea
- Select
- Checkbox
- Modal
- Alert
- Stats
- Footer
- Breadcrumbs
- Tabs
- Collapse
- Avatar
- Join
- Toast
- And more!

## 💡 Tips for Content Creation

1. **Images**: Use high-quality images (1200x600px recommended)
2. **Headlines**: Keep titles under 60 characters for better display
3. **Excerpts**: Write compelling 150-200 character excerpts
4. **Content**: Use HTML formatting (h2, h3, p, ul, ol) in article content
5. **Categories**: Be consistent with category names
6. **Tags**: Use 3-5 relevant tags per article
7. **Read Time**: Estimate 200 words per minute

## 🤝 Contributing

This is a template for your blog. Feel free to:
- Customize the design
- Add new features
- Modify components
- Extend functionality

## 📄 License

Free to use for personal and commercial projects.

## 🆘 Need Help?

Check out the documentation:
- [DaisyUI Docs](https://daisyui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

**Built with ❤️ using DaisyUI and Tailwind CSS**

Happy blogging! 🚀

