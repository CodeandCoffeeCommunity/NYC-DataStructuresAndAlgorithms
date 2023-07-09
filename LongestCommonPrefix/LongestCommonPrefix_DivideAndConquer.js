        //Strategy: 
        /*
        
         */


        //Explanation
        /*
        
        */

        //Code:
        var longestCommonPrefix = function(strs) {
          if (strs == null || strs.length == 0) return "";    
          return longestCommonPrefix_helper(strs, 0 , strs.length - 1);

          function longestCommonPrefix_helper(strs, l, r) {
            if (l === r) {
              return strs[l];
            }
            else {
              let mid = Math.floor((l + r)/2);
              let lcpLeft = longestCommonPrefix_helper(strs, l , mid);
              let lcpRight = longestCommonPrefix_helper(strs, mid + 1,r);
              return commonPrefix(lcpLeft, lcpRight);
            }
          }

          function commonPrefix(left, right) {
            let min = Math.min(left.length, right.length);       
            for (let i = 0; i < min; i++) {
              if (left[i] != right[i])
              return left.substring(0, i);
            }
            return left.substring(0, min);
          }
        }

        module.exports = longestCommonPrefix;
