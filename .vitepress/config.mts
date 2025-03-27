import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learning English",
  description: "Record of learning English",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Behavior", link: "/behaviorQuestion" },
      { text: "Technical", link: "/technicalQuestion" },
      { text: "Express", link: "/express" },
      { text: "Grammar", link: "/grammar" },
      { text: "Deutsch", link: "/Deutsch" },
    ],

    sidebar: {
      "/express/": [
        {
          text: "Vocabulary",
          link: "/express/vocabulary.md",
        },
        {
          text: "Sentences",
          link: "/express/sentences.md",
        },
      ],
      "/technicalQuestion/": [
        {
          text: "Front-end",
          link: "/technicalQuestion/frontend",
          items: [
            {
              text: "JavaScript",
              link: "/technicalQuestion/frontend/javascript.md",
            },
            {
              text: "React.js",
              link: "/technicalQuestion/frontend/react.md",
            },
            {
              text: "Browser",
              link: "/technicalQuestion/frontend/browser.md",
            },
          ],
        },
        {
          text: "Project Description",
          link: "/technicalQuestion/projects",
        },
        {
          text: "Leetcode",
          link: "/technicalQuestion/leetcode",
          items: [
            {
              text: "Binary Search",
              link: "/technicalQuestion/leetcode/binarySearch.md",
            },
            {
              text: "Bit Calculation",
              link: "/technicalQuestion/leetcode/bitCalculatin.md",
            },
            {
              text: "DataStructure",
              link: "/technicalQuestion/leetcode/dataStructure.md",
            },
            {
              text: "DP",
              link: "/technicalQuestion/leetcode/dp.md",
            },

            {
              text: "Graph",
              link: "/technicalQuestion/leetcode/graph.md",
            },

            {
              text: "Greedy Algorithm",
              link: "/technicalQuestion/leetcode/greedy.md",
            },
            {
              text: "Grid Graph",
              link: "/technicalQuestion/leetcode/gridGraph.md",
            },
            {
              text: "Linked, Binary Tree and Tree",
              link: "/technicalQuestion/leetcode/linked.md",
            },
            {
              text: "Mathematics Algorithm",
              link: "/technicalQuestion/leetcode/mathematics.md",
            },
            {
              text: "Sliding Window and Two Pointers",
              link: "/technicalQuestion/leetcode/pointer.md",
            },
            {
              text: "Monotonic Stack",
              link: "/technicalQuestion/leetcode/stack.md",
            },
            {
              text: "String",
              link: "/technicalQuestion/leetcode/string.md",
            },
          ],
        },
      ],
      "/behaviorQuestion/": [
        {
          text: "Behavior Question",
          link: "/behaviorQuestion",
          items: [
            {
              text: "BQ II",
              link: "/behaviorQuestion/BQII.md",
            },
          ],
        },
      ],
      "/grammar/": [],
      "/Deutsch/": [
        {
          text: "Deutsch",
          items: [
            {
              text: "base",
              link: "/Deutsch/base.md",
              items: [{ text: "alphabet", link: "/Deutsch/base/alphabet.md" }],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/czgaotian" },
      { icon: "home", link: "https://gaotian.net" },
    ],
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
