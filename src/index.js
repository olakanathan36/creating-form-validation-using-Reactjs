import React from "react";
import ReactDOM from 'react-dom';
import Form from './component/form';

function Call(){
  return(
    <div>
      <Form />
    </div>
  )
}
ReactDOM.render(<Call />, document.getElementById('root'));