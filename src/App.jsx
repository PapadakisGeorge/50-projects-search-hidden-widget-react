import React, {useState} from 'react';
import './App.scss';
import Button from './Button/Button';
import InputBar from './InputBar/InputBar';

function App() {

  const [isExpanded, setExpanded] = useState(false);

  const changeActive = () => {
    setExpanded(!isExpanded);
  } 

  return (
    <div className={isExpanded? 'search active': 'search'}>
      <InputBar/>
      <Button
        changeActive={changeActive}
      />
    </div>
  );
}

export default App;
