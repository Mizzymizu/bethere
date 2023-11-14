import decode from 'jwt-decode';

class AuthService {
getProfile() {
    return decode(this.getToken());
}

loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
}

isTokenExpired(token) {
    try {
        const decoded = decode(token);
        console.log('Decoded token:', decoded);

        if (decoded.exp < Date.now() / 1000) {
            console.log('Token is expired');
            return true;
        } else {
            console.log('Token is not expired');
            return false;
        }
    } catch (err) {
        console.error('Error decoding token:', err);
        return false;
    }
}


getToken() {
    return localStorage.getItem('id_token');
}

login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
}

logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
}
}

export default new AuthService();