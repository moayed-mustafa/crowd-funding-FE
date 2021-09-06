import React from "react";
import { Row, Col } from "react-bootstrap";
import { Radio } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import "../../index.css";

const StyledRadio = withStyles({
	root: {
		color: "hsl(0, 2%, 64%)",
		"&$checked": {
			color: "hsl(176, 50%, 47%)",
		},
	},
	checked: {},
})((props) => <Radio color='default' {...props} />);

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
								{itemsLeft && <div className='flex-box'>
									<span className='amount-left'>
										<h6>{itemsLeft}</h6>
										<p className='paragraph'>left</p>{" "}
									</span>
								</div>}
							</div>
							<div>
								<p className='description-paragraph'> {description}</p>
							</div>
						</>
					) : (
						// ? / Mobile Card
						<div className='modal-pleadge-mobile'>
							<div className='modal-info-box'>
								<StyledRadio
									checked={state === val}
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
							{itemsLeft && <div className='flex-box'>
									<span className='amount-left'>
										<h6>{itemsLeft}</h6>
										<p className='paragraph'>left</p>{" "}
									</span>
								</div>}
						</div>
					)}

					{/* based on Radio click state shows: typography, pleadge amount button, contitue button */}
					<div className='modal-pleadge-done'></div>
				</div>
			</Col>
		</Row>
	);
};

export default ModalPleadgeCard;
