// This document mocks a movie database, you can change it however you want,
// but I advise you to follow the interface, so you don't 
// break stuff unintentionally

export interface Movie {
  slug: string;
  title: string;
  desc: string;
  releaseYear: number;
  poster: string;
  showTime: string;
  room: string;
}

export const MovieList: Movie[] = [
  {
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    poster: "https://image.tmdb.org/t/p/original/y3ULnBxPeEsUmgK2hSvFkzkIpYF.jpg",
    showTime: "Monday, 18:30",
    room: "Screen 1" 
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    desc: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    releaseYear: 2008,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F17257718%2Fr%2Fil%2Ff4d506%2F3198058192%2Fil_1140xN.3198058192_nm71.jpg&f=1&nofb=1&ipt=e68b8eab0df2bd0f4c33bdfe80afefc0225488bae9debfbd40a223346465d886&ipo=images",
    showTime: "Friday, 20:00",
    room: "Screen 2"
  },
  {
    slug: "inception",
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    releaseYear: 2010,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflxt.tmsimg.com%2Fassets%2Fp7825626_p_v8_af.jpg&f=1&nofb=1&ipt=b7d70987d965f1612f865725c565f3bc6a3feefb740d76274da4cb0b7a6dae32&ipo=images",
    showTime: "Wednesday, 19:00",
    room: "Screen 1"
  },
  {
    slug: "im-still-here",
    title: "I'm Still Here",
    desc: "A deeply emotional and introspective journey of self-discovery, following a protagonist grappling with life's challenges and the search for meaning in a chaotic world.",
    releaseYear: 2024,
    poster: "https://images.justwatch.com/poster/320209239/s718/im-still-here-2024.jpg",
    showTime: "Thursday, 21:00",
    room: "Screen 1"
  }
];
