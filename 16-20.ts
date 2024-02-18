// Q16
let guestList = [
  "moin","kabir","bilal"
];
let guestWhoCantMakeIt= "moin";
let newGuest= "nouman";

console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;

let message="now we find a bigger table so we invite more guest"
console.log(message);

guestList.unshift("ammar")
guestList.splice(Math.floor(guestList.length / 2),0, "waleed");
guestList.push("adnan")

while (true)
{
    if (guestList.length == 2) {
       break
    }
    guestList.pop()

}

guestList.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are invited to dinner at my place.`
  );
});

// Q17

let guestList = ["moin", "kabir", "bilal"];
let guestWhoCantMakeIt = "moin";
let newGuest = "nouman";

console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;

let message = "now we find a bigger table so we invite more guest";
console.log(message);

guestList.unshift("ammar");
guestList.splice(Math.floor(guestList.length / 2), 0, "waleed");
guestList.push("adnan");

let sorryMsg = "now we only have two seats avaliable so only two people allow";
console.log(sorryMsg);

while (true) {
  if (guestList.length == 2) {
    break;
  }
  guestList.pop();
}

guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
});

// Q18
let placesToVisit: string[] = [
  "Japan",
  "Australia",
  "Iceland",
  "Italy",
  "Canada",
];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Print the array to show it is still in its original order
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Print the array to show it is still in its original order
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to restore its original order
placesToVisit.reverse();
console.log("\nRestored Order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit);

// Q20
let countries: string[] = ["Canada", "Germany", "Japan", "Australia", "Brazil"];
let mountains= ["Mount Everest", "K2", "Matterhorn"]
 let rivers= ["Nile", "Amazon", "Yangtze"]
 let cities=["Paris", "New York", "Tokyo"]
 let languages=["English", "Spanish", "Chinese"]
// Q21
let data = {
  mountains: ["Mount Everest", "K2", "Matterhorn"],
  rivers: ["Nile", "Amazon", "Yangtze"],
  countries: ["Canada", "Germany", "Japan"],
  cities: ["Paris", "New York", "Tokyo"],
  languages: ["English", "Spanish", "Chinese"],
};

// Print the object
console.log(data);
