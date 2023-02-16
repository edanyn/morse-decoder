const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
       
function string_to_morse(expr) {
    let r = "";
    for (i of expr) {
        if (i == " ") {
            r += "*,";
        } else {
        r += Object.fromEntries(Object.entries(MORSE_TABLE).map(([key,value])=>[value,key]))[i] + ",";
        }
    }
    return r.substring(0, r.length - 1);
} 

function morse_to_bin(morse) {
    let r = "";
    for (i of morse) {
        if (i == ".") {
            r += "10";
        } else if (i == "-") {
            r += "11";
        } else if (i == ",") {
            r += ",";
        } else {
            r += "*";
        }
    }
    return r.split(",");
}

function pad_bin(bin) {
let r = "";
for (i of bin) {
    if (i == "*") {
        r += "*".repeat(10);
    } else {
        r += "0".repeat(10 - i.length) + i;
    }
}
return r;
}
    
return pad_bin(morse_to_bin(string_to_morse(expr)));
}

module.exports = {
    decode
}
console.log(decode('call the police'));