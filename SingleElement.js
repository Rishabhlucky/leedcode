// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let obj ={};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]  = obj[nums[i]] +1;
        }
        else {
            obj[nums[i]] =1;
        }
    
    }
console.log(obj)
    for(let keys in obj ){
        if(obj[keys] ==1){
            return keys
        }
    }
};

let nums = [4,1,2,1,2]

singleNumber(nums);
console.log(singleNumber(nums))