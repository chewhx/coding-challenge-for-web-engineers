import React from 'react';
import { Provider } from 'react-redux';
import store from '../modules/store';

const StoreProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
