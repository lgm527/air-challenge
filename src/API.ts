
import data from './people.json';

export type PersonObject = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    description: string;
}

export const getPeople = () => {
    console.log(data);
    
    // return data.map((person: PersonObject) => {

    //     {
    //         id: person.id,
    //         name: person.name,
    //         email: person.email,
    //         avatar: person.avatar,
    //         description: person.description,
    //     }

    // })        
}