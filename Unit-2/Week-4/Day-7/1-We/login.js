
const users =

[
        {
            name: 'raj@gmail.com',
            password:'raj123'
        },
        {
            name: 'rahul@gmail.com',
            password:'rahul123'
        },
        {
            name: 'nrupul@gmail.com',
            password:'nrupul123'
        },
        {
            name: 'akshya@gmail.com',
            password:'akshya123'
        },
    ]

//step-2 - store in localstorage

if (localStorage.getItem('users') == null) {

    localStorage.setItem('users', JSON.stringify(users));
}

//step-3---accept login data

function checkLogin(e) {
    
    e.preventDefault()

    const form = document.getElementById('login')

    const username = form.username.value;
    //console.log('username: ', username);

    const password = form.password.value;
    //console.log('password: ', password);


    //step 4 - check if the combination of username and password is exist or not

    const users = JSON.parse(localStorage.getItem('users'))

    for (let i = 0; i < users.length; i++){
        if (users[i].name === username && users[i].password === password) {
            //console.log(users[i])

            window.location.href = 'home.html'
            break;
        }
        
    }
}

