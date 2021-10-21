# Mortgage Calculator

## 

The purpose of this project was to build a simple mortgage calculator. There are three fields to enter information which include: loan balance, interest rate, and loan term(in years). The output is the monthly payment for this mortgage. In addition to using React, the app was styled with the Bootstrap framework. 

*Understanding the Equation*

In order to calculate the monthly payment, we can rely on a relatively simple equation. The monthly payment equation can be represented as follows:

M = P * (r(1 + r)^n) / ((1 + r)^n - 1)
These variables represent the following inputs:

M is your monthly payment.
P is your principal.
r is your monthly interest rate, calculated by dividing your annual interest rate by 12.
n is your number of payments (the number of months you will be paying the loan).


Finally, this app was deployed to [Heroku](https://mortgagert.herokuapp.com/).
