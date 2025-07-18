import { useEffect, useState } from "react";

const IpTrack: React.FC = () => {
	const [ip, setIp] = useState<string>("");
	useEffect(() => {
		const fetchIp = async () => {
			try {
				const res = await fetch("https://api.ipify.org/?format=json");
				const data = await res.json();
				setIp(data.ip);
				console.log("ip :", data.ip);
			} catch (error: any) {
				console.log(error);
			}
		};
		fetchIp();
	}, []);

	return (
		<div>
			<h2>Your IP Address:</h2>
			<p>{ip}</p>
		</div>
	);
};

export default IpTrack;
