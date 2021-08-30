const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('country');
    for (const country of countries) {
        const div = document.createElement('div');
        div.classList.add('style-country');
        const h3 = document.createElement('h3');
        h3.innerText = `${country.name}`;
        div.appendChild(h3);
        const p = document.createElement('p');
        div.appendChild(p);
        const currencies = country.currencies;
        for (const currencie of currencies) {
            p.innerText = `Capital : ${country.capital}\n Region : ${country.region}\n Currencie : ${currencie.name}`;
        }
        countriesDiv.appendChild(div);
    }
}