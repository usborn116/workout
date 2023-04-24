import React from 'react';

function Button ({name, img, clickHandler}){

    return (
        <div className="button">
          <button onClick={() => clickHandler({name})} className='btn'>{name} {img}</button>
        </div>
      );
}

export default Button;