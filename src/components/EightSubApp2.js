import React,{useState} from "react";
import '../App.css';

const EightSubApp2=(props)=>{
     const [color,setColor]=useState('#ccccff');
    
        //버튼 이벤트
        const buttonEvent=()=>{
            props.onAddColor(color);
        }
    
    return (
        <div style={{width:'500px'}}>
            <h3 className="alert alert-info">에잇 써브 앱 2</h3>
            <div className="form-inline">
                <b>색상선택 : </b>
                <input type='color' defaultValue={color}
                style={{width:'100px'}} onChange={(e)=>{
                setColor(e.target.value);
                }}/>

                <button type="button" onClick={buttonEvent} className="btn btn-warning btn-sm">
                    색상추가
                </button>
            </div>
        </div>
    )
}
export default EightSubApp2;