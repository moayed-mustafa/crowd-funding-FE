import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import StyledRadio from "../styled-material-ui/syteld-radio";
import { useMediaQuery } from "@material-ui/core";
import PrimaryButton from "../primary-button";
import PleadgeButton from "../pleadge-button";
import clsx from "clsx";
import "../../index.css";
import MobilePledgeCard from "./mobile-modal-pledge-card";
import FinalModal from "../final-modal";

const ModalPleadgeCard = ({
	val,
	handleSelect,
	radioState,
	title,
	amount,
	itemsLeft,
	description,
	setSelected,
}) => {
	const isMobile = useMediaQuery("(max-width:375px)");
	const [openThankyouModal, setOpenThankyouModal] = useState(false);
	const handleOpenThankyouModal = () => {
		setOpenThankyouModal(!openThankyouModal);
		if (!openThankyouModal) setSelected("");
	};
	return (
		<Row>
			<Col xs={12}>
				<div
					className={clsx([
						radioState === val && "product-container-checked",
						radioState !== val && "product-container",
					])}>
					{/* radio, title and pleadge amouunt and number of items left */}
					{!isMobile ? (
						<>
							<div className='modal-pleadge-main'>
								<div className='modal-info-box'>
									<StyledRadio
										checked={radioState === val}
										onChange={handleSelect}
										value={val}
										name='radio-button'
									/>
									<h6>{title}</h6>
									<p className='pledge-money'>{amount}</p>
								</div>
								{itemsLeft && (
									<div className='flex-box'>
										<span className='amount-left'>
											<h6>{itemsLeft}</h6>
											<p className='paragraph'>left</p>{" "}
										</span>
									</div>
								)}
							</div>
							<div>
								<p className='description-paragraph'> {description}</p>
							</div>
						</>
					) : (
						// ? / Mobile Card
						<MobilePledgeCard
							val={val}
							handleSelect={handleSelect}
							radioState={radioState}
							title={title}
							amount={amount}
							itemsLeft={itemsLeft}
							description={description}
						/>
					)}
					{radioState === val && (
						<>
							<hr></hr>
							<div className='modal-pleadge-done'>
								<p>Enter your pleadge</p>
									{amount && <PleadgeButton amount={amount} />}
									<PrimaryButton text='Continue' handleClick={handleOpenThankyouModal}></PrimaryButton>
							</div>
						</>
					)}
				</div>
				<FinalModal
							show={openThankyouModal}
							handleClick={handleOpenThankyouModal}
						/>
			</Col>
		</Row>
	);
};

export default ModalPleadgeCard;
