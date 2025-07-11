

for (let a = 0; a < 1000; a++) {
    const title = document.querySelector("title").innerHTML.replaceAll("Steamly", "").replaceAll("-", "")
    const h1tag = document.querySelector(".title")
        if (title.trim() == "") {
            h1tag.innerHTML = "Home"
        } else {
            h1tag.innerHTML = title
        }

}



document.addEventListener("visibilitychange" , function(){
  if(document.visibilityState == "hidden"){
    new Notification("Come Back Nowwwwww!")
  }
})