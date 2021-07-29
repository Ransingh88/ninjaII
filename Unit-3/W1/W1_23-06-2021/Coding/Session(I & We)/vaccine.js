//1.queue

let queue = ['raja','debasish','sumeet','anwesha','saurav','ravi','hemant']


function register() {

    let inputName = document.getElementById('name').value;

    queue.push(inputName)
    let interval = setInterval(startVaccination,2000)

    let message = `${inputName} your registration s successful, please wait for your turn`

    alert(message)

    let promise = new Promise(function (resolve, reject) {
        

        setInterval(function () {
            
        if (queue[0] == inputName) {
            
            resolve(`${inputName} its your turn now.`)
            clearInterval(interval)
        }


        },1000)
    
    })

    promise.then(function (res) {
        alert(res)
    })
        .catch(function (res) {
        console.log(res)
    })

}



function startVaccination() {
    queue.shift()
    console.log('queue: ', queue);
}

