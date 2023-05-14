export const setLocalStorage = ({ key, value }) => {
    value && localStorage.setItem(key, value)
}

export const getLocalStorage = ({ key }) => {
    return key ? localStorage.getItem(key) : ''
}