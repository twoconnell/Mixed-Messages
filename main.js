// First array containing random adjectives

const adjective = [
  "stimulating",
  "crooked",
  "incredible",
  "tenuous",
  "thoughtful",
  "nostalgic",
  "neighbourly",
  "critical",
  "unbiased",
  "boorish",
  "worried",
  "puzzling",
];

// Second array containing random first parts of sentences
const opening = [
  "You are ",
  "Would you like ",
  "Have you seen the ",
  "Which way to the ",
  "You've got ",
];

// Third array containing random final parts of sentences
const closing = [
  " car",
  " smile",
  " house",
  " work ethic",
  " imagination",
  " personality",
];

let randomAdj = Math.floor(Math.random() * adjective.length);

let randomOpen = Math.floor(Math.random() * opening.length);

let randomClose = Math.floor(Math.random() * closing.length);

let punct = "";

let grammaer = "";

if (randomOpen == 0 || randomOpen == 4) {
  punct = "!";
} else {
  punct = "?";
}

if (randomOpen == 2 || randomOpen == 3) {
  grammar = "";
} else if (randomAdj == 2 || randomAdj == 8) {
  grammar = "an ";
} else {
  grammar = "a ";
}

console.log(
  opening[randomOpen] +
    grammar +
    adjective[randomAdj] +
    closing[randomClose] +
    punct
);
