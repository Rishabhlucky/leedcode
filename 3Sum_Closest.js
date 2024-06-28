var threeSumClosest = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }
   let j;
   let k;
   for(let i=0;i<nums.length; i++){
    j = i+1 ;
    k= i+2;
    if(nums[i]+nums[j]+nums[k] == target || nums[i] +nums[j] + nums[k] == (target+1) || nums[i] +nums[j] + nums[k] == (target -1)){
        console.log(i);
        console.log("Hllo")
        return i;
    }
   } 
};

let nums = [-1,2,1,-4];
let target = 1
threeSumClosest(nums , target);
// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).