import { TextButton } from '../../../components';
import { useRadioProgramStore } from '../store';

const UpdateButton = () => {
	const fetchPrograms = useRadioProgramStore((state) => state.fetchPrograms);
	const handleUpdate = () => {
		fetchPrograms();
	};
	return <TextButton text={'更新'} onClick={handleUpdate} />;
};
export default UpdateButton;
