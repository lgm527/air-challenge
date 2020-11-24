import React, {useEffect, useState} from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonContainer from './containers/PersonContainer';
import { getPeople, PersonObject } from './API';

const App: React.FC = () => {
  // loading state
  const [loading, setLoading] = useState(false)
  // save people in state
  const [people, setPeople] = useState<Array<PersonObject>>([])
  // capture user input
  const [filter, setFilter] = useState('')

  const filterPeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    // save user input in state
    // setFilter()
    // use input to filter people list and rerender results
    // setPeople()
  }

  useEffect(() => {
    setPeople(getPeople());
    

  }, [])
  

  useEffect(() => {
    // setLoading(true);
    //
    // let peopleData: Promise<PersonObject[]> = getPeople()

    //   setPeople(peopleData)
    //   setLoading(false)

  }, [filter])

  

  return (
    <div className="App">
      <Filter filterPeople={filterPeople} />
      <PersonContainer people={people} />
    </div>
  );
}

export default App;
