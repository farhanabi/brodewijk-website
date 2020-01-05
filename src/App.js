import React from 'react';
import classes from './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Customize from './pages/Customize/Customize'
import BookAppointment from './pages/BookAppointment/BookAppointment'
import ContactUs from './pages/ContactUs/ContactUs'
import Accounts from './pages/Accounts/Accounts'

const App = () => {
  return (
    <div className={classes.App}>
      <Router>
        <Route exact path='/' render={() => <Homepage/>} />
        <Route path='/customize' render={()=> <Customize/>} />
        <Route path='/appointment' render={()=> <BookAppointment/>} />
        <Route path='/contact-us' render={()=> <ContactUs/>} />
        <Route path='/accounts' render={()=> <Accounts/>} />
      </Router>
    </div>
  );
}

export default App;
