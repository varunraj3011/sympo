var show=document.getElementById("show")
var side=document.getElementById("side")
show.addEventListener("click",function(){
    side.style.right="0"

})
var close=document.getElementById("xmark")
close.addEventListener("click",function(){
    side.style.right="-60%"
})

