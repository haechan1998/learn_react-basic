import React from 'react';


const User = ({user}) => {
    return(
        <div>
            <b>{user.userName}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = () => {

    const users = [
        {
            id : 1,
            userName : 'hong',
            email : 'publicHong@gmail.com'
        },
        {
            id : 2,
            userName : 'kim',
            email : 'publicKim@gmail.com'
        },
        {
            id : 3,
            userName : 'lee',
            email : 'publicLee@gmail.com'
        }
    ]

    return (
        <div className='UserList'>
            {/* <h2>{users[0].id} / {users[0].userName} / {users[0].email}</h2> */}
            {/* User의 값을 출력하는 컴포넌트를 하나 생성 */}
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {/* users 값을 반복해서 user 에 값을 설정 map()*/}
            {/* key 가 없으면 콘솔 상 에러가 남. */}
            {/* {
                users.map(user => (
                    <User user={user} key={user.id}/>
                ))
            } */}
            
            {/* 만약 key 로 사용할만한 값이 없다면... */}
            {
                users.map((user, index) => (
                    <User user={user} key={index} />
                ))
            }
        </div>
    );
};

export default UserList;