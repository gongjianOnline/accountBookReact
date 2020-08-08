import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";

const Mylayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`
type Category = '-' | '+'
const defaultFormDate = {
    tagIds:[] as number[],
    note:"",
    category:'-' as Category,
    amount:0,
}
function Money() {
    const [selected,setSelected] = useState(defaultFormDate)
    const {addRecord} = useRecords()
    type Selected = typeof selected;
    const  onChange = (obj:Partial<Selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    const submit = ()=>{
        if(addRecord(selected)){
            alert("保存成功")
            setSelected(defaultFormDate)
        };

    }

    return (
        <Mylayout>

            <TagsSection value={selected.tagIds}
                         onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={(note)=>onChange({note})}/>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category)=>onChange({category})}/>
            </CategoryWrapper>
            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>onChange({amount})}
                              onOk={submit}/>
        </Mylayout>
    )
}
export  default  Money






