function contactFunction(){
window.location="contact.html";

}
emailAddress=document.querySelector(".form-control");
password1=document.querySelector("#exampleInputPassword1");
function saveFunc(){

    localStorage.setItem("user", JSON.stringify(emailAddress.value));
    localStorage.setItem("password", JSON.stringify(password1.value));
alert("we will contact you via email soon");
}

function projFunc(){

    window.location="Qualification&project.html";
}

function backFunc(){

    window.location="index.html";
}