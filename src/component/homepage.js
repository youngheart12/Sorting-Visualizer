import React, { Component } from 'react'
import './homepage.css';
import {bubblesort} from './Algorithm/bubble';
import {selectionSort} from './Algorithm/selection';
import {insertionSort} from './Algorithm/insertion';
import {heapSort} from './Algorithm/heapsort';
import {mergeSort} from './Algorithm/merge';
import {quickSortt} from './Algorithm/quicksort';
import Info from './Info/info';

export default class Bubble extends Component {
    state={
        array:[],
        toActivate:0,
        setting:false,
        animationSpeed:200,
        range:33
    }
    
   componentDidMount()
   {
     this.regenerateHandler()
   }
   componentDidUpdate(prevProps, prevState) {
    if (prevState.range !== this.state.range) {
      this.regenerateHandler();
    }
  }
   
    regenerateHandler=()=>{
      const array = [];
      for (let i = 0; i<this.state.range; i++) {
        array.push(randomIntFromInterval(5, 590));
      }
      this.setState({array});
    }
  
   


  bubbleSortHandler=()=>{
const array=this.state.array;
  const copyarray=array.slice();
  const transitionArray=bubblesort(array);
  const valueChange=document.getElementsByClassName("place");
  const arrayBars=document.getElementsByClassName("bar");
for(let i=0;i<transitionArray.length;i++)
{
 const [first,second]=transitionArray[i];
 [copyarray[first],copyarray[second]]=[copyarray[second],copyarray[first]];
 setTimeout(()=>{
   arrayBars[first].style.backgroundColor="yellow";
   arrayBars[second].style.backgroundColor="#8FFFFC";
   
   arrayBars[first].style.height=`${copyarray[first]}px`;
   arrayBars[second].style.height=`${copyarray[second]}px`;
   arrayBars[first].style.transition="height 1s ease-out";
   if(this.state.range<=33)
   {
   valueChange[first].innerHTML=copyarray[first];
   valueChange[second].innerHTML=copyarray[second];
   }
 },i*200)
}

}



selectionSortHandler=()=>{
  this.setState({toActivate:2})
  const copyarray=this.state.array;
 const transitionArray= selectionSort(this.state.array);
 const arraybars=document.getElementsByClassName("bar");
 const originalArray=copyarray.slice();
 const changevalue=document.getElementsByClassName("place");
 let i=0;
 for( i=0;i<transitionArray.length;i++)
 {
    const [first,second]=transitionArray[i];
    [originalArray[first],originalArray[second]]=[originalArray[second],originalArray[first]]
     const barOneStyle=arraybars[first].style;
     const barTwoStyle=arraybars[second].style;
     setTimeout(()=>{
      barOneStyle.backgroundColor="#1690DD";
      barTwoStyle.backgroundColor="#8FFFFC";
      barOneStyle.transition="background-color 1s ease-in";
      barOneStyle.height=`${originalArray[first]}px`;
      barTwoStyle.height=`${originalArray[second]}px`; 
      if(this.state.range<=33){
      changevalue[first].innerHTML=originalArray[first];
      changevalue[second].innerHTML=originalArray[second];
      }
     
    },i*this.state.animationSpeed); 
 }
 setTimeout(()=>{
  for(var j=0;j<this.state.array.length;j++)
  {
    const barOneStyleChange=arraybars[j].style;
    barOneStyleChange.backgroundColor="#EA6248";
  }
   },i*this.state.animationSpeed)  
}



insertionSortHandler=()=>{
  const copyarray=this.state.array;
  this.setState({toActivate:3});
  const transitionArray= insertionSort(this.state.array);
  const arraybars=document.getElementsByClassName("bar");
  const originalArray=copyarray.slice();
  const changevalue=document.getElementsByClassName("place");
  let i=0;
  for( i=0;i<transitionArray.length;i++)
  {
    const [first,second]=transitionArray[i];
    [originalArray[first],originalArray[second]]=[originalArray[second],originalArray[first]];
      const barOneStyle=arraybars[first].style;
      const barTwoStyle=arraybars[second].style;
      setTimeout(()=>{
        barOneStyle.backgroundColor="#1690DD";
        barTwoStyle.backgroundColor="#8FFFFC";
        barOneStyle.transition="background-color 1s ease-in";
        barOneStyle.height=`${originalArray[first]}px`;
        barTwoStyle.height=`${originalArray[second]}px`; 
        if(this.state.range<=33){
        changevalue[first].innerHTML=originalArray[first];
        changevalue[second].innerHTML=originalArray[second];
        }
     },i*this.state.animationSpeed); 
  }
  setTimeout(()=>{
    for(var j=0;j<this.state.array.length;j++)
    {
      const barOneStyleChange=arraybars[j].style;
      barOneStyleChange.backgroundColor="#EA6248";
    }
     },i*this.state.animationSpeed)  
 
 }





heapSortHandler=()=>{
 
  const array=this.state.array;
  const copyarray=array.slice();
  const transitionArray=heapSort(array);
  const valueChange=document.getElementsByClassName("place");
  const arrayBars=document.getElementsByClassName("bar");
for(let i=0;i<transitionArray.length;i++)
{
 const [first,second]=transitionArray[i];
 [copyarray[first],copyarray[second]]=[copyarray[second],copyarray[first]];
 setTimeout(()=>{
   arrayBars[first].style.backgroundColor="yellow";
   arrayBars[second].style.backgroundColor="#8FFFFC";
   
   arrayBars[first].style.height=`${copyarray[first]}px`;
   arrayBars[second].style.height=`${copyarray[second]}px`;
   arrayBars[first].style.transition="height 1s ease-out";
   if(this.state.range<=33)
   {
   valueChange[first].innerHTML=copyarray[first];
   valueChange[second].innerHTML=copyarray[second];
   }
 },i*200)
}

 }
  




quickSortHandler=()=>{
  
  const array=this.state.array;
  const copyarray=array.slice();
  const transitionArray=heapSort(array);
  const valueChange=document.getElementsByClassName("place");
  const arrayBars=document.getElementsByClassName("bar");
for(let i=0;i<transitionArray.length;i++)
{
 const [first,second]=transitionArray[i];
 [copyarray[first],copyarray[second]]=[copyarray[second],copyarray[first]];
 setTimeout(()=>{
   arrayBars[first].style.backgroundColor="yellow";
   arrayBars[second].style.backgroundColor="#8FFFFC";
   
   arrayBars[first].style.height=`${copyarray[first]}px`;
   arrayBars[second].style.height=`${copyarray[second]}px`;
   arrayBars[first].style.transition="height 1s ease-out";
   if(this.state.range<=33)
   {
   valueChange[first].innerHTML=copyarray[first];
   valueChange[second].innerHTML=copyarray[second];
   }
 },i*200)
}

 
}
animationSpeedHandler=()=>{
  const animationSpeed=prompt("Enter the animation speed you want in ms",200);
  if(animationSpeed){
  this.setState({animationSpeed});
  }
}
rangeHandler=()=>{
const range=prompt("Enter the number of bars you want",33);
if(range)
{
  this.setState({range});
}


}
openCurrentTabHandler=(currentState)=>{
if(currentState !==0)
{
  switch(currentState)
  {
    case 1:
      return <Info complexity="O(n^2)" stable="yes" steps="n-1"></Info> //bubble
          
    case 2:
        return <Info complexity="O(n^2)" stable="no"></Info>   //selection
        
    case 3: 
        return <Info complexity="O(n^2)" stable="yes"></Info>   //insertion
         
    case 4:
          return <Info complexity="O(nlon)" stable="no"></Info>   //heap
          
    case 5:
          return <Info complexity="O(n^2)" stable="no"></Info>   //quick
                          
  }
}
} 
    render() {
     
      
      const Bar=this.state.range;
      const marginNum=Bar<=10?6:2;
      const paddingNum=Bar<11?10:Bar<40?5:Bar<165?4:1;
     
        return (
          <div className="parent">
            <div style={{backgroundColor:"#292929"}}>
              
                {this.state.setting?<ul>
                  <li><a href="#" onClick={()=>{this.setState({setting:false})}}>Menu</a></li>
                  <li><a href="#" onClick={this.animationSpeedHandler}>Animation Speed</a></li>
                  <li><a href="#" onClick={this.rangeHandler}>Range</a></li>
                  <li><a href="#">Label</a></li>
                </ul>:<ul>
                  
                  <li><a href="#" onClick={()=>{this.setState({setting:true})}} className="setting">Setting</a></li>
              <li><a href="#" onClick={this.regenerateHandler}>Regenerate</a></li>
                <li><a href="#" onClick={this.bubbleSortHandler}>Bubble Sort</a></li>
                <li><a href="#" onClick={this.selectionSortHandler}>Selection Sort</a></li>
                <li><a href="#" onClick={this.quickSortHandler}>Quick Sort</a></li>
               
                <li><a href="#" onClick={this.heapSortHandler}>Heap Sort</a></li>
                <li><a href="#" onClick={this.insertionSortHandler}>Insertion Sort</a></li>
                  </ul>}
              
                
                
              
            </div>
           
            <div className="container1">
             
            <div className="container"> 
                {this.state.array.map((value,idx)=>(
                  <div className="bar" style={{height:`${value}px`,marginLeft:`${marginNum}px`,marginRight:`${marginNum}px`,padding:`${paddingNum}px`}}>
    <p className="place">{this.state.range<=33?value:null}</p>
                                         </div>
                ))}
                </div>
          </div>
          <div>
            {this.openCurrentTabHandler(this.state.toActivate)}
          </div>
          </div>
           
               
                
          
        )
    }
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }