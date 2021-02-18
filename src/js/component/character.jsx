import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row, Container, ButtonToolbar } from "react-bootstrap";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.scss";

export const Character = () => {
	const { store, actions } = useContext(Context);
	actions.loadCharacters();

	return (
		<Container fluid>
			<Row>
				{Array.from({ length: 10 }).map((_, index) => (
					<Col md={3} className="mt-1 mb-2">
						<Card style={{ width: "18rem" }} key={index}>
							<Card.Img variant="top" src={{ cImg }} />
							<Card.Body>
								<Card.Title>{{ cTitle }}</Card.Title>
								<Card.Text>{{ cDescription }}</Card.Text>
								<ButtonToolbar
									className="justify-content-between d-flex"
									aria-label="Toolbar with Button groups">
									<Link to={`/character/${index}`}>
										<Button variant="primary">Get Info</Button>
									</Link>

									<Link onClick={() => actions.addFavorite(Character.name, "character")}>
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

Character.propTypes = {
	cImg: PropTypes.any,
	cTitle: PropTypes.any,
	cDescription: PropTypes.any
};
