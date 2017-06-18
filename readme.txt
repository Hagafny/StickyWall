# Sticky Wall

When we got the assignments and I saw what we were asked to do I wanted to create
something cool I might share with my firends one day. Plus, I recently starterd
teaching myself React so I thought this is another chance to improve by creating something.

Sticky wall is a place where friends can socially leave notes for their other friends to see.

To get the app started use "npm install" followed by "npm run build" and then "npm start"

You then access the app through http://localhost:3000/ 
(I knew you wanted to go to /public/hello.html but since I see potential for this to become a really useful thing, 
I decided to make it more production ready - I hope you understand)

You will get to the HomePage where you need to register a user via the Sign Up form
and after successfully registering a user, use those credentials to log in via the Login form.
(Please use only 1 word as your user name. E.G: RonHagafny)

Once you are logged in you'd be able to see some sticky notes and will be able to Add some yourself
via the Green plus button at the top right.

Notice that you can Edit and Delete your own notes but not other people's notes. (More on that below)
Also, for each note you can click the "more info" button to go to his own note Page - this is for the future when we have more information on each note

After the cookie expired, you will automatically be redirected to the login page.


What was hard doing the EX:
I decided to go overboard as I usually do which ended up taking 5 days without leaving the house.
I decided to create my own Database using .json files to save time but in retrospect it ended up being 
far more complicated than implementing some sort of NoSQL DB since I decided to implement a JOIN functionallity between the users and the notes.
Also, I've decided to have everyone Promise based to get better with promises which also had its learning curve

Overall I didn't have lots of experience with Authentication so being able to experiment with that and writing my own middleware was a good challange

How the code actually works

# Server Side:

server.js is our main entry point but the interesting assignments stuff happen in the routes folder.
Notice that inside the item router and items router I added my own middleware - "uidCookieMiddleware" 
This is where all the cookie logic comes into play.

I created several layers in the server: Routes, Logic and Data
* Routes - In charge of providing the endpoints for the API and passing the request to the LogicServices
* Logic - The logic services connect between the Routes and the Data, performing extra logic opertions if need be (For example, this is where I implement the JOIN functionallity between Note and userId)
* Data - DataService access the DB which is written inside the DB folder and get it back for the logicServices to manipulate

# Client Side:

Written in React, Jquery and Bootstrap.
index.jsx is our main entry point that is used by webpack to bundle everything up.
inside the modules folder there's an Auth.js module that is incharge of everything Cookie related.

My main components were the Board and the Note components. I tried dividing them to components and containers 
as much as I could.

You won't be able to click on Edit and Remove buttons if the note is not written by you.

I hope you enjoy and have fun!

~ Ron Hagafny