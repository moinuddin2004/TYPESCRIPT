
// Q41
// let magicianNames = ["moin", "Admin", "kabir", "bilal", "ahemed"];
// function make_great(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = "the Great magician is " + magicians[i];
//   }
// }
// let show_magicians = (name) => {
//     name.forEach((n) => {
//         console.log("name of  "+ n);

//     })
// };

// show_magicians(magicianNames)
// make_great(magicianNames)
// show_magicians(magicianNames);

// Q42
let magicianNames = ["moin", "Admin", "kabir", "bilal", "ahemed"];
let modifiedMagicianNames = [];

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
   modifiedMagicianNames.push( "the Great magician" + magicians[i]);
    }

}
let show_magicians = (name) => {
    name.forEach((n) => {
        console.log("Name: "+ n);

    })
};

show_magicians(magicianNames)
make_great(magicianNames)
show_magicians(modifiedMagicianNames);
show_magicians(magicianNames);

// Q44
function makeSandwich(items): void {
  console.log("Sandwich Summary:");
  console.log("Bread");
  items.map((i) => console.log(i));
  console.log("--------------------");
}

makeSandwich(["Cheese", "Tomato", "Lettuce"]);
makeSandwich(["Ham", "Mustard"]);
makeSandwich(["Peanut Butter", "Jelly"]);

// Q45
function cars(manufacturer: string, model: string, ...options) {
  let newobj = {};
  if (options) {
    for (let i = 0; i < options.length; i += 2) {
      newobj[options[i]] = options[i + 1];
    }
  }
  let car = {
    manufacturer: manufacturer,
    model: model,
    ...newobj,
  };
  console.log(car);
}

cars("Toyota", "Camry", "color", "blue", "year", 2022);
cars("Toyota", "Camry", "color", "red", "yearzz", 2024);

