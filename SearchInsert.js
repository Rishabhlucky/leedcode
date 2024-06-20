var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }
        if(nums[i] > target){
            return i;
        }
        
    }
    return nums.length;
};

// nums = [1,3,5,6], target = 5;
// nums = [1,3,5,6], target = 2
// nums = [1,3,5,6], target = 7
let nums = [1,3,5,6];
 let target = 7

 searchInsert(nums , targets)