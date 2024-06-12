/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let result=[];
    const heap1=[];
    const heap2=[];

    function insert(heap, val){
       heap.push(val);

       if(heap.length>1){
        bubbleUp(heap);
       }
    }

    function bubbleUp(heap){
        let idx = heap.length-1

        while(idx>0){
            const parentIdx = Math.floor((idx-1)/2);
            const parentVal = heap[parentIdx];
            const element = heap[idx]; 
            if(parentVal <= element) break;

            heap[idx] = parentVal;
            heap[parentIdx] = element;

            idx = parentIdx;
        }
    }

    function extractMin(heap){
        const root = heap[0];
        const last = heap.pop();

        if(heap.length>0){
            heap[0] = last;
            sinkDown(heap);
            return root;
        }

        return null;
    }

    function sinkDown(heap){
        let idx=0;
        let lci, rci, lc, rc;

        while(true){
            lci = 2*idx+1;
            rci = lci+1;
            let swap=null;

            if(lci<heap.length){
                lc = heap[lci];
                if(lc < heap[idx]){
                    swap = lci;
                }
            }

            if(rci<heap.length){
                rc = heap[rci];
                if((swap===null && rc<heap[idx]) || (swap!==null && rci<lci)){
                    swap = rci;
                }
            }

            if(swap === null) break;

            [heap[idx], heap[swap]]=[heap[swap], heap[idx]];
            idx=swap;
        }
    }

    function getRightChildIdx(idx){
        return 2*idx+2;
    } 

    function getLeftChildIdx(idx){
        return 2*idx+1;
    }

    function hasLeftChild(idx, heap){
        return idx < heap.length;
    }

    function hasRightChild(idx, heap){
        return idx < heap.length;
    }

    for(let val of nums1)
        insert(heap1, val);

    for(let val of nums2)
        insert(heap2, val);

    while(k>0){
        let root1 = heap1[0];
        let root2 = heap2[0];


        if(root1===null || root2=== null ){
            break;
        }

        result.push([root1, root2]);

        const sum1 = root2+heap1[1]?heap1[1]:0;
        const sum2 = root1+heap2[1]?heap2[1]:0;

        if(sum2<sum1){
            extractMin(heap2)
        }else{
            extractMin(heap1)
        }

        // if(root1===root2){
        //     const val1 = heap1[1];
        //     const val2 = heap2[1];
            
        //     if(!val1 || !val2){
        //         if(!val1){
        //             extractMin(heap1);
        //         }
        //         else{
        //             extractMin(heap2);
        //         }
        //     }
        //     else{
        //         if(val1<val2){
        //             extractMin(heap2);
        //         }
        //         else{
        //             extractMin(heap1);
        //         }
        //     }
        // }
        // else if(root1<root2){
        //     if(extractMin(heap2)===null){
        //         break;
        //     }
        // }else{
        //     if(extractMin(heap1)===null){
        //         break;
        //     }
        // }

        k--;
    }

    return result;
    
};
var nums1 = [1,2,4,5,6]
var nums2 = [3,5,7,9]

// sum1 = 2
// sum2 = 1+2 = 3
const result = kSmallestPairs(nums1, nums2, 3 )
console.log(result);