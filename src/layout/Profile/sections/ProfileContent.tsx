import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/A.png";
import {Post} from "./MyPosts/Posts/Post";
import {MyPosts} from "./MyPosts/MyPosts";

export const ProfileContent = () => {
    return (
        <StyledContent>
                <FlexWrapper>
                    <StyleImage src={photo} alt={"no photo"}/>
                </FlexWrapper>
                <MyPosts/>
        </StyledContent>
    );
};


const StyledContent = styled.section `
    text-align: left;

`

const StyleImage = styled.img`

`
