# STL-Hack

This README provides an overview of the Loan Calculation feature implemented in the finance assistant application. The Loan Calculation functionality allows users to calculate loan details, including monthly payments, total interest paid, and total amount paid for multiple loan durations.
  ## Table of Contents
  Setup and Running Instructions
  Key Algorithms and Design Decisions
  Usage Examples
  Dependencies
  Troubleshooting
  Roadmap

# Database
Use the following commands to setup the database:

docker pull mongo
docker run -d --name STL_Hacks_Container -p 5151:27017 -e MONGO_INITDB_ROOT_USERNAME=<username> -e MONGO_INITDB_ROOT_PASSWORD=<password> mongo



Setup and Running Instructions
Ensure you have Node.js installed on your system.
Clone the repository and navigate to the project directory.
Install the required dependencies by running the following command:
tsx

Copy code
npm install
Start the application by running the following command:
tsx

Copy code
npm start
The application will be running on http://localhost:3000.
Key Algorithms and Design Decisions
The Loan Calculation feature uses the standard formula for calculating the monthly payment (M) of a fixed-rate loan:
[ M = P \frac{r(1+r)^n}{(1+r)^n-1} ]
where:
( P ) is the loan principal (loan amount)
( r ) is the monthly interest rate (annual rate / 12)
( n ) is the total number of payments (loan term in years * 12)
The implementation follows a modular design, separating the loan calculation logic into the following components:
userController.js: Contains the loan calculation functions.
userRoutes.js: Defines the routes for loan calculation endpoints.
app.js: Integrates the loan calculation routes into the main application.
The loan calculation functionality supports multiple loan durations, allowing users to provide an array of desired loan terms and receive calculations for each duration.
Usage Examples
To calculate loan details, send a POST request to the /users/calculate-loans endpoint with the following JSON payload:
json

Copy code
{
  "loanAmount": 10000,
  "annualRate": 5,
  "loanDurations": [5, 10, 15]
}
The response will include the calculated loan details for each specified duration:
json

Copy code
{
  "calculations": [
    {
      "durationYears": 5,
      "monthlyPayment": 188.71,
      "totalInterestPaid": 1322.74,
      "totalPaid": 11322.74
    },
    {
      "durationYears": 10,
      "monthlyPayment": 106.07,
      "totalInterestPaid": 2728.23,
      "totalPaid": 12728.23
    },
    {
      "durationYears": 15,
      "monthlyPayment": 79.08,
      "totalInterestPaid": 4233.97,
      "totalPaid": 14233.97
    }
  ]
}
# Dependencies
The Loan Calculation implementation relies on the following dependencies:
Express.js: Web application framework for Node.js.
Body-parser: Middleware to parse the request body.
Make sure to install these dependencies before running the application.
# Troubleshooting
If you encounter any issues while running the Loan Calculation implementation, consider the following:
Ensure that you have installed all the required dependencies.
Double-check the request payload format and make sure it matches the expected structure.
Verify that the application is running on the correct port (http://localhost:3000 by default).
If the issue persists, please open an issue on the GitHub repository, providing detailed information about the problem.
# Roadmap
The following enhancements and improvements are planned for the Loan Calculation feature:
Add support for variable interest rates and more complex loan types.
Implement data persistence to store loan calculations for future reference.
Enhance error handling and input validation for edge cases and invalid inputs.
Provide additional loan-related calculations, such as amortization schedules and early payoff estimations.
We welcome contributions and suggestions for further improvements to the Loan Calculation functionality.
