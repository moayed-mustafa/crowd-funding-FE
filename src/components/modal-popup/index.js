import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import "../../index.css";
const ModalComponent = (props) => {

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
							{props.children}
						</div>
					</Modal.Body>
				</Modal>
			</Col>
		</Row>
	);
};

export default ModalComponent;
