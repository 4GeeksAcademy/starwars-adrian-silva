const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function
			fetchToGetAllItems: async (items) => {
				const store = getStore();

				let page = 1;
				let thereIsMorePages = true;
				let arrItems = [];

				while (thereIsMorePages) {
					let url = `https://swapi.dev/api/${items}/?page=${page}`;
					try {
						const res = await fetch(url);
						if (res.ok) {
							const data = await res.json();
							data.results.forEach(element => {
								arrItems = [...arrItems, element];
							});
							if (data.next) {
								page++;
							} else {
								page = 1;
								thereIsMorePages = !thereIsMorePages;
							}

							switch (items) {
								case 'planets':
									setStore({ planets: arrItems });
									break;
								case 'people':
									setStore({ people: arrItems });
									break;
								default:
									break;
							}
						}
					} catch (error) {
						throw new Error(error);
					}
				}
			},

			addFavorite: (items, index) => {
				const store = getStore();
				let newFavorite;
				if (items === 'people') {
					newFavorite = store.people[index];
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

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}
		}
	};
};

export default getState;