import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/App.css";

// components
import LeftHeader from "./components/LeftHeader";
import LeftContent from "./components/LeftContent";
import RightHeader from "./components/RightHeader";

import "./styles/RightContent.css";
import { BsFillEmojiSunglassesFill as EmojiIcon } from "react-icons/bs";
function RightContent(props) {
	const iconSize = 25;
	const horizontalMargin = 15;

	return (
		<div id="right-content">
			<div id="message-area"></div>
			<div id="minput-container">
				<EmojiIcon
					style={{
						color: "var(--button-white)",
						marginRight: horizontalMargin,
						marginLeft: horizontalMargin,
						fontSize: iconSize,
					}}
					className="left-header-icon"
				/>
				<input placeholder="Enter a message" id="minput" type="text" name="message" />
			</div>
		</div>
	);
}

function LeftPane(props) {
	return (
		<div id="left">
			<LeftHeader />
			<LeftContent />
		</div>
	);
}

function RightPane(props) {
	return (
		<div id="right">
			<RightHeader />
			<RightContent />
		</div>
	);
}

function Home(props) {
	return (
		<div id="root">
			<LeftPane />
			<RightPane />
		</div>
	);
}

// login
import "./styles/StartChatting.css";
function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const questionClick = () => {
		navigate("/register");
	};

	const handleSubmit = (event) => {
		const usernameRegex = /^(?=.*[@\-_])[A-Za-z@\-_\d]{5,}$/;
		const passwordRegex = /^(?:.|\s){3,}$/;

		console.log(typeof usernameRegex);

		event.preventDefault(); // ensure no redirection

		// check values if values are legit
		if (usernameRegex.test(username) && passwordRegex.test(password)) {
			console.log(`username: ${username}\npassword: ${password}`);
			console.log("success!");
		} else {
			setPassword("");
		}

		console.log("user tried to login!");
	};

	return (
		<div id="login-root">
			<div className="container" id="login-container">
				<div id="heading">
					<h3>START CHATTING</h3>
				</div>
				<form onSubmit={handleSubmit} id="form-container">
					<div className="sub-container" id="input-container">
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							pattern="^(?=.*[@\-_])[A-Za-z@\-_\d]{5,}$"
							title="5 characters minimum. Must contain only alphabets & digits and one or more special characters from: [@ - _]"
							className="input"
							id="user"
							type="text"
							placeholder="Username"
						/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							pattern="^(?:.|\s){3,}$"
							title="3 characters minimum."
							required
							className="input"
							id="pass"
							type="password"
							placeholder="Password"
						/>
					</div>

					<div className="sub-container" id="proceed-container">
						<button className="action-button" id="login">
							LOGIN
						</button>
						<p onClick={questionClick} className="question">
							Don't have an account yet?
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

// signup
function Register(props) {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const questionClick = () => {
		navigate("/login");
	};

	const handlSubmit = (event) => {
		const usernameRegex = /^(?=.*[@\-_])[A-Za-z@\-_\d]{5,}$/;
		const passwordRegex = /^(?:.|\s){3,}$/;

		console.log(typeof usernameRegex);

		event.preventDefault(); // ensure no redirection

		// check values if values are legit
		if (usernameRegex.test(username) && passwordRegex.test(password)) {
			if (verifyPassword === password) {
				console.log(
					`username: ${username}\npassword: ${password}\nverifyPassword: ${verifyPassword}`
				);
				console.log("success!");
			} else {
				setVerifyPassword("");
			}
		} else {
			setPassword("");
			setVerifyPassword("");
		}
		console.log("user tried to register!");
	};

	return (
		<div id="login-root">
			<div className="container" id="signup-container">
				<div id="heading">
					<h3>START CHATTING</h3>
				</div>
				<form onSubmit={handlSubmit} id="form-container">
					<div className="sub-container" id="input-container">
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							pattern="^(?=.*[@\-_])[A-Za-z@\-_\d]{5,}$"
							title="5 characters minimum. Must contain only alphabets & digits and one or more special characters from: [@ - _]"
							className="input"
							id="user"
							type="text"
							placeholder="Username"
						/>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							pattern="^(?:.|\s){3,}$"
							title="3 characters minimum."
							className="input"
							id="pass"
							type="password"
							placeholder="Password"
						/>
						<input
							value={verifyPassword}
							onChange={(e) => setVerifyPassword(e.target.value)}
							required
							pattern="^(?:.|\s){3,}$"
							title="3 characters minimum."
							className="input"
							id="pass-verify"
							type="password"
							placeholder="Re-enter password"
						/>
					</div>

					<div className="sub-container" id="proceed-container">
						<button className="action-button" id="login">
							REGISTER
						</button>
						<p onClick={questionClick} className="question">
							Already have an account?
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
