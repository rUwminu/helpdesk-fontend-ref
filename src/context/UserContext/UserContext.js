import { useEffect } from 'react'
import { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
}

export const UserContext = createContext(initialState)

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
