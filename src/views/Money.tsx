import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";

const Mylayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    // @ts-ignore
    return (
        <Mylayout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </Mylayout>
    )
}
export  default  Money






