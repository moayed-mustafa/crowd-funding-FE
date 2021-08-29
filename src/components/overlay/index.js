import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import desktopOverlay from "../../assets/images/image-hero-desktop.jpg";
import "../../index.css";
// import mobileOverlay from "../../assets/images/image-hero-mobile.jpg"

const Overlay = () => {
	return (
        <Row>
            <Col xs={12}>
			<Image fluid src={desktopOverlay} ></Image>
            </Col>
		</Row>
	);
};

export default Overlay;
