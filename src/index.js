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

function bin_to_morse(expr) {  
  let r = "";
    for (i of expr.match(/.{1,10}/g)) {
      if (i === "*".repeat(10)) {
        r += "*,";
      } else {
        r += i.replace(/^0*/,'').replace(/10/g, ".").replace(/11/g, "-") + ",";
    }
  }
  return r.substring(0, r.length - 1).split(",")
};

function morse_to_string(morse) {
  let r = "";
  for (i of morse) {
    if (i === "*") {
        r += " ";
    }    
    for (key in MORSE_TABLE) {
      if (i === key) {
        r += MORSE_TABLE[i];
      } 
    } 
  }  
  return r;
};
  return morse_to_string(bin_to_morse(expr))
}

module.exports = {
  decode
}

