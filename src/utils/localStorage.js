export const setLocalStorage = (value) => {
    value && localStorage.setItem(value)
}

export const getLocalStorage = (key) => {
    return key ? localStorage.getItem(key) : ''
}