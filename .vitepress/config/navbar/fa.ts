import type { DefaultTheme } from "vitepress";
import { github, npm, version } from "../../meta";

export const fa: DefaultTheme.NavItem[] = [
  {
    text: "Guide",
    link: "/en/guide/",
    activeMatch: "/guide/",
  },
  {
    text: "Config",
    link: "/en/guide/",
    activeMatch: "/guide/",
  },
  {
    text: "Recipes",
    link: "/en/guide/",
    activeMatch: "/guide/",
  },
  {
    text: "API",
    link: "/en/api/",
    activeMatch: "/en/api/",
  },
  {
    text: `v${version}`,
    items: [
      {
        text: "Changelog",
        link: `${github}/blob/main/CHANGELOG.md`,
      },
      {
        text: "NPM",
        link: npm,
      },
      {
        text: "Playground",
        link: "https://github.com/Zhengqbbb/czgit-playground",
      },
      {
        text: "FAQ",
        link: "/en/faq/",
      },
    ],
  },
];
