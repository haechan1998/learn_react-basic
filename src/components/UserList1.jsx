import React from 'react';
import User from './User';

const UserList1 = ({users, onRemove, onToggle}) => {

    return (
        <div className='UserList1'>
            {
                users.map(user => (
                    <User 
                        user={user}
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}/>
                ))
            }
        </div>
    );
};

export default UserList1;