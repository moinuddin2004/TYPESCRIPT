// Q31

let users = []

if (users.length == 0) {
    console.log("we need to find some users")
}

// Q32
let current_users = ["moin", "Admin", "kabir", "bilal", "ahemed"];
let new_users = ["zia", "daniyal", "kabir", "bilal", "nabeel", "qasim"];
let LowerCaseCurrentUser = current_users.map((user) => {
    return user.toLowerCase()
})
new_users.forEach((user) => {

    if (LowerCaseCurrentUser.includes(user.toLowerCase())) {
        console.log(`enter new username ${user} is not available`)
    } else {
        console.log(`${user} name available`)
    }
})
// Q33
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num.forEach((n) => {
    if (n == 1) {
        console.log("1st");
    }
    else if (n == 2) {
        console.log("2nd");
    }
   else if (n == 3) {
        console.log("3rd");
    }
    else {
        console.log(`${n}th`);
}

})

// Q34
let pizzas = ["Pepperoni", "Margherita", "BBQ Chicken", "Supreme"];

for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");

// Q35
let animals = ["dog", "cat", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
