const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/full-mern-stack-video");

app.post("/api/register", async (req, res) => {
	console.log(req.body);
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		await User.create({
			name: req.body.name,
			password: hashedPassword,
			rooms: [],
		});
		res.json({ status: "ok" });
	} catch (err) {
		res.json({ status: "error", error: "Username already exists!" });
	}
});

app.post("/api/login", async (req, res) => {
	const user = await User.findOne({
		name: req.body.name,
	});

	if (!user) {
		return { status: "error", error: "Username does not exist!" };
	}

	const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				rooms: user.rooms,
			},
			"secret123"
		);

		return res.json({ status: "ok", user: token });
	} else {
		return res.json({ status: "error", user: false });
	}
});
