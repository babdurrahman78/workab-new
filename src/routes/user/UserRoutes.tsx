import axios from 'axios'
import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserLayout } from '../../views/layouts/user/UserLayout'
import { Dashboard } from '../../views/pages/admin/dashboard/Dashboard'
import { LoadingPage } from '../../views/pages/loading/Loading'

interface Props {
    
}

export const UserRoute = [
    { path: "/user", exact: true, name: "User" },
    { path: "/user/dashboard", exact: true, name: "User Dashboard", component: Dashboard },
]

export const UserPrivateRoute = ({ ...res }) => {

    const [authState, setAuth] = React.useState(false)
    const [loadingState, setLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get('/api/user_check').then((res: any) => {
            if (res.data.meta.code === 200) {
                setAuth(true)           
            }
            setLoading(false)
        })

        return () => {
            setAuth(false)
        }
    }, [])

    const history = useHistory();

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (err.response.status === 401) {
            Swal.fire({
                icon: 'warning',
                title: err.response.data.message,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
            })

            history.push("/")
        }

        return Promise.reject(err)
    })

    axios.interceptors.response.use(function response() {
            return response;    
        }, function (error) {
            if ( error.response.status === 403 ) {
                Swal.fire({
                    icon: 'warning',
                    title: "Forbedden",
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                })
    
                history.push("/403")
            } else if (error.response.status === 404 ) {
                Swal.fire({
                    icon: 'warning',
                    title: "404 Error",
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                })
    
                history.push("/404")
            }

            return Promise.reject(error)
        }
    )

    if (loadingState) {
        return (
            <LoadingPage />
        )
    }

    return (
        <Route 
            { ...res }

            render={ ({ history, location }) => 
                authState ?
                    ( <UserLayout { ...history }/> )
                :
                    ( <Redirect to={ {pathname: "/login", state: {from: location}} }/> )
            }
        />
    )
}
