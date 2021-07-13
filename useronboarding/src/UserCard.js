import React from 'react';

const UserCard = props => {
    return (
        <div className='user-card'>
            <p> {props.user.name} </p>
            <p> {props.user.email} </p>
        </div>
    );
}

export default UserCard;