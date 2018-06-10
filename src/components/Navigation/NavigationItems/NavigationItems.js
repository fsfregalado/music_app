import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} active>All songs</NavigationItem>
        <NavigationItem link={"/"}>My favs</NavigationItem>
        <NavigationItem link={"/"}>Login</NavigationItem>
    </ul>
);

export default navigationItems;