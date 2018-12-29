# Restaurant Website

This fully-fledged React restaurant page was developed to improve my **Redux** and **Redux-Thunk** skills. I used local `json-server` to fetch and post the data. In production mode, I deployed my `json-server` on **Heroku**.

## Dependencies
- react-redux-form
- redux-logger
- react-animation-components
- react-transition-group
- react-router-dom
- prop-types
- font-awesome

## Installation
I used json-server to create a fake local server, so first, you need to install the json server.

- `npm install json-server -g`.

After that you can move the [json-server](https://github.com/gunayanil/restaurant-website/tree/master/json-server) file to any location on your computer.

- Then `npm install` or `yarn install` to install all dependencies when you are in the **application directory.**

Before start the application you need to watch the db.json in json-server file.

-  `json-server --watch db.json -p 3001 -d 2000` when you are in the **json-server directory**.

- Finally, move to the application directory and type `yarn start` or `npm start`

## Technologies/Tools
- React
- Redux
- Redux-Thunk
- Reactstrap(Bootstrap)

## Demo
**Note:** `json-server` was deployed on **Heroku**. Because my application is free, json-server has to sleep for *6 hours* every day.

Also because of Heroku rules for free applications, if the app doesn't receive any traffic in 1 hour, then it will go to sleep. [Kaffeine](http://kaffeine.herokuapp.com) might be a temporary solution to this issue. (I didn't try Kaffeine yet) So, if you really want to make sure that this app works properly, you can follow the directions in installation section and run the app on your **localhost**.

[Visit Live Demo](https://anilgunay.com/redux-restaurant)
