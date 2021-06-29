import React from 'react';
import './featured.scss';

import { PlayArrow, InfoOutlined } from '@material-ui/icons';

const Featured = ({ type }) => {
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img
				className="hero-image"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/24ee67af-e44f-4fbb-9bca-1d7f2818cacb/ID-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"
				alt=""
			/>

			<div className="featured-info">
				<img
					src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
					alt=""
				/>
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
					explicabo, vel magni error expedita deleniti animi beatae
					dicta velit harum accusantium, consequuntur inventore
					repellendus nisi excepturi fugiat provident! Iure harum
					nesciunt nam et ab eligendi accusantium dolore iusto
					cupiditate esse magnam doloribus pariatur sit dolor at
					libero sunt, modi aut?
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
