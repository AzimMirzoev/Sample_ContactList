import React from 'react';


function Filter({sortBy, setSortBy, listOfNums}){
    return(
    <>
        <input type="text" value={sortBy} onChange={(e) => setSortBy(e.target.value)} />
        {
            sortBy === '' ? <p>Nothing has chosen yet!</p>
            :
            <div>

            {
                listOfNums.map(el => {
                if(el.name.toLowerCase().includes(sortBy.toLowerCase())){
                    return <p key={el.id}>{el.name} {el.number}</p>
                }else{
                    return;
                }
                })
            }

            </div>
      }
    </>)
}

export default Filter;