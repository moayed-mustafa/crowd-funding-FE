import React from "react";
import PrimaryButton from "../primary-button";
import BookmarkButton from "../bookmark-button";
import { Paper } from "@material-ui/core";
import { Row, Col, Image } from "react-bootstrap";
import "../../index.css";

import mastercraftLogo from "../../assets/images/logo-mastercraft.svg";

const HeaderCard = () => {
	return (
		<Row className='justify-content-center'>
			<Col xs={6}>
				<Paper className='header-card-paper'>
					<Image src={mastercraftLogo} className='header-card-icon'></Image>
					<h2 className='mt-2'>Mastercraft Bamboo Monitor Riser</h2>
					<p>
						A beautiful & handcrafted monitor stand to reduce neck and eye
						strain
					</p>
					<Row className="jusftify-content-between">
						<Col xs={3}>
							<BookmarkButton></BookmarkButton>
						</Col>
						<Col xs={3}>
							<PrimaryButton text='Back This Project'></PrimaryButton>
						</Col>
					</Row>
				</Paper>
			</Col>
		</Row>
	);
};

export default HeaderCard;
