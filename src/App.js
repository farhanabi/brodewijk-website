import React from 'react';
import classes from './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Customize from './pages/Customize'
import BookAppointment from './pages/BookAppointment'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div className={classes.App}>
      <Router>
        <Route exact path='/' render={() => <Homepage/>} />
        <Route path='/customize' render={()=> <Customize/>} />
        <Route path='/appointment' render={()=> <BookAppointment/>} />
        <Route path='/contact-us' render={()=> <ContactUs/>} />
      </Router>
    </div>
  );
}

export default App;
