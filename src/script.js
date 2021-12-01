// const fetchCoins = async () => {
//     const url = 'https://api.coincap.io/v2/assets';

// const { fetchCoins } = require("./teste");

//     const coins = await fetch(url)
//         .then((response) => response.json())
//         .then((data) => data.data)
//         .catch((error) => error.toString());

//     return coins;
// }

const setCoins = async () => {
    const coins = await fetchCoins();
    console.log(coins);
    const coinsList = document.getElementById('coins-list');

    coins
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            newLi.className = 'crypto';
            newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
            coinsList.appendChild(newLi);
        });

    coinsList.addEventListener('click', (event) => {
        const newOl = document.getElementById('new-list');
        newOl.appendChild(event.target);
        localStorage.setItem('favoriteCoinInfo', newOl.innerHTML);
    });

}

window.onload =  () => {
    setCoins();

    try {
        const newOl = document.querySelector('#new-list');
        newOl.innerHTML = localStorage.getItem('favoriteCoinInfo');
    } catch (error) {
        console.log(error);
    }
}

