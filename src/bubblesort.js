const list = [23, 4, 42, 15, 16, 8, 3]

// const mergeSort = (list,left,right) =>{
//   if(list.length <= 1) return list;
//   const middle = list.length / 2 ;
//   const left = list.slice(0, middle);
//   const right = list.slice(middle, list.length);
//   // console.log([...left,...right]);
//   return merge(mergeSort(list,left,middle), mergeSort(list,middle,right));
// }


// const merge = (left, right) => {
//   var result = [];
//   while(left.length || right.length) {
//     if(left.length && right.length) {
//       if(left[0] < right[0]) {
//         result.push(left.shift())
//       } else {
//         result.push(right.shift())
//       }
//     } else if(left.length) {
//         result.push(left.shift())
//       } else {
//         result.push(right.shift())
//       }
//     }
    
//   return result;
// }

// console.log(mergeSort(list));

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            
        }
        console.log(arr);
        arr[j+1] = currentVal;
    }
    return arr;
}
insertionSort(list)