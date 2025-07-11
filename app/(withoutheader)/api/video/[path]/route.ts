import { Findimage } from '@/app/server';
import { NextResponse } from 'next/server';
import fs from 'fs/promises'
export async function GET(req: Request, { params }) {
    const { path } = await params

        const buffer = await fs.readFile(`./public/videos/${path}.mp4`)
        
        return new Response(buffer, {
            status: 200,
            // headers:{
            //     'Content-Type': 'video/mp4', // Or 'image/jpeg' if it's a JPG
            //     'Content-Length': String(buffer.byteLength),
            //     'Cache-Control': 'public, max-age=3600', // Optional caching
            // }
        });

       
    
}
