import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest , res : NextResponse) {
    const session = await (await cookies()).get("usertoken")
  if(req.url.includes("/login") || req.url.includes("/intro") || req.url.includes("/posts")) {
     return NextResponse.next()
  }else{
    if(!session) {return NextResponse.redirect(new URL("/login" , req.url))}

  } 
}


export const config  = {
 matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}