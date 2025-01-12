// Local storage Keys
const IS_LOGIN = "IsLoggedIn";
const USER_ID_KEY = "UserId";

export function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }
  
  export function setUserId(id) {
    localStorage.setItem('userId', id);
  }
  
  export function setIsLoggedIn(status) {
    localStorage.setItem('isLoggedIn', status);
  }
  
/**
 * Get current islogged in value from localstorage
 * @returns {boolean}
 */
export const getIsLoggedIn = () => JSON.parse(window.localStorage.getItem(IS_LOGIN));

/**
 * Save islogged in value to localstorage
 * @param {boolean} value
 * @returns {void}
 */
export const setIsLoggedIn = (value) => window.localStorage.setItem(IS_LOGIN, JSON.stringify(value));

/**
 * Get current userId value from localstorage
 * @returns {number | null} userId or null if not present
 */
export const getUserId = () => {
    const userId = JSON.parse(window.localStorage.getItem(USER_ID_KEY));
    return Number.isInteger(userId) ? userId : null;
};

/**
 * Save userId value to localstorage
 * @param {number} value
 * @returns {void}
 */
export const setUserId = (value) => window.localStorage.setItem(USER_ID_KEY, JSON.stringify(value));
