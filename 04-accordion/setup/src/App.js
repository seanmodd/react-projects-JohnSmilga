import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <>
      <h1>sample</h1>
      <h2>accordion pddddroject setup</h2>
      <SingleQuestion data={data} />
    </>
  );
}

export default App;
