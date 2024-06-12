function maxArea(arr){
    let maxArea=0;
    let [i,j] = [0, arr.length-1];

    while(i<j){
        const h = Math.min(arr[i], arr[j]);
        const w = j-i;

        const area = h*w;

        maxArea = Math.max(area, maxArea);

        if(arr[i]>=arr[j]){
            j--;
        }else{
            i++;
        }
    }

    return maxArea;
}