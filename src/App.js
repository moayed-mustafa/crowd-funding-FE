import React, { useEffect } from "react";
import "./custom.scss";
import "./index.css";
import Navbar from "./components/navbar";
import Overlay from "./components/overlay";
import WebFont from "webfontloader";
import HeaderCard from "./components/header-card";
import PleadgeCard from "./components/pleadge-card";
import InfoEditionWrapper from "./components/info-edition-wrapper";
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
		<Container fluid className="fluid-container">
			<Row>
				<Col xs={12}>
					<div className='main-container'>
						<Overlay />
						<Navbar />
						<HeaderCard />
						<PleadgeCard />
						<InfoEditionWrapper />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
