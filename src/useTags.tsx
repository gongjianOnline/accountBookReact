import {useState} from "react"
import {createId} from "./lib/createld";
const defaultTage = [
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name:'住'},
    {id:createId(),name:'行'},
]
const useTags = ()=>{ //封装自定义Hooks
    const [tags,setTages] = useState<{id:number;name:string}[]>(defaultTage)
    const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0]
    return {
        tags,
        setTages,
        findTag
    }
}

export {useTags}
