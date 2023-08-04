import React from "react";
import Card from "react-bootstrap/Card";
const Gith_card = (props) => {
	const { repos } = props;
	if (!repos || repos.length === 0)
		return (
			<>
				<p>No repos is found. Better create more projects my friend! </p>
			</>
		);
	return (
		<>
			{repos.map((repo) => {
				return (
					<Card className="m-1" key={repo.id} style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>{repo.name}</Card.Title>
							<Card.Text>{repo.description}</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
};
export default Gith_card;
