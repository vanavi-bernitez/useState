function removeChar(str){
    let strWithoutFisrtAndLast = str.slice(1, -1);
    return strWithoutFisrtAndLast; 
}
console.log(removeChar('element'));