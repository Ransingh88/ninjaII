let products_data  = []
let container = document.getElementById('container')

async function getData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
      //console.log(data);
      appendProducts(data)
  } catch (e) {
    console.log(e);
  }
}
getData();

function appendProducts(d) {
    console.log('d: ', d);

    d.forEach(function (el) {
        let div = document.createElement('div');

        let img = document.createElement('img');

        img.src = el.image;

        let title = document.createElement('p')
        title.innerHTML = el.title

        let price = document.createElement('p')
        price.innerHTML = el.price

        let desc = document.createElement('p')
        desc.innerHTML = el.description

        div.append(img, title, price,desc)
        container.append(div)
    })

}
