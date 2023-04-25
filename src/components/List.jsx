import React from 'react';

function List ({workouts}){
    return (
        <div className="list" title='List'>
        <ul>
          {workouts.map((w) => <li>{w.sets} sets of {w.reps}x {w.type}</li>)}
        </ul>
        </div>
      );
}

export default List