import React from "react";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import styled from "styled-components";
import photo from "../../assets/images/A.png"


export const Header = () => {
    return (
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"left"}>
                        <StyledLogo src={photo} alt={'oops'}></StyledLogo>
                    </FlexWrapper>
                </Container>
            </StyledHeader>
    );
};

const StyledHeader = styled.header `
    background-color: green;
`
const StyledLogo = styled.img`
    max-width: 630px;
    max-height: 808px;
    
`