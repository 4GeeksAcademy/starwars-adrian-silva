import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import imgCharacters from "../../img/imgCharacters.png";
import imgPlanets from "../../img/imgPlanets.png"

const SeeMore = () => {
    const { actions, store } = useContext(Context);
    const { name, items, id } = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [elemento, setElemento] = useState('')

    useEffect(() => {
        const getUrl = async () => {
            const data = await items === 'people' ? store.people.find((elm) => elm.name === name) : store.planets.find((elm) => elm.name === name);
            setElemento(data)
            const partsUrl = data.url.split('/');
            const imageUrl = `https://starwars-visualguide.com/assets/img/${items === 'people' ? 'characters' : 'planets'}/${parseInt(partsUrl[5])}.jpg`;
            setUrl(imageUrl);
        };

        getUrl();
    }, [name, items, store.people, store.planets]);

    if (items === 'people') {
        return (
            <div className="container">
                <div className="card mb-3 d-flex flex-row bg-dark border-0 mt-4">
                    <div className="overflow-hidden mh-100 w-auto card-img-overlay-gradient">
                        <img src={url} onError={(e) => e.target.src = imgCharacters} className="card-img-start" alt="..." />
                    </div>
                    <div className="card-body text-light ms-5 d-flex flex-column">
                        <h5 className="card-title display-1">{elemento ? elemento.name : "Loading..."}</h5>
                        <h3 className="text-info">Birth year: <span className="text-warning">{elemento ? elemento.birth_year : "Loading..."}</span></h3>
                        <h3 className="text-info">Created: <span className="text-warning">{elemento ? elemento.created : "Loading..."}</span></h3>
                        <h3 className="text-info">Edited: <span className="text-warning">{elemento ? elemento.edited : "Loading..."}</span></h3>
                        <h3 className="text-info">Eye color: <span className="text-warning">{elemento ? elemento.eye_color : "Loading..."}</span></h3>
                        <h3 className="text-info">Hair color: <span className="text-warning">{elemento ? elemento.hair_color : "Loading..."}</span></h3>
                        <h3 className="text-info">Heigth: <span className="text-warning">{elemento ? elemento.heigth : "Loading..."}</span></h3>
                        <h3 className="text-info">Mass: <span className="text-warning">{elemento ? elemento.mass : "Loading..."}</span></h3>
                        <h3 className="text-info">Skin color: <span className="text-warning">{elemento ? elemento.skin_color : "Loading..."}</span></h3>



                        <button className="btn btn-outline-light mt-auto w-25" type="button" onClick={() => navigate('/')}>
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="card mb-3 d-flex flex-row bg-dark border-0 mt-4">
                    <div className="overflow-hidden mh-100 w-auto card-img-overlay-gradient">
                        <img src={url} onError={(e)=> e.target.src = imgPlanets} className="card-img-start" alt="..." />
                    </div>
                    <div className="card-body text-light ms-5 d-flex flex-column">
                        <h5 className="card-title display-1">{elemento ? elemento.name : "Loading..."}</h5>
                        <h3 className="text-info">Climate: <span className="text-warning">{elemento ? elemento.climate : "Loading..."}</span></h3>
                        <h3 className="text-info">Created: <span className="text-warning">{elemento ? elemento.created : "Loading..."}</span></h3>
                        <h3 className="text-info">Edited: <span className="text-warning">{elemento ? elemento.edited : "Loading..."}</span></h3>
                        <h3 className="text-info">Diameter: <span className="text-warning">{elemento ? elemento.diameter : "Loading..."}</span></h3>
                        <h3 className="text-info">Gravity: <span className="text-warning">{elemento ? elemento.gravity : "Loading..."}</span></h3>
                        <h3 className="text-info">Orbital period: <span className="text-warning">{elemento ? elemento.orbital_period : "Loading..."}</span></h3>
                        <h3 className="text-info">Population: <span className="text-warning">{elemento ? elemento.population : "Loading..."}</span></h3>
                        <h3 className="text-info">Terrain: <span className="text-warning">{elemento ? elemento.terrain : "Loading..."}</span></h3>
                        <button className="btn btn-outline-light mt-auto w-25" type="button" onClick={() => navigate('/')}>
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        );
    }
   
};

export default SeeMore;