import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/DropdownButton";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/22731.png"
						style={{ width: "75px", height: "50px" }}
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favoritos
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
