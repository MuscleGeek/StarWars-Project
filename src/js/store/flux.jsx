const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*exampleFunction: () => {
				getActions().changeColor(0, "green");
			},*/
			loadCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => {
						console.table("Fetching Planet data:", data);
						setStore({ characters: data.results });
					})
					.catch(err => console.error(err));
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => {
						console.log("Fetching Planets data: ", data);
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			addFavorites: () => {},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
