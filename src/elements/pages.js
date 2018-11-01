import React from 'react';
import PropTypes from 'prop-types'; 
import './pages.css';

const Pages =  props => {
    const {recordsPerPage, listLength, pageNumber, func} = {...props};
    const pages = (() => {
        const totalPages = Math.ceil(props.listLength / props.recordsPerPage);
        const records = Number(props.recordsPerPage);
        let arr = [];
        for (let i = 0; i < totalPages; i++) {
            const firstNumber = props.recordsPerPage * i + 1;
            const secondNumber = records  * i + records + ' ';
            const className = (i === props.pageNumber) ? "activePage" : '';
            arr.push(
                <label className={className}>
                    <input 
                        type="radio"
                        name="pageNumber"
                        value={i}
                        onChange={props.handleChange} 
                        checked={props.pageNumber === i}
                    />
                    {firstNumber}..{(secondNumber > props.listLength) ?  props.listLength : secondNumber}
                </label>
            );
        };
        return arr;
    })();

    const options = [3, 4, 5, 10];

    const selectDropDown = (() => {
        let arr = [];
        for (let i = 0; i < (options.length); i++) {
            if (options[i] < props.listLength) {
                arr.push(<option value={options[i]}>{options[i]}</option>);
            }
        }
        arr.push(<option value={props.listLength}>all</option>);
        return arr;
    })();

    const output  = props.listLength === 0
        ? <h3>Change filter settings</h3>
        : ( <React.Fragment>
        <fieldset className="left">
            {'   '}
            {pages}
        </fieldset>
        <fieldset className="right">
            records on page
        <select name="recordsPerPage" value={Number(props.recordsPerPage)} onChange={props.handleChange}>{selectDropDown}</select>
        </fieldset>
        </React.Fragment>);
    return (
        <fieldset>
            <legend>Pages</legend>
            {output}
        </fieldset>
    );
}

Pages.propTypes = {
	pageNumber: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,
    listLength: PropTypes.number.isRequired
}

export default Pages;