let dbUsers = [

{
    username: "wany",
    password: "password",
    name:"nur syazwany",
    email:"syazwany183@gmail.com"

},
{
    username: "mal",
    password:"kemal193",
    name:"kemal",
    email:"kemal193@gmail.com"
}
]

function login (username, password){     //what it needs to be wrote down
     console.log("someone try to login with",username,password)
     let matched = dbUsers.find(element => 
        element.username == username       //want to find something from database
        
     )  
     if (matched){
        if (matched.password == password){
            return matched
        
        }else {
            return "Password not matched"
        }
     } else {
        return"username not found"
     }   
     //console.log(matched)                  

} 

//try to login (function)
login("wany","password")
//login("mal","mal193")
console.log(login("nini","123"))