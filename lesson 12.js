const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотреоли?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};
 
const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt ('На сколько оцениваете его',''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt ('На сколько оцениваете его','');
      12344.s
      
      personalMovieDB.movies[a] = b;  
      personalMovieDB.movies[c] = d;
      
      console.log(personalMovieDB);