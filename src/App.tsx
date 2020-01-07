import React from 'react';
import logo from './logo.svg';
import Header from './Header'
import Description from './Description'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name='React' />
      </header>
      <Description countBy={1} />
    </div>
  );
}

export default App;
