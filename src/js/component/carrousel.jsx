import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Context } from "../store/appContext";
import CardPeople from "./cardPeople.jsx";
import CardPlanet from "./cardPlanet.jsx";

const Carousel = ({ items }) => {
    const { actions, store } = useContext(Context);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
    };

    if (items === "people") {
        return (
            <Slider {...settings}>
                {store.people.map((elm, idx) => {
                    const partsUrl = elm.url.split("/");
                    const url = `https://starwars-visualguide.com/assets/img/characters/${parseInt(
                        partsUrl[5]
                    )}.jpg`;
                    return <CardPeople key={idx} elm={elm} idx={idx} url={url} items={items} />;
                })}
            </Slider>
        );
    } else if (items === "planets") {
        return (
            <Slider {...settings}>
                {store.planets.map((elm, idx) => {
                    const urlParts = elm.url.split('/')
                    const url = `https://starwars-visualguide.com/assets/img/planets/${parseInt(urlParts[5])}.jpg`;
                    return <CardPlanet key={idx} elm={elm} idx={idx} url={url} items={items} />;
                })}
            </Slider>
        );
    }
};

export default Carousel;