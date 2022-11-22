import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:7051',
  headers: {
    "Content-Type": "application/json"
  }
});

export default function logIn (user){
  instance({
    method: 'POST',
    url: '/api/account/login',
    data : user
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  });
}

