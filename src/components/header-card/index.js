import React, { useState } from "react";
import BookmarkIcon from "../../assets/images/icon-bookmark.svg";
import PrimaryButton from "../primary-button";
import BookmarkButton from "../bookmark-button";
import { Paper } from "@material-ui/core";
import { Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";
import "../../index.css";
import ModalComponent from "../modal-popup";
import ModalPleadgeCard from "../modal-pledge-card";
import mastercraftLogo from "../../assets/images/logo-mastercraft.svg";
import FinalModal from "../final-modal";

const ModalPleadgeData = [
	{
		val: "product-a",
		title: "Pleadge with no reward",
		description:
			"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	},
	{
		val: "product-b",
		title: "Bamboo Stand",
		description:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		itemsLeft: 104,
		amount: "pleadge 25$ or more",
	},
	{
		val: "product-c",
		title: "Black Edition Stand",
		description:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		itemsLeft: 64,
		amount: "pleadge 75$ or more",
	},
	{
		val: "product-d",
		title: "Mahogny Special Edition",
		description:
			" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		itemsLeft: 64,
	},
];

const HeaderCard = () => {
	const mobile = useMediaQuery("(max-width:375px)");
	// ! main modal state
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(!openModal);
		if (!openModal) setSelected("");
	};
	//! secondary modal state
	const [openThankyouModal, setOpenThankyouModal] = useState(false);
	console.log("openModal state:", openModal);
	console.log("openThankyouModal state:", openThankyouModal);
	const handleOpenThankyouModal = () => {
		setOpenThankyouModal(!openThankyouModal);
		if (!openThankyouModal) setSelected("");
	};
	//! radio button state
	const [selected, setSelected] = useState("");
	const handleChange = (e) => {
		setSelected(e.target.value);
		if (!openModal) setSelected("");
	};
	// TODO: make a function to clear the selected radio item

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
								<PrimaryButton
									text='Back This Project'
									handleClick={handleOpenModal}></PrimaryButton>
								<BookmarkButton></BookmarkButton>
							</div>
						) : (
							<div className='mobile-buttons-box'>
								<PrimaryButton
									text='Back This Project'
									handleClick={handleOpenModal}></PrimaryButton>
								<Image src={BookmarkIcon}></Image>
							</div>
						)}
					</div>
				</Paper>
			</Col>
			<ModalComponent show={openModal} handleClick={handleOpenModal}>
				{ModalPleadgeData.map((item, idx) => (
					<ModalPleadgeCard
						key={idx}
						val={item.val}
						handleSelect={handleChange}
						state={selected}
						title={item.title}
						description={item.description}
						amount={item.amount}
						itemsLeft={item.itemsLeft}
						handleClick={handleOpenThankyouModal}>
						<FinalModal
							show={openThankyouModal}
							handleClick={handleOpenThankyouModal}
						/>
					</ModalPleadgeCard>
				))}
			</ModalComponent>
		</Row>
	);
};

export default HeaderCard;
