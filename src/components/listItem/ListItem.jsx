import React, { useState } from 'react';
import {
	PlayCircleFilled,
	Add,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from '@material-ui/icons';
import './listItem.scss';

const ListItem = ({ index }) => {
	const [isHover, setIsHover] = useState(false);
	// const trailer = 'https://www.youtube.com/embed/BpdDN9d9Jio';
	return (
		<div
			style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
			className="listItem"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<img
				src="https://m.ayocirebon.com/images-cirebon/post/articles/2021/05/21/11151/horor.jpg"
				alt="Quite Place 2"
			/>
			{isHover && (
				<>
					<iframe
						frameBorder="0"
						src="https://www.youtube.com/embed/BpdDN9d9Jio?autoplay=1&mute=0"
						title="YouTube video player"
						frameborder="0"
						allow="autoplay"
						allowfullscreen
					></iframe>
					<div className="listItem-info">
						<div className="icons">
							<PlayCircleFilled className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownAltOutlined className="icon" />
						</div>
						<div className="info-top">
							<span>1 hour 14 minutes</span>
							<span className="limit">+16</span>
							<span>1999</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minima repudiandae reprehenderit nostrum.
							Numquam, corrupti, voluptatibus necessitatibus,
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
