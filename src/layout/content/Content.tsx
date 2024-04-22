import React from 'react';
import styled from "styled-components";
import {Dialogs} from "../Dialogs/Dialogs";
import {ProfileContent} from "../Profile/sections/ProfileContent";

export const Content = () => {
    return (
        <SectionMain>
            <ProfileContent/>
            <Dialogs/>
        </SectionMain>
    );
};

const SectionMain = styled.div`
`