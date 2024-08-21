import axios from "axios";

// LOGIN CALL 
export const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:7000/api/auth/login", {
      username,
      password,
    });
    return response.data; // return the response data from the backend
  } catch (error) {
    throw error.response?.data?.message || 'Incorrect Username or Password'; // throw error with a meaningful message
  }
};

// REGISTRATION CALL 
export const register = async (username, email, password) => {
  try {
    const response = await axios.post("http://localhost:7000/api/auth/register", {
      username,
      email,
      password,
    });
    return response.data; // return the response data from the backend
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed'; // throw error with a meaningful message
  }
};
