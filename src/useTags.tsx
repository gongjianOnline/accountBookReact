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
    const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0];
    const findTagIndex = (id:number) =>{
        let result = -1
        for(let i=0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i
                break;
            }
        }
        return result;
    }
    const updateTag = (id:number,obj:{name:string}) =>{
        const index = findTagIndex(id)
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone的第index删掉,换成{id:id,name:obj.name}
        tagsClone.splice(index,1,{id:id,name:obj.name})
        setTages(tagsClone)
    }
    const deleteTag = (id:number) =>{
        //获取要删除的下标
        const index = findTagIndex(id)
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        //把tagsClone的第index删掉
        tagsClone.splice(index,1)
        setTages(tagsClone)
    }
    return {
        tags,
        setTages,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag
    }
}
export {useTags}
