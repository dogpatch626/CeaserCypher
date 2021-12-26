// // const alpha = "abcdefghijklmnopqrstuvwxyz"
// function rot13(str) {
    
//     var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
//     var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
//     var resultStr = [];
//     for(let i=0; i<str.length; i++){
//         for(let j =0; j<alphabets.length; j++){
//             if(str[i] === alphabets[j]){
//             resultStr.push(alphabets13[j]);
//             }
//         }
//     }
//     return resultStr.join("");
//   };

//   console.log(rot13("SERR CVMMN!"));
let string = 'oishi'
console.log(string.charCodeAt(1)); 
let newString= ''; 
//newString+=String.fromCharCode(string.charCodeAt(0)+3);
console.log(newString)

const encode = (string, shift) =>{
    let newString =''; 
    if(shift < 1 || shift >26){
        console.log("shift should be inbetween 1 and 26");
        return false;  
    }
    for(let letter in string){
        newString+=String.fromCharCode(string.charCodeAt(letter)+shift);
       // console.log(string[letter]); 
    }
    return newString;
}
const decode = (string, shift)=>{
    let newString =''; 
    if(shift < 1 || shift >26){
        console.log("shift should be inbetween 1 and 26");
        return false;  
    }
    for(let letter in string){
        newString+=String.fromCharCode(string.charCodeAt(letter)-shift);
       // console.log(string[letter]); 
    }
    return newString;
}
console.log(encode("hello world", 3))
console.log(decode("wdnh#ph#rxw#rq#d#gdwh", 3))

globalThis[decode('frqvroh',3)][decode('orj', 3)](decode("khoor#zruog",3))