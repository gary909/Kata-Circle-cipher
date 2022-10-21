// I gave up!



function encode(s) {
    let myList = s.split('');
    let myRevList = s.split('').reverse();
    let myRes = '';
    let myRes2 = '';
    let myFinal = ''
    let myNum = myList.length - 1;
    for (var i = 0; i < myList.length / 2; i = i + 1) {
        myFinal = myFinal + myList[i];
        myFinal = myFinal + myList[myNum];
        myNum - 1
    }



    // for (var i = 0; i < myRes.length / 2; i++) {
    //     //let myNum = myRes2.length - 1;
    //     myFinal = myFinal + myRes[i];
    //     myFinal = myFinal + myRes2[i];
    //     myFinal = myFinal + myRes2[myNum];
    //     myFinal = myFinal + myRes[myNum];
    //     myNum = myNum - 1;
    // }


    // for (var i = 0; i < myList.length; i = i + 2) {
    // myFinal = myRes[0] + myRes2[0] + myRes2[3] + myRes[3] + myRes[1] + myRes2[1] + myRes2[2] + myRes[2]
    // }

    // return myNum - 1;
    return myFinal;
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