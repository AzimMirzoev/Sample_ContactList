import React from 'react';
import notesServices from '../../src/services/notes.js'
import './PersonForm.css';

function PersonForm({nameU, numU, setNVal, setNumVal, list, setListOfNums}){
    
    function onAddToList(e){
      e.preventDefault();
       
      for(let i = 0 ;i<list.length; i++){
        if(list[i].name === nameU){
          if(window.confirm(`${list[i].name} is already added to phonebook, replace the old number with a new one?`)){
            
            const nodeToUpdate = {
              ...list[i],
              number: numU
            }
            notesServices.update(list[i].id, nodeToUpdate);

            return setListOfNums(list.filter(el => {
              if(el.name === nameU){
                setNVal('');
                setNumVal('');
                return nodeToUpdate;
              }else{
                return el;
              }
            }));

          }
        }
      }

      const d = new Date();
     
      const newNote = {
        "name": nameU,
        "number": numU,
        "id": `${list.length + 1}`,
        "dateOfCreation": `${d.getDay()+'/'+ d.getMonth()+'/'+ d.getFullYear()}`,
        "img": ""
      }
      
      notesServices.create(newNote);
      setNVal('');
      setNumVal('');
      return setListOfNums([...list, newNote]);


    }
    return(
        <>
            <form className='person_form' method="POST">
                <p className="name_input_text">Name: <input className="name_input" value={nameU} onChange={(e) => setNVal(e.target.value)}/></p>
                
                <p className="number_input_text">Number: <input className="number_input" value={numU} onChange={(e) => setNumVal(e.target.value)} /> </p>
                

                <button onClick={onAddToList} className='add_button'>ADD</button>
            </form>

        </>
    )
}

export default PersonForm;
