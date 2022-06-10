import React, { PropsWithChildren } from 'react';
import Loading from './Loading';

interface Props extends PropsWithChildren {
	isLoading?: boolean;
}

const View = ({ children, isLoading }: Props) => {
	if (isLoading) {
		return <Loading />;
	} else {
		return <>{children}</>;
	}
};

export default View;
