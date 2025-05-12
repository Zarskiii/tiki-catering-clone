# Zar's Tiki Shack - Project Directory

## Project Structure

```
tiki-catering-clone/
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── favicon.svg               # Custom SVG favicon
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── ui/                   # Shadcn UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── tiki-button.tsx    # Custom button for Tiki theme
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   │
│   │   ├── About.tsx             # Main page sections
│   │   ├── Catering.tsx
│   │   ├── ChatBot.tsx           # Floating AI chatbot for package selection
│   │   ├── Contact.tsx
│   │   ├── CursorBadge.tsx       # Custom badge showing "Made with Cursor"
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Menu.tsx
│   │   ├── Navbar.tsx
│   │   └── Testimonials.tsx
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                      # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/                    # Page components
│   │   ├── Index.tsx             # Main landing page
│   │   └── NotFound.tsx          # 404 page
│   │
│   ├── App.css                   # Global app styles
│   ├── App.tsx                   # Main application component
│   ├── index.css                 # Global CSS
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts             # Vite environment type definitions
│
├── .gitignore                    # Git ignore file
├── components.json               # Shadcn UI components configuration
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML entry point
├── package.json                  # NPM package configuration
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.app.json             # TypeScript configuration for app
├── tsconfig.json                 # Main TypeScript configuration
├── tsconfig.node.json            # TypeScript configuration for Node
└── vite.config.ts                # Vite build tool configuration
```

## Key Files and Directories

- **src/components/**: Contains all React components used in the application
  - **ui/**: Shadcn UI components for the design system
  - **ChatBot.tsx**: AI-powered floating chatbot to help customers select catering packages
  - Other components represent main sections of the website

- **src/pages/**: Page-level components that are rendered based on routes

- **src/hooks/**: Custom React hooks for shared functionality

- **src/lib/**: Utility functions and helpers

- **public/**: Static assets like favicons

- **Configuration files**: Various configuration files for TypeScript, Tailwind, Vite, etc. 