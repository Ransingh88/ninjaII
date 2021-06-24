let data = JSON.parse(localStorage.getItem('fav'))

let parent = document.getElementById('data')

console.log(parent)

data.forEach(function (ele) {
    let div = document.createElement('div')
        

        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${ele.name}`;
        //console.log('p_name: ', p_name);

        let p_rating = document.createElement('p');
        p_rating.innerHTML = `Rating: ${ele.rating}`
        //console.log('p_rating: ', p_rating);

        let image = document.createElement('img');
        image.src = ele.image
        //console.log('image: ', image);

        div.append(p_name, p_rating, image)
        
        parent.append(div)
})