let BtoG = ['raja','debasish','sumeet','anwesha','saurav','ravi','hemant','raja','debasish','sumeet','anwesha','saurav','ravi','hemant']
let MtoG = ['raja','debasish','sumeet','anwesha','raja','debasish','sumeet','anwesha','saurav','ravi','hemant']
let PtoG = ['raja','debasish','sumeet','saurav','ravi','hemant','raja','debasish','sumeet','anwesha','saurav','ravi','hemant']

async function checkAvailability() {
    
    let promise = new Promise(function (resolve, reject) {
        
        setInterval(function () {
        if (BtoG.length < 5) {
                resolve('Train 1 is available')
                clearInterval(interval)
        }
        else if (MtoG.length < 5) {
                resolve('Train 2 is available')
                clearInterval(interval)
        }
        else if (PtoG.length < 5) {
                resolve('Train 3 is available')
                clearInterval(interval)
        }

        }, 1000)
        

           
    })

           let res = await promise
           console.log('res: ', res);
 

}

function cancellTicket() {

    let cancelling_speed = Math.ceil(Math.random()*2)
    let cancelling_speed2 = Math.ceil(Math.random()*15)
    let cancelling_speed3 = Math.ceil(Math.random()*10)

    setTimeout(function () {
        BtoG.pop()
    },cancelling_speed*1000)
    setTimeout(function () {
        MtoG.pop()
    },cancelling_speed2*1000)
    setTimeout(function () {
         PtoG.pop()
    },cancelling_speed3*1000)

    
    console.log('BtoG: ', BtoG,MtoG,PtoG);

}

let interval = setInterval(cancellTicket, 2000)


//1. Promise.race is settled as soon as any of the promise in array is settled (fulfilled or rejected).
//2. Promise.any is settled as soon as any of the promises you write in array is fulfilled or all rejected
