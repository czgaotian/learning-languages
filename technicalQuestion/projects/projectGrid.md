# Project Preparation Grid In Technical Interview

## Use Shared-Worker to optimized chart rendering

- In the 'real-time data viewing’ module, to receive millisecond-level data sent by the backend.

- Need handle in frontend, classify and process the data. like, calculate bar about a period time in candleStick chart, category the bid and ask request.

- Since the data arrives quickly, if too much data is processed on the page, it will cause the page to lag.

- I used a SharedWorker to create a separate thread for unified processing and throttled the data before returning it.

- In the main thread, I used requestAnimationFrame to trigger data changes, which made the previously laggy page smooth.
