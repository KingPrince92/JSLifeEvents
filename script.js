const myName = "Milo";
let myAge = 30;
const myBirthday = "June 6th";
let pinapplePizza = true;
let lifeEvents = [
  "I live in Mt. Clemens, MI",
  "I have two cats",
  "I bought a house in 2021.",
  "I love to play video games.",
];

if (pinapplePizza) {
  console.log(
    `My ${myName} and I like pineapples on pizza. I am currently ${myAge} years old ad my birthday is on ${myBirthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${myAge} years old and my birthday is on ${myBirthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber != 5) {
    console.log(`${randomNumber} !==5`);
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
