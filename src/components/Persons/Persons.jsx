import React from 'react';
import './Persons.css';
import img_user from './user.png';
import axios from 'axios';


function Persons({listOfNums, setListOfNums}){

    
    function deleteEntry(id, name){
        if(window.confirm(`Do you really want to delete ${name}`)){
            axios.delete(`http://localhost:3001/persons/${id}`).then(res => {
                return console.log(res.data);
          })
       
            return setListOfNums(listOfNums.filter(el => {
                if(el.id !== id){
                    return el;
                }
            }));
        }else{
            return;
        }

    }

    return(
        <div className='number_list'>
        {
            listOfNums.map(el => {
            return <div key={el.id} className='list_items'>
                        <img src={el.img === "" ? img_user : el.img} className="contact_img" alt="user_image"/>
                        <p className="name">{el.name}</p> 
                        <p className="number"><i>{el.number}</i></p> 
                        <button className="delete_button" onClick={()=> deleteEntry(el.id, el.name)}>Delete</button>
                   
                    </div>
                
            })
        }
        </div>
    )
}

export default Persons;