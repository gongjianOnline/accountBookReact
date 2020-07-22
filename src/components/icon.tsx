import React from "react";
// require("../icons/tag.svg");
// require("../icons/chars.svg");
// require("../icons/money.svg");

// 读取icon文件夹的所有svg图片
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
    name:string
}

const Icon = (props:Props)=>{
    return(
        <svg className="icon">
            <use xlinkHref={"#"+props.name}></use>
        </svg>
    )
}
export default  Icon