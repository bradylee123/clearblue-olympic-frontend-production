import React from 'react';

import clearblueLogo from '../../assets/images/logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={clearblueLogo} alt="MyBurger" />
    </div>
);

export default logo;
