import React from "react";
import { Paper } from "@material-ui/core";
import FigureInformaiton from "../figure-information";
import { ProgressBar } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "@material-ui/core";
import MobilePleadgeCard from "./mobile-pleadge-card";
import "../../index.css";

const PleadgeCard = () => {
	const isMobile = useMediaQuery("(max-width:375px)");

	return (
		<Row className={`justify-content-center mt-3`}>
			<Col xs={11} lg={9} xl={5} md={9} sm={5}>
				<Paper elevation={0}>
					{!isMobile ? (
						<>
							<div className='pledge-card-container'>
								<FigureInformaiton
									figure='$89,914'
									information='of $100,000 backed'></FigureInformaiton>
								<hr className='pledge-card-divider'></hr>
								<FigureInformaiton
									figure='5007'
									information='total backers'></FigureInformaiton>
								<hr className='pledge-card-divider'></hr>

								<FigureInformaiton
									figure='56'
									information='days left'></FigureInformaiton>
							</div>
							<div className='progress-card'>
								<ProgressBar className='progress' now={60}></ProgressBar>
							</div>
						</>
					) : (
						<MobilePleadgeCard />
					)}
				</Paper>
			</Col>
		</Row>
	);
};

export default PleadgeCard;
