function replace (str,char,result){
    let after = str.replace('_',char);
    
    let outPut = after === result? "Matched": "Not Matched";
 //f
    console.log(outPut);
}
replace('Str_ng', 'i', 'String');