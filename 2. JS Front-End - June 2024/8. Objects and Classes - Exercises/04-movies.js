function solve(inputCommands) {
  const dataBaseMovie = [];

  inputCommands.forEach((command) => {
    if (command.startsWith('addMovie')) {
      const [name] = command.split('addMovie').filter(Boolean); // с filter чистим всики празни места след split-а
      dataBaseMovie.push({ name });
    } else if (command.includes('directedBy')) {
      const [name, director] = command.split(' directedBy ').filter(Boolean);

      const movie = dataBaseMovie.find((x) => x?.name === name);

      if (movie?.name) {
        movie.director = director;
      }
    } else if (command.includes('onDate')) {
      const [name, date] = command.split(' onDate ').filter(Boolean);

      const movie = dataBaseMovie.find((x) => x?.name === name);

      if (movie?.name) {
        movie.date = date;
      }
    }
  });

  dataBaseMovie.forEach((x) => console.log(x));
}

solve([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
