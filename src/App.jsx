import { useState, useEffect } from "react";
import "./styles/App.css";

// components
import LeftHeader from "./components/LeftHeader";

import "./styles/LeftContent.css";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
import { BiFilter as FilterIcon } from "react-icons/bi";

function LeftSearch(props) {
	const iconSize = 20;

	return (
		<div id="left-search">
			<div className="child" id="search-bar">
				<SearchIcon style={{ marginRight: 10, marginLeft: 10, fontSize: iconSize }} />
				<input type="text" id="search-input" name="search" />
			</div>
			<div id="filter-button">
				<FilterIcon style={{ marginLeft: 7, marginRight: 10, fontSize: iconSize + 4 }} />
			</div>
		</div>
	);
}

function LeftContent(props) {
	return (
		<div id="left-content">
			<LeftSearch />
		</div>
	);
}

import "./styles/RightHeader.css";
import {MdMoreVert as MoreIcon} from "react-icons/md";

function RightHeader(props) {
	const iconSize = 20;
	return (
	<div id="right-header">
		<div class="child" id="rdp-container">
			<img id="rdp" src="/src/assets/profile_photo.jpeg" alt="Profile Photo" />
		</div>

		<div id="right-name">
		<p id="rname-style">Person 2</p>
		</div>

		<div class="child" id="r-container">
		<SearchIcon style={{ marginRight: 10, marginLeft: 10, fontSize: iconSize }}></SearchIcon>

		<MoreIcon style ={{marginLeft:10, marginRight:7, fontSize:iconSize}} ></MoreIcon>
		</div>
		
	</div>
	);
}

import "./styles/RightContent.css";
function RightContent(props) {
	return <div id="right-content"></div>;
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

function App() {
	return (
		<div id="root">
			<LeftPane />
			<RightPane />
		</div>
	);
}

export default App;
