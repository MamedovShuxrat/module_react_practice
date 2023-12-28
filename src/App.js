import React from 'react';
import Table from './components/table';
import { usersArray } from './data';

function App() {

  return (
    <div className="App">
      <Table users={usersArray} />
    </div>
  );
}

export default App;
