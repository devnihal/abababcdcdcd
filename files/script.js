"use strict"

var navopened=false;
var device;
var prodmenuopen=false;
var loaded = false;
try{
    document.createEvent("TouchEvent")
    device="mobile";
}
catch(err){
    device="pc";
}
function openNav(){
    var l1 = document.querySelector(".ln1");
    var l2 = document.querySelector(".ln2");
    var l3 = document.querySelector(".ln3");
    document.querySelector(".nav_icon").style.transform="rotate(180deg)";
    document.querySelector(".nav_cont").style.left="30%";
    document.querySelector(".nav_cont").style.transitionDelay="0.3s";
    var bg = document.querySelector(".nav_bg");
    bg.style.left="0px"
    bg.style.transitionDelay="0s";
    var lnks = document.querySelectorAll(".nav_links");
    for(var i=0;i<lnks.length;i++){
        lnks[i].style.transition=(i+1)/2+"s";
        lnks[i].style.transitionDelay="0.5s";
        lnks[i].classList.toggle("linkFocus");
    }
    l1.classList.toggle("l1navop");
    l2.classList.toggle("l2navop");
    l3.classList.toggle("l3navop");
    var x1,x2;
    bg.ontouchstart=function(e){
        x1=e.touches[0].pageX;
    }
    bg.ontouchmove=function(e){
        x2 = e.touches[0].pageX;
    }
    bg.ontouchend=function(){
        if(x2-x1>45/100*innerWidth){
            navopened=false;
            closeNav();
        }
    }
    setTimeout(() => {
        for(var i=0;i<lnks.length;i++){
            lnks[i].style.transition="0.3s";
            lnks[i].style.transitionDelay="0s";
        }
    }, 500);
}
function closeNav(){
    if(prodmenuopen){
        navprodcatopen();
    }
    var l1 = document.querySelector(".ln1");
    var l2 = document.querySelector(".ln2");
    var l3 = document.querySelector(".ln3");
    document.querySelector(".nav_icon").style.transform="rotate(0deg)";
    document.querySelector(".nav_cont").style.left="100%";
    document.querySelector(".nav_cont").style.transitionDelay="0s";
    var bg = document.querySelector(".nav_bg");
    bg.style.left="100%"
    bg.style.transitionDelay="0.3s";
    var lnks = document.querySelectorAll(".nav_links");
    for(var i=0;i<lnks.length;i++){
        lnks[i].style.transition=(lnks.length-i)/2+"s";
        lnks[i].classList.toggle("linkFocus");
    }
    l1.classList.toggle("l1navop");
    l2.classList.toggle("l2navop");
    l3.classList.toggle("l3navop");
    bg.ontouchstart=null;
    bg.ontouchmove=null;
    bg.ontouchend=null;
    setTimeout(() => {
        for(var i=0;i<lnks.length;i++){
            lnks[i].style.transition="0.3s";
        }
    }, 0);
}
function navTask(){
    if(navopened){
        closeNav();
        navopened=false;
    }
    else{
        openNav();
        navopened=true;
    }
}


function submitform(e,el){
    e.preventDefault()
    el.submit();
    el.reset();
}

function navprodcatopen(){
    if(prodmenuopen)prodmenuopen=false;
    else{
        prodmenuopen=true;
    }
    if(device=="pc"){
        document.querySelector(".products_cat").classList.toggle("prod_cat_closed");
    }
    else{
        document.querySelector(".products_cat").classList.toggle("prod_cat_closed");
    }
}


function taketo(target){
    if(target=="abtme"){
        var loc = document.querySelector(".abtus");
        var y  = loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,0);
    }
    if(target=='fwcloc'){
        var loc = document.querySelector(".fwcloc");
        var y = loc.offsetParent.offsetTop+loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,y-80);
    }
    if(target=='hrgolloc'){
        var loc = document.querySelector(".hrgriolloc");
        var y = loc.offsetParent.offsetTop+loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,y-80);
    }
    if(target=='tstmnls'){
        var loc = document.querySelector(".tstmnls");
        var y = loc.offsetParent.offsetTop+loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,y-80);
    }
    if(target=='gttch'){
        var loc = document.querySelector(".fiels");
        var y = loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,y-80);
    }
    if(target=='lpbmloc'){
        var loc = document.querySelector(".lpbmloc");
        var y = loc.offsetParent.offsetTop+loc.offsetTop;
        if(device=="mobile" && navopened)closeNav();navopened=false;
        window.scrollTo(0,y-80);
    }
}

window.onclick=function(e){
    if(e.target!=document.querySelector(".prodmenu") && prodmenuopen){
        navprodcatopen();
    }
}

window.onload=function(){
    window.scrollTo(0,0);
    setTimeout(() => {
        loaded=true;
        window.scrollTo(0,0);
        document.querySelector(".loadScreen").style.transform="translate(-50%,0%)";
        document.querySelector(".loadScreen").style.opacity="0%";
        setTimeout(() => {
            document.querySelector(".loadScreen").remove()
        }, 500);
        document.querySelector(".main_logo").classList.add("mn_logo_anim");
        setTimeout(str,1000)
    }, 2000);
}
var els = document.querySelectorAll(".sepel");
for(var i=0;i<els.length;i++){
    els[i].style.transform="translateX(100px)";
    els[i].style.opacity="0%";
}
var secels = document.querySelectorAll(".tstcrd");
for(var i=0;i<secels.length;i++){
    secels[i].style.transform="translateY(50px)";
    secels[i].style.opacity="0%";
}
document.querySelector(".cardarea").addEventListener("scroll",str2)

window.addEventListener("scroll",str)
function str(){
    if(!loaded)return;
    var secels = document.querySelectorAll(".sepel");
    for(var i=0;i<secels.length;i++){
        var winheight = innerHeight;
        var objscrtop = secels[i].getBoundingClientRect().top;
        var pt = 180;
        if(objscrtop<winheight-pt){
            secels[i].style.transform="translateY(0px)";
            secels[i].style.opacity="100%";
            if(secels[i].classList.contains("tstmnls")){
                str2();
            }
        }
    }
}


function str2(){
    var secels = document.querySelectorAll(".tstcrd");
    for(var i=0;i<secels.length;i++){
        var width = document.querySelector(".cardarea").offsetWidth;
        var objscrtop = secels[i].getBoundingClientRect().left;
        var pt = 70;
        if(objscrtop<width-pt){
            secels[i].style.transform="translateY(0px)";
            secels[i].style.opacity="100%";
        }
    }
}

// function strl(){
//     if(!loadedst)return;
//     var secs = document.querySelectorAll(".scrlsec");
//     for(i=0;i<secs.length;i++){
//         var winheight = window.innerHeight;
//         var tp = secs[i].getBoundingClientRect().top;
//         var pt = 150;
//         if(tp<winheight-pt){
//             secs[i].style.opacity="100%";
//             secs[i].style.transform="translateX(0)";
//             if(secs[i].id=="sec3"){
//                 var sk = document.querySelectorAll(".skill");
//                 for(x=0;x<sk.length;x++){
//                     sk[x].style.transition="1s cubic-bezier(0.63, 1.29, 0.48, 1.32)";
//                     sk[x].style.transitionDelay=x/4+"s";
//                     sk[x].style.transform="scale(1)";
//                 }
//             }
//             else if(secs[i].id=="sec4"){
//                 var sk = document.querySelectorAll(".mywr");
//                 for(x=0;x<sk.length;x++){
//                     var winheightw = window.innerHeight;
//                     var tpw = sk[x].getBoundingClientRect().top;
//                     var ptw = 150;
//                     if(tpw<winheightw-ptw){
//                     sk[x].style.transition="1s";
//                     sk[x].style.transitionDelay=x/4+"s";
//                     sk[x].style.transform="translateX(0px)";
//                     sk[x].style.opacity="100%"
//                     }
//                 }
//             }
//         }
//     }
// }

function $alert(type){
    var html = `<div class="alertbg">
    <div class="alert_body">

    </div>
</div>`;
    var tmp = document.createElement("template");
    tmp.innerHTML=html;
    if(type=="cream"){
        tmp.content.querySelector(".alert_body").style.backgroundImage="url('./files/cream\ man.jpg')";
    }
    else if(type=="oil"){
        tmp.content.querySelector(".alert_body").style.backgroundImage="url('./files/oil\ man.jpg')";
    }
    tmp.content.querySelector(".alertbg").onclick=function(){
        this.classList.add("alertbg_close")
        this.onanimationend=function(){
            this.remove();
        }
    }
    document.body.appendChild(tmp.content);
}

function $formsubmit(el,e){
    e.preventDefault();
    var name = el.name.value;
    var loc = el.locality.value;
    var mess = el.message.value;
    var tosend = `Hi, Iam ${name} from ${loc}\n\n${mess}`;
    tosend=encodeURIComponent(tosend);
    window.open("https://wa.me/919074124407?text="+tosend,"_blank")
    el.reset();
}
