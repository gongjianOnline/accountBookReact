import styled from "styled-components";
import React from "react";
import {useTags} from "../../hooks/useTags";
import {createId} from "../../lib/createld";
const Weapper = styled.section`
  background: #fff; 
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
    margin: 0 -12px;
    >li{
        background: #d9d9d9;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
        margin: 8px 12px;
        &.selected{
          background: #f60;
          color: #fff;
        }
    }
  }
  >button{
    background: none;
    border:none;
    padding: 2px 4px;
    border-bottom: 1px solid #666;
    margin-top: 8px;
  }
`
type Props = {
    value: number[];
    onChange: (selected:number[]) => void;
}

const TagsSection:React.FC<Props> = (props)=>{
    const {tags,setTages,addTag} = useTags()
    const selectTageIds = props.value;
    const ontoggleTag = (tagId:number)=>{
        const index = selectTageIds.indexOf(tagId)
        if(index >=0){
            //如果tag以被选中,就复制所有备选中tag,作为新的selectedTag
            props.onChange(selectTageIds.filter(t=>{return t !== tagId}))
        }else{
            props.onChange([...selectTageIds,tagId])
        }
    }
    const X = (tagId:number)=>{
        return selectTageIds.indexOf(tagId)>=0?'selected':''
    }
    return(
        <Weapper>
            <ol>
                {tags.map((time)=>{
                    return <li key={time.id}
                               onClick={()=>ontoggleTag(time.id)}
                               className={X(time.id)}>
                            {time.name}
                            </li>
                })}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Weapper>
    )
}

export  {TagsSection}