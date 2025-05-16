import React, { useState } from 'react';

// HOOK : class 를 별도로 작성하지 않고도 상탤를 관리 할 수 있는 기능들을 가지고 있음.
// useState() : 변수의 상태를 관리하는 HOOK
// 변경되는 변수를 관리하기 위해서는 변수명, set 변수명을 같이 관리

const Count = () => {
    // useState(init); [변수, set변수]
    // const numberState = usestate(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];


    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        // setNumber(number + 1);
        // 함수형 업데이트 : 컴포넌트에 최적화를 할 때 사용
        setNumber(pre => pre + 1);
    }
    
    const onDecrease = () => {
        if(number > 0){
            setNumber(number - 1);
        }else{
            console.log("0아래로 내렸다.");
        }
    }

    return (
        <div className='Count'>
            <h1>{number}</h1>
            {/* on이벤트 = {실행하고 싶은 함수} */}
            {/* 실행하고 싶은 함수는 함수 자체를 넣어줘야 함.   () 실행하면 안됨. */}
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Count;