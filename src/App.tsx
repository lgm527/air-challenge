import React, {useEffect, useState} from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonContainer from './containers/PersonContainer';
import { getPeople, PersonObject } from './API';

const ALL_PEOPLE = getPeople();

const App: React.FC = () => {
  const [people, setPeople] = useState<Array<PersonObject>>([])
  const [filter, setFilter] = useState('')

  const filterPeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value)
    let filteredPeople = ALL_PEOPLE.filter((person) => person.name.toLowerCase().includes(filter))
    setPeople(filteredPeople)
  }

  useEffect(() => {
    setPeople(getPeople());
  }, [])

  return (
    <div className="App">
      <Filter filterPeople={filterPeople} />
      <PersonContainer people={people} />
    </div>
  );
}

export default App;
