export const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
export const saveToLocalStorage = (key, data) => window.localStorage.setItem(key, JSON.stringify(data))
export const removeToLocalStorage = (key) => window.localStorage.removeItem(key)
