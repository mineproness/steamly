"use server"

import fs from 'fs'
import { readdir } from 'fs/promises'



export async function GetPaths() {
    const headerspath = (await readdir("./app/(headers)")).map((e)=> {
        if(e == "(auth)" || e.includes(".tsx") || e == "[username]"){
            return ""
        }else{
            return e
        }
    }).filter((e)=>{
        if(e == ""){
            
        }else{
            return e
        }
    })
    const withoutheader = (await readdir("./app/(withoutheader)")).map((e)=> {
        if(e == "(auth)" || e.includes(".tsx")|| e.includes("api") || e.includes("[username]")){
            return ""
        }else{
            return e
        }
    }).filter((e)=>{
        if(e == ""){
            
        }else{
            return e
        }
    })
    const auth = (await readdir("./app/(headers)/(auth)")).map((e)=> {
        if(e == "(auth)" || e.includes(".tsx") || e == "[username]"){
            return ""
        }else{
            return e
        }
    }).filter((e)=>{
        if(e == ""){
            
        }else{
            return e
        }
    })
    // return headerspath
    const allpaths = [...headerspath , ...auth , ...withoutheader]
    return allpaths

}