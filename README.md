# Getting Started with Learn React and MSW

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The purpose of this app is to learn React.

It uses [MSW](https://mswjs.io/) for mocking and testing purposes.

It demonstrates the use of [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) with typescript and unit tests. 

It also has some form validation and a number of other features. 

I've also tried to be mindful of Kent C Dodds Testing Trophy approach [Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)

I have discovered some limitations of CSS Modules with a dynamic active class so have reverted some of the CSS to regular CSS, there's probably a solution to this but I don't know it yet. Normally I would use SCSS for CSS but the create react app doesn't recommend this approach. 

Although I have learnt how to lazy load components I haven't done this because at the time it was an experimental feature, neither have I used Suspense for the same reason.

## Running the App

In the command prompt or terminal clone the app

#### `git clone https://github.com/cherry15/cc2022react.git`

##### `cd cc2022react`

### `npm i`

You will also need to initialise MSW, in the project directory run:

### `npx msw init public/ --save`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
