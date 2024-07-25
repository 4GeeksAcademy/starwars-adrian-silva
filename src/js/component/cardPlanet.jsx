import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import imgPlanets from "../../img/imgPlanets.png";
import notFound from "../../img/notFound.png";
import { useNavigate } from "react-router-dom";


const CardPlanet = ({ elm, idx, url, items }) => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [classHeart, setClassHeart] = useState("heart-outline");

  useEffect(() => {
    if (store.favorites.some((favorite) => favorite.name === elm.name)) {
      setClassHeart("heart");
    } else {
      setClassHeart("heart-outline");
    }
  }, [store.favorites, elm.name]);

  const addOrRemoveFavorites = () => {
    if (store.favorites.some((favorite) => favorite.name === elm.name)) {
      actions.removeFavorite(elm.name);
    } else {
      actions.addFavorite(items, idx);
    }
  };
  const seeMore = (name, items) => {
    navigate(`/seemore/${items}/${name}`);
  };

  return (
    <div key={idx} className="d-flex justify-content-center">
      <div
        className="card bg-dark text-white text-start d-flex flex-column border-0"
        style={{ width: "95%" }}
      >
        <img
          src={url}
          className="card-img"
          style={{ minHeight: "463px" }}
          onError={(e) => (e.target.src = imgPlanets)}
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column gradient">
          <h2 className="card-title text-start">{elm.name}</h2>
          <h4 className="text-info">
            Climate: <span className="text-light">{elm.climate}</span>
          </h4>
          <h4 className="text-info">
            Terrain: <span className="text-light">{elm.terrain}</span>
          </h4>
          <h4 className="text-info">
            population: <span className="text-light">{elm.population}</span>
          </h4>
          <h4 className="text-info">
            diameter: <span className="text-light">{elm.diameter}</span>
          </h4>
          <div className="d-flex justify-content-between mt-auto">
            <button className="btn btn-outline-light" type="button" onClick={()=> seeMore(elm.name, items)}>
              See more
            </button>
            <button
              onClick={addOrRemoveFavorites}
              className="btn btn-outline-danger d-flex align-items-center"
              type="button"
            >
              <ion-icon
                name={classHeart}
                style={{ fontSize: "24px" }}
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlanet;