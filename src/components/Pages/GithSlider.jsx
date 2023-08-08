import axios from "axios";
import React, { useEffect, useState } from "react";
import Gith_card from "./Items/Gith_card";
import Gith_loading from "./Items/Gith_loading";
import "./styles/gith_style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

function GithSlider() {
	const GithLoading = Gith_loading(Gith_card);
	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://api.github.com/users/herculeanMuscles/repos`;
		axios.get(apiUrl).then((repos) => {
			const allRepos = repos.data;
			setAppState({ loading: false, repos: allRepos });
		});
	}, []);

	return (
		<>
			<Swiper
				grabCursor
				centeredSlides
				slidesPerView="auto"
				effect="coverflow"
				loop
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				modules={[EffectCoverflow]}
			>
				<div className="swiper-wrapper">
					{appState.repos &&
						appState.repos.map((repo) => (
							<SwiperSlide key={repo.id}>
								<div
									style={{
										backgroundImage: `url(${repo.owner.avatar_url})`, // Utilize the owner's avatar URL as background image
									}}
									className="swiper-slide"
								>
									<h3>{repo.name}</h3> {/* Display the repository name */}
								</div>
							</SwiperSlide>
						))}
				</div>
				<div className="swiper-pagination"></div>
			</Swiper>
		</>
	);
}

export default GithSlider;
