import {useState} from "react"

const useTags = ()=>{
    const [tags,setTages] = useState<string[]>(["衣","食","住","行"])
    return {
        tags,
        setTages
    }
}

export {useTags}
