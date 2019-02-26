
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

