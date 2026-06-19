const express = require('express');
const tweetsService = require("../services/tweetsService");

const validation = require("../utils/middlewares/createValidationMiddleware");
const { createTweetSchema, tweetIdSchema, updateTweetSchema } = require("../utils/schemas/tweetsSchemas");

const router = express.Router();

router.get("/", getTweets);
router.post("/", validation({ body: createTweetSchema }), createTweet);
router.get("/:tweetId", validation({ params: tweetIdSchema }), getTweet);
router.delete("/:tweetId", validation({ params: tweetIdSchema }), deleteTweet);
router.patch(
    "/:tweetId",
    validation({ params: tweetIdSchema }),
    validation({ body: updateTweetSchema }),
    updateTweet
);

module.exports = router;

async function getTweets(req, res, next) {
    try {
        const tweets = await tweetsService.getTweets();
        res.status(200).json(tweets);
    } catch (error) {
        next(error);
    }
}

async function createTweet(req, res, next) {
    try {
        const tweetData = req.body;
        const tweet = await tweetsService.createTweet(tweetData);
        res.status(201).json(tweet);
    } catch (error) {
        next(error);
    }
}

async function getTweet(req, res, next) {
    try {
        const { tweetId } = req.params;
        const tweet = await tweetsService.getTweet(tweetId);
        if (!tweet) {
            return res.status(404).json({ message: `Tweet with id ${tweetId} not found` });
        }
        res.status(200).json(tweet);
    } catch (error) {
        next(error);
    }
}

async function deleteTweet(req, res, next) {
    try {
        const { tweetId } = req.params;
        const tweetRows = await tweetsService.deleteTweet(tweetId);
        if (tweetRows === 0) {
            return res.status(404).json({ message: `Tweet with id ${tweetId} not found` });
        }
        res.status(200).json({ message: `Tweet with id ${tweetId} deleted successfully` });
    } catch (error) {
        next(error);
    }
}

async function updateTweet(req, res, next) {
    try {
        const { tweetId } = req.params;
        const { content } = req.body;
        const updateRows = await tweetsService.updateTweet(tweetId, content);
        if (updateRows === 0) {
            return res.status(404).json({ message: `Tweet with id ${tweetId} not found` });
        }
        res.status(200).json({ message: `Tweet with id ${tweetId} updated successfully` });
    } catch (error) {
        next(error);
    }
}