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
			<Typography variant="h3" mt={3} ml={'auto'} mr={'auto'} mb={3}>
				YK-HOTATE.COM
			</Typography>
			<Box
				maxWidth={800}
				margin={1}
				border={'dashed thin violet'}
				padding={2}>
				<Typography variant="h4">はじめに</Typography>
				<Typography variant="body1" whiteSpace={'pre-wrap'} mt={2}>
					{introduction}
				</Typography>
			</Box>
			<Box margin={1} border={'dashed thin violet'} padding={2}>
				<Typography variant="h4">更新履歴</Typography>
				<Box overflow={'auto'} maxHeight={200} border={'thick'}>
					<Stack direction={'column'} gap={2} margin={1}>
						{updateHistory
							.sort((a, b) =>
								new Date(a.date) < new Date(b.date) ? -1 : 1
							)
							.map((update, id) => (
								<Card key={id}>
									<Typography variant="body2" margin={1}>
										{update.date.toString()}
									</Typography>
									<Typography
										variant="body2"
										whiteSpace={'pre-wrap'}
										margin={1}>
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
