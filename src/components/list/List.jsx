import React, { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [isMove, setIsMove] = useState(false);
	const listRef = useRef();

	const handleClick = (dir) => {
		setIsMove(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;

		if (dir === 'left' && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${180 + distance}px)`;
		}

		if (dir === 'right' && slideNumber < 5) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${
				-280 + distance
			}px)`;
		}

		console.log(distance);
	};
	return (
		<div className="list">
			<span className="list-title">Continue to Watch</span>
			<div className="list-wrapper">
				<ArrowBackIos
					className="slider left"
					onClick={() => handleClick('left')}
					style={{ display: !isMove && 'none' }}
				/>
				<div className="container" ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
				</div>
				<ArrowForwardIos
					className="slider right"
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};

export default List;
