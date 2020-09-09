// Movies.findOne({ where: { name: "Project X" } }).then("success", function (
//   movie
// ) {
//   Actors.findOne({ where: { fname: "Thomas" } }).then("success", function (
//     actor
//   ) {
//     movie.setActors(actor,);
//     actor.setMovies(movie);
//   });
// });
// const movies = await Actors.findAll({ include: Movies });
// const actors = await Movies.findAll({ include: Actors });
// console.log(JSON.stringify(movies, null, 2));
// console.log(JSON.stringify(actors, null, 2));
// // console.log(movies.fname);

const amidala = await Actors.create({ fname: "abcde", lname: "1000" });
const queen = await Movies.create({ name: "bcnzbchjsd" });
await amidala.addMovies(queen);
const hisMovie = await amidala.getMovies();
const result = await Actors.findOne({
  where: { fname: "abcde" },
  include: Movies,
});
// console.log(result.get());
console.log(hisMovie);

res.render("homePage");
