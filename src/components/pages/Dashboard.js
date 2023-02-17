import React, { Suspense } from "react";
import "./home.css";
import chair from "../images/chair1.jpeg";
import chairsec from "../images/chair2.jpg";
import chairthird from "../images/chair3.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Furniture1";
import daun from "../images/daunnn.png";

const Dashboard = () => {
	return (
		<>
			<div className='column is-mobile gap-lg-2'>
				<div className='column  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-two-fifths-fullhd-ml-6'>
					<h1>Exotic minimal furniture.</h1>
					<p>
						Choose from a wide range of well-crafted premium quality wooden
						furniture online.
					</p>
					<br />

					<div className='column is-mobile'>
						<button className='button is-black is-medium is-responsive">'>
							Explore
						</button>
					</div>
				</div>

				<div className='column is-half'>
					<img
						className='daun'
						src={daun}
						alt=' '
						style={{
							backgroundColor: "transparent",
							width: "350px",
							height: "275px",
							position: "absolute",
							marginLeft: "560px",
							marginTop: "160px",
							rotate: "335deg",
						}}
					/>
					<Canvas
						camera={{ position: [500, 100, 20], fov: 15 }}
						style={{
							backgroundColor: "transparent",
							width: "50vh",
							height: "50vh",
						}}
					>
						<ambientLight intensity={1.25} />
						<ambientLight intensity={0.1} />
						<directionalLight intensity={0.4} />
						<Suspense>
							<Model position={[0.025, -35, 0]} />
						</Suspense>
						<OrbitControls />
					</Canvas>
				</div>
			</div>

			<div className='container'>
				<div className='row text-center'>
					<div className='col-2'></div>
					<div className='col-auto is-three-quarters-mobile'>
						<p className='vertical-text'>Featured</p>
					</div>
					<div className='col-3 column is-one-fifth is-full-mobile'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image'>
									<img
										src={chair}
										alt='placeholder'
									/>
								</figure>
								<p>Brush Crush</p>
								<p>$143</p>
							</div>
						</div>
					</div>
					<div className='col-3 column is-one-fifth  is-full-mobile'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image is-4by4'>
									<img
										src={chairsec}
										alt='placeholder'
									/>
								</figure>
								<p>Code Type</p>
								<p>$165.50</p>
							</div>
						</div>
					</div>
					<div className='col-3 column is-one-fifth  is-full-mobile'>
						<div className='card'>
							<div className='card-image'>
								<figure className='image is-3by3'>
									<img
										src={chairthird}
										alt='placeholder'
									/>
								</figure>
								<p>Peacock Crush</p>
								<p>$160.50</p>
							</div>
						</div>
					</div>
					<div className='col-auto is-full-mobile '>
						<button className='is-large mt-5 border-0'>
							<BsFillArrowRightCircleFill className='icon is-large ' />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
