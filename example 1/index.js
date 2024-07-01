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

function login(username,password) {
    if ((username == users[0].username && password == users[0].password)) {
        alert(results[0].str);
    }else if ((username == users[1].username && password == users[1].password)){
        alert(results[1].str);
    }else{
        alert("Unauthorizated");
    }
}


login(username,password);
