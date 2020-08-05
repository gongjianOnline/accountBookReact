import React from 'react'
import {useTags} from "../useTags";
import {useParams} from "react-router-dom"
import Layout from "../components/Layout";
import Icon from "../components/icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input"
import {Center} from "../components/center";
import {Space} from "../components/space";
type Params = {
    id:string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`
const InputWrapper = styled.div`
  background: #fff;
  padding: 14px 16px;
  margin-top: 16px;
`
const Tag:React.FC = ()=>{
    const {findTag,updateTag,deleteTag} = useTags();
    let {id:idString} = useParams<Params>()
    const tagContent = (tag:{id:number;name:string})=>{
        return (
          <div>
              <InputWrapper>
                  <Input label="标签名"
                         placeholder="标签页"
                         value={tag.name}
                         onChange={(e)=>{updateTag(tag.id,{name:e.target.value})}}/>
              </InputWrapper>
              <Center>
                  <Space/>
                  <Space/>
                  <Button onClick={()=>{deleteTag(tag.id)}}>刪除标签</Button>
              </Center>
          </div>
        )
    }
    const tag = findTag(parseInt(idString));
        return (
            <Layout>
                <Topbar>
                    <Icon name="left"/>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                {tag?tagContent(tag):<Center>tag不存在</Center>}
            </Layout>
        )
}
export {Tag}