//JavaScript Algorithms and Data Structures Project 1 to earn the JavaScript Algorithms and Data Structures certification.
let newStr = "";

function palindrome(str){
    for(let i=str.length-1; i>-1; i--){
        newStr += str.charAt(i);
    }
    newStr = newStr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    if(newStr !== str){
        return false;
    }
    return true;
}

console.log(palindrome("_eye"));