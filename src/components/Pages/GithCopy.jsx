import axios from "axios";
import React, { useEffect, useState } from "react";
import Gith_card from "./Items/Gith_card";
import Gith_loading from "./Items/Gith_loading";
import "./styles/gith_style.css";

function GithCopy() {
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
	}, [setAppState]);

	return (
		<>
			<div>
				<h1>My Repositories</h1>

				<div class="gith">
					<GithLoading isLoading={appState.loading} repos={appState.repos} />
				</div>
			</div>
		</>
	);
}

export default GithCopy;
