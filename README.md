# Introduction

This is a website for second-hand groceries exchange. The website pages include home, items, login & register, and upload item.
Users will be directed to home page for login or sign up before browsing the available items.
# Each Parts

## HTML

Most of our pages have their own html files. However, for the item page (display different category) and cart page, in order not to duplicate the same header in each HTML file, we plan to use react single page to build those pages.

- Already Done
1. Entrance page: The first page for our website. User could choose to login or just browser the items.
2. Login & Register pages: 

- Not Yet
1. React single page: use the same HTML format to display items in different categories.
2. Link the data in database and display on the HTML pages


## CSS

## JS

We use React framework to organize our js interaction.

## PNG

Most of the images are stored in png, including the icons and logo.

## SVG

Haven't done any yet.

## Server
All the server related code are developed in node.js. This server is able to respond to different get/post requests from the client side and adopts "express" module to organize different routes.
Following routes are completed and working as expected,

1. server_loginRoute.js -- This route handles the user login requests. The submitted information will be compared with     existing members in the database. If no matching user data found in the database or the password is incorrect, the server will send back status code 400 or 401 respectively.
2. server_registerRoute.js -- This route handles the registration requests. If submitted information does not conflict with any existing user, the new member data will be inserted into the database.
3. server_UploadItemRoute.js -- This route handles the newly-created post requests. It sotres the item information into the dataabse, renames and saves the image file uploaded by user into folder "uploadpics"

server_mysql.js is a customized module which builds, keeps and shares the database connection between different routes.

TODO:
1. Respond clients' requests of displaying available items of specific categories.

## Database
This project uses mysql to store/access data in database. The current database contains all the tables required in this project is named "projectdb". The login information is hardcoded in server_mysql.js.

## Dynamic pages</li>
TODO: 
1. Adding the features on browse page to requests different items information from the server and displays accordingly.

