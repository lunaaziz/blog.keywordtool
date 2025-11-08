# 🚀 Quick Start Guide

Get your blog up and running in 5 minutes!

## Step 1: Open the Website

Simply open `index.html` in your web browser. That's it! No installation or build process required.

**Ways to open:**
- Double-click `index.html`
- Right-click → Open With → Your Browser
- Drag and drop `index.html` into browser window

## Step 2: Add Your Content

### Adding a New Article

1. Open `data/articles.js` in any text editor
2. Copy an existing article object
3. Modify the values:

```javascript
{
    id: 6, // Next available ID number
    title: "Your Amazing Article Title",
    subtitle: "A compelling subtitle that describes your article",
    excerpt: "A brief 2-3 sentence summary for article cards",
    category: "SEO", // Pick: SEO, Content Marketing, Social Media, etc.
    tags: ["SEO", "Marketing", "Tips"], // 3-5 relevant tags
    author: "Your Name",
    authorInitials: "YN", // Your initials
    date: "Nov 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-xxx", // Replace with your image
    featured: false, // true to show in featured section
    content: `
        <p class="text-xl mb-6 text-base-content/80">Your opening paragraph...</p>
        
        <h2 class="text-3xl font-bold mt-8 mb-4">First Section</h2>
        <p class="mb-4">Section content...</p>
        
        <h2 class="text-3xl font-bold mt-8 mb-4">Second Section</h2>
        <p class="mb-4">More content...</p>
    `
}
```

4. Save the file
5. Refresh your browser - the article appears automatically!

### Finding Free Images

Use these sites for high-quality, free images:
- [Unsplash](https://unsplash.com/) - Free, high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

**Image Tips:**
- Recommended size: 1200x600 pixels
- Use landscape orientation
- Choose clear, relevant images
- Get image URL: Right-click image → Copy Image Address

## Step 3: Customize Your Brand

### Change Blog Name

Find and replace "Keyword Tool Blog" with your blog name in:
- `index.html` (line ~35)
- `article.html` (line ~35)
- `categories.html` (line ~35)
- `about.html` (line ~35)
- `contact.html` (line ~35)

### Change Colors

Open any `.html` file and change `data-theme` in the `<html>` tag:

```html
<!-- Current -->
<html lang="en" data-theme="light">

<!-- Options -->
<html lang="en" data-theme="dark">
<html lang="en" data-theme="cupcake">
<html lang="en" data-theme="corporate">
<html lang="en" data-theme="business">
```

**Available themes:**
- `light` - Clean light theme (default)
- `dark` - Dark mode
- `corporate` - Professional blue
- `business` - Dark professional
- `cupcake` - Soft pastel
- `bumblebee` - Yellow and black
- `emerald` - Green theme
- `retro` - Vintage style
- `cyberpunk` - Neon colors
- And 20+ more!

[See all themes →](https://daisyui.com/docs/themes/)

### Update About Page

Edit `about.html`:
- Update mission statement (line ~50)
- Change stats numbers (line ~65)
- Update team members (line ~140)
- Modify company values (line ~110)

### Update Contact Info

Edit `contact.html`:
- Change email addresses (line ~130)
- Update social media links (line ~190)
- Modify contact form fields (line ~80)

## Step 4: Test Everything

✅ **Homepage** - Check featured article and article grid  
✅ **Articles** - Click articles to view detail pages  
✅ **Categories** - Test category filtering  
✅ **Search** - Try the search functionality  
✅ **Dark Mode** - Toggle theme switcher  
✅ **Mobile** - Open on phone/tablet (or resize browser)  
✅ **Contact Form** - Test form submission  

## Step 5: Publish Online

### Option 1: GitHub Pages (Free!)

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `your-blog`
3. Upload all files
4. Go to Settings → Pages
5. Select main branch → Save
6. Your site is live at `https://yourusername.github.io/your-blog`

### Option 2: Netlify (Free!)

1. Go to [Netlify](https://netlify.com)
2. Sign up for free
3. Drag and drop your folder
4. Your site is live in seconds!
5. Get a custom domain (optional)

### Option 3: Vercel (Free!)

1. Go to [Vercel](https://vercel.com)
2. Sign up for free
3. Import your project
4. Deploy instantly!

### Option 4: Traditional Web Hosting

Upload via FTP to any web host:
- Upload all files to `public_html` or `www` folder
- Access via your domain name

## 📝 Content Writing Tips

### Article Structure Template

```html
content: `
    <!-- Opening paragraph (150-200 words) -->
    <p class="text-xl mb-6 text-base-content/80">
        Hook your readers with an engaging opening that 
        explains what they'll learn...
    </p>

    <!-- Main sections -->
    <h2 class="text-3xl font-bold mt-8 mb-4">Section Title</h2>
    <p class="mb-4">Explanation paragraph...</p>
    
    <!-- Use lists for clarity -->
    <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Point one</li>
        <li>Point two</li>
        <li>Point three</li>
    </ul>

    <!-- Add callouts for important info -->
    <div class="alert alert-info mb-6">
        <i class="fas fa-lightbulb"></i>
        <div>
            <h3 class="font-bold">Pro Tip</h3>
            <p class="text-sm">Important tip or note...</p>
        </div>
    </div>

    <!-- Conclusion -->
    <h2 class="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
    <p class="mb-4">Wrap up with key takeaways...</p>
`
```

### SEO Tips

- **Title**: 50-60 characters, include main keyword
- **Excerpt**: 150-160 characters, compelling summary
- **Headings**: Use H2 for main sections, H3 for subsections
- **Images**: Use descriptive alt text
- **Links**: Link to related articles
- **Length**: Aim for 1000+ words for SEO

### Readability Tips

- Short paragraphs (3-4 sentences max)
- Use bullet points and numbered lists
- Include images and visual breaks
- Write conversationally
- Use subheadings every 300-400 words

## 🎨 Advanced Customization

### Add Custom CSS

Add a `<style>` tag in any HTML file:

```html
<style>
    /* Your custom styles */
    .my-custom-class {
        color: #FF6B6B;
    }
</style>
```

### Add Analytics

Add Google Analytics before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add More Pages

1. Copy an existing HTML file
2. Modify content
3. Add link to navigation menu
4. That's it!

## 🆘 Troubleshooting

**Articles not showing?**
- Check `data/articles.js` for syntax errors
- Make sure IDs are unique
- Verify the file is saved

**Theme toggle not working?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

**Images not loading?**
- Verify image URLs are correct
- Check image URLs are HTTPS
- Try different image source

**Search not working?**
- Open browser console (F12)
- Check for JavaScript errors
- Verify `articles.js` is loaded

## 📚 Learn More

- **DaisyUI Components**: https://daisyui.com/components/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Markdown Guide**: https://markdownguide.org/

## 💬 Need Help?

Common questions:

**Q: Can I use this commercially?**  
A: Yes! It's free to use for any project.

**Q: Do I need to know coding?**  
A: Basic HTML knowledge helps, but not required for adding content.

**Q: Can I change the design?**  
A: Absolutely! Customize everything.

**Q: Will it work on mobile?**  
A: Yes, it's fully responsive.

**Q: Can I add more features?**  
A: Yes, it's built with standard HTML/CSS/JS.

---

**You're all set! 🎉**

Start writing amazing content and grow your blog! Remember to:
- Post consistently
- Share on social media
- Engage with your readers
- Update older articles

Happy blogging! 🚀

