import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './Login.css'
import Header from '../../Components/Header/Header'
import Footer from './components/Footer'

import Authorization from "../../Shared/Authorization"
import History from "../../Shared/History"

function Accounts() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  useEffect(() => {
    setEmail('')
    setPassword('')
    if (Authorization.validateToken()) History.push('/')
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()

    Authorization.login(email,password).then((auth) => { if (auth) History.push('/accounts')} )
  }

  return (
    <div className={classes.App}>
      <div className={classes.stickyHeader}><Header textColor='rgb(90,90,90)' blackLogo/></div>
      <div className={classes.firstGrids} id='firstGrid'>
        <div className={classes.firstGrid}>
          <form onSubmit={handleSubmit}>
            <input placeholder='Email' className={classes.loginTextInput} type="email" onChange={e => setEmail(e.target.value)} value={email || ''}/>
            <br />
            <input placeholder='Password' className={classes.loginTextInput} type="password" onChange={e => setPassword(e.target.value)} value={password || ''}/>
            <br />
            <input type="submit" value="Login" className={classes.loginButton} />
            <br />
            <h3 className={classes.registerLabel}>Not a member? <Link to="/register/" className={classes.registerAnchor}>Sign up now!</Link></h3>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Accounts;