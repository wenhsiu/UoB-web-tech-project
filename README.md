# Introduction
@authors: ny18270, ip18256

The website we built in this project is like an online flea market that users can post their unwanted stuff in exchange for other items. All users are required to register as a member first, and all members have to login so that they can start posting the items they’d like to exchange.

# Development

## Back-End Development

### Server
To develop a website like this with relatively large scale could hardly organize the code in server since the routes defined to response different requests from client site could be in a considerable number. We used Node.js as our back-end developing framework, it provides a package manager, npm, that could easily organize the packages we used in the project. Additionally, we chose Express.js, a framework in Node.js to keep the code clean and nitty. By defining the routes in separated files also makes the maintenance much easier.

### Database
This project uses mysql to store/access data in database. This database contains three tables hosting member information, item information and item types information respectively.
And extra folder “uploadpics”, which contains the item pictures users upload, are considered as part pf the database.

## Front-End Development

### HTML & JS
Since we chose React,js, a JavaScript library, as our developing language of user interface. All the content in HTML <body> were built in separated JS files and using render function to return the body content. In addition, React uses JFX language, so that while rendering the content, we could use nearly the same HTML syntax, as shows in the following image. Thus, it provides a more straightforward and flexible development and design. Furthermore, we could render the same <header> in each pages without duplicating codes.

Using JavaScript made us easier to handle the client-side interaction, including button clicking, text typing, uploading image file, login cookie and so on. These functions could be seen in our entire project, especially in upload item page.

### CSS
Bootstrap, a CSS framework and grid system, is used in this project. It provides several build-in classes that developers can import directly, and different classes offer different component designs. Apart from Bootstrap, we also customized our own CSS files to organize the layout and website style. Additionally, we added Responsive Web Design in our project. By using @media query, we could have design out CSS codes depending on different width of screen.

### Dynamic pages
Since our project is an online flea market, it is necessary to list all the items that are posted by users and display by categories. The item-browsing pages are dynamic. These pages hosting different parameters, such as category Id and item Id, to the server, so that server can query or update information to database accordingly, and response the requests from clients.

## Extension

### Cookie and Login
Based on the design of our website, users are required to login or register first so that they can post items online. To keep tracking the user login information, we added cookies in the login and register functions. Once the login/register details are verified, the username will be put into cookies and stored in the web browser. If the user tries to post items without login, our website will redirect the user to Login Page.

### Single-Page
One of the reasons that we chose React.js as our client-side JavaScript library is that it provides an easy way to create its own router which could build a single-page website. We tried to use it in our project to have the same header but different content. However, we failed to build the page during importing reat-router-dom to the js files. We are not sure if the reason we failed was that we didn’t initiate our project properly. We end up separated the HTML files into main page, browse page, and item page and insert the same header.js script.