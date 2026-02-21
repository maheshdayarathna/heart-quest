const API_BASE_URL = "http://10.151.26.151:5000/api";

const API = {
  baseURL: API_BASE_URL,
  authRegister: `${API_BASE_URL}/auth/register`,
  authLogin: `${API_BASE_URL}/auth/login`,
  authProfile: `${API_BASE_URL}/auth/profile`,
};

export default API;