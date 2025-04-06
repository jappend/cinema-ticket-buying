// This document mocks a movie database, you can change it however you want,
// but I advise you to follow the interface, so you don't 
// break stuff unintentionally

export interface Movie {
  slug: string;
  title: string;
  desc: string;
  releaseYear: number;
  showTime: string;
  room: string;
}

export const MovieList: Movie[] = [
  {
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    showTime: "Monday, 18:30",
    room: "Screen 1" 
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    desc: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    releaseYear: 2008,
    showTime: "Friday, 20:00",
    room: "Screen 2"
  },
  {
    slug: "inception",
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    releaseYear: 2010,
    showTime: "Wednesday, 19:00",
    room: "Screen 3"
  }
];
