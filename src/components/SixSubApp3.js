import React,{useState} from "react";
import '../App.css';

const SixSubApp3=(props)=>{
    
    return (
        <div>
         <button type="button" className="btn btn-info" style={{marginLeft:'50px'}}
         onClick={()=>{
           props.decre(); //부모 컴포넌트의 이벤트가 발생
            
         }}>감소</button>
           <button type="button" className="btn btn-info" style={{marginLeft:'50px'}}
         onClick={()=>{
            props.incre(); //부모 컴퍼넌트의 이벹느발생
               
         }}>증가</button>
        
        </div>
    )
}
export default SixSubApp3;

//부모컴퍼넌트가 가진거를 자식컴포넌트가 호출하고싶어요