import React from 'react'
import { useHistory } from 'react-router-dom'
import { ProfileState } from './interface'
import Workab from '../../img/logo.png'
import { FaAngleDown, FaBars, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { NavTop, NavTopItemDropdown, NavTopItemDropdownMenu, NavTopItemDropdownMenuList, NavTopItemDropdownMenuListIcon, NavTopItemImg, NavTopItemName, NavTopItems, NavTopLanding, NavTopLandingButton, NavTopLandingContainer, NavTopLandingItem, NavTopLandingLink, NavTopLandingList, NavTopLandingLogo, NavTopLandingLogoImg, NavTopToggle } from './Topbar.elements'
import { ButtonLink, ButtonWhite } from '../button/Button'
import Swal from 'sweetalert2'
import axios from 'axios'

export const Topbar = () => {
    const [profileState, setProfile] = React.useState<ProfileState>({
        name: 'Anonymous',
        avatar: 'https://ui-avatars.com/api/?name=&color=7F9CF5&background=EBF4FF'
    })

    React.useEffect(() => {
        
        if ( localStorage.getItem('role') === "Admin" ) {
            axios.get('/api/admin').then( (res: any) => {
                setProfile({ 
                    ...profileState,
                    name: res.data.data.admin.name,
                    avatar: res.data.data.admin.photo,
                })
            })
        } else {
            axios.get('/api/user').then( (res: any) => {
                setProfile({ 
                    ...profileState,
                    name: res.data.data.user.name,
                    avatar: res.data.data.user.photo,
                })
            })
        }

        return () => {
            
        }
    }, [profileState])

    const history = useHistory()

    const toggleClick = () => {
        document.getElementById('Sidebar')?.classList.toggle('active')
        document.getElementById('Layout')?.classList.toggle('active')
        document.getElementById('Logo')?.classList.toggle('active')   
    }

    const dropdownClick = () => {
        document.getElementById('Dropdown')?.classList.toggle('active')
    }
    
    const profileClick = () => {
        document.getElementById('Dropdown')?.classList.toggle('active')

        if ( localStorage.getItem("role") === "Admin" ) {
            history.push('/admin/profile')
        } else {
            history.push({
                pathname: '/user/profile',
                state: profileState,
            })
        }
    }
    
    const logoutClick = () => {
        document.getElementById('Dropdown')?.classList.toggle('active')
        
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/logout').then( (res: any) => {
                    if (res.data.meta.code === 200) {
                        localStorage.removeItem('token')
                        localStorage.removeItem('name')
                        localStorage.removeItem('role')

                        Swal.fire(
                            'Success!',
                            'Your has been logout.',
                            'success'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                history.push('/')
                                window.location.reload()
                            } else if (result.isDismissed) {
                                history.push('/')
                                window.location.reload()
                            }
                        })
                    }
                })
            }
        })
    }

    return (
        <>
            <NavTop>
                <NavTopToggle onClick={ toggleClick }>
                    <FaBars/>
                </NavTopToggle>

                <NavTopItems>
                    <NavTopItemDropdown onClick={ dropdownClick }>
                        <NavTopItemName>{ profileState.name }</NavTopItemName>
                        <NavTopItemImg src={ profileState.avatar }/>
                        <FaAngleDown/>
                    </NavTopItemDropdown>
                    <NavTopItemDropdownMenu id="Dropdown">
                        <NavTopItemDropdownMenuList onClick={ profileClick }>
                            <NavTopItemDropdownMenuListIcon>
                                <FaUser/>
                            </NavTopItemDropdownMenuListIcon>
                            Profile
                        </NavTopItemDropdownMenuList>
                        <NavTopItemDropdownMenuList onClick={ logoutClick }>
                            <NavTopItemDropdownMenuListIcon>
                                <FaSignOutAlt/>
                            </NavTopItemDropdownMenuListIcon>
                            Logout
                        </NavTopItemDropdownMenuList>
                    </NavTopItemDropdownMenu>
                </NavTopItems>
            </NavTop>
        </>
    )
}

export const TopbarLanding = () => {
    const history = useHistory()

    let url: string | null, 
    button: JSX.Element

    url = localStorage.getItem('role') === 'Admin' ? '/admin' : '/user' 

    const logoutSession = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/logout').then( (res: any) => {
                    if (res.data.meta.code === 200) {
                        localStorage.removeItem('token')
                        localStorage.removeItem('name')
                        localStorage.removeItem('role')

                        Swal.fire(
                            'Success!',
                            'Your has been logout.',
                            'success'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                history.push('/')
                                window.location.reload()
                            } else if (result.isDismissed) {
                                history.push('/')
                                window.location.reload()
                            }
                        })
                    }
                })
            }
        })
    }

    if ( localStorage.getItem('token') ) {
        button = (
            <>
                <ButtonLink 
                    title="Dashboard"
                    url={ url }
                    type="white"
                />
                <ButtonWhite
                    title="Logout"
                    onClicked={ logoutSession }
                />
            </>
        )
    } else {
        button = (
            <>
                <ButtonLink 
                    title="Login"
                    url="/login"
                    type="white"
                />
            </>
        )
    }
            
    return (
        <>
            <NavTopLanding>
                <NavTopLandingContainer>
                    <NavTopLandingLogo to="/">
                        <NavTopLandingLogoImg src={ Workab }/>
                    </NavTopLandingLogo>

                    <NavTopLandingList>
                        <NavTopLandingItem>
                            <NavTopLandingLink to="home_section" spy smooth duration={500}>
                                Home
                            </NavTopLandingLink>
                            <NavTopLandingLink to="home_section" spy smooth duration={500}>
                                About
                            </NavTopLandingLink>
                            <NavTopLandingLink to="home_section" spy smooth duration={500}>
                                Feauture
                            </NavTopLandingLink>
                        </NavTopLandingItem>
                    </NavTopLandingList>

                    <NavTopLandingButton>
                        { button }
                    </NavTopLandingButton>
                </NavTopLandingContainer>
            </NavTopLanding>
        </>
    )
}

