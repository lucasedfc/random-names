const messages = [
  "Charles",
  "Michael",
  "Phyllis",
  "Toby",
  "Pam",
  "Jim",
  "Roy",
  "Kelly",
  "Dwight",
  "Oscar",
  "Angela",
  "Ryan",
  "Kevin",
  "Rob",
  "Laura",
  "Mose",
  "Molly",
  "Jan",
];

const randomMessages = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMessages };
