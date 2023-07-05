# NASA Daily Image Viewer- MYM

## Description

This project is a Single Page Application (SPA) that fetches the Astronmy Picture of the Day from the Nasa API  and displays them to the users. Users  have to sign up and log in to the application to view the current day's image. The project utilizes MongoDB to persist user account credentials, while ExpressJS and NodeJS handle the routes and server communication. The application is deployed using Vercel and also offers Google OAuth as an additional option for user authentication.




## Technologies Used

- **Astronomy Picture of the Day API:** The fetch request is made to NASA's API to retrieve the daily image. The API provides a vast collection of captivating and educational images.

- **MongoDB:** User account credentials are stored securely in a MongoDB database. MongoDB's flexibility and scalability make it an ideal choice for persisting user data.

- **ExpressJS & NodeJS:** The server-side of the application is built using ExpressJS and NodeJS. They handle routes and enable server communication to deliver data to the client-side.

- **Vercel:** The application is deployed using Vercel, a platform that offers seamless deployment for frontend applications. It ensures that the SPA is accessible to users worldwide.

- **Google OAuth:** Google OAuth is integrated into the application, allowing users to sign up and log in using their Google accounts. This provides a convenient and secure authentication option.

## Deployment

The NASA Daily Image Viewer application is deployed using Vercel. It was slightly trickly to get this set-up but the deployed version of the application can be accessed at (https://mym-nasa-proj.vercel.app/).



## Usage

1. Upon accessing the application, users will be greeted with the login page.
2. Users can sign up for an account using the traditional sign-up form or choose to sign in using their Google accounts.
3. After signing in, users will be redirected to the main page where they can view the image of the day fetched from NASA's Astronomy Picture of the Day.
4. If a user logs out, they will be redirected to the login page and will need to sign in again to access the application.

Feel free to explore the application and I would like to say I enjoyed the challenge from MYM!

