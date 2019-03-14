import axios from 'axios';


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
        }
        )
    }
    
} 