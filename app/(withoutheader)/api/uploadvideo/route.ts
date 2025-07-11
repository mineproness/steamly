import mongo from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises'
export async function POST(req: NextRequest) {
    const db = await mongo()
    const { base64 } = await req.json()
    const base64data = base64.replace(/^data:.*;base64,/, '');
    const id = Math.floor(Math.random() * 130040005868556)
    const buffer = Buffer.from(base64data , "base64")
    await fs.writeFile(`./public/videos/${id}.mp4` , buffer)
    return NextResponse.json({ id : id})
}