import jwt_decode from 'jwt-decode'

export const REQUEST_USER = "REQUEST_USER";
export const USER_INFO = "USER_INFO";

export function requestUserInfo() {
    if(sessionStorage.usertoken){
      const decoded = jwt_decode(sessionStorage.usertoken)
      let usertest = {
        "username": decoded.first_name + " " + decoded.last_name,
        "picture": "assets/img/avatars/sunny.png",
        "activity": 12
      } 
      return {
        type: USER_INFO,
        payload: usertest
      };    
    } else {
      return {
        type: USER_INFO,
        payload: {username: "",picture: "",activity: 0}
      }; 
    }
}

export default function isLogged() {
  let status = false
  
  if(sessionStorage.usertoken){
      try{
        if(jwt_decode(sessionStorage.usertoken)){
          status = true;
        }
      } catch(e){
        console.log(e)
      }
      
  }

  return status
} 