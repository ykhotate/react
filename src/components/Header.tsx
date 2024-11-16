import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import NavigateButton from './NavigateButton';
import { DEV_URL, HOME_URL, PROFILE_URL, WORK_URL } from '@/consts';
import { styled } from '@mui/material/styles';
const CustomAppBar = styled(AppBar)({
	position: 'fixed'
}) as typeof AppBar;

const Header = () => {
	return (
		<CustomAppBar color="violet" sx={{ width: '100%' }}>
			<Toolbar
				sx={{
					height: '100%',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'center'
				}}>
				<Stack direction={'row'}>
					<NavigateButton text={'HOME'} url={HOME_URL} />
					<NavigateButton text={'PROFILE'} url={PROFILE_URL} />
					<NavigateButton text={'WORK'} url={WORK_URL} />
					<NavigateButton text={'PERSONAL DEV'} url={DEV_URL} />
				</Stack>
			</Toolbar>
		</CustomAppBar>
	);
};
export default Header;
