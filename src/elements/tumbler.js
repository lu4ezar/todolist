import React from 'react';
import PropTypes from 'prop-types';
import {
	Checkbox,
	Label,
	Container,
	GridRow,
	Grid,
	GridColumn
} from 'semantic-ui-react';
import styled from 'styled-components';
// import './tumbler.css';

const StyledTumbler = styled.input`
	background: lightgrey;
	border-radius: 8px;
	color: red;
	width: 3em;
`;

const Tumbler = props => (
	<StyledTumbler type="range" min="0" max="1" value={props.value} />
);

/*const Tumbler = (props) => {
    const {caption, left, right, checked} = props;
    return (
        /* <React.Fragment>
        <Container>
            <div className="tumbler">
                <Grid columns={4} divided>
                    <GridColumn>
                        <GridRow>
                            <Label className="top label">{caption}</Label>
                        </GridRow>
                        <GridRow>
                            <Label className="toggle label left">{left}</Label>
                            <Checkbox onClick={(e, data) => props.handleChange(data)} name="toggle" checked={checked} toggle />
                            <Label className="toggle label right">{right}</Label>
                        </GridRow>
                    </GridColumn>
                </Grid>
            </div>
        </Container>
        /* </React.Fragment>
    )
}*/

Tumbler.propTypes = {
	caption: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string
};

Tumbler.defaultProps = {
	left: 'Off',
	right: 'On',
	caption: 'CAPTION'
};

export default Tumbler;
