// Local storage Keys for User
const IS_LOGIN = "IsLoggedIn";
const USER_ID_KEY = "UserId";

/**
 * Save access token for User to localStorage
 * @param {string} token
 * @returns {void}
 */
export function setAccessToken(token) {
    localStorage.setItem('accessToken', token);
}

/**
 * Get current isLoggedIn value for User from localStorage
 * @returns {boolean | null}
 */
export function getIsLoggedIn() {
    const value = localStorage.getItem(IS_LOGIN);
    return value !== null ? JSON.parse(value) : null;
}

/**
 * Save isLoggedIn value for User to localStorage
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

/**
 * Get access token for User from localStorage
 * @returns {string | null}
 */
export function getAccessToken() {
    return localStorage.getItem('accessToken');
}


// Local storage Keys for Organizer
const ORGANIZER_IS_LOGIN = "IsLoggedIn_Organizer";
const ORGANIZER_ID_KEY = "OrganizerId";

/**
 * Save access token for Organizer to localStorage
 * @param {string} token
 * @returns {void}
 */
export function setAccessTokenOrganizer(token) {
    localStorage.setItem('OrganizerAccessToken', token);
}

/**
 * Get current isLoggedIn value for Organizer from localStorage
 * @returns {boolean | null}
 */
export function getIsLoggedInOrganizer() {
    const value = localStorage.getItem(ORGANIZER_IS_LOGIN);
    return value !== null ? JSON.parse(value) : null;
}

/**
 * Save isLoggedIn value for Organizer to localStorage
 * @param {boolean} status
 * @returns {void}
 */
export function setIsLoggedInOrganizer(status) {
    localStorage.setItem(ORGANIZER_IS_LOGIN, JSON.stringify(status));
}

/**
 * Get current organizerId value from localStorage
 * @returns {number | null}
 */
export function getOrganizerId() {
    const organizerId = localStorage.getItem(ORGANIZER_ID_KEY);
    const parsedOrganizerId = organizerId ? JSON.parse(organizerId) : null;
    return Number.isInteger(parsedOrganizerId) ? parsedOrganizerId : null;
}

/**
 * Save organizerId value to localStorage
 * @param {number} id
 * @returns {void}
 */
export function setOrganizerId(id) {
    localStorage.setItem(ORGANIZER_ID_KEY, JSON.stringify(id));
}

/**
 * Get access token for Organizer from localStorage
 * @returns {string | null}
 */
export function getAccessTokenOrganizer() {
    return localStorage.getItem('OrganizerAccessToken');
}
