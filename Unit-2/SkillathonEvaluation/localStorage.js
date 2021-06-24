function submit() {
    let form = document.getElementById('form');
    let name = form.name.value;
    console.log('name: ', name);
    let password = form.password.value;
    console.log('password: ', password);

    let users = {

        name,
        password
    }

    let arr
    arr = localStorage.getItem('users');

    if (arr == null) {
        arr = []
    } else {
        arr = JSON.parse(localStorage.getItem('users'))
    }
    arr.push(users)
    localStorage.setItem('users', JSON.stringify(arr))
}














// var data = { 'name': 'debasish', 'lastname': 'Ransingh' }
// localStorage.setItem('data', JSON.stringify(data))

// var v = localStorage.getItem('data')
// console.log(v)
































// setItem()
// getItem()
// removeItem()
// clear()