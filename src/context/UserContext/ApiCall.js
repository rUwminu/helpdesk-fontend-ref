import { loginStart, loginSuccess, loginFailure, logout } from './UserAction'

export const loginProcess = (dispatch) => {
  dispatch(loginStart())
}

export const login = (userData, dispatch) => {
  localStorage.setItem('user', userData)

  dispatch(loginSuccess(userData))
}

export const loginError = (error, dispatch) => {
  dispatch(loginFailure(error))
}

export const userLogout = (dispatch) => {
  dispatch(logout())
  localStorage.removeItem('user')
}
