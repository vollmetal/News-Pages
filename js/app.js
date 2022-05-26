const newsSourceDropdown = document.getElementById('newsSourceDropdown')
const newsArticles = document.getElementById('newsArticles')
const newsHeader = document.getElementById('newsHeader')

let newsSources = []
let articlesBySource = []
let selectedSource = 0


newsSources = sources.sources.map(function (source) {
    return source
})

newsSources.push('ALL')

for (let index = 0; index < newsSources.length; index++) {
    articlesBySource[index] = news.articles.filter(function (article) {
        return article.source.id == newsSources[index].id || article.source.name == newsSources[index].name
    })


}

console.log(newsSources.length)
console.log(articlesBySource)

function populateNewsSources() {
    let tempSourceContainer = []
    for (let index = 0; index < newsSources.length; index++) {
        if (newsSources[index] == 'ALL') {
            tempSourceContainer.push(`<option value="${index}">
          ${'All News'}
    </option>`)
        }
        else {
            if (articlesBySource[index].length > 0) {
                tempSourceContainer.push(`<option value="${index}">
          ${newsSources[index].name}
    </option>`)
            }

        }

    }

    newsSourceDropdown.innerHTML = tempSourceContainer.join('')
    newsSourceDropdown.addEventListener('change', function () {
        selectedSource = newsSourceDropdown.value
        if (newsSources[selectedSource] == 'ALL') {
            newsHeader.innerHTML = 'Current News'
        }
        else {
            newsHeader.innerHTML = newsSources[selectedSource].name
        }

        console.log(selectedSource)
        console.log(newsSources[selectedSource])
        populateArticles()
    })
}

function populateArticles() {
    let tempArticleContainer = []
    console.log(articlesBySource[selectedSource].length)
    for (let index = 0; index < articlesBySource[selectedSource].length; index++) {
        let article = articlesBySource[selectedSource][index]
        let link = ''
        let description = ''
        let author = ''
        let publishedAt = ''
        let content = ''
        let title = ''
        let image = ''

        console.log(article.url);


        link = `<a href="${article.url ?? '#'}" class="card-link">Webpage</a>`;
        description = `<p class="card-text">${article.description ?? "No description"}</p>`
        content = `<p class="card-text">${article.content ?? "No Text"}</p>`
        title = `<h5 class="card-title">${article.title ?? ''}</h5>`
        author = `<h5 class="card-subtitle mb-2 text-muted">${article.author ?? 'Anonymous'}</h5>`
        publishedAt = `<h5 class="card-subtitle mb-2 text-muted">${article.publishedAt ?? 'Anonymous'}</h5>`
        image = `<img src="${article.urlToImage ??'images/placeholder404.jpg'}" class="card-img-top" alt="images/placeholder404.jpg"> `

        tempArticleContainer.push(`<div class="card" style="width: 18rem;">
    ${image}
    <div class="card-body">
        ${title}
        ${author}
        ${publishedAt}
        ${description}
        ${content}
        ${link}

    </div>
  </div>`)
    }
    newsArticles.innerHTML = tempArticleContainer.join('')

}


populateNewsSources()

selectedSource = newsSources.length - 1
newsHeader.innerHTML = 'Current News'
newsSourceDropdown.value = selectedSource
console.log(selectedSource)
console.log(newsSources[selectedSource])
populateArticles()

