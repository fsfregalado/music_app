import React from 'react';
import { Link } from 'react-router-dom';

const musicItem = (props) => (
    <Link to={`/music/${props.id}`}>
        <li>
            {props.title}, {props.artist}, {props.year}
        </li>
    </Link>
);

export default musicItem;