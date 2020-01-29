export  function selectionSort(array){
    const animation=[];
    const duplicateArray=array.slice();
    console.log(duplicateArray);
    for(var i = 0; i < duplicateArray.length; i++){
        //set min to the current iteration of i
        var min = i;
        for(var j = i+1; j < duplicateArray.length; j++){
          if(duplicateArray[j] < duplicateArray[min]){
           min = j;
          }
        }
        console.log(i,min);
        animation.push([i,min]);
        var temp = duplicateArray[i];
        duplicateArray[i] = duplicateArray[min];
        duplicateArray[min] = temp;
      }
return animation;
} 