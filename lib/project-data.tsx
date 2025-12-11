export interface WebProject {
  type: "web"
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  screens: {
    url: string
    caption: string
  }[]
}


export const webProjects: WebProject[] = [
  {
    type: "web",
    title: "KIOLA",
    description:
      "A luxury furniture e-commerce website featuring beautifully crafted furniture collections. Modern design with elegant UI, product showcases, and seamless shopping experience.",
    image: "/kiola.png",
    tech: ["Next.js", "Tailwind", "React"],
    liveUrl: "https://kiola-murex.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/kiola.git",
    screens: [
      {
        url: "/kiola.png",
        caption: "Homepage - Furniture Collection",
      },
      {
        url: "/kiola.png",
        caption: "Product Showcase",
      },
    ],
  },
  {
    type: "web",
    title: "PADDLE PAYMENT",
    description:
      "A modern payment platform landing page with mobile web payments integration. Features clean UI, responsive design, and seamless payment processing interface.",
    image: "/paddle-payment.png",
    tech: ["Next.js", "Tailwind", "React"],
    liveUrl: "https://paddle-mobile-web-payments-starter.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/paddle-mobile-web-payments-starter",
    screens: [
      {
        url: "/paddle-payment.png",
        caption: "Landing Page",
      },
      {
        url: "/paddle-payment.png",
        caption: "Payment Interface",
      },
    ],
  },
  {
    type: "web",
    title: "MOVIE VAULT",
    description:
      "A modern movie finder application with smart search, favorites management, and comprehensive movie details. Built with React and Tailwind CSS.",
    image: "/movievault.png",
    tech: ["React", "Tailwind", "Vite"],
    liveUrl: "https://movie-vault-sooty.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/Movie-Vault.git",
    screens: [
      {
        url: "/movievault.png",
        caption: "Home Page - Movie Search",
      },
      {
        url: "/movievault.png",
        caption: "Movie Discovery Interface",
      },
    ],
  },
  {
    type: "web",
    title: "FLAVORIT",
    description: "A food discovery and meal planning platform for exploring recipes and organizing weekly meals.",
    image: "/flavoimg.png",
    tech: ["Next.js", "Tailwind.css", "Chart.js"],
    liveUrl: "https://food-recipe-app-nine-inky.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/novaboard",
    screens: [
      {
        url: "/flavoimg.png",
        caption: "Home Page Overview",
      },
      {
        url: "/flavoimg2.png",
        caption: "Recipe description page",
      },
      {
        url: "/flavoimg4.png",
        caption: "Meal Plan Page",
      },
      {
        url: "/flavoimg5.png",
        caption: "Recipe detail page",
      },
    ],
  },
  {
    type: "web",
    title: "GOTE-MARKETPLACE",
    description:
      "A modern e-commerce/marketplace platform with product listings, responsive layouts, and a clean shopping experience.",
    image: "/goteimg3.png",
    tech: ["Next.js", "Firebase", "Tailwind"],
    liveUrl: "https://gote-marketplace.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/gote-marketplace",
    screens: [
      {
        url: "/goteimg1.png",
        caption: "Homepage",
      },
      {
        url: "/goteimg5.png",
        caption: "Product Catalog",
      },
      {
        url: "/goteimg2.png",
        caption: "Shopping Cart",
      },
      {
        url: "/goteimg6.png",
        caption: "Order Confirmation",
      },
    ],
  },
  // {
  //   type: "web",
  //   title: "NOVABOARD",
  //   description:
  //     "NOVABOARD is a concept dashboard showcasing real-time analytics, data integration, and secure cloud storage,  designed to demonstrate clean UI and powerful data visualization.",
  //   image: "/novaimg2.png",
  //   tech: ["Next.js", "Tailwind.css", "Chart.js"],
  //   liveUrl: "https://novaboard-nine.vercel.app/",
  //   githubUrl: "https://github.com/WesleyrWilliams/novaboard",
  //   screens: [
  //     {
  //       url: "/novaimg1.png",
  //       caption: "Dashboard Overview",
  //     },
  //     {
  //       url: "/novaimg2.png",
  //       caption: "Transactions",
  //     },
  //     {
  //       url: "/novaimg3.png",
  //       caption: "Budget Categories",
  //     },
  //     {
  //       url: "/novaimg4.png",
  //       caption: "Reports & Analytics",
  //     },
  //   ],
  // },
]
