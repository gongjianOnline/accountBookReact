import {useState} from "react"
import {createId} from "./lib/createld";

const useTags = ()=>{ //封装自定义Hooks
    const [tags,setTages] = useState<{id:number;name:string}[]>([
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'},
    ])
    return {
        tags,
        setTages
    }
}

export {useTags}
