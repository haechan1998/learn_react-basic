import React, { useRef, useState } from 'react';
import UserList1 from './UserList1';
import CreateUser from './CreateUser';

const UserList2 = () => {
    const [users, setUsers] = useState(
        [
            {
                id : 1,
                userName : 'hong',
                email : 'publicHong@gmail.com',
                active : true
            },
            {
                id : 2,
                userName : 'kim',
                email : 'publicKim@gmail.com',
                active : false
            },
            {
                id : 3,
                userName : 'lee',
                email : 'publicLee@gmail.com',
                active : false
            }
        ]
    );

    const nextId = useRef(4); // 추가할 때 사용될 id 값 설정

    // CreateUser 값을 관리.
    const [inputs, setInputs] = useState(
        {
            userName : '',
            email : ''
        }
    );

    const {userName, email} = inputs; // 구조분해

    // onChange() 설정

    const onChange = (e) => {

        const {name, value} = e.target; // target 의 속성 name="" / value=""
        setInputs({
            ...inputs,
            [name] : value
        })

    }

    // console.log(inputs);
    const onCreate = () => {
        // onChange() 실행 후 input 값이 생기면 배열에 추가
        const user = {
            id : nextId.current, // 객체의 현재값
            userName : userName,
            email : email, // 키와 벨류 값이 같으면 생략가능 // email,
            active : false
        }


        // push / pop 은 잘 안씀 : 원본데이터가 변경되는 값은 쓰지않음.

        setUsers([...users, user])
        // [1,2,3,4,5]
        // a = [1,2,3]
        // setUsers([...a, 4]) => [(1,2,3) = ...a, 4] => [1,2,3,4]

        // setUsers([...users].concat(user)) : 성능 개선 시 편함.

        // nextId 값을 1 증가
        nextId.current += 1;

        // 추가 후 inputs 객체 초기화
        setInputs({
            userName : '',
            email : ''
        })

    }

    // onRemove() 설정
    const onRemove = (id) => {
        // 파라미터의 값으로 가져온 id 값 (User 에서 user.id 로 가져온 값)
        console.log(id);
        // users id 값이 id와 일치하지 않는 원소만 추출하여 새로운 배열을 만들어 사용
        // filter 사용
        setUsers(users.filter(user => user.id !== id));
        
    }

    // onToggle() 설정
    const onToggle = (id) => {
        // 현재 클릭한 유저의 active 를 자신의 값과 반대로 설정
        console.log(id);
        setUsers(
            users.map(user => user.id === id ? {...user, active : !user.active} : user)
        )
    }

    // 활성 사용자 수 집계
    const countActiveUser = () => {
        return users.filter(user => user.active).length;
    }
    const count = countActiveUser();

    
    console.log(users);
    return (
        <div>
            <CreateUser
                userName = {userName}
                email = {email}
                onChange = {onChange}
                onCreate = {onCreate}
            />
            <UserList1 users={users} onRemove={onRemove} onToggle={onToggle}/>
            {/* (활성사용자)초록색의 인원수 */}
            <div>활성 사용자 수 : {count}명</div>
        </div>
    );
};

export default UserList2;