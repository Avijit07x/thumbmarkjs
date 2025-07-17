import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { useEffect, useState } from "react";

function App() {
	const [visitorId, setVisitorId] = useState("");

	useEffect(() => {
		// Load FingerprintJS instance
		FingerprintJS.load().then((fp) => {
			// Get the visitor's fingerprint
			fp.get().then((result) => {
				setVisitorId(result.visitorId);
				// You can POST this ID to backend API if needed
				// fetch('/api/login', { method: 'POST', body: JSON.stringify({ fingerprint: result.visitorId }) })
			});
		});
	}, []);

	return (
		<div>
			<h1>FingerprintJS Demo</h1>
			<p>
				<strong>Visitor ID:</strong> {visitorId}
			</p>
		</div>
	);
}

export default App;
