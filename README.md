
# Jensen Education - React + TypeScript + Vite

This project is a **React** application built with **TypeScript** and **Vite**. It provides a minimal setup for fast development with features like Hot Module Replacement (HMR) and ESLint for code quality.

## Tech Stack

-   **React**: A component-based UI library for building user interfaces.
-   **TypeScript**: A superset of JavaScript that adds static types, providing type safety and better developer tooling.
-   **Vite**: A fast build tool that optimizes the development and production builds, supporting HMR out of the box.
-   **React Bootstrap**: Bootstrap components for React to build responsive UIs quickly.
-   **Storybook**: A tool for developing UI components in isolation.
-   **React Hook Form**: A library for handling forms in React with minimal re-renders and improved performance.
-   **Yup**: A schema validation library for validating form data.
-   **Sass**: A CSS preprocessor for more maintainable stylesheets.

## Project Setup

### Prerequisites

-   Node.js (version 16 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:

```bash
git clone https://github.com/your-repository/jensen-education.git
cd jensen-education
```

2.  Install dependencies:

```bash
npm install
# or if you're using yarn
yarn install
```

### Scripts

-   **dev**: Runs the development server using Vite (Hot Module Replacement enabled).

```bash
npm run dev
# or
yarn dev
```

-   **build**: Builds the production version of the app.

```bash
npm run build
# or
yarn build
```

-   **lint**: Runs ESLint to check for code quality and adherence to standards.

```bash
npm run lint
# or
yarn lint
```

-   **preview**: Previews the production build of the app.

```bash
npm run preview
# or
yarn preview
```

-   **storybook**: Runs Storybook for developing and testing UI components.

```bash
npm run storybook
# or
yarn storybook
```

-   **build-storybook**: Builds the Storybook static files for deployment.

```bash
npm run build-storybook
# or
yarn build-storybook
```

## Linting

The project is set up with **ESLint** to ensure consistent coding practices. You can run the lint script to check for errors in your code.

### ESLint Configuration

The project uses the **`plugin:storybook/recommended`** configuration for Storybook development, ensuring best practices are followed while building components.

## Folder Structure

-   **src**: Contains all the source code for the app, including components, hooks, and pages.
-   **storybook**: Contains Storybook configuration and stories for developing UI components.
-   **public**: Static assets like images and favicon.

