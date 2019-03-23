



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
// mqtt://120.78.135.69:9000
export const base_url = ""
export const setBaseUrl = (base_url) => {
    this.base_url = base_url
    localStorage.servicer = base_url
}
export const getBaseUrl = () => {
    return this.base_url || localStorage.servicer
}


export const setMqttUrl = (mqtt_url) => {
    this.mqtt_url = mqtt_url
    localStorage.mqtt_url = mqtt_url
}

export const getMqttUrl = () => {
    return this.mqtt_url || localStorage.mqtt_url
}


export const mqtt_url = ""

