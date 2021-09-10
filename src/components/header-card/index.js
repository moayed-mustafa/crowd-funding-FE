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

const HeaderCard = ({ModalPleadgeData}) => {
	const mobile = useMediaQuery("(max-width:375px)");
		//* radio button state
	const [selected, setSelected] = useState("");
	const handleChange = (e) => {
		setSelected(e.target.value);
		if (!openModal) setSelected("");
	};
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(!openModal);
		if (!openModal) setSelected("");
	};

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
						radioState={selected}
						setSelected={setSelected}
						title={item.title}
						description={item.description}
						amount={item.amount}
						itemsLeft={item.itemsLeft}
					>

					</ModalPleadgeCard>
				))}
			</ModalComponent>
		</Row>
	);
};

export default HeaderCard;
