import React from 'react';
import classes from './App.css';
import { Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Customize from './pages/Customize/Customize'
import BookAppointment from './pages/BookAppointment/BookAppointment'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'
import ContactUs from './pages/ContactUs/ContactUs'
import Accounts from './pages/Accounts/Accounts'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Logout from './pages/Logout/Logout'
import Partnership from './pages/Partnership/Partnership'
import SizeGuide from './pages/SizeGuide/SizeGuide'
import FAQ from './pages/FAQ/FAQ'

import History from './Shared/History'

const App = () => {
  return (
    <div className={classes.App}>
      <Router history={History}>
        <Route exact path='/' render={() => <Homepage/>} />
        <Route path='/customize' render={()=> <Customize/>} />
        <Route path='/appointment' render={()=> <BookAppointment/>} />
        <Route path='/contact-us' render={()=> <ContactUs/>} />
        <Route path='/terms-and-conditions' render={()=> <TermsAndConditions/>} />
        <Route path='/accounts' render={()=> <Accounts/>} />
        <Route path='/login' render={()=> <Login/>} />
        <Route path='/register' render={()=> <Register/>} />
        <Route path='/logout' render={()=> <Logout/>} />
        <Route path='/landing' render={()=> <LandingPage/>} />
        <Route path='/partnership' render={()=> <Partnership/>} />
        <Route path='/size-guide' render={()=> <SizeGuide/>} />
        <Route path='/faq' render={()=> <FAQ/>} />
      </Router>
    </div>
  )
}

export default App;
