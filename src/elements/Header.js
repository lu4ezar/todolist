import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = ({ text, variant = 'h4', children }) => (
	<>
		<Typography variant={variant}>{text}</Typography>
		{children}
	</>
);

export default Header;
