console.log('This is Newz');
// 105bc4968a344291826227b209247139

let source = 'bbc-news'
let apiKey = '105bc4968a344291826227b209247139'
let newsAccordian = document.getElementById('newsAccordian');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true)
xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function(){
    if (this.status === 200){
        let json = JSON.parse(this.responseText);
        //console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
        console.log(element);
            news= `
                <div class="card">
                    <div class="card-header" id="heading${index}">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}: </b>${element["title"]}
                                            </button>
                            </h5>
                </div>

                    <div id="collapse${index}" class="collapse
                    " aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                                ${element["content"]}.<a href=${element["url"]} target="_blank">Read more here</a>
                            </div>
                    </div>
                </div>`
            newsHtml += news    
        })
        newsAccordian.innerHTML = newsHtml;

    }
    else{
        console.log('Some Error Occured');
    }
}
xhr.send()



