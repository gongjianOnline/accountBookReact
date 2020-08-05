import {useEffect, useRef, useState} from "react"
import {createId} from "../lib/createld";
import {useUpdate} from "./useUpdate"
const defaultTage = [
]
const useTags = ()=>{ //封装自定义Hooks
    const [tags,setTages] = useState<{id:number;name:string}[]>([])
    const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0];
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        if(localTags.length === 0){
            localTags = [
                {id:createId(),name:'衣'},
                {id:createId(),name:'食'},
                {id:createId(),name:'住'},
                {id:createId(),name:'行'},
            ]
        }
        setTages(localTags)

    },[]) //组件挂载时执行
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
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
        //优化下面的写法
        setTages(tags.map(tag=>{
            if(tag.id === id){
                return {id,name:obj.name}
            }else{
                return tag
            }
        }))

        /****************************************************/
        // const index = findTagIndex(id)
        // //深拷贝tags得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把tagsClone的第index删掉,换成{id:id,name:obj.name}
        // tagsClone.splice(index,1,{id:id,name:obj.name})
        // setTages(tagsClone)
    }
    const deleteTag = (id:number) =>{
        // 优化下面的写法
        setTages(tags.filter((tag)=>{ return tag.id !== id}))
        /*********************************************/
        // //获取要删除的下标
        // const index = findTagIndex(id)
        // //深拷贝tags得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags))
        // //把tagsClone的第index删掉
        // tagsClone.splice(index,1)
        // setTages(tagsClone)
    }
    const addTag = ()=>{
        const tageName =window.prompt("新标签的名称为")
        if(tageName !== null && tageName !== ""){
            setTages([...tags,{id:createId(),name:tageName}])
        }
    }
    const getName = (id:number)=>{
        const tag = tags.filter(t=>t.id === id)[0]
        if(tag){
            return tag.name
        }else{
            return ''
        }
    }
    return {
        tags,
        setTages,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag,
        addTag,
        getName
    }
}
export {useTags}
