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
    const {findTag} = useTags();
    let {id} = useParams<Params>()
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <InputWrapper>
                <Input label="标签名" placeholder="标签页" />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Button>刪除标签</Button>
            </Center>
        </Layout>

    )
}
export {Tag}