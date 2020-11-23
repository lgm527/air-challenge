import React, {useState} from 'react';
import './App.css';

export type PersonObject = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  description: string;
}

const App = () => {
  // loading state
  const [loading, setLoading] = useState(false)
  // save people in state
  const [people, setPeople] = useState<PersonObject[]>([])
  // capture user input
  const [filter, setFilter] = useState('')


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
