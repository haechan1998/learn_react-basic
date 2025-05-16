import React from "react";

// function Start(){
//     return(
//         <div className="Start">
//             <h2 className="mainHead">Hello React World</h2>
//             <div className="imfomationBox">
//                 <div className="box box1">설명하는 박스1</div>
//                 <div className="box box2">설명하는 박스2</div>
//             </div>
//         </div>
//     );
// }

// 화살표 함수
const Start = () => {
    // 내부 변수 사용
    const name = "홍길동";

    // 스타일 객체 사용
    const style = {
        color:'white',
        backgroundColor:'black'
    };

    return(
        <div className="Start">
            {/* style = { 객체 형태로 작성 } */}
            <h2 className="mainHead" style={style}>Hello React World</h2>
            {/* return 안에서의 주석모양 // 일반주석을 달면 화면에 그대로 표시*/}
            <h3>{name} Hello</h3>
        </div>
    );
}

export default Start;