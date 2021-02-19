import Carousel from "react-bootstrap/Carousel";
import React, { useContext, useParams } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Card } from "react-bootstrap";

import { Context } from "../store/appContext.jsx";

export const InfoPlanet = () => {
	const { store, actions } = useContext(Context);
	//hacer busqueda por id
	const { myid } = useParams();
	/*const paramByID = store.planets[params.fetchId];*/
	return (
		<Jumbotron>
			<div className="row">
				<div className="col">
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/c8/92/85/c89285262e9a1e48f9c845a45f20a8e3.png"
						/>
					</Card>
				</div>
				<div className="col">
					<p className="text-center">
						<h1 />
						<p>
							Star Wars is an American epic space opera media franchise created by George Lucas, which
							began with the eponymous 1977 film
						</p>
					</p>
				</div>
			</div>
			<div className="row">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Height</th>
							<th scope="col">Gravity</th>
							<th scope="col">Terrain</th>
							<th scope="col">Population</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" />
							<td>{store.characters[myid].height}</td>
							<td>{store.characters[myid].gravity}</td>
							<td>{store.characters[myid].terrain}</td>
							<td>{store.characters[myid].population}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Jumbotron>
	);
};
