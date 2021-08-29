import React, { useEffect } from "react";
import "./custom.scss";
import "./index.css"
import Navbar from "./components/navbar";
import Overlay from "./components/overlay";
import WebFont from "webfontloader";
import HeaderCard from "./components/header-card";
import PleadgeCard from "./components/pleadge-card";
import ProductEdition from "./components/product-edition-card";
import About from "./components/about-product";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Commissioner"],
			},
		});
	}, []);
	return (
		<Container fluid>
			<Row>
				<Col xs={12}>
					<Overlay />
					<Navbar  />
					<HeaderCard />
					<PleadgeCard />
					<About
						title='About this product'
						description='The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
										to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
										your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

										Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
										to allow notepads, pens, and USB sticks to be stored under the stand.'
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
						description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
  										member list. Shipping is included."
						amountLeft='64'
						buttonText='Select Reward'
					/>
					<ProductEdition
						product='Mahogny Speacial Edition'
						pleadgeAmount='Pleadge $200 or more'
						description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  										to our Backer member list. Shipping is included."
						amountLeft='0'
						buttonText='Select Reward'
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
