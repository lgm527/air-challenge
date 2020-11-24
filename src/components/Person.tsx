import React from 'react';

export interface PersonProps {
    person: {    
    id: string;
    name: string;
    email: string;
    avatar: string;
    description: string;
    }
}

const Person: React.FC<PersonProps> = ({person}) => {
    const {id, name, email, avatar, description} = person;
   
    
    return (
        <div id={id}>
            <img src={avatar} alt='avatar'/>
            <p>{name}</p>
            <p>{email}</p>
            <p>{description}</p>
        </div>
    )
}

export default Person;