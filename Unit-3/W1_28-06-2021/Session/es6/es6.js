let videos_div = document.getElementById('videos')

async function searchVideos() {
    let query = document.getElementById('query').value
    let api = `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyDtrTlpqufkiPsNqQKAJCRcWCPIBFXPw3s&maxResults=10`
    let promise = await fetch(api)
    let data = await promise.json()
    let items = data.items
    console.log('data: ', data.items);
    appendVideos(data.items)

    items = items.filter((el) => {
        return el.id.videoId != undefined;
    })
}


function appendVideos(videos) {
    videos_div.innerHTML = null
    videos.forEach(({ id: { videoId } }) => {
        
        let div = document.createElement('div');
        div.innerHTML =`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            videos_div.append(div)
    });
}