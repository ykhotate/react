import { Box, Card, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

type HistoryType = {
	date: Date;
	title: string;
	contents: string;
};

async function fetchIntroduction(): Promise<string> {
	const response = await fetch('/react/introduction.txt');
	return response.text();
}

async function fetchUpdateHistory(): Promise<HistoryType[]> {
	const response = await fetch('/react/update-history.json');
	return response.json();
}

const Home = () => {
	const [introduction, setIntroduction] = useState<string>('');
	const [updateHistory, setUpdateHistory] = useState<HistoryType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const introData = await fetchIntroduction();
			setIntroduction(introData);

			const historyData = await fetchUpdateHistory();
			setUpdateHistory(historyData);
		};

		fetchData();
	}, []);

	return (
		<>
			<Typography variant="h4" margin={'40px auto'}>
				YK-HOTATE.COM
			</Typography>
			<Box maxWidth={800} margin={'20px auto'}>
				<Typography variant="h4">はじめに</Typography>
				<Typography variant="body1" whiteSpace={'pre-wrap'}>
					{introduction}
				</Typography>
			</Box>
			<Box margin={'20px auto'}>
				<Typography variant="h5">更新履歴</Typography>
				<Box
					overflow={'auto'}
					maxHeight={200}
					maxWidth={500}
					margin={'auto'}
					border={'thick'}>
					<Stack direction={'column'} gap={2} margin={1}>
						{updateHistory.map((update, id) => (
							<Card key={id}>
								<Typography
									variant="body2"
									whiteSpace={'pre-wrap'}>
									{update.contents}
								</Typography>
							</Card>
						))}
					</Stack>
				</Box>
			</Box>
		</>
	);
};

export default Home;
