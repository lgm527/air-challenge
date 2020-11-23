import React from 'react';
import Person from '../components/Person';

interface PersonContainerProps {
    people?: any[] | null;
}

const PersonContainer: React.FC<PersonContainerProps> = ({people}) => {

    return (
        <div>
            {!!people && people.map((person) => <Person person={person} />)}
        </div>
    )
}

export default PersonContainer;