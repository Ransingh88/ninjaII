function showProducts() {
    let data = JSON.parse(localStorage.getItem('products'))
    
    // console.log('data: ', JSON.parse(data));

    let parent = document.getElementById('parentDiv');
    //console.log('parent: ', parent);

    data.forEach(function (ele) {
        //console.log('ele: ', ele);
        

        let div = document.createElement('div');
        div.setAttribute('class','items')

        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${ele.name}`

        let p_price = document.createElement('p');
        p_price.innerText = `Price: ${ele.price}`;

        let image = document.createElement('img');
        image.src = ele.image;

        let btn = document.createElement('button');
        btn.innerHTML = 'Add to Cart'
        btn.onclick = function () {
            addtocart(ele)
        }

        div.append(image,p_name, p_price,btn);
        parent.append(div)
        
    })
}

function addtocart(ele) {
    let arr;
    arr = localStorage.getItem('cartItem')

    //console.log('arr: ', arr);

    if (arr == null) {
        arr = []
    }
    else {
        arr = JSON.parse(arr);
    }

   // console.log(arr.includes(ele.id))
    let ids =[]
    arr.forEach(function (e) {
        ids.push(e.id);
        
    })
    //console.log('ids: ', ids);
    

    if (ids.includes(ele.id)) {
        alert('Item already added')
    }
    else
    {
        arr.push(ele);
        localStorage.setItem('cartItem',JSON.stringify(arr))
    }
    
    //console.log('arr: ', arr);
}