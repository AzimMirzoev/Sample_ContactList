import {useEffect, useState} from 'react';
import PersonForm from './components/PersonForm/PersonForm.jsx';
import Filter from './components/Filter/Filter.jsx';
import Persons from './components/Persons/Persons.jsx';
import React from 'react';
import notesServer from './services/notes.js';


import './App.css';

function App(){

  useEffect(()=>{
    notesServer.getAll().then(data => {
      setListOfNums(data.persons);
    })
  },[])


  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [listOfNums, setListOfNums] = useState([]);
  const [sortBy, setSortBy] = useState('');
  
  return(
    <div className="app_component">
      <h1>Sort: </h1>
      <Filter sortBy={sortBy} setSortBy={setSortBy} listOfNums={listOfNums}/>      

      <h1>Phonebook</h1>
      <PersonForm nameU={name} numU={num} setNVal={setName} setNumVal={setNum} list={listOfNums} setListOfNums={setListOfNums} />
      
      <h1>Numbers</h1>
      <Persons listOfNums={listOfNums} setListOfNums={setListOfNums}/>      
    </div>
  )
}

export default App;
