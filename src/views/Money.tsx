import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";

const Mylayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
function Money() {
    // @ts-ignore
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note:"",
        category:'-' as Category,
        amount:0
    })
    return (
        <Mylayout>

            <TagsSection value={selected.tags}
                         onChange={(tags)=>{setSelected({...selected,tags:tags})}}/>
            <NoteSection value={selected.note}
                         onChange={(note)=>{
                                setSelected({
                                    ...selected,
                                    note:note
                                })
                            }}/>
            <CategorySection value={selected.category}
                              onChange={(category)=>{
                                setSelected({
                                  ...selected,
                                  category:category
                                })
                              }}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>{
                                setSelected({
                                  ...selected,
                                  amount:amount
                                })
                              }}
                              onOk={()=>{}}/>
        </Mylayout>
    )
}
export  default  Money






