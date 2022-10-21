function encode(s) {
}

function decode(s) {
}

console.log(encode("codewars")); // "csordaew"
console.log(encode("white")); // "wehti"
console.log(encode("Assert")); // "Atsrse"
console.log(encode("Hello world!")); // "H!edlllroo w"
console.log(encode("You have chosen to translate this kata.")); // "Y.oaut ahka vsei hcth oesteanl stnoa rt"

console.log(decode("csordaew")); // "codewars"
console.log(decode("wehti")); // "white"
console.log(decode("Atsrse")); // "Assert"
console.log(decode("H!edlllroo w")); // "Hello world!"
console.log(decode("Y.oaut ahka vsei hcth oesteanl stnoa rt")); // "You have chosen to translate this kata."