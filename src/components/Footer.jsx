import React from 'react';
import github from './github.png'

function Footer (){

    return (
        <div className="footer">
          <p>Made by Usborn Ocampo</p><a href='https://github.com/usborn116' target='_blank'><img src={github}></img></a>
        </div>
      );
}

export default Footer;