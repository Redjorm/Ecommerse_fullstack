import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const useAuthentication = () => {
  const navigate = useNavigate()

  const createNewUser = data => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/users`
    axios
      .post(url, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'User was successfully created',
          showConfirmButton: false,
          timer: 1200
        })
        navigate('/login')
      })
      .catch(err => {
        if (err?.response?.data?.error === 'User already exists') {
          Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'User already exists',
            showConfirmButton: false,
            timer: 1200
          })
        }
      })
  }

  const loginUser = data => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/users/login`
    axios
      .post(url, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'You have successfully signed in',
          showConfirmButton: false,
          timer: 1800
        })
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')

        if (err?.response?.data?.error === 'invalid credentials') {
          Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'invalid credentials',
            showConfirmButton: false,
            timer: 1800
          })
        }
      })
  }

  return { createNewUser, loginUser }
}

export default useAuthentication
