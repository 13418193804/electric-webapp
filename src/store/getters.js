
export const getOs = state => {
    return state.os;
}
export const getToken = state => {
    if ((localStorage['packageToken'] || '') !== '') {
        state.userInfo.token = localStorage['packageToken'];
        return state.userInfo.token;
    } else {
        return state.userInfo.token;
    }
}

export const getUserName = state => {
    if ((localStorage['username'] || '') !== '') {
        state.userInfo.username = localStorage['username'];
        return state.userInfo.username;
    } else {
        return state.userInfo.username;
    }
}

