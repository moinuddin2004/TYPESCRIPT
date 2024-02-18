// Q11
let names = ["moin", "kabir", "bilal", "ahemed"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Q12
let names = ["moin", "kabir", "bilal", "ahemed"]
console.log(`Hi ${names[0]} how are you`);
console.log(`Hi ${names[1]} how are you`);
console.log(`Hi ${names[2]} how are you`);
console.log(`Hi ${names[3]} how are you`);

// Q13
let favoriteTransportation= ["car", "motorcycle", "bicycle"];
favoriteTransportation.forEach((transportation) => {
  console.log(`I would like to own a ${transportation}.`);
});
// Q14
let guestList= [
  "moin","kabir","bilal"
];
guestList.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are invited to dinner at my place.`
  );
});

// Q15
let guestList = [
  "moin","kabir","bilal"
];
let guestWhoCantMakeIt= "moin";
let newGuest= "nouman";

console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;

guestList.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are invited to dinner at my place.`
  );
});
