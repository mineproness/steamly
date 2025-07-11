"use server"
export async function GetGOOGLE_ID(){
    return process.env.GOOGLE_ID
}

export async function GetGOOGLE_CLIENT(){
    return process.env.GOOGLE_CLIENT
}