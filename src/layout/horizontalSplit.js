import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HorizontalSplit = props => (
	<Container className="my-5">
		<Row>
			<Col
				sm={{ order: 1 }}
				xs={{ order: 2 }}
				lg={{ span: 6, offset: 1 }}
			>
				{props.leftSide}
			</Col>
			<Col
				sm={{ order: 2 }}
				xs={{ order: 1 }}
				lg={{ span: 4, offset: 1 }}
			>
				{props.rightSide}
			</Col>
		</Row>
	</Container>
);

export default HorizontalSplit;
