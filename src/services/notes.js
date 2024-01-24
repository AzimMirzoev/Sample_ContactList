import axios from 'axios';

const baseURL = 'http://localhost:3001/api/persons';

function getAll(){
    const request = axios.get(baseURL);
    console.log("the get function works fine! ");
    return request.then((res => {
        return res.data;
    }));
}

function create(newNote){
    const request = axios.post(baseURL, newNote);
    return request.then((res => {
        return res.data
    }));
    // return request.then(el => {
    //     console.log("You created a new phone!");
    //     return el.status;
    // })
}
function update(id, noteToChange){
    return axios.put(`${baseURL}/${id}`, noteToChange).
    then(res => {
        return res.data;
    })
}

function deleteEntry(id){
    return axios.delete(`${baseURL}/${id}`).
    then(res =>{
        return res.data;
    });
}

export default{
    getAll,
    create,
    update,
    deleteEntry
}
