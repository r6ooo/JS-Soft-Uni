function replace (str,char,result){
    let after = str.replace('_',char);
    
    let outPut = after === result? "Matched": "Not Matched";

    console.log(outPut);
}
replace('Str_ng', 'i', 'String');