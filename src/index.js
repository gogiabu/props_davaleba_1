import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component';



function App() {
  return (
    <React.Fragment>
      <Component name="გოგი" lastname="აბუსელიძე"></Component>
    </React.Fragment>
  )
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App/>);
