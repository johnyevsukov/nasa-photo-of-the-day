import React from "react";
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
background-color: ${pr => pr.theme.tertiaryColor};
margin: 0;
padding: 0;
`

const Header = props => {
    const {title} = props
    return (
        <StyledDiv>
            <h1>{title}</h1>
        </StyledDiv>
    );
};

export default Header;