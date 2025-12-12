import React from "react";
import { ReactComponent as CheckSVG } from '../assets/check.svg';
import { ReactComponent as DeleteSVG } from '../assets/delete.svg';

const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />
};

function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span 
            className={`Icon Icon-svg Icon-${type}`}
            style={{ color: color }}
            onClick={onClick}
        >
            { iconTypes[type] }
        </span>
    );
}


export { TodoIcon };
