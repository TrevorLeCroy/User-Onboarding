import React from 'react';
import UserCard from './UserCard';

const Users = props => {
    return (
        <div className='users-tab'>
            <p> Users </p>
            
            <div className='user-container'>
                {
                    props.users.map(user => {
                        return <UserCard user={user} key={user.id}/>
                    })
                }
            </div>
        </div>
    );
}

export default Users;

