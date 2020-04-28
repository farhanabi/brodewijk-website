import jwt from 'jsonwebtoken'
import APIBuilder from './APIBuilder'

export default class Authorization {
  
  static getToken() {
    return localStorage.getItem('token')
  }

  static setToken(token) {
    if (token) return localStorage.setItem('token', token)
  }

  static validateToken() {
    return (jwt.decode(Authorization.getToken()))
  }

  static getRole() {
    if(Authorization.getToken()) return (jwt.decode(Authorization.getToken()).role)
  }

  static getEmail() {
    if(Authorization.getToken()) return (jwt.decode(Authorization.getToken()).email)
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static async login(email, password) {
    const response = await APIBuilder('Auth/login', {email,password}, 'POST')
    if (response.code !== 200){
      alert('Unidentified email / password')
      return false
    } else {
      Authorization.setToken(response.payload.token)
      alert('Login Success!')
      return true
    }
  }

  static async register(email, password, passwordConfirmation) {
    const response = await APIBuilder('Auth/register', {email,password, passwordConfirmation}, 'POST')
    if (response.code !== 200){
      alert('Register Failed')
      return false
    } else {
      Authorization.setToken(response.payload.token)
      alert('Register Success!')
      return true
    }
  }
}