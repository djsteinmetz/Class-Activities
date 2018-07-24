It's time to test your skills in creating databases and tables as you create a database called top_songsDB which will eventually house all of the music data contained within TopSongs.csv

1. Within your database create a table called Top5000 and create columns capable of holding all of the data contained within TopSongs.csv properly.

2. All of your code should be written and saved within a filed called schema.sql so that you can use this same code later should the need ever arise

# HINT: Try to have your table's columns match those within the CSV file as closely as possible or else you may find the next step in this assignment more difficult than it would otherwise be

# BONUS: Create a seeds.sql file that adds the data for the first three songs found within TopSongs.csv to your table

# BONUS: Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it convert the data?

## Students Do: Importing and Working With Big Data (50 mins)

Instructions

Now that we have learned how to import big collections of data into a server, it is time to put this new knowledge to the test by importing all of the data contained within TopSongs.csv into our database.

HINT: Remember, bigger datasets require more time to import properly, so be patient

HINT: If you feel that the import process is taking far too long, feel free to use Top1000Songs.csv instead. We would highly recommend working with the bigger dataset if you can, however.

HINT: Take the downtime you have been given to start on the next part of the activity

With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. For example...

A query which returns all data for songs sung by a specific artist
A query which returns all artists who appear within the top 5000 more than once
A query which returns all data contained within a specific range
A query which searches for a specific song in the top 5000 and returns the data for it
HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL’s documentation to find some of them.

# **Instructions**

Students Do: Two Tables Are Better Than One (60 mins)

* When dealing with big databases, it is very likely that you will have to work with two or more datasets that are related, but which have some degree of separation between them. In this case we have a table of the top 5000 songs and a table of the top 3000 albums.


* It is your task to take these two large sets of data and come up with a method to join them together in order to figure out if a given artist’s song and album made it into the charts at the time of their release.

 * HINT: This can be done in a couple different ways using external data as well, but you do have all of the data you need within your database to find the correlations. Give your methods some though before having to rely upon external info.

 * HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

* Once you have managed to successfully bring the two datasets together, start making queries:

* A query which returns all data for songs (AND ALBUM) sung by a specific artist 
* A query which returns all artists (AND ALBUM) who appear within the top 5000 more than once
* A query which returns all data for songs on a specific album
* A query that ranks the top 10 Albums by AMOUNT of songs on it
* BONUS: Other Queries???
---