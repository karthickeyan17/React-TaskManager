import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clock from './components/Clock.jsx';
import Calendar from './components/Calender.jsx';

const h_style = {
  marginTop: '84px',
  color: 'rgb(10, 10, 10)',
  fontSize: '60px',
  fontWeight: 600,
  lineHeight: '34px',
  marginLeft: '700px',
  fontFamily: "Georgia, 'Times New Roman', Times, serif",
  justifyContent: 'center', 
};

const Heading = () => {
  return (
    <div style={h_style}>To-Do-List</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calendar/>
    <Clock/>
    <Heading/>
    <App />
  </React.StrictMode>,
)
