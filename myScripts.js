const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint) // at this point we dont know what kind of data we have.
  .then(blob => blob.json()) //here we are accessing to json data(desplegable de la consola) throught blob. Así conseguimos una super array.
  .then(data => cities.push(...data));//Estamos empujando la data a nuestra array cities. usamos los "..." para que la data spread into the cities array
