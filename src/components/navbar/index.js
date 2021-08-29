import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import "../../custom.scss";
import "../../index.css";

// import clsx from 'clsx'

const Navbar = () => {
	return (
		<Row className={`justify-content-around navbar-position`}>
			<Col xs={4}>
				<Image src={logo} fluid></Image>
			</Col>
			<Col xs={6}>
				<Row className="justify-content-center align-items-center">
				<Col xs={2}>About</Col>
				<Col xs={2}>Discover</Col>
				<Col xs={2}> Get Started</Col>

				</Row>
			</Col>
		</Row>
	);
};

export default Navbar;
