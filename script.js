//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'AC/DC'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];
  
  // Function to remove articles from a band name
  function removeArticles(name) {
    const words = name.split(' ');
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  }
  
  // Sort the band names without articles
  const sortedBandNames = bandNames.sort((a, b) => {
    const bandA = removeArticles(a);
    const bandB = removeArticles(b);
    return bandA.localeCompare(bandB);
  });

  // Display the sorted band names inside the 'band' <ul> element
  const ulElement = document.getElementById('band');
  sortedBandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

sortBandNames(bandNames);

