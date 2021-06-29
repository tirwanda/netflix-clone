import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
	const [isScrooled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => window.onscroll == null;
	};

	console.log(isScrooled);

	return (
		<div className={isScrooled ? 'navbar scrolled' : 'navbar'}>
			<div className="navbar-container">
				<div className="left">
					<img
						src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
						alt="Logo"
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search className="right-icon" />
					KID
					<Notifications className="right-icon" />
					<img
						src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Profile"
					/>
					<div className="right-profile">
						<ArrowDropDown className="right-icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
