import React from "react";
import {Container} from "../../components/Container";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Content} from "./Content";


export const NavBar  = () => {
    return (
        <StyledNavBar>
            <Container>
                <FlexWrapper justify={'left'} gap={"200px"} >
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
                    <Content/>
                </FlexWrapper>
            </Container>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`
    text-align: left;
    background-color: yellow;
    max-width: 25%;
        
`