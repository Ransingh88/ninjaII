let BtoG = ['raja','debasish','sumeet','anwesha','saurav','ravi','hemant','raja','debasish','sumeet','anwesha','saurav','ravi']
let MtoG = ['raja','debasish','sumeet','anwesha','raja','debasish','sumeet','anwesha','saurav','ravi','hemant','raja','debasish']
let PtoG = ['raja','debasish','sumeet','saurav','ravi','hemant','raja','debasish','sumeet','anwesha','saurav','ravi','hemant']



async function checkAvailability() {
    
    let promise = new Promise(function (resolve, reject) {
        
        setInterval(function () {
        if (BtoG.length < 5) {
            resolve('Train 1 is available')
            BG = 1;
            clearInterval(interval)
            window.location.href = 'bookTicket.html'
        }
        else if (MtoG.length < 5) {
            resolve('Train 2 is available')
            MG = 1;
            clearInterval(interval)
            window.location.href = 'bookTicket.html'
        }
        else if (PtoG.length < 5) {
            resolve('Train 3 is available')
            PG = 1;
            clearInterval(interval)
            window.location.href = 'bookTicket.html'
        }

        }, 1000)
        

           
    })

           let res = await promise
           console.log('res: ', res);
 

}
let parent = document.getElementById('parent')
function cancellTicket() {

    let cancelling_speed = Math.ceil(Math.random()*5)
    let cancelling_speed2 = Math.ceil(Math.random()*5)
    let cancelling_speed3 = Math.ceil(Math.random()*5)

    setTimeout(function () {
        BtoG.pop()
    },cancelling_speed*1000)
    setTimeout(function () {
        MtoG.pop()
    },cancelling_speed2*1000)
    setTimeout(function () {
         PtoG.pop()
    },cancelling_speed3*1000)


    
    console.log('parent: ', parent);
    let ele_h = document.createElement('h4')
    ele_h.innerHTML = `BtoG:${BtoG.length} - MtoG:${MtoG.length} - ptoG:${PtoG.length}`
    parent.append(ele_h)
    
    
    console.log('Cancelling: ','BtoG: ', BtoG.length,'MtoG: ',MtoG.length,'ptoG: ',PtoG.length);

}

// let interval = setInterval(cancellTicket, 2000)
let interval

function bookTicket() {

    let booking_speed = Math.ceil(Math.random()*5)
    let booking_speed2 = Math.ceil(Math.random()*5)
    let booking_speed3 = Math.ceil(Math.random()*5)

    setTimeout(function () {
        BtoG.push('passenger')
    },booking_speed*1000)
    setTimeout(function () {
        MtoG.push('passenger')
    },booking_speed2*1000)
    setTimeout(function () {
         PtoG.push('passenger')
    }, booking_speed3 * 1000)
    
    console.log('Booking: ','BtoG: ', BtoG.length,'MtoG: ',MtoG.length,'ptoG: ',PtoG.length);

}
// let interval1 = setInterval(bookTicket, 5000)
let interval1
function startBooking() {
    interval = setInterval(cancellTicket, 2000)
    interval1 = setInterval(bookTicket, 5000)

}


function bookUserTicket(e) {
    
    e.preventDefault()
    let form = document.getElementById('form');
    let name = form.name.value;
    let message = `${name}, Your Ticket is Booked.`
    let confirm_message = document.getElementById('cnf')
    confirm_message.append(message)

    

}

//1. Promise.race is settled as soon as any of the promise in array is settled (fulfilled or rejected).
//2. Promise.any is settled as soon as any of the promises you write in array is fulfilled or all rejected
