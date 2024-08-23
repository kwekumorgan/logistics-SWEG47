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
    // Throwing an Error object with a message
    throw new Error(error.response?.data?.message || 'Incorrect Username or Password');
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
    // Throwing an Error object with a message
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};
