import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import { HOME_URL } from '@/consts';

const HeaderLayout = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate(HOME_URL);
	}, []);
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
export default HeaderLayout;
