import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learning English",
  description: "Record of learning English",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Grammar", link: "/grammar" },
      { text: "Interview", link: "/interview" },
      {text: "Deutsch", link: "/deutsch"},
    ],

    sidebar: {
      "/interview/": [
        {
          text: "Interview",
          items: [
            { text: "Punctuation", link: "/interview/punctuation.md" },
            { text: "Vocabulary", link: "/interview/vocabulary.md" },
            { text: "Sentences", link: "/interview/sentences.md" },
            { text: "QA", link: "/interview/qa.md" },
          ],
        },
      ],
      "/grammar/": [],
      "/deutsch/": [],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/czgaotian" }],
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicon-16x16.png",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/assets/favicon.ico" }],
  ],
});
