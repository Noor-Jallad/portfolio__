//change navbar background
let navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
    if(window.scrollY>50)
    {
        navbar.classList.add("newBg-color");
        navbar.style.transition="0.7s"
    }
    else{
        navbar.classList.remove("newBg-color");
        navbar.style.transition="0.7s"
    }
})
//smooth behavior of translating through JS
let links=document.querySelectorAll("nav a");

links.forEach(function(link)
{
    link.addEventListener("click",function(e)
    {
        let currentId=e.target.attributes.href.value;
        let secPosition=document.querySelector(currentId).offsetTop;
        window.scroll({
            top:secPosition,
            behavior:smooth
        })
    })
});
//loading screen
var body=document.body;
body.style.overflow="hidden";
document.querySelector('.loading').style.opacity='1';
document.querySelector(".loading").style.visibility='visible';
document.querySelector(".loading").style.transition='0.7s';
window.addEventListener('load',function(){
 setTimeout(function(){
    document.querySelector(".loading").style.opacity='0';
    document.querySelector(".loading").style.visibility='hidden';
    body.style.overflow='auto';
},2000)
})

//Scroll to top

document.querySelector(".top").style.opacity='0';
document.querySelector(".top").style.visibility='hidden';
window.addEventListener('scroll',function()
{
 var aboutPos=document.getElementById("about").offsetTop;
 console.log(aboutPos);
 if(window.scrollY>aboutPos)
 {
    document.querySelector(".top").style.opacity='1';
    document.querySelector(".top").style.visibility='visible';
    document.querySelector(".top").style.transition='0.7s';
 }else{
    document.querySelector(".top").style.opacity='0';
    document.querySelector(".top").style.visibility='hidden';
    document.querySelector(".top").style.transition='0.7s';
 }
})
var topBtn=document.querySelector(".top button");
topBtn.addEventListener("click",function(){
 window.scroll(
    {
       top:0,
       behavior:'smooth'
    }
 )

});
    
