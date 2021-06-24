//1.queue

let queue = ['raja', 'debasish', 'sumeet', 'anwesha', 'saurav', 'ravi', 'hemant']
let vaccine_count = 5


function register() {

    let inputName = document.getElementById('name').value;
    let age = document.getElementById('age').value

    

    if (age > 60) {
        queue.splice(1,0,inputName)
    } else {
        queue.push(inputName)
    }


    

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

let interval = setInterval(startVaccination,4000)

function startVaccination() {
    if (vaccine_count == 0) {
        alert('vaccine out of stock, visit tomorrow.')
        clearInterval(interval)
    } else {
        queue.shift()
        vaccine_count--;
        console.log('count: ', vaccine_count);
        console.log('queue: ', queue);
    }
}

