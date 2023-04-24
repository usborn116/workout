import React from 'react';

function List ({workouts}){
    return (
        <div className="list">
        <ul>
          {workouts.map((w) => <li>{w.sets} sets of {w.reps}x {w.type}</li>)}
        </ul>
        </div>
      );
}

export default List