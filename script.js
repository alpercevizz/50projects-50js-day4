const text = document.querySelector("#text");
const btn = document.querySelector("#jokeBtn");

btn.addEventListener("click", getJokes);

async function getJokes() {
    const url = await fetch("https://icanhazdadjoke.com/", {
        headers:  {
            Accept: 'application/json',
        },
    });
    const urlJSON = await url.json();
    text.innerHTML = urlJSON.joke;
}