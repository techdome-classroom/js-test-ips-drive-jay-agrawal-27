function longestSubstring(s) {


    // Implementation of longestSubstring function

    let longestSubstring =0;
    for(let i=0;i<s.length;i++){
        let currentstring=new Set();
        for(let x=i;x<s.length;x++){
            if(currentstring.has(s[x])){
                break;
            }else{
                currentstring.add(s[x]);
            }
        }
        longestSubstring=Math.max(longestSubstring,currentstring.length);
    }

    return longestSubstring;
}

module.exports = { longestSubstring };
