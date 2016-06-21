function Login() {
    var okay = 0;
    
    var user = document.getElementById("username").value;
    user=user.toLowerCase();
    
    var password = document.getElementById("password").value;
    password=password.toLowerCase();
    
    if (user=="admin" && password=="123") {
        window.location = "./adm/adm-index.html";
        okay = 1;
    } 
    if (user=="personal" && password=="123") {
        window.location = "./personal/personal-index.html";
        okay = 1;
    }
    if (user=="user" && password=="123") {
        window.location = "./user/user-index.html";
        okay = 1;
    }
    
    if (okay == 0)
        alert("Dados incorretos, tente novamente.");
}