# Invoice generator for sole proprietorship (enkeltpersonforetak)

# Features 

Current features:
- Total revenue, added tax costs (MVA) and tax costs

![Alt Text](/img/Nokkeltall.PNG)


- Creating and editing hires

![Alt Text](/img/Oppdrag.PNG)

- Creating invoice pdf

![Alt Text](/img/Faktura.PNG)

Areas of improvement:
- Adding functionality checking if customer has paid - api with your bank
- Sending emails from the react frontend

# In order to run app

Everything is ran locally on PC.

In main folder run npm install to install all dependencies for react app.

In backend folder run npm install to install all dependencies for backend server.

Initalize the following on three different command lines:
- For running frontend react app - in the project directory: npm start
- For running backend API - in the backend directory: node index.js
- For running database - download mongoDB and run command: mongod

# React APP - Frontend

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

# MongoDB

Install for free from mongodb.com

