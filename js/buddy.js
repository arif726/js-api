const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBudddy(data))
}
loadBuddy();

const displayBudddy = (data) => {
    const buddies = data.results;
    const div = document.getElementById('buddy');
    for (const buddy of buddies) {
        const createP = document.createElement('p');
        createP.innerText = `
        Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} `;
        div.appendChild(createP);
    }
}