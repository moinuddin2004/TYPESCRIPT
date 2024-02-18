// Q2
let personMsg = "Hello Eric, would you like to learn some Python today?"
console.log(personMsg);

// Q3
let personName = "babbar AZAM"
// in titleCase i take help from net in regex
const toTitleCase = (name) => {
    let converted = (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    };
    return name.replace(/\S*/g,converted);
}
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName);
console.log(toTitleCase(personName));

// Q4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.” ");

// Q5
let  famous_person = "Albert Einstein";
let qoute = " “A person who never made a mistake never tried anything new.” ";
let message = `${ famous_person} once said,${qoute}`;
console.log(message);
