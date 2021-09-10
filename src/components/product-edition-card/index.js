import React, {useState} from "react";
import PrimaryButton from "../primary-button";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";
import FinalModal from "../final-modal";


import "../../index.css";
const ProductEdition = ({
	product,
	pleadgeAmount,
	description,
	amountLeft,
	buttonText,
	updateTotalBackersAndTotalFunds
}) => {
	const isMobile = useMediaQuery("(max-width:375px)");
	const [openThankyouModal, setOpenThankyouModal] = useState(false);
	const closeModalAndUpdateData = () => {
		setOpenThankyouModal(!openThankyouModal);
		// TODO: pass a function from the parent of this component that will change the state of (amountLeft) and call it here
		updateTotalBackersAndTotalFunds();
	};
	const closeModal = () => {
		setOpenThankyouModal(!openThankyouModal);

	};

	return (
		<Row>
			<Col xs={12}>
				<div className='product-container'>
					{isMobile ? (
						<div>
							<h5>{product}</h5>
							<h6 className='pledge-money'>{pleadgeAmount}</h6>
						</div>
					) : (
						<div className='flex-box'>
							<h5>{product}</h5>
							<h6 className='pledge-money'>{pleadgeAmount}</h6>
						</div>
					)}
					<div>
						<p className='description-paragraph'>{description}</p>
					</div>
					{isMobile ? (
						<div>
							<span className='amount-left'>
								<h4>{amountLeft}</h4>
								<p className='paragraph'>left</p>{" "}
							</span>
							<PrimaryButton text={buttonText}></PrimaryButton>
						</div>
					) : (
						<div className='flex-box'>
							<span className='amount-left'>
								<h4>{amountLeft}</h4>
								<p className='paragraph'>left</p>{" "}
							</span>
							<PrimaryButton text={buttonText} handleClick={closeModalAndUpdateData}></PrimaryButton>
						</div>
					)}
				</div>
			</Col>
			<FinalModal
							show={openThankyouModal}
							handleClick={closeModal}
						/>
		</Row>
	);
};

export default ProductEdition;
