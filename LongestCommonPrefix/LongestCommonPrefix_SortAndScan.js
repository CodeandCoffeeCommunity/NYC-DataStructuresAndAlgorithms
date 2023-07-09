        //Strategy: 
        /*
        *Sort the array of strings.* -- This is the special sauce.
        Take the first and last strings in the array.
        Check each letter of those two words until they no longer match.
        Return the substring from the beginning up to the (exlusive) the last
        index checked. 
        */


        //Explanation
        /*
            original: ["flower","flight","flow"]
            sorted:  ["flower","flow","flight"]
                       |        |      |
        
            The sorted array has similar words next to eachother.
            ["flower","flow","flight"]
              |--|     |--|   |-
        
            ["flower","flow","flight"]
              |-              |-
        
        */

        //Code:
        var longestCommonPrefix = function(strs) {
            let ordered = strs.sort();
            let first = ordered[0];
            let last = ordered[strs.length - 1];

            let i = 0;
            while(first[i] && last[i]){
                if(first[i] != last[i]) break;
                i++;
            }

            return first.substring(0,i);
        }
        
        module.exports = longestCommonPrefix;
