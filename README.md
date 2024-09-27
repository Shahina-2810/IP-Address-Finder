# IP Finder App

A simple IP address finder application built using React. This app retrieves IP address details and displays them on a map.

![Screenshot 2024-09-25 085548](https://github.com/user-attachments/assets/48e65c4f-6405-49e0-9b2a-5a63d2be8e99)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- [Node.js](https://nodejs.org/) and npm must be installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Shahina-2810/IP-Address-Finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ip-finder
   ```
3. Install the required dependencies:
   ```bash
   npm install ajv@latest ajv-keywords@latest
   npm install axios
   npm install react-map-gl
   npm install react-icons
   ```

### Running the Application

1. To run the application locally, use:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Usage

- This application uses an external API to retrieve IP address details.
- Don't forget to replace `API_KEY` with your actual API key in the relevant component where API requests are made.

Example:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

### Features

- Displays IP address information such as location, ISP, and coordinates.
- Shows the IP address location on a map.

### Technologies Used

- React
- Axios
- React Map GL
- AJV (JSON Schema validation)
- React Icons

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
