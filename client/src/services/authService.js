class AuthService {
  getToken() {
    return localStorage.getItem('accessToken');
  }

  setToken(token) {
    localStorage.setItem('accessToken', token);
  }

  removeToken() {
    localStorage.removeItem('accessToken');
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

const authService = new AuthService();

export default authService;