import {useState} from "react"

const useTags = ()=>{ //封装自定义Hooks
    const [tags,setTages] = useState<string[]>(["衣","食","住","行"])
    return {
        tags,
        setTages
    }
}

export {useTags}
