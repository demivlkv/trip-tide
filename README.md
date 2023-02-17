# Trip Tide
The purpose of this project was to build a MERN + GraphQL stack one-stop shop application for travel enthusiasts (similar to Tripadvisor). The original intent was to let users search for destinations, search/book flights, and add cities & attractions into a 'saved places' list. In addition, users could sign up and post about their future travel plans, write about their travel experiences, and even ask for travel tips from other users - which is a working functionality in the app in its current state.

<p align="center">:sparkles: <a href="https://trip-tide.herokuapp.com/">Visit deployed application here</a> :sparkles:</p>

![screenshot: homepage](/../main/client/src/assets/screenshots/home.png)

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Technologies Used
- [ReactJS](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/docs/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) + [Apollo Client](https://www.apollographql.com/docs/react/)
- [Express.js](https://expressjs.com/)
- JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- HTML
- npm packages:
    - [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
    - [React Router](https://www.npmjs.com/package/react-router-dom)
    - [concurrently](https://www.npmjs.com/package/concurrently)
    - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) + [jwt-decode](https://github.com/auth0/jwt-decode)
    - [bcrypt](https://www.npmjs.com/package/bcrypt)
    - [dotenv](https://github.com/motdotla/dotenv#readme)
    - [moment.js](https://momentjs.com/)
    - [Feather Icons](https://feathericons.com/) + [Heroicons](https://heroicons.com/)
    - [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)

## Installation
1. Install [NodeJS](https://nodejs.org/en/) in your operating system
2. Install ***all*** of the dependencies listed above via command-line in terminal by entering `npm install`
3. Create a `.env` file
4. Enter a secret as a `SECRET` variable in the `.env` file
5. Retrieve an API key from [Google Cloud](https://console.cloud.google.com/), and enable the Maps JavaScript API. Then enter the API key for the variable `REACT_APP_GOOGLEMAPS_API_KEY`.
6. To compile the development build of the website, execute the following command in the root:
```
npm run develop
```
7. Compile a production build when the website is complete by running:
```
npm run build
```

## Usage
Enter `npm run develop` at the root directory in terminal. This will start up the React app and initialize the back-end at the same time. The application will open automatically in your browser. Navigating through the application is fairly straight-forward with the navigation links at the top of the screen. Happy travels!

![application demo](/../main/client/src/assets/screenshots/trip-tide.gif)

## Screenshots
![screenshot: homepage](/../main/client/src/assets/screenshots/home.png)

![screenshot: signup](/../main/client/src/assets/screenshots/signup.png)

![screenshot: blog](/../main/client/src/assets/screenshots/blog.png)

![screenshot: profile](/../main/client/src/assets/screenshots/profile.png)

## Contributing
I welcome any contributions for this repository, especially ones relevant to the current issues that this project currently has. Please feel free to submit a pull request, or even contact me via [e-mail](mailto:hayashi.demi@gmail.com).

## Questions
For any questions about this repository, please contact me at [hayashi.demi@gmail.com](mailto:hayashi.demi@gmail.com).

Visit my GitHub to view more of my works at [github.com/demivlkv](https://github.com/demivlkv)!
