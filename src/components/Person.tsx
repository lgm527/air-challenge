import React from 'react';

export interface PersonProps {
    person: {    
    id: string;
    fullName: string;
    email: string;
    avatar: string;
    description: string;
    }
}

const Person: React.FC<PersonProps> = ({...person}) => {
    return (
        <div id={id}>
            <img src={avatar}/>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}

export default Person;