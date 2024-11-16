import { Box, Typography } from '@mui/material';
import RadikoImageLink from './RadikoLinkImage';

const PersonalDevelopLayout = () => {
	return (
		<>
			<Typography variant="h3" mt={3} ml={'auto'} mr={'auto'} mb={3}>
				個人開発したもの
			</Typography>
			<Box
				maxWidth={800}
				margin={1}
				border={'dashed thin violet'}
				padding={2}>
				<Typography variant="h4">ラジオ番組表</Typography>
				<Typography variant="body1" whiteSpace={'pre-wrap'} mt={2}>
					RADIKOのAPIから指定した日付のFM愛知の番組表を取得し、表示するようにしています。
					下のアイコンをクリックすることでラジオ番組表のページに遷移できます。
				</Typography>
				<RadikoImageLink />
			</Box>
		</>
	);
};

export default PersonalDevelopLayout;
