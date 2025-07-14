[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19933012&assignment_repo_type=AssignmentRepo)
# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:
1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week6-Assignment.md` file
4. Explore the starter code and existing tests
5. Complete the tasks outlined in the assignment

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Testing Strategy

This project uses a comprehensive, layered testing strategy to ensure reliability and maintainability of the MERN stack application. The approach includes unit, integration, and end-to-end (E2E) testing, as well as debugging tools and techniques.

### 1. Unit Testing
- **Client:**
  - Uses **Jest** and **React Testing Library** to test React components, utility functions, and (if present) Redux logic and custom hooks.
  - Example: `Button.test.jsx` tests all props, variants, and event handlers of the Button component.
  - Custom Jest matchers from `@testing-library/jest-dom` are configured in a Jest setup file.
- **Server:**
  - Uses **Jest** to test utility functions and Express middleware in isolation.
  - Unit tests are located in `client/src/tests/unit/` and `server/tests/unit/`.
- **Coverage:**
  - Aim for at least 70% code coverage for all critical code paths. Run `pnpm test:unit` or `npm run test:unit` to view coverage reports.

### 2. Integration Testing
- **Server:**
  - Uses **Supertest** and **mongodb-memory-server** to test API endpoints and database operations in isolation from the production database.
  - Example: `posts.test.js` covers CRUD operations, authentication, and validation for the `/api/posts` endpoint.
  - Integration tests are located in `server/tests/integration/`.
- **Client:**
  - (If applicable) Integration tests for React components that interact with APIs or global state.

### 3. End-to-End (E2E) Testing
- **Cypress:**
  - Used for simulating real user flows in the browser (e.g., visiting the home page, checking for UI elements).
  - E2E tests are located in `client/cypress/e2e/`.
  - Example: `smoke.cy.js` verifies the home page loads and displays the expected content.
- **Playwright:**
  - Alternative E2E framework for cross-browser testing.
  - Example: `tests/home.spec.js` checks the home page renders correctly.

### 4. Debugging Techniques
- **Server-side logging:**
  - Uses `morgan` for HTTP request logging and custom middleware for performance monitoring (logs request duration).
  - Global error handler logs all server errors.
- **Client-side error boundaries:**
  - `ErrorBoundary` React component wraps the app to catch and display UI errors.
- **Performance monitoring:**
  - Request duration is logged for each API call on the server.
- **Browser dev tools:**
  - Recommended for manual debugging of client-side issues.

### 5. Running Tests
- **Unit tests:**
  - `pnpm test:unit` or `npm run test:unit` (client and server)
- **Integration tests:**
  - `pnpm test:integration` or `npm run test:integration` (server)
- **E2E tests:**
  - `pnpm exec cypress run --e2e` (client)
  - `pnpm exec playwright test` (client)

### 6. Coverage & Reporting
- Coverage reports are generated for unit tests. Review them to ensure all critical logic is tested.
- Screenshots and videos (from Cypress/Playwright) can be used to document E2E test results.

### 7. Best Practices
- Write small, focused tests for each function/component.
- Use mocks/stubs for external dependencies in unit tests.
- Use in-memory databases for integration tests to avoid polluting production data.
- Automate tests in CI/CD pipelines for continuous reliability.

---

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 