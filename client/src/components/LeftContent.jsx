import "../styles/LeftContent.css";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
import { BiFilter as FilterIcon } from "react-icons/bi";

function LeftSearch(props) {
	const iconSize = 20;

	return (
		<div id="left-search">
			<div className="child" id="search-bar">
				<SearchIcon
					style={{
						color: "var(--button-white)",
						marginRight: 10,
						marginLeft: 10,
						fontSize: iconSize,
					}}
				/>
				<input
					placeholder="Search your conversations"
					type="text"
					id="search-input"
					name="search"
				/>
			</div>
			<div id="filter-button">
				<FilterIcon
					style={{
						color: "var(--button-white)",
						marginLeft: 7,
						marginRight: 10,
						fontSize: iconSize + 4,
					}}
				/>
			</div>
		</div>
	);
}

function MessagePreview(props) {
	return (
		<div id="list-item">
			<img id="dp" src="/src/assets/profile_photo.jpeg" alt="Profile Photo" />
			<div id="preview-text">
				<div id="top">Chat / Group Name</div>
				<div id="bottom">Message conent preview.</div>
			</div>
			<div id="info">
				<div id="time">10: 30</div>
				<div id="additional">mute</div>
			</div>
		</div>
	);
}

function LeftMessages() {
	const iconSize = 20;

	return (
		<div id="list-container">
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
			<MessagePreview />
		</div>
	);
}

function LeftContent(props) {
	return (
		<div id="left-content">
			<LeftSearch />
			<LeftMessages />
		</div>
	);
}

export default LeftContent;
