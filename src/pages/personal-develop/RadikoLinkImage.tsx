import { RADIO_PROGRAM_URL } from '@/consts';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function RadikoImageLink() {
	// async function fetchRadikoIcon(): Promise<[]> {
	// 	const response = await fetch('/react/update-history.json');
	// 	return response.json();
	// }

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const introData = await fetchRadikoIcon();
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<Box>
			{/* 画像をクリックするとURLに遷移 */}
			<Link to={RADIO_PROGRAM_URL} style={{ textDecoration: 'none' }}>
				<img
					src="./radiko-icon.jpg" // 画像のURL
					style={{
						width: '200px',
						height: 'auto',
						cursor: 'pointer'
					}}
				/>
			</Link>
		</Box>
	);
}

export default RadikoImageLink;
