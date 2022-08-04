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
    let word = '';
  let count = 0;
  let countStar = 0;
    let string1 = expr.split('').reduce((acc, rec, index) => {
      let morse = acc;         

      if (rec !== '*') {
          count++;
      }

        if ((index%2 === 0) && (rec === '1')) {
            if (expr[index + 1] === '0') {
                // acc += '.';
                morse = morse + '.'
            } else {
                 morse = morse + '-'
            }
          }
      if (rec == '*') {
        countStar = countStar + 1;
      }

      if (countStar === 10) {
          word = word + ' ';
          countStar = 0;
        }
    
        if (count === 10) {
          word = word + MORSE_TABLE[morse];
            morse = '';
           count = 0;
          }
      return morse;
    }, '');
    return word;
}

module.exports = {
    decode
}