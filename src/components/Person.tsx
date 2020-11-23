import React from 'react';

export type PersonObject = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    description: string;
  }

interface PersonProps {
    person: <PersonObject>
}

const Person: React.FC<PersonProps> = ({id, name, email, avatar, description}) => {
    return (
        <div>
            <input onChange={filterPeople} />
        </div>
    )
}

export default Person;