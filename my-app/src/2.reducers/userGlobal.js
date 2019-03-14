const INITIAL_STATE = {username:'',password:'',id:'',loading:false, role:''}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
    case 'LOADING':
        return{...INITIAL_STATE,loading:true}
    case 'LOGIN_SUCCESS' :
        return{...INITIAL_STATE, username:action.payload.username, role:action.payload.role}


    default:
        return state
    }
    
    
}