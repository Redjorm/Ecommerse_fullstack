import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfigToken from '../../components/utils/getConfigToken'

const cartSlices = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload
  }
})

export const { setCartGlobal } = cartSlices.actions

export default cartSlices.reducer

export const getAllProductsCartThunk = () => dispatch => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL

  const url = `${URL_BASE}/cart`
  
  axios
    .get(url, getConfigToken())
    .then(res => dispatch(setCartGlobal(res.data)))
    .catch(err => console.log(err))
}
