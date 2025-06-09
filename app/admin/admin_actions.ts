"use server"
import db from '@/lib/connect'
import Userdata from '@/types/Userdata';
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { deserialize } from 'v8';
// import { json } from 'stream/consumers';
export async function getallinformation() {
    const allpost = await (await db.db("gcfree").collection("post").find().toArray())
    let view = 0;
    allpost.map(((e) => {
        view += e.view
    }))
    let postlength = allpost.length
    let comment = 0;
    allpost.map((e)=>{
        comment += e.commit.length
    })
    let like = 0;
    allpost.map((e)=>{
        like += e.like.length
    })
    return {
        view,
        postlength,
        comment,
        like
    }
}



export async function getallusers() {
    const userid = await (await cookies()).get("userid").value
    const allusers = await db.db("gcfree").collection("user").find().toArray();
    // const filteduser = allusers.filter(e => e.id !== Number(userid))
    return [
        ...allusers.map((e) => {
            return {
                username: e.username,
                id: e.id,
                password: e.password,
                email: e.email,
                admin: e.admin
            }
        })
        // ...allusers
    ]
}


export async function removeuser(id) {
    await db.db("gcfree").collection("user").deleteOne({ id: Number(id) })
    revalidatePath("/admin/user")
}

export async function getallpost() {
    return await db.db("gcfree").collection("post").find().toArray()
}



export async function upload(formdata: FormData) {
    const title : any = formdata.get("title")
    const html : any = formdata.get("html")
    const path : any = formdata.get("path")
    const img : any = formdata.get("img")
    const des : any = formdata.get("des")
    const keywords : any = formdata.get("keyword")
    const jsondata = {
        like: [],
        commit: [],
        view: 0,
        des,
        title,
        html,
        path,
        img,
        keywords: JSON.parse(keywords),
        id: Math.floor(Math.random() * 2020000)
    }

    await db.db("gcfree").collection("post").insertOne(jsondata)
    revalidatePath("/blog")
    revalidatePath("/admin")
    redirect("/")
}


export async function uploadfile(base64: Object) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const data = await fetch(`${process.env.API_URL}upload` , {
        body: JSON.stringify(base64),
        headers: myHeaders,
        method: "POST",
    })
    const res = await data.text()
    return res
}

export async function DeletePOST(id) {
 await db.db('gcfree').collection("post").deleteOne({ id : id })
 revalidatePath("/admin/posts")
 revalidatePath("/blog")
}

export async function findpost(path: string) {
    const collection = await db.db("gcfree").collection("post")
    const post = await collection.findOne({ id: path })
    return post;
}


export async function EditPOST(id , json) {
    await db.db("gcfree").collection("post").updateOne({ id : Number(id)} , {
        $set: {
           title: json.title,
           des: json.des,
           img: json.img,
           path: json.path,
           html: json.html,
           keywords: JSON.parse(json.keywords)
        }
    })
    revalidatePath("/admin/posts")
    revalidatePath("/blog")
}



export async function ResetAll() {
    const array = await db.db('gcfree').collection("post").find().toArray()
    await array.map(async (e)=>{
        await db.db("gcfree").collection("post").updateOne({ id : e.id} , { $set : {
            view: 0,
            commit: [],
            like: []
        }})
    })
    revalidatePath("/admin")
}


export async function Resetallposts(id) {
     await db.db("gcfree").collection("post").updateOne({ id : Number(id)} , { $set : {
            view: 0,
            commit: [],
            like: []
        }})
        revalidatePath("/admin/posts")
}