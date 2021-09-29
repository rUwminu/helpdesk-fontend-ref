import './App.css'
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { UserContext } from './context/UserContext/UserContext'
import tw from 'twin.macro'
import styled from 'styled-components'

// Pages
import { Login, Home } from './Pages/index'
import { Topbar, Sidebar } from './Components/index'

function App() {
  const { user } = useContext(UserContext)

  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        {user ? (
          <>
            <Topbar />
            <BodyContainer>
              <Sidebar />
              <Route path='/' exact>
                <Home />
              </Route>
            </BodyContainer>
          </>
        ) : (
          <Redirect to='/login' />
        )}
      </Switch>
    </Router>
  )
}

const BodyContainer = styled.div`
  ${tw`
    h-screen
    w-screen
    flex
    bg-gray-100
  `}
`

export default App
