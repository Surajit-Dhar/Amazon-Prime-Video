document.querySelector("#button").addEventListener("click",addLog);
var regUsers=JSON.parse(localStorage.getItem("sign_List"));
function addLog(){
    var mobileNo=document.querySelector("#mob").value;
    var passwd=document.querySelector("#passwd").value;

    if(mobileNo ==="12345" && passwd==="admin" ){
        window.location.href="admin.html";
    }
    else{
        isuser=false;
    for(var i=0;i<regUsers.length;i++){
    if(regUsers[i].itemMob == mobileNo && regUsers[i].itemPass == passwd){
        isuser=true;
        break;
    }
}
    if(isuser==true){
        alert("LogIn SucessFull");
        window.location.href="index.html";
    }
    else{
        alert("Invalid Mobile No.");
    }
        
}   

}   

document.querySelector(".create").addEventListener("click",function(){
    window.location.href="signup.html";
})