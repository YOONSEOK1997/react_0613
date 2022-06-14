import React,{useState} from "react";
import '../App.css';

const SixSubApp2=(props)=>{
    console.dir(props);
    return (
        <div>
           <div className="line" style={{borderColor:props.linecolor}}>{props.flower}의 가격은 {props.price}원 입니다.</div>
        </div>
    )
}
export default SixSubApp2;