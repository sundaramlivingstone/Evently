import axios from "axios";

const API_URL = "http://localhost:5000/";

// Register User
const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

// Login User
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

// Guest Login
const guestLogin = async () => {
  const response = await axios.get(`${API_URL}/guest`);
  return response.data;
};

export default {
  register,
  login,
  guestLogin,
};
