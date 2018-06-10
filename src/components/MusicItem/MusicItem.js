import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MusicItem.css';

const musicItem = (props) => (
    <div className={classes.MusicItem}>
        <Link to={`/music/${props.id}`}>
            <li>
                <div>
                    {props.title}
                </div>
                <div>
                    <span>artist: </span>{props.artist}
                </div>
                <div>
                    <span>year: </span>{props.year}
                </div>
            </li>
        </Link>
    </div>
);

export default musicItem;