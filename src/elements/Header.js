import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = ({ text, variant = 'h4' }) => (
	<Typography variant={variant}>{text}</Typography>
);

export default Header;
