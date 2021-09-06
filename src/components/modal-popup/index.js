import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
// import ProductEdition from "../product-edition-card";
import CloseIcon from "@material-ui/icons/Close";
import ModalPleadgeCard from "../modal-pledge-card";

import "../../index.css";

const ModalComponent = (props) => {
	const [selected, setSelected] = useState("");
	const handleChange = (e) => {
		setSelected(e.target.value);
		console.log("target value:", e.target.value);
	};
	// This will clear the selection on clicking continue button
	// const clearRadioSelect = () => {
	// 	setSelected("");
	// }
	return (
		<Row>
			<Col xs={10} lg={4}>
				<Modal
					{...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered>
					<Modal.Header>
						<Modal.Title id='contained-modal-title-vcenter'>
							Back This Project
						</Modal.Title>
						<CloseIcon onClick={props.handleClick} className='close-icon' />
					</Modal.Header>
					<Modal.Body>
						<p className='paragraph'>
							{" "}
							Want to support us in bringing Mastercraft Bamboo Monitor Riser
							out in the world?
						</p>
						<div className='info-edition-container'>
							<ModalPleadgeCard
								val='product-a'
								handleSelect={handleChange}
								state={selected}
								title='Pleadge with no reward'
								description='Choose to support us without a reward if you simply believe in our project. As a backer,
  											you will be signed up to receive product updates via email.'
							/>
							<ModalPleadgeCard
								val='product-b'
								handleSelect={handleChange}
								state={selected}
								title='Bamboo Stand'
								amount='pleadge 25$ or more'
								itemsLeft='104'
								description=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
  											you’ll be added to a special Backer member list."
							/>
							<ModalPleadgeCard
								val='product-c'
								handleSelect={handleChange}
								state={selected}
								title='Black Edition Stand'
								amount='pleadge 75$ or more'
								itemsLeft='64'
								description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
  											member list. Shipping is included.'
							/>
							<ModalPleadgeCard
								val='product-d'
								handleSelect={handleChange}
								state={selected}
								title='Mahogny Special Edition'
								amount='pleadge 75$ or more'
								itemsLeft='64'
								description=' You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
  											to our Backer member list. Shipping is included.'
							/>
						</div>
					</Modal.Body>
					{/* <Modal.Footer></Modal.Footer> */}
				</Modal>
			</Col>
		</Row>
	);
};

export default ModalComponent;
