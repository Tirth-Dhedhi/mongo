// verify p7 insert
var movie = db.movies.findOne({ "title": "Interstellar" });

if (movie && movie.year === 2014 && movie.details.director === "Christopher Nolan" && movie.ratings.length === 0) {
    print("PASS: Problem 7 successfully inserted the new document.");
} else {
    print("FAIL: Problem 7 document missing or properties do not match assignment requirements.");
}
