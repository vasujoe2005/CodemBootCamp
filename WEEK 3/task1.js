let userProfile={
    name: "Vasundhara P S",
    age: 21,
    email: "2315028@nec.edu.in",
    isActive: true
};
console.log("User Profile Object:");
console.log(userProfile);
userProfile.name ="Vasundhara Joe";
userProfile.age =22;
userProfile["email"]="vasuprabakar1985@gmail.com";
userProfile["isActive"]=false;
userProfile["location"]="Arumuganeri";
console.log("Updated User Profile Object:");
console.log(userProfile);
console.log("Name:", userProfile.name);
console.log("Age:", userProfile.age);
console.log("Email:", userProfile.email);
console.log("Is Active:", userProfile.isActive);
console.log("location:", userProfile.location);
