//Sorting approach 
var insert = function(intervals, newInterval) {
    const arr = [];
    const res =[];
    //putting all the values in arr
    for(let num of intervals) arr.push(num);
    arr.push(newInterval);

    //sort the array
    arr.sort((a,b)=> a[0]-b[0]);
    console.log(arr);

    //take two pointers
    let i=0,j=1;

    while(i<j && j<arr.length){
        if(arr[j][0]<=arr[i][1]){
            //we can merge them
            arr[i][1] = Math.max(arr[j][1], arr[i][1]);
        }else{
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    
    // console.log(arr.slice(0,i+1))
    return arr.slice(0,i+1);
};
/*
Time complexity = O(nlogn)
Space complexity = O(n);
*/

//Here, we are making the use of the fact that the array is already sorted
var insert2 = function(intervals, newInterval) {
    const arr = [];
    const res =[];

    //putting all the values in arr
    let flag = false;
    for(let i=0;i<intervals.length;i++){
        if(!flag && (intervals[i][0] >= newInterval[0])){
            arr.push(newInterval);
            flag=true;
        }
        arr.push(intervals[i]);
    }
    
    if(!flag) arr.push(newInterval);
   

    //take two pointers
    let i=0,j=1;

    while(i<j && j<arr.length){
        if(arr[j][0]<=arr[i][1]){
            //we can merge them
            arr[i][1] = Math.max(arr[j][1], arr[i][1]);
        }else{
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    
    console.log(arr.slice(0,i+1))
    return arr.slice(0,i+1);
};

const intervals = [[1,2],[2,3],[3,4],[4,5],[5,6]]
const newInterval = [2,5]

insert2(intervals, newInterval);

// Time complexity : O(n)
// Space complexity: O(n);