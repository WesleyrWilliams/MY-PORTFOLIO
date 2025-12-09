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
  {
    type: "web",
    title: "LEAVEWISE-APP",
    description:
      "Role-based workflow system allowing staff to request leave and admins to approve or decline",
    image: "/leaveimg2.png",
    tech: ["Pure Javascript", "Tailwind",'Express'],
    liveUrl: "https://leave-mangment-system.vercel.app/",
    githubUrl: "https://github.com/WesleyrWilliams/leave-mangment-system",
    screens: [
      {
        url: "/leaveimg1.png",
        caption: "Landing Page",
      },
      {
        url: "/leaveimg2.png",
        caption: "Admin Panel",
      },
      {
        url: "/leaveimg3.png",
        caption: "Employee Dashboard",
      },
      {
        url: "/leaveimg4.png",
        caption: "Quick leave form",
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


]
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
