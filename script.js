let date = new Date();
// 1
const myTax = (income) => (0.01/100)*(income + 3);
console.log(myTax(25000)); // 2.5003

// 2
// 2.1
const friendName = (name1,name2,name3)=> console.log(`Welcome ${name1}, ${name2}, ${name3}`);
friendName('Ang','Aug','lung'); // Welcome Ang, Aug, lung

// 2.2
const myAge = birthYear => date.getFullYear() - birthYear;
// 2.3 
const friendNameAndAge = (name1,name2,name3,birthYear1,birthYear2,birthYear3)=> {
    const age1 = myAge(birthYear1);
    const age2 = myAge(birthYear2);
    const age3 = myAge(birthYear3);
    console.log(`Welcome ${name1}, you are ${age1}.Welcome ${name2}, you are ${age2}.Welcome ${name3}, you are ${age3}`);
};
friendNameAndAge('Ang','Aug','lung',1994,1995,1996); // Welcome Ang, you are 29.Welcome Aug, you are 28.Welcome lung, you are 27
// 3
const grading = (score) => {
    return score===11 ? "Perfect" : score>=8 ? "Excellent" : false ;
};
const txtScore = grading(5);
console.log(txtScore);