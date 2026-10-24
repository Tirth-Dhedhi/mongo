db = db.getSiblingDB('test_movies');
db.movies.drop();
load('movies.js');
db.movies.insertMany(movies);

const originalFind = db.movies.find;
db.movies.find = function(...args) {
    const cursor = originalFind.apply(this, args);
    printjson(cursor.toArray());
    return cursor; 
};
