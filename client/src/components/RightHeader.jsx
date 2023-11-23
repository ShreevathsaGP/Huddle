import "../styles/RightHeader.css";
import { MdMoreVert as MoreIcon } from "react-icons/md";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
import { BiFilter as FilterIcon } from "react-icons/bi";

function RightHeader(props) {
	const iconSize = 22;
	return (
		<div id="right-header">
			<div className="child" id="rdp-container">
				<img id="rdp" src="/src/assets/profile_photo.jpeg" alt="Profile Photo" />
			</div>

			<div id="right-name">
				<p id="rname-style">Person 2</p>
			</div>

			<div className="child" id="r-container">
				<SearchIcon
					style={{
						color: "var(--button-white)",
						marginRight: 10,
						marginLeft: 10,
						fontSize: iconSize,
					}}
				></SearchIcon>

				<MoreIcon
					style={{
						color: "var(--button-white)",
						marginLeft: 10,
						marginRight: 17,
						fontSize: iconSize,
					}}
				></MoreIcon>
			</div>
		</div>
	);
}

export default RightHeader;
