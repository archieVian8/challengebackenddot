// Local storage Keys
const IS_LOGIN = "IsLoggedIn";
const USER_ID_KEY = "UserId";

/**
 * Save access token to localStorage
 * @param {string} token
 * @returns {void}
 */
export function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
}

/**
 * Get current isLoggedIn value from localStorage
 * @returns {boolean | null}
 */
export function getIsLoggedIn() {
    const value = localStorage.getItem(IS_LOGIN);
    return value !== null ? JSON.parse(value) : null;
}

/**
 * Save isLoggedIn value to localStorage
 * @param {boolean} status
 * @returns {void}
 */
export function setIsLoggedIn(status) {
    localStorage.setItem(IS_LOGIN, JSON.stringify(status));
}

/**
 * Get current userId value from localStorage
 * @returns {number | null}
 */
export function getUserId() {
    const userId = localStorage.getItem(USER_ID_KEY);
    const parsedUserId = userId ? JSON.parse(userId) : null;
    return Number.isInteger(parsedUserId) ? parsedUserId : null;
}

/**
 * Save userId value to localStorage
 * @param {number} id
 * @returns {void}
 */
export function setUserId(id) {
    localStorage.setItem(USER_ID_KEY, JSON.stringify(id));
}

export function getAccessToken() {
    return localStorage.getItem('AccessToken');
  }
