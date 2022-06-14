import React,{useState,useRef} from "react";
import '../App.css';
//useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 
//변경 가능한 ref 객체를 반환합니다.
//반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.
//본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 상자와 같습니다
const FiveApp=()=>{
    const [result,setResult]=useState('');
    const nameRef=useRef(''); 
    const korRef=useRef('');
    const engRef=useRef('');
    const mathRef=useRef('');

    const buttonResult=()=>{
        //데이타 읽어오기
       let name=nameRef.current.value;
       let kor=Number(korRef.current.value);
       let eng=Number(engRef.current.value);
       let math=Number(mathRef.current.value);
        let sum=kor+eng+math;
        let avg=(sum/3).toFixed(2);

        let r=`[결과 확인]
    이 름 : ${name}
    국어점수 : ${kor}
    영어점수 : ${eng}
    수학점수 : ${math}
    총 점 : ${sum}
    평 균 : ${avg}`;
        setResult(r);
        // 초기화 및 포커스
         nameRef.current.focus();
         korRef.current.focus();
         engRef.current.focus();
         mathRef.current.focus();
    }
    return (
        <div>
        <h3 className="alert alert-info">FiveApp 컴포넌트 -useRef 예제</h3>
        <h4>이름입력 : <input type='text' ref={nameRef}/></h4>
        <h4>국어점수 : <input type='text' ref={korRef}/></h4>
        <h4>영어점수 : <input type='text' ref={engRef}/></h4>
        <h4>수학점수 : <input type='text' ref={mathRef}/></h4>
        <button type="button" className="btn btn-danger"
        onClick={buttonResult}>결과 확인</button>
        <h2 className="alert alert-info" style={{whiteSpace:'pre-wrap'}} >{result}</h2>
        </div>
    )
}
export default FiveApp;