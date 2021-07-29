let mov_div = document.getElementById('movie')
var timer_id

async function searchMovie() {

    let name = document.getElementById('query').value;

    if (name.length <= 2) {
        return false
    }
    let api = `http://www.omdbapi.com/?s=${name}&apikey=2a0795e2`

    let response = await fetch(api)

    let data = await response.json()
    console.log('data: ', data);
    return data

}

function appendMovies(movies) {
    mov_div.innerHTML = null

    movies.forEach(({Title}) => {
        

        let p = document.createElement('p')
        p.innerText = Title

        mov_div.append(p)

    });
}



async function main() {
    
    let {Search} = await searchMovie()
    //console.log('search: ', Search);

    appendMovies(Search)
}



function throttleFunction(func,delay) {
    
    if (timer_id) {
        return 
    }

    timer_id = setTimeout(() => {
        console.log('fireed')
        func()
        timer_id = undefined
    },delay)
}