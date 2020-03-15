function check(s1, s2){
    if(s1.length>s2.length) return false;//s1 must be smaller than s2 in order to be one to one
    let map = new Map();
    let i = 0;
    while(!map.has(s1.charAt(i))){//loop till the first duplicate is found
    if(i==s1.length - 1){//if i is at the last letter of s1 return true
        return true;
    }
    map.set(s1.charAt(i),s2.charAt(i));//insert letters of s1 as "keys" and letters of s2 as "values"
    i++; 
}
return false;
}

//print to stdout
let myArgs = process.argv.slice(2);
console.log(check(myArgs[0],myArgs[1]));