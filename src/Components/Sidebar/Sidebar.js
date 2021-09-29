import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Icons
import {
  LineStyle,
  Timeline,
  PersonOutline,
  ListAltOutlined,
  LocalLibraryOutlined,
  AssignmentTurnedInOutlined,
  AccountBalanceOutlined,
  CabinOutlined,
  BusinessCenterOutlined
} from '@material-ui/icons'

const Sidebar = () => {
  const [isActive, setIsActive] = useState('Home')

  const handleItemClick = (e) => {
    setIsActive(e.target.innerText)
  }

  return (
    <Container>
      <WrapperContainer>
        <MenuContainer>
          <h3 className='title-list'>Dashboard</h3>
          <ul className='menu-list'>
            <Link to='/'>
              <li
                onClick={(e) => handleItemClick(e)}
                className={`menu-list-item ${isActive === 'Home' && 'active'}`}
              >
                <LineStyle />
                <span className='item-tag'>Home</span>
              </li>
            </Link>
            <li
              onClick={(e) => handleItemClick(e)}
              className={`menu-list-item ${
                isActive === 'Analytics' && 'active'
              }`}
            >
              <Timeline />
              <span className='item-tag'>Analytics</span>
            </li>
          </ul>
        </MenuContainer>
        <MenuContainer>
          <h3 className='title-list'>Quick Menu</h3>
          <ul className='menu-list'>
            <Link to='/users'>
              <li
                onClick={(e) => handleItemClick(e)}
                className={`menu-list-item ${isActive === 'Users' && 'active'}`}
              >
                <PersonOutline />
                <span className='item-tag'>Users</span>
              </li>
            </Link>
            <Link to='/tickets'>
              <li
                onClick={(e) => handleItemClick(e)}
                className={`menu-list-item ${
                  isActive === 'Movies' && 'active'
                }`}
              >
                <ListAltOutlined />
                <span className='item-tag'>Tickets</span>
              </li>
            </Link>
          </ul>
        </MenuContainer>
        <MenuContainer>
          <h3 className='title-list'>Type Ticket</h3>
          <ul className='menu-list'>
            <li
              onClick={(e) => handleItemClick(e)}
              className={`menu-list-item ${isActive === 'Manage' && 'active'}`}
            >
              <LocalLibraryOutlined />
              <span className='item-tag'>CS Department</span>
            </li>
            <li
              onClick={(e) => handleItemClick(e)}
              className={`menu-list-item ${
                isActive === 'Analytic' && 'active'
              }`}
            >
              <AssignmentTurnedInOutlined />
              <span className='item-tag'>QA Department</span>
            </li>
            <li
              onClick={(e) => handleItemClick(e)}
              className={`menu-list-item ${
                isActive === 'Analytic' && 'active'
              }`}
            >
              <AccountBalanceOutlined />
              <span className='item-tag'>AccountDepartment</span>
            </li>
            <li
              onClick={(e) => handleItemClick(e)}
              className={`menu-list-item ${isActive === 'Reports' && 'active'}`}
            >
              <BusinessCenterOutlined />
              <span className='item-tag'>Production Department</span>
            </li>
          </ul>
        </MenuContainer>
      </WrapperContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    sticky
    top-0
    bottom-0
    left-0
    pt-20
    w-auto
    min-w-max
    md:w-full
    md:max-w-xs
    bg-blue-50
    transition
    duration-200
    ease-out
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}

  &:hover {
    ${tw`
      w-full
      max-w-xs
    `}

    .item-tag {
      ${tw`
        inline-flex
      `}
    }

    .title-list {
      ${tw`
        inline-flex
      `}
    }
  }
`

const WrapperContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`

const MenuContainer = styled.div`
  ${tw`
    pt-4
    px-3
  `}

  h3 {
    ${tw`
      hidden
      md:inline-flex
      sm:text-lg
      xl:text-xl
      font-semibold
      text-gray-500
    `}
  }

  .menu-list {
    ${tw`
      w-full
    `}
  }

  .menu-list-item {
    ${tw`
      flex
      items-center
      justify-start
      w-full
      py-3
      px-3
      rounded-sm
      cursor-pointer
      hover:bg-blue-100
      transition
      duration-200
      ease-in-out
    `}

    span {
      ${tw`
        ml-2
        hidden
        md:inline-flex
      `}
    }
  }

  .menu-list-item.active {
    ${tw`
      bg-blue-100
    `}
  }
`

export default Sidebar
