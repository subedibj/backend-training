const userList = [
  {
    id: 1,
    name: "john",
    userName: "john",
    age: 18,
    nationality: "CANADA",
    friends: [
      {
        id: 1,
        name: "kelly",
      },
    ],
  },
  {
    id: 2,
    name: "jony",
    userName: "jony",
    age: 22,
    nationality: "BRAZIL",
    friends: [
      {
        id: 1,
        name: "pedro",
      },
    ],
  },
  {
    id: 3,
    name: "will",
    userName: "will",
    age: 16,
    nationality: "INDIA",
  },
  {
    id: 4,
    name: "harry",
    userName: "harry",
    age: 24,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "dennis",
    userName: "dennis",
    age: 25,
    nationality: "CHILE",
  },
];

const movieList = [
  {
    id: 1,
    name: "prakash",
    yearOfPublication: 2022,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "radha",
    yearOfPublication: 2022,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "kabaddi",
    yearOfPublication: 2020,
    isInTheaters: false,
  },
  {
    id: 4,
    name: "loot",
    yearOfPublication: 2022,
    isInTheaters: false,
  },
  {
    id: 5,
    name: "pashupati prasad",
    yearOfPublication: 2019,
    isInTheaters: false,
  },
];

module.exports = { userList, movieList };
