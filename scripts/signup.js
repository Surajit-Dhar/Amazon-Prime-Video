document.querySelector("#button").addEventListener("click",addEvent);
var arr=JSON.parse(localStorage.getItem("sign_List"))||[];
function addEvent(event){
  
    var Passwd=document.querySelector("#pass").value;
    var PasswdAg=document.querySelector("#passag").value;
  
    var name=document.querySelector("#name").value;
    var mobileNo=document.querySelector("#mobile").value;


    var SignObj={
        itemName:name,
        itemMob:mobileNo,
        itemPass:Passwd,
        itemPasswdAg:PasswdAg
    };
    arr.push(SignObj);
    console.log(arr);
    localStorage.setItem("sign_List",JSON.stringify(arr));
    localStorage.setItem("name",name);
    if(Passwd != PasswdAg || mobileNo==""||name=="" ){
        document.getElementById("valid").innerHTML="** Please check Password Fill all Details **";
    }
    else{
        window.location.href="login.html";
    }

}

