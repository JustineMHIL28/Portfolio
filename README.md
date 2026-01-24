# 🚀 Justine M. Hilario - Portfolio (Create React App)

Modern, responsive portfolio built with **Create React App**, TypeScript, and shadcn/ui.

## ✨ New Features Added!

- 🌓 **Dark/Light Mode Toggle** - Switch themes
- 💬 **Chatbot Widget** - Interactive chat interface
- 📄 **Resume Download Button** - One-click download
- 📏 **Better Spacing** - Improved readability
- 🎨 **Rounded Corners** - More modern look

## 🎯 This Version Uses:

- ✅ **Create React App** (NOT Vite)
- ✅ **TypeScript**
- ✅ **Tailwind CSS**
- ✅ **shadcn/ui**
- ✅ **Framer Motion**
- ✅ **Lucide React**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open http://localhost:3000

## 📦 Setup Resume Download

1. Add your resume PDF to `public/` folder
2. Name it `resume.pdf`
3. The download button will work automatically!

## 💬 Setup Real-Time Chat (Tawk.to)

**FREE live chat widget!** Read `TAWK-SETUP.md` for complete guide.

Quick Setup:
1. Create account at https://www.tawk.to/
2. Add your property
3. Get Property ID & Widget ID
4. Update `src/components/Navbar.tsx` line 35 with your IDs
5. Done! Real-time chat ready!

See `TAWK-SETUP.md` for detailed instructions.

## 🎨 Features

### 1. Navbar
- Logo on left
- Dark mode toggle
- Resume download button
- Chatbot trigger button
- Sticky on scroll with blur effect

### 2. Dark/Light Mode
- Smooth transition
- Remembers preference
- Toggle from navbar

### 3. Chatbot Widget
- **Tawk.to** integration (FREE!)
- Real-time messaging
- Mobile app support
- Email notifications
- Setup guide included

See `TAWK-SETUP.md` for setup!

### 4. Better Design
- Larger spacing (8 gap instead of 6)
- More rounded corners (rounded-2xl)
- Bigger text in cards
- Better line height
- More padding

## 📁 Project Structure

```
portfolio-cra/
├── public/
│   ├── index.html
│   ├── resume.pdf
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ui/
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── Technologies.tsx
│   │   ├── Projects.tsx
│   │   ├── Career.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio-data.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 🎨 Customization

### Update Content
Edit `src/data/portfolio-data.ts`

### Change Colors
Edit `src/index.css` → `:root` variables

### Add Images
Place images in `public/assets/` folders

### Customize Chatbot
Edit `src/components/Navbar.tsx` → Chatbot section

### Change Email
Edit `src/components/Navbar.tsx` → Line with `mailto:`

## 🌐 Deploy

### Vercel
```bash
# Push to GitHub then connect to Vercel
```

### Netlify
```bash
npm run build
# Drag `build` folder to Netlify
```

## 📝 Available Scripts

- `npm start` - Development server (port 3000)
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from CRA (one-way operation)

## 🎯 Key Improvements

| Before | After |
|--------|-------|
| No theme toggle | Dark/Light mode |
| No chatbot | Interactive chat widget |
| No resume button | One-click download |
| Small spacing | Better spacing (gap-8) |
| rounded-lg | rounded-2xl |
| Tight text | Better readability |

## 👨‍💻 Author

**Justine M. Hilario**
- GitHub: [@JustineMHIL28](https://github.com/JustineMHIL28)
- LinkedIn: [Justine Hilario](https://www.linkedin.com/in/justine-hilario)

---

Built with ❤️ using Create React App, TypeScript, and shadcn/ui
