## MongoDB Movie-Rating CRUD Exercises

You've started a new movie-rating website, and you've been collecting data on reviewers' ratings of various movies. Instead of a relational database, you are using MongoDB to store this data in a single, flexible `movies` collection.

Before starting, explore the raw test documents inside the repository file named `movies.js` to see how the documents, nested fields, and arrays are structured.

For each problem, you are to write a MongoDB command. Your MongoDB command must be contained in the file `mongo_p?.js` where `?` is the problem number, so for example, the command for problem 1 must be contained in the file `mongo_p?.js`.

Your solutions will be tested by executing them inside `mongosh` against a live test database. The grading environment will run:

```bash
mongosh load_movies.js mongo_p?.js cleanup.js
```

* `load_movies.js`: Automatically resets your environment and seeds the database fresh with the contents of `movies.js`.
* `mongo_p?.js`: Your specific assignment solution file.
* `cleanup.js`: Automatically drops the test database right after execution to keep your workspace clean.

### Codespaces setup

You can get an cloud environment to do these exercises using Codespaces so that you do not need to install any software or set up your own environment.  To use Codespaces, open the GitHub repository in your web browser, click on the **Code** button and select the **Codespaces** tab, then click the **Create codespace on main** button.  This will set up a cloud environment that you can interact with using the VS Code Integrated Development Environment (IDE) .  If you have already created a Codespace previously for this assignment, you can simply click on the name of the Codespace under "On current branch".

### Problem 1

Find all documents for movies directed by Steven Spielberg. 

### Problem 2

Find all documents for movies that belong to the "Action" genre and were released in the year 2008. 

### Problem 3

Find all documents for movies that have no ratings at all. 

### Problem 4

Find all documents for movies that belong to the "Sci-Fi" genre. 

### Problem 5

Find all documents for movies that have received a 4-star rating anywhere inside their reviews.

### Problem 6

Find all documents for movies that contain a review written by "Sarah Jenkins" where she gave the movie exactly 5 stars. 

### Problem 7

Insert a new movie into the collection with the following details:
* **Title**: Interstellar
* **Year**: 2014
* **Director**: Christopher Nolan
* **Genres**: Sci-Fi, Drama
* **Ratings**: (Leave this as an empty array `[]` for now)

### Problem 8

The director's name for the movie Avatar was accidentally left blank in our database. Update the document where the title is "Avatar" to set its `details.director` to "James Cameron". 

### Problem 9

A mistake was found in the data for the movie E.T. the Extra-Terrestrial. The first review in its ratings array (written by Sarah Jenkins) should have given the movie 4 stars instead of 3. Update this document to change that specific rating's `stars` field to 4.

### Problem 10

Delete all movies from the collection that were released before the year 1970.

### Submission

Run the following commands in the Terminal in VS Code to submit your code:

```
git add .
git commit -m "Submission"
git push
```

**Do not forget to submit your code!**  After submission, you can see your grade by opening the GitHub repository in your web browser and clicking on the **Actions** tab.  You may resubmit as many times as you like before the deadline.

