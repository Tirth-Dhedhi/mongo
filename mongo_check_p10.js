// verify p10 delete
var oldMoviesCount = db.movies.countDocuments({ "year": { $lt: 1970 } });
var totalCount = db.movies.countDocuments({});

if (oldMoviesCount === 0 && totalCount === 4) {
    print("PASS: Problem 10 removed all documents released prior to 1970.");
} else {
    print("FAIL: Problem 10 did not delete the correct documents.");
}
