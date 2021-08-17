import React, { useEffect } from "react";
import "./custom.scss";
import Navbar from "./components/navbar";
import Overlay from "./components/overlay";
import WebFont from "webfontloader";
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
		<Container>
			<Row>
				<Col xs={12}>
					<Navbar  />
					<Overlay />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
