document.getElementById("round").addEventListener("click",function(){
    var x = document.querySelector("#d9");
    x.style.display="block";
});

document.getElementById("add").addEventListener("click",function(){
    var y = document.querySelector("#sub5");
        let cno=document.getElementById("u2").value;
        let exp=document.getElementById("u3").value;
        let nm=document.getElementById("u1").value;

        if(cno==="" || exp==="" || nm===""){
            alert("All fields are mandatory");
        }
        else{
            alert("Your Card is Added To Amazon Prime...");
            y.style.backgroundColor="#1a618e";
            y.style.color="white";
            var work= document.getElementById("add").value;
            localStorage.setItem("work",work);
        }
});

var ans = localStorage.getItem("item");
document.querySelector("#p5").innerHTML=`₹${ans}`;
if(ans==null){
    document.querySelector("#p5").innerHTML="Amount";
}




    document.getElementById("sub5").addEventListener("click",function(){
        var working=localStorage.getItem("work");
         console.log("working",working);
         if(working==null){
          alert("Please Fill the all details...");
   }else{
     var fes = localStorage.getItem("item");
    alert(`Rs.${fes}, debited to your Bank Account, Payment is SucessFull.....`);
    setTimeout(function(){
        alert("Thank You, Enjoy your Prime Membership.")
    },2000);
    setTimeout(function(){
        window.location.href="prime.html";
    },3000);
   

  }
 

        
});
    // document.getElementById("sub5").addEventListener("click",function(){
        
    // });


