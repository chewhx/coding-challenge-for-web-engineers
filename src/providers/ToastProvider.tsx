import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	return (
		<>
			{children}
			<Toaster position="top-center" toastOptions={{ duration: 5000 }} />
		</>
	);
};

export default ToastProvider;
