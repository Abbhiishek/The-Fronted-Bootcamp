
// console.log("Hello Developers !");
// console.log("hello my name is abhishek kushwaha !");
// console.log("welcome  frontend developer !");

// var name = "Abhishek";
// console.log(name);

// const password = 123456;

// // password = "1234567";


// console.log(password);


// let age = 20;
// console.log(age);

// age = 21;


// console.log(age);

// // var -> function in which the variable is declared.


// // let -> block in which the variable is declared.


// // const -> block in which the variable is declared.

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof password);


// // 1. Binary 

// //     1. Arithemetic Operators 
// //         1. Addition 2+3
// //         2. Subtraction 2-3
// //         3. Multiplication 2*3
// //         4. Division 2/3
// //         5. Modulus 2%3


// let name1 = "Abhishek";
// let name2 = "Kushwaha";


// let full_name = name1 + " " + name2;


// console.log(full_name);


// let age_in_years = prompt("Enter your age ?");
// let credibility;

// console.log("your age is " + age_in_years);
// credibility = (age_in_years > 18) ? "You are eligible to vote" : "You are not eligible to vote";


// console.log(credibility);


// create a callback function which takes the button press and adds to the number
document.getElementById("button").addEventListener("click", increase_by_1);

function increase_by_1() {
    let number = document.getElementById("number").innerHTML;
    number = parseInt(number) + 1;
    document.getElementById("number").innerHTML = number;
    document.getElementById("title").innerHTML = "You have clicked " + number + " times";
}

// create an event listener for the button

