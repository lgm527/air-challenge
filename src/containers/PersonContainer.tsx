import React from 'react';
import Person from './components/Person';
import { PersonObject } from '../App';

interface PersonContainerProps {
    people: <PersonObject>[] | null;
}

const PersonContainer: React.FC<PersonContainerProps> = ({people}) => {
    const people = people.map((person) => <Person person={...person} />)
    return (
        <div>
            {people}
        </div>
    )
}

export default PersonContainer;