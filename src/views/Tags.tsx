import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/icon";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";
import {Center} from "../components/center";
import {Space} from "../components/space";


const Taglist = styled.ol`
      font-size: 16px;
      background: white;
      >li{
        border-bottom: 1px solid #d5d5d5;
        line-height: 20px;
        margin-left: 16px;
        >a{
           padding: 12px 16px 12px 0px;
           display: flex;
           justify-content:space-between;
           align-items: center;  
        }
      }
`
function Tags() {
    const {tags,addTag} = useTags()
    return (
        <Layout>
            <Taglist>
                {tags.map((item)=>{
                    return <li key={item.id}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Link to={'/tags/' + item.id}>
                            <span className="oneLine">{item.name}</span>
                            <Icon name='right'/>
                        </Link>
                    </li>
                })}
            </Taglist>
            <Center>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>

        </Layout>
    )
}
export default Tags