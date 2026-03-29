let email="2315028@nec.edu.in";
let username=email.substring(0, email.indexOf("@"));
let domain=email.substring(email.indexOf("@")+1);
console.log("Username:",username);
console.log("Domain:",domain);