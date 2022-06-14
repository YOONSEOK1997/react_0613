import React,{useState} from "react";
import '../App.css';
import SixSubApp from "./SixSubApp";
import SixSubApp2 from "./SixsubApp2";
import SixSubApp3 from "./SixSubApp3";

const SixApp=()=>{
    const [number,
        setNumber]=useState(10);
    //증가하는 이벤트 함수
    const numberIncre=()=>{
        setNumber(number+1);
    }
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return (
        <div>
            <h3 className="alert alert-info">SixApp-부모,자식 컴포넌트간 통신</h3>
            <SixSubApp name="권능" age="26"/>
            <SixSubApp name="권지용" age="32"/>
            <SixSubApp name="권나라" age="35"/>
            <br/><br/>
            <SixSubApp2 flower="장미꽃" price="12000" linecolor="red"/>
            <SixSubApp2 flower="안개꽃" price="26000" linecolor="green"/>
            <SixSubApp2 flower="국화꽃" price="17000" linecolor="pink"/>
            <br/><br/>
            <div className="number">{number}</div>
            <SixSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    )
}
export default SixApp;