var show=document.getElementById("show")
var side=document.getElementById("side")
show.addEventListener("click",function(){
    side.style.left="0"

})
var close=document.getElementById("xmark")
close.addEventListener("click",function(){
    side.style.left="-60%"
})
