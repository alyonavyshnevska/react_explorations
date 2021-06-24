### A simple task manager 

![demo](https://github.com/alyonavyshnevska/react_explorations/blob/master/demo/demo.gif?raw=true)

Tools used:

- React library
- React-router-dom
- json server to simulate backend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


--------

### Mock Backend

For mock backend I use 'json server', which allows me to create REST API with my own data.
The way ot works:

1. Install [json-server](https://github.com/typicode/json-server)
1. Create a db.json file with some data
2. Start JSON Server
3. make POST, PUT, PATCH or DELETE requests and changes will be automatically and safely saved to db.json using [lowdb](https://github.com/typicode/lowdb)

----------

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
