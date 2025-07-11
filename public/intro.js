const obver = new IntersectionObserver((en)=>{
  en.map((e)=>{
    if(e.isIntersecting){
        e.target.classList.add("show")
        try {
          e.target.play()
        } catch (error) {
          
          
        }
    }else{
      e.target.style.transition = "all 0s"
      e.target.classList.remove("show")
      e.target.removeAttribute("style")
    }
  })
  
})

document.querySelectorAll(".hide").forEach((e)=> obver.observe(e))
const video= new IntersectionObserver(function(en){
   en.map((e)=>{
     if(e.isIntersecting){
       e.target.play()
     }else{
       e.target.pause()
     }
   })
 })
document.querySelectorAll("video").forEach((e)=>{
  video.observe(e)
})