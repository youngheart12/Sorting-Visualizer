import React from 'react';
import './info.css';
const infoDisplay=(props)=>{
return (
    <div className="parentDiv">
        <div className="div" style={{flexGrow:3}}>
        <h2 >Complexity -{props.complexity}</h2>
        </div>
        <div className="div" style={{flexGrow:3}}>
        <h2>Steps - {props.steps}</h2>
        </div>
        <div className="div" style={{flexGrow:3}}>
         <h2>Stable -{props.stable}</h2>
        </div>
    </div>
)
}
export default infoDisplay;