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
			<Col xs={12} sm={5}>
				<Paper className='header-card-paper' elevation={0}>
					<Image src={mastercraftLogo} className='header-card-icon'></Image>
					<h3 className={`mt-2 header-3`}>Mastercraft Bamboo Monitor Riser</h3>
					<p className={`paragraph`}>
						A beautiful & handcrafted monitor stand to reduce neck and eye
						strain
					</p>

					<div className='buttons-box'>
						<div>
							<PrimaryButton text='Back This Project'></PrimaryButton>
						</div>
						<div>
							<BookmarkButton></BookmarkButton>
						</div>
					</div>
				</Paper>
			</Col>
		</Row>
	);
};

export default HeaderCard;
