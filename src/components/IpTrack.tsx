import { useEffect, useState } from "react";

const IpTrack: React.FC = () => {
	const [ip, setIp] = useState<string>("");
	useEffect(() => {
		fetch("https://api.ipify.org/?format=json")
			.then((res) => res.json())
			.then((data) => setIp(data.ip))
			.catch((e: any) => setIp("Error fetching IP"));
	}, []);

	return (
		<div>
			<h2>Your IP Address:</h2>
			<p>{ip}</p>
		</div>
	);
};

export default IpTrack;
