import React from 'react';
import './App.css';
import Header from './Header';
import Identity from './Identity';
import Information from './Information';
import Statusdetails from './Statusdetails';

const details = {
  name: "Alan Ford",
  EmployeeID: "00005152",
  Appointment: "9:00 (24-05-2016)",
  Email: "alan.form@email.ni",
  Phone: "+31123456789",
  status: "in progrress",
  Door: "Mark",
  Time: "10:30 (25-05-2016)",
  data: "Boltaart Bosbessen",
  arrow: "<",
  arrow2: ">"
}
function App() {
  return (
    <div className="site-container">
      <Header object={details} />
      <Information object={details} />
      <Statusdetails object={details} />
      <Identity object={details} />
    </div>
  );
}

export default App;
