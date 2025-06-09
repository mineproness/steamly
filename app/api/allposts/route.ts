import client from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
    const posts = await client.db("gcfree").collection("post").find().toArray()
    const users = await client.db("gcfree").collection("user").find().toArray()
    const contact = await client.db("gcfree").collection("contact").find().toArray()
    return NextResponse.json({
        posts,
        users,
        contact
    })
}