import { Jumbotron, Card } from "react-bootstrap";
import React, { useContext, useParams } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export const InfoCharacter = () => {
	const { store, actions } = useContext(Context);

	const { myid } = useParams();

	return (
		<Jumbotron>
			<div className="row">
				<div className="col">
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://cdn.vox-cdn.com/thumbor/4CfA0tz-b4KaLS8rJzk3NwQoIvc=/85x0:1014x619/1200x800/filters:focal(85x0:1014x619)/cdn.vox-cdn.com/uploads/chorus_image/image/12771259/ea_star_wars_darth_vader.0.jpg"
						/>
					</Card>
				</div>
				<div className="col">
					<p className="text-center">
						<h1 />
						<p>kjsdjs</p>
					</p>
				</div>
			</div>
			<div className="row">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Diameter</th>
							<th scope="col">Gravity</th>
							<th scope="col">Terrain</th>
							<th scope="col">Population</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td />
							<td />
							<td />
							<td />
						</tr>
					</tbody>
				</table>
			</div>
		</Jumbotron>
	);
};
