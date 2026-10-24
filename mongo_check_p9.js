// verify p9 update inside an array index
var et = db.movies.findOne({ "title": "E.T. the Extra-Terrestrial" });

if (et && et.ratings && et.ratings[0]) {
    // Check if the first review's stars were changed to 4
    // and make sure the reviewer name and other elements weren't wiped out
    if (et.ratings[0].stars === 4 && et.ratings[0].reviewerName === "Sarah Jenkins") {
        print("PASS: Problem 9 successfully updated the nested array element's stars field.");
    } else {
        print("FAIL: Problem 9 did not update the stars field to 4, or data was corrupted.");
    }
} else {
    print("FAIL: Problem 9 could not find the target movie or its ratings array.");
}
