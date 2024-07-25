import React from "react";
import Carousel from "../component/carrousel.jsx";


export const Home = () => (
	<div className="text-center overflow-hidden">
		<h1 className='display-3 text-start ms-5 text-warning mt-4 mb-3'>Characters</h1>
		<Carousel items='people'/>
		<h1 className='display-3 text-start ms-5 text-warning mt-4 mb-3'>Planets</h1>
		<Carousel items='planets'/>
	</div>
);