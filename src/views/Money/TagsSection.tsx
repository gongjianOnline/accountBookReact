import styled from "styled-components";
import React,{useState} from "react";

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

const TagsSection:React.FC = (props)=>{
    const [tags,setTages] = useState<string[]>(["衣","食","住","行"])
    const [selectTages,setSelectTages] = useState<string[]>([])
    const onAddTag = ()=>{
        const tageName =window.prompt("新标签的名称为")
        if(tageName){
            setTages([...tags,tageName])
        }
    }
    const ontoggleTag = (time:string)=>{
        const index = selectTages.indexOf(time)
        if(index >=0){
            //如果tag以被选中,就复制所有备选中tag,作为新的selectedTag
            setSelectTages(selectTages.filter(t=>{return t !== time}))
        }else{
            setSelectTages([...selectTages,time])
        }
    }
    const X = (item:string)=>{
        return selectTages.indexOf(item)>=0?'selected':''
    }
    return(
        <Weapper>
            <ol>
                {tags.map((time)=>{
                    return <li key={time}
                               onClick={()=>ontoggleTag(time)}
                               className={X(time)}>
                            {time}
                            </li>
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Weapper>
    )
}

export  {TagsSection}