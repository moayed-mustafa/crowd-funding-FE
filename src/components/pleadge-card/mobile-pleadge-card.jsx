import React from 'react';
import FigureInformaiton from "../figure-information";
import { ProgressBar } from "react-bootstrap";


const MobilePleadgeCard = () => {
    return ( <>
							<div>
								<FigureInformaiton
									figure='$89,914'
									information='of $100,000 backed'></FigureInformaiton>
									<hr className="horizontal-break"/>
									<FigureInformaiton
									figure='5007'
									information='total backers'></FigureInformaiton>
									<hr className="horizontal-break"/>
									<FigureInformaiton
									figure='56'
									information='days left'></FigureInformaiton>
								</div>
								<div className='progress-card'>
								<ProgressBar className='progress' now={60}></ProgressBar>
							</div>
						</> );
}

export default MobilePleadgeCard;