import React from 'react';
import PropTypes from 'prop-types'; 
import Input from './input';
import './pages.css';

const Pages =  props => {

    let list = [...props.list];
    const listLength = list.length;
    const recordsPerPage = Number(props.recordsPerPage);
    const pageNumber = props.pageNumber;
    const totalPages = Math.ceil(listLength / recordsPerPage);

    const pages = (() => {
        let arr = [];
        for (let i = 0; i < totalPages; i++) {
            const firstNumber = recordsPerPage * i + 1;
            const secondNumber = recordsPerPage  * i + recordsPerPage + ' ';
            const caption = firstNumber === listLength
                ? firstNumber
                : `${firstNumber}..${secondNumber > listLength
                    ? listLength
                    : secondNumber}`
            const className = (i === pageNumber) ? "activePage" : "page";
            arr.push(
                <Input
                    key={i}
                    className={className}
                    type="radio"
                    name="pageNumber"
                    value={i}
                    onChange={props.handleChange} 
                    checked={pageNumber === i}
                    caption={caption.toString()}
                    right
                />
            );
        };
        return arr;
    })();

    const options = [3, 4, 5, 10];

    const selectDropDown = (() => {
        let arr = [];
        for (let i = 0; i < (options.length); i++) {
            if (options[i] < listLength) {
                arr.push(<option key={options[i]} value={options[i]}>{options[i]}</option>);
            }
        }
        arr.push(<option key="all" value={listLength}>all</option>);
        return arr;
    })();

    const output  = listLength === 0
        ? <h3>Change filter settings</h3>
        : ( <React.Fragment>
                <fieldset className="left">
                    {'   '}
                    {pages}
                </fieldset>
                <fieldset className="right">
                    records on page
                <select name="recordsPerPage" value={Number(recordsPerPage)} onChange={props.handleChange}>{selectDropDown}</select>
                </fieldset>
            </React.Fragment>
        );

    list = list.slice(pageNumber * recordsPerPage, (pageNumber + 1) * recordsPerPage);
    const pagesOffset = pageNumber * recordsPerPage;
	const children = React.cloneElement(props.children, {list: list, pagesOffset: pageNumber * recordsPerPage});

    return (
        /* <React.Fragment> */
        <div className="filters">
            List Length: {props.list.length}
            <fieldset>
                <legend>Pages</legend>
                {output}
            </fieldset>
			{children}
        </div>
        /* </React.Fragment> */
    );
}

Pages.propTypes = {
	pageNumber: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number.isRequired,
    // listLength: PropTypes.number.isRequired,
    list:PropTypes.array.isRequired
}

Pages.defaultProps = {
    list: {}
}
export default Pages;