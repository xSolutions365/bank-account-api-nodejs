# Bank Account Solution

This solution contains a simple Bank Account MVC project with a REST API back-end and a React front-end built with Vite.

## Project Overview

### Bank Account API
- **bank-account.controller.ts**: Contains the `BankAccountController` which handles HTTP requests related to bank accounts.
- **bank-account.model.ts**: Defines the `BankAccount` class representing a bank account with properties like `Id`, `AccountNumber`, `AccountHolderName`, and `Balance`.
- **bank-account.service.ts**: Implements the `BankAccountService` class that provides business logic for managing bank accounts.

### **Bank Account UI**
The **Bank Account UI** is a React-based front-end application built with Vite that provides a user-friendly interface to interact with the API.

- **`components/Header.tsx`**: Renders the navigation bar with links.
- **`components/Footer.tsx`**: Displays a fixed footer with copyright information.
- **`components/BankAccountTable.tsx`**: Fetches and displays bank account data in a table format.
- **`api/bankAccountApi.ts`**: Handles API calls to retrieve bank accounts.
- **`pages/BankAccountsPage.tsx`**: Main page that renders the `BankAccountTable` and integrates layout components.

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

## Running Tests

To run the tests in this project, follow these steps:

### Backend Tests

1. Open a terminal and navigate to the API directory.
   ```sh
   cd bank-account-api
   ```
2. Run the following command to execute the unit tests:
   ```sh
   npm run test
   ```
3. Run the following command to execute the end-to-end tests:
   ```sh
   npm run test:e2e
   ```
4. Run the following command to execute all tests:
   ```sh
   npm run test:all
   ```

### Frontend Tests

1. Make sure the API is running:
   ```sh
   cd bank-account-api
   npm run start
   ```

2. In a separate terminal, start the UI application:
   ```sh
   cd bank-account-ui
   npm run dev
   ```

3. Open a new terminal and run the UI tests:
   ```sh
   cd bank-account-ui
   npm run test:ui
   ```

   This will run Selenium-based tests that verify the UI components and functionality. The tests require both the API and UI to be running as they test the integration between them.

### Troubleshooting 

#### ChromeDriver Version Mismatch

If you encounter a `SessionNotCreatedError` when running the UI tests (`npm run test:ui`) with an error message similar to:
```
SessionNotCreatedError: session not created: This version of ChromeDriver only supports Chrome version X
Current browser version is Y...
```
Update the `chromedriver` npm package to align with your currently installed Chrome browser version:

```bash
npm uninstall chromedriver
npm install --save-dev chromedriver@latest
```

Then remove `node_modules` and `package-lock.json` and reinstall all dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

After completing these steps, try running the UI tests again: `npm run test:ui`.

## Context 7 Command
code --add-mcp '{"name":"context7","type":"stdio","command":"npx","args":["@upstash/context7-mcp@1.0.31"],"env":{"CONTEXT7_API_KEY":"${input:CONTEXT7_API_KEY}"},"gallery":"https://api.mcp.github.com","version":"1.0.31"}' --folder-uri .

## Spec-kit Commands
- /speckit.constitution [prompt] : Generates or updates the constitution.md file. It establishes the "governing principles" of the project, 
- /speckit.specify [prompt] : Generates the Functional Specification. It takes a user's high-level intent and converts it into detailed user stories and requirements.
- /speckit.clarify [prompt] : Identify and resolve ambiguities in the spec (optional)
- /speckit.plan [prompt] : Creates a Technical Implementation Plan. It reads the spec and constitution to set technology stack and architecture.
- /speckit.tasks [prompt] : Converts the technical plan into a checklist of actionable coding tasks.
- /speckit.analyze [prompt] : Validate your plan (optional)
- /speckit.implement [prompt] : Execute the tasks and produce the feature code

## Dependencies

This project may require the following npm packages for testing:

### Backend Dependencies
- `jest`: A delightful JavaScript Testing Framework with a focus on simplicity.
- `@nestjs/testing`: Utilities for testing NestJS applications.
- `supertest`: A library for testing HTTP servers.
cd /Users/thalitavergilio/NodeProjects/bank-account-api/bank-account-ui
npm run test:uicd /Users/thalitavergilio/NodeProjects/bank-account-api/bank-account-ui
npm run test:ui
### Frontend Dependencies
- `React`: A declarative JavaScript library for building user interfaces.
- `TypeScript`: Strongly-typed JavaScript for maintainable code.

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

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.
