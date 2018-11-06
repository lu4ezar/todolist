import React from 'react';
import PropTypes from 'prop-types';
import './dumbList.css';


const DumbList = (props) => {
    if (!props.list.length) {
        return 	<h3>Choose another filter option or disable it.</h3>
    }
    const items = props.list.map((item, index) => {
        const className = "listItem " + 
                                        item.priority + 
                                        (item.completed
                                            ? " completed"
                                            : (item.isExpired
                                                ? " expired"
                                                : ""
                                            )
                                        );
        return (
            /* <li key={index} className={className} onClick={() => props.handleClick(index + props.offset)}>  */
                            <li key={index} className={className} onClick={() => props.handleClick(index + props.pagesOffset)}> 

                <h3>{item.task}</h3>
                <h4>{item.description}</h4>
            </li>
        );
    });
    return <ul>{items}</ul>
}

DumbList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

DumbList.DefaultProps = {
    list: []
}

export default DumbList;