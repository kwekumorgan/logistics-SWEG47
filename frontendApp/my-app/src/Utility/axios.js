import axios from "axios";



// LOGIN CALL 

export const login = async(username , password)=>{
    try{
        const response = await axios.post("http://localhost:7000/api/auth/login",{ // Backend route for login 
            username,
            password,
        });
        return response.data;
    }catch(error){
        console.error('login error:',error); // throws an error for unsuccessful operation 
        

    }
};

// REGISTRATION CALL 

export const register = async(username , email , password)=>{
    try{
        const response = await axios.post("http://localhost:7000/api/auth/register", { // Backend route for registration  
            username,
            email,
            password,
        });
        return response.data;
    }catch(error){
        console.error("Registration error:",error);
      
    }
};