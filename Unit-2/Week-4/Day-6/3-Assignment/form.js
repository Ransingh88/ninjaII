
let id = 0;
function addProduct() {
    let form = document.getElementById('form');

    let name = form.name.value;

    let price = form.price.value;

    let image = form.image.value;

    let products = {
        name,
        price,
        image,
        id
    }
    
    //localStorage.setItem('products', JSON.stringify(products));
     let arr
     arr = localStorage.getItem('products')
    
    if (arr == null) {
        arr = []
    }
    else {
        arr = JSON.parse(arr);
    }
    
    arr.push(products)
    localStorage.setItem('products',JSON.stringify(arr))
    id++
    console.log('arr: ', arr);
}

