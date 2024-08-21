import axios from "axios";



// LOGIN CALL 

export const login = async(username , password)=>{
    try{
        const response = await axios.post("http://localhost:7000/api/auth/login",{
            username,
            password,
        });
        return response.data;
    }catch(error){
        console.error('login error:',error);
        

    }
};

// REGISTRATION CALL 

export const register = async(username , email , password)=>{
    try{
        const response = await axios.post("http://localhost:7000/api/auth/register", {
            username,
            email,
            password,
        });
        return response.data;
    }catch(error){
        console.error("Registration error:",error);
      
    }
};