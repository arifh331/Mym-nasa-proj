# NASA Daily Image Viewer- MYM

## Description

This project is a Single Page Application (SPA) that fetches the Astronmy Picture of the Day from the Nasa API  and displays them to the users. Users  have to sign up and log in to the application to view the current day's image. The project utilizes MongoDB to persist user account credentials, while ExpressJS and NodeJS handle the routes and server communication. The application is deployed using Vercel and also offers Google OAuth as an additional option for user authentication.

## Features

1. **NASA Daily Images:** The SPA makes a fetch request to NASA's Multimedia Image Gallery API to retrieve the image of the day. Each day, a new image is displayed to the users, providing an exciting and educational experience.

2. **User Authentication:** Users can create an account by signing up and then log in to access the application's features. The account credentials are securely stored in MongoDB for future logins.

3. **Secure Routes:** The ExpressJS server handles the routes, ensuring that only authenticated users can access certain parts of the application. Unauthorized users are redirected to the login page.

4. **Google OAuth:** In addition to traditional sign-up and login options, the application supports Google OAuth for seamless authentication. Users can choose to sign in using their Google accounts, providing a convenient and secure login method.

5. **Persistent User Data:** The application uses MongoDB to store user account information securely. User credentials are encrypted to protect sensitive data.



## Technologies Used

- **Astronomy Picture of the Day API:** The fetch request is made to NASA's API to retrieve the daily image. The API provides a vast collection of captivating and educational images.

- **MongoDB:** User account credentials are stored securely in a MongoDB database. MongoDB's flexibility and scalability make it an ideal choice for persisting user data.

- **ExpressJS & NodeJS:** The server-side of the application is built using ExpressJS and NodeJS. They handle routes and enable server communication to deliver data to the client-side.

- **Vercel:** The application is deployed using Vercel, a platform that offers seamless deployment for frontend applications. It ensures that the SPA is accessible to users worldwide.

- **Google OAuth:** Google OAuth is integrated into the application, allowing users to sign up and log in using their Google accounts. This provides a convenient and secure authentication option.

## Deployment

The NASA Daily Image Viewer application is deployed using Vercel. It was slightly trickly to get this set-up but the deployed version of the application can be accessed at [[Here](https://mym-nasa-proj.vercel.app/)](application-url).

## Installation and Setup

To set up the project locally, follow these steps:

1. Clone the project repository from [repository-url](repository-url).
2. Install Node.js and MongoDB if they are not already installed on your system.
3. Open a terminal and navigate to the project directory.
4. Run `npm install` to install the project dependencies.
5. Create a MongoDB database and update the MongoDB connection details in the project's configuration files.
6. Obtain API keys for NASA's Multimedia Image Gallery and Google OAuth. Update the respective configuration files with the API keys.
7. Run `npm start` to start the ExpressJS server.
8. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Upon accessing the application, users will be greeted with the login page.
2. Users can sign up for an account using the traditional sign-up form or choose to sign in using their Google accounts.
3. After signing in, users will be redirected to the main page where they can view the image of the day fetched from NASA's Multimedia Image Gallery.
4. Users can navigate through previous days' images using navigation controls.
5. If a user logs out, they will be redirected to the login page and will need to sign in again to access the application.

Feel free to explore the application and enjoy the daily images from NASA!

