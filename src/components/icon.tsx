import React from "react";
import cs from "classnames"
// require("../icons/tag.svg");
// require("../icons/chars.svg");
// require("../icons/money.svg");

// 读取icon文件夹的所有svg图片
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


//扩展Props的属性,将React的SVG的属性继承到props中
type Props = {
    name?:string
} & React.SVGAttributes<SVGElement>

const Icon = (props:Props)=>{
    const {name,children,className,...rest} = props;

    return(
        <svg className={cs('icon',className)} {...rest}>
            {props.name && <use xlinkHref={"#" + props.name}></use>}
        </svg>
    )
}
export default  Icon