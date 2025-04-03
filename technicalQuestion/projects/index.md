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
[Led a team](../../behaviorQuestion/BQgrid.md#led-a-team)

#### Introduce this project

- This project is a micro-frontend application developed based on single-spa for an integrated financial tool.

- The base app and each children’s app are developed using React, some sub-applications are developed by Vue.

- Every sub-app can be deployed and used independently so that it can be customized for different clients just change a config file.

- The sub-apps include real-time market data viewing, trade strategy back-test, asset metadata management, bond price calculator, and more.

#### about 4 person team

- When I joined A company, they gave me a huge task, which was to develop a fintech SaaS platform in a limited time, they needed a demo for our client. I think the challenge is time. So, I ranked the feature list by importance and urgency, then chose the most important features for our MVP scope.

- After a few weeks of development, I realized that we would not be able to complete even the MVP on schedule. Therefore, I approached our boss to discuss the situation and requested additional team members for the project.

- After that, 2 junior frontend developers and a backend developer with basic frontend knowledge joined to our team. So I needed to divide tasks (from larger to smaller) between them and keep track of everyone's progress.

#### how to task allocation

- I assess the urgency and impact of each task, then focus on the high-priority items first.

- I also break down larger tasks into smaller, manageable parts and set clear milestones to track progress.

#### component library

#### about SharedWorker in real-time data viewing

- In the 'real-time data viewing’ module, to receive millisecond-level data sent by the backend.

- Need handle in frontend, classify and process the data. like, calculate bar about a period time in candleStick chart, category the bid and ask request.

- Since the data arrives quickly, if too much data is processed on the page, it will cause the page to lag.

- I used a SharedWorker to create a separate thread for unified processing and throttled the data before returning it.

- In the main thread, I used requestAnimationFrame to trigger data changes, which made the previously laggy page smooth.

#### DevOps

- Integrated Nacos to synchronize project configurations and injected them into environment variables during build time, enabling quick environment switching and increasing testing efficiency by 40%.

## Company B

### Back-test desktop

### Back-test web

- We need to display the bid/ask point on chart. But that time, the chart component we used is not supported scatter pot chart. So, I read the source code and Enhanced lightweight-chart from tradingView.

### internal service platform

[developed internal service platform to optimized work flow](../../behaviorQuestion/BQgrid.md#developed-internal-service-platform-to-optimized-work-flow)
