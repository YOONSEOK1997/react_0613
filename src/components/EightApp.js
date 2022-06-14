import React,{useState} from "react";
import EightSubApp from "./EightSubApp";
import EightSubApp2 from "./EightSubApp2";
const EightApp=()=>{
    const [color,setColor]=useState('magenta');
    const [message,setMessage]=useState('Have a good day');
    const [photo,setPhoto]=useState('s5');
    const [likeColor,setLikeColor]=useState(['red','skyblue','yellowgreen']);

    const changeColor=(e)=>{
        setColor(e.target.value);
    }
    const changeMessage=(e)=>{
        setMessage(e.target.value);
    }
    const changePhoto=(e)=>{
        setPhoto(e.target.value);
    }
    //삭제
    const deleteLikeColor=(idx)=>{
        setLikeColor(likeColor.filter((a,i)=>(i!==idx)));
    }
    //추가
    const AddColorEvent=(color)=>{
        setLikeColor(likeColor.concat(color));
    }

return(
    <div> <h3 className="alert alert-info">에잇APP - 부모, 자식 컴포넌트 통신 문제</h3>
    <br/>
    <h1 style={{color:color}}>{message}</h1>
    <img alt='' src={`../image/${photo}.JPG`}/>
    <br/>
    {
        likeColor.map((color,idx)=>(<div className="circle" key={idx} style={{backgroundColor:color}}
        onDoubleClick={()=>{deleteLikeColor(idx);}}>{idx}</div>))
    }
    <br style={{clear:'both'}}/><br/>
    <EightSubApp changePhoto={changePhoto} changeColor={changeColor} changeMessage={changeMessage}/>
    <br/>
    <EightSubApp2 onAddColor={AddColorEvent}/>
    </div>
)
}

export default EightApp;