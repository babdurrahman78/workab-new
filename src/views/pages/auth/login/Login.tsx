import React from 'react'
import Cover from '../../../../img/login_cover.png'
import { InputField } from '../../../../components/input/InputField'
import { LoginBack, LoginButton, LoginContainer, LoginContentLeft, LoginContentRight, LoginForm, LoginImg, LoginTitle } from './Login.elements'
import { ButtonLoading, ButtonPrimary, ButtonWhite } from '../../../../components/button/Button'
import { FaAngleLeft } from 'react-icons/fa'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

export const Login = () => {
    const [loadingState, setLoading] = React.useState(false)
    const [loginForm, setForm] = React.useState({
        username: '',
        password: '',
    })
    const [errorState, setError] = React.useState({
        username: '',
        password: '',
    })

    const inputChange = (name: any, value: any) => {
        setForm({ ...loginForm, [name]: value })
    }

    const history = useHistory();

    const submitForm = (e: any) => {
        setLoading(true)
        
        e.preventDefault()

        const data = {
            username: loginForm.username,
            password: loginForm.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/login', data).then((res: any) => {
                // console.log(res);
                
                if ( res.data.meta.code === 200 ) {
                    localStorage.setItem('token', res.data.data.access_token);
                    localStorage.setItem('name', res.data.data.user.username);
                    localStorage.setItem('role', res.data.data.user.role);

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                      
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    
                    if (res.data.data.user.role === "Admin") {
                        history.push('/admin')
                    } else {
                        history.push('/user')
                    }
                } else if (res.data.meta.code === 401)  {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Username / Password wrong.',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                } else {
                    setError({ 
                        ...errorState, 
                        username: res.data.data.validation_errors.username,
                        password: res.data.data.validation_errors.password,
                    })
                }
                setLoading(false)
            })
        })
    }

    return (
        <>
            <LoginContainer>
                <LoginContentLeft>
                    <LoginImg src={ Cover }/>
                </LoginContentLeft>

                <LoginContentRight>
                    <LoginForm>
                        <LoginBack>
                            <ButtonWhite
                                title="Back"
                                iconLeft={ <FaAngleLeft /> }
                                onClicked={ () => history.push('/') }
                            />
                        </LoginBack>
                        <LoginTitle>Welcome Back!</LoginTitle>
                        <InputField
                            title="Username"
                            name="username"
                            type="text"
                            errorMessage={ errorState.username }
                            onChanged={ inputChange }
                        />
                        <InputField
                            title="Password"
                            name="password"
                            type="password"
                            errorMessage={ errorState.password }
                            onChanged={ inputChange }
                        />
                        <LoginButton>
                            {
                                loadingState ? 
                                    <ButtonLoading
                                        type="primary"
                                        width={ 25 }
                                        height={ 25 }
                                    />
                                :
                                    <ButtonPrimary
                                        title="Login"
                                        onClicked={ submitForm }
                                    />
                            }
                        </LoginButton>
                    </LoginForm>
                </LoginContentRight>
            </LoginContainer>  
        </>
    )
}
