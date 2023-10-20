import "../styles/LeftHeader.css";
import DefaultDP from "../assets/profile_photo.jpeg";
import { IoMdSettings as SettingsIcon } from "react-icons/io";
import { MdMoreVert as MoreIcon } from "react-icons/md";
import { RiChatNewLine as ChatIcon } from "react-icons/ri";

function LeftHeader(props) {
	const iconSize = 30;
	const iconMargin = 20;

	return (
		<div id="left-header">
			<div className="child" id="dp-container">
				<img id="dp" src={DefaultDP} alt="Profile Photo" />
			</div>

			<div className="child" id="right-container">
				<ChatIcon
					style={{ marginRight: iconMargin, fontSize: iconSize - 4 }}
					className="left-header-icon"
				/>
				<SettingsIcon
					style={{ marginRight: 10, fontSize: iconSize - 2 }}
					className="left-header-icon"
				/>
				<MoreIcon style={{ marginRight: 7, fontSize: iconSize }} className="left-header-icon" />
			</div>
		</div>
	);
}

export default LeftHeader;
