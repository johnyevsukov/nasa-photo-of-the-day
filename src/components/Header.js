import React, { useState, useEffect } from "react";

const Header = props => {
    const {title} = props
    return (
        <h1>{title}</h1>
    );
};

export default Header;