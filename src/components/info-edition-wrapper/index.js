import React from "react";
import About from "../about-product";
import ProductEdition from "../product-edition-card";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "../../index.css";


const InfoEditionWrapper = ({productEditionData, updateTotalBackersAndTotalFunds}) => {
	return (
		<Row className={`justify-content-center mt-3`}>
			<Col xs={11} md={9} sm={5} lg={9} xl={5}>
				<Paper elevation={0}>
					<div className='info-edition-container'>
						<About
							title='About this product'
							mainTypography='The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
										to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
										your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
'
							secondaryTypography='
										Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
										to allow notepads, pens, and USB sticks to be stored under the stand.'
						/>
						{productEditionData.map((item, idx) => (
							<ProductEdition
								product={item.title}
								pleadgeAmount={item.pleadgeAmount}
								description={item.description}
								amountLeft={item.amountLeft}
								buttonText={item.buttonText}
								updateTotalBackersAndTotalFunds={updateTotalBackersAndTotalFunds}
							/>
						))}
					</div>
				</Paper>
			</Col>
		</Row>
	);
};

export default InfoEditionWrapper;
