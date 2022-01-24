import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import ListUsers from './components/Users/ListUsers';

import Wrapper from './components/Helpers/Wrapper';
function App() {
  const [ listUsers, setListUsers ] = useState([])
  const addUsersHandler = (item) => {
    setListUsers((prev) => {
      return [item, ...prev]
    })
  }
  return (
    <Wrapper>
      <AddUser onAddUser={addUsersHandler} />
      <ListUsers list={ listUsers }/>
    </Wrapper>
  );
}

export default App;
