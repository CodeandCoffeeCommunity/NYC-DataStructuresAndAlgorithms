        //Strategy: 
        /*
        
         */


        //Explanation
        /*
        
        */

        //Code:
        var longestCommonPrefix = function(strs) {
          if (strs == null || strs.length == 0) return "";

          for(let i = 0; i < strs[0].length; i++){
            let char = strs[0][i];

            for(let j = 0; j < strs.length; j++){
              if (i == strs[j].length || strs[j][i] != char)

              return strs[0].substring(0, i);
            }
          }
          return strs[0];
        }

        module.exports = longestCommonPrefix;
