# IP Finder App

A simple IP address finder application built using React. This app retrieves IP address details and displays them on a map.


![Screenshot 2024-09-25 085548](https://github.com/user-attachments/assets/48e65c4f-6405-49e0-9b2a-5a63d2be8e99)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- [Node.js](https://nodejs.org/) and npm must be installed on your machine.

### Installation

1. **Create a new React app**:
   ```bash
   npx create-react-app ip-finder
   ```

2. **Navigate into the project folder**:
   ```bash
   cd ip-finder
   ```

3. **Install necessary packages**:
   - Install `ajv` and `ajv-keywords` for JSON validation:
     ```bash
     npm install ajv@latest ajv-keywords@latest
     ```
   - Install `axios` for making HTTP requests:
     ```bash
     npm install axios
     ```
   - Install `react-map-gl` for displaying maps:
     ```bash
     npm install react-map-gl
     ```
   - Install `react-icons` for using icons:
     ```bash
     npm install react-icons
     ```

### Usage

1. Replace `API_KEY` with your actual API key in the appropriate component where the IP data is fetched.

   Example:
   ```javascript
   const API_KEY = 'YOUR_API_KEY';
   ```

2. To run the application locally, execute:
   ```bash
   npm start
   ```

3. The app will be available at [http://localhost:3000](http://localhost:3000).

### Features

- Retrieves IP address information such as location, ISP, and coordinates.
- Displays the IP location on a map using `react-map-gl`.
- Uses `axios` to fetch data from the IP lookup API.
- Provides a clean UI with icons from `react-icons`.

### Technologies Used

- **React** for building the user interface.
- **AJV & AJV Keywords** for validating JSON data.
- **Axios** for making API requests.
- **React Map GL** for rendering the map.
- **React Icons** for UI icons.

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

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
