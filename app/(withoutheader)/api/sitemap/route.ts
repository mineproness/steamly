import { GetPaths } from "@/lib/GetAllPath";
import mongo from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";


export const revalidate = 0;
export async function GET(request: NextRequest) {
    const {db} = await mongo()
    const users = await db.collection("users").find().toArray()
    const posts = await db.collection("Posts").find().toArray()
    const allpaths = await GetPaths()
   //  console.log(allpaths)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
   <loc>${process.env.BASE_URL}</loc>
      <lastmod>${new Date()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      
   ${users.map((e) => {
        return `
        <url>
      <loc>${process.env.BASE_URL}/@${e.username}</loc>
      <lastmod>${new Date()}</lastmod>
      </url>
      `
    })}
    ${allpaths.map((e) => {
        return `
        <url>
      <loc>${process.env.BASE_URL}/${e}</loc>
      <lastmod>${new Date()}</lastmod>
      </url>
      `
    })}
    ${posts.map((e) => {
        return `
        <url>
      <loc>${process.env.BASE_URL}/posts/${e.id}</loc>
      <lastmod>${new Date()}</lastmod>
      </url>
      `
    })}
      

</urlset> `
 return new Response(sitemap , {
    "headers":{
       "Content-Type": "application/xml"

    } 
    
 })
}