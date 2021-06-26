var data;
var topHead = document.getElementById("topHead");
let catagory

async function main() {
  data = await getNews();
  console.log("data: ", data);
  //showButtons()
  showData();
}

main();

async function getNews() {
  let country = document.getElementById("country").value;
  catagory = document.querySelector('input[type="radio"]:checked').value;
  console.log('catagory: ', catagory);
  console.log('country: ', country);
  let api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${catagory}&apiKey=bb087c98103a4247a88b7aea6b911876`;
  let promise = await fetch(api);
  data = await promise.json();
  // console.log('data: ', data.articles);
  return data.articles;
}


function showData() {

  topHead.innerHTML = ''
  let page_data = data.slice(1, data.length);
  page_data.forEach(function (el) {
    let topHeadline = document.createElement("h1");
    topHeadline.innerText = el.title;

    console.log("topHeadline: ", topHeadline);

    let div = document.createElement("div");
    div.setAttribute('class', 'items')
    
    let image = document.createElement('img')
    image.src = el.urlToImage

    let desc = document.createElement('p');
    desc.innerHTML = el.description
    desc.setAttribute('class','description')

    let publishedAt = document.createElement('p');
    publishedAt.setAttribute('class','publishedAt')
    publishedAt.innerHTML = el.publishedAt

    let content = document.createElement('p');
    content.setAttribute('class','content')
    content.innerHTML = el.content

    let source = document.createElement('p');
    source.setAttribute('class','source')
    source.innerHTML = `source:${el.source.name}`

    let heading = document.getElementById('heading');
    heading.innerText = `${catagory} Articles` 

    div.append(topHeadline,source,publishedAt,desc,image,content);


    topHead.append(div);
  });
}
