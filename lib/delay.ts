export default async function delay(time){
    await new Promise((resolv,reject)=> setTimeout(()=>{resolv("")} , time))
}