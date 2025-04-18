# Behavioral Interview Preparation Grid

## handle tight deadline in fin-tech platform

Situation

- When I joined A company, I was given the task of developing a fin-tech SaaS platform within a very limited time.

Task

- The challenge was to complete the platform's MVP on time, despite the tight deadline. I had to prioritize the most critical features and ensure the team could **handle the workload**.

Action

- I first broke down feature list into smaller, manageable parts and allocated them based on importance and urgency.
- Than communication with pm team, to verified the most important feature, choose these features to prioritize development.
- Based on my estimation, I think it's difficult to complete the task within the given timeframe. I've reported this to my boss and leader, and they told me to start development and see how it goes.
- After a few weeks of development, I realized that the team wouldn't be able to **meet the deadline**. I **approached** my boss to explain the situation and requested additional resources.

Result

- By re-prioritizing the tasks, adding more resources. we were able to complete the MVP on time, and the demo was successfully delivered to the client.

## Led a team

Situation

- When I worked for fin-tech platform, I requested my boss to add another resources, after that, 2 junior developer joined our team.

Task

- My task was to lead a team of 4 frontend developers to deliver the project within 6 month timeframe. This involved not only technical leadership but also coordinating with another department, managing deadline, and ensuring the team **remained motivated and productive**.

Action

-

## developed internal service platform to optimized work flow

Situation

- When I was work for [XXX] company, at the end of the month, every employee need to submit an Excel report to HR department, detailing the time spent on each project every day.
- Not just me, but many other colleagues also forget to submit this form at the end of the month.

Task

- I want to optimize this process, so I decided to develop a little tool to automatic generate this file and send to human resource department.

Action

- I developed a web application where employees could log their working hours daily, and the system would automatically generate the required Excel report at the end of the month.
- The app included a simple UI for users to review.
- I also used chart to visualize the distribution of working hours per day. This way, everyone can better allocate their time

Result

- As a result, the time spent on reporting was reduced significantly. The team's efficiency also improved.

## had a conflict with a teammate

Situation

- In a previous project, I had a disagreement with a colleague over the best approach to a technical issue. Which is where to settle calculate the each OHLC bar in market data display module.
- I think we need to settle these calculation at server side, because Heavy computations can slow down page performance.
- But backend developer I collaborate with think that these need to calculate in browser.

Task

- To avoid delaying the project schedule. we need to quickly find a viable solution.

Action

- So, I initiated a discussion in our team to better understand each other's perspective. And discussed the implementation details
- We evaluated the pros and cons of both approaches, and explain the reason we chose this solution

Result

- I accepted my colleague's solution. Because for the backend, this is indeed an unnecessary operation.
- I implemented the calculation logic on the frontend and optimized performance using other methods.

## Optimized light-weight chart

Situation

- When I worked in XXX company, there is a project our team planned use light-weight chart to display data.
- However, the library is not support scatter plot and multi panel rendering, but this two features that are critical to our needs.
- For example, we would like to overlay trading signal points (buy and sell points) on the K-chart and render multiple data indicators (e.g. MACD, RSI) on different panels to enhance the visualization capabilities.

Task

- so, I need to study the architecture of lightweight-charts to determine whether it can be extended for Scatter Plot and Panel rendering.
- And evaluate the **technical feasibility**, and assess the difficulty of implementing these features
- Estimate the **development effort** to provide a basis for team decision-making.

Action

- Researching lightweight-charts source code.
- To implement the Scatter Plot, I need to customize Series component, because I can reuse some of rendering logic, maybe 3-5 days can complete
- For multi panel rendering, required modify layout management logic, which may involve significant changes

Result

- The research led the conclusion that both two features can complete.
- Scatter Plot need normal workload, few days.
- Multi panel rendering is more difficult, need approximately one or two weeks.
- Since there was enough time, I developed these two features
- Finally, Scatter Plot and Panel Rendering are now successfully deployed in production environment.
