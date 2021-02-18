import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { infoCharacter } from "./component/infoCharacter.jsx";
import { Planet } from "./component/planet.jsx";
import { Character } from "./component/character.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route path="/planet/:theid">
							<Planet
								pImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTW25q35clqSgUK1DbYZ4-SZluZCOQzhILSw&usqp=CAU"
								pTitle="Lorem ipsum dolor sit amet"
								pDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                                                pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                                                Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                                                in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora"
							/>
						</Route>
						<Route path="/character/:theid">
							<Character
								cImg="https://cdn-3.expansion.mx/dims4/default/d9eac85/2147483647/strip/true/crop/1128x635+0+0/resize/800x450!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2F21%2F6e%2F021cdd2a4155af013db038f72482%2Fstar-wars.jpg"
								cTitle="Lorem ipsum dolor sit amet"
								cDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                                                pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                                                Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                                                in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora"
							/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
