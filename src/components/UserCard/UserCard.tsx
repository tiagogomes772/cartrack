import React from 'react';
import './UserCard.scss';

export const UserCard = ({user}: any) => (
    <div className="user-card">
        <div className="user-card__info">
            <div className="user-card__column">
                <div className="user-card__form">
                UserName: &nbsp; <span>{user.username}</span>
                </div>
                <div className="user-card__form">
                Name:&nbsp; <span>{user.name}</span>
                </div>
            </div>
            <div className="user-card__column">
                <div className="user-card__form">
                Website:&nbsp; <span>{user.website}</span>
                </div>
                {user.address && <div className="user-card__form">
                Address:&nbsp; <span>{user.address.street}, {user.address.city}</span>
                </div>}
            </div>
        </div>
        <div className="user-card__contact">
            <div className="user-card__info">
                <div>
                    Email:&nbsp; <span>{user.email}</span>
                </div>
            </div>
            <a href={`mailto:${user.email}`}>Contact me</a> 
        </div>
    </div>
)