
document.getElementById("res").addEventListener("click",function(){
    var bag = document.querySelector("#lang");
    bag.style.height="540px";
    bag.style.width="760px";
    // bag.style.overflow="scroll";
     bag.style.backgroundColor="#252e39";
     bag.style.marginLeft="530px";
     bag.style.marginTop="2px";
     bag.style.cursor="pointer"; 
     bag.style.display="block";
    // var y = document.querySelector("#main1");
    // y.style.transparent= "40%";
    
});
document.getElementById("t1").addEventListener("click",function(){
    var bag = document.querySelector("#lang");
    bag.style.height="540px";
    bag.style.width="760px";
    // bag.style.overflow="scroll";
     bag.style.backgroundColor="#252e39";
     bag.style.marginLeft="530px";
     bag.style.marginTop="2px";
     bag.style.cursor="pointer"; 
     bag.style.display="block";
    // var y = document.querySelector("#main1");
    // y.style.transparent= "40%";
    
});



document.querySelector("#main1").addEventListener("click",function(){
    var x = document.getElementById("lang");
    x.style.height="0px";
    x.style.width="0px";
})
document.querySelector("#nam").addEventListener("click",function(){
    window.location.href="signup.html";
});

var res = localStorage.getItem("name");
document.querySelector("#nam").innerHTML="Hi,"+" "+"  "+`${res}...`;
if(res==null){
    document.querySelector("#nam").innerHTML="SignUp"; 
}

document.querySelector(".su1").addEventListener("click",function(){
    var z = document.querySelector(".su1").value;
    console.log(z);
    localStorage.setItem("item",z);
    window.location.href="payment.html";
});

document.querySelector(".su").addEventListener("click",function(){
    var a = document.querySelector(".su").value;
    console.log(a);
    localStorage.setItem("item",a);
    window.location.href="payment.html";

});

document.querySelector(".sub").addEventListener("click",function(){
    if(res != null){
        window.location.href="payment.html";
    }
    else{
        window.location.href="signup.html";
    }
   
});

document.querySelector(".sub1").addEventListener("click",function(){
    if(res != null){
        window.location.href="payment.html";
    }
    else{
        window.location.href="signup.html";
    }
   
});
document.querySelector(".sub2").addEventListener("click",function(){
    if(res != null){
        window.location.href="payment.html";
    }
    else{
        window.location.href="signup.html";
    }
   
});

document.getElementById("logo3").addEventListener("click",function(){
    var as = document.querySelector("#hj");
    as.style.height="277px";
    as.style.width="478px";
    // bag.style.overflow="scroll";
    as.style.backgroundColor="#252e39";
    as.style.marginLeft="1100px";
    as.style.marginTop="2px";
    as.style.cursor="pointer"; 
    as.style.display="block";
    var j = document.getElementById("hj2");
    j.style.display="grid";
});

document.querySelector("#main1").addEventListener("click",function(){
    var x = document.getElementById("hj");
    x.style.height="0px";
    x.style.width="0px";
});
document.querySelector("#main1").addEventListener("click",function(){
    var j = document.getElementById("hj2");
     j.style.display="none";
});

document.getElementById("so").addEventListener("click",function(){
    document.querySelector("#nam").innerHTML="SignUp"
    localStorage.removeItem('work');
    localStorage.removeItem('item');
    localStorage.removeItem('name');
});

document.getElementById("log").addEventListener("click",function(){
    window.location.href="login.html";
})
