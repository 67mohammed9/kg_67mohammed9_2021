function check(s1, s2){
    if(s1.length>s2.length) return false;//s1 must be smaller than s2 in order to be one to one
    let map = new Map();
    for(let i = 0; i < s1.length; i++) {
        map.set(s1.charAt(i),s2.charAt(i));//set each letter in in s1 as the "key" and each letter in s2 as the value
    }
    if(map.size==s1.length){ //maps only store unique "keys" so duplicates will be stored once in the map
        return true;//true if duplicates aren't found
    }
    return false;//false otherwise    
}

//print to stdout
let myArgs = process.argv.slice(2);
console.log(check(myArgs[0],myArgs[1]));