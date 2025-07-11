"use server"

import mongo from "@/lib/mongo"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import fs from 'fs/promises'
import deleteid from "@/lib/deleteid"
const { db, client } = await mongo()



export async function GetSession() {

   return {
      userid: (await cookies()).get("usertoken"),
      admin: (await cookies()).get("_NEXT_ADMIN")
   }
}

export async function FindUser(name: string) {
   // const {db , client} = await mongo()

   const filtedname = name.replaceAll("%40", "").replaceAll("%20" , " ")
   const infomation = await db.collection("users").findOne({ username: filtedname })
   return infomation
}


export async function Logout() {
   (await cookies()).delete("usertoken")
   redirect("/")
}



export async function GetInfomationUser() {
   // const {db , client} = await mongo()

   const usertoken = (await cookies()).get("usertoken")
   //   console.log(usertoken);

   if (!usertoken) {
      return null
   } else {
      const user = await db.collection("users").findOne({ token: Number(usertoken.value) })
      // console.log(user)
      return user
   }

}


export async function UploadImage(base64: string) {
   // const {db , client} = await mongo()

   const base64data = base64.replace(/^data:.*;base64,/, '');
   // const id = Math.floor(Math.random() * 130040005868556)

   const fetchdata = await fetch(`http://localhost:3000/api/upload`, {
      method: "POST",
      body: JSON.stringify({ base64 })
   })
   const ids = await fetchdata.json()
   await db.collection("Images").insertOne(ids)
   return ids.id
}


export async function Findimage(id: string) {
   // const {db , client} = await mongo()

   const find = db.collection("Images").findOne({ id: Number(id) })
   return find
}


export async function Getposts(nowpage, nextpage) {
   // const {db , client} = await mongo()

   const collection = (await db.collection("Posts").find({}).toArray()).sort(() => 0.5 - Math.random()).slice(nowpage, nextpage)
   return [...collection.map((e) => ({ ...e, id: Number(e.id), _id: e._id.toString() }))]
}


export async function SetLike({ id, username }) {
   // const {db , client} = await mongo()

   await db.collection("Posts").updateOne({ id }, {
      $push: { like: { username } }
   })
   //  revalidatePath("*")
}

export async function RemoveLike({ id, username }) {
   // const {db , client} = await mongo()

   const post = await db.collection("Posts").findOne({ id })
   const like = post.like.filter((e) => e.username !== username)

   await db.collection("Posts").updateOne({ id }, {
      $set: { like: like }
   })
   //  revalidatePath("*")
}
export async function PostComment({ id, session, body, date }) {
   // const {db , client} = await mongo()

   await db.collection("Posts").updateOne({ id }, {
      $push: { comment: { coid: Math.floor(Math.random() * 959696966969), infomation: session, body, date } }
   })
   // revalidatePath("*")
}

export async function DeleteComment({ id, coid }) {
   // const {db , client} = await mongo()

   const exi: any = await db.collection("Posts").findOne({ id })
   const comment = exi.comment.filter((e) => e.coid !== coid)
   await db.collection("Posts").updateOne({ id }, {
      $set: { comment: comment }
   })
   // revalidatePath("*")

}

export async function Getpost(username: string) {
   // const {db , client} = await mongo()

   const posts = await db.collection("Posts").find().toArray()
   const filted = posts.filter((e) => {
      return e.author.username == username
   })

   return [...filted.map((e) => deleteid(e))]
}


export async function Follow({ id, fid, username, fusername }) {
   // const {db , client} = await mongo()

   await db.collection("users").updateOne({ id: fid }, {
      $push: { follow: username }
   })
   await db.collection("users").updateOne({ id }, {
      $push: { follwing: fusername }
   })
   // revalidatePath("*")
}


export async function unfollow({ id, fid, username, fusername }) {
   // const {db , client} = await mongo()/

   const followuser = await db.collection("users").findOne({ id: fid })
   const filtedfollwer = followuser.follow.filter((e) => e !== username)
   await db.collection("users").updateOne({ id: fid }, {
      $set: { follow: filtedfollwer }
   })
   const followuser2 = await db.collection("users").findOne({ id: id })
   const filtedfollwer2 = followuser2.follwing.filter((e) => e !== fusername)
   await db.collection("users").updateOne({ id: id }, {
      $set: { follwing: filtedfollwer2 }
   })
   // revalidatePath("*")
}

export async function FindPost(id) {
   // const {db , client} = await mongo()
   // 
   const res = await db.collection("Posts").findOne({ id: Number(id) })
   return res
}

export async function Finduser(username: string) {
   // const {db , client} = await mongo()


   const res = await db.collection("users").findOne({ username: username })
   return res

}



export async function UploadPost(formdata: {
   id: Number
   title: string,
   des: string,
   img: any,
   author: any,
   date: string,
   comment: []
   like: any
}) {
   // const {db , client} = await mongo()

   const { img, title, des, date, comment, like, author, id, } = formdata
   const buffer = Buffer.from(await img.arrayBuffer())
   const base64 = await buffer.toString("base64")
   const fetchdata = await fetch("http://localhost:3000/api/uploadvideo", {
      body: JSON.stringify({ base64 }),
      method: "POST"
   })
   const imgid = await fetchdata.json()
   // console.log(imgid);

   await db.collection("Posts").insertOne({
      id,
      title,
      des,
      date,
      comment,
      like,
      author,
      img: imgid
   })
   redirect("/posts")

}



export async function UpdatePost({ des, img, imgid, title, id }) {
   // const {db , client} = await mongo()

   if (!img) {
      await db.collection("Posts").updateOne({ id }, {
         $set: {
            des,
            title,
         }
      })
   } else {
      const buffer = Buffer.from(await img.arrayBuffer())
      const base64 = await buffer.toString("base64")
      await db.collection("Images").deleteOne({ id: imgid })
      const fetchdata = await fetch("http://localhost:3000/api/uploadvideo", {
         body: JSON.stringify({ base64 }),
         method: "POST"
      })
      const ids = await fetchdata.json()
      await db.collection("Posts").updateOne({ id }, {
         $set: {
            des,
            title,
            img: ids
         }
      })
   }
}


export async function Infomation(username: string) {
   // const {db , client} = await mongo()

   const posts = await Getpost(username)
   const like = await posts.map((e) => {
      return e.like.length
   })
   const comment = await posts.map((e) => {
      return e.comment.length
   })
   return {
      like,
      comment,
      posts
   }
}




export async function DeletePost(videoid) {
   // const {db , client} = await mongo()

   const video = await db.collection("Posts").findOne({ id: videoid })
   fs.rm(`./public/videos/${video.img.id}.mp4`)
   await db.collection("Posts").deleteOne({ id: videoid })
   revalidatePath("/posts")
   
   // redirect("/")
}



export async function GetMessage() {
   // const {db , client} = await mongo()

   return await db.collection("Message").find().toArray()
}

export async function Show() {
   console.log("Show Up")
}


export async function GetPostsLength() {
   return (await db.collection("Posts").find().toArray()).length
}