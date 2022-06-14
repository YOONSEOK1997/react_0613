import React,{useState} from "react";
import '../App.css';

const TwoApp=()=>{
    const [inputs,setinputs]=useState({
         name:'이무늬',
         addr:'강남구',
         age:20
    });

     const changeData=(e)=>{
        console.log("name:"+e.target.name);
        console.log("value"+e.target.value);
        

        //name,value 값 얻기
        const {name,value}=e.target;
        //변경
        setinputs({
            ...inputs, /*펼침연산자, 이걸써야 기존멤버값이 안바뀐당*/
            [name]:value
        })
     }
    return (
        <div>
        <h3 className="alert alert-info">TwoApp 컴포넌트-state를 객체로</h3>
        <h3>이 름 : <input type='text' name='name' defaultValue={inputs.name}
        onChange={changeData}/></h3>

        <h3>주 소 : <input type='text' name='addr' defaultValue={inputs.addr}
         onChange={changeData}/></h3>
        
        <h3>나 이 : <input type='text' name='age' defaultValue={inputs.age}
         onChange={changeData}/></h3>
        <hr/>
        <h2>이 름 : {inputs.name},{inputs['name']}</h2> {/* 배열방식으로도 가능*/}
        
        <h2>주 소: {inputs.addr}</h2>

        <h2>나 이 : {inputs.age}</h2>

        
        </div>
    )
}
export default TwoApp;