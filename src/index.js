// Your task is to write a function, that decodes Morse code and returns a string. 
// Input: String. Its length is multiple of 10.
// Each letter from alphabet encoded with dots(.) and dashes(-). 10 stands for dot(.), 11 stands for dash(-).
// Each encoded letter's length is 10.
// If the length of the encoded letter is less then 10, it left padded with 0.
// Space in string is **********.
// Output: String (decoded) Example: me -> m === -- === 0000001111, e === . === 0000000010 -> 00000011110000000010
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let a = [];
    let res = [];
    let find1 = '11',
        find2 = '10',
        find3 = '0';

    let re1 = new RegExp(find1, 'g');
    let re2 = new RegExp(find2, 'g');
    let re3 = new RegExp(find3, 'g');

    while (expr.length % 10 !== 0) { expr.replace('0', ''); }
    let k = expr.split('');

    for (let i = 0, l = 0, m = 10; i < k.length / 10; i++) {
        a[i] = k.slice(l, m).join('').replace(re1, '-').replace(re2, '.').replace(re3, '');

        res[i] = Object.values(MORSE_TABLE[a[i]]);
        l += 10;
        m += 10;
    }
    return res.join('');
}
module.exports = {
    decode
}