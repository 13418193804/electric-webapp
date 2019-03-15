



// export const base_url = "https://pbms.onv.com.cn/api"

// http://onv.96ba.com:442
// const urlip = ''

// export const setBaseUrl = (urlip) => {
//     return urlip = localStorage.servicer
// }

// export const getBaseUrl = (urlip) => {
//     return urlip
// }
// console.log('base///=', urlip)

// http://onv.96ba.com:442

export const base_url = ""
export const setBaseUrl = (base_url) => {
    this.base_url = base_url
    localStorage.servicer = base_url
}
export const getBaseUrl = () => {
    return this.base_url || localStorage.servicer
}



export const mqtt_url = "mqtt://120.78.135.69:9000"

