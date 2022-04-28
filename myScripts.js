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
