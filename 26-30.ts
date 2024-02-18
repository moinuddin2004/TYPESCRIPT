// Q26

// let alien_color = "green";
// if (alien_color === "green") {
//   console.log("The player just earned 5 points.");
// } else if (alien_color === "yellow") {
//   console.log("The player just earned 10 points.");
// } else if (alien_color === "red") {
//   console.log("The player just earned 15 points.");
// }

// let alien_color = "yellow";
// if (alien_color === "green") {
//   console.log("The player just earned 5 points.");
// } else if (alien_color === "yellow") {
//   console.log("The player just earned 10 points.");
// } else if (alien_color === "red") {
//   console.log("The player just earned 15 points.");
// }

let alien_color = "red";
if (alien_color === "green") {
  console.log("The player just earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color === "red") {
  console.log("The player just earned 15 points.");
}

// Q28
let age = 30;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Q29
let favorite_fruits: string[] = ["apple", "banana", "orange"];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

// Q30
let names = ["moin","admin", "kabir", "bilal", "ahemed"];

names.forEach((name) => {
    if (name == "admin") {
        console.log("hi admin");
    } else {
        console.log("hello " + name);
    }

})
