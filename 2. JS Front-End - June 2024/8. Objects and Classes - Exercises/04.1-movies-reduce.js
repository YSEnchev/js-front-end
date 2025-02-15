function solve(inputArr) {
  inputArr
    .reduce((acc, curr) => {
      if (curr.startsWith('addMovie')) {
        const [movieName] = curr.split('addMovie ').filter(Boolean);
        acc.push({
          name: movieName,
        });
      } else if (curr.includes('directedBy')) {
        const [movieName, director] = curr
          .split(' directedBy ')
          .filter(Boolean);
        const movie = acc.find((x) => x.name === movieName);

        if (movie?.name) {
          movie.director = director;
        }
      } else if (curr.includes('onDate')) {
        const [movieName, date] = curr.split(' onDate ').filter(Boolean);
        const movie = acc.find((x) => x.name == movieName);

        if (movie?.name) {
          movie.date = date;
        }
      }
      return acc;
    }, [])
    .filter((x) => x.name && x.director && x.date)
    .forEach((movie) => {
      console.log(JSON.stringify(movie));
    });
}

solve([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
]);
