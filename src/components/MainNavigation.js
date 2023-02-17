import React, { useState } from "react";
// import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

import logo from "./images/logoo.JPG";
import { IconContext } from "react-icons";
import { BsCart2 } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.css";

const MainNavigation = () => {
	const [isMenuShow, setIsMenuShow] = useState(false);

	const handlerMenu = () => {
		setIsMenuShow(!isMenuShow);
	};

	return (
		<>
			<nav
				className='navbar-end px-3'
				role='navigation'
				aria-label='main navigation'
			>
				<div className='navbar-brand'>
					<Link
						className='navbar-item'
						to='/'
					>
						<img
							src={logo}
							alt=' '
							width='100'
							height='150'
						/>
					</Link>

					<Link
						to='/'
						role='button'
						className={`navbar-burger ${isMenuShow ? "is-active" : ""}`}
						onClick={handlerMenu}
						aria-label='menu'
						aria-expanded='false'
						data-target='navbarBasicExample'
					>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</Link>
				</div>

				<div
					id='navbarBasicExample'
					className={`navbar-menu ${isMenuShow ? "is-active" : ""}`}
				>
					<div className='navbar-end'></div>

					<div className='navbar-end'>
						<Link
							to='/'
							className='navbar-item'
						>
							Home
						</Link>
						<Link
							to='/'
							className='navbar-item'
						>
							Furniture
						</Link>

						<Link
							to='/'
							className='navbar-item'
						>
							Product
						</Link>

						<Link
							to='/'
							className='navbar-item'
						>
							Store
						</Link>
						<div className='navbar-item'>
							<div className='buttons'>
								<a href='/'>
									<IconContext.Provider
										value={{
											color: "darkblue",
											size: "1.5rem",
											className: "global-class-name",
										}}
									>
										<RiSearchLine />
									</IconContext.Provider>
								</a>
								&nbsp; &nbsp;&nbsp;
								<a href='/'>
									<IconContext.Provider
										value={{
											color: "darkblue",
											size: "1.8rem",
											className: "inline margin-left: 1px",
										}}
									>
										<BsCart2 />
									</IconContext.Provider>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default MainNavigation;
