import React, { useState, useEffect } from "react";

const Footer = props => {
    const {explanation, date, copyrightName} = props
    return (
        <div>
            <h3>{date}</h3>
            <p>{explanation}</p>
            <p>{`Copyright: ${copyrightName}`}</p>
        </div>
    );
};

export default Footer;