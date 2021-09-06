import React from "react";
import { Row, Col, Modal, Image } from "react-bootstrap";
import CheckIcon from "../../assets/images/icon-check.svg";
import PrimaryButton from "../primary-button"
import "../../index.css";
const FinalModal = (props) => {
	return (
		<Row>
			<Col xs={10} lg={4}>
				<Modal
					{...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered>
					<Modal.Body className="continue-modal">
						<Image src={CheckIcon}></Image>
						<h5>Thank you for your support</h5>
						<p className='description-paragraph'>
							{" "}
							Your pledge brings us one step closer to sharing Mastercraft
							Bamboo Monitor Riser worldwide. You will get an email once our
							campaign is completed. Got it!
                        </p>
                        <PrimaryButton handleClick={props.handleClick} text="Got it!" />
					</Modal.Body>

				</Modal>
			</Col>
		</Row>
	);
};

export default FinalModal;
