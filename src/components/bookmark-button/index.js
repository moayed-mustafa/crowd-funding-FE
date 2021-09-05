import React from "react";
import "../../index.css";
import BookmarkIcon from '@material-ui/icons/Bookmark';

const BookmarkButton = () => {
	return (
		<div className='special-button'>
			<div className='bookmark-icon'>
				<BookmarkIcon className="icon"/>
			</div>
			<button className='bookmark-btn'>Bookmark</button>
		</div>
	);
};

export default BookmarkButton;
