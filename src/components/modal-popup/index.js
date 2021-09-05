import React from "react";
import { Modal} from "react-bootstrap";
import ProductEdition from "../product-edition-card";

import "../../index.css";

const ModalComponent = (props) => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton onClick={props.handleClick}>
				<Modal.Title id='contained-modal-title-vcenter'>
					Back This Project
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p className='paragraph'>
					{" "}
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
					the world?
				</p>
				<div className='info-edition-container'>
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
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
};

export default ModalComponent;
