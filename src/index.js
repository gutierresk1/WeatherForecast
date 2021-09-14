import App from './components/App';
import React from 'react'; 
import ReactDOM from 'react-dom'; //index.js is where you only call DOM

//we want to render the App Component. 
//For structuring purposes, we store them in a folder. 
ReactDOM.render(<App />, document.querySelector('#root'));
