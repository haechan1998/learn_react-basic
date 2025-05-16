import React, { useState } from 'react';

const InputSample = () => {
    // input 의 value 값을 useState 로 관리

    const [text, setText] = useState(''); // 문자 초기값 공백

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onclick = () => {
        setText('');
    }

    return (
        <div className='InputSample'>
            {/* input 의 상태를 관리 할 때에는 input 태그의 value 값을 설정해주는 것이 중요 */}
            {/* 상태가 변경 되었을 경우 input 내용이 update 되어야 함. => useState() */}
            <input type="text" onChange={onChange} name='text' value={text}/>    
            <button onClick={onclick}>초기화</button>
            <div>
                <b>값 : {text}</b>    
            </div>        
        </div>
    );
};

export default InputSample;