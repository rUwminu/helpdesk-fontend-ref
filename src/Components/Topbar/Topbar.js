import React, { useState, useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { userLogout } from '../../context/UserContext/ApiCall'
import { UserContext } from '../../context/UserContext/UserContext'

// Icons
import {
  NotificationsNone,
  Settings,
  Language,
  ExitToApp,
} from '@material-ui/icons'

const Topbar = () => {
  const history = useHistory()
  const [isActive, setIsActive] = useState(false)
  const { user, dispatch } = useContext(UserContext)

  const handleLogout = () => {
    userLogout(dispatch)
    history.push('/login')
  }

  return (
    <TopContainer>
      <LeftContainer>
        <span className='logo'>AdminPanel</span>
      </LeftContainer>
      <RightContainer>
        <div className='icons-container'>
          <NotificationsNone />
          <span className='noti'>2</span>
        </div>
        <div className='icons-container'>
          <Language />
          <span className='noti'>2</span>
        </div>
        <div onClick={() => setIsActive(true)} className='icons-container'>
          <Settings />
          <div
            className={`drop-menu ${isActive ? 'inline-block' : 'hidden'}`}
            onMouseLeave={() => setIsActive(false)}
          >
            <h1>Option</h1>
            <h2 onClick={handleLogout}>
              Logout
              <ExitToApp />
            </h2>
          </div>
        </div>
        <img
          src={
            user.profilePic
              ? user.profilePic
              : 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
          }
          alt=''
          className='top-avatar'
        />
      </RightContainer>
    </TopContainer>
  )
}

const TopContainer = styled.div`
  ${tw`
    fixed
    top-0
    w-full
    flex
    items-center
    justify-between
    py-5
    px-8
    bg-white
    shadow-md
    z-30
  `}
`

const LeftContainer = styled.div`
  ${tw``}

  .logo {
    ${tw`
        text-lg
        lg:text-xl
        text-blue-600
        cursor-pointer
    `}
  }
`

const RightContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  .icons-container {
    ${tw`
        ml-3
        relative
        cursor-pointer
    `}

    .noti {
      ${tw`
        absolute
        top-[-5px]
        right-[-5px]
        flex
        items-center
        justify-center
        w-4
        h-4
        text-white
        bg-red-500
        font-semibold
        rounded-full
      `}
    }

    .drop-menu {
      ${tw`
        absolute
        top-4
        right-0
        mt-2
        py-3
        px-4
        bg-white
        shadow-lg
        rounded-md
      `}

      h1 {
        ${tw`
          mb-2
          text-gray-500
        `}
      }

      h2 {
        ${tw`
          flex
          items-center
          justify-between
          w-36
          px-2
          py-2
          transition
          duration-200
          ease-in-out
          hover:bg-gray-200
          rounded-md
          cursor-pointer
        `}
      }
    }
  }

  .top-avatar {
    ${tw`
        ml-3
        w-10
        h-10
        rounded-full
        cursor-pointer
    `}
  }
`

export default Topbar
