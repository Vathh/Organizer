import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:7051',
  headers: {
    'content-type':'application/json'
  }
});

export default function logIn (user){
  instance({
    'method': 'GET',
    'url': '/api/account/login',
    'data': user
  })
}
