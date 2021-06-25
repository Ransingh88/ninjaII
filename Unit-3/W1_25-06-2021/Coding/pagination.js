//async always returns a promise


var data
var data_div = document.getElementById("data")

async function main() {
   data = await fetchData();
    //console.log("data: ", data);
    showButtons(1)
}

main();


async function fetchData() {
  try {
    let promise = await fetch("http://jsonplaceholder.typicode.com/comments");
    data = await promise.json();
    return data;
  } catch (err) {
    console.log("err: ", err);
  }
}


function showButtons(index) {
    let buttonsDiv = document.getElementById('buttons')

    buttonsDiv.innerHTML = null

    let original_index = index

    if (index <= 6) {
        index=6
    }

    for (let i = index-5; i <= index+4; i++){
        
        let button = document.createElement('button')
        button.innerHTML = i
        button.setAttribute('id', `${i}`)
        button.onclick = showData
        buttonsDiv.appendChild(button)
    }

    let btn = document.getElementById(original_index)
    //btn.style.background = 'green'
    btn.setAttribute('class','pageBackground')

}


function showData() {
    let id = Number(this.id)
    // console.log('id: ', id);
    //  console.log('id: ', data,id);
    let num = id-1

    let page_data = data.slice(num*10,num*10+10)
    // console.log('page_data: ', page_data);
    data_div.innerHTML = null

    page_data.forEach(function (el) {
        
        let p = document.createElement('p')
        p.innerText = `${el.id} ${el.name}`
        data_div.appendChild(p)
    })

showButtons(id)
}