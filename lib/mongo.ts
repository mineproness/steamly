"use server"

import { MongoClient } from "mongodb"

export default async function mongo(){
  const client = new MongoClient(process.env.MONGO_URL!)
  //  await client.connect()
   const db = await client.db("steamly")
   return { db , client}
}