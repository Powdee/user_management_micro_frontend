import React from 'react';
import ReactDOM from 'react-dom';
 
export const Portal = () => (
  <div className="App">
    Hello world - portal
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <Portal />
  </React.StrictMode>,
  document.getElementById('root')
);