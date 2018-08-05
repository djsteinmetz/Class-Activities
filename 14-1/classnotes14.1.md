# Node Express Handlebars

### Poll
https://pollev.com/chriswoolcot778

### Website
http://handlebarsjs.com/

###  Students Do: Express Calculator (20 minutes)

Instructions

You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.

There are four operation values which a user may use: addition, subtraction, multiplication, and division.

When the route is hit, your browser should display the result of the math operation.

For example, when the user goes to the url http://localhost:3000/add/10/1, the page should display 11.

### Seinfeld Application (20 minutes)

Instructions

Create a seinfeld_db database with an actors table.

The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
Add in four actors with different names, coolness_points, and attitudes.

Create a Node Application with Express, MySQL, and Body Parser with three Express routes.

    * Create a `/cast` route that will display all the actors and their data ordered by their id's.

    * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

    * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.

### Eat-Da-Burger!

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](burger_demo.mp4).

### Partners Do: Explaining Lunches Application (10 minutes)

Using the zipped version of 04-HandlebarsLunch  open it up, and to those  around you, explain how the code functions. Once you are finished going over main and index, look into all-lunches in an attempt to figure out how the code in there works as well.

### 11. Partners Do: Ben and Jerry's App

  * In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.
    
    
    ```
    var icecreams = [
      {name: 'vanilla', price: 10, awesomeness: 3},
      {name: 'chocolate', price: 4, awesomeness: 8},
      {name: 'banana', price: 1, awesomeness: 1},
      {name: 'greentea', price: 5, awesomeness: 7},
      {name: 'jawbreakers', price: 6, awesomeness: 2},
    ];
    ```
    
    
  * Do not use MySQL for this assignment! Use the `icecreams` variable above as your data. Add the variable to your `server.js` file.

  * Using handlebars and express, create a route called `/icecream/:name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

  * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.






