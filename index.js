const userInformation = require('./information');
const cowsay = require("cowsay");

const mySentence = `Hi, my name is ${userInformation.student.name} and my campus is ${userInformation.student.campus} and it's very good.`;

console . log ( cowsay . say ( { 
    text : mySentence , 
    e : "oO" , 
    T : "U " 
} ) ) ;

 