import React, { useEffect, useState } from "react";
import "./custom.scss";
import "./index.css";
import Navbar from "./components/navbar";
import Overlay from "./components/overlay";
import WebFont from "webfontloader";
import HeaderCard from "./components/header-card";
import PleadgeCard from "./components/pleadge-card";
import InfoEditionWrapper from "./components/info-edition-wrapper";
import { Container, Row, Col } from "react-bootstrap";
import { useDidMount } from "rooks";

const productEditionData = [
	{
		val: "product-b",
		title: "Bamboo Stand",
		description:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		amountLeft: 104,
		pleadgeAmount: "pleadge 25$ or more",
		buttonText: "Select Reward",
		// * need to have an extra property here for the moneyPleadged
	},
	{
		val: "product-c",
		title: "Black Edition Stand",
		description:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		amountLeft: 64,
		pleadgeAmount: "pleadge 75$ or more",
		buttonText: "Select Reward",
	},
	{
		val: "product-d",
		title: "Mahogny Special Edition",
		description:
			" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		amountLeft: 64,
		pleadgeAmount: "pleadge 75$ or more",
		buttonText: "Select Reward",
	},
];
function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Commissioner"],
			},
		});
	}, []);
	useDidMount(() => {
		console.log("The component is mounted!");
	})
	// * State that I need to add here

	// * set the singular state here:-
	let [fundsPleadged, setFundsPleadged] = useState(3000);
	let [totalBackers, setTotalBackers] = useState(5000);
	const recievePleadge = () => {
		setTotalBackers(totalBackers += 1);
		setFundsPleadged(fundsPleadged += 1);



	}

	// Think about it like this:
	// You have certain state that is unique for each component, this means I need to create the state here and pass it down
	const ModalPleadgeData = [
	{
		val: "product-a",
		title: "Pleadge with no reward",
		description:
			"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
	},
	{
		val: "product-b",
		title: "Bamboo Stand",
		description:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		// This property needs to be a state
		itemsLeft: 104,
		amount: "pleadge 25$ or more",
	},
	{
		val: "product-c",
		title: "Black Edition Stand",
		description:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		itemsLeft: 64,
		amount: "pleadge 75$ or more",
	},
	{
		val: "product-d",
		title: "Mahogny Special Edition",
		description:
			" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		itemsLeft: 64,
	},
];
	// amount of items left  ==> Info Edition Component

	// functions related to state
	// a function thtat will update the amount of items left ==> Info Edition Component.
	// a function thtat will update the number of backers ==> pleadge Card Component.
	// a function thtat will update the total of pleadge money ==> pleadge Card Component.
	return (
		<Container fluid className="fluid-container">
			<Row>
				<Col xs={12}>
					<div className='main-container'>
						<Overlay />
						<Navbar />
						<HeaderCard ModalPleadgeData={ModalPleadgeData}/>
						<PleadgeCard fundsPleadged={fundsPleadged} totalBackers={totalBackers} />
						<InfoEditionWrapper productEditionData={productEditionData} updateTotalBackersAndTotalFunds={recievePleadge}/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
