import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';

const Loading = () => {
	return (
		<Stack direction="vertical" gap={2} className="text-center">
			<Spinner animation="border" className="mx-auto" />
			<p>Loading...</p>
		</Stack>
	);
};

export default Loading;
