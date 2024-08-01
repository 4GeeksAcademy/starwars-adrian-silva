import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Context } from "../store/appContext";
import CardPeople from "./cardPeople.jsx";
import CardPlanet from "./cardPlanet.jsx";

const Carousel = ({ items }) => {
    const { store } = useContext(Context);
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

    const getUrlParts = (url) => {
        if (!url) return null;
        const parts = url.split("/");
        return parts[5];
    };

    if (items === "character") {
        return (
            <Slider {...settings}>
                {store.character?.map((elm, idx) => {
                    const id = getUrlParts(elm.url);
                    if (!id) return null;
                    const url = `https://starwars-visualguide.com/assets/img/characters/${parseInt(id)}.jpg`;
                    return <CardPeople key={idx} elm={elm} idx={idx} url={url} items={items} />;
                })}
            </Slider>
        );
    } else if (items === "planets") {
        return (
            <Slider {...settings}>
                {store.planets?.map((elm, idx) => {
                    const id = getUrlParts(elm.url);
                    if (!id) return null;
                    const url = `https://starwars-visualguide.com/assets/img/planets/${parseInt(id)}.jpg`;
                    return <CardPlanet key={idx} elm={elm} idx={idx} url={url} items={items} />;
                })}
            </Slider>
        );
    }

    return null;
};

export default Carousel;
