var data;
var topHead = document.getElementById("topHead");

async function main() {
  data = await getNews();
  console.log("data: ", data);
  //showButtons()
  showData();
}

//main();

async function getNews() {
  let country = document.getElementById("country").value;
  //console.log('country: ', country);
  let api = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=bb087c98103a4247a88b7aea6b911876`;
  let promise = await fetch(api);
  data = await promise.json();
  // console.log('data: ', data.articles);
  return data.articles;
}


function showData() {

  topHead.innerHTML = ''
  let page_data = data.slice(1, 11);
  page_data.forEach(function (el) {
    let topHeadline = document.createElement("h1");
    topHeadline.innerText = el.title;

    console.log("topHeadline: ", topHeadline);

    let div = document.createElement("div");
    div.setAttribute('class', 'items')
    
    let image = document.createElement('img')
    image.src = el.urlToImage

    div.append(topHeadline,image);


    topHead.append(div);
  });
}
