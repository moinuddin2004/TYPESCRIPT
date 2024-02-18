// Q22
let colors: string[] = ["red", "green", "blue"];

// Access an index that is within the bounds of the array
let color = colors[3];
console.log(color);
// Accessing index 2, which is "blue"
colors.push("pink")
let color = colors[3];
// Print the color
console.log(color);

// Q23
let x = 5;
let y = 10;

// Test 1
// value of x is 5 so it is true
console.log("Is x == 5? I predict True.");
console.log(x == 5);

// value of x is 5 and y is 10  5 is not eqaul to 10 so it is true

// Test 2
console.log("Is x != y? I predict True.");
console.log(x != y);
// 5 is less than 10 so it is true
// Test 3
console.log("Is x < y? I predict True.");
console.log(x < y);

// 5 is not grater than 10 so it is false
// Test 4
console.log("Is x > y? I predict False.");
console.log(x > y);

// 5 is less than 10 so it is true
// Test 5
console.log("Is x <= y? I predict True.");
console.log(x <= y);

// 5 is not grater than 10 so it is false
// Test 6
console.log("Is x >= y? I predict False.");
console.log(x >= y);

// Test 7
let isSunny = true;
console.log("Is it sunny outside? I predict True.");
console.log(isSunny);

// Test 8
console.log("Is it sunny outside? I predict False.");
console.log(!isSunny);

// Test 9
let isRainy = false;
console.log("Is it rainy outside? I predict False.");
console.log(isRainy);

// Test 9
console.log("Is it not rainy outside? I predict True.");
console.log(!isRainy);

// Q24

let a = "moin"
let b = "uddin";
console.log(x == y);

let c = "MOIN"
console.log(c == "moin");

if (c == "MOIN" && a == "moin") {
    console.log("both true");

}

// Q25
let alien_color = "green";

if (alien_color === "green") {
  console.log("The player just earned 5 points.");
} else {
      console.log("The player just earned 10 points.");
}

let alien_color = "red";

if (alien_color === "green") {
  console.log("The player just earned 5 points.");
} else {
      console.log("The player just earned 10 points.");
}
