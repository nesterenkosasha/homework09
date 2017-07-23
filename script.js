
function Post (title,  author,  createdAt,  likes, content ){

    const wholeArticle = document.createElement("article")    
    wholeArticle.classList.add("box")

    const titleElement = document.createElement("div")
    titleElement.classList.add("forTitle")
    titleElement.innerHTML = title

    let description = document.createElement("div")
    description.classList.add("media")
    description.innerText = ` ${author}
        ${createdAt}`

    const buttonM = document.createElement("button")
    buttonM.classList.add("button")
    buttonM.classList.add("is-primary")
    const b = document.createTextNode(`Like  ${likes}`)
    buttonM.appendChild(b)

    const contentElement = document.createElement("div")
    contentElement.classList.add("content")
    contentElement.innerHTML = content

    wholeArticle.appendChild(titleElement)
    wholeArticle.appendChild(buttonM)
    wholeArticle.appendChild(description)
    wholeArticle.appendChild(contentElement)
    
    this.wholeArticle = wholeArticle
}
Post.prototype.add = function(element){
    element.prepend(this.wholeArticle)
}

let titles = ["Animal", "Fruit", "Fish", "Tree"]
let authors = ["Cat", "Lemon", "Salmon", "Apple-tree"]
let contents = ["Nice", "Wonderful", "Good", "Better"]

function refresh (){
    for(let i = 0 ; i < 5 ; ++i){
      const post = new Post(
         titles[+(Math.random()*2).toFixed(0)],
         authors[+(Math.random()*2).toFixed(0)], 
         new Date(), 
        `${(Math.random()*1000).toFixed(0)}`,
        contents[+(Math.random()*2).toFixed(0)])
        post.add(document.getElementsByTagName("section")[0])}}

function Timer (ms){
    this.ms = ms
    this.interval = null
}
Timer.prototype.start = function(callback){
    this.interval = setInterval(callback, this.ms)
    return this
}
Timer.prototype.stop = function(){
    clearInterval(this.interval)
    return this
}
Timer.prototype.stopAfter = function(ms, callback){
    setTimeout(callback, ms)
    return this
}
const timer = new Timer(1000)
timer.
    start(function(){
        refresh()
    })
    .stopAfter(15000, timer.stop.bind(timer))