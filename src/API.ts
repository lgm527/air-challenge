import data from './people.json';

export type PersonObject = {
    id: number;
    name: string;
    email: string;
    avatar: string;
    description: string;
}

export const getPeople = () => {       

    return data.map((person: PersonObject) => (
        {
            ...person
        }
    ))

}