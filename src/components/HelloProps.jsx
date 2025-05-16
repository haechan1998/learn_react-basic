import React from 'react';

// props : properties 의 약자
// compoenent 로 전달 할 값이 있을 경우 props 를 사용
// props 객체로 전달받음.

// const HelloProps = (props) => {
//     // props 로 name 변수를 받아 올 예정
//     // <></> return 태그가 <div></div> 면 안 될 경우 사용
//     return (
//         <div className='HelloProps'> 
//             <div style={{color:props.color}}>Hello.jsx area props = {props.name}</div>
//         </div>
//     );
// };


// 구조분해 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담는 javascript 표현식
// props => name, color
const HelloProps = ({name, color}) => {
    // props 로 name 변수를 받아 올 예정
    // <></> return 태그가 <div></div> 면 안 될 경우 사용
    return (
        <div className='HelloProps'> 
            <div style={{color:color}}>Hello.jsx area props = {name}</div>
        </div>
    );
};

export default HelloProps;