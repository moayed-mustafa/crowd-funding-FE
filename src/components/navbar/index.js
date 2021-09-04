import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import "../../index.css";
import { useMediaQuery } from "@material-ui/core";
import MobileMenu from "./mobile-menu"

const Navbar = () => {
	const isMobile = useMediaQuery("(max-width:375px)");

	return !isMobile ? (
		<Row className={`justify-content-around navbar-position`}>
			<Col xs={4}>
				<Image src={logo} fluid></Image>
			</Col>
			<Col xs={6}>
				<Row className='justify-content-center align-items-center'>
					<Col xs={2}>About</Col>
					<Col xs={2}>Discover</Col>
					<Col xs={2}>GetStarted</Col>
				</Row>
			</Col>
		</Row>
	) : (
		<MobileMenu/>
	);
};

export default Navbar;
