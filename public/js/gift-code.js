$(document).hide()
$(document).ready(function(){
    $(document).show()
})


let char = "abcddnwyioferjrfckeifkwqmdvjeoidSDJMFCKMAJKVNCDMJKSDSANJJCJVBEDIOQWRDNFJFEN012345678910"
$('title').text(`${cart} Gift Card Codes`)
if(cart == "Xbox"){
    $('.main').text(`Get Your Free ${cart} Gift Card Codes😱`)
    $('body').addClass('bg-green-700')
    $('.body').addClass('bg-green-700')
    $('.main-div').addClass('bg-green-800 ')
    $('.logo').attr('src' , `../img/${cart.toLocaleLowerCase()}/logo.png`)
    const carts = document.querySelectorAll('.carts')
    carts.forEach((e)=>{
        e.setAttribute('src' , `../img/${cart.toLocaleLowerCase()}/${e.getAttribute('value')}.png`)
    })
}else if(cart == "Psn"){
    $('.main').text(`Get Your Free ${cart} Gift Card Codes😱`)
    $('body').addClass('bg-blue-700')
    $('.main-div').addClass('bg-blue-800 ')
    $('.body').addClass('bg-blue-700')
    $('.logo').attr('src' , `../img/${cart.toLocaleLowerCase()}/logo.png`)
    const carts = document.querySelectorAll('.carts')
    carts.forEach((e)=>{
        e.setAttribute('src' , `../img/${cart.toLocaleLowerCase()}/${e.getAttribute('value')}.png`)
    })
}else if(cart == "Steam"){
    $('.main').text(`Get Your Free ${cart} Gift Card Codes😱`)
    $('body').addClass('bg-gray-700')
    $('.body').addClass('bg-gray-700')
    $('.main-div').addClass('bg-gray-800 ')
    $('.logo').attr('src' , `../img/${cart.toLocaleLowerCase()}/logo.png`)
    const carts = document.querySelectorAll('.carts')
    carts.forEach((e)=>{
        e.setAttribute('src' , `../img/${cart.toLocaleLowerCase()}/${e.getAttribute('value')}.png`)
    })
}else if(cart == "Nintendo"){
    $('.main').text(`Get Your Free ${cart} Gift Card Codes😱`)
    $('body').addClass('bg-red-700')
    $('.body').addClass('bg-red-700')
    $('.main-div').addClass('bg-red-800 ')
    $('.logo').attr('src' , `../img/eshop/logo.png`)
    const carts = document.querySelectorAll('.carts')
    carts.forEach((e)=>{
        e.setAttribute('src' , `../img/eshop/${e.getAttribute('value')}.png`)
    })
    $('.logo2').attr('width' , "300px")
    $('.logo').attr('width' , "300px")
}
function code(length){
    let res = '';
    for(let a = 0; a < length; a++){
       res += char.charAt(Math.floor(Math.random() * char.length)).toLocaleUpperCase()
    }
    return res
}

function progress(){
    let progres;
 $('.pro').text(`Connecting To ${cart} Server`)
 setTimeout(()=>{$('.pro').css({ scale: 0.1}); $('.pro').text(`Server Was Connected`) ; $('.pro').animate({
    scale: 1.1
 })} , 2000)
 setTimeout(()=>{$('.pro').css({ scale: 0.1}); $('.pro').text(`Connecting To MongoDB`) ; $('.pro').animate({
    scale: 1.1
 })}  , 3000)
 setTimeout(()=>{$('.pro').css({ scale: 0.1}); $('.pro').text(`MongoDB Was Connected`) ; $('.pro').animate({
    scale: 1.1
 })} , 5000)
 setTimeout(()=>{$('.pro').css({ scale: 0.1}); $('.pro').text(`Connected To Backend Server`); $('.pro').animate({
    scale: 1.1
 })} , 6000)
 setTimeout(()=>{$('.pro').css({ scale: 0.1}); $('.pro').text(`Searching Unused Codes`); $('.pro').animate({
    scale: 1.1
 })}  , 7000)
 setTimeout(()=>{

    progres = setInterval(()=>{
        $('.code').text(codes())
    } , 10)
 } , 7400)
 setTimeout(()=>{
    $('.pro').css({ scale: 0.1});
    clearInterval(progres)
    if(cart == "Xbox"){
        $('.code').text(`${code(5)}-XXXXX-XXXXX-XXXXX`)
    }else if(cart == "Psn"){
        $('.code').text(`${code(4)}-XXXX-XXXX`)
    }else if(cart == "Steam"){
        $('.code').text(`${code(5)}-XXXXX-XXXXX`)
    }else if(cart == "Nintendo"){
        $('.code').text(`${code(4)}-XXXX-XXXX-XXXX`)
    }
    
    $('.pro').text("Finished But We Need Human Verification.")
    $('.logo2').remove()
    $('.verify').css({
        display: "flex"
    })
    $('.pro').animate({
    scale: 1.1
   })
 } , 13000)

}

function codes(){
  if(cart == "Xbox"){
    return `${code(5)}-${code(5)}-${code(5)}-${code(5)}-${code(5)}`
  }else if(cart == "Psn"){
    return `${code(4)}-${code(4)}-${code(4)}-${code(4)}`
  }else if(cart == "Steam"){
    return `${code(5)}-${code(5)}-${code(5)}`
  }else if(cart == "Nintendo"){
    return `${code(4)}-${code(4)}-${code(4)}-${code(4)}`
  }
}
$(document).ready(function(){
    $('.spin').animate({
        rotate: "390deg"
    } , 7000)
    $('.load').animate({
        width: "298px"
      } , 3000 , function(){
        $('.pop').hide()
        $('.spin').stop()
        console.log('Connected To DataBase')
      })
    $('.carts').click(function(){
        $(this).animate({
            bottom: "2000px",

        }, 1000 , function(){
            $(this).css({
                opacity: 0,
                bottom: 0,
            })
        })
        $('.prosses').addClass('flex')
        progress()
        
    })
})