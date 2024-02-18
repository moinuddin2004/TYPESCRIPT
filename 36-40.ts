// Q36
function make_shirt(size: string, message: string) {
    console.log(`Size: ${size.toUpperCase()}, Message: ${message}`);
}
make_shirt("medium", "my name is moin uddin");

// Q37
function make_shirt(size: string="large", message: string="i love typescript"){
  console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt("medium", "my name is moin uddin");
make_shirt()

// Q38
function describe_city(city: string, country: string = "pakistan") {
  console.log(` ${city} city is in ${country}`);
}
describe_city("karachi");
describe_city("islamabad");
describe_city("berlin", "germany");
describe_city("london", "england");

// Q39
let city_country = (city: string, country: string="pakistan") => {
    return `${city},${country}`
}
console.log(city_country("karachi","pakistan"));
console.log(city_country("lahore","pakistan"));
console.log(city_country("california","USA"));
console.log(city_country("TORONTO","CANADA"));

// Q40
function make_album(
  artist: string,
  title: string,
  tracks: number
 ) {
  let album = { artist: artist, title: title };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

console.log(album1);
console.log(album2);
console.log(album3);
