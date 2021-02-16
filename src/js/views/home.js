import React from "react";
import "../../styles/home.scss";
import { Carousel, CarouselItem, CarouselItemProps, CarouselProps } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Carousel>
			<Carousel.Item interval={3000}>
				<Link to="/character">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/resized/todos-los-personajes-de-star-wars-2307.jpg?s=large"
						alt="Characters"
					/>
					<Carousel.Caption>
						<h3>Personajes</h3>
						<p>Descripcion de personajes</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<Link to="/planets">
					<img className="d-block w-100" src="https://wallpapercave.com/wp/wp8179241.jpg" alt="Planets" />
					<Carousel.Caption>
						<h3>Planetas</h3>
						<p>Descripcion de planetas</p>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	</div>
);
