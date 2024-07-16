# Netflix Clone

Welcome to the Netflix Clone project! This is a full-featured clone of Netflix built with React, Firebase, Chakra UI, React Icons, Swiper, and Context API. Users can log in with their Google accounts, search for movies, view movie details, add movies to their watchlist, and explore top movies and shows. You can check out the live demo [here](https://netflixclone.liara.run/).


## Features

- **User Authentication**: Login with Google account.
- **Watchlist**: Add and manage your favorite movies in a personal watchlist.
- **Search**: Search for movies and TV shows.
- **Movie Detail Page**: View detailed information about movies.
- **Top Movies and Shows**: Explore the top-rated movies and TV shows.
- **Responsive Design**: Fully responsive design using Chakra UI.   

## Tech Stack

- **React**: Front-end library for building user interfaces.
- **Firebase**: Backend-as-a-Service for authentication and database.
- **Chakra UI**: Component library for building accessible and responsive UIs.
- **React Icons**: Collection of popular icons for React projects.
- **Swiper**: Modern slider component for React.
- **Context API**: State management solution for React applications.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   https://github.com/RezaAzarnia/Netflix-Clone.git
   cd netflix-clone
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Set up Firebase:

Create a Firebase project in the Firebase console.

Enable Authentication and Firestore Database.

Add a new web app to your Firebase project and copy the Firebase config object.

Create a .env file in the root of the project and add your Firebase config:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Usage
To start the development server, run:

bash
Copy code
npm start
# or
yarn start
Open http://localhost:3000 to view it in the browser.

Building for Production
To create a production build, run:

bash
Copy code
npm run build
# or
yarn build
The build artifacts will be stored in the build/ directory.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE for more information.

