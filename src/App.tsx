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
    setLoading(true);

    const peopleData = async () => {
      await getPeople();
    }
    // peopleData()
    setPeople(peopleData())

    // async function newPeople() {
    //   await getPeople()
    // }

    // let peopleData = newPeople()

    //   setPeople(peopleData)
    //   setLoading(false)

  }, [filter, people])

  return (
    <div className="App">
      <Filter filterPeople={filterPeople} />
      <PersonContainer people={people} />
    </div>
  );
}

export default App;
