const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function
			fetchToGetAllItems: async (items) => {
				const store = getStore();

				let arrItems = [];
				let url = '';
				console.log('items:', items);	
				switch(items){
					case 'planets':
						url = process.env.BACKEND_URL + '/planet';
						break;
					case 'character':
						url = process.env.BACKEND_URL + '/character';
						break;
					default:
						console.error("Item not recognized");
						return;
				}

				try {
					const res = await fetch(url);
					if (res.ok) {
						const data = await res.json();
						
						console.log('Data received:', data);
						
						arrItems = data.results || [];

						//actualiza el store con los datos obtenidos
						switch (items) {
							case 'planets':
								setStore({ planets: arrItems})
								break;
							case 'people':
								setStore({ character: arrItems})
								break;
							default:
								break;
						}
					}else{
						console.error("Error fetching data:", res.statusText);
					}
					
				} catch (error) {
					console.error("Error fetching data: ", error);
				}
			},

			addFavorite: (items, index) => {
				const store = getStore();
				let newFavorite;
				if (items === 'characters') {
					newFavorite = store.character[index];
				} else {
					newFavorite = store.planets[index];
				}
				setStore({ favorites: [...store.favorites, newFavorite] });
			},

			removeFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(elm => elm.name !== name) });
				console.log(`Elemento con name ${name} ha sido eliminado`);
			},

			addPlanet: async (planetData) => {
				const url = process.env.BACKEND_URL + '/planet';
				try {
					const response = await fetch(url, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(planetData)
					});

					if (response.ok) {
						const data = await response.json();
						console.log("Planet created successfully:", data);
						// Puedes actualizar el estado local aquí si es necesario
					} else {
						const errorData = await response.json();
						console.error("Error creating planet:", errorData.msg);
					}
				} catch (error) {
					console.error("Error creating planet:", error);
				}

			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}
		}
	};
};

export default getState;