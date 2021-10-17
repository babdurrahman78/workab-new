import React from 'react'
import Workab from '../../img/logo.png'
import { FaDashcube } from 'react-icons/fa'
import { Props } from './Interface'
import { Logo, NavSide, NavSideIcon, NavSideIcons, NavSideItem, NavSideLink, NavSideLinks, NavSideLogo, NavSideTitle } from './Sidebar.elements'

const User = (
  <>
    <NavSideLinks>
      <NavSideLink to="/user/dashboard" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Dashboard</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>

    <NavSideLinks>
      <NavSideLink to="/user/attendance" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Attendance</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>

    <NavSideLinks>
      <NavSideLink to="/user/visiting" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Visiting</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>
  </>
)

const Admin = (
  <>
    <NavSideLinks>
      <NavSideLink to="/admin/dashboard" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Dashboard</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>
    
    <NavSideLinks>
      <NavSideLink to="/admin/shop" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Shop</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>

    <NavSideLinks>
      <NavSideLink to="/admin/user" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>User</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>

    <NavSideLinks>
      <NavSideLink to="/admin/visiting" activeClassName="active">
        <NavSideIcons>
          <NavSideIcon>
            <FaDashcube/>
          </NavSideIcon>
        </NavSideIcons>
        <NavSideTitle>Visiting</NavSideTitle>
      </NavSideLink>
    </NavSideLinks>
  </>
)

export const Sidebar = (props: Props) => {
    return (
        <>
          <NavSide id="Sidebar">
            <NavSideItem>
              <NavSideLinks>
                <NavSideLogo to="/">
                    <Logo src={ Workab } id="Logo"/>
                </NavSideLogo>
              </NavSideLinks>

              { props.type === 'admin' ? Admin : User }
            </NavSideItem>  
          </NavSide>  
        </>
    )
}
