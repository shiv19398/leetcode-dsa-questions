var minSubArrayLen = function(target, nums) {
    let ml=Number.MAX_SAFE_INTEGER;
    let i=0;
    let sum=0;
    for(let j=0;j<nums.length;j++){
        sum += nums[j];
        while(sum>target){
            sum -= nums[i];
            i++;
        }
        if(sum===target){
            ml = Math.min(ml, j-i+1);
        }
    } 

    return ml===Number.MAX_SAFE_INTEGER?0:ml;   
};