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

const Person: React.FC<PersonProps> = ({person}) => {
    const {id, fullName, email, avatar, description} = person;
   
    
    return (
        <div id={id}>
            <img src={avatar} alt='avatar'/>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}

export default Person;