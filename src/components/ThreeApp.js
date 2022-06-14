import React,{useState} from "react";
import '../App.css';

const ThreeApp=()=>{
    const [boards,setBoards]=useState([
        {
        no:1,
        writer:'이미자',
        subject: 'already',
        photo:'s1'
    },
    {
        no:2,
        writer:'아직자',
        subject: 'still',
        photo:'s2'
    },
    {
        no:3,
        writer:'얼릉자',
        subject: 'hurry',
        photo:'s3'
    },
    {
        no:4,
        writer:'이따자',
        subject: 'later',
        photo:'s4'
    },
    {
        no:5,
        writer:'지금자',
        subject: 'now',
        photo:'s5'
    },
]);
    return (
        <div>
        <h3 className="alert alert-info">ThreeApp 컴포넌트</h3>
        <table className="table table-bordered" style={{width:'400px'}}>
            <caption><b>배열 객체 출력</b></caption>
            <thead>
                <tr style={{backgroundColor: '#ddd'}}>
                    <th width='60'>번호</th>
                    <th width='100'>사진</th>
                    <th width='300'>제목</th>
                    <th width='100'>작성자</th>
                </tr>
            </thead>
            <tbody>
                {
                    boards.map((row,index)=>(
                    <tr key={index}>
                        <td>{row.no}</td>
                        <td><img alt='' src={`../image/${row.photo}.JPG`}
                        style={{width:'100px'}}/>
                        </td>
                        <td style={{color:'blue'}}>{row.subject} </td>
                        <td>{row.writer}</td>
                    </tr>
                    
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default ThreeApp;