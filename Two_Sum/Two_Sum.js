/****** Author *******/
 @travispotterBH
/******       *******/
var twoSum = function(nums, target) {
    let compMap = new Map();

    for(let i = 0; i < nums.length; i++){
        if(compMap.has(target - nums[i])){
            return [i, compMap.get(target-nums[i])];
        } else {
            compMap.set(nums[i], i);
        }
    }
};

console.log(twoSum([1,2,3,4,5,6]),11);
