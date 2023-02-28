import type { DefaultTheme } from "vitepress";

export const fa: DefaultTheme.Sidebar = {
  "/fa/api/": [
    {
      text: "Guide",
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: "Introduction",
          link: "/fa/api/",
        },
        {
          text: "Getting Started",
          link: "/fa/api/install",
        },
      ],
    },
    {
      text: "Sample API",
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: "Sample With Markdown",
          link: "/fa/api/sample-api",
        },
        {
          text: "Sample With HTML",
          link: "/fa/api/sample-api-html",
        },
      ],
    },
  ],
  "/": [
    {
      text: "Products",
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: "Supply and Demand",
          link: "/fa/products/supply-demand",
        },
      ],
    },
  ],
};
