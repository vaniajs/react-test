import axios from 'axios';
import Cookies from 'universal-cookie';

const objCookie = new Cookies()
export const onLogin = (username,password) => {
    return(dispatch) =>{
        dispatch({
            type: 'LOADING',
        })
        axios.get('http://localhost:2000/users',{
            params:{username,
                    password,
                    }}) 
        .then((res) => {
            console.log(res)
            if(res.data.length>0){
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload : 
                    {
                        username: res.data[0].username,
                        role: res.data[0].role,
                    }
            })}
            else{
                dispatch({
                    type: 'USER_NOT_FOUND',
                })
            }
        })
        .catch((err) => {
            dispatch({
                type:"SYSTEM_ERROR",
            })
        })}} 


export const keepLogin = (cookie) => {
    return(dispatch) => {
        axios.get('http://localhost:2000/users',{
            params:{
                username: cookie
            }
        })
        .then((res)=>{
            if(res.data.length>0){
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        username: res.data[0].username,
                        role:res.data[0].role,
                    }
                })
            }
        })
        .catch((err)=>console.log(err))
    }
}

export const resetUser = () => {
    return{
        type: 'RESET_USER',
    }
}

export const userReg = (username,email,mobile,password) => {
    return(dispatch)=>{
        dispatch({
            type: 'LOADING'
        })
        axios.get('http://localhost:2000/users?username=' + username + '&email=' + email)
        .then((res)=>{
            if(res.data.length>0){
                dispatch({
                    type: 'EMAIL_REGISTERED'
                })
            }
            else{
                axios.post('http://localhost:2000/users',
                {
                    username: username,
                    email: email,
                    mobile: mobile,
                    password: password
                })
                axios.get('http://localhost:2000/users')
                .then((res)=>dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: username
                },
                    objCookie.set('userData',username,{path:'/'})
                ))
                .catch((err)=>console.log(err))
            }

            })
    
        .catch((err)=>dispatch({
            type: 'SYSTEM ERROR'
        }))
    }
}