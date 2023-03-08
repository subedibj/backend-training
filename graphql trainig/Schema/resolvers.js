const { userList, movieList } = require("../dummyData");
const _ = require("lodash");
const resolvers = {
  Query: {
    // user resolvers
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },
    // movie resolvers
    movies: () => {
      return movieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(movieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        movieList,
        (movie) =>
          movie.yearOfPublication >= 2019 && movie.yearOfPublication <= 2020
      );
    },
  },
};

module.exports = { resolvers };
