import React, {useEffect, useState} from 'react'
import classes from './Register.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';

import Authorization from "../../Shared/Authorization"
import History from "../../Shared/History"

function Register() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  
  useEffect(() => {
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    if (Authorization.validateToken()) History.push('/')
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (passwordConfirmation !== password) return alert('Password and confirmation should be same!')
    Authorization.register(email,password,passwordConfirmation).then((auth) => { if (auth) History.push('/accounts')} )
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
            <input placeholder='Password Confirmation' className={classes.loginTextInput} type="password" onChange={e => setPasswordConfirmation(e.target.value)} value={passwordConfirmation || ''}/>
            <br />
            <input type="submit" value="Register" className={classes.loginButton} />
            <br />
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register