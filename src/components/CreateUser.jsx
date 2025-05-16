import React from 'react';

const CreateUser = ({userName, email, onChange, onCreate}) => {


    return (
        <div>
            <input
                type="text"
                name="userName"
                placeholder='userName'
                value={userName}
                onChange={onChange} /> 
            <input
                type="text"
                name="email"
                placeholder='userEmail'
                value={email}
                onChange={onChange} />      
                
            <button onClick={onCreate}>추가</button>
        </div>
    );
};

export default CreateUser;