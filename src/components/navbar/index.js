import React from "react";
import {Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/images/logo.svg"
import "../../custom.scss";

const Navbar = () => {
	return (
		<Row className='justify-content-around'>
                <Col xs={6}>
                    <Image src={logo} fluid></Image>
            </Col>
			<Col xs={1}>About</Col>
			<Col xs={1}>Discover</Col>
			<Col xs={2}> Get Started</Col>
		</Row>
	);
};

export default Navbar;
