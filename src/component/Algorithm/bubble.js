export function bubblesort(array){
const animation=[];
const arrays=array.slice();
    if(arrays.length<=1) return arrays;
    for(let i=0;i<arrays.length;i++)
    {
        for(let j=0;j<arrays.length-i-1;j++)
        {
            if(arrays[j]>arrays[j+1])
            {
                animation.push([j,j+1]);
               let temp=arrays[j];
               arrays[j]=arrays[j+1];
               arrays[j+1]=temp;
            }
        }
    }
    return animation;
}

