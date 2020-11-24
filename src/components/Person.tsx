import React from 'react';
import '../styles/Person.css';

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
    const {id, name, avatar, description} = person;
   
    return (
        <div id={id} className="person-card" >
            <img src={avatar} alt="avatar"/>
            <div className="details">
                <p id="full-name">{name}</p>
                <p id="description">{description}</p>
            </div>
        </div>
    )
}

export default Person;