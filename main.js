var users = [];
document.getElementById("add").onclick = function(){
    var inpname = document.getElementById("name").value;
    document.getElementById("name").value = "";
    users.push(inpname);
    console.log(users);
    document.getElementById("show").innerHTML = users.length; 
}
