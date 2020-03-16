# Expensify

Sign in and start manage your own expenses.

based on [React](https://reactjs.org) framework (with redux), deployed at [https://lucas-expensify-app.herokuapp.com/](https://lucas-expensify-app.herokuapp.com/)





## Components

- LoadingPage
- LoginPage
- ExpenseDashboardPage
  - ExpensesSummary
  - ExpenseListFilters
  - ExpenseList
    - ExpenseListItem
    - ExpenseListItem
    - ...

- AddExpensePage
  - ExpenseForm
- EditExpensePage
  - ExpenseForm

- NotFoundPage



## Sitemaps

- "/"

  - authenticated: redirected to "/dashboard"
  - not authenticated: login page

- "/dashboard"

  - summary expenses information and detailed expense information
  - query based on date range, query string, sortBy condition
  - add new expense whenever needed
  - click detailed information to edit

- "/create"

  - add new expense whenever needed

- "/edit/:id"

  - click detailed expense to edit



## Third-party Libraries

- firebase
  - provide authentication and access to real-time database

- react-dates

  - date-range-picker and single-date-picker

- numeral

  - format expense value

- moment

  - format date

  
  
  

