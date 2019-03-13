import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Row from 'react-bootstrap/Row';
import Footer from './footer';
import { app } from '../utils/color';
import HorizontalSplit from './horizontalSplit';

const footerHeight = 5;

const InnerDiv = styled.div`
	background: ${app.background};
`;

const OuterDiv = styled(Container)`
	background: ${app.background};
	height: 100%;
`;

const Layout = props => (
	<OuterDiv className='d-flex flex-column' fluid>
		<Header clear={props.clear} handleChange={props.handleChange} />
		<InnerDiv className='flex-fill'>
			<HorizontalSplit
				leftSide={props.leftSide}
				rightSide={props.rightSide}
			/>
			<Row className='justify-content-center'>{props.bottom}</Row>
		</InnerDiv>
		<Footer height={footerHeight} />
	</OuterDiv>
);

export default Layout;
