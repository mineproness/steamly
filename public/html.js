
document.querySelectorAll("div").forEach(e => {
    if(e.classList.value.includes("item-center")){
        e.style.display = "flex"
        e.style.justifyContent = "center"
        e.style.alignItems = "center"
        e.style.textAlign = "center"
    }
});


