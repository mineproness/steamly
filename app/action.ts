"use server"
import db from "@/lib/connect";
import { name } from "@/lib/GetAllValue";
import { revalidateTag } from "next/cache";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import nodemailer from 'nodemailer'
export async function findpost(path: string) {
    const collection = await db.db("gcfree").collection("post")
    const post = await collection.findOne({ path: path })
    return post;
}
export async function sumbit(form) {
    await db.db("gcfree").collection("contact").insertOne(form)
    return {
        message: "Form Was Sumbited. We Reply Soon"
    }
    revalidatePath("/admin/contact")
}
export async function allpost() {
    const collection = await db.db("gcfree").collection("post").find().toArray()
    return collection;
}


export async function sendOPT(json: any) {
    const { email, opt } = json
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GOOGLE,
            pass: process.env.GOOGLE_PASSWORD
        }
    })
    await transport.sendMail({
        from: `${name} ${process.env.GOOGLE}`,
        to: email,
        subject: `Profile Verify For ${name}`,
        // text: ``,
        html: `
        <h2>Hi Bro . Wellcome To Our Website. For Verify We Need Opt here</h2>
        <h1>Opt : ${opt}</h1>`
    })
}


export async function signup(json : any) {
    const find = await db.db("gcfree").collection("user").findOne({ username : json.username})
    if(!find){
        await db.db("gcfree").collection("user").insertOne(json)
        revalidatePath("/admin/user")
        return "user logined"
    }else{
        return "Username is Used"
    }
    
}

export async function checkemail(email) {
    const emailfind  = await db.db("gcfree").collection("user").findOne({ email : email })
    return emailfind
}

export async function finduser(id) {
    const find = await db.db("gcfree").collection("user").findOne({ id : id})
    const data = await {
        username: find.username,
        password: find.password,
        id: find.id,
        email: find.email,
        admin: find.admin
    } 
    return data
}


export async function login(json) {
    const user = await db.db("gcfree").collection("user").findOne({
        username: json.username
    })
    const pass = await db.db("gcfree").collection("user").findOne({
        password: json.password
    })
    const find = user && pass
    if(!find){
         return {message: "Username Or Password Was Wrong"}
    }else{
        (await cookies()).set('userid' , String(pass.id))
        return {
            message: "User Was Logined",
        }
    }
}

export async function deleteuser(id) {
    await db.db('gcfree').collection("user").deleteOne({ id : id });
    (await cookies()).delete("userid");
    revalidatePath("/admin/user")
}


export async function updateuser(json) {
    await db.db("gcfree").collection("user").updateOne({ id : json.id } , { $set : { username: json.username , password: json.password } })
    revalidatePath("/admin/user")
}


export async function contact() {
    const all = await db.db("gcfree").collection("contact")
    const res = all.find().toArray()
    return res
} 


export async function findcontact(id) {
    const find = await db.db("gcfree").collection("contact").findOne({ id : id })
    const data = await {
        name: find.name,
        email: find.email,
        id: find.id,
        subject: find.subject,
        body: find.main,
        ip: find.id,
        date: find.date
    } 
    return data
}


export async function getview(id) {
    // console.log(id);
    
    const find : any = await db.db("gcfree").collection("post").findOne({  path : id })
    await db.db("gcfree").collection("post").updateOne({ path : id} , { $set : {
        view: find.view + 1
    }})
}


export async function getlike(id,json) {
     const find : any = await db.db("gcfree").collection("post").findOne({  id : id })
    await db.db("gcfree").collection("post").updateOne({ id : id} , { $set : {
        like: [...find.like , json]
    }})
    // console.log(id,json)
    revalidatePath("/blog/[id]")
    //  return await db.db("gcfree").collection("post").findOne({  path : id })
}



export async function getcomment(id,json) {
     const find : any = await db.db("gcfree").collection("post").findOne({  id : id })
    await db.db("gcfree").collection("post").updateOne({ id : id} , { $set : {
        commit: [...find.commit , json]
    }})
    // return await db.db("gcfree").collection("post").findOne({  path : id })
    revalidatePath("/blog/[id]")
}




export async function removecomment(id,cid) {
    const find = await db.db("gcfree").collection("post").findOne({ id : Number(id)})
    const filtercomment = find.commit.filter((e)=> e.id !== cid);
    await db.db('gcfree').collection("post").updateOne({ id : Number(id)} , {
        $set: { commit: filtercomment}
    })
    revalidatePath("/blog/[id]")
}