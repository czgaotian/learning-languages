# Project Description

## Personal Project

## Notion Next Base

[notion-next-base](https://github.com/czgaotian/notion-next-base)

- I built a Notion clone using `Next.js`, `Tailwind CSS`. This project was a great learning experience for me, as I got to explore new technologies and improve my skills in web development.
- The application allows users to create, edit, and organize notes in a way similar to Notion, with a clean and intuitive user interface.
- The main function is Notion render,
- I also implemented an theme manage system, which can switched theme in real-time. The main component is fetch the data from notion and pass to the child component through props.

  - The theme component load from a hash map, and the key is router, same as the path router in `Next.js`.
  - The theme component display these data in its own style. So, I use `css-module` to apply style isolation here.
  - I want to create an open interface, similar to hexo, so that user can develop their own custom themes.

- The page has good SEO, I implement a dynamic site map, and a robots.txt file
- rss

## GB Emulator

[gb-emulator](https://github.com/czgaotian/gbemu)

- I developed a Game Boy emulator using typescript and modern web api, like `requestAnimationFrame` for calculate machine cycles, `uint8Array` to handle binary data.
- This project was a deep dive into low-level programming and understanding how computer work. I implemented the CPU, memory management, and PPU for graphics rendering, which gave me a solid understanding of computer architecture and familiarity these web api.
- The implement of every component is a challenging, but achievable. For example,
  - In CPU component, I need to handle the bit calculation to match the number type, such as the problem of uint8 overflow.
  - The debug for CPU instruction is different, too.

## Company A

### Data Management

[handle tight deadline in fin-tech platform](../../behaviorQuestion/BQgrid.md#handle-tight-deadline-in-fin-tech-platform)

#### Introduce this project

- This project is a micro-frontend application developed based on single-spa for an integrated financial tool.
- The base app and each children’s app are developed using React, some sub-applications are developed by Vue.
- Every sub-app can be deployed and used independently so that it can be customized for different clients just change a config file.
- The sub-apps include real-time market data viewing, trade strategy back-test, asset metadata management, bond price calculator, and more.

#### How to use Vue

- In general, I use Vue to build modular, component-based applications.
- I start by setting up the project using Vite.
- Almost component are created with Composition API - I also familiar with Option API, I worked in Option API at many projects.
- reactively update the DOM using `v-bind` and `v-on`, and handle conditional rendering with directives like `v-if` and `v-for`.
- I'm also confident using Vue with tools like Pinia or Vuex for state management, Vue Router for navigation, and Tailwind CSS or scoped styles for UI consistency.

#### about 4 person team

[Led a team](../../behaviorQuestion/BQgrid.md#led-a-team)

#### about SharedWorker in real-time data viewing

[Use Shared-Worker to optimized chart rendering](./projectGrid.md#use-shared-worker-to-optimized-chart-rendering)

#### DevOps

- Integrated Nacos to synchronize project configurations and injected them into environment variables during build time, enabling quick environment switching and increasing testing efficiency by 40%.

## Company B

### Back-test desktop

### Back-test web

- We need to display the bid/ask point on chart. But that time, the chart component we used is not supported scatter pot chart. So, I read the source code and Enhanced lightweight-chart from tradingView.

### internal service platform

[developed internal service platform to optimized work flow](../../behaviorQuestion/BQgrid.md#developed-internal-service-platform-to-optimized-work-flow)

### Trans Js to Ts

- At QuantInfo, I led a migration from JavaScript to TypeScript for the front-end codebase.
- I began by evaluating the complexity and dependencies of the existing project, then designed a gradual migration strategy to minimize disruption.
- This included setting up strict tsconfig rules, converting key modules to TypeScript, and creating custom type definitions for third-party libraries that lacked official typings.
