# Bank Account Solution

This solution contains a simple Bank Account MVC project with a REST API and accompanying unit tests.

## Project Overview

### Bank Account API
- **bank-account.controller.ts**: Contains the `BankAccountController` which handles HTTP requests related to bank accounts.
- **bank-account.model.ts**: Defines the `BankAccount` class representing a bank account with properties like `Id`, `AccountNumber`, `AccountHolderName`, and `Balance`.
- **bank-account.service.ts**: Implements the `BankAccountService` class that provides business logic for managing bank accounts.

### Tests
- **bank-account.controller.spec.ts**: Contains unit tests for the `BankAccountController` to ensure correct handling of HTTP requests.
- **bank-account.service.spec.ts**: Contains unit tests for the `BankAccountService` to verify business logic and data manipulation.
- **bank-account.model.spec.ts**: Contains unit tests for the `BankAccount` model to verify the correctness of its methods.
- **bank-account.e2e-spec.ts**: Contains end-to-end tests to verify the complete workflow of the application.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd bank-account-api
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Run the API:
   ```sh
   npm run start
   ```

5. Open the browser and navigate to:
   ```
   http://localhost:3000/api/BankAccount
   ```
   This will display the list of bank accounts.

6. Run the unit tests:
   ```sh
   npm run test
   ```

## Running Tests

To run the tests in this project, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Open a terminal and navigate to the project directory.
3. Run the following command to execute the unit tests:
   ```sh
   npm run test
   ```
4. Run the following command to execute the end-to-end tests:
   ```sh
   npm run test:e2e
   ```
5. Run the following command to execute all tests:
   ```sh
   npm run test:all
   ```

## Dependencies

This project may require the following npm packages for testing:

- `jest`: A delightful JavaScript Testing Framework with a focus on simplicity.
- `@nestjs/testing`: Utilities for testing NestJS applications.
- `supertest`: A library for testing HTTP servers.

Make sure to install the packages by running:
```sh
   npm install
```

## Technologies Used
- Node.js
- NestJS
- TypeScript
- Jest (for testing)
- Supertest (for HTTP assertions)

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.
