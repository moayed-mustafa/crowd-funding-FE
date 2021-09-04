import React from "react";
import PrimaryButton from "../primary-button";
import { Row, Col} from "react-bootstrap";
import "../../index.css"
const ProductEdition = ({
	product,
	pleadgeAmount,
	description,
	amountLeft,
	buttonText,
}) => {
	return (
		<Row>
			<Col xs={12}>
				<div className='product-container'>
					<div className="flex-box">
						<h5>{product}</h5>
						<h6 className="pledge-money">{pleadgeAmount}</h6>
					</div>
					<div>
						<p className="description-paragraph">{description}</p>
					</div>
					<div className="flex-box">
						<span className="amount-left">
						<h4>
							{amountLeft}
							</h4>
						<p className="paragraph">left</p>{" "}

						</span>
						<PrimaryButton text={buttonText}></PrimaryButton>
					</div>
				</div>

			</Col>
		</Row>
	);
};

export default ProductEdition;
