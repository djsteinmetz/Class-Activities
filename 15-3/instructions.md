**INSTRUCTIONS**

 The goal of this exercise is to create a Post model using Sequelize.

 1) Open the folder slacked out to you, run `npm install`

 2) Create a new MySQL database and name it `blogger`. Don’t create any tables.

 3) Open the `config` folder and update the `config.json` file’s `development` object to match your own local MySQL database.

 4) Go to the `models` folder and open the `post.js` file.

 5) Create a Sequelize `Post` model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING.
 (<http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types>)

 6) To check if this worked, run `node server.js` in your terminal. Then open MySQL Workbench to check if a Posts table has been created.

 **INSTRUCTIONS**

The goal of this exercise is to add Sequelize CRUD methods inside each route specified in the comments in the api-routes.js file.

 1) Open the folder slacked out to you, run `npm install`

 2) Open the `config` folder and update the `config.json` file’s `development` object to match your own local MySQL database.

 3) Navigate to the `api-routes.js` file inside of the `routes` folder.

 4) Fill in each route with the code described in the comments to add each CRUD action.

* We can test our code works by checking to see if we have the following functionality (recommended order):

 * Create a new post
 * Get a list of all posts
   * Get a list of all posts of a category
   * Edit a post
   * Delete a post

* **If things aren’t working as expected, check to see if any errors logged to the terminal.**