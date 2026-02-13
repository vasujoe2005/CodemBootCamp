//initialise
let userName="Vasundhara P S"; 
let age=20;
let math=85;
let science=90;
let english=78;
let social=88;
let computer=95;
let totalMarks=math+science+english+social+computer;
let averageMarks=totalMarks/5;
let upperCaseName=userName.toUpperCase();
let nameLength=userName.length;
let finalOutput=`
    User Name: ${userName}
    User Name (Uppercase): ${upperCaseName}
    Name Length: ${nameLength}
    Age: ${age}
    Marks:
        Math: ${math}
        Science: ${science}
        English: ${english}
        Social: ${social}
        Computer: ${computer}
    Total Marks: ${totalMarks}
    Average Marks: ${averageMarks}`;
console.log(finalOutput);