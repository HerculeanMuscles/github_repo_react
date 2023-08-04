import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import GithCopy from "./components/Pages/GithCopy";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/GithCopy"} element={<GithCopy />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
