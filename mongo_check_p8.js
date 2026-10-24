// verify p8 update field
var avatar = db.movies.findOne({ "title": "Avatar" });

if (avatar && avatar.details.director === "James Cameron") {
    print("PASS: Problem 8 successfully updated Avatar's nested director field.");
} else {
    print("FAIL: Problem 8 did not update the director properly.");
}
