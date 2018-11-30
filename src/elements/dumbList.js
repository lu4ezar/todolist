import React from "react";
// import PropTypes from 'prop-types';
import { Label, GridColumn, Segment, ItemMeta } from 'semantic-ui-react';
//import './dumbList.css';

const DumbList = props => {
    if (!props.list.length) {
        return <h3>Change filter settings or disable it.</h3>;
    }
    const items = props.list.map((item, index) => {
        const className =
            item.priority +
            //(props.active === index ? " active" : "") +
            ((item.status) && (item.status === "completed" ? " completed" : " expired"));
        let color;
            (item.status === "completed") && (color='green');
            (item.status === "expired") && (color='purple');
            (!item.status) && (color='grey');
        return (        
            <li
                key={index}
                className={className}
                //onClick={() => props.handleClick(index)}
                onClick={() => props.handleClick(item)}
            >
                <Segment>
                    <Label color={color} ribbon>{item.status ? item.status : item.priority}</Label>
                    <h3 className="text-right">{item.task}</h3>  
                    <h4 className="text-center">{item.description}</h4> 
                </Segment>
            </li>
        );
    });
    return <ul>{items}</ul>;
};

// DumbList.propTypes = {
//     list: PropTypes.array
// }

// DumbList.DefaultProps = {
//     list: []
// }

export default DumbList;
