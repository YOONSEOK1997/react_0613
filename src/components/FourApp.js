import React,{useState,useRef} from "react";
import '../App.css';

//useRef : 변수 관리하는 기능
//state 와의 차이점 : 값이 변경되어도 다시 렌더링하지 않음
const FourApp=()=>{
    const [count,setCount]=useState(0);
    //ref 선언하는 방법
    const countRef=useRef(0);

    //state 변수 증가하는 함수
    const stateIncre=()=>{
        setCount(count+1);
    }

    //ref 변수 증가하는 함수
    const refIncre=()=>{
        countRef.current=countRef.current+1;
        console.log("countRef="+countRef);
    }
        //state는 바로보임 but 콘솔안보임
        //ref는 안보임 but 콘솔보임
        //state 를 눌러야 렌더링되면서 변경된 값이 출력
    return (
        <div>
        <h3 className="alert alert-info">FourApp 컴포넌트</h3>
        <button type="button" className="btn btn-danger"
        onClick={stateIncre}>state 변수 증가</button>
        
        <div className="numnber">{count}</div>
        <hr/>
        <button type="button" className="btn btn-danger"
        onClick={refIncre}>ref 변수 증가</button>

        <div className="number">{countRef.current}</div>
        </div>
    )
}
export default FourApp;