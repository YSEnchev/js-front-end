function solve(input) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
    // toString() {
    //   console.log(this.name);
    // }
  }

  let songs = [];
  let numberOfSong = input.shift();
  let typeSong = input.pop();

  for (let i = 0; i < numberOfSong; i++) {
    let [type, name, time] = input[i].split('_');
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === 'all') {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

//   new Songs = (type, name, time)

//   input.forEach((entry) => {
//     const [type, name, time] = entry.split('_');
//   });
// }

// solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
solve([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite',
]);
