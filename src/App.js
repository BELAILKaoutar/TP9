import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <CompteForm onAdd={triggerRefresh} />
      <CompteList refresh={refresh} />
    </div>
  );
}

export default App;
