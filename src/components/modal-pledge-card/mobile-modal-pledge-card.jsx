import React from "react";
import StyledRadio from "../styled-material-ui/syteld-radio";


import "../../index.css";

const MobilePledgeCard = ({
	val,
	handleSelect,
	radioState,
	title,
	amount,
	itemsLeft,
	description,
}) => {
	return (
		<div className='modal-pleadge-mobile'>
			<div className='modal-info-box'>
				<StyledRadio
					checked={radioState === val}
					onChange={handleSelect}
					value={val}
					name='radio-button'
				/>
				<h6>{title}</h6>
			</div>
			<p className='pledge-money'>{amount}</p>
			<div>
				<p className='description-paragraph'> {description}</p>
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
	);
};

export default MobilePledgeCard;
