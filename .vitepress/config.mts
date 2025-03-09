import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learning English",
  description: "Record of learning English",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Interview", link: "/interview" },
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
      "/interview/": [
        {
          text: "Interview",
          items: [
            {
              text: "Leetcode",
              link: "/interview/leetcode/index.md",
              items: [
                {
                  text: "Binary Search",
                  link: "/interview/leetcode/binarySearch.md",
                },
                {
                  text: "Bit Calculation",
                  link: "/interview/leetcode/bitCalculatin.md",
                },
                {
                  text: "DataStructure",
                  link: "/interview/leetcode/dataStructure.md",
                },
                {
                  text: "DP",
                  link: "/interview/leetcode/dp.md",
                },

                {
                  text: "Graph",
                  link: "/interview/leetcode/graph.md",
                },

                {
                  text: "Greedy Algorithm",
                  link: "/interview/leetcode/greedy.md",
                },
                {
                  text: "Grid Graph",
                  link: "/interview/leetcode/gridGraph.md",
                },
                {
                  text: "Linked, Binary Tree and Tree",
                  link: "/interview/leetcode/linked.md",
                },
                {
                  text: "Mathematics Algorithm",
                  link: "/interview/leetcode/mathematics.md",
                },
                {
                  text: "Sliding Window and Two Pointers",
                  link: "/interview/leetcode/pointer.md",
                },
                {
                  text: "Monotonic Stack",
                  link: "/interview/leetcode/stack.md",
                },
                {
                  text: "String",
                  link: "/interview/leetcode/string.md",
                },
              ],
            },
            {
              text: "Technical Question",
              link: "/interview/technicalQuestion/index.md",
              items: [
                {
                  text: "JavaScript",
                  link: "/interview/technicalQuestion/javascript.md",
                },
                {
                  text: "React.js",
                  link: "/interview/technicalQuestion/react.md",
                },
                {
                  text: "Browser",
                  link: "/interview/technicalQuestion/browser.md",
                },
                {
                  text: "Full Stack",
                  link: "/interview/technicalQuestion/fullStack.md",
                },
              ],
            },
            {
              text: "Behavior Question",
              link: "/interview/behaviorQuestion.md",
            },
            {
              text: "Project Description",
              link: "/interview/projectDescription.md",
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
