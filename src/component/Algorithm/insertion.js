export function insertionSort(array){
    const aniamtion=[];
    const duplicateArray=array.slice();
    for(var i = 1; i < duplicateArray.length; i++){
        var j=i-1;
        var temp=duplicateArray[i];
        while(j>=0 && duplicateArray[j]>temp)
        {
          console.log(j,j+1);
          aniamtion.push([j,j+1]);
          duplicateArray[j+1]=duplicateArray[j];
          j--;
        }
        duplicateArray[j+1]=temp;
      }
      return aniamtion;
}