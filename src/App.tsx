import { Thumbmark } from "@thumbmarkjs/thumbmarkjs";
import { useEffect, useState } from "react";
import IpTrack from "./components/IpTrack";

function App() {
	const [visitorId, setVisitorId] = useState("");

	useEffect(() => {
		// Create Thumbmark instance
		const tm = new Thumbmark();
		// Get fingerprint asynchronously
		tm.get().then((fp) => {
			console.log(fp); // Print fingerprint in console
			setVisitorId(fp.thumbmark); // Save fingerprint to state
		});
	}, []); // Run effect only once on mount

	return (
		<div>
			<h2>Visitor ID:</h2>
			<p>{visitorId}</p>
			<IpTrack />
		</div>
	);
}

export default App;
