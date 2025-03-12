function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  const inputTextArea = document.querySelector('#inputs textarea');
  const outputBestRestaurants = document.querySelector(
    '#outputs #bestRestaurant p'
  );
  const workersElement = document.querySelector('#outputs #workers p');

  function onClick() {
    const restaurants = JSON.parse(inputTextArea.value).map((data) => {
      const [restaurantName, workerData] = data.split(' - ');

      const workers = workerData.split(', ').map((workerData) => {
        const [name, salary] = workerData.split(' ');
        return {
          name,
          salary: Number(salary),
        };
      });
      return {
        restaurantName,
        workers,
      };
    });

    console.log(restaurants);
  }
}
