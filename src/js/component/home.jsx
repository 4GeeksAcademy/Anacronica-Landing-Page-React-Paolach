import React from "react";
import Navbar from "./Navbar";
import CardBig from "./CardBig";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle


//create your first component
const Home = () => {
	const textCardBig = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat, mollitia tempora nobis harum expedita delectus odio quia laudantium accusantium atque eveniet aliquid quidem magni sequi, quis sapiente dignissimos? Expedita?"
	return (
		<div className="text-center">
			<Navbar />
			<CardBig title="A Warm Welcome!" textoContent={textCardBig} buttonText="call to action" />
			<div className="row">
				<div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
					<Card id="1" imgUrl="https://picsum.photos/200/300?random=1" title="Card title" textoContent={textCardBig} buttonText="Find Out More" />
				</div>
				<div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
					<Card id="2" imgUrl="https://picsum.photos/200/300?random=2" title="Card title" textoContent={textCardBig} buttonText="Find Out More" />
				</div>
				<div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
					<Card id="3" imgUrl="https://picsum.photos/200/300?random=3" title="Card title" textoContent={textCardBig} buttonText="Find Out More" />
				</div>
				<div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
					<Card id="4" imgUrl="https://picsum.photos/200/300?random=4" title="Card title" textoContent={textCardBig} buttonText="Find Out More" />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
