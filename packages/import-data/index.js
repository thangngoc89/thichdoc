const _ = require("lodash");
const { Lokka } = require("lokka");
const { Transport } = require("lokka-transport-http");
const fs = require("mz/fs");

// set timezone to UTC (needed for Graphcool)
process.env.TZ = "UTC";

const client = new Lokka({
  transport: new Transport(
    "https://api.graph.cool/simple/v1/ciyn3wzpt38x30132xphqvhv4"
  )
});

const generateSlug = str => {
  const hat = require("hat");
  const slug = require("speakingurl");

  return slug(str) + "-" + hat().substring(0, 2);
};

const createBook = book => {
  return client
    .mutate(
      `{
    book: createBook(
      author: "${book.author}"
      cover: "${book.img}"
      linkTiki: "${book.link}"
      name: "${book.name}"
      slug: "${generateSlug(book.name)}"
    ) {
      id
    }
  }`
    )
    .then(res => res.book.id);
};

const createUser = async (user, i) => {
  console.log(
    `mutation user${i}{
    user: createUser(
      isFigure: true
      isFigureClaimed: false
      avatar: ${JSON.stringify(user.avatar)}
      bio: ${JSON.stringify(user.bio)}
      job: ${JSON.stringify(user.job)}
      name: ${JSON.stringify(user.name)}
      username: ${JSON.stringify(user.username)}
    ) {
      id
    }
  }`
  );
  const result = await client.mutate(
    `{
    user: createUser(
      isFigure: true
      isFigureClaimed: false
      avatar: ${JSON.stringify(user.avatar)}
      bio: ${JSON.stringify(user.bio)}
      job: ${JSON.stringify(user.job)}
      name: ${JSON.stringify(user.name)}
      username: ${JSON.stringify(user.username)}
    ) {
      id
    }
  }`
  );

  return result.user.id;
};

// maps from old imported id (data set) to new generated id (Graphcool)
const createBooks = async rawBooks => {
  const booksIds = await Promise.all(rawBooks.map(createBook));
  return _.zipObject(rawBooks.map(book => book.link), booksIds);
};

const createUsers = async rawUsers => {
  const userIds = await Promise.all(rawUsers.map(createUser));

  return _.zipObject(rawUsers.map(u => u.id), userIds);
};

const connectMoviesAndActorsMutation = (actorId, movieId) => client.mutate(
  `{
    addToActorMovies(actorsActorId: "${actorId}" moviesMovieId: "${movieId}") {
      # we don't need this but we need to return something
      moviesMovie {
        id
      }
    }
  }`
);

const main = async () => {
  try {
    const data = require("../../data/data.json");

    const allBooks = _.chain(data)
      .flatMap(user => user.books)
      .uniqBy(book => book.link)
      .value();

    // create books
    // const bookIdMap = await createBooks(allBooks);
    // console.log(`Created ${Object.keys(bookIdMap).length} books`);
    // await fs.writeFile("./bookIdMap.json", JSON.stringify(bookIdMap, null, 2));
    // create users
    const userIdMap = await createUsers(data);
    console.log(`Created ${Object.keys(userIdMap).length} movies`);
    await fs.writeFile("./userIdMap.json", JSON.stringify(userIdMap, null, 2));

    process.exit(0);
    // connect movies and actors
    // const mutations = _.chain(rawMovies)
    //   .flatMap(rawMovie => {
    //     const newActorIds = rawMovie.actors.map(actor => actorIdMap[actor.id]);
    //     const newMovieId = movieIdMap[rawMovie.id];
    //     return newActorIds.map(newActorId => ({ newActorId, newMovieId }));
    //   })
    //   .map(({ newActorId, newMovieId }) =>
    //     connectMoviesAndActorsMutation(newActorId, newMovieId))
    //   .value();
    // await Promise.all(mutations);
    // console.log(`Created ${mutations.length} edges between actors and movies`);
  } catch (err) {
    throw err;
  }
};

main().catch(e => console.error(e));
