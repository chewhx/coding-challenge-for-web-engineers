import { useSelector } from 'react-redux';
import { RootState } from '../modules/store';

export const useAuth = () => {
	return useSelector((state: RootState) => state.auth);
};
