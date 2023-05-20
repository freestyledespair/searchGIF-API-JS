const form = document.querySelector("#search")
const input = document.querySelector("#inp")
const output = document.querySelector(".output")
const select = document.querySelector("#count")

const API = "https://api.giphy.com/v1/gifs/search?"
const key = "api_key=ncM68voPiMszIinn8lhE2s4aldIAdM1R"
const limit = "&limit="
const params = "&q="

const searchGiphy = async () => {
    let url = API + key + limit + select.value + params + input.value
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response.data);
    input.value = ""
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchGiphy()
})

const renderGiphy = (data) => {
    output.innerHTML = ""       // обнуляет output
    data.forEach(item => {
        console.log(item);
        const card = document.createElement("div")
        card.classList = "cardcard"
        const iframe = document.createElement("iframe")
        iframe.src = item.embed_url
        const title = document.createElement("h2")
        title.title = item.title
        title.textContent = item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title

        card.append(iframe, title)
        output.append(card)
    });
}