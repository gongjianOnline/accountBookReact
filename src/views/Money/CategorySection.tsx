import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
    background: #c4c4c4;
    display: flex;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
          content: '';
          display: block;
          height: 3px;
          background: #333;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
      }
    }
  }
`
const CategorySection:React.FC = ()=>{
    const categorMap = {'-':'支出','+':'收入'}
    type keys =keyof typeof categorMap



    const [categorList] = useState<keys[]>(['-','+'])
    const [catrgory,setCategory] = useState('-') // +表示收入 -表示支出


    return (
        <Wrapper>
            <ul>
                {
                    categorList.map((item)=>{
                        return <li className={catrgory===item?'selected':''}
                            onClick={()=>{setCategory(item)}}>{categorMap[item]}</li>
                    })
                }


                {/*<li className={catrgory==='-'?'selected':''}*/}
                {/*    onClick={()=>{setCategory("-")}}>支出</li>*/}
                {/*<li className={catrgory==='+'?'selected':''}*/}
                {/*    onClick={()=>{setCategory('+')}}>收入</li>*/}
            </ul>
        </Wrapper>
    )
}
export  {CategorySection}