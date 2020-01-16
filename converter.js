const BASIC_ROMAN = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; // basic roman numerals



function convert(num) {
    const parseArabic = (arabic, index) => { // function meant to parse arabic number to roman given mantissa and digit
        let digit = index*2; // index is digit of the mantissa in parsing number, and variable digit represents
                             // number of the basic numeral in BASIC_ROMAN array adequate to digit (for units 0 -- 'I', for decimals 2 -- 'X and so on)
        let roman = []; // result to which function is to push roman numerals
        let numberArabic = parseInt(arabic); // parsing mantissa character to number
        if(numberArabic === 5){ 
            return BASIC_ROMAN[digit+1]; // for example if number is 5 func returns 'V' 
                                         // if 500 (mantissa -- 5, digit -- 6 (hundreds)) returns 'D'  
        }
        if(numberArabic < 5){
            if(numberArabic === 4){ // special case when func returns base numeral + numeral of 5*digit
                roman.push(BASIC_ROMAN[digit]);
                roman.push(BASIC_ROMAN[digit+1]);
            } else {
                for(let i = numberArabic; i > 0; i--){
                    roman.push(BASIC_ROMAN[digit]); // just pushing base roman numerals
                }
            }
        } else {
            if(numberArabic === 9){ // special case when func returns base numeral + higher next numeral 
                                    // for example for number 9 it is 'I' and 'X' accordingly
                roman.push(BASIC_ROMAN[digit]);
                roman.push(BASIC_ROMAN[digit+2]);
            } else {
                roman.push(BASIC_ROMAN[digit+1]) // first push numeral adequate to 5*digit 
                                                 // then procceed to pushing base numerals
                for(let i = numberArabic; i > 5; i--){
                     roman.push(BASIC_ROMAN[digit]);
                }
            }
        }
        return roman.join("");  // returning string not array
    }
        
    

    let workString = num.toString(); // parsing number to string
    workString = workString.split(""); // splitting string to array
    
    for(let i = 0; i < workString.length; i++){ // processing every element of the array
        workString[i] = parseArabic(workString[i], workString.length - i - 1);
    }
    
    return workString.join(""); // returning string

}

console.log(convert(1984));
