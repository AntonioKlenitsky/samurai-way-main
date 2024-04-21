import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import photo from "../../assets/images/A.png";
import {Post} from "./Profile/My_Posts/Post/Post";
import {MyPosts} from "./Profile/My_Posts/MyPosts";

export const Content = () => {
    return (
        <StyledContent>
            <Container>
                <FlexWrapper>
                    <StyleImage src={photo} alt={"no photo"}/>
                </FlexWrapper>
                <MyPosts/>
            </Container>
        </StyledContent>
    );
};


const StyledContent = styled.section `
    text-align: left;

`

const StyleImage = styled.img`

`
