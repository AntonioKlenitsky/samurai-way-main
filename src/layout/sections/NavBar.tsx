import React from "react";
import {Container} from "../../components/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";


export const NavBar  = () => {
    return (
        <StyledNavBar>
            <Container>
                <FlexWrapper justify={'left'} >
                    <nav>
                        <div>
                            <a href="">Profile</a>
                        </div>
                        <div>
                            <a href="">Messages</a>
                        </div>
                        <div>
                            <a href="">News</a>
                        </div>
                        <div>
                            <a href="">Music</a>
                        </div>
                        <div>
                            <a href="">Settings</a>
                        </div>
                    </nav>
                </FlexWrapper>
            </Container>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`
    text-align: left;
    
`