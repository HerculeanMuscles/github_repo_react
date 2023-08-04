import React from "react";

function Gith_loading(Component) {
	return function Gith_loading({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<>
				<p style={{ textAlign: "center", fontSize: "25px" }}>
					Unos momentos por favor. We're getting the repos.
				</p>
			</>
		);
	};
}
export default Gith_loading;
