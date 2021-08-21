import React from 'react';
import PrimaryButton from '../primary-button';
import BookmarkButton from '../bookmark-button';
import { Paper } from "@material-ui/core"
import { Image } from "react-bootstrap"
import mastercraftLogo from "../../assets/images/logo-mastercraft.svg"



const HeaderCard = () => {
    return (
        <Paper>
            <Image src={mastercraftLogo}></Image>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain</p>
            <BookmarkButton ></BookmarkButton>
            <PrimaryButton text="Back This Project"></PrimaryButton>



        </Paper>

    );
}

export default HeaderCard;

