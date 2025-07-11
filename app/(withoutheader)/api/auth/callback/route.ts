import { GetGOOGLE_CLIENT, GetGOOGLE_ID } from "@/lib/Get";
import mongo from "@/lib/mongo";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {db} = await mongo()
    const tokenid = Math.floor(Math.random() * 99696996);
    const code = await req.nextUrl.searchParams.get("code")
    const token = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_CLIENT,
            redirect_uri: "http://localhost:3000/api/auth/callback",
            grant_type: "authorization_code"
        }).toString()
    })
  const tokenres = await token.json()
  const access_token = tokenres.access_token
  const user = await fetch("https://www.googleapis.com/oauth2/v2/userinfo" , {
    // method: "POST",
    headers: { Authorization: `Bearer ${access_token}` },
  })
  const userres = await user.json()
  const find = await db.collection("users").findOne({ id : Number(userres.id)})
  if(!find){
    const img = await fetch(userres.picture)
    const base = await img.arrayBuffer()
    const base64 = Buffer.from(base).toString("base64")
      const imgid = await fetch(`${process.env.BASE_URL!}/api/upload` , {
        method: "POST",
        body: JSON.stringify({
          base64
        }),
        cache: "no-cache"
      })
      const imgres = await imgid.json()
      const data = {
        id: Number(userres.id),
        // password: false,
        token: tokenid,
        username: userres.name,
        verfied: true,
        img: imgres.id,
        follwing: [],
        follow: [],
        email: userres.email,
        admin: false,
        message: [],
        status: true
    }
    await db.collection("users").insertOne(data);
    (await cookies()).set("usertoken", String(tokenid) , {expires: 3999999999})
    redirect("/")
    // return NextResponse.json(userres)
  }else{
    await db.collection("users").updateOne({ id : Number(userres.id)} , {
      $set:{
        token: tokenid
      }
    });
    (await cookies()).set("usertoken" , String(tokenid))
    redirect("/")
  }
}