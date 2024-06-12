function productExceptSelf(nums){
    const length = nums.length;
    const rpa = new Array(length);
    
    rpa[length-1] = 1;

    for(let i=length-2;i>=0;i--){
        rpa[i] = nums[i+1]*rpa[i+1];
    }

    let res=1;
    const arr=[];
    for(let i=0;i<length;i++){
        const value = res*rpa[i]
        arr.push(value===0?Math.abs(value):value);
        res = res*nums[i];
    }

    console.log(arr);
}

productExceptSelf([-1,1,0,-3,3]);