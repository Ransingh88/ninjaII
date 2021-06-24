

function addLocation() {

    // e.preventDefault()----optional for form
    
    let form = document.getElementById('travel_form')

    let name = form.name.value;
    
    let rating = form.rating.value;

    let image = form.image.value;


    let location = {
        name,   // name: name,
        rating,  // rating: rating,
        image,   // image:image,
    }

    //console.log('location: ', location);

    let arr;

    arr = localStorage.getItem('location');

    if (arr == null) {
        arr = [];   //this is for first time visitor
    }
    else {
        //arr = JSON.parse(localStorage.getItem('location')) ------aarr format conversion
        arr = JSON.parse(arr);
    }
    arr.push(location)

    localStorage.setItem('location', JSON.stringify(arr));
    
}




function showLocation() {
    let data = JSON.parse(localStorage.getItem('location'))

    //console.log('data: ', data);

    let parent = document.getElementById('parentDiv');
    parent.innerHTML = ''
    data.forEach(function (ele) {
        //console.log('ele:', ele)
        
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

        let btn = document.createElement('button')
        btn.textContent = "Add to Fevorite"
        btn.style.display = 'block'
        
        btn.onclick = function () {
            addFev(ele)
        }

        div.append(p_name, p_rating, image,btn)
        
        parent.append(div)
    })
}

function addFev(ele) {
   //console.log(ele)
    let favarr;
    let arr

    favarr = localStorage.getItem('fav')
    
    if (favarr == null) {
        favarr = []
    }
    else {
        favarr = JSON.parse(localStorage.getItem('fav'))
    }

    favarr.push(ele)
    localStorage.setItem('fav',JSON.stringify(favarr))
    


}

function showFav() {
    
    window.location.href = '/Unit-2/Week-4/Day-6/1-We/fevorites.html'
}