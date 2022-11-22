import { useState } from "react";

export default function YourColour() {
	const [favColour, setColour] = useState("#ffffff");
	console.log(favColour);
	return (
		<section id="yourColourSec" className="colour">
			<h2>What's Your Favourite Colour?</h2>
			<label htmlFor="yourFavColour">Select your favourite colour</label>
			<input
				onChange={(event) => {
					setColour(event.target.value);
					console.log(favColour);
				}}
				type="color"
				name="yourFavColour"
				id="yourFavColour"
				value="#ffffff"
			/>
			<div
				id="yourColourDiv"
				className="yourColourDiv"
				style={{ backgroundColor: favColour }}
			></div>
		</section>
	);
}

//setColour(event.target.value)
