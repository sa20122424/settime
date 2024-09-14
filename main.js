

function mainhours() {
    let hour = document.querySelector('.team')
    let minute = document.querySelector('.min')
    let secund = document.querySelector('.sec')
    let body = document.querySelector("body")
    
    let soat = new Date().getHours()
    let daqiqa = new Date().getMinutes()
    let soniya = new Date().getSeconds()


    hour.innerHTML = `${soat} :`
    minute.innerHTML = ` ${daqiqa} :`
    secund.innerHTML = `${soniya}`

    if ( daqiqa => 17 ) {
        minute.innerHTML =`  ${daqiqa} :`
    } else {
        minute.innerHTML =` Minuts 10`
    }
    hour.style.textAlign = "center"
   minute.style.textAlign = "center"

}


setInterval(mainhours, 1000)
