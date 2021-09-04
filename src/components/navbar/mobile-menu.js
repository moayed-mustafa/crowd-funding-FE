import React, { useState } from "react";
import { Image, ListGroup } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import hambergurMenu from "../../assets/images/icon-hamburger.svg";
import closeMenuIcon from "../../assets/images/icon-close-menu.svg";
import "../../index.css";
const MobileMenu = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const handleClick = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<>
			<div className='navbar-position-mobile'>
				<div>
					<Image src={logo} fluid></Image>
				</div>
				<div>
					{!openMenu ? (
						<Image onClick={handleClick} src={hambergurMenu} fluid></Image>
					) : (
						<Image onClick={handleClick} src={closeMenuIcon} fluid></Image>
					)}
				</div>
            </div>
            {openMenu &&
			<div className='menu-container'>
				<div className='mobile-menu'>
					<ListGroup>
						<ListGroup.Item className="list-item-style">About</ListGroup.Item>
						<ListGroup.Item className="list-item-style">Discover</ListGroup.Item>
						<ListGroup.Item className="list-item-style">Get Started</ListGroup.Item>
					</ListGroup>
				</div>
			</div>


            }
		</>
	);
};

export default MobileMenu;
