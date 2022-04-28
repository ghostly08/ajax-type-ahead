const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint) // at this point we dont know what kind of data we have.
  .then(blob => blob.json()) //here we are accessing to json data(desplegable de la consola) throught blob. Así conseguimos una super array.
  .then(data => cities.push(...data));//Estamos empujando la data a nuestra array cities. usamos los "..." para que la data spread into the cities array

function findMatches(wordToMatch, cities) {
  return cities.filter(place => { //filter the matches (place is refered to both option cities and states)

    //here we figure out if the cities matches what was search
    const regex = new RegExp(wordToMatch, 'gi'); //wordToMatch here is refered to words for search and 'gi' = 'g'lobal(busca en toda la string), 'i'nsensitive = uper and lowercase.
    return place.city.match(regex) || place.state.match(regex);
  })
};

function displayMatches() { //To display the resolts while we are typing
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>
    `
  }).join(''); //for the order in whitch each element displays.
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search'); //Accessing to the classes
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
