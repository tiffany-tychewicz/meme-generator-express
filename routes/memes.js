const express = require("express");
const router = express.Router();
const Meme = require("../models/meme");

router.get("/", async (req, res) => {
	const memes = await Meme.find();
	res.json(memes);
});

router.post("/", async (req, res) => {
	try {
		const meme = new Meme({ ...req.body });
		await meme.save();

		res.json(meme);
	} catch (err) {
		res.status(500).json({ message: err.toString() });
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const meme = await Meme.findByIdAndUpdate(
			id,
			{ ...req.body },
			{ new: true, runValidators: true }
		);
		res.json(meme);
	} catch (err) {
		res.status(500).json({ message: err.toString() });
	}
});

module.exports = router;
