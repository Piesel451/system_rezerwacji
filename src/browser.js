import React from 'react';
import '../browser.css';

function Location1() {
  return (<input id='location1' class='search' type='text' title='Wpisz nazwę początkową' placeholder='Lokacja początkowa' />);
}
function Location2() {
  return (<input id='location1' class='search' type='text' title='Wpisz nazwę początkową' placeholder='Lokacja docelowa' />);
}
function CurrentDate() {
  return (<input id='travelDate' type='datetime-local' defaultValue={getDate()} title='Wybierz datę podróży' />);
}
function SubmitButton() {
  return (<input id='submitButton' type='submit' value='SZUKAJ TRASY🔍' title='Szukaj trasy'/>);
}

function getDate() {
  let CDate = new Date();
  let day = CDate.getDate();
  if (day < 10) day = '0' + day;
  let month = CDate.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let year = CDate.getFullYear();
  let hour = CDate.getHours();
  if (hour < 10) hour = '0' + hour;
  let minutes = ':00';
  return (year + '-' + month + '-' + day + 'T' + hour + minutes);
}

function App() {
  return (<div id='browser'>
    <Location1 />
    <Location2 />
    <CurrentDate />
    <SubmitButton />
  </div>);
}

export default App;
