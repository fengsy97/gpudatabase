import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/app.css'
import ThemeBtn from "./component/ThemeBtn";
// import { initializeDatabase } from "./database/Database";
export default function index() {
    
    return (
      <div>index</div>
    )
}


// const [theme, toggleTheme] = ThemeBtn();
const root = ReactDOM.createRoot(document.getElementById('root'));
// initializeDatabase();
root.render(
    <>
    <div className='App'><App/> </div>
    </>
    
    
);
