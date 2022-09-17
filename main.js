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
  "You are a ",
  "Would you like a ",
  "Have you seen the ",
  "Which way to the ",
  "You've got a ",
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

let randomAdj = Math.floor(Math.random() * 12);

let randomOpen = Math.floor(Math.random() * 5);

let randomClose = Math.floor(Math.random() * 6);


console.log(opening[randomOpen] + adjective[randomAdj] + closing[randomClose]);