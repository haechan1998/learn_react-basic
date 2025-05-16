import React from 'react';

const User = ({user, onRemove, onToggle}) => {
    return (
        <div className='User'>
            <b
                style={ {color: user.active ? "green" : "black"} }
                onClick={ () => {onToggle(user.id)} }
            >
            {user.userName}
            </b> <span>({user.email})</span> 
            {/* 삭제버튼 추가 파라미터를 전달 할 때 onClick={ () => {onRemove(user.id)} }*/}
            <button onClick={ () => {onRemove(user.id)} }>삭제</button>
        </div>
    );
};

export default User;