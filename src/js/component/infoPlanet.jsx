        import  React from 'react';
        import Carousel from 'react-bootstrap/Carousel';
        import React, { useState, useEffect, useContext } from "react";
        import { Link } from "react-router-dom";

        import { Context } from "../store/appContext.jsx";

        export const infoPlanet = () => (
         <div>
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>

        );