const connection = require('../lib/connect');

module.exports = {
    getTweets,
    createTweet,
    getTweet,
    deleteTweet,
    updateTweet,
}

async function getTweets() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * from tweets";
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

async function createTweet(tweetData) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO tweets SET ?";
        connection.query(query, tweetData, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({ tweetId: results.insertId, ...tweetData });
            }
        })
    })
};

async function getTweet(tweetId) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * from tweets WHERE tweetId = ?";
        connection.query(query, tweetId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        })
    })
};

async function deleteTweet(tweetId) {
    return new Promise((resolve, reject) => {
        const query = "DELETE from tweets WHERE tweetId = ?";
        connection.query(query, tweetId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        })
    })
};

async function updateTweet(tweetId, content) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE tweets SET content = ? WHERE tweetId = ?";
        connection.query(query, [content, tweetId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        })
    })
};


