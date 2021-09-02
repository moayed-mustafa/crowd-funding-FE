import React from "react";
import About from "../about-product";
import ProductEdition from "../product-edition-card";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "../../index.css";

const InfoEditionWrapper = () => {
	return (
		<Row className={`justify-content-center mt-3`}>
			<Col xs={12} sm={5}>
				<Paper elevation={0}>
					<div className='info-edition-container'>
						<About
							title='About this product'
							mainTypography='The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
										to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
										your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
'
                            secondaryTypography="
										Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
										to allow notepads, pens, and USB sticks to be stored under the stand."
						/>
						<ProductEdition
							product='Bamboo Stand'
							pleadgeAmount='Pleadge $25 or more'
							description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
  										you’ll be added to a special Backer member list."
							amountLeft='101'
							buttonText='Select Reward'
						/>
						<ProductEdition
							product='Black Edition Stand'
							pleadgeAmount='Pleadge $75 or more'
							description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
  										member list. Shipping is included.'
							amountLeft='64'
							buttonText='Select Reward'
						/>
						<ProductEdition
							product='Mahogny Speacial Edition'
							pleadgeAmount='Pleadge $200 or more'
							description='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  										to our Backer member list. Shipping is included.'
							amountLeft='0'
							buttonText='Select Reward'
						/>
					</div>
				</Paper>
			</Col>
		</Row>
	);
};

export default InfoEditionWrapper;
