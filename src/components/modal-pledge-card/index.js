import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import StyledRadio from "../styled-material-ui/syteld-radio";
import { useMediaQuery } from "@material-ui/core";
import PrimaryButton from "../primary-button";
import PleadgeButton from "../pleadge-button";
import FinalModal from "../final-modal"

import clsx from "clsx";
import "../../index.css";
import MobilePledgeCard from "./mobile-modal-pledge-card";

const ModalPleadgeCard = ({
	val,
	handleSelect,
	state,
	title,
	amount,
	itemsLeft,
	description,
}) => {
	const isMobile = useMediaQuery("(max-width:375px)");
	const [openModal, setOpenModal] = useState(false);
	const handleClick = () => {
		setOpenModal(!openModal);
	}

	return (
		<Row>
			<Col xs={12}>
				<div
					className={clsx([
						state === val && "product-container-checked",
						state !== val && "product-container",
					])}>
					{/* radio, title and pleadge amouunt and number of items left */}
					{!isMobile ? (
						<>
							<div className='modal-pleadge-main'>
								<div className='modal-info-box'>
									<StyledRadio
										checked={state === val}
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
							state={state}
							title={title}
							amount={amount}
							itemsLeft={itemsLeft}
							description={description}
						/>
					)}
					{/* based on Radio click state shows: typography, pleadge amount button, contitue button */}
					{state === val && (
						<>
							<hr></hr>
							<div className='modal-pleadge-done'>
								<p>Enter your pleadge</p>
									{amount && <PleadgeButton amount={amount} />}
									<PrimaryButton text='Continue' handleClick={handleClick}></PrimaryButton>
							</div>
						</>
					)}
				</div>
				<FinalModal show={openModal}  handleClick={handleClick}/>
			</Col>
		</Row>
	);
};

export default ModalPleadgeCard;
