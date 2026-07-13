# Shannen Nazareno | Developer Portfolio

A sleek, modern, and interactive developer portfolio built to showcase projects across Full-Stack Development, Data Science, and Technical Writing. 

Designed with a dark-mode-first aesthetic, it leverages smooth animations, glassmorphic UI elements, and a premium user experience to highlight technical expertise and strategic impact.

![Portfolio Preview](./public/preview.png) *(Note: Add a screenshot of the portfolio to `/public/preview.png`)*

## 🚀 Live Demo

[Visit Portfolio Here](https://github.com/nzrnshannen/portfolio) *(Update with your deployed Vercel link once available)*

## 🛠️ Built With

This portfolio is built using modern web development tools, focusing on high performance, responsive design, and fluid animations:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Aceternity UI](https://ui.aceternity.com/) & Custom Components
- **Typography**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

## 🌟 Key Features

- **Dynamic Hero Section**: Interactive background effects with `framer-motion` text generation.
- **Infinite Moving Tech Stack**: A buttery-smooth, infinite scrolling carousel showcasing languages, databases, and frameworks.
- **Categorized Project Grid**: A sleek, tabbed navigation system that dynamically filters projects by:
  - Full-Stack Websites
  - Data Science & Kaggle Notebooks
  - Published Blogs & Technical Writing
- **Premium Hover States**: Cards feature glassmorphic backdrops, glowing borders, scaling animations, and spotlight drop-shadows.
- **Fully Responsive**: Optimized layout for mobile, tablet, and desktop viewing.
- **Dark Mode Native**: A curated `#0a0a0a` sleek dark theme.

## 💻 Running Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nzrnshannen/portfolio.git
   ```

2. **Navigate to the directory**
   ```bash
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

- `/src/app`: Contains the main Next.js App Router layout and pages.
- `/src/components/sections`: Contains the high-level page sections (`Hero.tsx`, `Projects.tsx`, `TechStack.tsx`, `Contact.tsx`).
- `/src/components/ui`: Contains the reusable, highly animated Aceternity UI components (`infinite-moving-cards.tsx`, `tabs.tsx`, etc.).
- `/src/lib`: Contains utility functions (like `cn` for Tailwind class merging).
- `/public`: Static assets (images, icons).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Designed & Built by Shannen Nazareno*
