# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
# Product List Application

This is a React-based web application that fetches and displays a list of products with search, filter, and pagination functionalities. The app is designed to showcase a variety of products fetched from a remote API, allowing users to search by product title, filter by price and popularity, and sort the results.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Service](#api-service)
- [Components](#components)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Project Structure

The project follows a standard React structure:

├── public/ │ ├── index.html │ └── ... ├── src/ │ ├── api/ │ │ └── apiService.js │ ├── components/ │ │ ├── Filters.js │ │ ├── Pagination.js │ │ ├── ProductList.js │ │ ├── SearchBar.js │ │ ├── SortOptions.js │ └── styles/ │ ├── ProductList.css │ ├── App.js │ ├── index.js │ └── ... ├── .gitignore ├── package.json ├── README.md └── ...


## Features

- **Product Listing:** Displays a list of products with title, price, and popularity.
- **Search:** Allows users to search products by title.
- **Filtering:** Users can filter products by price range and popularity range.
- **Sorting:** Products can be sorted by price or popularity in ascending or descending order.
- **Pagination:** The list of products is paginated to improve readability and performance.

## Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn** (npm is recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/product-list-app.git
   cd product-list-app


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
