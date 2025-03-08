# 动态规划

## House Robber

- If you steal from the k-th house (house number k), you cannot steal from the (k-1)-th house. The total amount stolen is the sum of the maximum total amount from **the first (k-2) houses** and the amount in the k-th house.

- If you do not steal from the k-th house, the total amount stolen is the maximum total amount from **the first (k-1) houses**.

- The first element of the DP array stores the maximum total amount from the first (k−2) houses.

- Take the larger value between two case.

- Considering the (i-1)-th and i-th column, their **state transition** is as shown in below.

## buy and sell stock

- Transaction fee is **deducted** only when selling stocks.
