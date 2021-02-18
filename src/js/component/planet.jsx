import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Col, Row, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Planet = props => {
	const { store, actions } = useContext(Context);

	actions.loadPlanets();

	return (
		<Container fluid>
			<Row>
				{Array.from({ length: 10 }).map((_, index) => (
					<Col md={3} className="mt-1 mb-2" key={index}>
						<Card>
							<Card.Img variant="top" src={props.pImg} />
							<Card.Body>
								<Card.Title>{props.pTitle}</Card.Title>
								<Card.Text>{props.pDescription}</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to={`/planet/${index}`}>
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
	pImg: PropTypes.any,
	pTitle: PropTypes.any,
	pDescription: PropTypes.any
};
