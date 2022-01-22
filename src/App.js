import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import ListUsers from './components/Users/ListUsers';

function App() {
  const [ listUsers, setListUsers ] = useState([{ name: 'juan', age: 22 }])
  const addUsersHandler = (item) => {
    setListUsers((prev) => {
      return [item, ...prev]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <ListUsers list={ listUsers }/>
    </div>
  );
}

export default App;
