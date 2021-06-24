function signupBtn(e) {

    e.preventDefault();

    let signup_form = document.getElementById('form_signup');

    let name = signup_form.name.value
    // console.log('name: ', name);
    let contact = signup_form.contact_no.value
    // console.log('contact: ', contact);
    let email = signup_form.email.value
    // console.log('email: ', email);
    
    let password = signup_form.password.value
    // console.log('password: ', password);

    if (name == '' || contact == '' || email == '' || password == '') {
        
        alert('All fields should be filled')
    } else {

        let users = {

            name,
            contact,
            email,
            password,
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

    signup_form.name.value = ''
    signup_form.contact_no.value = ''
    signup_form.email.value = ''
    signup_form.password.value = ''
    
    
    
}



function loginBtn(e) {
    e.preventDefault();

    let dishes =
    [
        {
            name:'Fish',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '42 min',
            },
        {
            name:'Egg',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '4 min',
            },
        {
            name:'Mutton',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '20 min',
            },
        {
            name:'Chicken',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '12 min',
            },
        {
            name:'Fish',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '42 min',
            },
        {
            name:'Egg',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '4 min',
            },
        {
            name:'Mutton',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '20 min',
            },
        {
            name:'Chicken',
            image: 'http://via.placeholder.com/300',
            price: 220,
            description: 'This is a ittalian food',
            prepareTime: '12 min',
        }
        ]
    localStorage.setItem('dishes', JSON.stringify(dishes));

    let users = JSON.parse(localStorage.getItem('users'))
    
    let login_form = document.getElementById('form_login')

    let email = login_form.email.value;
    console.log('email: ', email);
    let password = login_form.password.value;
    console.log('password: ', password);

    if (email == '' || password == '') {
        alert('all field should be filled')
    } else {

        for (var i = 0; i < users.length; i++) {
        
            if (email == users[i].email && password == users[i].password) {
                window.location.href = './menu.html'
            }
            
        }
    }

}
function menus() {
        let dishes = JSON.parse(localStorage.getItem('dishes'));

        //console.log('dishes: ', dishes);

    let parentDiv = document.getElementById('dish_container')
    
    dishes.forEach(function (ele) {
        
        let div = document.createElement('div');

        let p_name = document.createElement('p');
        p_name.innerHTML = ele.name;
        let p_price = document.createElement('p');
        p_price.innerHTML = ele.price
        let p_desc = document.createElement('p');
        p_desc.innerHTML = ele.description
        let p_time = document.createElement('p');
        p_time.innerHTML = ele.prepareTime
        let image = document.createElement('img');
        image.src = ele.image
        let addCartBtn = document.createElement('button')
        addCartBtn.innerHTML = 'Add to Cart'

        addCartBtn.onclick = function () {
            addToCart(ele)
        }

        div.append(image,p_name,p_price,p_desc,p_time,addCartBtn);
        parentDiv.append(div)
})
    }
menus()
    
function addToCart(ele) {
    let arr
         arr = localStorage.getItem('cartItem');

        if (arr == null) {
            arr = []
        } else {
            arr = JSON.parse(localStorage.getItem('cartItem'))
             
        }
        arr.push(ele)
        localStorage.setItem('cartItem', JSON.stringify(arr))
    
}

