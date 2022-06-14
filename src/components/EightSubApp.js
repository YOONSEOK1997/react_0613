import React,{useState} from "react";

const EightSubApp=({changePhoto,changeMessage,changeColor})=>{
    return(
<div>
        <input type="color" onChange={changeColor} />
        <input type="message" onChange={changeMessage} />
        <select onChange={changePhoto}>
        <option>s1</option>
        <option>s2</option>
        <option>s3</option>
        <option>s4</option>
        <option>s5</option>
        </select>

</div>
    )

}

export default EightSubApp;