const quotesLoad = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
quotesLoad();
const displayQuotes = data => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = data.quote;
}