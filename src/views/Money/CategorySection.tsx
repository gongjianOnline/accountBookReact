import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
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
type Props = {
  value:'-' | '+';
  onChange:(value:'-' | '+')=>void
}
const CategorySection:React.FC<Props> = (props)=>{
    const categorMap = {'-':'支出','+':'收入'}
    type keys =keyof typeof categorMap



    const [categorList] = useState<keys[]>(['-','+'])
    const category = props.value


    return (
        <Wrapper>
            <ul>
                {
                    categorList.map((item)=>{
                        return <li  className={category===item?'selected':''}
                                    key={item}
                                    onClick={()=>{props.onChange(item)}}>
                                {categorMap[item]}</li>
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