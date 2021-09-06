import React, { useState } from "react";
import BookmarkIcon from "../../assets/images/icon-bookmark.svg"
import PrimaryButton from "../primary-button";
import BookmarkButton from "../bookmark-button";
import { Paper } from "@material-ui/core";
import { Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";
import "../../index.css";
import ModalComponent from "../modal-popup"


import mastercraftLogo from "../../assets/images/logo-mastercraft.svg";

const HeaderCard = () => {
	const mobile = useMediaQuery("(max-width:375px)");
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(!openModal);
	}
	return (
		<Row className='justify-content-center'>
			<Col xs={11} md={9} sm={5} lg={9} xl={5}>
				<Paper elevation={0}>
					<div className='header-card-paper'>
						<Image src={mastercraftLogo} className='header-card-icon'></Image>
						<div>
							<h3 className={`mt-2 header-3`}>
								Mastercraft Bamboo Monitor Riser
							</h3>
							<p className={`paragraph`}>
								A beautiful & handcrafted monitor stand to reduce neck and eye
								strain
							</p>
						</div>
						{!mobile ? (
							<div className='buttons-box'>
								<PrimaryButton text='Back This Project' handleClick={handleOpenModal}></PrimaryButton>
								<BookmarkButton></BookmarkButton>
							</div>
						) : (
							<div className='mobile-buttons-box'>
									<PrimaryButton text='Back This Project' handleClick={handleOpenModal}></PrimaryButton>
									<Image src={BookmarkIcon}></Image>

							</div>
						)}
					</div>
				</Paper>
			</Col>
			<ModalComponent show={openModal} handleClick={handleOpenModal}/>
		</Row>
	);
};

export default HeaderCard;
