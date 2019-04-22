# Introduction

This is a website for second-hand groceries exchange. The website pages include home, items, login & register, and upload item.
Users will be directed to home page for login or sign up before browsing the available items.
After logging in, users can browse items or post their own items to exchange something else or simply give it away.

# Each Parts

## HTML
Most of html files have been completed. For some specific pages such as the item page (display different category) and cart page, we are trying to implement React single page framework so as to reuse the template, and Javascript code will be required to request item details from server side.

## CSS
We use Bootstrap in some of our pages. It helps us to organize the grids much easier.

TODO:

- Most of the pages didn't has a responsive design. We might add it in after we match all the requirments.

## JS
We use React.JS framework to organize our js interaction. These interactions include button clicks, upload data into database, and insert and display the data from the database to the client page.

TODO:

- create a React single page and use React.Js to insert the data into the HTML file in order to display items from different categories.

## PNG
Most of the images are stored in png, including the icons and logo.

## SVG
We haven't done any SVG file yet.

## Server
All the server related code are developed in node.js. This server is able to respond to different get/post requests from the client side and adopts "express" module to organize different routes.
Following routes are completed and working as expected,

- server_loginRoute.js -- This route handles the user login requests. The submitted information will be compared with     existing members in the database. If no matching user data found in the database or the password is incorrect, the server will send back status code 400 or 401 respectively.
- server_registerRoute.js -- This route handles the registration requests. If submitted information does not conflict with any existing user, the new member data will be inserted into the database.
- server_UploadItemRoute.js -- This route handles the newly-created post requests. It sotres the item information into the dataabse, renames and saves the image file uploaded by user into folder "uploadpics"

server_mysql.js is a customized module which builds, keeps and shares the database connection between different routes.

TODO:

- Respond clients' requests of displaying available items of specific categories.

## Database
This project uses mysql to store/access data in database. The current database contains all the tables required in this project is named "projectdb". The login information is hardcoded in server_mysql.js.

## Dynamic pages
TODO: 

- Adding the features on browse page to requests different items information from the server and displays accordingly.

