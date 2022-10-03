import React, { FC, useState, useEffect, useContext } from 'react';
import PersonTest from './Components/Person/Person-test';
import { HairColor } from './Components/Person/Person-test';

const App: FC = () => {

  return (
    <div className="App">
      <PersonTest name="andrew" age={28} hungry={false} hairColor={HairColor.brown}/>
    </div>
  );
}

export default App;
