let user = {
    name: "Vasundhara P S",
    age: 21,
    email: "2315028@nec.edu.in",
    isActive: false
};
console.log("User Profile Object:");
console.log(user);
function updateUser(userObj) {
    userObj.age = userObj.age + 1;        
    userObj.isActive = true;              
    userObj.email = "vasuprabakar1985@gmail.com";
    return `Updated User Details:
Name: ${userObj.name}
Age: ${userObj.age}
Email: ${userObj.email}
Account Active: ${userObj.isActive}`;
}
let result = updateUser(user);
console.log(result);
console.log("Original Object After Update:", user);