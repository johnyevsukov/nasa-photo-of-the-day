import React from "react";
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
background-color: ${pr => pr.theme.secondaryColor};

h3 {
    margin: 0;
}
`

const Footer = props => {
    const {explanation, date, copyrightName} = props
    return (
        <StyledDiv>
            <h3>{date}</h3>
            <p>{explanation}</p>
            <p>{`Copyright: ${copyrightName}`}</p>
        </StyledDiv>
    );
};

export default Footer;