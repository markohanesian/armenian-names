import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@material-ui/core/Button';
import NameTable from "./components/nameTable";


function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <NameTable />
    </div>
  );
}

export default App;
