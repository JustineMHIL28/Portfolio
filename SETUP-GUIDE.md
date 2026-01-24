# 🚀 PORTFOLIO SETUP - CREATE-REACT-APP + TYPESCRIPT + SHADCN/UI

## STEP 1: Create React App with TypeScript
```bash
# Navigate to your projects folder
cd Desktop

# Create new React app with TypeScript
npx create-react-app justine-portfolio --template typescript

# Navigate to project
cd justine-portfolio
```

## STEP 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## STEP 3: Install shadcn/ui Dependencies
```bash
npm install class-variance-authority clsx tailwind-merge
```

## STEP 4: Install Additional Libraries
```bash
# Icons and Animations
npm install lucide-react framer-motion

# Type definitions
npm install --save-dev @types/node
```

## STEP 5: Configure Tailwind
Edit `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

## STEP 6: Update tsconfig.json
Add this to `compilerOptions`:
```json
{
  "compilerOptions": {
    // ... existing config
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## STEP 7: Project Structure
```
justine-portfolio/
├── public/
│   └── assets/
│       ├── dev-icon/
│       ├── project-icon/
│       ├── company-icon/
│       └── social-icon/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
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
│   ├── App.css (delete this)
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## STEP 8: Run Development Server
```bash
npm start
```

Open browser: http://localhost:3000

## STEP 9: Build for Production
```bash
npm run build
```

Output: `build/` folder

---

## 🔥 DIFFERENCES FROM VITE:
- Port: 3000 (instead of 5173)
- Build folder: `build/` (instead of `dist/`)
- Config: Uses `tsconfig.json` paths
- Start command: `npm start` (instead of `npm run dev`)

---

## ✅ READY TO GO!
All files are configured for create-react-app!
