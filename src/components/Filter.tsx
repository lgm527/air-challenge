import React from 'react';

interface FilterProps {
    filterPeople: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<FilterProps> = ({filterPeople}) => {
    return (
        <div>
            <input onChange={filterPeople} />
        </div>
    )
}

export default Filter;