# Bank Account Solution

This solution contains a simple Bank Account web application with a REST API, a front-end built with React and Vite, and accompanying tests.

## Project Overview

### Bank Account API
- **bank-account.controller.ts**: Contains the `BankAccountController` which handles HTTP requests related to bank accounts.
- **bank-account.model.ts**: Defines the `BankAccount` class representing a bank account with properties like `Id`, `AccountNumber`, `AccountHolderName`, and `Balance`.
- **bank-account.service.ts**: Implements the `BankAccountService` class that provides business logic for managing bank accounts.

### Bank Account API Tests
- **bank-account.controller.spec.ts**: Contains unit tests for the `BankAccountController` to ensure correct handling of HTTP requests.
- **bank-account.service.spec.ts**: Contains unit tests for the `BankAccountService` to verify business logic and data manipulation.
- **bank-account.model.spec.ts**: Contains unit tests for the `BankAccount` model to verify the correctness of its methods.
- **bank-account.e2e-spec.ts**: Contains end-to-end tests to verify the complete workflow of the application.

### Bank Account UI (Front-End)
- **React Components**: Implements a front-end for viewing bank accounts.
- **Integration**: Fetches data from the BankAccount API using REST calls.

### Bank Account UI Tests
- **Selenium Tests**: Uses Selenium and ChromeDriver to verify UI functionality.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
### Running the API

1. Navigate to the project directory:
   ```sh
   cd bank-account-api
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Run the API:
   ```sh
   npm run start
   ```

4. Open the browser and navigate to:
   ```
   http://localhost:3000/api/BankAccount
   ```
   This will display the list of bank accounts.

5. Run the API unit tests:
   ```sh
   npm run test
   ```
6. Run the API end-to-end tests:
   ```sh
   npm run test:e2e
   ```
7. Run all API tests:
   ```sh
   npm run test:all
   ```

### Running the UI

1. Open a new terminal and navigate to the UI project directory:
   ```sh
   cd bank-account-ui
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open the browser and navigate to:
   ```
   http://localhost:5173
   ```
   This will display the Bank Account UI.
   ![Bank Account UI](<images/bank-account-ui.png>)

5. Run the UI tests:
   ```sh
   npm run test:ui
   ```

## Dependencies

This project requires the following dependencies for testing:

### Backend Dependencies
- `jest`: A delightful JavaScript Testing Framework with a focus on simplicity.
- `@nestjs/testing`: Utilities for testing NestJS applications.
- `supertest`: A library for testing HTTP servers.

### Frontend Dependencies
- `Mocha`: A JavaScript test framework.
- `Chai`: An assertion library for testing.
- `Selenium WebDriver`: A browser automation framework for UI testing.

To install all dependencies, run:
```sh
   npm install
```

## Technologies Used
- Node.js
- NestJS
- TypeScript
- Jest (for testing)
- Supertest (for HTTP assertions)
- React (with Vite)
- Mocha
- Chai
- Selenium WebDriver

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.
