import React, {useState, useEffect} from "react";
import '../App.css';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";

const SevenApp = () =>{

    const [board, setBoard] = useState([
        {
            name : '이영자',
            photo : 's2',
            blood : 'AB',
            today : new Date()
        },
        {
            name : '강호동',
            photo : 's5',
            blood : 'O',
            today : new Date()
        },{
            name : '유재석',
            photo : 's7',
            blood : 'A',
            today : new Date()
        }
    ]);

    //데이터 추가하는 함수 이벤트
    const dataSave = (data) =>{
        setBoard(board.concat({
            /*
            name: data.name;
            photo: data.photo;
            blood: data.blood;
            */
            ...data, //같은 이름이기 때문에 가능
            today : new Date()
        }));
    }

    //데이터 삭제 함수 이벤트
    const onDelete = (index) =>{
        setBoard(board.filter((board,i) => i!==index)); };


    return(
        <div>
            <h3 className="alert alert-info">SevenApp - 부모, 자식 컴포넌트 통신</h3>
            <WriteForm onSave={dataSave}/>
            <table className="table table-bordered" style={{width: '700px'}}>
                <caption><b>Board 배열 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'skyblue'}}>
                        <th width='100'>이름</th>
                        <th width='110'>사진</th>
                        <th width='70'>혈액형</th>
                        <th width='100'>날짜</th>
                        <th width='70'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board.map((row,index)=>(<RowItemApp row={row} key={index} index={index} dataRemove={onDelete}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SevenApp;