import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/DropdownButton";
import { Context } from "../store/appContext.jsx";

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
				<div className="dropdown">
					<button
						style={{ color: "black", fontFamily: "fantasy" }}
						className="btn btn-lg btn-danger dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites{" "}
						<span className="badge badge-dark">
							<Context.Consumer>
								{({ actions }) => {
									return actions.countFavorites();
								}}
							</Context.Consumer>
						</span>
					</button>
					{/* tenemos el contador en cero nada se ha seleccionado por medio de los favoritos btn */}
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<ul style={{ margin: "0", padding: "0" }}>
							<Context.Consumer>
								{({ store, actions }) => {
									if (store.favorites.length === 0) {
										return (
											<li key="0" className="list-group-item-action dropdown-item">
												(empty)
											</li>
										);
									}
									//usamos la funcion de eliminar favoritos y as[i podemos eliminar alguno o algunos de los item agregados como li en el dropdown usando el fav btn de los cards//
									return store.favorites.map((fav, f) => (
										<li key={f} className="list-group-item-action dropdown-item">
											{fav}
											<span className="span">
												<i className="fas fa-times" onClick={() => actions.deleteFavorites(f)}>
													<i className="fa fa-trash" aria-hidden="true" />
												</i>
											</span>
										</li>
									));
								}}
							</Context.Consumer>
							{/* Context.consumer es el componente que nos permite consumir los valores del contexto usando una técnica llamada Render Props. */}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
/*https://guias.makeitreal.camp/react/context guía usada para el context,consumer*/
