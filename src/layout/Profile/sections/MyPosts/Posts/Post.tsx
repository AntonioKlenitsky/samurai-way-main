import React from 'react';
import styled from "styled-components";
import photo from "../../../../../assets/images/A.png"



type PostPropsType = {
    title:string
    imageLink?:PhotoPropsType
}
type PhotoPropsType = {
    imageLink: string
}
export const Post = ({title, imageLink,...restProps}:PostPropsType ) => {
    return (
        <StylePost>
            <StylePhoto src={photo}/>
            {title}
        </StylePost>
    );
};

const StylePost = styled.div`
`
const StylePhoto = styled.img`
`