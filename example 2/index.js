var users = [
    {
        "username" : "user1",
        "password" : "123"
    },
    {
        "username" : "user2",
        "password" : "1234"
    }
];

var results = [
    {
        "str" : "result of the user1"
    },
    {
        "str" : "result of the user2"
    }
];

var username = prompt("username?");
var password = prompt("password?");

function isAdmin(username,password){
    console.log(username);
    console.log(password);
    for(i=0;i<users.length;i++){
        if (users[i].username == username && users[i].password == password) {
            return true;
        }
    }
    return false;
}

function login(username,password) {
    if (isAdmin(username,password)) {
        alert(results[0].str);
    }else{
        alert("Unauthorizated");
    }
}


login(username,password);
