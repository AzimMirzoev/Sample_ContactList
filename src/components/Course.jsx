import React from 'react';

function Course({course}){
    return (
        <div>
            {
                course.map(el => {
                    let totalOfExe = 0;
                    return (
                    <div key={el.id}>
                        <h1>{el.name}</h1>

                        <ul>
                            {el.parts.map(item => {
                                totalOfExe+=item.exercises;
                                return (<li key={item.id}>{item.name} {item.exercises}</li>)
                                
                            })}
                        </ul>
                        
                        <h4>Total of {totalOfExe} exercises</h4>
                        
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Course;
