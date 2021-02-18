import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Col, Row, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Planet = props => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid className="overflow-scroll">
			<Row>
				{store.planets.map((planet, i) => (
					<Col md={3} className="mt-1 mb-2" key={i}>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src={props.pImg} />
							<Card.Body>
								<Card.Title>{planet.name}</Card.Title>
								<Card.Text>
									Diameter: {planet.diameter}
									<br />
									Climate: {planet.climate}
									<br />
									Gravity: {planet.terrain}
									<br />
									Population: {planet.poplation}
									<br />
								</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to={`/planet/${i}`}>
										<Button variant="primary">Get info</Button>
									</Link>

									<Link onClick={() => actions.addFavorite(planet.name, "planet")}>
										<Button variant="outline-warning">
											<i className="far fa-heart" />
										</Button>
									</Link>
								</ButtonToolbar>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

Planet.propTypes = {
	pImg: PropTypes.any
};
