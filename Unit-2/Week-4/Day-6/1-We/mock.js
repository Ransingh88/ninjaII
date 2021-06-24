// let data = `

// [

//     {

//         "Name":"Sapiens",
//         "Author":"Yuval Noah Harrari"
//     },
//     {
    

//         "Name":"Mastery",
//         "Author":"Yuval Noah Harrari"
//     },

// ]
// `

// localStorage.setItem('Books', data)
// let myData = localStorage.getItem("Books")
// console.log('myData: ', myData);


let products = `

[

    {

        "Name":"Nike",
        "Price":"2045",
        "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2a624331-4fad-4ebb-af77-9f93e5cb59e9/downshifter-10-running-shoe-CrpbbD.png"
    },
    {

        "Name":"puma",
        "Price":"3100",
        "image":"https://sslimages.shoppersstop.com/sys-master/images/he3/h77/14086576635934/204648540_9212.jpg_1088Wx1632H"
    },
    {

        "Name":"fila",
        "Price":"2499",
        "image":"https://lifestyle.inquirer.net/files/2018/11/Fila-Womens-Disruptor-II-Sneaker.jpg"
    },
    {

        "Name":"campus",
        "Price":"1009",
        "image":"https://n4.sdlcdn.com/imgs/j/d/m/Campus-DRAGON-White-Running-Shoes-SDL664721494-1-ecf1a.jpeg"
    }
    

]
`

localStorage.setItem('Products', products);

let myProducts = localStorage.getItem('Products');
//console.log('myProducts: ', JSON.parse(myProducts));
let data = JSON.parse(myProducts)

function showProducts() {
    let parent = document.getElementById('parentDiv')
    console.log('parent: ', parent);

    data.forEach(function (ele) {
        //console.log('ele', ele)
        let div = document.createElement('div');
        
        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${ele.Name}`
        
        let p_price = document.createElement('p');
        p_price.innerHTML = `Price: ${ele.Price}`;
        //console.log('p_price: ', p_price);
        
        let img = document.createElement('img');
        img.src = ele.image
        
        div.append(p_name, p_price, img)
        parent.append(div);
    });
}
