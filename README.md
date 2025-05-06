# Modern Blog Platform

![Blog Homepage](https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

A beautifully designed, feature-rich blog platform built with React and TypeScript. This modern web application provides an exceptional reading experience with thoughtful design touches and performance optimizations.

## ✨ Features

### Elegant Reading Experience
![Reading Experience](https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

- Distraction-free reading mode
- Customizable font sizes and reading preferences
- Estimated reading time for articles
- Progress indicator while reading

### Content Organization
![Categories](https://images.pexels.com/photos/6177697/pexels-photo-6177697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

- Intuitive category browsing
- Tag-based filtering system
- Smart search functionality with instant results
- Related posts recommendations

### Engagement Tools
![Comments](https://images.pexels.com/photos/6177560/pexels-photo-6177560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

- Threaded commenting system
- Social sharing capabilities
- Newsletter subscription with custom delivery preferences
- Bookmark functionality for registered users

### Responsive Design
![Mobile View](https://images.pexels.com/photos/6177610/pexels-photo-6177610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

- Perfect viewing experience across all devices
- Mobile-optimized reading experience
- Adaptive layouts for different screen sizes
- Touch-friendly navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-blog.git
   cd modern-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally preview production build
- `npm run lint` - Runs the linter to check for code issues

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify/Vercel

## 📱 Mobile App View

Our blog is fully responsive and provides an exceptional mobile experience:

![Mobile Experience](https://images.pexels.com/photos/6177654/pexels-photo-6177654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## 🎨 Customization

The blog theme can be customized by modifying the `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ...other shades
          900: '#1e3a8a',
        },
        // Add your custom colors here
      },
      typography: {
        // Custom typography configuration
      }
    }
  }
}
```

## 📝 Content Management

Content is managed through a simple folder structure in the `/content` directory:

```
/content
  /posts
    post-1.md
    post-2.md
  /authors
    author-1.json
  /categories
    category-1.json
```

Each post is written in Markdown with frontmatter for metadata:

```markdown
---
title: "Getting Started with React"
date: "2023-04-15"
author: "jane-doe"
categories: ["react", "javascript"]
featured: true
coverImage: "/images/covers/react-cover.jpg"
---

Your article content goes here...
```

## 🔒 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

For any questions or suggestions, please reach out to us at .

---

Made with ❤️ by Yageswary Yadav