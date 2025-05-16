import React, { useRef, useState } from 'react';


// input 의 값이 여러개 일 경우 
const InputSample2 = () => {

    const [inputs, setInputs] = useState({
        // 여기서 사용 할 이름 생성
        name : '',
        nick : ''
    });

    // document.getElementBy** 같은 역할을 하는 HOOK
    // useRef() : 특정 DOM 을 선택 할 때 사용
    const nameInput = useRef();

    const {name, nick} = inputs;

    const onChange = (e) => {
        console.log(e.target); // name 속성은 변수명으로 사용 / value = 값.
        const {name, value} = e.target; // e.target 의 name 과 value 속성을 추출
        setInputs({
            // 기존 값 복사
            ...inputs,
            [name] : value, // name 키를 가진 value 값을 저장.
        })
    }

    const onclick = () => {
        setInputs({
            name : '',
            nick : ''
        })
        // name input 창을 선택
        // useRef() 대상에 대한 할 일을 설정
        nameInput.current.focus(); // nameInput 객체로 포커스 설정

    }


    return (
        <div>
            <input
            type="text"
            onChange={onChange}
            name='name'
            value={name}
            placeholder='이름'
            // useRef() 설정
            ref={nameInput} />  

            <input
            type="text"
            onChange={onChange}
            name='nick'
            value={nick}
            placeholder='닉네임' />
            {/* 초기화 버튼을 누르면 input value가 초기화 되고,
                name에 포커스를 맞추기 */}
            <button onClick={onclick}>초기화</button>
            <div>
                <b>값 : {name}({nick})</b>    
            </div>   
        </div>
    );
};

export default InputSample2;