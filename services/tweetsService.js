const tweetsRepository = require('../repositories/tweetsRepository.js');

module.exports = {
    getTweets,
    createTweet,
    getTweet,
    deleteTweet,
    updateTweet,
}

async function getTweets() {
    return await tweetsRepository.getTweets();
}

async function createTweet(tweetData) {
    return await tweetsRepository.createTweet(tweetData);
}

async function getTweet(tweetId) {
    return await tweetsRepository.getTweet(tweetId);
}

async function deleteTweet(tweetId) {
    return await tweetsRepository.deleteTweet(tweetId);
}

async function updateTweet(tweetId, content) {
    return await tweetsRepository.updateTweet(tweetId, content);
}