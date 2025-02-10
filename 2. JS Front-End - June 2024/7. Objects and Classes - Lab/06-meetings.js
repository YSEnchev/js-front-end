function solve(input) {
  const meetingsList = {};

  for (const element of input) {
    const [day, name] = element.split(' ');

    if (!meetingsList[day]) {
      meetingsList[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const day in meetingsList) {
    console.log(`${day} -> ${meetingsList[day]}`);
  }
}

solve([
  'Friday Bob',
  'Saturday Ted',
  'Monday Bill',
  'Monday John',
  'Wednesday George',
]);
