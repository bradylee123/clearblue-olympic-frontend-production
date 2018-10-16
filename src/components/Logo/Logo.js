import React from 'react';

import clearblueLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={clearblueLogo} alt="Logo" />
    </div>
);

export default logo;
