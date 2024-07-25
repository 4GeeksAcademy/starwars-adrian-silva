import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import imgCharacters from "../../img/imgCharacters.png";
import notFound from "../../img/notFound.png";
import { useNavigate } from "react-router-dom";

const CardPeople = ({ elm, idx, url, items }) => {
  const { store, actions } = useContext(Context);
  const [classHeart, setClassHeart] = useState("heart-outline");
  const navigate = useNavigate()



  useEffect(() => {
    if (store.favorites.some((favorite) => favorite.name === elm.name)) {
      setClassHeart("heart");
    } else {
      setClassHeart("heart-outline");
    }
  }, [store.favorites]);
  
  const addOrRemoveFavorites = () => {
    console.log(store.favorites.some((favorite) => favorite.name === elm.name));
    if (store.favorites.some((favorite) => favorite.name === elm.name)) {
      actions.removeFavorite(elm.name);
    } else {
      actions.addFavorite(items, idx);
    }
  };
  const seeMore = (name, items) => {
    navigate(`/seemore/${items}/${name}`)
  }

  return (
    <div key={idx} className="d-flex justify-content-center">
      <div
        className="card bg-dark text-white text-start d-flex flex-column border-0"
        style={{ width: "95%" }}
      >
        <img
          src={url}
          className="card-img "
          alt="..."
          onError={(e) => (e.target.src = notFound)}
          style={{ minHeight: "463px" }}
        />
        <div className="card-img-overlay d-flex flex-column gradient ">
          <h2 className="card-title text-start">{elm.name}</h2>
          <h4 className="text-info">Birth year
            <span className="text-light">{elm.birth_year}</span>
          </h4>
          <h4 className="text-info">
            Eyes color: <span className="text-light">{elm.eye_color}</span>
          </h4>
          <h4 className="text-info">
            Height: <span className="text-light">{elm.height}</span>
          </h4>
          <div className="d-flex justify-content-between mt-auto">
            <button className="btn btn-outline-light" type="button" onClick={() => seeMore(elm.name, items)}>
              See more
            </button>
            <button
              className="btn btn-outline-danger d-flex align-items-center"
              type="button"
              onClick={addOrRemoveFavorites}
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

export default CardPeople;