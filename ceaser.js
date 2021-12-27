

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
// console.log(encode("hello world", 3))
// console.log(decode("wdnh#ph#rxw#rq#d#gdwh", 3))

// globalThis[decode('frqvroh',3)][decode('orj', 3)](decode("khoor#zruog",3))

module.exports = {encode, decode}; 
