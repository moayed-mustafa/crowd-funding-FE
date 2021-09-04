import React from "react";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";


import desktopOverlay from "../../assets/images/image-hero-desktop.jpg";
import "../../index.css";
import mobileOverlay from "../../assets/images/image-hero-mobile.jpg"

const Overlay = () => {
	const isMobile = useMediaQuery('(max-width:375px)');
	return (
			isMobile ?  <Image fluid src={mobileOverlay}></Image> : <Image fluid src={desktopOverlay}></Image>
	);
};

export default Overlay;
