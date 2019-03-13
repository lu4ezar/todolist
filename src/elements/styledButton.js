import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

export default props => (
	<BootstrapButton
		className="shadow-none"
		variant="outline-dark"
		{...props}
	/>
);
