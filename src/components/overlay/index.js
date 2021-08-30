import React from "react";
import {Image } from "react-bootstrap";

import desktopOverlay from "../../assets/images/image-hero-desktop.jpg";
import "../../index.css";
// import mobileOverlay from "../../assets/images/image-hero-mobile.jpg"

const Overlay = () => {
	return (
			<Image fluid src={desktopOverlay}></Image>
	);
};

export default Overlay;
